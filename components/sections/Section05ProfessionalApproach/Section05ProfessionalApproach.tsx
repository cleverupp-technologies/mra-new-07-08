"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionBadge } from "@/components/ui/SectionBadge";

export default function Section05ProfessionalApproach() {
  const steps = [
    {
      num: "01",
      step: "STEP 01",
      title: "Understanding the Context",
      description: "Every assignment begins with reviewing the underlying objectives, financial information, regulatory environment, and the technical context in which professional services are required.",
    },
    {
      num: "02",
      step: "STEP 02",
      title: "Professional Evaluation",
      description: "Relevant financial information, statutory requirements, and business records are evaluated in accordance with applicable professional and ethical standards.",
    },
    {
      num: "03",
      step: "STEP 03",
      title: "Professional Analysis",
      description: "Financial information, applicable laws, regulatory requirements, and business circumstances are analysed to support the professional execution of the assignment within its defined scope.",
    },
    {
      num: "04",
      step: "STEP 04",
      title: "Assignment Delivery",
      description: "The engagement concludes with the delivery of the agreed professional services, documentation, and deliverables appropriate to the agreed scope of the assignment.",
    },
  ];

  return (
    <section id="professional-approach" className="w-full bg-[#FAF8F1] py-16 sm:py-24 lg:py-32 border-b border-[#FFD978]/30 font-sans">
      <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-6 lg:px-10 xl:px-16">
        
        {/* Section Header (Centered on Both Desktop and Mobile) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 sm:mb-16 lg:mb-20 text-center"
        >
          <SectionBadge align="center" as="h2">ENGAGEMENT METHODOLOGY</SectionBadge>
          <p className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-[#111827] tracking-tight leading-tight text-center">
            Methodology of Assignments
          </p>
        </motion.div>

        {/* ── DESKTOP LAYOUT (>= 1024px): Single Horizontal Timeline (Unchanged) ── */}
        <div className="hidden lg:block relative py-6">
          {/* Horizontal Connecting Timeline Line */}
          <div className="absolute top-11 left-6 right-6 h-[2px] bg-[#FFD978]/60 z-0" />

          {/* 4 Steps Grid */}
          <div className="grid grid-cols-4 gap-8 xl:gap-12 relative z-10">
            {steps.map((s, idx) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-start select-none cursor-default"
              >
                {/* Numbered Marker Circle Sitting Directly on Timeline */}
                <div className="w-10 h-10 rounded-full bg-[#FAF8F1] border-2 border-[#F4B942] text-[#F4B942] font-serif font-bold text-base flex items-center justify-center mb-6 z-10 relative">
                  {s.num}
                </div>

                {/* Step Eyebrow Label */}
                <span className="font-mono text-[11px] font-bold text-[#F4B942] tracking-[0.2em] uppercase mb-2 block">
                  {s.step}
                </span>

                {/* Step Title in Dark Brown */}
                <h3 className="font-serif font-bold text-xl lg:text-[22px] text-[#111827] leading-snug mb-3">
                  {s.title}
                </h3>

                {/* Step Description */}
                <p className="font-sans font-normal text-sm lg:text-[15px] text-[#111827]/85 leading-[1.7]">
                  {s.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── MOBILE LAYOUT (< 1024px): Clean Vertical Timeline (Unchanged) ── */}
        <div className="lg:hidden relative border-l-2 border-[#FFD978]/60 pl-6 sm:pl-8 space-y-10 sm:space-y-12 ml-3 sm:ml-4 py-2">
          {steps.map((s, idx) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="relative select-none cursor-default"
            >
              {/* Vertical Timeline Marker */}
              <div className="absolute -left-[33px] sm:-left-[41px] top-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#FAF8F1] border-2 border-[#F4B942] text-[#F4B942] font-serif font-bold text-xs sm:text-sm flex items-center justify-center">
                {s.num}
              </div>

              {/* Step Eyebrow */}
              <span className="font-mono text-[10px] sm:text-[11px] font-bold text-[#F4B942] tracking-[0.2em] uppercase mb-1 block">
                {s.step}
              </span>

              {/* Step Title */}
              <h3 className="font-serif font-bold text-lg sm:text-xl text-[#111827] leading-snug mb-2">
                {s.title}
              </h3>

              {/* Step Description */}
              <p className="font-sans font-normal text-sm sm:text-base text-[#111827]/85 leading-[1.7]">
                {s.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
