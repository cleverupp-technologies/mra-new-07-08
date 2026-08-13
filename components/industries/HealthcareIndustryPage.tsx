"use client";

import React, { useState } from "react";
import Link from "next/link";
import { getHealthcareProblems } from "@/content/v2/problems";
import { Container } from "@/components/layout/Container";
import { SectionBadge } from "@/components/ui/SectionBadge";
import HeroNav from "@/components/sections/Section01Hero/HeroNav";
import Section12Footer from "@/components/sections/Section12Footer/Section12Footer";
import { ConsultationCTA } from "@/components/consultation/ConsultationCTA";
import {
  Stethoscope,
  Building2,
  Clock,
  Coins,
  FileCheck2,
  HelpCircle,
  TrendingUp,
  FileText,
  ArrowRight,
} from "lucide-react";

export function HealthcareIndustryPage() {
  const problems = getHealthcareProblems();
  const [selectedProblemId, setSelectedProblemId] = useState<string>("prob-healthcare-expansion");

  const activeProblem = problems.find((p) => p.id === selectedProblemId) || problems[0];

  // Factual detailed fields for Healthcare Problems
  const problemDetailsMap: Record<
    string,
    {
      decisionFraming: string;
      managementQuestions: string[];
      financialUnderstanding: string[];
      technicalAccountingContext: string[];
      insightLink?: { title: string; href: string };
    }
  > = {
    "prob-healthcare-expansion": {
      decisionFraming:
        "Opening a second location creates a distinct economic unit with its own capital exposure, cost base, and operating assumptions that differ materially from the primary clinic.",
      managementQuestions: [
        "What is the total capital exposure including pre-opening cash burn before break-even?",
        "What scan/patient volume threshold is required for the new branch to become self-sustaining?",
        "Should the expansion operate as a direct branch division or a separate SPV entity?",
      ],
      financialUnderstanding: [
        "Branch revenue allocation & central administrative overhead absorption",
        "Pre-opening cash flow sensitivity modeling under conservative volume ramp-up",
      ],
      technicalAccountingContext: [
        "Branch Division vs Separate SPV Entity Structuring",
        "Companies Act 2013 MCA Statutory Rules",
        "GST Multi-State & Inter-Branch Credit Allocation Rules",
      ],
      insightLink: {
        title: "Before Opening Another Clinic: What Should the Numbers Tell You?",
        href: "/insights/before-opening-another-clinic-what-the-numbers-tell-you",
      },
    },
    "prob-healthcare-cashflow": {
      decisionFraming:
        "Delayed TPA reimbursements create liquidity squeezes despite strong revenue. Aligning operating expenditure with actual cash realization requires structured cash flow modeling.",
      managementQuestions: [
        "What is the average claim settlement cycle by TPA payer and deduction rate?",
        "What liquidity buffer reserve is needed to fund clinician retainers during claim delays?",
        "How can pre-authorization checks be tightened to minimize claim rejections?",
      ],
      financialUnderstanding: [
        "TPA aging schedule review & claim reconciliation automation",
        "Working capital buffer sizing based on historical claim realization velocity",
      ],
      technicalAccountingContext: [
        "IRDAI TPA Settlement Guidelines",
        "Income Tax Section 194C / 194J TDS Deductions on TPA Payouts",
      ],
      insightLink: {
        title: "Managing Cash Flow Delays in TPA-Heavy Healthcare Operations",
        href: "/insights/managing-cash-flow-delays-in-tpa-heavy-healthcare-operations",
      },
    },
    "prob-growth-without-cash-flow": {
      decisionFraming:
        "Rapid top-line expansion often absorbs cash into working capital, receivables, and equipment lease liabilities faster than net operating profits are realized.",
      managementQuestions: [
        "Where is operating cash being absorbed as consultation volume increases?",
        "What is the current Days Sales Outstanding (DSO) for institutional accounts?",
      ],
      financialUnderstanding: [
        "13-week rolling cash flow forecasting & working capital cycle audit",
        "Bank borrowing base certification & debt covenant compliance",
      ],
      technicalAccountingContext: [
        "Working Capital Ratio Analysis & Operating Cycle Audit",
        "Bank Debt Covenant & Borrowing Base Certification",
      ],
    },
  };

  const currentDetails = problemDetailsMap[activeProblem.id] || {
    decisionFraming: activeProblem.explanation,
    managementQuestions: [
      "What are the primary financial risks in this operating scenario?",
      "How does this decision impact cash flow liquidity over the next 12 months?",
    ],
    financialUnderstanding: [
      "Cash flow timing and working capital impact assessment",
    ],
    technicalAccountingContext: activeProblem.technicalContext || [
      "Statutory accounting and tax compliance guidelines",
    ],
  };

  return (
    <main className="bg-[#FAF8F1] text-[#111827] min-h-screen font-sans selection:bg-[#F4B942] selection:text-[#111827]">
      {/* 0. GLOBAL NAVIGATION HEADER */}
      <HeroNav />

      {/* 01 — HERO REGION */}
      <section className="relative pt-36 sm:pt-44 lg:pt-48 pb-16 lg:pb-24 border-b border-[#FFD978]/40 overflow-hidden text-left">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="/images/healthcare.jpg"
            alt="Multi-storey hospital building"
            className="w-full h-full object-cover opacity-15 filter contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F1] via-[#FAF8F1]/85 to-transparent" />
        </div>

        <Container className="relative z-10">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center space-x-2 text-xs font-mono tracking-wider text-[#111827]/70 uppercase">
              <li>
                <Link href="/" className="hover:text-[#F4B942] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <span className="text-[#111827]/40">/</span>
              </li>
              <li>
                <Link href="/industries" className="hover:text-[#F4B942] transition-colors">
                  Industries
                </Link>
              </li>
              <li>
                <span className="text-[#111827]/40">/</span>
              </li>
              <li className="font-bold text-[#F4B942]" aria-current="page">
                Healthcare
              </li>
            </ol>
          </nav>

          <div className="max-w-4xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFD978]/40 border border-[#F4B942]/40 text-[#111827] text-xs font-mono font-bold tracking-widest uppercase">
              <Stethoscope className="w-4 h-4 text-[#F4B942]" />
              <span>Healthcare Business &amp; Practice Growth</span>
            </div>

            <h1 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-[#111827] leading-[1.12] tracking-tight">
              Navigating Capital Intensity, Multi-Location Expansion, and Cash Flow in{" "}
              <span className="italic text-[#1F3A8A]">Healthcare Enterprise.</span>
            </h1>

            <p className="font-sans text-[#111827]/85 text-base sm:text-lg lg:text-xl leading-relaxed max-w-3xl font-normal">
              Healthcare enterprise in South India operates under distinct commercial conditions: high initial capital intensity, extended working capital lead times, specialized doctor payout models, and multi-location expansion decisions.
            </p>
          </div>
        </Container>
      </section>

      {/* 02 — OPERATING REALITY STREAM */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#FFD978]/40 text-left">
        <Container>
          <div className="max-w-4xl space-y-8">
            <div className="space-y-2">
              <SectionBadge align="left">COMMERCIAL OPERATING REALITY</SectionBadge>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#111827] tracking-tight">
                Recognizable Healthcare Business Dynamics
              </h2>
            </div>

            <div className="space-y-6 pt-2">
              <div className="border-l-4 border-[#F4B942] pl-5 py-3 bg-[#FAF8F1] rounded-r-xl border border-l-0 border-[#FFD978]/60 shadow-sm">
                <span className="font-mono text-xs font-bold text-[#F4B942] uppercase tracking-wider block mb-1">
                  Reality 01 · Capital Intensity
                </span>
                <p className="font-serif text-lg sm:text-xl text-[#111827] font-bold leading-snug">
                  Growth decisions require committing capital before returns are certain.
                </p>
                <p className="font-sans text-xs sm:text-sm text-[#111827]/80 mt-1.5 leading-relaxed">
                  Premises fit-out, medical diagnostic equipment, and clinician retainers require upfront capital outlay well ahead of patient volume stabilization.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans text-xs sm:text-sm pt-2">
                <div className="p-5 rounded-xl bg-[#FAF8F1] border border-[#FFD978]/50 space-y-1.5 shadow-sm">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#F4B942]" />
                    <span className="font-mono text-[11px] font-bold text-[#1F3A8A] uppercase tracking-wider block">
                      Reality 02 · TPA Lead Times
                    </span>
                  </div>
                  <p className="font-bold text-[#111827] text-sm">Reimbursement cycles create working capital gaps.</p>
                  <p className="text-[#111827]/75 leading-relaxed">Growing patient volume increases receivables locked in insurance and TPA claim processing cycles.</p>
                </div>

                <div className="p-5 rounded-xl bg-[#FAF8F1] border border-[#FFD978]/50 space-y-1.5 shadow-sm">
                  <div className="flex items-center gap-2">
                    <Coins className="w-4 h-4 text-[#F4B942]" />
                    <span className="font-mono text-[11px] font-bold text-[#1F3A8A] uppercase tracking-wider block">
                      Reality 03 · Clinician Compensation
                    </span>
                  </div>
                  <p className="font-bold text-[#111827] text-sm">Doctor payout structures dictate operating margins.</p>
                  <p className="text-[#111827]/75 leading-relaxed">Fixed retainers, revenue-share models, and procedure payouts directly determine departmental contribution.</p>
                </div>

                <div className="p-5 rounded-xl bg-[#FAF8F1] border border-[#FFD978]/50 space-y-1.5 shadow-sm">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#F4B942]" />
                    <span className="font-mono text-[11px] font-bold text-[#1F3A8A] uppercase tracking-wider block">
                      Reality 04 · Equipment CapEx
                    </span>
                  </div>
                  <p className="font-bold text-[#111827] text-sm">Diagnostic machinery requires volume payback clarity.</p>
                  <p className="text-[#111827]/75 leading-relaxed">Advanced medical equipment requires scan volume thresholds and depreciation tax shield modeling.</p>
                </div>

                <div className="p-5 rounded-xl bg-[#FAF8F1] border border-[#FFD978]/50 space-y-1.5 shadow-sm">
                  <div className="flex items-center gap-2">
                    <FileCheck2 className="w-4 h-4 text-[#F4B942]" />
                    <span className="font-mono text-[11px] font-bold text-[#1F3A8A] uppercase tracking-wider block">
                      Reality 05 · Multi-Branch GST
                    </span>
                  </div>
                  <p className="font-bold text-[#111827] text-sm">Exempt healthcare services complicate input tax credit.</p>
                  <p className="text-[#111827]/75 leading-relaxed">Multi-location procurement and shared overhead billing require GST Rule 42/43 credit reversal management.</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 03 — DECISION MATRIX & PROBLEM INTERACTION */}
      <section className="py-16 sm:py-24 border-b border-[#FFD978]/40 text-left bg-[#FFD978]/15">
        <Container>
          <div className="max-w-4xl space-y-8">
            <div className="space-y-2">
              <SectionBadge align="left">HEALTHCARE DECISION MATRIX</SectionBadge>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#111827] tracking-tight">
                Core Healthcare Management Problems
              </h2>
              <p className="font-sans text-[#111827]/85 text-sm sm:text-base">
                Select a commercial problem to examine its financial decision framing, management questions, and technical context.
              </p>
            </div>

            {/* Problem Selection Tabs */}
            <div className="flex flex-wrap gap-2.5 pb-2 border-b border-[#FFD978]/60">
              {problems.map((p) => {
                const isSelected = p.id === selectedProblemId;
                return (
                  <button
                    key={p.id}
                    onClick={() => setSelectedProblemId(p.id)}
                    className={`font-sans text-xs sm:text-sm px-4 py-2.5 rounded-xl transition-all text-left font-semibold cursor-pointer ${
                      isSelected
                        ? "bg-[#1F3A8A] text-[#FAF8F1] shadow-md border border-[#1F3A8A]"
                        : "bg-white text-[#111827] border border-[#FFD978]/60 hover:border-[#F4B942]"
                    }`}
                  >
                    {p.title}
                  </button>
                );
              })}
            </div>

            {/* Active Problem Detailed Panel */}
            <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-2xl border border-[#FFD978] shadow-md space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#F4B942] block">
                  Problem Framing
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#111827]">
                  {activeProblem.title}
                </h3>
                <p className="font-sans text-[#111827]/85 text-sm sm:text-base leading-relaxed">
                  {activeProblem.recognitionLine}
                </p>
              </div>

              {/* Management Decision Framing Quote Box */}
              <div className="bg-[#FAF8F1] p-5 rounded-xl border border-[#FFD978]/60 space-y-1.5">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#1F3A8A] block">
                  Management Decision Framing:
                </span>
                <p className="font-serif italic text-base sm:text-lg text-[#111827] font-medium">
                  &ldquo;{currentDetails.decisionFraming}&rdquo;
                </p>
              </div>

              {/* Key Management Questions */}
              {currentDetails.managementQuestions && currentDetails.managementQuestions.length > 0 && (
                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-[#F4B942]" />
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#111827]">
                      Key Management Questions to Answer:
                    </span>
                  </div>
                  <ul className="space-y-2 list-none pl-0 font-sans text-xs sm:text-sm text-[#111827]/85">
                    {currentDetails.managementQuestions.map((q, i) => (
                      <li key={i} className="flex items-start gap-2.5 bg-[#FAF8F1] p-3 rounded-lg border border-[#FFD978]/40">
                        <span className="text-[#F4B942] font-bold text-sm">•</span>
                        <span className="leading-relaxed">{q}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Financial & Technical Context Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-[#FFD978]/40 font-sans text-xs">
                {currentDetails.financialUnderstanding && currentDetails.financialUnderstanding.length > 0 && (
                  <div className="space-y-2">
                    <span className="font-mono font-bold text-[#111827] uppercase tracking-wider block">
                      Financial Understanding:
                    </span>
                    <ul className="space-y-1.5 text-[#111827]/80 list-disc pl-4">
                      {currentDetails.financialUnderstanding.map((item, i) => (
                        <li key={i} className="leading-relaxed">{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {currentDetails.technicalAccountingContext && currentDetails.technicalAccountingContext.length > 0 && (
                  <div className="space-y-2">
                    <span className="font-mono font-bold text-[#1F3A8A] uppercase tracking-wider block">
                      Technical Accounting Context:
                    </span>
                    <ul className="space-y-1.5 text-[#111827]/80 list-disc pl-4">
                      {currentDetails.technicalAccountingContext.map((item, i) => (
                        <li key={i} className="leading-relaxed">{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Flagship Decision Insight Link */}
              {currentDetails.insightLink && (
                <div className="pt-4 border-t border-[#FFD978]/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#F4B942] block">
                      Flagship Healthcare Decision Insight
                    </span>
                    <Link
                      href={currentDetails.insightLink.href}
                      className="font-serif text-base text-[#1F3A8A] hover:text-[#F4B942] font-semibold underline underline-offset-4 decoration-[#F4B942] transition-colors inline-flex items-center gap-1.5"
                    >
                      <span>{currentDetails.insightLink.title}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* 04 — RELEVANT CAPABILITY */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#FFD978]/40 text-left">
        <Container>
          <div className="max-w-4xl space-y-6">
            <SectionBadge align="left">RELEVANT CAPABILITY</SectionBadge>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#111827]">
              Business Advisory &amp; Expansion Structuring
            </h2>
            <p className="font-sans text-[#111827]/85 text-base sm:text-lg leading-relaxed">
              Business Advisory helps healthcare leadership structure major expansion decisions before capital is committed. Through scenario modeling, break-even analysis, and capital requirement evaluation, MR&amp;A brings financial clarity to growing practices.
            </p>
            <div className="pt-2">
              <Link
                href="/services/business-advisory"
                className="inline-flex items-center gap-2 font-sans font-bold text-sm text-[#1F3A8A] hover:text-[#F4B942] transition-colors"
              >
                <span>Explore Business Advisory Capability</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* 05 — FIRM CREDIBILITY */}
      <section className="py-16 sm:py-20 bg-[#FAF8F1] border-b border-[#FFD978]/40 text-left">
        <Container>
          <div className="max-w-4xl space-y-6">
            <SectionBadge align="left">PROFESSIONAL DEPTH &amp; TRACK RECORD</SectionBadge>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#111827]">
              Chartered Accountancy Practice Established in 2012
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-[#FFD978]/60">
              <div>
                <span className="font-serif text-3xl sm:text-4xl text-[#1F3A8A] font-bold block">2012</span>
                <span className="font-mono text-xs text-[#111827]/70 uppercase tracking-wider block mt-1 font-bold">Established Year</span>
              </div>
              <div>
                <span className="font-serif text-3xl sm:text-4xl text-[#1F3A8A] font-bold block">50+</span>
                <span className="font-mono text-xs text-[#111827]/70 uppercase tracking-wider block mt-1 font-bold">Professionals</span>
              </div>
              <div>
                <span className="font-serif text-3xl sm:text-4xl text-[#1F3A8A] font-bold block">14+</span>
                <span className="font-mono text-xs text-[#111827]/70 uppercase tracking-wider block mt-1 font-bold">Years Practice</span>
              </div>
              <div>
                <span className="font-serif text-3xl sm:text-4xl text-[#1F3A8A] font-bold block">2</span>
                <span className="font-mono text-xs text-[#111827]/70 uppercase tracking-wider block mt-1 font-bold">Practice Offices</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 06 — PERSISTENT CONSULTATION CTA */}
      <ConsultationCTA id="consultation" />

      {/* 07 — INSTITUTIONAL FOOTER */}
      <Section12Footer />
    </main>
  );
}

export default HealthcareIndustryPage;
