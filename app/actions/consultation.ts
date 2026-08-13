"use server";

import { Resend } from "resend";

/**
 * Server Action for Guided Consultation Requests & Resend Integration
 *
 * Handles team notification dispatch + visitor acknowledgement email using Resend SDK.
 * Keeps API keys strictly server-side without exposing credentials to the client.
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
  debugInfo?: string;
}

export async function submitGuidedConsultation(
  payload: GuidedConsultationPayload
): Promise<GuidedConsultationResponse> {
  console.log("[Server Action] Consultation form submitted:", payload);

  const honeypot = (payload.website_url || "").trim();

  // 1. Honeypot Check (Bot Protection)
  if (honeypot.length > 0) {
    console.log("[Server Action] Honeypot field filled - bot submission rejected");
    return {
      status: "unconfigured",
      message: "Submission rejected by automated security checks.",
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
    console.log("[Server Action] Validation errors occurred:", fieldErrors);
    return {
      status: "validation_error",
      message: "Please complete all required fields.",
      fieldErrors,
    };
  }

  // 4. Server-Side Environment Variables Check
  const resendApiKey = process.env.RESEND_API_KEY;
  const receiverEmail =
    process.env.CONSULTATION_RECEIVER_EMAIL ||
    process.env.CONTACT_RECIPIENT_EMAIL ||
    "office@maneshrineesh.com";
  const fromEmail =
    process.env.CONSULTATION_FROM_EMAIL ||
    process.env.CONTACT_FROM_EMAIL ||
    "Manesh Rineesh & Associates <onboarding@resend.dev>";

  if (!resendApiKey) {
    console.warn(
      "[Resend API Error] RESEND_API_KEY environment variable is missing in server environment (.env.local)."
    );
    return {
      status: "unconfigured",
      message:
        "Email delivery is not configured. Please add RESEND_API_KEY to .env.local on the server.",
      debugInfo: "Missing RESEND_API_KEY environment variable",
    };
  }

  const now = new Date();
  const timestamp =
    now.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }) +
    " " +
    now.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    }) +
    " IST";

  // 5. Construct Team Email Notification Body
  const teamEmailText = [
    "New Guided Consultation Request",
    "==================================================",
    "",
    `Submitted At: ${timestamp}`,
    `Source Page:  ${sourcePage}`,
    "",
    `Topic:        ${topic}`,
    `Requirement:  ${requirement}`,
    "",
    `Business Name: ${businessName || "Not Provided"}`,
    `Industry:      ${industry || "Not Selected"}`,
    "",
    `Contact Name:            ${name}`,
    `Preferred Contact Method: ${preferredContact}`,
    `Phone / WhatsApp:        ${phone}`,
    `Email:                   ${email || "Not Provided"}`,
    "==================================================",
  ].join("\n");

  try {
    // 6. Dispatch Email via Resend SDK
    const resend = new Resend(resendApiKey);

    const teamResult = await resend.emails.send({
      from: fromEmail,
      to: [receiverEmail],
      replyTo: email || undefined,
      subject: `New Consultation Request — ${topic}`,
      text: teamEmailText,
    });

    if (teamResult.error) {
      console.error("[Resend API Error] Email dispatch failed:", teamResult.error);
      return {
        status: "error",
        message: `Resend API Error: ${teamResult.error.message}`,
        debugInfo: JSON.stringify(teamResult.error),
      };
    }

    console.log("[Resend API Success] Email dispatched successfully:", teamResult.data);

    // 7. Visitor Acknowledgement (if valid email provided & domain permits)
    if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      const visitorEmailText = [
        `Hello ${name},`,
        "",
        "Thank you for contacting Manesh Rineesh & Associates.",
        "",
        `We have received your consultation request regarding: "${topic}".`,
        "",
        "Our team will review your requirement and reach out via your preferred contact method within one business day.",
        "",
        "Regards,",
        "Manesh Rineesh & Associates",
        "Chartered Accountants",
        "Kozhikode, Kerala, India",
        "Phone: +91 95675 23620",
      ].join("\n");

      const visitorResult = await resend.emails.send({
        from: fromEmail,
        to: [email],
        subject: "We've received your consultation request",
        text: visitorEmailText,
      });

      if (visitorResult.error) {
        console.warn(
          "[Resend API Warning] Visitor acknowledgement email not sent:",
          visitorResult.error
        );
      }
    }

    return {
      status: "success",
      message: "Thank you. Your consultation request has been received.",
    };
  } catch (error: unknown) {
    const errMessage = error instanceof Error ? error.message : String(error);
    console.error("[Resend API Exception]:", errMessage);
    return {
      status: "error",
      message: `Server Error: ${errMessage}`,
    };
  }
}
