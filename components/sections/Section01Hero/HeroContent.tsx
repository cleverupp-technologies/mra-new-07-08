"use client";

import React from "react";
import HeroCTA from "./HeroCTA";

export default function HeroContent() {
  return (
    <div className="flex flex-col text-left max-w-full">
      {/* Eyebrow Label */}
      <div className="mb-3 sm:mb-4">
        <span className="font-mono text-xs sm:text-sm font-bold text-[#F4B942] uppercase tracking-[0.25em] block">
          MANESH RINEESH &amp; ASSOCIATES
        </span>
      </div>

      {/* Heading Block */}
      <div className="mb-4 sm:mb-6">
        <h1 className="font-serif text-[28px] sm:text-[44px] lg:text-[52px] xl:text-[58px] font-bold tracking-tight text-[#FAF8F1] leading-[1.2] sm:leading-[1.1] max-w-[340px] sm:max-w-[440px] lg:max-w-[680px] drop-shadow-md">
          Helping businesses<br className="hidden sm:inline" />{" "}
          make better decisions<br className="hidden sm:inline" />{" "}
          with clarity.
        </h1>
      </div>

      {/* Supporting Description */}
      <div className="mb-6 sm:mb-8 lg:mb-10">
        <p className="font-sans font-medium text-[15px] sm:text-[18px] lg:text-[22px] xl:text-[24px] leading-[1.55] max-w-[340px] sm:max-w-[480px] lg:max-w-[640px] drop-shadow-sm">
          <span className="text-[#FFFEF7]">
            Empowering growth, compliance, and institutional scale{" "}
          </span>
          <span className="text-[#FFD978]">
            for corporate enterprises and visionary founders across India.
          </span>
        </p>
      </div>

      {/* Primary CTA */}
      <HeroCTA />
    </div>
  );
}
