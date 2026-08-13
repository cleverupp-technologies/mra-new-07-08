"use client";

import React, { useState } from "react";
import Link from "next/link";
import { getHealthcareProblems } from "@/content/problems";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

import { scrollToConsultation } from "@/lib/consultation-scroll";

export function HealthcareIndustryPage() {
  const problems = getHealthcareProblems();
  const [selectedProblemId, setSelectedProblemId] = useState<string>("prob-healthcare-expansion");

  const activeProblem = problems.find((p) => p.id === selectedProblemId) || problems[0];

  return (
    <div className="bg-[#faf8f5] text-slate-900 min-h-screen">
      
      {/* 01 — COMPACT HERO REGION (250px vertical space recovered) */}
      <section className="relative border-b border-stone-200/80 pt-6 sm:pt-8 lg:pt-10 pb-6 sm:pb-8 lg:pb-10">
        <Container>
          {/* Accessible Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-3 sm:mb-4">
            <ol className="flex items-center space-x-2 text-xs font-sans text-stone-500">
              <li>
                <Link href="/" className="hover:text-slate-950 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <span>/</span>
              </li>
              <li>
                <Link href="/industries" className="hover:text-slate-950 transition-colors">
                  Industries
                </Link>
              </li>
              <li>
                <span>/</span>
              </li>
              <li className="font-semibold text-slate-950" aria-current="page">
                Healthcare
              </li>
            </ol>
          </nav>

          <div className="max-w-4xl space-y-4">
            {/* Restrained Eyebrow */}
            <div className="inline-flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-700 inline-block" />
              <span className="font-sans text-xs font-semibold uppercase tracking-widest text-amber-800">
                Healthcare Business &amp; Practice Growth
              </span>
            </div>

            {/* Display H1 */}
            <h1 className="font-serif font-normal text-3xl sm:text-4xl lg:text-5xl text-slate-950 leading-[1.12] tracking-tight">
              Navigating Capital Intensity, Multi-Location Expansion, and Cash Flow in{" "}
              <span className="text-amber-700 font-serif italic">Healthcare Enterprise.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="font-sans text-slate-700 text-base sm:text-lg leading-relaxed max-w-3xl">
              Healthcare enterprise in Kerala operates under distinct commercial conditions: high initial capital intensity, extended working capital lead times, specialized doctor payout models, and multi-location expansion decisions.
            </p>
          </div>
        </Container>
      </section>

      {/* 02 — OPERATING REALITY STREAM (Visible Above the Fold at 1440x900) */}
      <Section padding="none" className="bg-white border-b border-stone-200/80 py-8 sm:py-10 lg:py-12">
        <Container>
          <div className="max-w-4xl space-y-6">
            <div className="space-y-1.5">
              <span className="text-xs font-sans font-semibold uppercase tracking-widest text-amber-800 block">
                Commercial Operating Reality
              </span>
              <h2 className="text-xl sm:text-2xl font-serif font-normal text-slate-950">
                Recognizable Healthcare Business Dynamics
              </h2>
            </div>

            {/* Asymmetric Editorial Stream */}
            <div className="space-y-6 pt-2">
              {/* Featured Lead Reality 01 */}
              <div className="border-l-2 border-amber-800 pl-4 py-1 bg-[#faf8f5]/60 rounded-r-lg">
                <span className="font-mono text-xs font-bold text-amber-800 uppercase tracking-wider block mb-1">
                  Reality 01 · Capital Intensity
                </span>
                <p className="font-serif text-lg sm:text-xl text-slate-950 font-normal leading-snug">
                  Growth decisions can require committing capital before the returns are certain.
                </p>
                <p className="font-sans text-xs sm:text-sm text-slate-600 mt-1">
                  Premises fit-out, medical diagnostic equipment, and staffing commitments require upfront capital outlay well ahead of patient volume stabilization.
                </p>
              </div>

              {/* Supporting Stream Realities (02 - 06) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 font-sans text-xs sm:text-sm text-slate-700 pt-2 border-t border-stone-100">
                <div className="space-y-1">
                  <span className="font-mono text-[11px] font-bold text-stone-500 uppercase tracking-wider block">Reality 02 · TPA Lead Times</span>
                  <p className="font-medium text-slate-950">Reimbursement cycles create working capital gaps.</p>
                  <p className="text-stone-600">Growing patient volume increases receivables locked in insurance and TPA claim processing cycles.</p>
                </div>
                <div className="space-y-1">
                  <span className="font-mono text-[11px] font-bold text-stone-500 uppercase tracking-wider block">Reality 03 · Clinician Compensation</span>
                  <p className="font-medium text-slate-950">Doctor payout structures dictate operating margins.</p>
                  <p className="text-stone-600">Fixed retainers, revenue-share models, and procedure payouts directly determine departmental contribution.</p>
                </div>
                <div className="space-y-1">
                  <span className="font-mono text-[11px] font-bold text-stone-500 uppercase tracking-wider block">Reality 04 · Equipment CapEx</span>
                  <p className="font-medium text-slate-950">Diagnostic machinery requires volume payback clarity.</p>
                  <p className="text-stone-600">Advanced medical equipment requires scan volume thresholds and depreciation tax shield modeling.</p>
                </div>
                <div className="space-y-1">
                  <span className="font-mono text-[11px] font-bold text-stone-500 uppercase tracking-wider block">Reality 05 · Multi-Branch GST</span>
                  <p className="font-medium text-slate-950">Exempt healthcare services complicate input tax credit.</p>
                  <p className="text-stone-600">Multi-location procurement and shared overhead billing require GST Rule 42/43 credit reversal management.</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 03 — DECISION MATRIX & PROBLEM INTERACTION */}
      <Section padding="spacious" className="py-12 sm:py-16">
        <Container>
          <div className="max-w-4xl space-y-8">
            <div className="space-y-2">
              <span className="text-xs font-sans font-semibold uppercase tracking-widest text-amber-800 block">
                Healthcare Decision Matrix
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-normal text-slate-950">
                Core Healthcare Management Problems
              </h2>
              <p className="font-sans text-slate-700 text-sm sm:text-base">
                Select a commercial problem to examine its financial decision framing, management questions, and technical context.
              </p>
            </div>

            {/* Problem Selection Tabs */}
            <div className="flex flex-wrap gap-2 pb-2 border-b border-stone-200">
              {problems.map((p) => {
                const isSelected = p.id === selectedProblemId;
                return (
                  <button
                    key={p.id}
                    onClick={() => setSelectedProblemId(p.id)}
                    className={`font-sans text-xs sm:text-sm px-3.5 py-2 rounded-lg transition-all text-left font-medium ${
                      isSelected
                        ? "bg-slate-950 text-white shadow-sm"
                        : "bg-white text-slate-700 border border-stone-200 hover:border-slate-400"
                    }`}
                  >
                    {p.title}
                  </button>
                );
              })}
            </div>

            {/* Active Problem Detailed Panel */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200/80 shadow-sm space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-sans font-bold uppercase tracking-widest text-amber-800 block">
                  Problem Framing
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-normal text-slate-950">
                  {activeProblem.title}
                </h3>
                <p className="font-sans text-slate-700 text-sm sm:text-base leading-relaxed">
                  {activeProblem.recognition}
                </p>
              </div>

              {/* Decision Framing Box */}
              <div className="bg-[#faf8f5] p-4 rounded-xl border border-stone-200/80 space-y-1">
                <span className="font-sans text-xs font-bold uppercase tracking-wider text-slate-900 block">
                  Management Decision Framing:
                </span>
                <p className="font-serif italic text-base sm:text-lg text-slate-950">
                  &ldquo;{activeProblem.decisionFraming}&rdquo;
                </p>
              </div>

              {/* Management Questions */}
              <div className="space-y-2">
                <span className="font-sans text-xs font-bold uppercase tracking-wider text-slate-900 block">
                  Key Management Questions to Answer:
                </span>
                <ul className="space-y-2 list-none pl-0 font-sans text-xs sm:text-sm text-slate-800">
                  {activeProblem.managementQuestions.map((q, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <span className="text-amber-800 font-bold">•</span>
                      <span>{q}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Financial & Technical Context */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-stone-100 text-xs font-sans">
                <div className="space-y-1">
                  <span className="font-semibold text-slate-950 uppercase tracking-wider block">Financial Understanding:</span>
                  <ul className="space-y-1 text-slate-600 list-disc pl-4">
                    {activeProblem.financialUnderstanding.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-1">
                  <span className="font-semibold text-slate-950 uppercase tracking-wider block">Technical Context:</span>
                  <ul className="space-y-1 text-slate-600 list-disc pl-4">
                    {activeProblem.technicalAccountingContext.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Next Step Journey Links */}
              {activeProblem.id === "prob-healthcare-expansion" && (
                <div className="pt-4 border-t border-stone-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <span className="font-sans text-xs text-stone-500 block">Flagship Decision Insight:</span>
                    <Link
                      href="/insights/before-opening-another-clinic-what-the-numbers-tell-you"
                      className="font-serif text-base text-slate-950 hover:text-amber-800 font-medium underline underline-offset-4 decoration-amber-700 transition-colors"
                    >
                      Before Opening Another Clinic: What Should the Numbers Tell You? →
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Container>
      </Section>

      {/* 04 — RELEVANT CAPABILITY (Business Advisory Introduced Quietly) */}
      <Section padding="spacious" className="bg-white border-b border-stone-200/80 py-12 sm:py-16">
        <Container>
          <div className="max-w-4xl space-y-6">
            <span className="text-xs font-sans font-semibold uppercase tracking-widest text-amber-800 block">
              Relevant Capability
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-normal text-slate-950">
              Business Advisory &amp; Expansion Structuring
            </h2>
            <p className="font-sans text-slate-700 text-base sm:text-lg leading-relaxed">
              Business Advisory helps healthcare leadership structure major expansion decisions before capital is committed. Through scenario modeling, break-even analysis, and capital requirement evaluation, MR&amp;A brings financial clarity to growing practices.
            </p>
            <div>
              <Link
                href="/services/business-advisory"
                className="inline-flex items-center space-x-2 font-sans font-semibold text-sm text-slate-950 hover:text-amber-800 border-b-2 border-slate-950 hover:border-amber-800 pb-1 transition-colors"
              >
                <span>Explore Business Advisory Capability →</span>
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* 05 — FIRM CREDIBILITY (Verified Facts Only) */}
      <Section padding="spacious" className="bg-white border-b border-stone-200/80 py-12 sm:py-16">
        <Container>
          <div className="max-w-4xl space-y-6">
            <span className="text-xs font-sans font-semibold uppercase tracking-widest text-amber-800 block">
              Professional Depth &amp; Track Record
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-normal text-slate-950">
              Chartered Accountancy Practice Established in 2012
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-4 border-t border-stone-200">
              <div>
                <span className="font-serif text-3xl text-slate-950 font-normal block">2012</span>
                <span className="font-sans text-xs text-stone-600 uppercase tracking-wider block mt-1">Established Year</span>
              </div>
              <div>
                <span className="font-serif text-3xl text-slate-950 font-normal block">50+</span>
                <span className="font-sans text-xs text-stone-600 uppercase tracking-wider block mt-1">Professionals</span>
              </div>
              <div>
                <span className="font-serif text-3xl text-slate-950 font-normal block">Jail Road</span>
                <span className="font-sans text-xs text-stone-600 uppercase tracking-wider block mt-1">Kozhikode HQ</span>
              </div>
              <div>
                <span className="font-serif text-3xl text-slate-950 font-normal block">Mukkam</span>
                <span className="font-sans text-xs text-stone-600 uppercase tracking-wider block mt-1">Branch Office</span>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 06 — CONTEXTUAL CONSULTATION SECTION */}
      <Section padding="spacious" className="bg-[#faf8f5] py-16 sm:py-24">
        <Container>
          <div className="max-w-3xl space-y-6 text-center mx-auto">
            <span className="w-2 h-2 rounded-full bg-amber-700 inline-block" />
            <h2 className="text-3xl sm:text-4xl font-serif font-normal text-slate-950 leading-snug">
              Discussing a Healthcare Practice Decision or Expansion Plan?
            </h2>
            <p className="font-sans text-slate-700 text-lg leading-relaxed max-w-xl mx-auto">
              Initiate a confidential advisory discussion with MR&amp;A partners on practice growth, cash flow lead times, or expansion financial modeling.
            </p>
            <div className="pt-4">
              <Button href="#consultation" onClick={(e) => scrollToConsultation(e)} variant="primary" size="lg">
                Initiate Healthcare Advisory Discussion
              </Button>
            </div>
          </div>
        </Container>
      </Section>

    </div>
  );
}
