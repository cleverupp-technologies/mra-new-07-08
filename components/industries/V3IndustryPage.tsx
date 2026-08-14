"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import {
  TrendingUp,
  Wallet,
  Package,
  Scale,
  ShieldCheck,
  PieChart,
  Building2,
  Layers,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  BookOpen,
  Building,
} from "lucide-react";
import type { V2Industry, V2Problem } from "@/types/v2";
import { Container } from "@/components/layout/Container";
import { SectionBadge } from "@/components/ui/SectionBadge";
import HeroNav from "@/components/sections/Section01Hero/HeroNav";
import Section12Footer from "@/components/sections/Section12Footer/Section12Footer";
import { ConsultationCTA } from "@/components/consultation/ConsultationCTA";
import {
  getIndustryDecisions,
  IndustryDecisionSituation,
} from "@/content/v2/industry-decisions";
import { getAllPublishedServices } from "@/content/v2/repository";

function getSituationIcon(category: string, title: string, idx: number) {
  const cat = (category + " " + title).toLowerCase();
  if (cat.includes("expansion") || cat.includes("capital") || cat.includes("growth")) {
    return <TrendingUp className="w-5 h-5 text-[#F4B942]" />;
  }
  if (cat.includes("working capital") || cat.includes("cash") || cat.includes("fund")) {
    return <Wallet className="w-5 h-5 text-[#F4B942]" />;
  }
  if (cat.includes("inventory") || cat.includes("supply") || cat.includes("logistics")) {
    return <Package className="w-5 h-5 text-[#F4B942]" />;
  }
  if (cat.includes("gst") || cat.includes("tax") || cat.includes("compliance") || cat.includes("statutory")) {
    return <Scale className="w-5 h-5 text-[#F4B942]" />;
  }
  if (cat.includes("governance") || cat.includes("control") || cat.includes("audit") || cat.includes("risk")) {
    return <ShieldCheck className="w-5 h-5 text-[#F4B942]" />;
  }
  if (cat.includes("mis") || cat.includes("profit") || cat.includes("reporting") || cat.includes("margin")) {
    return <PieChart className="w-5 h-5 text-[#F4B942]" />;
  }
  if (cat.includes("real estate") || cat.includes("operation") || cat.includes("asset")) {
    return <Building2 className="w-5 h-5 text-[#F4B942]" />;
  }
  const fallbackIcons = [
    <TrendingUp key="1" className="w-5 h-5 text-[#F4B942]" />,
    <Wallet key="2" className="w-5 h-5 text-[#F4B942]" />,
    <Layers key="3" className="w-5 h-5 text-[#F4B942]" />,
    <Scale key="4" className="w-5 h-5 text-[#F4B942]" />,
    <ShieldCheck key="5" className="w-5 h-5 text-[#F4B942]" />,
    <PieChart key="6" className="w-5 h-5 text-[#F4B942]" />,
  ];
  return fallbackIcons[idx % fallbackIcons.length];
}

export interface V3IndustryPageProps {
  industry: V2Industry;
  problems?: readonly V2Problem[];
  problemContextsMap?: Record<string, unknown>;
  servicesMap?: Record<string, unknown>;
  experiencesMap?: Record<string, unknown>;
}

