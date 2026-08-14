"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionBadge } from "@/components/ui/SectionBadge";

export function AboutValues() {
  const principles = [
    {
      title: "Financial Clarity",
      description: "Better decisions begin with better visibility.",
    },
    {
      title: "Strategic Thinking",
      description: "Every recommendation should improve the quality of a business decision.",
    },
    {
      title: "Long-Term Partnership",
      description: "We work alongside our clients as advisors, not occasional service providers.",
    },
    {
      title: "Integrity",
      description: (
        <>
          Clear advice.
          <br />
          Honest numbers.
          <br />
          No unnecessary complexity.
        </>
      ),
    },
    {
      title: "Commercial Perspective",
      description: "Numbers only matter when they help businesses move forward.",
    },
  ];

  return (
    <section id="values" className="w-full bg-[#FAF8F1] py-24 sm:py-32 border-b border-[#FFD978]/40 font-sans text-left overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6">
        {/* Maximum content width 680px & Centered Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[680px] mx-auto"
        >
          {/* Centered Introductory Header */}
          <div className="text-center">
            {/* Section Badge */}
            <SectionBadge align="center" as="h2">OUR VALUES</SectionBadge>

            {/* Main Heading: Governing Principles */}
            <p className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-[#111827] tracking-tight leading-[1.15] mt-1 text-center">
              Governing Principles
            </p>

            {/* Standard 60px × 3px Executive Gold Divider */}
            <div className="w-[60px] h-[3px] bg-[#F4B942] mt-5 mb-7 mx-auto" />

            {/* Introduction Paragraph */}
            <p className="font-sans italic text-lg sm:text-xl text-[#111827]/82 leading-relaxed mb-10 sm:mb-12 font-normal text-center max-w-[620px] mx-auto">
              Every decision we make as advisors is guided by five principles that define how we work with the businesses we serve.
            </p>
          </div>

          {/* Clean Editorial List of 5 Governing Principles */}
          <div className="divide-y divide-[#FFD978]/30 border-t border-b border-[#FFD978]/30">
            {principles.map((item, idx) => (
              <motion.div
                key={typeof item.title === "string" ? item.title : idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="py-8 sm:py-10 text-left"
              >
                {/* Title */}
                <h3 className="font-serif font-bold text-[24px] sm:text-[30px] lg:text-[34px] text-[#111827] tracking-tight mb-2.5">
                  {item.title}
                </h3>
                {/* Supporting Copy */}
                <div className="font-sans font-normal text-[17px] sm:text-[18px] text-[#111827]/75 leading-[1.8]">
                  {item.description}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutValues;
