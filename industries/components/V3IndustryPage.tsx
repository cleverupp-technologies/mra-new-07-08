"use client";

/**
 * V3IndustryPage — Interactive Advisory Journey Experience
 *
 * Governed by the Website Brand Positioning Brief & ICAI Code of Ethics.
 * Rebuilds the industry page into an interactive executive advisory application:
 * 1. HERO — Immersive photography, dark overlay, monumental practice stats, scroll indicator
 * 2. BUSINESS SITUATIONS WE FREQUENTLY OBSERVE — Interactive 3x3 decision board with active ring selection
 * 3. DYNAMIC IMMERSIVE ADVISORY JOURNEY — 7-Slide Horizontal Carousel / Snapping Panels:
 *    - Slide 1: Commercial Reality (Factual, educational, objective)
 *    - Slide 2: Typical Financial Implications (Operational, cash flow, tax, compliance, decision risks)
 *    - Slide 3: How We Typically Approach This (Visual timeline / decision flow)
 *    - Slide 4: Relevant Professional Services (Associated capability cards)
 *    - Slide 5: Related Client Experience (ICAI-compliant factual engagement scope & outcome)
 *    - Slide 6: Related Insights (Contextual educational articles)
 *    - Slide 7: Discuss This Situation (Institutional consultation trigger)
 */

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import {
  LuTrendingUp,
  LuWallet,
  LuPackage,
  LuScale,
  LuShieldCheck,
  LuChartPie,
  LuBuilding2,
  LuLayers,
  LuArrowRight,
} from "react-icons/lu";

function getSituationIcon(category: string, title: string, idx: number) {
  const cat = (category + " " + title).toLowerCase();
  if (cat.includes("expansion") || cat.includes("capital") || cat.includes("growth")) {
    return <LuTrendingUp className="w-5 h-5" />;
  }
  if (cat.includes("working capital") || cat.includes("cash") || cat.includes("fund")) {
    return <LuWallet className="w-5 h-5" />;
  }
  if (cat.includes("inventory") || cat.includes("supply") || cat.includes("logistics")) {
    return <LuPackage className="w-5 h-5" />;
  }
  if (cat.includes("gst") || cat.includes("tax") || cat.includes("compliance") || cat.includes("statutory")) {
    return <LuScale className="w-5 h-5" />;
  }
  if (cat.includes("governance") || cat.includes("control") || cat.includes("audit") || cat.includes("risk")) {
    return <LuShieldCheck className="w-5 h-5" />;
  }
  if (cat.includes("mis") || cat.includes("profit") || cat.includes("reporting") || cat.includes("margin")) {
    return <LuChartPie className="w-5 h-5" />;
  }
  if (cat.includes("real estate") || cat.includes("operation") || cat.includes("asset")) {
    return <LuBuilding2 className="w-5 h-5" />;
  }
  const fallbackIcons = [
    <LuTrendingUp key="1" className="w-5 h-5" />,
    <LuWallet key="2" className="w-5 h-5" />,
    <LuLayers key="3" className="w-5 h-5" />,
    <LuScale key="4" className="w-5 h-5" />,
    <LuShieldCheck key="5" className="w-5 h-5" />,
    <LuChartPie key="6" className="w-5 h-5" />,
  ];
  return fallbackIcons[idx % fallbackIcons.length];
}
import Link from "next/link";
import Image from "next/image";
import type { V2Industry, V2Problem } from "@/types/v2";
import { Container } from "@/components/layout/Container";
import { ConsultationCTA } from "@/components/consultation/ConsultationCTA";
import {
  getIndustryDecisions,
  IndustryDecisionSituation,
} from "@/content/v2/industry-decisions";
import { getAllPublishedServices } from "@/content/v2/repository";

export interface V3IndustryPageProps {
  industry: V2Industry;
  problems?: readonly V2Problem[];
  problemContextsMap?: Record<string, unknown>;
  servicesMap?: Record<string, unknown>;
  experiencesMap?: Record<string, unknown>;
}

