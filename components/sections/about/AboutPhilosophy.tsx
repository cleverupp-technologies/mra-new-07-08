"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionBadge } from "@/components/ui/SectionBadge";

export function AboutPhilosophy() {
  return (
    <section id="philosophy" className="w-full bg-[#FAF8F1] py-24 sm:py-32 border-b border-[#FFD978]/40 font-sans text-left overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6">
        {/* Maximum content width 680px & Left-Aligned */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[680px] text-left"
        >
          {/* Section Badge */}
          <SectionBadge align="left">ABOUT</SectionBadge>

          {/* Main Heading: Strategy Before Compliance */}
          <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-[#111827] tracking-tight leading-[1.15] mt-1">
            Strategy Before Compliance
          </h2>

          {/* Standard 60px Executive Gold Divider */}
          <div className="w-[60px] h-[3px] bg-[#F4B942] mt-5 mb-7" />

          {/* Body Copy Paragraphs */}
          <div className="space-y-6">
            {/* Paragraph 1: Slightly larger, medium weight */}
            <p className="font-sans font-medium text-xl sm:text-2xl text-[#111827]/95 leading-relaxed">
              Manesh Rineesh &amp; Associates exists to help businesses make better financial decisions before they become expensive business problems.
            </p>

            {/* Paragraph 2: Regular weight, generous spacing */}
            <p className="font-sans font-normal text-lg sm:text-[18px] text-[#111827]/82 leading-[1.8]">
              Our role extends beyond taxation, audits and statutory filings. We work as Virtual CFOs, financial advisors and long-term strategic partners, helping management teams gain clarity, reduce financial blind spots and make decisions with confidence.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutPhilosophy;
