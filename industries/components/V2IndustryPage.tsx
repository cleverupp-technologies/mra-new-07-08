"use client";

/**
 * V2IndustryPage — Reusable V2 Industry Page Component
 *
 * Implements the approved visitor journey:
 *   INDUSTRY OPENING
 *   ↓
 *   INDUSTRY EXPERIENCE / VERIFIED PROOF (if present)
 *   ↓
 *   "HERE'S WHAT WE KEEP SEEING." (Problem Introduction)
 *   ↓
 *   RECURRING PROBLEMS (Problem Selector — no preselection by default)
 *   ↓ [Visitor selects a problem OR lands with #problem-slug]
 *   PROBLEM UNDERSTANDING
 *   ↓
 *   VERIFIED EXPERIENCE WITH PATTERN (if present)
 *   ↓
 *   "HERE'S WHAT WE CAN DO ABOUT IT." (5-Step Approach)
 *   ↓
 *   RELEVANT SERVICE(S)
 *   ↓
 *   RELEVANT CLIENT EXPERIENCES (if present)
 *   ↓
 *   BOOK A CONSULTATION
 */

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { scrollToConsultation } from "@/lib/consultation-scroll";
import type {
  V2Industry,
  V2Problem,
  V2Service,
  V2ExperienceCard,
} from "@/types/v2";
import { Container } from "@/components/layout/Container";

// Canonical 5-Step MR&A Approach (used as global shared framework)
const defaultApproachSteps = [
  {
    step: "01",
    title: "Understand the situation",
    description:
      "Evaluate the current financial reality, cash flow patterns, and commitments before taking action.",
  },
  {
    step: "02",
    title: "Find what is driving it",
    description:
      "Analyze underlying cost structures, working capital lags, margins, or capital terms causing the issue.",
  },
  {
    step: "03",
    title: "Compare the options",
    description:
      "Model scenarios, risk profiles, and capital requirements for potential strategic paths.",
  },
  {
    step: "04",
    title: "Decide what should change",
    description:
      "Establish actionable financial frameworks, operational priorities, and execution milestones.",
  },
  {
    step: "05",
    title: "Track what happens",
    description:
      "Monitor ongoing key metrics, cash positions, and variances to ensure stability as the business moves forward.",
  },
] as const;

export interface ProblemContextOverride {
  recognitionLine: string;
  explanation: string;
}

export interface V2IndustryPageProps {
  industry: V2Industry;
  problems: readonly V2Problem[];
  problemContextsMap: Record<string, ProblemContextOverride>;
  servicesMap: Record<string, readonly V2Service[]>;
  experiencesMap: Record<string, readonly V2ExperienceCard[]>;
}

