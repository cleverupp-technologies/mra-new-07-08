"use client";

import React, { useState, useEffect, useRef } from "react";
import { Container } from "@/components/layout/Container";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { submitGuidedConsultation } from "@/app/actions/consultation";

export interface DecisionTopic {
  id: string;
  number: string;
  title: string;
  description: string;
}

export const DECISION_TOPICS: readonly DecisionTopic[] = [
  {
    id: "growth-expansion",
    number: "01",
    title: "Growth & Capital Expansion",
    description: "Capacity expansion, new branch rollouts, working capital planning before investment.",
  },
  {
    id: "working-capital",
    number: "02",
    title: "Working Capital & Cash Flow",
    description: "Receivables, inventory, vendor cycles, cash flow visibility.",
  },
  {
    id: "tax-compliance",
    number: "03",
    title: "Tax & Compliance Strategy",
    description: "GST, Income Tax, ROC, TDS, regulatory planning.",
  },
  {
    id: "audit-assurance",
    number: "04",
    title: "Audit & Assurance",
    description: "Financial reviews, statutory audit, internal controls, assurance.",
  },
  {
    id: "virtual-cfo",
    number: "05",
    title: "Virtual CFO",
    description: "Management reporting, decision support, forecasting, board reporting.",
  },
  {
    id: "valuation-transactions",
    number: "06",
    title: "Business Valuation & Transactions",
    description: "Business valuation, due diligence, investment analysis, M&A support.",
  },
  {
    id: "starting-business",
    number: "07",
    title: "Starting a Business",
    description: "Entity formation, registrations, capital planning, early-stage financial structure.",
  },
  {
    id: "not-sure-yet",
    number: "08",
    title: "I'm Not Sure Yet",
    description: "Let's begin with a conversation about what's happening inside your business.",
  },
];

export const INDUSTRY_OPTIONS = [
  "Healthcare",
  "Manufacturing",
  "Education & Institutions",
  "NBFC & Financial Services",
  "Retail & E-commerce",
  "Real Estate & Construction",
  "Technology & Services",
  "Logistics & Supply Chain",
  "Hospitality",
  "Agriculture & Allied",
  "Other",
];

export type PreferredContactMethod = "Phone Call" | "WhatsApp" | "Email";

interface ConsultationCTAProps {
  id?: string;
  initialTopicId?: string;
  initialIndustry?: string;
}