export function V3IndustryPage({ industry }: V3IndustryPageProps) {
  const overviewData = getIndustryDecisions(industry.slug, industry.name);
  const decisions = overviewData.decisions;
  const [selectedDecisionIndex, setSelectedDecisionIndex] = useState<number>(0);

  const activeDecision: IndustryDecisionSituation =
    decisions[selectedDecisionIndex] || decisions[0];

  const allServices = getAllPublishedServices();
  const relevantServices = activeDecision?.associatedServiceSlugs
    ? allServices.filter((s) =>
        activeDecision.associatedServiceSlugs.includes(s.slug)
      )
    : allServices.slice(0, 3);

  const audienceList = [
    "Growing Enterprises",
    "Owner-Managed Companies",
    "Family Businesses",
    `${industry.name} Operations`,
    "South India Regional Units",
    "CFOs & Finance Directors",
    "Expanding Enterprises",
    "Managing Partners",
  ];

  return (
    <main className="bg-[#FAF8F1] text-[#111827] min-h-screen font-sans selection:bg-[#F4B942] selection:text-[#111827]">
      {/* 0. GLOBAL DESKTOP & MOBILE HEADER */}
      <HeroNav />

      {/* 1. HERO SECTION WITH IMAGE OVERLAY */}
      <section className="relative pt-36 sm:pt-44 lg:pt-48 pb-16 lg:pb-24 border-b border-[#FFD978]/40 overflow-hidden text-left">
        {industry.image && (
          <div className="absolute inset-0 z-0 pointer-events-none">
            <img
              src={industry.image}
              alt={industry.imageAlt || industry.name}
              className="w-full h-full object-cover opacity-15 filter contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F1] via-[#FAF8F1]/85 to-transparent" />
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
              <span>{industry.name.toUpperCase()} SECTOR PRACTICE</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold font-serif text-[#111827] tracking-tight leading-[1.12]">
              {overviewData.heroTitle || `Strategic Advisory for ${industry.name} Operations`}
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-[#111827]/85 font-normal leading-relaxed max-w-3xl border-l-2 border-[#F4B942] pl-4">
              {overviewData.heroDescription || industry.description}
            </p>

            {/* Monumental Practice Stats */}
            <div className="pt-6 border-t border-[#FFD978]/60 grid grid-cols-2 sm:grid-cols-4 gap-6">
              <div>
                <span className="font-serif text-2xl sm:text-3xl text-[#1F3A8A] font-bold block">14+ Yrs</span>
                <span className="font-mono text-[10px] text-[#111827]/70 uppercase tracking-wider block mt-0.5">Practice Experience</span>
              </div>
              <div>
                <span className="font-serif text-2xl sm:text-3xl text-[#1F3A8A] font-bold block">Extensive</span>
                <span className="font-mono text-[10px] text-[#111827]/70 uppercase tracking-wider block mt-0.5">Industry Engagements</span>
              </div>
              <div>
                <span className="font-serif text-2xl sm:text-3xl text-[#1F3A8A] font-bold block">50+</span>
                <span className="font-mono text-[10px] text-[#111827]/70 uppercase tracking-wider block mt-0.5">Professionals</span>
              </div>
              <div>
                <span className="font-serif text-2xl sm:text-3xl text-[#1F3A8A] font-bold block">ICAI</span>
                <span className="font-mono text-[10px] text-[#111827]/70 uppercase tracking-wider block mt-0.5">Statutory Standards</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. SECTOR EXECUTIVE OVERVIEW & INTENDED AUDIENCE */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#FFD978]/40 text-left">
        <Container>
          <div className="max-w-4xl space-y-6">
            <div className="space-y-2">
              <SectionBadge align="left" as="h2">SECTOR EXECUTIVE OVERVIEW</SectionBadge>
              <p className="text-2xl sm:text-3xl font-serif font-bold text-[#111827] tracking-tight">
                Sector Advisory Focus: {industry.name}
              </p>
              <p className="font-sans text-[#111827]/85 text-base sm:text-lg leading-relaxed">
                Manesh Rineesh &amp; Associates assists management teams in the {industry.name.toLowerCase()} sector to evaluate commercial decisions—such as working capital optimization, capital expenditure planning, MIS reporting, and statutory compliance—before operational issues become financial liabilities.
              </p>
            </div>

            {/* Target Audience Badges */}
            <div className="pt-4 border-t border-[#FFD978]/40 space-y-3">
              <span className="font-mono text-xs font-bold text-[#F4B942] uppercase tracking-wider block">
                THIS PRACTICE PAGE IS INTENDED FOR:
              </span>
              <div className="flex flex-wrap gap-2">
                {audienceList.map((aud, i) => (
                  <span
                    key={i}
                    className="font-sans text-xs text-[#111827] bg-[#FAF8F1] border border-[#FFD978]/60 px-3.5 py-1.5 rounded-full font-medium"
                  >
                    • {aud}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. COMMERCIAL DECISION BOARD */}
      {decisions && decisions.length > 0 && (
        <section className="py-16 sm:py-24 border-b border-[#FFD978]/40 text-left bg-[#FFD978]/15">
          <Container>
            <div className="max-w-4xl space-y-8">
              <div className="space-y-2">
                <SectionBadge align="left" as="h2">COMMERCIAL DECISION BOARD</SectionBadge>
                <p className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#111827] tracking-tight">
                  Business Situations We Commonly Observe
                </p>
                <p className="font-sans text-[#111827]/85 text-sm sm:text-base">
                  Select a decision context to review financial considerations, management framing, and MR&amp;A advisory approach.
                </p>
              </div>

              {/* Decision Selector Buttons Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {decisions.map((d, idx) => {
                  const isSelected = idx === selectedDecisionIndex;
                  return (
                    <button
                      key={d.id}
                      onClick={() => setSelectedDecisionIndex(idx)}
                      className={`p-5 rounded-2xl transition-all text-left font-semibold cursor-pointer flex flex-col justify-between space-y-3 border ${
                        isSelected
                          ? "bg-[#1F3A8A] text-[#FAF8F1] shadow-md border-[#1F3A8A]"
                          : "bg-white text-[#111827] border-[#FFD978]/60 hover:border-[#F4B942]"
                      }`}
                    >
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span
                            className={`font-mono text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                              isSelected
                                ? "bg-[#F4B942] text-[#111827]"
                                : "bg-[#FAF8F1] text-[#1F3A8A] border border-[#FFD978]/50"
                            }`}
                          >
                            {d.category}
                          </span>
                          <span className={`font-mono text-xs ${isSelected ? "text-[#F4B942]" : "text-[#111827]/50"}`}>
                            0{idx + 1}
                          </span>
                        </div>
                        <h3 className="font-serif font-bold text-lg leading-snug">
                          {d.title}
                        </h3>
                        <p
                          className={`font-sans text-xs leading-relaxed line-clamp-2 ${
                            isSelected ? "text-[#FAF8F1]/85" : "text-[#111827]/75"
                          }`}
                        >
                          {d.recognitionLine}
                        </p>
                      </div>

                      <div className="pt-2 border-t border-current/10 flex items-center justify-between text-xs">
                        <span className="font-mono text-[10px] uppercase tracking-wider font-bold">
                          View Advisory Framework
                        </span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* 4. ACTIVE DECISION DEEP DIVE — COMMERCIAL REALITY & FINANCIAL IMPLICATIONS */}
      {activeDecision && (
        <section className="py-16 sm:py-20 bg-white border-b border-[#FFD978]/40 text-left">
          <Container>
            <div className="max-w-4xl space-y-8">
              {/* Commercial Reality Header & Quote Box */}
              <div className="space-y-4 border-b border-[#FFD978]/40 pb-6">
                <SectionBadge align="left" as="h2">
                  COMMERCIAL REALITY · {activeDecision.title.toUpperCase()}
                </SectionBadge>
                <p className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#111827]">
                  Operational Dynamics &amp; Context
                </p>
                <blockquote className="font-serif italic text-base sm:text-lg text-[#1F3A8A] bg-[#FAF8F1] p-4 rounded-xl border-l-4 border-[#F4B942] border border-[#FFD978]/60">
                  &ldquo;{activeDecision.recognitionLine}&rdquo;
                </blockquote>
                <p className="font-sans text-[#111827]/85 text-sm sm:text-base leading-relaxed">
                  {activeDecision.commercialContext}
                </p>
              </div>

              {/* Financial Implications Cards */}
              {activeDecision.financialConsiderations &&
                activeDecision.financialConsiderations.length > 0 && (
                  <div className="space-y-4 pt-2">
                    <span className="font-mono text-xs font-bold text-[#F4B942] uppercase tracking-wider block">
                      FINANCIAL IMPLICATIONS &amp; RISK CONSIDERATIONS
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {activeDecision.financialConsiderations.map((fc, i) => (
                        <div
                          key={i}
                          className="p-5 rounded-2xl bg-[#FAF8F1] border border-[#FFD978] space-y-2 shadow-sm"
                        >
                          <span className="font-mono text-[10px] font-bold text-[#1F3A8A] uppercase tracking-wider block">
                            RISK CONSIDERATION 0{i + 1}
                          </span>
                          <h4 className="font-serif font-bold text-base text-[#111827]">
                            {fc.title}
                          </h4>
                          <p className="font-sans text-xs text-[#111827]/80 leading-relaxed">
                            {fc.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              {/* Sequential Timeline Steps for Professional Review Framework */}
              {activeDecision.professionalConsiderations &&
                activeDecision.professionalConsiderations.length > 0 && (
                  <div className="pt-6 border-t border-[#FFD978]/40 space-y-6">
                    <div className="space-y-1">
                      <span className="font-mono text-xs font-bold text-[#1F3A8A] uppercase tracking-wider block">
                        STRUCTURED PROFESSIONAL REVIEW FRAMEWORK
                      </span>
                      <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#111827]">
                        MR&amp;A Advisory Pathway for {activeDecision.title}
                      </h3>
                    </div>

                    <div className="space-y-3">
                      {activeDecision.professionalConsiderations.map((pc, i) => (
                        <div
                          key={i}
                          className="p-4 rounded-xl bg-[#FAF8F1] border border-[#FFD978]/60 flex items-start gap-3.5 shadow-sm"
                        >
                          <span className="w-7 h-7 rounded-full bg-[#1F3A8A] text-[#FAF8F1] font-mono text-xs font-bold flex items-center justify-center shrink-0">
                            0{i + 1}
                          </span>
                          <p className="font-sans text-xs sm:text-sm text-[#111827]/90 leading-relaxed pt-1">
                            {pc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              {/* Associated Capabilities & Related Insights */}
              <div className="pt-6 border-t border-[#FFD978]/40 space-y-6">
                <span className="font-mono text-xs font-bold text-[#F4B942] uppercase tracking-wider block">
                  RELEVANT PRACTICE CAPABILITIES &amp; INSIGHTS
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  {relevantServices.map((svc) => (
                    <div
                      key={svc.id}
                      className="p-5 rounded-2xl bg-[#FAF8F1] border border-[#FFD978] flex flex-col justify-between space-y-3 shadow-sm hover:border-[#F4B942] transition-colors"
                    >
                      <div className="space-y-1.5">
                        <span className="font-mono text-[10px] font-bold text-[#1F3A8A] uppercase tracking-wider block">
                          PRACTICE CAPABILITY
                        </span>
                        <h4 className="font-serif font-bold text-base text-[#111827]">
                          {svc.title}
                        </h4>
                        <p className="font-sans text-xs text-[#111827]/75 line-clamp-2">
                          {svc.description}
                        </p>
                      </div>
                      <Link
                        href={`/services/${svc.slug}`}
                        className="inline-flex items-center gap-1 font-sans font-bold text-xs text-[#1F3A8A] hover:text-[#F4B942] transition-colors pt-2"
                      >
                        <span>Learn About Service</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  ))}

                  {activeDecision.relatedInsightTitles &&
                    activeDecision.relatedInsightTitles.map((insight, i) => (
                      <div
                        key={i}
                        className="p-5 rounded-2xl bg-[#FAF8F1] border border-[#FFD978] flex flex-col justify-between space-y-3 shadow-sm hover:border-[#F4B942] transition-colors"
                      >
                        <div className="space-y-1.5">
                          <span className="font-mono text-[10px] font-bold text-[#F4B942] uppercase tracking-wider block">
                            {insight.category} • {insight.readTime}
                          </span>
                          <h4 className="font-serif font-bold text-base text-[#111827]">
                            {insight.title}
                          </h4>
                        </div>
                        <Link
                          href={`/insights/${insight.slug}`}
                          className="inline-flex items-center gap-1 font-sans font-bold text-xs text-[#1F3A8A] hover:text-[#F4B942] transition-colors pt-2"
                        >
                          <span>Read Article</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* 5. PERSISTENT CONSULTATION CTA */}
      <ConsultationCTA id="consultation" />

      {/* 6. INSTITUTIONAL FOOTER */}
      <Section12Footer />
    </main>
  );
}

export default V3IndustryPage;
