"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Briefcase, FileText, Landmark } from "lucide-react";

export function AboutCapabilities() {
  const clusters = [
    {
      cluster: "CLUSTER 01",
      title: "Assurance & Financial Reporting",
      icon: ShieldCheck,
      description: "Independent audit and statutory reporting frameworks under Indian GAAP, Ind AS, and Companies Act standards.",
      services: [
        "Statutory Audit & Assurance",
        "Internal Financial Controls (IFC) Audit",
        "Ind AS Transition & Compliance",
        "Tax Audit & Regulatory Certifications",
      ],
    },
    {
      cluster: "CLUSTER 02",
      title: "Strategic Advisory & Virtual CFO",
      icon: Briefcase,
      description: "Executive financial leadership, cash flow stewardship, working capital management, and board decision support.",
      services: [
        "Virtual CFO Advisory Services",
        "Working Capital & Liquidity Optimization",
        "Management Information Systems (MIS)",
        "Mergers & Restructuring Support",
      ],
    },
    {
      cluster: "CLUSTER 03",
      title: "Direct & Indirect Taxation",
      icon: FileText,
      description: "Corporate tax optimization, GST compliance frameworks, transfer pricing documentation, and appellate litigation.",
      services: [
        "Corporate Direct Tax Planning",
        "GST Compliance & Audit Services",
        "Transfer Pricing & International Tax",
        "Appellate Representation (ITAT & GST)",
      ],
    },
    {
      cluster: "CLUSTER 04",
      title: "Corporate Governance & Statutory Filings",
      icon: Landmark,
      description: "End-to-end secretarial compliance, MCA company maintenance, RBI FEMA approvals, and corporate governance.",
      services: [
        "ROC Annual Filings & MCA Maintenance",
        "Director Secretarial Compliance",
        "RBI & FEMA Cross-Border Approvals",
        "Corporate Governance Frameworks",
      ],
    },
  ];

  return (
    <section id="capabilities" className="w-full bg-[#FAF8F1] py-24 sm:py-32 border-b border-[#FFD978]/40 font-sans">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-xs font-mono font-semibold tracking-[0.25em] text-[#F4B942] uppercase mb-3 block">
            05 • PRACTICE CAPABILITIES
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111827] tracking-tight leading-[1.15] mb-6 max-w-3xl">
            Integrated Capability Clusters.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-sm sm:text-base text-[var(--muted)] leading-relaxed font-normal max-w-2xl mb-16">
            Instead of fragmented services, our capabilities are organized into 4 strategic practice clusters designed to address enterprise lifecycle needs from statutory compliance to strategic expansion.
          </p>
        </motion.div>

        {/* 4 Large Editorial Capability Clusters with Thin Dividers */}
        <div className="space-y-8">
          {clusters.map((item, idx) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="border-b border-[#FFD978]/40 pb-8 group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
                  {/* Left Column: Cluster Header */}
                  <div className="lg:col-span-5 space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono font-semibold tracking-widest text-[#F4B942] uppercase">
                        {item.cluster}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-white/[0.06] border border-[#FFD978]/40 flex items-center justify-center text-[#F4B942] group-hover:border-[#F4B942] transition-colors shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-[#111827] tracking-tight group-hover:text-[#111827] transition-colors">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-sm text-[var(--muted)] leading-relaxed pt-2 font-normal">
                      {item.description}
                    </p>
                  </div>

                  {/* Right Column: Services List Grid */}
                  <div className="lg:col-span-7 bg-[#FAF8F1] border border-[#FFD978]/40 rounded-[18px] p-5 sm:p-6 group-hover:border-[#F4B942]/40 transition-colors">
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {item.services.map((service) => (
                        <li key={service} className="text-xs sm:text-sm text-[#111827]/85 font-medium flex items-center gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#F4B942] shrink-0" />
                          <span>{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default AboutCapabilities;
