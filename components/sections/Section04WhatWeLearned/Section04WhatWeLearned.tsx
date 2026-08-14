"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { SectionBadge } from "@/components/ui/SectionBadge";

export default function Section04WhatWeLearned() {
  const [activeIndex, setActiveIndex] = useState(0);

  const insights = [
    {
      id: "01",
      heading: "CASH FLOW GAPS",
      description: "Slow-paying clients and fixed operating costs create cash shortages long before revenue reaches the bank.",
    },
    {
      id: "02",
      heading: "HIGH TAX BURDENS",
      description: "Businesses often pay more tax than necessary because they lack proactive, legally compliant tax planning.",
    },
    {
      id: "03",
      heading: "SCALING INEFFICIENCIES",
      description: "As businesses grow, uncontrolled costs can outpace revenue, reducing profitability instead of improving it.",
    },
    {
      id: "04",
      heading: "POOR WORKING CAPITAL CONTROL",
      description: "Cash becomes trapped in receivables, inventory and unpaid invoices, restricting day-to-day business operations.",
    },
  ];

  return (
    <section id="what-we-learned" className="w-full bg-[#FAF8F1] py-16 sm:py-24 lg:py-32 border-b border-[#FFD978]/30 font-sans">
      <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-6 lg:px-10 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Dominant Editorial Statement & Eyebrow (Centered on Mobile, Left-Aligned Sticky on Desktop) */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex justify-center lg:justify-start"
            >
              <SectionBadge align="left" as="h2">WHAT WE LEARNED</SectionBadge>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-[52px] text-[#111827] tracking-tight leading-[1.18] max-w-[500px] lg:max-w-none mx-auto lg:mx-0 text-center lg:text-left">
                Despite operating in different industries, businesses often face similar financial decision-making challenges.
              </p>
            </motion.div>
          </div>

          {/* Right Column: Vertical Accent Line & Editorial Items (Unchanged) */}
          <div className="lg:col-span-7 flex flex-col gap-8 sm:gap-10 lg:gap-12 relative pt-2">
            {insights.map((item, index) => {
              const isActive = activeIndex === index;

              return (
                <motion.div
                  key={item.id}
                  onViewportEnter={() => setActiveIndex(index)}
                  viewport={{ margin: "-30% 0px -40% 0px" }}
                  onClick={() => setActiveIndex(index)}
                  className={`cursor-pointer transition-all duration-300 ease-out pl-6 sm:pl-8 border-l-2 relative ${
                    isActive
                      ? "border-l-[#F4B942] opacity-100"
                      : "border-l-[#FFD978]/50 opacity-60 hover:opacity-90"
                  }`}
                >
                  {/* Insight Number Badge */}
                  <span
                    className={`text-xs lg:text-sm font-mono font-bold tracking-[0.2em] block mb-2 transition-colors duration-300 ${
                      isActive ? "text-[#F4B942]" : "text-[#111827]/50"
                    }`}
                  >
                    {item.id}
                  </span>

                  {/* Insight Heading */}
                  <h3
                    className={`text-lg sm:text-xl lg:text-2xl font-bold tracking-tight mb-2.5 transition-colors duration-300 ${
                      isActive ? "text-[#111827]" : "text-[#111827]/75"
                    }`}
                  >
                    {item.heading}
                  </h3>

                  {/* Insight Description */}
                  <p
                    className={`text-sm sm:text-base lg:text-[17px] leading-[1.7] max-w-[480px] lg:max-w-xl transition-colors duration-300 ${
                      isActive ? "text-[#111827]/90 font-medium" : "text-[#111827]/70 font-normal"
                    }`}
                  >
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
