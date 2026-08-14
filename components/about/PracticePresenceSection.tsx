"use client";

import React, { useState, useEffect, useRef } from "react";
import { Container } from "@/components/layout/Container";
import { SectionBadge } from "@/components/ui/SectionBadge";

/* ─── Smooth Count-Up Component ────────────────────────────────────────── */
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

export function PracticePresenceSection() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      const timer = setTimeout(() => setInView(true), 0);
      return () => clearTimeout(timer);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const kozhikodeMapEmbedUrl =
    "https://maps.google.com/maps?q=Span%20Hotel%20Complex%20Jail%20Road%20Kozhikode%20Kerala&t=&z=15&ie=UTF8&iwloc=&output=embed";

  const mukkamMapEmbedUrl =
    "https://maps.google.com/maps?q=14%2F629%20Nefna%20Complex%20Mukkam%20Kozhikode%20673602%20Kerala&t=&z=15&ie=UTF8&iwloc=&output=embed";

  const kozhikodeMapsLink = "https://share.google/xrPuOjoC45w874HMh";
  const kozhikodeDirectionsLink =
    "https://www.google.com/maps/dir/?api=1&destination=Span+Hotel+Complex+Jail+Road+Kozhikode";

  const mukkamMapsLink =
    "https://maps.google.com/?q=14/629+Nefna+Complex+Mukkam+Kozhikode+673602";
  const mukkamDirectionsLink =
    "https://www.google.com/maps/dir/?api=1&destination=14/629+Nefna+Complex+Mukkam+Kozhikode+673602";

  return (
    <section
      ref={sectionRef}
      aria-label="Practice Presence and Offices"
      className="py-24 sm:py-32 bg-[#FAF8F1] border-b border-[#FFD978]/40 overflow-hidden text-[#111827] font-sans"
    >
      <Container>
        {/* ── Section Header (Editorial Centered Layout) ── */}
        <div
          className="text-center mb-16 lg:mb-24 transition-all duration-700 mx-auto max-w-3xl"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(24px)",
            transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <SectionBadge align="center" as="h2">PRACTICE PRESENCE</SectionBadge>
          <p className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-[#111827] tracking-tight leading-[1.15]">
            Built in Kozhikode.
            <br />
            Serving Businesses Across South India.
          </p>
          <div className="w-[60px] h-[3px] bg-[#F4B942] mx-auto mt-5 mb-6" />
          <p className="font-sans text-[#111827]/82 text-base sm:text-lg leading-relaxed mx-auto max-w-[680px]">
            Our headquarters and regional office work together to deliver audit,
            taxation, Virtual CFO, compliance and strategic advisory services
            to growing businesses across South India.
          </p>
        </div>

        {/* ── OVERLAPPING CIRCULAR COMPOSITION ── */}
        <div className="relative max-w-4xl mx-auto mb-28 lg:mb-36 min-h-[440px] sm:min-h-[480px] lg:min-h-[520px] flex items-center justify-center">
          
          {/* Desktop & Tablet Overlapping Absolute Cluster / Mobile Responsive Flex Cluster */}
          <div className="w-full relative flex flex-wrap lg:block justify-center items-center gap-6 sm:gap-8 lg:gap-0">
            
            {/* 1. Small Circle — 2 Office Locations (Top Center) */}
            <div
              className="group relative bg-[#FAF8F1] backdrop-blur-md rounded-full border border-white/[0.12] p-6 sm:p-8 flex flex-col items-center justify-center text-center shadow-lg hover:shadow-2xl hover:-translate-y-[10px] hover:border-[#F4B942]/60 transition-all duration-500 ease-out z-10 w-[170px] h-[170px] sm:w-[190px] sm:h-[190px] lg:absolute lg:top-0 lg:left-[36%]"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView
                  ? "translateY(0) scale(1)"
                  : "translateY(24px) scale(0.95)",
                transitionDelay: "0ms",
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              <span className="font-mono text-[9.5px] font-semibold text-[#F4B942] uppercase tracking-[0.2em] block mb-1">
                LOCATIONS
              </span>
              <span className="font-serif text-3xl sm:text-4xl text-[#111827] font-bold group-hover:scale-105 transition-transform duration-500 block leading-none">
                <CountUpNumber target={2} start={inView} />
              </span>
              <span className="font-sans text-[11px] text-[#111827]/60 font-medium block mt-1.5">
                Kozhikode &amp; Mukkam
              </span>
            </div>

            {/* 2. Medium Circle — 2012 Established (Left Center) */}
            <div
              className="group relative bg-[#FAF8F1]/95 backdrop-blur-md rounded-full border border-white/[0.12] p-7 sm:p-9 flex flex-col items-center justify-center text-center shadow-lg hover:shadow-2xl hover:-translate-y-[10px] hover:border-[#F4B942]/60 transition-all duration-500 ease-out z-20 w-[210px] h-[210px] sm:w-[230px] sm:h-[230px] lg:absolute lg:top-[18%] lg:left-[8%]"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView
                  ? "translateY(0) scale(1)"
                  : "translateY(24px) scale(0.95)",
                transitionDelay: "120ms",
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              <span className="font-mono text-[10px] font-semibold text-[#F4B942] uppercase tracking-[0.2em] block mb-1.5">
                ESTABLISHED
              </span>
              <span className="font-serif text-4xl sm:text-5xl text-[#111827] font-bold group-hover:scale-105 transition-transform duration-500 block leading-none">
                <CountUpNumber target={2012} start={inView} />
              </span>
              <span className="font-sans text-xs text-[#111827]/60 font-medium block mt-2">
                14+ Years of Practice
              </span>
            </div>

            {/* 3. Medium Circle — 50+ Professionals (Center Right) */}
            <div
              className="group relative bg-[#FAF8F1]/95 backdrop-blur-md rounded-full border border-white/[0.12] p-7 sm:p-9 flex flex-col items-center justify-center text-center shadow-lg hover:shadow-2xl hover:-translate-y-[10px] hover:border-[#F4B942]/60 transition-all duration-500 ease-out z-20 w-[220px] h-[220px] sm:w-[240px] sm:h-[240px] lg:absolute lg:top-[12%] lg:right-[12%]"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView
                  ? "translateY(0) scale(1)"
                  : "translateY(24px) scale(0.95)",
                transitionDelay: "240ms",
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              <span className="font-mono text-[10px] font-semibold text-[#F4B942] uppercase tracking-[0.2em] block mb-1.5">
                PROFESSIONALS
              </span>
              <span className="font-serif text-4xl sm:text-5xl text-[#111827] font-bold group-hover:scale-105 transition-transform duration-500 block leading-none">
                <CountUpNumber target={50} suffix="+" start={inView} />
              </span>
              <span className="font-sans text-xs text-[#111827]/60 font-medium block mt-2">
                Integrated Capacity
              </span>
            </div>

            {/* 4. Large Circle — Across South India (Bottom-Right Anchor) */}
            <div
              className="group relative bg-[#FAF8F1] rounded-full border-2 border-[#F4B942]/40 p-8 sm:p-12 flex flex-col items-center justify-center text-center shadow-2xl hover:shadow-2xl hover:-translate-y-[10px] hover:border-[#F4B942] transition-all duration-500 ease-out z-30 w-[270px] h-[270px] sm:w-[310px] sm:h-[310px] lg:absolute lg:bottom-0 lg:right-[26%]"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView
                  ? "translateY(0) scale(1)"
                  : "translateY(24px) scale(0.95)",
                transitionDelay: "360ms",
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              {/* Subtle Gold Ambient Glow */}
              <div
                className="absolute inset-0 rounded-full bg-[#F4B942]/5 group-hover:bg-[#F4B942]/10 transition-colors duration-500"
                aria-hidden="true"
              />

              <span className="font-mono text-[11px] font-semibold text-[#F4B942] uppercase tracking-[0.22em] block mb-2 relative z-10">
                SERVING
              </span>
              <span className="font-serif text-2xl sm:text-3xl text-[#111827] font-bold leading-tight group-hover:scale-105 transition-transform duration-500 block tracking-tight relative z-10 px-2">
                Across
                <br />
                South India
              </span>
              <span className="font-sans text-xs text-[#111827]/60 font-medium block mt-3 relative z-10">
                Commercial Enterprises
              </span>
            </div>

          </div>
        </div>

        {/* ── TWO-COLUMN PREMIUM OFFICE SHOWCASE ── */}
        <div className="space-y-20 lg:space-y-28">
          {/* OFFICE 01: Kozhikode Headquarters (Info Left, Map Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Info Column (Left) */}
            <div
              className="lg:col-span-6 space-y-6 transition-all duration-700"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0) scale(1)" : "translateY(24px) scale(0.98)",
                transitionDelay: "450ms",
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              <div className="bg-[#FAF8F1] rounded-[28px] border border-[#FFD978]/30 p-8 sm:p-10 space-y-6 shadow-xl hover:border-[#F4B942]/50 transition-all duration-300">
                <div>
                  <SectionBadge align="left" as="h2">HEADQUARTERS</SectionBadge>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#111827] tracking-tight">
                    Kozhikode Headquarters
                  </h3>
                </div>

                <div className="space-y-1 font-sans text-sm sm:text-base text-[#111827]/82 leading-relaxed border-l-2 border-[#F4B942]/70 pl-4 py-0.5">
                  <p className="font-semibold text-[#111827]">
                    60/4798, Third Floor
                  </p>
                  <p>Span Hotel Complex, Jail Road</p>
                  <p>Kozhikode &ndash; 673004, Kerala, India</p>
                </div>

                <p className="font-sans text-sm text-[#111827]/70 leading-relaxed pt-2 border-t border-[#FFD978]/40">
                  The firm&apos;s principal office serving audit, taxation, Virtual
                  CFO, business advisory and statutory compliance engagements
                  across South India.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-3">
                  <a
                    href={kozhikodeMapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-[0.12em] bg-[#F4B942] text-black px-6 py-3.5 rounded-full hover:bg-white transition-all duration-300 shadow-md cursor-pointer"
                  >
                    Open in Google Maps
                    <span>&rarr;</span>
                  </a>

                  <a
                    href={kozhikodeDirectionsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-[0.12em] text-[#F4B942] border border-[#F4B942]/40 bg-transparent px-6 py-3.5 rounded-full hover:bg-[#F4B942] hover:text-black transition-all duration-300 cursor-pointer"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            </div>

            {/* Native Map Column (Right) */}
            <div
              className="lg:col-span-6 transition-all duration-700"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0) scale(1)" : "translateY(24px) scale(0.98)",
                transitionDelay: "550ms",
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              <div className="relative rounded-[28px] overflow-hidden border border-[#FFD978]/40 hover:border-[#F4B942]/50 shadow-xl transition-all duration-300 bg-[#FAF8F1] h-[420px]">
                <iframe
                  title="Kozhikode Headquarters Native Google Map"
                  src={kozhikodeMapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* OFFICE 02: Mukkam Office (Map Left, Info Right - Alternating!) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Native Map Column (Left on Desktop) */}
            <div
              className="lg:col-span-6 order-2 lg:order-1 transition-all duration-700"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0) scale(1)" : "translateY(24px) scale(0.98)",
                transitionDelay: "650ms",
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              <div className="relative rounded-[28px] overflow-hidden border border-[#FFD978]/40 hover:border-[#F4B942]/50 shadow-xl transition-all duration-300 bg-[#FAF8F1] h-[420px]">
                <iframe
                  title="Mukkam Office Native Google Map"
                  src={mukkamMapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
            </div>

            {/* Info Column (Right on Desktop) */}
            <div
              className="lg:col-span-6 order-1 lg:order-2 space-y-6 transition-all duration-700"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0) scale(1)" : "translateY(24px) scale(0.98)",
                transitionDelay: "750ms",
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              <div className="bg-[#FAF8F1] rounded-[28px] border border-[#FFD978]/30 p-8 sm:p-10 space-y-6 shadow-xl hover:border-[#F4B942]/50 transition-all duration-300">
                <div>
                  <SectionBadge align="left" as="h2">REGIONAL OFFICE</SectionBadge>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#111827] tracking-tight">
                    Mukkam Office
                  </h3>
                </div>

                <div className="space-y-1 font-sans text-sm sm:text-base text-[#111827]/82 leading-relaxed border-l-2 border-[#F4B942]/70 pl-4 py-0.5">
                  <p className="font-semibold text-[#111827]">
                    14/629, Nefna Complex
                  </p>
                  <p>Mukkam, Kozhikode &ndash; 673602</p>
                  <p>Kerala, India</p>
                </div>

                <p className="font-sans text-sm text-[#111827]/70 leading-relaxed pt-2 border-t border-[#FFD978]/40">
                  Supporting businesses across North Kerala with accounting, taxation,
                  compliance, GST, ROC and strategic advisory services.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-3">
                  <a
                    href={mukkamMapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-[0.12em] bg-[#F4B942] text-black px-6 py-3.5 rounded-full hover:bg-white transition-all duration-300 shadow-md cursor-pointer"
                  >
                    Open in Google Maps
                    <span>&rarr;</span>
                  </a>

                  <a
                    href={mukkamDirectionsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-[0.12em] text-[#F4B942] border border-[#F4B942]/40 bg-transparent px-6 py-3.5 rounded-full hover:bg-[#F4B942] hover:text-black transition-all duration-300 cursor-pointer"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default PracticePresenceSection;