export function ConsultationCTA({
  id = "consultation",
  initialTopicId,
  initialIndustry,
}: ConsultationCTAProps) {
  // State
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [selectedTopicId, setSelectedTopicId] = useState<string | null>(
    initialTopicId || null
  );
  const [requirement, setRequirement] = useState<string>("");
  const [businessName, setBusinessName] = useState<string>("");
  const [industry, setIndustry] = useState<string>(initialIndustry || "");
  const [fullName, setFullName] = useState<string>("");
  const [preferredMethod, setPreferredMethod] =
    useState<PreferredContactMethod>("Phone Call");
  const [contactValue, setContactValue] = useState<string>("");

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Viewport Intersection Setup
  const sectionRef = useRef<HTMLElement>(null);
  const [arrived, setArrived] = useState<boolean>(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reducedMotion) {
      setArrived(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setArrived(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (initialTopicId) {
      setSelectedTopicId(initialTopicId);
    }
  }, [initialTopicId]);

  useEffect(() => {
    if (initialIndustry) {
      setIndustry(initialIndustry);
    }
  }, [initialIndustry]);

  const selectedTopic = DECISION_TOPICS.find((t) => t.id === selectedTopicId);

  const handleTopicClick = (topicId: string) => {
    setSelectedTopicId(topicId);
    setErrorMessage(null);
    setTimeout(() => {
      setStep(2);
    }, 280);
  };

  const handleStep2Continue = () => {
    if (!requirement.trim()) {
      setErrorMessage("Please briefly describe your requirement to continue.");
      return;
    }
    setErrorMessage(null);
    setStep(3);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedTopicId) {
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
        topic: selectedTopic?.title || selectedTopicId,
        requirement: requirement.trim(),
        businessName: businessName.trim(),
        industry: industry,
        name: fullName.trim(),
        preferredContact: preferredMethod,
        contactValue: contactValue.trim(),
        phone: preferredMethod !== "Email" ? contactValue.trim() : undefined,
        email: preferredMethod === "Email" ? contactValue.trim() : undefined,
        sourcePage: typeof window !== "undefined" ? window.location.pathname : "Website Consultation",
      });

      if (res.status === "success" || res.status === "unconfigured") {
        setStep(4);
      } else {
        setErrorMessage(
          res.message || "Failed to submit request. Please try again."
        );
      }
    } catch {
      setErrorMessage("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setStep(1);
    setSelectedTopicId(null);
    setRequirement("");
    setBusinessName("");
    setIndustry("");
    setFullName("");
    setPreferredMethod("Phone Call");
    setContactValue("");
    setErrorMessage(null);
  };

  return (
    <section
      id={id}
      ref={sectionRef}
      aria-labelledby={`${id}-heading`}
      className="py-24 sm:py-32 lg:py-36 bg-[#FAF8F1] border-b border-[#FFD978]/30 text-[#111827] relative overflow-hidden font-sans"
    >
      <Container className="relative z-10">
        {/* DESKTOP: ~40%/60% TWO-COLUMN (lg:col-span-5 / lg:col-span-7) | MOBILE: STACKED */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* ── LEFT COLUMN (~40% Width / lg:col-span-5): Editorial Invitation & Contact Info ───── */}
          <div
            className="lg:col-span-5 space-y-10 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              opacity: arrived ? 1 : 0,
              transform: arrived ? "translateY(0)" : "translateY(16px)",
            }}
          >
            {/* HEADLINE BLOCK */}
            <div className="space-y-4">
              <SectionBadge align="left">LET&apos;S TALK</SectionBadge>
              
              <h2
                id={`${id}-heading`}
                className="font-serif font-bold text-3xl sm:text-4xl lg:text-[44px] text-[#111827] leading-[1.12] tracking-tight"
              >
                Let&apos;s discuss your next business decision.
              </h2>
              
              <p className="font-sans font-medium text-[17px] sm:text-[18px] lg:text-[24px] leading-[1.55] pt-1 max-w-lg">
                <span className="text-[#111827]">
                  Whether you&apos;re planning growth, evaluating an investment, or simply need clarity before making an important decision,{" "}
                </span>
                <span className="text-[#F4B942]">
                  our conversation begins with understanding the decision—not selling a service.
                </span>
              </p>
            </div>

            {/* THREE SIMPLE CONTACT LINES */}
            <div className="pt-6 space-y-6 font-sans border-t border-[#FFD978]/40">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F4B942] block mb-1">
                  PHONE
                </span>
                <a
                  href="tel:+919567523620"
                  className="text-base sm:text-lg text-[#111827] hover:text-[#F4B942] transition-colors font-medium"
                >
                  +91 95675 23620
                </a>
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F4B942] block mb-1">
                  EMAIL
                </span>
                <a
                  href="mailto:office@maneshrineesh.com"
                  className="text-base sm:text-lg text-[#111827] hover:text-[#F4B942] transition-colors font-medium"
                >
                  office@maneshrineesh.com
                </a>
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F4B942] block mb-1">
                  HEADQUARTERS OFFICE
                </span>
                <address className="not-italic text-sm sm:text-base text-[#111827]/85 leading-relaxed font-sans">
                  60/4798, Third Floor, Span Hotel Complex,<br />
                  Jail Road,<br />
                  Kozhikode &ndash; 673004,<br />
                  Kerala, India
                </address>
              </div>
            </div>
          </div>

          {/* ── RIGHT COLUMN (~60% Width / lg:col-span-7): GUIDED CONVERSATION PANEL ─ */}
          <div
            className="lg:col-span-7 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              opacity: arrived ? 1 : 0,
              transform: arrived ? "translateY(0) scale(1)" : "translateY(16px) scale(0.98)",
              transitionDelay: "150ms",
            }}
          >
            {/* PREMIUM #1F3A8A BRANDED DECISION PANEL CONTAINER */}
            <div className="bg-[#1F3A8A] border border-[#FFD978]/30 rounded-[28px] p-6 sm:p-8 lg:p-10 shadow-xl min-h-[580px] flex flex-col justify-between relative overflow-hidden text-[#FAF8F1]">
              
              {/* SUBTLE PATTERNED BACKGROUND OVERLAYS ON #1F3A8A */}
              <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:18px_18px] opacity-40 pointer-events-none" />
              <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(ellipse_at_top_right,rgba(244,185,66,0.15),transparent_70%)] pointer-events-none" />

              {/* TOP PROGRESS INDICATOR */}
              {step < 4 && (
                <div className="space-y-3 pb-5 border-b border-white/15 shrink-0 relative z-10">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 font-mono text-xs font-bold uppercase tracking-wider">
                      <span className={step === 1 ? "text-[#FFD978] font-bold" : "text-[#FAF8F1]/40"}>Step 1</span>
                      <span className="text-[#F4B942]">&rarr;</span>
                      <span className={step === 2 ? "text-[#FFD978] font-bold" : "text-[#FAF8F1]/40"}>Step 2</span>
                      <span className="text-[#F4B942]">&rarr;</span>
                      <span className={step === 3 ? "text-[#FFD978] font-bold" : "text-[#FAF8F1]/40"}>Step 3</span>
                    </div>

                    {step > 1 && (
                      <button
                        type="button"
                        onClick={() => {
                          setErrorMessage(null);
                          setStep((prev) => Math.max(prev - 1, 1) as 1 | 2 | 3);
                        }}
                        className="font-mono text-xs font-bold text-[#FFD978] hover:text-white transition-colors cursor-pointer"
                      >
                        &larr; Back
                      </button>
                    )}
                  </div>

                  {/* PROGRESS BAR */}
                  <div className="w-full h-1.5 bg-white/15 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#F4B942] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] rounded-full"
                      style={{ width: `${(step / 3) * 100}%` }}
                    />
                  </div>
                </div>
              )}

              {/* STEP CONTENT CONTAINER */}
              <div key={step} className="flex-1 flex flex-col justify-between pt-5 relative z-10">
                
                {/* ── STEP 1: CONSULTATION TOPIC ── */}
                {step === 1 && (
                  <div className="space-y-6 flex-1 flex flex-col justify-between">
                    <div className="space-y-1.5">
                      <h3 className="font-serif font-bold text-2xl sm:text-3xl lg:text-[32px] text-[#FAF8F1] leading-tight">
                        What brings you to MR&amp;A?
                      </h3>
                      <p className="font-sans text-[#FAF8F1]/80 text-sm sm:text-base leading-relaxed">
                        Select the option that matches your current requirement.
                      </p>
                    </div>

                    {errorMessage && (
                      <div className="p-3 rounded-xl bg-red-500/20 border border-red-400/40 text-red-200 text-xs font-medium">
                        {errorMessage}
                      </div>
                    )}

                    {/* TOPIC CARDS SCROLL LIST */}
                    <div className="relative flex-1 min-h-0 pt-1">
                      <div className="max-h-[420px] sm:max-h-[460px] overflow-y-auto pr-2 space-y-3 custom-orange-scrollbar">
                        {DECISION_TOPICS.map((topic) => {
                          const isSelected = selectedTopicId === topic.id;
                          return (
                            <button
                              key={topic.id}
                              type="button"
                              onClick={() => handleTopicClick(topic.id)}
                              className={`w-full text-left p-4 sm:p-5 rounded-[20px] border transition-all duration-200 ease-out group cursor-pointer flex items-center justify-between gap-4 ${
                                isSelected
                                  ? "bg-[#162B68] border-[#F4B942] shadow-md ring-1 ring-[#F4B942]/40"
                                  : "bg-[#183175]/70 border-white/15 hover:bg-[#1c3784] hover:border-white/35"
                              }`}
                            >
                              <div className="flex items-start gap-4 sm:gap-5 min-w-0 flex-1">
                                <span className="font-serif text-2xl sm:text-3xl text-[#F4B942] leading-none shrink-0 pt-0.5 font-bold">
                                  {topic.number}
                                </span>
                                <div className="space-y-1 min-w-0 max-w-[90%]">
                                  <h4
                                    className={`font-serif font-bold text-base sm:text-lg lg:text-xl transition-colors leading-snug ${
                                      isSelected ? "text-[#FAF8F1]" : "text-[#FAF8F1]/90 group-hover:text-[#FAF8F1]"
                                    }`}
                                  >
                                    {topic.title}
                                  </h4>
                                  <p className="font-sans text-xs sm:text-sm text-[#FAF8F1]/75 leading-relaxed">
                                    {topic.description}
                                  </p>
                                </div>
                              </div>
                              <span className="text-[#F4B942] text-lg sm:text-xl shrink-0 group-hover:translate-x-1.5 transition-transform pl-1 font-bold">
                                &rarr;
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}

                {/* ── STEP 2: REQUIREMENT ── */}
                {step === 2 && (
                  <div className="space-y-6 flex-1 flex flex-col justify-between">
                    <div className="space-y-1.5">
                      <h3 className="font-serif font-bold text-2xl sm:text-3xl lg:text-[32px] text-[#FAF8F1] leading-tight">
                        Tell us about your requirement
                      </h3>
                      <p className="font-sans text-[#FAF8F1]/80 text-sm sm:text-base leading-relaxed">
                        Topic: <span className="text-[#FFD978] font-semibold">{selectedTopic?.title}</span>
                      </p>
                    </div>

                    {errorMessage && (
                      <div className="p-3 rounded-xl bg-red-500/20 border border-red-400/40 text-red-200 text-xs font-medium">
                        {errorMessage}
                      </div>
                    )}

                    <div className="space-y-5 max-w-2xl py-2 flex-1">
                      {/* REQUIREMENT TEXTAREA */}
                      <div className="space-y-2">
                        <label className="font-mono text-xs font-bold uppercase tracking-wider text-[#FFD978] block">
                          REQUIREMENT *
                        </label>
                        <textarea
                          rows={4}
                          required
                          placeholder="Briefly describe your business situation or the assistance you're looking for."
                          value={requirement}
                          onChange={(e) => setRequirement(e.target.value)}
                          className="w-full bg-[#162B68]/80 border border-white/20 rounded-xl p-4 text-[#FAF8F1] placeholder-[#FAF8F1]/40 focus:border-[#F4B942] focus:outline-none transition-colors text-base leading-relaxed resize-none"
                        />
                        <p className="font-sans text-xs text-[#FAF8F1]/60 italic">
                          Example: We&apos;re planning to expand into another city and need advice on funding, GST implications, and compliance.
                        </p>
                      </div>

                      {/* BUSINESS NAME */}
                      <div className="space-y-1">
                        <label className="font-mono text-xs font-bold uppercase tracking-wider text-[#FFD978] block">
                          BUSINESS NAME (OPTIONAL)
                        </label>
                        <input
                          type="text"
                          placeholder="ABC Industries Pvt. Ltd."
                          value={businessName}
                          onChange={(e) => setBusinessName(e.target.value)}
                          className="w-full bg-transparent border-b border-white/20 focus:border-[#F4B942] text-[#FAF8F1] py-2.5 text-base placeholder-[#FAF8F1]/40 focus:outline-none transition-colors"
                        />
                      </div>

                      {/* INDUSTRY DROPDOWN */}
                      <div className="space-y-1">
                        <label className="font-mono text-xs font-bold uppercase tracking-wider text-[#FFD978] block">
                          INDUSTRY
                        </label>
                        <select
                          value={industry}
                          onChange={(e) => setIndustry(e.target.value)}
                          className="w-full bg-transparent border-b border-white/20 focus:border-[#F4B942] text-[#FAF8F1] py-2.5 text-base focus:outline-none transition-colors [&>option]:bg-[#162B68] [&>option]:text-[#FAF8F1]"
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

                    {/* STEP 2 CONTINUE BUTTON */}
                    <div className="pt-4 flex items-center justify-end border-t border-white/15">
                      <button
                        type="button"
                        onClick={handleStep2Continue}
                        disabled={!requirement.trim()}
                        className={`px-8 py-3.5 rounded-full font-sans font-bold text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer flex items-center space-x-2.5 ${
                          requirement.trim()
                            ? "bg-[#F4B942] hover:bg-[#FFD978] text-[#111827] shadow-lg"
                            : "bg-white/15 text-[#FAF8F1]/40 cursor-not-allowed"
                        }`}
                      >
                        <span>Continue</span>
                        <span className="text-lg">&rarr;</span>
                      </button>
                    </div>
                  </div>
                )}

                {/* ── STEP 3: CONTACT DETAILS ── */}
                {step === 3 && (
                  <form onSubmit={handleSubmit} className="space-y-6 flex-1 flex flex-col justify-between">
                    <div className="space-y-1.5">
                      <h3 className="font-serif font-bold text-2xl sm:text-3xl lg:text-[32px] text-[#FAF8F1] leading-tight">
                        How would you like us to reach you?
                      </h3>
                      <p className="font-sans text-[#FAF8F1]/80 text-sm sm:text-base leading-relaxed">
                        Topic: <span className="text-[#FFD978] font-semibold">{selectedTopic?.title}</span>
                      </p>
                    </div>

                    {errorMessage && (
                      <div className="p-3 rounded-xl bg-red-500/20 border border-red-400/40 text-red-200 text-xs font-medium">
                        {errorMessage}
                      </div>
                    )}

                    <div className="space-y-5 max-w-2xl py-2 flex-1">
                      {/* FULL NAME */}
                      <div className="space-y-1">
                        <label className="font-mono text-xs font-bold uppercase tracking-wider text-[#FFD978] block">
                          FULL NAME *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Ramesh Kumar"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          className="w-full bg-transparent border-b border-white/20 focus:border-[#F4B942] text-[#FAF8F1] py-3 text-base placeholder-[#FAF8F1]/40 focus:outline-none transition-colors"
                        />
                      </div>

                      {/* PREFERRED CONTACT METHOD */}
                      <div className="space-y-2 pt-2">
                        <label className="font-mono text-xs font-bold uppercase tracking-wider text-[#FFD978] block">
                          PREFERRED CONTACT METHOD *
                        </label>
                        <div className="grid grid-cols-3 gap-3">
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
                                className={`p-3 rounded-full border text-xs sm:text-sm font-sans font-medium transition-all cursor-pointer flex items-center justify-center gap-2 ${
                                  isChecked
                                    ? "bg-[#F4B942]/20 border-[#F4B942] text-[#FAF8F1] font-bold"
                                    : "bg-white/[0.06] border-white/15 text-[#FAF8F1]/80 hover:border-white/35"
                                }`}
                              >
                                <span className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center shrink-0 ${isChecked ? "border-[#F4B942] bg-[#F4B942]" : "border-white/40"}`}>
                                  {isChecked && <span className="w-1.5 h-1.5 rounded-full bg-[#1F3A8A]" />}
                                </span>
                                <span>{method}</span>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* CONDITIONAL CONTACT VALUE */}
                      <div className="space-y-1 pt-2">
                        <label className="font-mono text-xs font-bold uppercase tracking-wider text-[#FFD978] block">
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
                          className="w-full bg-transparent border-b border-white/20 focus:border-[#F4B942] text-[#FAF8F1] py-3 text-base placeholder-[#FAF8F1]/40 focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    {/* SUBMIT BUTTON */}
                    <div className="pt-4 flex items-center justify-end border-t border-white/15">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#F4B942] hover:bg-[#FFD978] disabled:bg-white/15 text-[#111827] disabled:text-[#FAF8F1]/40 font-sans font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-lg cursor-pointer flex items-center justify-center space-x-3"
                      >
                        {isSubmitting ? (
                          <>
                            <span className="w-4 h-4 border-2 border-[#111827] border-t-transparent rounded-full animate-spin shrink-0" />
                            <span>Submitting...</span>
                          </>
                        ) : (
                          <>
                            <span>Request Consultation</span>
                            <span className="text-lg">&rarr;</span>
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}

                {/* ── STEP 4: SUCCESS CONFIRMATION ── */}
                {step === 4 && (
                  <div className="py-6 space-y-6 flex-1 flex flex-col justify-between items-start">
                    <div className="space-y-6 max-w-xl w-full">
                      {/* ICON */}
                      <div className="w-16 h-16 rounded-full border-2 border-[#F4B942] flex items-center justify-center bg-[#F4B942]/15 shrink-0">
                        <svg className="w-8 h-8 text-[#F4B942]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>

                      {/* HEADING */}
                      <h3 className="font-serif font-bold text-2xl sm:text-3xl lg:text-[32px] text-[#FAF8F1] leading-tight">
                        Thank you. Your consultation request has been received.
                      </h3>

                      {/* BODY */}
                      <p className="font-sans text-[#FAF8F1]/85 text-base sm:text-lg leading-relaxed">
                        We&apos;ve received your request and assigned it for review. A member of our team will contact you through your preferred communication method within one business day.
                      </p>

                      {/* SUMMARY */}
                      <div className="bg-[#162B68]/80 border border-white/15 rounded-2xl p-4 sm:p-5 space-y-3">
                        <div>
                          <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#FFD978] block mb-0.5">
                            TOPIC
                          </span>
                          <p className="font-serif text-lg sm:text-xl text-[#FAF8F1] font-bold">
                            {selectedTopic?.title || "General Advisory"}
                          </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-white/15">
                          <div>
                            <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#FAF8F1]/60 block mb-0.5">
                              PREFERRED CONTACT METHOD
                            </span>
                            <p className="font-sans text-sm text-[#FAF8F1]/90 font-medium">
                              {preferredMethod} ({contactValue})
                            </p>
                          </div>
                          {businessName && (
                            <div>
                              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#FAF8F1]/60 block mb-0.5">
                                BUSINESS NAME
                              </span>
                              <p className="font-sans text-sm text-[#FAF8F1]/90 font-medium">
                                {businessName}
                              </p>
                            </div>
                          )}
                        </div>
                        {requirement && (
                          <div className="pt-2 border-t border-white/15">
                            <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#FAF8F1]/60 block mb-0.5">
                              REQUIREMENT
                            </span>
                            <p className="font-sans text-sm text-[#FAF8F1]/80 line-clamp-2 italic">
                              &ldquo;{requirement}&rdquo;
                            </p>
                          </div>
                        )}
                      </div>

                      {/* NEXT STEPS */}
                      <div className="space-y-3 pt-2">
                        <h4 className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#FFD978]">
                          WHAT HAPPENS NEXT
                        </h4>
                        <ul className="space-y-2.5 font-sans text-sm text-[#FAF8F1]/85">
                          <li className="flex items-center gap-3">
                            <span className="w-5 h-5 rounded-full bg-[#F4B942]/20 border border-[#F4B942]/40 flex items-center justify-center text-[#F4B942] text-xs font-bold shrink-0">
                              ✓
                            </span>
                            <span>We review your requirement.</span>
                          </li>
                          <li className="flex items-center gap-3">
                            <span className="w-5 h-5 rounded-full bg-[#F4B942]/20 border border-[#F4B942]/40 flex items-center justify-center text-[#F4B942] text-xs font-bold shrink-0">
                              ✓
                            </span>
                            <span>The appropriate professional reviews your request.</span>
                          </li>
                          <li className="flex items-center gap-3">
                            <span className="w-5 h-5 rounded-full bg-[#F4B942]/20 border border-[#F4B942]/40 flex items-center justify-center text-[#F4B942] text-xs font-bold shrink-0">
                              ✓
                            </span>
                            <span>We&apos;ll contact you within one business day.</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* RETURN */}
                    <div className="pt-6 border-t border-white/15 w-full">
                      <button
                        type="button"
                        onClick={handleReset}
                        className="font-sans text-sm text-[#FAF8F1]/70 hover:text-[#F4B942] transition-colors cursor-pointer flex items-center gap-2 font-medium"
                      >
                        <span>&larr;</span>
                        <span>Return to Website</span>
                      </button>
                    </div>
                  </div>
                )}

              </div>
            </div>
          </div>

        </div>
      </Container>

      {/* CUSTOM SCROLLBAR FOR #1F3A8A BRANDED PANEL */}
      <style jsx global>{`
        .custom-orange-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-orange-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-orange-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(244, 185, 66, 0.4);
          border-radius: 4px;
        }
        .custom-orange-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(244, 185, 66, 0.8);
        }
      `}</style>
    </section>
  );
}

export default ConsultationCTA;
