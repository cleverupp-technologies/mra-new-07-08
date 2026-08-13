"use client";

/**
 * ConsultationFlow — Final Consultation Flow & Resend Integration
 *
 * MR&A Guided Consultation Architecture:
 * - Step 1: "What brings you to MR&A?" (Topic selection cards, auto-advance ~300ms, zero Continue buttons)
 * - Step 2: "Tell us about your requirement" (Topic display, Requirement textarea*, optional Business Name, Industry dropdown + Premium "Continue →" button)
 * - Step 3: "How would you like us to reach you?" (Full Name*, Preferred Contact Method*, conditional input, ONLY CTA: "Request Consultation →" with loading state)
 * - Step 4 (Success): Gold outlined circle icon + "Thank you. Your consultation request has been received." + Summary Box + "What happens next" + "← Return to Website" text link.
 */

import React, { useState, useEffect, useRef } from "react";
import { submitGuidedConsultation } from "@/app/actions/consultation";

export interface ConsultationFlowProps {
  onClose?: () => void;
  isEmbedded?: boolean;
}

export const BUSINESS_SITUATIONS = [
  "Growth & Capital Expansion",
  "Working Capital & Cash Flow",
  "Tax & Compliance Strategy",
  "Audit & Assurance",
  "Virtual CFO",
  "Business Valuation & Transactions",
  "Starting a Business",
  "I'm Not Sure Yet",
] as const;

export const INDUSTRY_OPTIONS = [
  "Healthcare",
  "Manufacturing",
  "Real Estate",
  "Retail & Wholesale",
  "Textiles",
  "NBFC",
  "Education",
  "Pharma",
  "Other",
] as const;

export type PreferredContactMethod = "Phone Call" | "WhatsApp" | "Email";

