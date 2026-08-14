"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionBadge } from "@/components/ui/SectionBadge";

export function AboutGlance() {
  const metrics = [
    {
      number: "2012",
      label: "ESTABLISHED",
      description: "Over a decade of professional practice.",
    },
    {
      number: "50+",
      label: "PROFESSIONALS",
      description: "Integrated multidisciplinary team.",
    },
    {
      number: "2",
      label: "OFFICES",
      description: (
        <>
          Kozhikode Headquarters
          <br />
          Mukkam Branch
        </>
      ),
    },
    {
      number: "SOUTH INDIA",
      label: "SERVING",
      description: "Supporting growing businesses across South India.",
    },
  ];

  return (
    <section id="glance" className="w-full bg-[#FAF8F1] py-24 sm:py-32 border-b border-[#FFD978]/40 font-sans text-left overflow-hidden">
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
            <SectionBadge align="center" as="h2">FIRM AT A GLANCE</SectionBadge>

            {/* Main Heading */}
            <p className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-[#111827] tracking-tight leading-[1.15] mt-1 text-center">
              Built in Kozhikode.
              <br />
              Serving Businesses Across South India.
            </p>

            {/* Standard 60px × 3px Executive Gold Divider */}
            <div className="w-[60px] h-[3px] bg-[#F4B942] mt-5 mb-7 mx-auto" />

            {/* Introduction Paragraph */}
            <p className="font-sans font-normal text-lg sm:text-[18px] text-[#111827]/82 leading-[1.8] mb-12 sm:mb-16 text-center max-w-[620px] mx-auto">
              Headquartered in Kozhikode, Manesh Rineesh &amp; Associates has grown into a multidisciplinary Chartered Accountancy practice serving businesses across Kerala and South India through strategic advisory, Virtual CFO services, taxation, audit, and compliance.
            </p>
          </div>

          {/* Metrics Layout: 4 Editorial Metric Rows */}
          <div className="border-t border-b border-[#FFD978]/40 divide-y divide-[#FFD978]/30">
            {metrics.map((m, idx) => (
              <motion.div
                key={typeof m.number === "string" ? m.number : idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="py-8 sm:py-10 grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-8 items-start text-left"
              >
                {/* Left: Large Playfair Number/Text */}
                <div className="sm:col-span-5">
                  <span
                    className={`font-serif font-bold text-[#111827] tracking-tight leading-none block ${
                      m.number.length > 5
                        ? "text-2xl sm:text-3xl lg:text-[36px] py-1"
                        : "text-5xl sm:text-[56px] lg:text-[64px]"
                    }`}
                  >
                    {m.number}
                  </span>
                </div>

                {/* Right: Small Gold Uppercase Label + Supporting Description */}
                <div className="sm:col-span-7 space-y-1.5 pt-1">
                  <span className="font-mono text-xs font-semibold tracking-[0.25em] text-[#F4B942] uppercase block">
                    {m.label}
                  </span>
                  <div className="font-sans font-normal text-[15px] sm:text-base text-[#111827]/75 leading-relaxed">
                    {m.description}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutGlance;
