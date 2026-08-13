import React from "react";
import Link from "next/link";
import HeroNav from "@/components/sections/Section01Hero/HeroNav";
import Footer from "@/components/sections/Section12Footer/Section12Footer";
import ConsultationCTA from "@/components/consultation/ConsultationCTA";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { ChevronRight } from "lucide-react";

export const metadata = {
  title: "Client Experiences & Evidence Stream | Manesh Rineesh & Associates",
  description:
    "Verified engagement cases, working capital diagnostics, restructuring, and commercial advisory outcomes.",
};

export default function ClientExperiencesPage() {
  const cases = [
    {
      sector: "HEALTHCARE NETWORK",
      title: "Optimizing Working Capital Across Multi-Specialty Facilities",
      situation:
        "A growing regional healthcare network faced cash flow bottlenecks due to delayed insurance claim settlements and high vendor payables.",
      solution:
        "Implemented a Virtual CFO framework establishing 13-week rolling cash forecasts, claim aging tracking, and structured vendor payment cadences.",
      outcome:
        "Improved cash predictability, eliminated emergency high-cost borrowings, and restored supplier trust.",
    },
    {
      sector: "MANUFACTURING ENTERPRISE",
      title: "Statutory & Tax Restructuring for Capacity Expansion",
      situation:
        "An industrial equipment manufacturing unit sought capital expansion to double production capacity while navigating complex GST ITC reconciliations.",
      solution:
        "Conducted a comprehensive statutory audit, optimized GSTR-2B credit matching, and structured banking credit facilities.",
      outcome:
        "Recovered blocked input tax credits and secured institutional term loan financing on competitive terms.",
    },
    {
      sector: "RETAIL & WHOLESALE GROUP",
      title: "Transitioning Family Business to Institutional Financial Governance",
      situation:
        "A multi-branch retail firm operating legacy bookkeeping lacked margin visibility by product line and branch location.",
      solution:
        "Outsourced back-office accounting, established centralized inventory ledger reconciliations, and delivered monthly MIS dashboards.",
      outcome:
        "Identified non-performing SKU categories, reduced holding costs, and provided clear profitability metrics for expansion.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAF8F1] text-[#111827] font-sans selection:bg-[#F4B942] selection:text-[#111827]">
      <HeroNav />

      <section className="relative pt-36 sm:pt-44 lg:pt-48 pb-20 lg:pb-28 px-6 lg:px-12 max-w-[1400px] mx-auto overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-[radial-gradient(ellipse_at_center,rgba(56, 82, 180,0.12),transparent_70%)] pointer-events-none z-0" />

        <div className="relative z-10 max-w-4xl text-left space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-[#111827]/70 uppercase">
            <Link href="/" className="hover:text-[#F4B942] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#F4B942]" />
            <Link href="/insights" className="hover:text-[#F4B942] transition-colors">
              Insights
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#F4B942]" />
            <span className="text-[#F4B942] font-bold">Client Experiences</span>
          </div>

          <SectionBadge align="left">EVIDENCE STREAM</SectionBadge>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#111827] leading-[1.1] tracking-tight">
            Client Experiences &amp; Case Evidence
          </h1>

          <p className="text-base sm:text-lg text-[#111827]/85 font-sans leading-relaxed max-w-2xl pt-2">
            Practical accounts of verified business situations, diagnostic findings, and operational advisory outcomes across sectors.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-[#FFD978]/25 border-t border-b border-[#FFD978] px-6 lg:px-12">
        <div className="max-w-[1240px] mx-auto space-y-12">
          {cases.map((cs, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-[#FAF8F1] border border-[#FFD978] space-y-6 shadow-sm"
            >
              <div className="flex items-center justify-between border-b border-[#FFD978] pb-4">
                <span className="font-mono text-xs text-[#F4B942] font-bold tracking-widest uppercase">
                  {cs.sector}
                </span>
                <span className="text-xs font-mono text-[#111827]/60 font-bold">VERIFIED CASE STUDY</span>
              </div>

              <h2 className="text-2xl font-serif font-bold text-[#111827]">
                {cs.title}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                <div className="space-y-2">
                  <span className="font-mono text-xs text-[#111827]/60 uppercase tracking-wider block font-bold">
                    THE SITUATION
                  </span>
                  <p className="text-[#111827]/85 font-sans leading-relaxed">
                    {cs.situation}
                  </p>
                </div>
                <div className="space-y-2">
                  <span className="font-mono text-xs text-[#F4B942] uppercase tracking-wider block font-bold">
                    OUR APPROACH
                  </span>
                  <p className="text-[#111827]/85 font-sans leading-relaxed">
                    {cs.solution}
                  </p>
                </div>
                <div className="space-y-2">
                  <span className="font-mono text-xs text-[#111827] uppercase tracking-wider block font-bold">
                    BUSINESS OUTCOME
                  </span>
                  <p className="text-[#111827]/85 font-sans leading-relaxed">
                    {cs.outcome}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ConsultationCTA id="consultation" />
      <Footer />
    </div>
  );
}