export function ConsultationFlow({ onClose }: ConsultationFlowProps) {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [selectedTopic, setSelectedTopic] = useState<string>("");
  const [requirement, setRequirement] = useState<string>("");
  const [businessName, setBusinessName] = useState<string>("");
  const [industry, setIndustry] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");
  const [preferredMethod, setPreferredMethod] = useState<PreferredContactMethod>("Phone Call");
  const [contactValue, setContactValue] = useState<string>("");

  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const autoAdvanceTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (autoAdvanceTimerRef.current) clearTimeout(autoAdvanceTimerRef.current);
    };
  }, []);

  // Step 1: Topic Selection (Gold highlight + auto-advance ~300ms, NO Continue button)
  const handleTopicSelect = (topic: string) => {
    setSelectedTopic(topic);
    setErrorMessage(null);
    if (autoAdvanceTimerRef.current) clearTimeout(autoAdvanceTimerRef.current);
    autoAdvanceTimerRef.current = setTimeout(() => {
      setStep(2);
    }, 300);
  };

  // Step 2 Continue Button Handler (Manual progression with validation)
  const handleStep2Continue = () => {
    if (!requirement.trim()) {
      setErrorMessage("Please briefly describe your requirement to continue.");
      return;
    }
    setErrorMessage(null);
    setStep(3);
  };

  // Step 3 Submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedTopic) {
      setErrorMessage("Please select a topic.");
      setStep(1);
      return;
    }
    if (!requirement.trim()) {
      setErrorMessage("Please enter your requirement details.");
      setStep(2);
      return;
    }
    if (!fullName.trim()) {
      setErrorMessage("Please enter your full name.");
      return;
    }
    if (!contactValue.trim()) {
      setErrorMessage(
        `Please enter your ${
          preferredMethod === "Email"
            ? "email address"
            : preferredMethod === "WhatsApp"
            ? "WhatsApp number"
            : "phone number"
        }.`
      );
      return;
    }

    setErrorMessage(null);
    setIsSubmitting(true);

    try {
      const res = await submitGuidedConsultation({
        topic: selectedTopic,
        requirement: requirement.trim(),
        businessName: businessName.trim(),
        industry: industry,
        name: fullName.trim(),
        preferredContact: preferredMethod,
        contactValue: contactValue.trim(),
        phone: preferredMethod !== "Email" ? contactValue.trim() : "",
        email: preferredMethod === "Email" ? contactValue.trim() : "",
        sourcePage: "Floating Consultation Drawer",
      });

      if (res.status === "error") {
        setErrorMessage(res.message || "Unable to submit your request. Please try again.");
      } else {
        setStep(4);
      }
    } catch (err) {
      console.error("Submission error:", err);
      setErrorMessage("Unable to submit your request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setStep(1);
    setSelectedTopic("");
    setRequirement("");
    setBusinessName("");
    setIndustry("");
    setFullName("");
    setPreferredMethod("Phone Call");
    setContactValue("");
    setErrorMessage(null);
  };

  const handleReturnToWebsite = () => {
    if (onClose) {
      onClose();
    } else {
      handleReset();
    }
  };

  return (
    <div className="w-full space-y-5 animate-fadeIn font-sans text-slate-100 min-h-[420px] flex flex-col justify-between">
      
      {/* TOP PROGRESS INDICATOR (Steps 1 to 3) */}
      {step < 4 && (
        <div className="space-y-3 pb-3 border-b border-slate-800 shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 font-mono text-xs font-bold uppercase tracking-wider">
              <span className={step === 1 ? "text-[#FBBF24]" : "text-slate-500"}>Step 1</span>
              <span className="text-slate-600">&rarr;</span>
              <span className={step === 2 ? "text-[#FBBF24]" : "text-slate-500"}>Step 2</span>
              <span className="text-slate-600">&rarr;</span>
              <span className={step === 3 ? "text-[#FBBF24]" : "text-slate-500"}>Step 3</span>
            </div>

            {step > 1 && (
              <button
                type="button"
                onClick={() => {
                  setErrorMessage(null);
                  setStep((prev) => Math.max(prev - 1, 1) as 1 | 2 | 3);
                }}
                className="font-mono text-xs text-slate-400 hover:text-[#FBBF24] transition-colors cursor-pointer"
              >
                &larr; Back
              </button>
            )}
          </div>

          {/* PROGRESS BAR */}
          <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#FBBF24] transition-all duration-300 ease-out rounded-full"
              style={{ width: `${(step / 3) * 100}%` }}
            />
          </div>
        </div>
      )}

      {/* STEP CONTENT CONTAINER WITH FADE TRANSITION */}
      <div key={step} className="flex-1 flex flex-col justify-between animate-fadeIn">
        
        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            STEP 1 — CONSULTATION TOPIC (AUTO-ADVANCE ~300MS)
           ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        {step === 1 && (
          <div className="space-y-4 flex-1 flex flex-col justify-between">
            <div className="space-y-1">
              <h3 className="font-serif font-normal text-2xl text-white leading-snug">
                What brings you to MR&amp;A?
              </h3>
              <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed">
                Select the option that matches your current requirement.
              </p>
            </div>

            {errorMessage && (
              <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-medium">
                {errorMessage}
              </div>
            )}

            {/* TOPIC CARDS LIST */}
            <div className="space-y-2 pt-1 max-h-[380px] overflow-y-auto pr-1 custom-gold-scrollbar flex-1">
              {BUSINESS_SITUATIONS.map((topic) => {
                const isSelected = selectedTopic === topic;
                return (
                  <button
                    key={topic}
                    type="button"
                    onClick={() => handleTopicSelect(topic)}
                    className={`w-full text-left p-3.5 sm:p-4 rounded-xl border transition-all duration-200 cursor-pointer group flex items-center justify-between ${
                      isSelected
                        ? "bg-[#FBBF24]/10 border-[#FBBF24] text-[#FBBF24] font-medium shadow-md scale-[1.01]"
                        : "bg-slate-800/80 hover:bg-slate-800 border-slate-700/80 hover:border-[#FBBF24]/60 text-white"
                    }`}
                  >
                    <span className="font-serif text-sm sm:text-base leading-tight">
                      {topic}
                    </span>
                    <span
                      className={`text-sm transition-transform duration-200 ${
                        isSelected ? "text-[#FBBF24] translate-x-1" : "text-slate-400 group-hover:text-[#FBBF24] group-hover:translate-x-1"
                      }`}
                    >
                      &rarr;
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            STEP 2 — REQUIREMENT (REQUIRES PREMIUM CONTINUE BUTTON)
           ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        {step === 2 && (
          <div className="space-y-4 flex-1 flex flex-col justify-between">
            <div className="space-y-1">
              <h3 className="font-serif font-normal text-2xl text-white leading-snug">
                Tell us about your requirement
              </h3>
              <p className="font-sans text-xs text-slate-400">
                Topic: <span className="text-[#FBBF24] font-medium">{selectedTopic}</span>
              </p>
            </div>

            {errorMessage && (
              <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-medium">
                {errorMessage}
              </div>
            )}

            <div className="space-y-4 flex-1">
              {/* REQUIREMENT TEXTAREA */}
              <div className="space-y-1.5">
                <label className="font-mono text-[11px] font-bold uppercase tracking-wider text-slate-300 block">
                  REQUIREMENT *
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Briefly describe your business situation or the assistance you're looking for."
                  value={requirement}
                  onChange={(e) => setRequirement(e.target.value)}
                  className="w-full bg-slate-950/80 border border-slate-700/80 focus:border-[#FBBF24] rounded-lg p-3 text-white text-sm placeholder-slate-500 focus:outline-none transition-colors resize-none leading-relaxed"
                />
                <p className="font-sans text-xs text-slate-400 italic">
                  Example: We&apos;re planning to expand into another city and need advice on funding, GST implications, and compliance.
                </p>
              </div>

              {/* BUSINESS NAME (OPTIONAL) */}
              <div className="space-y-1">
                <label className="font-mono text-[11px] font-bold uppercase tracking-wider text-slate-300 block">
                  BUSINESS NAME (OPTIONAL)
                </label>
                <input
                  type="text"
                  placeholder="ABC Industries Pvt. Ltd."
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  className="w-full bg-slate-950/80 border border-slate-700/80 focus:border-[#FBBF24] rounded-lg p-3 text-white text-sm placeholder-slate-500 focus:outline-none transition-colors"
                />
              </div>

              {/* INDUSTRY DROPDOWN */}
              <div className="space-y-1">
                <label className="font-mono text-[11px] font-bold uppercase tracking-wider text-slate-300 block">
                  INDUSTRY
                </label>
                <select
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  className="w-full bg-slate-950/80 border border-slate-700/80 focus:border-[#FBBF24] rounded-lg p-3 text-white text-sm focus:outline-none transition-colors [&>option]:bg-slate-900 [&>option]:text-white"
                >
                  <option value="">Select Industry</option>
                  {INDUSTRY_OPTIONS.map((ind) => (
                    <option key={ind} value={ind}>
                      {ind}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* STEP 2 PREMIUM CONTINUE BUTTON (BOTTOM-RIGHT) */}
            <div className="pt-3 flex items-center justify-end border-t border-slate-800">
              <button
                type="button"
                onClick={handleStep2Continue}
                disabled={!requirement.trim()}
                className={`px-6 py-2.5 rounded-lg font-bold text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer flex items-center space-x-2 ${
                  requirement.trim()
                    ? "bg-[#FBBF24] hover:bg-amber-300 text-slate-950 shadow-md"
                    : "bg-slate-800 text-slate-500 cursor-not-allowed"
                }`}
              >
                <span>Continue</span>
                <span>&rarr;</span>
              </button>
            </div>
          </div>
        )}

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            STEP 3 — CONTACT DETAILS (ONLY SUBMISSION CTA)
           ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        {step === 3 && (
          <form onSubmit={handleSubmit} className="space-y-4 flex-1 flex flex-col justify-between">
            <div className="space-y-1">
              <h3 className="font-serif font-normal text-2xl text-white leading-snug">
                How would you like us to reach you?
              </h3>
              <p className="font-sans text-xs text-slate-400">
                Topic: <span className="text-[#FBBF24] font-medium">{selectedTopic}</span>
              </p>
            </div>

            {errorMessage && (
              <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-medium">
                {errorMessage}
              </div>
            )}

            <div className="space-y-4 flex-1">
              {/* FULL NAME */}
              <div className="space-y-1">
                <label className="font-mono text-[11px] font-bold uppercase tracking-wider text-slate-300 block">
                  FULL NAME *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Kumar"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full bg-slate-950/80 border border-slate-700/80 focus:border-[#FBBF24] rounded-lg p-3 text-white text-sm placeholder-slate-500 focus:outline-none transition-colors"
                />
              </div>

              {/* PREFERRED CONTACT METHOD */}
              <div className="space-y-2 pt-1">
                <label className="font-mono text-[11px] font-bold uppercase tracking-wider text-slate-300 block">
                  PREFERRED CONTACT METHOD *
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(["Phone Call", "WhatsApp", "Email"] as PreferredContactMethod[]).map((method) => {
                    const isChecked = preferredMethod === method;
                    return (
                      <button
                        key={method}
                        type="button"
                        onClick={() => {
                          setPreferredMethod(method);
                          setErrorMessage(null);
                        }}
                        className={`p-2.5 rounded-lg border text-xs font-medium transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                          isChecked
                            ? "bg-[#FBBF24]/10 border-[#FBBF24] text-[#FBBF24]"
                            : "bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700"
                        }`}
                      >
                        <span className={`w-3 h-3 rounded-full border flex items-center justify-center shrink-0 ${isChecked ? "border-[#FBBF24] bg-[#FBBF24]" : "border-slate-500"}`}>
                          {isChecked && <span className="w-1 h-1 rounded-full bg-slate-950" />}
                        </span>
                        <span>{method}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* CONDITIONAL FIELD */}
              <div className="space-y-1 pt-1">
                <label className="font-mono text-[11px] font-bold uppercase tracking-wider text-slate-300 block">
                  {preferredMethod === "Phone Call"
                    ? "PHONE NUMBER *"
                    : preferredMethod === "WhatsApp"
                    ? "WHATSAPP NUMBER *"
                    : "EMAIL ADDRESS *"}
                </label>
                <input
                  type={preferredMethod === "Email" ? "email" : "tel"}
                  required
                  placeholder={
                    preferredMethod === "Email"
                      ? "name@company.com"
                      : preferredMethod === "WhatsApp"
                      ? "+91 95675 23620 (WhatsApp)"
                      : "+91 95675 23620"
                  }
                  value={contactValue}
                  onChange={(e) => setContactValue(e.target.value)}
                  className="w-full bg-slate-950/80 border border-slate-700/80 focus:border-[#FBBF24] rounded-lg p-3 text-white text-sm placeholder-slate-500 focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* STEP 3 SUBMIT BUTTON — ONLY ACTION BUTTON IN ENTIRE FLOW */}
            <div className="pt-3 flex items-center justify-end border-t border-slate-800">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 rounded-lg bg-[#FBBF24] hover:bg-amber-300 disabled:bg-slate-700 text-slate-950 disabled:text-slate-400 font-bold text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer flex items-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin shrink-0" />
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <span>Request Consultation</span>
                    <span>&rarr;</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            STEP 4 — REFINED PREMIUM SUCCESS CONFIRMATION SCREEN
           ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        {step === 4 && (
          <div className="space-y-5 animate-fadeIn py-2 flex-1 flex flex-col justify-between">
            <div className="space-y-4">
              {/* GOLD OUTLINED CIRCLE WITH SVG CHECK ICON */}
              <div className="w-12 h-12 rounded-full border-2 border-[#FBBF24] flex items-center justify-center bg-[#FBBF24]/10 shadow-[0_0_20px_rgba(251,191,36,0.25)] shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>

              {/* HEADING */}
              <div className="space-y-1">
                <h3 className="font-serif font-normal text-xl sm:text-2xl text-white leading-tight">
                  Thank you. Your consultation request has been received.
                </h3>
                <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed pt-1">
                  We&apos;ve received your request and assigned it for review. A member of our team will contact you through your preferred communication method within one business day.
                </p>
              </div>

              {/* SUMMARY DISPLAY BOX */}
              <div className="bg-slate-950/80 border border-slate-800 rounded-lg p-3.5 space-y-2">
                <div>
                  <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#FBBF24] block mb-0.5">
                    TOPIC
                  </span>
                  <p className="font-serif text-base text-white font-medium">
                    {selectedTopic || "General Advisory"}
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-slate-800">
                  <div>
                    <span className="font-mono text-[9px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                      PREFERRED CONTACT METHOD
                    </span>
                    <p className="font-sans text-xs text-slate-200">
                      {preferredMethod} ({contactValue})
                    </p>
                  </div>
                  {businessName && (
                    <div>
                      <span className="font-mono text-[9px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                        BUSINESS NAME
                      </span>
                      <p className="font-sans text-xs text-slate-200">
                        {businessName}
                      </p>
                    </div>
                  )}
                </div>
                {requirement && (
                  <div className="pt-2 border-t border-slate-800">
                    <span className="font-mono text-[9px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                      REQUIREMENT
                    </span>
                    <p className="font-sans text-xs text-slate-300 line-clamp-2 italic">
                      &ldquo;{requirement}&rdquo;
                    </p>
                  </div>
                )}
              </div>

              {/* WHAT HAPPENS NEXT */}
              <div className="space-y-2 pt-1">
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#FBBF24] block">
                  WHAT HAPPENS NEXT
                </span>
                <ul className="space-y-2 text-xs font-sans text-slate-300">
                  <li className="flex items-center gap-2.5">
                    <span className="w-4 h-4 rounded-full bg-[#FBBF24]/15 border border-[#FBBF24]/40 flex items-center justify-center text-[#FBBF24] text-[10px] font-bold shrink-0">
                      ✓
                    </span>
                    <span>We review your requirement.</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-4 h-4 rounded-full bg-[#FBBF24]/15 border border-[#FBBF24]/40 flex items-center justify-center text-[#FBBF24] text-[10px] font-bold shrink-0">
                      ✓
                    </span>
                    <span>The appropriate professional reviews your request.</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-4 h-4 rounded-full bg-[#FBBF24]/15 border border-[#FBBF24]/40 flex items-center justify-center text-[#FBBF24] text-[10px] font-bold shrink-0">
                      ✓
                    </span>
                    <span>We&apos;ll contact you within one business day.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* SUBTLE TEXT LINK: <- Return to Website */}
            <div className="pt-4 border-t border-slate-800">
              <button
                type="button"
                onClick={handleReturnToWebsite}
                className="font-sans text-xs text-slate-400 hover:text-[#FBBF24] transition-colors cursor-pointer flex items-center gap-1.5 font-medium"
              >
                <span>&larr;</span>
                <span>Return to Website</span>
              </button>
            </div>
          </div>
        )}

      </div>

      {/* CUSTOM GOLD SCROLLBAR */}
      <style jsx global>{`
        .custom-gold-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-gold-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-gold-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(251, 191, 36, 0.35);
          border-radius: 4px;
        }
        .custom-gold-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(251, 191, 36, 0.8);
        }
      `}</style>
    </div>
  );
}
