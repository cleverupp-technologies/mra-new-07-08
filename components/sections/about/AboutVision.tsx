"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionBadge } from "@/components/ui/SectionBadge";

export function AboutVision() {
  return (
    <section id="vision" className="w-full bg-[#FAF8F1] py-24 sm:py-32 border-b border-[#FFD978]/40 font-sans text-left overflow-hidden">
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
          <SectionBadge align="left">OUR VISION</SectionBadge>

          {/* Main Heading: Redefining Practice Expectations */}
          <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-[#111827] tracking-tight leading-[1.15] mt-1">
            Redefining Practice Expectations
          </h2>

          {/* Standard 60px × 3px Executive Gold Divider */}
          <div className="w-[60px] h-[3px] bg-[#F4B942] mt-5 mb-7" />

          {/* Prominent Vision Statement Copy */}
          <p className="font-serif italic text-xl sm:text-2xl text-[#111827]/90 leading-[1.75] font-normal">
            &ldquo;To redefine what businesses expect from a Chartered Accountancy practice by making strategic financial advisory and Virtual CFO thinking as essential as compliance itself.&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutVision;
