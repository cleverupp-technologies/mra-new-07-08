"use client";

/**
 * ConsultationCTA — Unified Advisory Consultation Section Component
 *
 * Reusable across all pages (Home, About, Services, Service Detail, Industries, Industry Detail, Insights, Contact).
 * Supports dynamic prefill via initialTopicId and initialIndustry props.
 * Animates once on viewport scroll with 500-700ms Fade Up + Scale transition.
 */

import React, { useState, useEffect, useRef } from "react";
import { Container } from "@/components/layout/Container";
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
  "Real Estate",
  "Retail & Wholesale",
  "Textiles",
  "NBFC",
  "Education",
  "Pharma",
  "Other",
] as const;

export type PreferredContactMethod = "Phone Call" | "WhatsApp" | "Email";

export interface ConsultationCTAProps {
  initialTopicId?: string;
  initialIndustry?: string;
  id?: string;
  className?: string;
}

export function ConsultationCTA({
  initialTopicId,
  initialIndustry,
  id = "consultation",
  className = "",
}: ConsultationCTAProps) {
  const [arrived, setArrived] = useState(false);
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Form State with Dynamic Prefill support
  const [selectedTopicId, setSelectedTopicId] = useState<string | null>(
    initialTopicId || null
  );
  const [requirement, setRequirement] = useState<string>("");
  const [businessName, setBusinessName] = useState<string>("");
  const [industry, setIndustry] = useState<string>(initialIndustry || "");
  const [fullName, setFullName] = useState<string>("");
  const [preferredMethod, setPreferredMethod] = useState<PreferredContactMethod>("Phone Call");
  const [contactValue, setContactValue] = useState<string>("");

  const sectionRef = useRef<HTMLElement>(null);
  const autoAdvanceTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Match selected topic object
  const selectedTopic = DECISION_TOPICS.find((t) => t.id === selectedTopicId);

  // Auto-scroll on mount if URL contains #consultation hash
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash === "#consultation") {
      const timer = setTimeout(() => {
        const el = document.getElementById("consultation");
        if (el) {
          const headerHeight = 80;
          const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = Math.max(0, elementPosition - headerHeight);
          window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
      }, 150);
      return () => clearTimeout(timer);
    }
  }, []);

  // Viewport Scroll Animation Observer (Animates once)
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      const timer = setTimeout(() => setArrived(true), 0);
      return () => clearTimeout(timer);
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

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    return () => {
      if (autoAdvanceTimerRef.current) clearTimeout(autoAdvanceTimerRef.current);
    };
  }, []);

  // Step 1: Topic Selection (Highlight gold + Auto-advance ~300ms, NO Continue button)
  const handleTopicClick = (topicId: string) => {
    setSelectedTopicId(topicId);
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
        phone: preferredMethod !== "Email" ? contactValue.trim() : "",
        email: preferredMethod === "Email" ? contactValue.trim() : "",
        sourcePage: `Unified Consultation CTA (${id})`,
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
    setSelectedTopicId(initialTopicId || null);
    setRequirement("");
    setBusinessName("");
    setIndustry(initialIndustry || "");
    setFullName("");
    setPreferredMethod("Phone Call");
    setContactValue("");
    setErrorMessage(null);
  };

  return (
    <section
      ref={sectionRef}
      id={id}
      aria-labelledby={`${id}-heading`}
      className={`py-12 sm:py-24 lg:py-36 bg-[#0D0D0D] bg-[linear-gradient(135deg,#1A1A1A_0%,#0D0D0D_45%,#000000_100%)] text-white relative overflow-hidden ${className}`}
    >
      {/* Ambient Glow */}
      <div
        className="absolute inset-0 pointer-events-none z-0 bg-[radial-gradient(ellipse_at_70%_50%,rgba(255,255,255,0.03),transparent_75%)]"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        {/* DESKTOP: 35%/65% TWO-COLUMN | TABLET & MOBILE: STACKED (LEFT FIRST, RIGHT BELOW) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* ── LEFT COLUMN (35% Width / lg:col-span-4): Supportive Editorial Content ───── */}
          <div
            className="lg:col-span-4 space-y-10 transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none motion-reduce:opacity-100"
            style={{
              opacity: arrived ? 1 : 0,
              transform: arrived ? "translateY(0)" : "translateY(16px)",
            }}
          >
            {/* HEADLINE BLOCK */}
            <div className="space-y-5">
              <p className="font-mono text-xs font-bold text-[#FBBF24] uppercase tracking-[0.25em]">
                LET&apos;S TALK
              </p>
              
              <h2
                id={`${id}-heading`}
                className="font-serif font-normal text-3xl sm:text-4xl lg:text-[46px] text-white leading-[1.08] tracking-tight"
              >
                Let&apos;s discuss your next business decision.
              </h2>
              
              <p className="font-sans text-slate-300 text-base leading-relaxed pt-1 max-w-sm">
                Whether you&apos;re planning growth, evaluating an investment, or simply need clarity before making an important decision, our conversation begins with understanding the decision—not selling a service.
              </p>
            </div>

            {/* THREE SIMPLE CONTACT LINES */}
            <div className="pt-6 space-y-6 font-sans">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 block mb-1">
                  Phone
                </span>
                <a
                  href="tel:+919567523620"
                  className="text-base text-white hover:text-[#FBBF24] transition-colors font-medium"
                >
                  +91 95675 23620
                </a>
              </div>

              <div>
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 block mb-1">
                  Email
                </span>
                <a
                  href="mailto:office@maneshrineesh.com"
                  className="text-base text-white hover:text-[#FBBF24] transition-colors font-medium"
                >
                  office@maneshrineesh.com
                </a>
              </div>

              <div>
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 block mb-1">
                  Headquarters Office
                </span>
                <address className="not-italic text-sm text-slate-200 leading-relaxed font-sans">
                  60/4798, Third Floor, Span Hotel Complex,<br />
                  Jail Road,<br />
                  Kozhikode – 673004,<br />
                  Kerala, India
                </address>
              </div>
            </div>
          </div>

          {/* ── RIGHT COLUMN (65% Width / lg:col-span-8): GUIDED CONVERSATION PANEL ─ */}
          <div
            className="lg:col-span-8 transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none motion-reduce:opacity-100"
            style={{
              opacity: arrived ? 1 : 0,
              transform: arrived ? "translateY(0) scale(1)" : "translateY(16px) scale(0.98)",
              transitionDelay: "150ms",
            }}
          >
            {/* PERMANENT EMBEDDED CARD CONTAINER */}
            <div className="bg-white/[0.02] border border-white/[0.06] rounded-[24px] p-6 sm:p-10 lg:p-12 shadow-2xl min-h-[600px] flex flex-col justify-between relative overflow-hidden backdrop-blur-xs">
              
              {/* TOP PROGRESS INDICATOR (Steps 1 to 3) */}
              {step < 4 && (
                <div className="space-y-3 pb-6 border-b border-white/[0.06] shrink-0">
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
                  <div className="w-full h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#FBBF24] transition-all duration-300 ease-out rounded-full"
                      style={{ width: `${(step / 3) * 100}%` }}
                    />
                  </div>
                </div>
              )}

              {/* STEP CONTENT CONTAINER WITH FADE TRANSITION */}
              <div key={step} className="flex-1 flex flex-col justify-between pt-6 animate-fadeIn">
                
                {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                    STEP 1 — CONSULTATION TOPIC (AUTO-ADVANCE ~300MS)
                   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
                {step === 1 && (
                  <div className="space-y-6 flex-1 flex flex-col justify-between">
                    <div className="space-y-1.5">
                      <h3 className="font-serif font-normal text-2xl sm:text-3xl lg:text-4xl text-white leading-tight">
                        What brings you to MR&amp;A?
                      </h3>
                      <p className="font-sans text-slate-400 text-sm sm:text-base leading-relaxed">
                        Select the option that matches your current requirement.
                      </p>
                    </div>

                    {errorMessage && (
                      <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-medium">
                        {errorMessage}
                      </div>
                    )}

                    {/* TOPIC CARDS GRID */}
                    <div className="relative flex-1 min-h-0 pt-1">
                      <div className="max-h-[440px] sm:max-h-[480px] overflow-y-auto pr-3 space-y-3.5 custom-gold-scrollbar">
                        {DECISION_TOPICS.map((topic) => {
                          const isSelected = selectedTopicId === topic.id;
                          return (
                            <button
                              key={topic.id}
                              type="button"
                              onClick={() => handleTopicClick(topic.id)}
                              className={`w-full text-left p-5 sm:p-6 rounded-[18px] border transition-all duration-250 ease-out group cursor-pointer flex items-center justify-between gap-5 ${
                                isSelected
                                  ? "bg-white/[0.06] border-[#FBBF24] shadow-[0_16px_40px_rgba(0,0,0,0.35)] scale-[1.01]"
                                  : "bg-transparent border-white/[0.05] hover:bg-white/[0.04] hover:border-[#FBBF24]/50 hover:shadow-[0_16px_40px_rgba(0,0,0,0.35)]"
                              }`}
                            >
                              <div className="flex items-start gap-4 sm:gap-6 min-w-0 flex-1">
                                <span className="font-serif text-3xl sm:text-4xl text-[#FBBF24] leading-none shrink-0 pt-0.5 font-normal">
                                  {topic.number}
                                </span>
                                <div className="space-y-1 min-w-0 max-w-[88%]">
                                  <h4
                                    className={`font-serif font-normal text-lg sm:text-xl lg:text-2xl transition-colors leading-snug ${
                                      isSelected ? "text-[#FBBF24]" : "text-white group-hover:text-[#FBBF24]"
                                    }`}
                                  >
                                    {topic.title}
                                  </h4>
                                  <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed">
                                    {topic.description}
                                  </p>
                                </div>
                              </div>
                              <span className="text-[#FBBF24] text-xl sm:text-2xl shrink-0 group-hover:translate-x-2 transition-transform duration-250 ease-out pl-2">
                                &rarr;
                              </span>
                            </button>
                          );
                        })}
                      </div>

                      {/* BOTTOM FADE OVERLAY */}
                      <div
                        className="absolute bottom-0 inset-x-0 h-[40px] bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/80 to-transparent pointer-events-none z-10"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                )}

                {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                    STEP 2 — REQUIREMENT (REQUIRES PREMIUM CONTINUE BUTTON)
                   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
                {step === 2 && (
                  <div className="space-y-6 flex-1 flex flex-col justify-between">
                    <div className="space-y-1.5">
                      <h3 className="font-serif font-normal text-2xl sm:text-3xl lg:text-4xl text-white leading-tight">
                        Tell us about your requirement
                      </h3>
                      <p className="font-sans text-slate-400 text-sm sm:text-base leading-relaxed">
                        Topic: <span className="text-[#FBBF24] font-medium">{selectedTopic?.title}</span>
                      </p>
                    </div>

                    {errorMessage && (
                      <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-medium">
                        {errorMessage}
                      </div>
                    )}

                    <div className="space-y-5 max-w-2xl py-2 flex-1">
                      {/* REQUIREMENT TEXTAREA */}
                      <div className="space-y-2">
                        <label className="font-mono text-xs font-bold uppercase tracking-wider text-slate-300 block">
                          REQUIREMENT *
                        </label>
                        <textarea
                          rows={5}
                          required
                          placeholder="Briefly describe your business situation or the assistance you're looking for."
                          value={requirement}
                          onChange={(e) => setRequirement(e.target.value)}
                          className="w-full bg-white/[0.02] border border-white/15 rounded-xl p-4 text-white placeholder-slate-500 focus:border-[#FBBF24] focus:outline-none transition-colors text-base leading-relaxed resize-none"
                        />
                        <p className="font-sans text-xs text-slate-400 italic">
                          Example: We&apos;re planning to expand into another city and need advice on funding, GST implications, and compliance.
                        </p>
                      </div>

                      {/* BUSINESS NAME (OPTIONAL) */}
                      <div className="space-y-1">
                        <label className="font-mono text-xs font-bold uppercase tracking-wider text-slate-300 block">
                          BUSINESS NAME (OPTIONAL)
                        </label>
                        <input
                          type="text"
                          placeholder="ABC Industries Pvt. Ltd."
                          value={businessName}
                          onChange={(e) => setBusinessName(e.target.value)}
                          className="w-full bg-transparent border-b border-white/20 focus:border-[#FBBF24] text-white py-2.5 text-base placeholder-slate-600 focus:outline-none transition-colors"
                        />
                      </div>

                      {/* INDUSTRY DROPDOWN */}
                      <div className="space-y-1">
                        <label className="font-mono text-xs font-bold uppercase tracking-wider text-slate-300 block">
                          INDUSTRY
                        </label>
                        <select
                          value={industry}
                          onChange={(e) => setIndustry(e.target.value)}
                          className="w-full bg-transparent border-b border-white/20 focus:border-[#FBBF24] text-white py-2.5 text-base focus:outline-none transition-colors [&>option]:bg-slate-900 [&>option]:text-white"
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
                    <div className="pt-4 flex items-center justify-end border-t border-white/[0.06]">
                      <button
                        type="button"
                        onClick={handleStep2Continue}
                        disabled={!requirement.trim()}
                        className={`px-8 py-3.5 rounded-xl font-bold text-sm uppercase tracking-wider transition-all duration-200 cursor-pointer flex items-center space-x-2.5 ${
                          requirement.trim()
                            ? "bg-[#FBBF24] hover:bg-amber-300 text-slate-950 shadow-lg"
                            : "bg-white/10 text-slate-500 cursor-not-allowed"
                        }`}
                      >
                        <span>Continue</span>
                        <span className="text-lg">&rarr;</span>
                      </button>
                    </div>
                  </div>
                )}

                {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                    STEP 3 — CONTACT DETAILS (ONLY SUBMISSION CTA)
                   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
                {step === 3 && (
                  <form onSubmit={handleSubmit} className="space-y-6 flex-1 flex flex-col justify-between">
                    <div className="space-y-1.5">
                      <h3 className="font-serif font-normal text-2xl sm:text-3xl lg:text-4xl text-white leading-tight">
                        How would you like us to reach you?
                      </h3>
                      <p className="font-sans text-slate-400 text-sm sm:text-base leading-relaxed">
                        Topic: <span className="text-[#FBBF24] font-medium">{selectedTopic?.title}</span>
                      </p>
                    </div>

                    {errorMessage && (
                      <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-medium">
                        {errorMessage}
                      </div>
                    )}

                    <div className="space-y-5 max-w-2xl py-2 flex-1">
                      {/* FULL NAME */}
                      <div className="space-y-1">
                        <label className="font-mono text-xs font-bold uppercase tracking-wider text-slate-300 block">
                          FULL NAME *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Ramesh Kumar"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          className="w-full bg-transparent border-b border-white/20 focus:border-[#FBBF24] text-white py-3 text-base placeholder-slate-600 focus:outline-none transition-colors"
                        />
                      </div>

                      {/* PREFERRED CONTACT METHOD */}
                      <div className="space-y-2 pt-2">
                        <label className="font-mono text-xs font-bold uppercase tracking-wider text-slate-300 block">
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
                                className={`p-3 rounded-xl border text-xs sm:text-sm font-medium transition-all cursor-pointer flex items-center justify-center gap-2 ${
                                  isChecked
                                    ? "bg-white/[0.08] border-[#FBBF24] text-[#FBBF24]"
                                    : "bg-white/[0.02] border-white/10 text-slate-300 hover:border-white/20"
                                }`}
                              >
                                <span className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center shrink-0 ${isChecked ? "border-[#FBBF24] bg-[#FBBF24]" : "border-slate-500"}`}>
                                  {isChecked && <span className="w-1.5 h-1.5 rounded-full bg-slate-950" />}
                                </span>
                                <span>{method}</span>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* CONDITIONAL FIELD BASED ON SELECTION */}
                      <div className="space-y-1 pt-2">
                        <label className="font-mono text-xs font-bold uppercase tracking-wider text-slate-300 block">
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
                          className="w-full bg-transparent border-b border-white/20 focus:border-[#FBBF24] text-white py-3 text-base placeholder-slate-600 focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    {/* PRIMARY ACTION BUTTON */}
                    <div className="pt-4 flex items-center justify-end border-t border-white/[0.06]">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full sm:w-auto px-10 py-4 rounded-xl bg-[#FBBF24] hover:bg-amber-300 disabled:bg-slate-700 text-slate-950 disabled:text-slate-400 font-bold text-sm uppercase tracking-wider transition-all duration-200 shadow-xl cursor-pointer flex items-center justify-center space-x-3"
                      >
                        {isSubmitting ? (
                          <>
                            <span className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin shrink-0" />
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

                {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                    STEP 4 — REFINED SUCCESS CONFIRMATION SCREEN
                   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
                {step === 4 && (
                  <div className="py-6 space-y-6 flex-1 flex flex-col justify-between items-start animate-fadeIn">
                    <div className="space-y-6 max-w-xl w-full">
                      {/* GOLD OUTLINED CIRCLE WITH SVG CHECK ICON */}
                      <div className="w-16 h-16 rounded-full border-2 border-[#FBBF24] flex items-center justify-center bg-[#FBBF24]/10 shadow-[0_0_30px_rgba(251,191,36,0.25)] shrink-0">
                        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>

                      {/* HEADING */}
                      <h3 className="font-serif font-normal text-2xl sm:text-3xl lg:text-4xl text-white leading-tight">
                        Thank you. Your consultation request has been received.
                      </h3>

                      {/* BODY COPY */}
                      <p className="font-sans text-slate-300 text-base sm:text-lg leading-relaxed">
                        We&apos;ve received your request and assigned it for review. A member of our team will contact you through your preferred communication method within one business day.
                      </p>

                      {/* SUMMARY DISPLAY BOX */}
                      <div className="bg-white/[0.03] border border-white/10 rounded-xl p-4 sm:p-5 space-y-3">
                        <div>
                          <span className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#FBBF24] block mb-0.5">
                            TOPIC
                          </span>
                          <p className="font-serif text-lg sm:text-xl text-white font-medium">
                            {selectedTopic?.title || "General Advisory"}
                          </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-white/10">
                          <div>
                            <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                              PREFERRED CONTACT METHOD
                            </span>
                            <p className="font-sans text-sm text-slate-200">
                              {preferredMethod} ({contactValue})
                            </p>
                          </div>
                          {businessName && (
                            <div>
                              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                                BUSINESS NAME
                              </span>
                              <p className="font-sans text-sm text-slate-200">
                                {businessName}
                              </p>
                            </div>
                          )}
                        </div>
                        {requirement && (
                          <div className="pt-2 border-t border-white/10">
                            <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                              REQUIREMENT
                            </span>
                            <p className="font-sans text-sm text-slate-300 line-clamp-2 italic">
                              &ldquo;{requirement}&rdquo;
                            </p>
                          </div>
                        )}
                      </div>

                      {/* WHAT HAPPENS NEXT SECTION */}
                      <div className="space-y-3 pt-2">
                        <h4 className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#FBBF24]">
                          WHAT HAPPENS NEXT
                        </h4>
                        <ul className="space-y-2.5 font-sans text-sm text-slate-300">
                          <li className="flex items-center gap-3">
                            <span className="w-5 h-5 rounded-full bg-[#FBBF24]/15 border border-[#FBBF24]/40 flex items-center justify-center text-[#FBBF24] text-xs font-bold shrink-0">
                              ✓
                            </span>
                            <span>We review your requirement.</span>
                          </li>
                          <li className="flex items-center gap-3">
                            <span className="w-5 h-5 rounded-full bg-[#FBBF24]/15 border border-[#FBBF24]/40 flex items-center justify-center text-[#FBBF24] text-xs font-bold shrink-0">
                              ✓
                            </span>
                            <span>The appropriate professional reviews your request.</span>
                          </li>
                          <li className="flex items-center gap-3">
                            <span className="w-5 h-5 rounded-full bg-[#FBBF24]/15 border border-[#FBBF24]/40 flex items-center justify-center text-[#FBBF24] text-xs font-bold shrink-0">
                              ✓
                            </span>
                            <span>We&apos;ll contact you within one business day.</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* SUBTLE TEXT LINK: <- Return to Website */}
                    <div className="pt-6 border-t border-white/[0.06] w-full">
                      <button
                        type="button"
                        onClick={handleReset}
                        className="font-sans text-sm text-slate-400 hover:text-[#FBBF24] transition-colors cursor-pointer flex items-center gap-2 font-medium"
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
    </section>
  );
}
