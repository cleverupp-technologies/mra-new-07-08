"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ShieldCheck, 
  Briefcase, 
  Building2, 
  CheckCircle2, 
  Layers, 
  LineChart, 
  FileSpreadsheet, 
  Calculator, 
  Receipt,
  ArrowRight
} from "lucide-react";
import { SectionBadge } from "@/components/ui/SectionBadge";

export default function Section07Services() {
  const [isExpanded, setIsExpanded] = useState(false);

  const primaryServices = [
    {
      name: "Audit & Assurance",
      icon: ShieldCheck,
      description: "Independent statutory audit, internal financial controls, and risk-focused regulatory assurance.",
    },
    {
      name: "Virtual CFO",
      icon: Briefcase,
      description: "Strategic financial leadership, MIS reporting, working capital control, and executive growth planning.",
    },
    {
      name: "Corporate Advisory",
      icon: Building2,
      description: "Mergers & acquisitions, corporate restructuring, business valuation, and capital structure planning.",
    },
    {
      name: "Compliance",
      icon: CheckCircle2,
      description: "End-to-end statutory compliance management under direct tax, GST, RBI FEMA, and corporate laws.",
    },
    {
      name: "Outsourcing",
      icon: Layers,
      description: "Bespoke financial accounting, payroll administration, and back-office regulatory operations.",
    },
    {
      name: "Business Advisory",
      icon: LineChart,
      description: "Feasibility studies, performance benchmarking, profitability analysis, and cost optimization.",
    },
  ];

  const additionalServices = [
    {
      name: "ROC Filing",
      icon: FileSpreadsheet,
      description: "Annual secretarial returns, director compliance, MCA e-filings, and corporate governance maintenance.",
    },
    {
      name: "TDS Compliance",
      icon: Calculator,
      description: "TDS deduction mapping, quarterly return filings, Form 16/16A generation, and tax reconciliation.",
    },
    {
      name: "Personal Income Tax Return",
      icon: Receipt,
      description: "High-net-worth tax planning, capital gains computation, and accurate individual ITR filing.",
    },
  ];

  return (
    <section id="services" className="w-full bg-[#FAF8F1] py-16 sm:py-24 lg:py-32 border-b border-[#FFD978]/40 font-sans">
      <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-6 lg:px-10 xl:px-16">
        
        {/* Centered Section Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16 max-w-3xl mx-auto">
          <SectionBadge align="center" as="h2">PRACTICE AREAS</SectionBadge>
          
          <p className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-[#111827] tracking-tight leading-[1.15] mt-2 mb-4 max-w-3xl text-center">
            Comprehensive Advisory &amp; Statutory Assurance
          </p>

          <p className="font-sans text-sm sm:text-base text-[#111827]/80 max-w-2xl leading-relaxed text-center">
            Integrated professional services structured around business decision contexts, regulatory compliance, and long-term financial stability.
          </p>
        </div>

        {/* Primary 6 Practice Area Cards (Unchanged) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 text-left">
          {primaryServices.map((srv, idx) => {
            const Icon = srv.icon;

            return (
              <motion.div
                key={srv.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="relative overflow-hidden rounded-[22px] bg-[#FFFFFF] border border-[#FFD978]/50 p-6 sm:p-7 flex flex-col justify-between group transition-all duration-300 ease-out hover:border-[#F4B942] hover:shadow-md shadow-sm select-none cursor-default"
              >
                {/* Top Gold Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#F4B942]/70 to-transparent group-hover:via-[#F4B942] transition-all duration-300" />

                <div>
                  {/* Circular Icon Badge */}
                  <div className="w-11 h-11 rounded-full bg-[#FAF8F1] border border-[#FFD978]/40 flex items-center justify-center text-[#F4B942] mb-5 group-hover:border-[#F4B942] transition-all duration-300 shadow-sm">
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Service Title — Level 3 Heading */}
                  <h3 className="font-serif font-bold text-xl text-[#111827] mb-2 tracking-tight">
                    {srv.name}
                  </h3>

                  {/* Service Description — Level 4 Description */}
                  <p className="font-sans font-normal text-sm sm:text-base text-[#4B5563] leading-relaxed line-clamp-3">
                    {srv.description}
                  </p>
                </div>

                {/* Bottom CTA Indicator — Level 2 CTA */}
                <div className="mt-6 pt-2 text-xs font-bold text-[#1F3A8A] flex items-center gap-1.5">
                  <span>Professional Scope</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Progressively Revealed Additional 3 Cards (Unchanged) */}
        <AnimatePresence>
          {isExpanded && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mt-5 sm:mt-6 text-left">
              {additionalServices.map((srv, idx) => {
                const Icon = srv.icon;

                return (
                  <motion.div
                    key={srv.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.07, ease: [0.16, 1, 0.3, 1] }}
                    className="relative overflow-hidden rounded-[22px] bg-[#FFFFFF] border border-[#FFD978]/50 p-6 sm:p-7 flex flex-col justify-between group transition-all duration-300 ease-out hover:border-[#F4B942] hover:shadow-md shadow-sm select-none cursor-default"
                  >
                    {/* Top Gold Accent Line */}
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#F4B942]/70 to-transparent group-hover:via-[#F4B942] transition-all duration-300" />

                    <div>
                      {/* Circular Icon Badge */}
                      <div className="w-11 h-11 rounded-full bg-[#FAF8F1] border border-[#FFD978]/40 flex items-center justify-center text-[#F4B942] mb-5 group-hover:border-[#F4B942] transition-all duration-300 shadow-sm">
                        <Icon className="w-5 h-5" />
                      </div>

                      {/* Service Title — Level 3 Heading */}
                      <h3 className="font-serif font-bold text-xl text-[#111827] mb-2 tracking-tight">
                        {srv.name}
                      </h3>

                      {/* Service Description — Level 4 Description */}
                      <p className="font-sans font-normal text-sm sm:text-base text-[#4B5563] leading-relaxed line-clamp-3">
                        {srv.description}
                      </p>
                    </div>

                    {/* Bottom CTA Indicator — Level 2 CTA */}
                    <div className="mt-6 pt-2 text-xs font-bold text-[#1F3A8A] flex items-center gap-1.5">
                      <span>Professional Scope</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
        </AnimatePresence>

        {/* Centered Editorial "Explore More Services →" Button (Unchanged) */}
        {!isExpanded && (
          <div className="flex justify-center mt-10 sm:mt-12">
            <button
              onClick={() => setIsExpanded(true)}
              className="group text-sm font-bold text-[#F4B942] hover:text-[#111827] inline-flex items-center gap-2 transition-colors cursor-pointer bg-transparent border-none outline-none py-2 px-4"
            >
              <span>Explore More Services</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300 ease-out" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
