import React from "react";
import { SectionBadge } from "@/components/ui/SectionBadge";

export default function Section02Introduction() {
  const firmStats = [
    { value: "2012", label: "ESTABLISHED" },
    { value: "50+", label: "PROFESSIONALS" },
    { value: "14+", label: "YEARS PRACTICE" },
    { value: "2", label: "PRACTICE OFFICES" },
  ];

  return (
    <section id="introduction" className="w-full bg-[#1F3A8A] text-[#FAF8F1] py-16 sm:py-24 lg:py-32 relative overflow-hidden border-b border-[#FFD978]/20 font-sans">
      {/* Subtle Background Accent Glow */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[radial-gradient(ellipse_at_center,rgba(56, 82, 180,0.06),transparent_70%)] pointer-events-none z-0" />

      {/* ── MOBILE & TABLET (< 1024px): Single-Column Hierarchy ── */}
      <div className="lg:hidden w-full max-w-[640px] md:max-w-[768px] mx-auto px-5 sm:px-6 relative z-10 flex flex-col space-y-7">
        {/* Mobile Eyebrow Badge */}
        <div className="flex flex-col items-start space-y-2">
          <SectionBadge align="left">ABOUT THE FIRM</SectionBadge>
          <div className="w-10 sm:w-12 h-[2px] bg-[#F4B942] rounded-full" />
        </div>

        {/* 1. Statement: Unified Editorial Dual-Color Paragraph */}
        <p className="font-sans font-medium text-[17px] sm:text-[18px] leading-[1.55] tracking-tight text-left">
          <span className="text-[#FFFEF7]">
            Manesh Rineesh &amp; Associates is a Chartered Accountancy practice in Kozhikode helping growing businesses across South India{" "}
          </span>
          <span className="text-[#FFD978]">
            improve financial clarity through audit, taxation, Virtual CFO and strategic advisory services.
          </span>
        </p>

        {/* 2. Stats Grid: 2x2 Clean Mobile Proof Grid */}
        <div className="grid grid-cols-2 gap-6 py-6 border-t border-b border-[#FFD978]/20">
          {firmStats.map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <span className="font-serif font-bold text-3xl sm:text-4xl text-[#F4B942] leading-none block">
                {stat.value}
              </span>
              <span className="font-mono text-[10px] sm:text-xs font-bold text-[#FFD978] uppercase tracking-wider block">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* 3. Image: Full-Width Rounded Image */}
        <div className="w-full overflow-hidden rounded-2xl shadow-xl border border-[#FFD978]/20">
          <img
            src="/images/section-02-team.jpg"
            alt="Manesh Rineesh & Associates Chartered Accountants Firm Team"
            className="w-full h-auto aspect-[16/10] sm:aspect-[16/9] object-cover opacity-95"
          />
        </div>
      </div>

      {/* ── DESKTOP (>= 1024px): Editorial Composition ── */}
      <div className="hidden lg:block w-full max-w-[1440px] mx-auto px-10 xl:px-16 relative z-10">
        <div className="grid grid-cols-12 gap-12 xl:gap-16 items-start">
          
          {/* ── LEFT SIDE — FIRM SCALE / PROOF (Vertical Statistics Column) ── */}
          <div className="lg:col-span-3 xl:col-span-3 flex flex-col justify-start pr-8 border-r border-[#FFD978]/20 select-none">
            <div className="space-y-3 mb-10">
              <SectionBadge align="left">ABOUT THE FIRM</SectionBadge>
              <div className="w-12 h-[2.5px] bg-[#F4B942] rounded-full" />
            </div>

            {/* Vertical Statistics Column */}
            <div className="divide-y divide-[#FFD978]/20">
              {firmStats.map((stat, idx) => (
                <div key={idx} className="py-7 first:pt-0 last:pb-0 space-y-1.5">
                  <span className="font-serif font-bold text-5xl lg:text-[56px] xl:text-[64px] leading-none text-[#F4B942] block tracking-tight">
                    {stat.value}
                  </span>
                  <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#FFD978] block">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT SIDE — FIRM STATEMENT & IMAGE ── */}
          <div className="lg:col-span-9 xl:col-span-9 space-y-10 lg:space-y-12 pl-2 xl:pl-4">
            {/* UPPER RIGHT: Unified Editorial Dual-Color Statement */}
            <p className="font-sans font-medium text-xl sm:text-2xl lg:text-[24px] leading-[1.55] max-w-[880px] tracking-tight">
              <span className="text-[#FFFEF7]">
                Manesh Rineesh &amp; Associates is a Chartered Accountancy practice in Kozhikode helping growing businesses across South India{" "}
              </span>
              <span className="text-[#FFD978]">
                improve financial clarity through audit, taxation, Virtual CFO and strategic advisory services.
              </span>
            </p>

            {/* BELOW STATEMENT: Large Practice Team Photograph */}
            <div className="w-full overflow-hidden rounded-[28px] border border-[#FFD978]/20 shadow-2xl group relative">
              <img
                src="/images/section-02-team.jpg"
                alt="Manesh Rineesh & Associates Chartered Accountants Firm Team"
                className="w-full h-auto aspect-[16/8.5] object-cover opacity-95 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.015]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/40 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