export function V2IndustryPage({
  industry,
  problems,
  problemContextsMap,
  servicesMap,
  experiencesMap,
}: V2IndustryPageProps) {
  // Initialize activeProblemSlug from URL hash if present on client
  const [activeProblemSlug, setActiveProblemSlug] = useState<string | null>(
    () => {
      if (typeof window === "undefined") return null;
      const rawHash = window.location.hash.replace(/^#/, "").trim();
      if (!rawHash) return null;
      const matched = problems.find((p) => p.slug === rawHash);
      return matched ? matched.slug : null;
    }
  );

  const journeyRef = useRef<HTMLDivElement>(null);
  const selectorRef = useRef<HTMLDivElement>(null);

  // Sync state on hashchange events
  useEffect(() => {
    const handleHashChange = () => {
      const rawHash = window.location.hash.replace(/^#/, "").trim();
      if (!rawHash) {
        setActiveProblemSlug(null);
        return;
      }
      const matched = problems.find((p) => p.slug === rawHash);
      setActiveProblemSlug(matched ? matched.slug : null);
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [problems]);

  // Handler for problem selection
  const handleSelectProblem = (slug: string) => {
    if (activeProblemSlug === slug) {
      // Allow toggling off if clicked again
      setActiveProblemSlug(null);
      if (typeof window !== "undefined") {
        window.history.replaceState(
          null,
          "",
          window.location.pathname + window.location.search
        );
      }
      return;
    }

    setActiveProblemSlug(slug);

    if (typeof window !== "undefined") {
      // Update hash without polluting history stack unnecessarily
      window.history.replaceState(null, "", `#${slug}`);
    }

    // Smooth scroll to problem journey panel if appropriate
    setTimeout(() => {
      if (journeyRef.current) {
        const yOffset = -90; // Header clearance
        const element = journeyRef.current;
        const y =
          element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }, 100);
  };

  const activeProblem = problems.find((p) => p.slug === activeProblemSlug);
  const activeContext = activeProblem
    ? problemContextsMap[activeProblem.id] ?? {
        recognitionLine: activeProblem.recognitionLine,
        explanation: activeProblem.explanation,
      }
    : null;
  const activeServices = activeProblem
    ? servicesMap[activeProblem.id] ?? []
    : [];
  const activeExperiences = activeProblem
    ? experiencesMap[activeProblem.id] ?? []
    : [];

  const hasVerifiedProof =
    Boolean(industry.experienceContext) ||
    typeof industry.verifiedClientCount === "number";

  return (
    <div className="bg-[#faf8f5] text-slate-950 min-h-screen">
      {/* ─────────────────────────────────────────────────────────────────
          01 — INDUSTRY OPENING
      ────────────────────────────────────────────────────────────────── */}
      <header className="pt-8 sm:pt-12 lg:pt-16 pb-12 sm:pb-16 lg:pb-20 border-b border-stone-200/80 bg-white">
        <Container>
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-6 sm:mb-8">
            <ol className="flex items-center space-x-2 text-xs font-sans text-stone-500">
              <li>
                <Link
                  href="/"
                  className="hover:text-slate-950 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <span>/</span>
              </li>
              <li>
                <Link
                  href="/#industry-welcome"
                  className="hover:text-slate-950 transition-colors"
                >
                  Industries
                </Link>
              </li>
              <li>
                <span>/</span>
              </li>
              <li
                className="font-semibold text-slate-950"
                aria-current="page"
              >
                {industry.name}
              </li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left: Title & Description */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-600 inline-block" />
                <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-amber-700">
                  Your Industry
                </span>
              </div>

              <h1 className="font-serif font-normal text-3xl sm:text-4xl lg:text-5xl text-slate-950 leading-[1.12] tracking-tight">
                {industry.name}
              </h1>

              <p className="font-sans text-slate-700 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl">
                {industry.description}
              </p>
            </div>

            {/* Right: Industry Image or Typography-Led Intentional Card */}
            <div className="lg:col-span-5">
              {industry.image ? (
                <div className="relative w-full aspect-[4/3] rounded-sm overflow-hidden bg-slate-900 border border-stone-200/80 shadow-xs">
                  <Image
                    src={industry.image}
                    alt={
                      industry.imageAlt ??
                      `${industry.name} — industry context`
                    }
                    fill
                    sizes="(min-width: 1024px) 38vw, 100vw"
                    className="object-cover object-center"
                    priority
                  />
                </div>
              ) : (
                /* Missing-Image Fallback: Intentional Typography Card (No broken icon!) */
                <div className="bg-slate-950 text-white p-6 sm:p-8 rounded-sm border border-slate-800 space-y-4 shadow-xs">
                  <span className="font-mono text-[10px] font-bold text-amber-400 uppercase tracking-[0.2em] block">
                    Financial Environment
                  </span>
                  <p className="font-serif text-lg sm:text-xl text-slate-200 leading-snug italic">
                    &ldquo;Every business decision carries consequences that
                    are shaped by the commercial reality of your sector.&rdquo;
                  </p>
                  <p className="font-sans text-xs text-slate-400 pt-2 border-t border-slate-800">
                    MR&amp;A Financial Advisory · {industry.name} Sector
                  </p>
                </div>
              )}
            </div>
          </div>
        </Container>
      </header>

      {/* ─────────────────────────────────────────────────────────────────
          02 — INDUSTRY EXPERIENCE / VERIFIED PROOF (Conditional)
      ────────────────────────────────────────────────────────────────── */}
      {hasVerifiedProof && (
        <section
          aria-label="Verified Experience Context"
          className="py-10 sm:py-14 bg-[#faf8f5] border-b border-stone-200/70"
        >
          <Container>
            <div className="max-w-4xl space-y-6">
              {industry.experienceContext && (
                <div className="border-l-2 border-amber-600/80 pl-5 py-1">
                  <span className="font-mono text-[10px] font-bold text-amber-700 uppercase tracking-[0.2em] block mb-1">
                    MR&amp;A Advisory Context
                  </span>
                  <p className="font-sans text-slate-800 text-base sm:text-lg leading-relaxed">
                    {industry.experienceContext}
                  </p>
                </div>
              )}

              {/* Render verified client count ONLY if defined and a number */}
              {typeof industry.verifiedClientCount === "number" && (
                <div className="pt-2 flex items-baseline gap-3">
                  <span className="font-serif text-3xl sm:text-4xl text-slate-950 font-normal">
                    {industry.verifiedClientCount}+
                  </span>
                  <span className="font-sans text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-600">
                    Verified {industry.name} Engagements
                  </span>
                </div>
              )}
            </div>
          </Container>
        </section>
      )}

      {/* ─────────────────────────────────────────────────────────────────
          03 — PROBLEM INTRODUCTION & SELECTOR
      ────────────────────────────────────────────────────────────────── */}
      <section
        ref={selectorRef}
        id="problems-section"
        aria-labelledby="problems-heading"
        className="py-14 sm:py-20 lg:py-24 bg-white border-b border-stone-200/80"
      >
        <Container>
          <div className="max-w-4xl space-y-8">
            <div className="space-y-3">
              <span className="font-mono text-[10px] sm:text-[11px] font-bold text-amber-700 uppercase tracking-[0.2em] block">
                Recognizable Financial Patterns
              </span>
              <h2
                id="problems-heading"
                className="font-serif text-2xl sm:text-3xl lg:text-4xl text-slate-950 leading-tight"
              >
                Here&apos;s what we keep seeing.
              </h2>
              <p className="font-sans text-slate-600 text-base sm:text-[1.0625rem] leading-relaxed max-w-2xl">
                Every industry experiences distinct commercial realities.
                Select a situation below to explore how financial decisions
                take shape in your business environment.
              </p>
            </div>

            {/* Problem Selector Controls */}
            {problems.length > 0 ? (
              <div
                role="tablist"
                aria-label="Select a problem situation"
                className="space-y-3"
              >
                {problems.map((p) => {
                  const isActive = p.slug === activeProblemSlug;
                  const ctx = problemContextsMap[p.id] ?? {
                    recognitionLine: p.recognitionLine,
                    explanation: p.explanation,
                  };

                  return (
                    <button
                      key={p.id}
                      role="tab"
                      id={`tab-${p.slug}`}
                      aria-selected={isActive}
                      aria-controls={`panel-${p.slug}`}
                      onClick={() => handleSelectProblem(p.slug)}
                      className={[
                        "w-full text-left p-5 sm:p-6 rounded-sm border transition-all duration-200",
                        "focus-visible:outline-2 focus-visible:outline-amber-500",
                        isActive
                          ? "bg-slate-950 text-white border-slate-950 shadow-sm"
                          : "bg-[#faf8f5] text-slate-900 border-stone-200/80 hover:border-slate-400 hover:bg-white",
                      ].join(" ")}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="space-y-1.5 pr-2">
                          <h3
                            className={[
                              "font-serif text-lg sm:text-xl font-normal leading-snug",
                              isActive
                                ? "text-amber-400"
                                : "text-slate-950 group-hover:text-amber-700",
                            ].join(" ")}
                          >
                            {p.title}
                          </h3>
                          <p
                            className={[
                              "font-sans text-sm sm:text-[0.9375rem] leading-relaxed",
                              isActive ? "text-slate-300" : "text-slate-600",
                            ].join(" ")}
                          >
                            {ctx.recognitionLine}
                          </p>
                        </div>

                        <span
                          aria-hidden="true"
                          className={[
                            "shrink-0 text-sm font-sans font-semibold pt-0.5 transition-transform duration-200",
                            isActive
                              ? "text-amber-400 translate-x-1"
                              : "text-slate-400",
                          ].join(" ")}
                        >
                          {isActive ? "Active ↓" : "Select →"}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            ) : (
              <p className="font-sans text-slate-500 text-sm italic">
                No specific problem patterns currently published for this
                industry.
              </p>
            )}

            {/* Direct Visit (No Preselection) Help Notice */}
            {!activeProblemSlug && (
              <p className="font-sans text-xs text-stone-500 text-center pt-2 italic">
                Select a situation above to explore management questions,
                approach frameworks, and relevant capabilities.
              </p>
            )}
          </div>
        </Container>
      </section>

      {/* ─────────────────────────────────────────────────────────────────
          04 — ACTIVE PROBLEM DETAILED JOURNEY (When a problem is selected)
      ────────────────────────────────────────────────────────────────── */}
      {activeProblem && activeContext && (
        <div
          ref={journeyRef}
          id={`panel-${activeProblem.slug}`}
          role="tabpanel"
          aria-labelledby={`tab-${activeProblem.slug}`}
          className="animate-in fade-in duration-300 motion-reduce:animate-none"
        >
          {/* 4A. Problem Understanding */}
          <section className="py-14 sm:py-20 bg-[#faf8f5] border-b border-stone-200/80">
            <Container>
              <div className="max-w-4xl space-y-6">
                <div className="space-y-2">
                  <span className="font-mono text-[10px] sm:text-[11px] font-bold text-amber-700 uppercase tracking-[0.2em] block">
                    Problem Understanding
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-slate-950 leading-tight">
                    {activeProblem.title}
                  </h2>
                  <p className="font-serif italic text-lg sm:text-xl text-amber-800 border-l-2 border-amber-600 pl-4 py-1">
                    &ldquo;{activeContext.recognitionLine}&rdquo;
                  </p>
                </div>

                <div className="prose prose-slate max-w-none font-sans text-slate-700 text-base sm:text-lg leading-relaxed space-y-4">
                  <p>{activeContext.explanation}</p>
                </div>

                {/* Technical Context Tags (if available) */}
                {activeProblem.technicalContext &&
                  activeProblem.technicalContext.length > 0 && (
                    <div className="pt-4 border-t border-stone-200/80">
                      <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 block mb-2">
                        Technical &amp; Financial Context
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {activeProblem.technicalContext.map((item, idx) => (
                          <span
                            key={idx}
                            className="font-sans text-xs bg-white text-slate-800 border border-stone-300 px-3 py-1 rounded-sm"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                {/* 4B. Verified Experience with Pattern (Conditional) */}
                {(activeProblem.verifiedExperienceStatement ||
                  typeof activeProblem.verifiedExperienceCount ===
                    "number") && (
                  <div className="bg-white p-6 rounded-sm border border-stone-200/80 space-y-3 shadow-xs">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-amber-700 block">
                      Verified Practice Experience
                    </span>
                    {activeProblem.verifiedExperienceStatement && (
                      <p className="font-sans text-sm sm:text-base text-slate-800 font-medium">
                        {activeProblem.verifiedExperienceStatement}
                      </p>
                    )}
                    {typeof activeProblem.verifiedExperienceCount ===
                      "number" && (
                      <p className="font-serif text-2xl text-slate-950">
                        {activeProblem.verifiedExperienceCount}+ engagements
                        evaluated
                      </p>
                    )}
                  </div>
                )}
              </div>
            </Container>
          </section>

          {/* 4C & 4D. Approach Transition & 5-Step MR&A Approach */}
          <section className="py-16 sm:py-22 bg-white border-b border-stone-200/80">
            <Container>
              <div className="max-w-4xl space-y-10">
                <div className="space-y-3">
                  <span className="font-mono text-[10px] sm:text-[11px] font-bold text-amber-700 uppercase tracking-[0.2em] block">
                    Structured Approach
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-slate-950 leading-tight">
                    Here&apos;s what we can do about it.
                  </h2>
                  <p className="font-sans text-slate-600 text-base sm:text-lg">
                    MR&amp;A applies a structured 5-step financial advisory
                    methodology to bring clarity and control to this situation:
                  </p>
                </div>

                {/* 5-Step Process Visual Progression */}
                <ol aria-label="Five step MR&A approach" className="space-y-6">
                  {defaultApproachSteps.map((s) => (
                    <li
                      key={s.step}
                      className="p-6 bg-[#faf8f5] rounded-sm border border-stone-200/70 grid grid-cols-1 sm:grid-cols-12 gap-4 items-start"
                    >
                      <div className="sm:col-span-2">
                        <span className="font-mono text-sm font-bold text-amber-700 bg-amber-100 px-2.5 py-1 rounded-sm">
                          STEP {s.step}
                        </span>
                      </div>
                      <div className="sm:col-span-10 space-y-1">
                        <h3 className="font-serif font-normal text-lg sm:text-xl text-slate-950">
                          {s.title}
                        </h3>
                        <p className="font-sans text-sm sm:text-base text-slate-600 leading-relaxed">
                          {s.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </Container>
          </section>

          {/* 4E. Relevant Service(s) */}
          <section className="py-16 sm:py-22 bg-[#faf8f5] border-b border-stone-200/80">
            <Container>
              <div className="max-w-4xl space-y-8">
                <div className="space-y-2">
                  <span className="font-mono text-[10px] sm:text-[11px] font-bold text-amber-700 uppercase tracking-[0.2em] block">
                    Relevant Capability
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl text-slate-950">
                    For this situation, the relevant service is:
                  </h2>
                </div>

                {activeServices.length > 0 ? (
                  <div className="space-y-6">
                    {/* Primary Service (first in list) */}
                    {activeServices[0] && (
                      <div className="bg-white p-8 rounded-sm border border-stone-300 shadow-xs space-y-5">
                        <span className="font-mono text-[10px] font-bold text-amber-700 uppercase tracking-widest block">
                          Primary Capability
                        </span>
                        <h3 className="font-serif text-2xl sm:text-3xl text-slate-950">
                          {activeServices[0].name}
                        </h3>
                        <p className="font-sans text-slate-700 text-base sm:text-lg leading-relaxed">
                          {activeServices[0].shortContext}
                        </p>

                        {activeServices[0].businessChanges &&
                          activeServices[0].businessChanges.length > 0 && (
                            <div className="pt-2">
                              <span className="font-sans text-xs font-semibold text-slate-900 uppercase tracking-wider block mb-2">
                                What changes for your business:
                              </span>
                              <ul className="space-y-1.5 font-sans text-sm text-slate-700">
                                {activeServices[0].businessChanges
                                  .slice(0, 3)
                                  .map((bc, idx) => (
                                    <li
                                      key={idx}
                                      className="flex items-start gap-2"
                                    >
                                      <span className="text-amber-700 font-bold">
                                        ✓
                                      </span>
                                      <span>{bc}</span>
                                    </li>
                                  ))}
                              </ul>
                            </div>
                          )}

                        <div className="pt-3">
                          <Link
                            href={`/services/${activeServices[0].slug}`}
                            className="inline-flex items-center gap-2 font-sans font-semibold text-sm text-slate-950 border-b-2 border-amber-500 pb-0.5 hover:text-amber-700 transition-colors"
                          >
                            See why {activeServices[0].name} matters →
                          </Link>
                        </div>
                      </div>
                    )}

                    {/* Secondary Services (if problem relates to multiple services) */}
                    {activeServices.length > 1 && (
                      <div className="space-y-4 pt-4">
                        <span className="font-sans text-xs font-semibold uppercase tracking-wider text-slate-600 block">
                          Additional Supporting Services:
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {activeServices.slice(1).map((sec) => (
                            <div
                              key={sec.id}
                              className="bg-white p-5 rounded-sm border border-stone-200 space-y-2"
                            >
                              <h4 className="font-serif text-lg font-normal text-slate-950">
                                {sec.name}
                              </h4>
                              <p className="font-sans text-xs text-slate-600 line-clamp-2">
                                {sec.shortContext}
                              </p>
                              <Link
                                href={`/services/${sec.slug}`}
                                className="inline-block text-xs font-sans font-semibold text-amber-700 hover:text-amber-900 pt-1"
                              >
                                Explore {sec.name} →
                              </Link>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <p className="font-sans text-slate-600 text-sm italic">
                    MR&amp;A provides advisory and financial oversight for this
                    situation. Contact our team to discuss your specific
                    requirements.
                  </p>
                )}
              </div>
            </Container>
          </section>

          {/* 4F. Relevant Client Experiences (Conditional) */}
          {activeExperiences.length > 0 && (
            <section className="py-16 sm:py-22 bg-white border-b border-stone-200/80">
              <Container>
                <div className="max-w-4xl space-y-8">
                  <div className="space-y-2">
                    <span className="font-mono text-[10px] sm:text-[11px] font-bold text-amber-700 uppercase tracking-[0.2em] block">
                      Verified Client Experience
                    </span>
                    <h2 className="font-serif text-2xl sm:text-3xl text-slate-950">
                      Relevant Engagement Accounts
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {activeExperiences.slice(0, 2).map((ce) => (
                      <div
                        key={ce.id}
                        className="bg-[#faf8f5] p-6 rounded-sm border border-stone-200/80 space-y-4 flex flex-col justify-between"
                      >
                        <div className="space-y-3">
                          <span className="inline-block bg-slate-950 text-white font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-xs">
                            {ce.anonymousBusinessType}
                          </span>
                          <h3 className="font-serif text-xl font-normal text-slate-950 leading-snug">
                            {ce.title}
                          </h3>
                          <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed">
                            {ce.shortPreview}
                          </p>
                        </div>

                        <div className="pt-2 border-t border-stone-200">
                          <Link
                            href={ce.href}
                            className="inline-flex items-center gap-1.5 font-sans font-semibold text-xs text-slate-950 hover:text-amber-700 transition-colors"
                          >
                            Read the full experience →
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Container>
            </section>
          )}

          {/* 4G. Conversion CTA */}
          <section className="py-16 sm:py-24 bg-slate-950 text-white">
            <Container>
              <div className="max-w-3xl mx-auto text-center space-y-6">
                <span className="font-mono text-[10px] font-bold text-amber-400 uppercase tracking-[0.2em] block">
                  Next Step
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-normal text-white leading-snug">
                  Facing something similar in your business?
                </h2>
                <p className="font-sans text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
                  Initiate a confidential advisory discussion with MR&amp;A
                  partners on practice growth, cash flow, or strategic decisions.
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={(e) => scrollToConsultation(e)}
                    className="inline-flex items-center justify-center min-h-[52px] px-8 py-3.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-sans font-semibold text-base transition-colors rounded-sm shadow-xs focus-visible:outline-2 focus-visible:outline-amber-400 cursor-pointer"
                  >
                    Book a Consultation →
                  </button>
                </div>
              </div>
            </Container>
          </section>
        </div>
      )}
    </div>
  );
}