/* ─── Staggered Reveal Hook ────────────────────────────────────────────── */
function useReveal(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      const t = setTimeout(() => setVisible(true), 0);
      return () => clearTimeout(t);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
}

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={[
        "transition-all duration-700 ease-out motion-reduce:transition-none",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}

/* ─── Count-Up Number Component ────────────────────────────────────────── */
function CountUpNumber({
  target,
  suffix = "",
  start,
}: {
  target: number;
  suffix?: string;
  start: boolean;
}) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTimestamp: number | null = null;
    const duration = 1600;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(easeProgress * target));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    const animId = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(animId);
  }, [target, start]);

  return (
    <span>
      {start ? value : 0}
      {suffix}
    </span>
  );
}

/* ─── Timeline Step Component for Professional Review Framework ──────────── */
function IndustryTimelineStep({
  item,
  index,
  total,
}: {
  item: string;
  index: number;
  total: number;
}) {
  const [hovered, setHovered] = useState(false);
  const [inView, setInView] = useState(false);
  const stepRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = stepRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const isRight = index % 2 === 0;
  const numStr = index < 9 ? `0${index + 1}` : `${index + 1}`;

  return (
    <div
      ref={stepRef}
      className="relative grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] items-center gap-6 lg:gap-0 my-6 lg:my-0"
    >
      {/* Gold vertical connector line (desktop) */}
      {index > 0 && (
        <div
          className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 w-px origin-top transition-all duration-700 pointer-events-none"
          style={{
            height: "60px",
            background: "linear-gradient(to bottom, #C89B3C, #C89B3C)",
            opacity: inView ? 0.8 : 0,
            transform: inView ? "translateX(-50%) scaleY(1)" : "translateX(-50%) scaleY(0)",
            transitionDelay: `${index * 120}ms`,
          }}
          aria-hidden="true"
        />
      )}

      {/* Left content column (Desktop) */}
      <div
        className="hidden lg:flex pr-10 lg:pr-14 justify-end transition-all duration-700"
        style={{
          opacity: inView ? (isRight ? 0 : 1) : 0,
          transform: inView ? "translateY(0)" : "translateY(24px)",
          transitionDelay: `${index * 120 + 100}ms`,
          transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
          visibility: isRight ? "hidden" : "visible",
        }}
      >
        {!isRight && (
          <motion.div
            whileHover={{ y: -4 }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className={[
              "max-w-[420px] text-right p-6 sm:p-7 rounded-2xl border transition-all duration-300 backdrop-blur-md relative overflow-hidden",
              hovered || inView
                ? "bg-[#070F20] border-[#C89B3C] shadow-2xl ring-2 ring-[#C89B3C]/30 text-white"
                : "bg-slate-900/80 border-slate-800 text-slate-200 shadow-lg",
            ].join(" ")}
          >
            <div className="space-y-2.5">
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#C89B3C] block">
                STEP {numStr} &bull; REVIEW FRAMEWORK
              </span>
              <p className="font-sans text-sm sm:text-[15px] leading-relaxed text-slate-200">
                {item}
              </p>
            </div>
          </motion.div>
        )}
      </div>

      {/* Centre: Numbered Circle Node */}
      <div className="flex flex-col items-center z-10 lg:py-[50px]">
        <motion.div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          animate={{
            scale: hovered || inView ? 1.08 : 1,
            backgroundColor: hovered ? "#C89B3C" : "rgba(7, 15, 32, 0.95)",
            borderColor: "#C89B3C",
            boxShadow: hovered || inView
              ? "0 8px 32px rgba(200, 155, 60, 0.45)"
              : "0 4px 16px rgba(0, 0, 0, 0.4)",
          }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="w-14 h-14 lg:w-16 lg:h-16 rounded-full border-2 flex items-center justify-center cursor-pointer backdrop-blur-md shrink-0 shadow-xl"
        >
          <span
            className={[
              "font-serif text-lg lg:text-xl font-normal transition-colors duration-300",
              hovered ? "text-slate-950 font-semibold" : "text-[#C89B3C]",
            ].join(" ")}
          >
            {numStr}
          </span>
        </motion.div>

        {index < total - 1 && (
          <div
            className="w-px h-8 lg:h-10 bg-gradient-to-b from-[#C89B3C] to-slate-800 mt-2 pointer-events-none"
            aria-hidden="true"
          />
        )}
      </div>

      {/* Right content column (Desktop) / Main column (Mobile) */}
      <div
        className="lg:pl-10 lg:pl-14 flex justify-start transition-all duration-700"
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(24px)",
          transitionDelay: `${index * 120 + 100}ms`,
          transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        <motion.div
          whileHover={{ y: -4 }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className={[
            "w-full max-w-[420px] text-left p-6 sm:p-7 rounded-2xl border transition-all duration-300 backdrop-blur-md relative overflow-hidden",
            hovered || inView
              ? "bg-[#070F20] border-[#C89B3C] shadow-2xl ring-2 ring-[#C89B3C]/30 text-white"
              : "bg-slate-900/80 border-slate-800 text-slate-200 shadow-lg",
          ].join(" ")}
        >
          <div className="space-y-2.5">
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#C89B3C] block">
              STEP {numStr} &bull; REVIEW FRAMEWORK
            </span>
            <p className="font-sans text-sm sm:text-[15px] leading-relaxed text-slate-200">
              {item}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export function V3IndustryPage({ industry }: V3IndustryPageProps) {
  const overviewData = getIndustryDecisions(industry.slug, industry.name);
  const allServices = getAllPublishedServices();

  const [selectedSituationIndex, setSelectedSituationIndex] = useState<number>(0);
  const [arrived, setArrived] = useState(false);
  const [focusedCardIndex, setFocusedCardIndex] = useState<number | null>(null);
  const [sectionHighlight, setSectionHighlight] = useState(false);

  const journeyContainerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      const t = setTimeout(() => setArrived(true), 0);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setArrived(true), 60);
    return () => clearTimeout(t);
  }, []);

  // Viewport Scroll Focus Detector (Triggers earlier around 58% viewport height for instant focus transfer)
  useEffect(() => {
    const handleScroll = () => {
      if (!cardRefs.current.length) return;
      const viewportTarget = window.innerHeight * 0.58;

      let closestIdx: number | null = null;
      let minDistance = Infinity;

      cardRefs.current.forEach((el, idx) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.bottom > 0 && rect.top < window.innerHeight) {
          const cardCenter = rect.top + rect.height / 2;
          const distance = Math.abs(cardCenter - viewportTarget);
          if (distance < minDistance) {
            minDistance = distance;
            closestIdx = idx;
          }
        }
      });

      if (closestIdx !== null && closestIdx !== focusedCardIndex) {
        setFocusedCardIndex(closestIdx);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [focusedCardIndex]);

  const selectedSituation: IndustryDecisionSituation =
    overviewData.decisions[selectedSituationIndex] || overviewData.decisions[0];

  const handleSelectSituation = useCallback(
    (index: number) => {
      setSelectedSituationIndex(index);
      setSectionHighlight(true);
      setTimeout(() => {
        if (journeyContainerRef.current) {
          const yOffset = -90;
          const y =
            journeyContainerRef.current.getBoundingClientRect().top +
            window.pageYOffset +
            yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 150);
      setTimeout(() => {
        setSectionHighlight(false);
      }, 2000);
    },
    []
  );

  const associatedServices = allServices.filter((svc) =>
    selectedSituation.associatedServiceSlugs.includes(svc.slug)
  );

  return (
    <div className="bg-[#030812] text-white min-h-screen">
      <header className="relative overflow-hidden bg-slate-950 text-white border-b border-slate-800/80 lg:-mt-[73px] lg:pt-[150px] lg:pb-24 lg:min-h-[88vh] lg:flex lg:flex-col lg:justify-center">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div
            className="absolute inset-0 transition-transform duration-[1400ms] motion-reduce:transform-none motion-reduce:transition-none"
            style={{
              transform: arrived ? "scale(1.00)" : "scale(1.04)",
              transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            <Image
              src={industry.image || "/images/hero-workspace.jpg"}
              alt={industry.imageAlt ?? `${industry.name} commercial environment`}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
          <div
            className="absolute inset-0 bg-[#030812]/55 z-10 pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 z-10 pointer-events-none"
            style={{
              background:
                "linear-gradient(90deg, rgba(3, 8, 18, 0.95) 0%, rgba(3, 8, 18, 0.82) 42%, rgba(3, 8, 18, 0.55) 75%, rgba(3, 8, 18, 0.25) 100%)",
            }}
            aria-hidden="true"
          />
        </div>

        <Container className="relative z-20 py-12 lg:py-8">
          <div className="max-w-3xl space-y-6 sm:space-y-8">
            <nav aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2 text-xs font-sans text-slate-300">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">
                  <span className="text-slate-500">/</span>
                </li>
                <li>
                  <Link href="/industries" className="hover:text-white transition-colors">
                    Industries
                  </Link>
                </li>
                <li aria-hidden="true">
                  <span className="text-slate-500">/</span>
                </li>
                <li className="font-semibold text-[#C89B3C]" aria-current="page">
                  {industry.name}
                </li>
              </ol>
            </nav>

            <div className="space-y-4">
              <span className="font-mono text-xs font-bold text-[#C89B3C] uppercase tracking-[0.22em] block">
                {industry.name.toUpperCase()} SECTOR PRACTICE
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-white leading-[1.05] tracking-tight">
                Strategic Advisory for {industry.name} Operations
              </h1>
              <p className="font-sans text-slate-300 text-base sm:text-xl font-normal leading-relaxed max-w-2xl border-l-2 border-[#C89B3C] pl-4 py-1">
                {industry.description}
              </p>
            </div>

            <div className="pt-8 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {[
                { label: "14+ Years of Professional Practice", display: "14+ Yrs" },
                { label: "Extensive Industry Engagements", display: "Extensive" },
                { label: "50+ Professionals", display: "50+" },
                { label: "ICAI Professional Standards", display: "Compliance" },
              ].map((stat, i) => (
                <div key={i} className="space-y-1">
                  <div className="font-serif text-xl sm:text-2xl text-white font-normal">
                    {stat.display}
                  </div>
                  <div className="font-mono text-[10px] uppercase text-slate-400 tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </header>

      <section
        aria-label="Sector Advisory Scope & Audience Profile"
        className="py-16 sm:py-24 bg-[#070F20] text-white border-b border-slate-800"
      >
        <Container>
          <Reveal>
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="space-y-3">
                <span className="font-mono text-[10.5px] font-bold text-[#C89B3C] uppercase tracking-[0.24em] block">
                  01.5 &bull; SECTOR EXECUTIVE OVERVIEW
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white leading-tight">
                  Sector Advisory Focus: {industry.name}
                </h2>
                <p className="font-sans text-slate-300 text-base sm:text-lg leading-relaxed">
                  Manesh Rineesh &amp; Associates assists management teams in the {industry.name.toLowerCase()} sector to evaluate commercial decisions—such as working capital optimization, capital expenditure planning, MIS reporting, and statutory compliance—before operational issues become financial liabilities.
                </p>
              </div>

              <div className="pt-6 border-t border-slate-800/80 space-y-3">
                <span className="font-mono text-[10px] font-bold text-[#C89B3C] uppercase tracking-[0.18em] block">
                  THIS PAGE IS INTENDED FOR:
                </span>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Growing Enterprises",
                    "Owner-Managed Companies",
                    "Family Businesses",
                    `${industry.name} Operations`,
                    "South India Regional Units",
                    "CFOs & Finance Directors",
                    "Expanding Enterprises",
                    "Managing Partners",
                  ].map((audience, idx) => (
                    <span key={idx} className="font-sans text-xs text-slate-200 bg-[#111C31] border border-[rgba(255,255,255,0.08)] px-3 py-1.5 rounded-full shadow-xs">
                      &bull; {audience}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section
        id="business-situations"
        aria-label={`Business Situations We Frequently Observe in the ${industry.name} Sector`}
        className="py-24 sm:py-32 lg:py-36 border-b border-slate-800/60 relative overflow-hidden"
        style={{
          background:
            "radial-gradient(circle at top left, rgba(212,160,23,0.05), transparent 40%), linear-gradient(180deg, #0B132B 0%, #08111F 100%)",
        }}
      >
        <Container>
          <Reveal>
            <div className="max-w-3xl mb-16 sm:mb-20 space-y-4">
              <span className="font-mono text-[10.5px] font-bold text-[#C89B3C] uppercase tracking-[0.24em] block">
                02 &bull; COMMERCIAL DECISION BOARD
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight leading-tight">
                Business Situations We Commonly Observe
              </h2>
              <p className="font-sans text-slate-300 text-base sm:text-lg leading-relaxed">
                Every industry encounters recurring commercial situations that influence financial, operational and strategic decisions.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {overviewData.decisions.map((situation, idx) => {
              const isSelected = idx === selectedSituationIndex;
              const isFocused = idx === focusedCardIndex;
              const helperTexts = ["Explore this commercial situation", "Professional perspective", "Understand this decision"];
              const helperText = isSelected ? "Active Decision Pathway — Scroll to Explore Scope" : helperTexts[idx % 3];

              let cardBg = "#111C31";
              let cardBorder = "rgba(255, 255, 255, 0.08)";
              let cardShadow = "0 18px 50px rgba(0, 0, 0, 0.28)";
              let cardScale = 1;
              let cardY = 0;

              if (isSelected && isFocused) {
                cardBg = "#15223B"; cardBorder = "#C89B3C"; cardShadow = "0 0 0 1px rgba(212,160,23,0.25), 0 20px 60px rgba(212,160,23,0.12), 0 24px 70px rgba(0,0,0,0.35)"; cardScale = 1.03; cardY = -6;
              } else if (isSelected) {
                cardBg = "#15223B"; cardBorder = "#C89B3C"; cardShadow = "0 0 0 1px rgba(212,160,23,0.22), 0 18px 50px rgba(212,160,23,0.1), 0 20px 60px rgba(0,0,0,0.32)"; cardScale = 1.015; cardY = -4;
              } else if (isFocused) {
                cardBg = "rgba(21, 34, 59, 0.9)"; cardBorder = "rgba(212, 160, 23, 0.5)"; cardShadow = "0 0 0 1px rgba(212,160,23,0.2), 0 16px 45px rgba(212,160,23,0.08), 0 18px 50px rgba(0,0,0,0.3)"; cardScale = 1.02; cardY = -5;
              }

              return (
                <div key={situation.id} ref={(el) => { cardRefs.current[idx] = el; }} className="w-full flex flex-col h-full">
                  <Reveal delay={idx * 40}>
                    <motion.button
                      type="button"
                      onClick={() => handleSelectSituation(idx)}
                      whileHover={{ y: -6, transition: { type: "spring", stiffness: 400, damping: 25 } }}
                      whileTap={{ scale: 0.97, y: 2 }}
                      initial={false}
                      animate={{ scale: cardScale, y: cardY, backgroundColor: cardBg, borderColor: cardBorder, boxShadow: cardShadow }}
                      className={[
                        "group w-full text-left p-7 sm:p-8 rounded-3xl border flex flex-col justify-between h-full cursor-pointer relative overflow-hidden transition-colors duration-200 backdrop-blur-[18px] text-white",
                        isSelected ? "ring-1 ring-[#C89B3C]/40 z-10" : "hover:border-[#C89B3C]/80 hover:shadow-2xl",
                      ].join(" ")}
                    >
                      <motion.div className="absolute top-0 left-0 right-0 h-1 pointer-events-none" animate={{ scaleX: isSelected || isFocused ? 1 : 0, opacity: isSelected ? 1 : isFocused ? 0.7 : 0 }} aria-hidden="true">
                        <div className="w-full h-full bg-gradient-to-r from-[#C89B3C] via-amber-400 to-[#C89B3C]" />
                      </motion.div>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between gap-3">
                          <div className="flex items-center gap-3">
                            <motion.div animate={isSelected ? { backgroundColor: "#C89B3C", color: "#08111F" } : isFocused ? { color: "#C89B3C" } : { color: "#C89B3C" }} className="w-10 h-10 rounded-2xl flex items-center justify-center border shrink-0 border-slate-700/60 group-hover:bg-[#C89B3C] group-hover:text-[#08111F]">
                              {getSituationIcon(situation.category, situation.title, idx)}
                            </motion.div>
                            <span className={["font-mono text-[9.5px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full border", isSelected ? "bg-[#C89B3C]/15 text-[#C89B3C] border-[#C89B3C]/40" : "bg-[#08111F] text-amber-400 border-slate-800"].join(" ")}>
                              {situation.category}
                            </span>
                          </div>
                          <span className="font-mono text-xs font-extrabold text-slate-500 group-hover:text-[#C89B3C]">0{idx + 1}</span>
                        </div>
                        <h3 className="font-serif text-xl sm:text-2xl font-normal leading-snug group-hover:text-[#C89B3C] transition-colors">
                          {situation.title}
                        </h3>
                        <p className="font-sans text-xs sm:text-sm text-slate-400 leading-relaxed line-clamp-3">
                          {situation.recognitionLine}
                        </p>
                      </div>
                      <div className="pt-4 border-t mt-6 border-slate-800/80">
                        <span className="font-sans text-[11px] text-slate-400 block">{helperText}</span>
                        <div className="flex items-center justify-between min-h-[26px] pt-2">
                          <span className="font-mono text-[10.5px] sm:text-xs font-bold uppercase tracking-wider group-hover:text-[#C89B3C]">View Scope of Professional Assistance</span>
                          <LuArrowRight className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    </motion.button>
                  </Reveal>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section
        ref={journeyContainerRef}
        id="commercial-reality-section"
        aria-label="Commercial Reality & Advisory Scope"
        className={[
          "py-20 sm:py-28 transition-all duration-700 border-b border-slate-800/60 relative overflow-hidden",
          sectionHighlight ? "bg-[#15223B] ring-4 ring-[#C89B3C]/30 shadow-[0_0_0_1px_rgba(212,160,23,0.25),0_20px_60px_rgba(212,160,23,0.12),0_24px_70px_rgba(0,0,0,0.35)] backdrop-blur-[18px]" : "bg-[#08111F]",
        ].join(" ")}
        style={{
          background:
            "radial-gradient(circle at top left, rgba(212,160,23,0.05), transparent 40%), linear-gradient(180deg, #08111F 0%, #0B132B 100%)",
        }}
      >
        <Container>
          <Reveal>
            <div className="space-y-12 max-w-4xl mx-auto">
              <div className="space-y-4 border-b border-slate-800/60 pb-8">
                <span className="font-mono text-[10.5px] font-bold text-[#C89B3C] uppercase tracking-[0.24em] block">
                  03 &bull; COMMERCIAL REALITY &middot; {selectedSituation.title.toUpperCase()}
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white leading-tight">
                  Operational Dynamics &amp; Context
                </h2>
                <blockquote className="font-serif italic text-lg sm:text-xl text-amber-300/80 border-l-2 border-[#C89B3C] pl-4 py-1 leading-relaxed">
                  &ldquo;{selectedSituation.recognitionLine}&rdquo;
                </blockquote>
                <p className="font-sans text-slate-300 text-base sm:text-lg leading-relaxed pt-2">
                  {selectedSituation.commercialContext}
                </p>
              </div>

              <div className="pt-8 border-t border-slate-800/60 space-y-6">
                <span className="font-mono text-[10.5px] font-bold text-[#C89B3C] uppercase tracking-[0.24em] block">
                  04 &bull; FINANCIAL IMPLICATIONS
                </span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {selectedSituation.financialConsiderations.map((fc, i) => (
                    <div key={i} className="bg-[#111C31] p-7 rounded-2xl border border-[rgba(255,255,255,0.08)] backdrop-blur-[18px] space-y-3 shadow-[0_18px_50px_rgba(0,0,0,0.28)]">
                      <span className="font-mono text-[10px] font-bold text-[#C89B3C] uppercase tracking-wider block">RISK CONSIDERATION 0{i + 1}</span>
                      <h4 className="font-serif text-xl font-normal text-white">{fc.title}</h4>
                      <p className="font-sans text-xs text-slate-300 leading-relaxed">{fc.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-10 border-t border-slate-800/60 space-y-10">
                <div className="space-y-3">
                  <span className="font-mono text-[10.5px] font-bold text-[#C89B3C] uppercase tracking-[0.24em] block">
                    05 &bull; OUR PROFESSIONAL PERSPECTIVE &middot; {selectedSituation.title.toUpperCase()}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white">
                    Structured Professional Review Framework
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                    Our institutional approach follows a sequential advisory pathway designed to quantify financial risk, optimize operational controls, and deliver actionable recommendations.
                  </p>
                </div>

                <div className="relative max-w-4xl mx-auto py-4">
                  {selectedSituation.professionalConsiderations.map((item, i) => (
                    <IndustryTimelineStep
                      key={i}
                      item={item}
                      index={i}
                      total={selectedSituation.professionalConsiderations.length}
                    />
                  ))}
                </div>
              </div>

              <div className="pt-10 border-t border-slate-800/60 space-y-6">
                <span className="font-mono text-[10.5px] font-bold text-[#C89B3C] uppercase tracking-[0.24em] block">
                  06 &bull; RELEVANT PRACTICE CAPABILITIES &amp; INSIGHTS
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white">
                  Associated Capabilities for {selectedSituation.title}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {associatedServices.map((svc) => (
                    <div
                      key={svc.id}
                      className="bg-[#111C31] p-7 rounded-2xl border border-[rgba(255,255,255,0.08)] backdrop-blur-[18px] flex flex-col justify-between space-y-4 hover:border-[#C89B3C]/60 transition-colors shadow-[0_18px_50px_rgba(0,0,0,0.28)]"
                    >
                      <div className="space-y-2">
                        <span className="font-mono text-[10px] font-bold text-[#C89B3C] uppercase tracking-wider block">
                          PRACTICE CAPABILITY
                        </span>
                        <h4 className="font-serif text-xl font-normal text-white">
                          {svc.name}
                        </h4>
                        <p className="font-sans text-xs text-slate-300 line-clamp-3">
                          {svc.shortContext}
                        </p>
                      </div>
                      <Link
                        href={`/services/${svc.slug}`}
                        className="font-mono text-xs font-bold text-[#C89B3C] uppercase tracking-wider hover:text-white transition-colors"
                      >
                        Learn About Service &rarr;
                      </Link>
                    </div>
                  ))}

                  {selectedSituation.relatedInsightTitles.map((insight, i) => (
                    <div
                      key={i}
                      className="bg-[#111C31] p-7 rounded-2xl border border-[rgba(255,255,255,0.08)] backdrop-blur-[18px] flex flex-col justify-between space-y-4 hover:border-[#C89B3C]/60 transition-colors shadow-[0_18px_50px_rgba(0,0,0,0.28)]"
                    >
                      <div className="space-y-2">
                        <span className="font-mono text-[9px] font-bold text-[#C89B3C] uppercase tracking-wider block">
                          {insight.category} &bull; {insight.readTime}
                        </span>
                        <h4 className="font-serif text-xl font-normal text-white">
                          {insight.title}
                        </h4>
                      </div>
                      <Link
                        href={`/insights/${insight.slug}`}
                        className="font-mono text-xs font-bold text-[#C89B3C] uppercase tracking-wider hover:text-white transition-colors"
                      >
                        Read Article &rarr;
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <ConsultationCTA
        initialIndustry={industry.name}
        id="industry-detail-consultation-cta"
      />
    </div>
  );
}
