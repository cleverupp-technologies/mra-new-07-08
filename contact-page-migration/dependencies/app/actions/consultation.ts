"use server";

/**
 * Server Action for Guided Consultation Requests & Resend Integration
 *
 * Handles team notification dispatch + visitor acknowledgement email using Resend API.
 */

export interface GuidedConsultationPayload {
  topic?: string;
  requirement?: string;
  businessName?: string;
  industry?: string;
  name?: string;
  preferredContact?: "Phone Call" | "WhatsApp" | "Email" | "Phone";
  contactValue?: string;
  phone?: string;
  email?: string;
  organisation?: string;
  need?: string;
  situation?: string;
  website_url?: string; // Honeypot field
  sourcePage?: string;
}

export interface GuidedConsultationResponse {
  status: "success" | "error" | "validation_error" | "unconfigured";
  message: string;
  fieldErrors?: Record<string, string>;
}

export async function submitGuidedConsultation(
  payload: GuidedConsultationPayload
): Promise<GuidedConsultationResponse> {
  console.log("Form submitted");
  console.log("Request received");

  const honeypot = (payload.website_url || "").trim();

  // 1. Honeypot Check (Bot Protection)
  if (honeypot.length > 0) {
    console.log("Honeypot field filled - bot submission rejected");
    return {
      status: "unconfigured",
      message: "Online consultation submission is undergoing configuration. Please contact our office directly.",
    };
  }

  // 2. Extract Data & Normalize
  const topic = (payload.topic || payload.need || "General Advisory").trim();
  const requirement = (payload.requirement || payload.situation || "").trim();
  const businessName = (payload.businessName || payload.organisation || "").trim();
  const industry = (payload.industry || "").trim();
  const name = (payload.name || "").trim();
  const preferredContact = payload.preferredContact || "Phone Call";
  
  const rawPhone = (payload.phone || payload.contactValue || "").trim();
  const rawEmail = (payload.email || payload.contactValue || "").trim();

  const phone = preferredContact !== "Email" ? rawPhone : (rawPhone || "Not Provided");
  const email = (preferredContact === "Email" || rawEmail.includes("@")) ? rawEmail : "";

  const sourcePage = (payload.sourcePage || "").trim() || "Website Consultation Flow";

  // 3. Validation
  const fieldErrors: Record<string, string> = {};

  if (!topic) {
    fieldErrors.topic = "Consultation topic is required.";
  }
  if (!requirement) {
    fieldErrors.requirement = "Requirement details are required.";
  }
  if (!name) {
    fieldErrors.name = "Full name is required.";
  }
  if (preferredContact === "Email" && (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))) {
    fieldErrors.email = "A valid email address is required.";
  }
  if (preferredContact !== "Email" && (!phone || phone.length < 7)) {
    fieldErrors.phone = "A valid phone/WhatsApp number is required.";
  }

  if (Object.keys(fieldErrors).length > 0) {
    console.log("Validation errors occurred:", fieldErrors);
    return {
      status: "validation_error",
      message: "Please complete all required fields.",
      fieldErrors,
    };
  }

  // 4. Environment Variables
  const resendApiKey = process.env.RESEND_API_KEY;
  const receiverEmail =
    process.env.CONSULTATION_RECEIVER_EMAIL ||
    process.env.CONTACT_RECIPIENT_EMAIL ||
    "office@maneshrineesh.com";
  const fromEmail =
    process.env.CONSULTATION_FROM_EMAIL ||
    process.env.CONTACT_FROM_EMAIL ||
    "Manesh Rineesh & Associates <onboarding@resend.dev>";

  console.log("Environment loaded", {
    hasApiKey: Boolean(resendApiKey),
    receiverEmail,
    fromEmail,
  });

  if (!resendApiKey) {
    console.warn("RESEND_API_KEY environment variable is not configured.");
    return {
      status: "success",
      message: "Thank you. Your consultation request has been received.",
    };
  }

  const now = new Date();
  const timestamp = now.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }) + " " + now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  }) + " IST";

  // 5. Construct Team Email Notification
  const teamEmailText = [
    "New Consultation Request",
    "==================================================",
    "",
    `Submitted At:`,
    `${timestamp}`,
    "",
    `Topic`,
    `${topic}`,
    "",
    `Requirement`,
    `${requirement}`,
    "",
    `Business Name`,
    `${businessName || "Not Provided"}`,
    "",
    `Industry`,
    `${industry || "Not Selected"}`,
    "",
    `Contact Name`,
    `${name}`,
    "",
    `Preferred Contact Method`,
    `${preferredContact}`,
    "",
    `Phone`,
    `${phone || "Not Provided"}`,
    "",
    `Email`,
    `${email || "Not Provided"}`,
    "",
    `Source`,
    `${sourcePage}`,
    "==================================================",
  ].join("\n");

  try {
    console.log("Calling Resend...");
    // Dispatch Team Email
    const teamResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [receiverEmail],
        reply_to: email || undefined,
        subject: `New Consultation Request — ${topic}`,
        text: teamEmailText,
      }),
    });

    const teamData = await teamResponse.json().catch(() => null);
    console.log("Resend response:", teamData);

    if (!teamResponse.ok) {
      console.error("Resend API team notification failed:", teamResponse.status, teamData);
    }

    // 6. Send Visitor Acknowledgement Email (if email provided)
    // NOTE: When using onboarding@resend.dev, Resend restricts sending to external emails.
    // Domain verification at resend.com/domains is required to send to visitor emails.
    if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      const visitorEmailText = [
        `Hello ${name},`,
        "",
        "Thank you for contacting Manesh Rineesh & Associates.",
        "",
        "We've received your consultation request regarding:",
        "",
        `${topic}`,
        "",
        "Our team will review your request and contact you through your preferred communication method within one business day.",
        "",
        "Regards,",
        "",
        "Manesh Rineesh & Associates",
        "Chartered Accountants",
        "60/4798, Third Floor, Span Hotel Complex,",
        "Jail Road, Kozhikode – 673004, Kerala, India",
        "Phone: +91 95675 23620",
      ].join("\n");

      console.log("Dispatching visitor acknowledgement email to:", email);
      const visitorResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: fromEmail,
          to: [email],
          subject: "We've received your consultation request",
          text: visitorEmailText,
        }),
      });

      const visitorData = await visitorResponse.json().catch(() => null);
      if (!visitorResponse.ok) {
        console.warn(
          "Visitor acknowledgement email not sent via Resend (Domain Verification needed for external recipients):",
          visitorResponse.status,
          visitorData
        );
      } else {
        console.log("Visitor acknowledgement email sent successfully:", visitorData);
      }
    }

    return {
      status: "success",
      message: "Thank you. Your consultation request has been received.",
    };
  } catch (error) {
    console.error("Failed to dispatch consultation email via Resend:", error);
    return {
      status: "error",
      message: "Unable to submit your request. Please try again.",
    };
  }
}
