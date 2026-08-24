"use client";

import React, { useState } from "react";
import Link from "next/link";
import { scrollToConsultation } from "@/lib/consultation-scroll";
import type {
  V2Industry,
  V2Problem,
  V2Service,
  V2ExperienceCard,
} from "@/types/v2";
import { Container } from "@/components/layout/Container";
import { SectionBadge } from "@/components/ui/SectionBadge";
import HeroNav from "@/components/sections/Section01Hero/HeroNav";
import Section12Footer from "@/components/sections/Section12Footer/Section12Footer";
import { ConsultationCTA } from "@/components/consultation/ConsultationCTA";
import {
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  ShieldCheck,
  Building2,
} from "lucide-react";

export interface V2IndustryPageProps {
  industry: V2Industry;
  problems?: readonly V2Problem[];
  servicesMap?: Record<string, V2Service[]>;
  experiencesMap?: Record<string, V2ExperienceCard[]>;
}

export function V2IndustryPage({
  industry,
  problems = [],
}: V2IndustryPageProps) {
  const [selectedProblemId, setSelectedProblemId] = useState<string>(
    problems[0]?.id || ""
  );

  const activeProblem =
    problems.find((p) => p.id === selectedProblemId) || problems[0];

  return (
    <main className="bg-[#FAF8F1] text-[#111827] min-h-screen font-sans selection:bg-[#F4B942] selection:text-[#111827]">
      <HeroNav />

      {/* HERO SECTION */}
      <section className="relative pt-36 sm:pt-44 lg:pt-48 pb-16 lg:pb-24 border-b border-[#FFD978]/40 overflow-hidden text-left">
        {industry.image && (
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            {/* Original source image at 100% photographic opacity with zero filters or blur */}
            <img
              src={industry.image}
              alt={industry.imageAlt || industry.name}
              className="w-full h-full object-cover object-right sm:object-center opacity-100"
            />
            {/* Subtle left-to-right fade: soft cream behind left text -> completely transparent right */}
            <div 
              className="hidden sm:block absolute inset-0"
              style={{
                background:
                  "linear-gradient(90deg, rgba(250, 248, 241, 0.96) 0%, rgba(250, 248, 241, 0.85) 26%, rgba(250, 248, 241, 0.30) 48%, transparent 68%, transparent 100%)",
              }}
            />
            {/* Subtle mobile top-to-bottom fade */}
            <div 
              className="sm:hidden absolute inset-0"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(250, 248, 241, 0.94) 0%, rgba(250, 248, 241, 0.50) 45%, transparent 80%)",
              }}
            />
          </div>
        )}

        <Container className="relative z-10">
          <div className="max-w-4xl space-y-5">
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
                  {industry.name}
                </li>
              </ol>
            </nav>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFD978]/40 border border-[#F4B942]/40 text-[#111827] text-xs font-mono font-bold tracking-widest uppercase">
              <Building2 className="w-4 h-4 text-[#F4B942]" />
              <span>PRACTICE SECTOR</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold font-serif text-[#111827] tracking-tight leading-[1.12]">
              Financial Advisory &amp; Statutory Governance for {industry.name}
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-[#111827]/85 font-normal leading-relaxed max-w-3xl">
              {industry.description}
            </p>
          </div>
        </Container>
      </section>

      {/* PROBLEMS SECTION */}
      {problems.length > 0 && (
        <section className="py-16 sm:py-24 border-b border-[#FFD978]/40 text-left bg-white">
          <Container>
            <div className="max-w-4xl space-y-8">
              <div className="space-y-2">
                <SectionBadge align="left">COMMERCIAL DECISIONS</SectionBadge>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#111827]">
                  Key Financial Challenges &amp; Decisions
                </h2>
              </div>

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
                          : "bg-[#FAF8F1] text-[#111827] border border-[#FFD978]/60 hover:border-[#F4B942]"
                      }`}
                    >
                      {p.title}
                    </button>
                  );
                })}
              </div>

              {activeProblem && (
                <div className="bg-[#FAF8F1] p-6 sm:p-8 lg:p-10 rounded-2xl border border-[#FFD978] shadow-md space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#111827]">
                      {activeProblem.title}
                    </h3>
                    <p className="font-sans text-[#111827]/85 text-sm sm:text-base leading-relaxed">
                      {activeProblem.recognitionLine}
                    </p>
                  </div>

                  <div className="bg-white p-5 rounded-xl border border-[#FFD978]/60 space-y-1">
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#1F3A8A] block">
                      Financial Framing:
                    </span>
                    <p className="font-serif italic text-base sm:text-lg text-[#111827]">
                      &ldquo;{activeProblem.explanation}&rdquo;
                    </p>
                  </div>

                  {activeProblem.approachSteps && activeProblem.approachSteps.length > 0 && (
                    <div className="space-y-3">
                      <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#111827] block">
                        5-Step Advisory Approach:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {activeProblem.approachSteps.map((step, idx) => (
                          <div key={idx} className="p-4 rounded-xl bg-white border border-[#FFD978]/50 space-y-1">
                            <span className="font-mono text-[10px] font-bold text-[#F4B942] uppercase tracking-wider block">
                              Step 0{idx + 1}
                            </span>
                            <h4 className="font-bold text-xs text-[#111827]">{step.title}</h4>
                            <p className="text-[11px] text-[#111827]/75 leading-relaxed">{step.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </Container>
        </section>
      )}

      <ConsultationCTA id="consultation" />
      <Section12Footer />
    </main>
  );
}

export default V2IndustryPage;
