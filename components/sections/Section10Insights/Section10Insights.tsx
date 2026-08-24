"use client";

import React from "react";
import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Heading from "@/components/ui/Heading";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { ArrowRight } from "lucide-react";

export default function Section10Insights() {
  const articles = [
    {
      category: "FINANCIAL ADVISORY",
      title: "Why Profitable Companies Still Run Out of Cash",
      summary: "Cash flow challenges can arise even in profitable businesses. Understanding working capital, receivables and operating cycles helps management make better financial decisions.",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop",
    },
    {
      category: "BUSINESS ADVISORY",
      title: "Should You Expand Before Strengthening Cash Flow?",
      summary: "Expansion decisions should be supported by financial capacity, reporting clarity and risk evaluation before committing capital.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop",
    },
  ];

  return (
    <Section id="insights-section" className="py-24 sm:py-32 bg-[#FFFFFF] border-b border-[#FFD978]/40">
      {/* Header Container (Centered on Both Desktop and Mobile) */}
      <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionBadge align="center" as="h2">EXECUTIVE INSIGHTS</SectionBadge>
        </motion.div>

        {/* Restored High-Contrast Executive Insights Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif text-[#111827] tracking-tight text-center mt-2 mb-3">
            Perspectives for Better Business Decisions
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-sm sm:text-base text-[#111827]/80 leading-relaxed font-normal max-w-[580px] mx-auto text-center">
            Thoughtful articles on finance, governance, taxation, compliance, and strategic advisory for business owners, directors, and management teams.
          </p>
        </motion.div>
      </div>

      {/* 2 Featured Executive Insight Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {articles.map((item, idx) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="group relative overflow-hidden rounded-[22px] bg-[#FAF8F1] border border-[#FFD978]/50 flex flex-col justify-between transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#F4B942] shadow-sm hover:shadow-md active:scale-[0.98] cursor-pointer"
          >
            {/* Top 50% Image Container */}
            <div className="relative h-[200px] sm:h-[220px] w-full overflow-hidden shrink-0">
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-[1.05] transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F1] via-[#FAF8F1]/30 to-transparent" />
            </div>

            {/* Card Content Container */}
            <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
              <div>
                {/* Category Label — Level 1 Label Color */}
                <span className="text-xs font-mono font-bold tracking-wider text-[#1F3A8A] uppercase block mb-2">
                  {item.category}
                </span>

                {/* Editorial Title — Level 3 Heading */}
                <h3 className="text-lg sm:text-xl font-bold text-[#111827] mb-2.5 leading-snug tracking-tight group-hover:text-[#1F3A8A] transition-colors">
                  {item.title}
                </h3>

                {/* Article Summary — Level 4 Description */}
                <p className="text-sm text-[#4B5563] leading-relaxed font-normal line-clamp-2 mb-6">
                  {item.summary}
                </p>
              </div>

              {/* Read Insight CTA — Level 2 CTA */}
              <div className="pt-2 text-xs font-bold text-[#1F3A8A] flex items-center gap-1.5 transition-all duration-300">
                <span>Read Insight</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-2 transition-transform duration-300 ease-out" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
