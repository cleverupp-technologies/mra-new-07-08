import React from "react";
import Link from "next/link";
import { siteConfig } from "@/content/site-config";
import { Container } from "@/components/layout/Container";
import { ConsultationCTA } from "@/components/consultation/ConsultationCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industry Practice Sectors | Manesh Rineesh & Associates",
  description:
    "Chartered Accountancy decision-led advisory across healthcare, retail, manufacturing, NBFCs, real estate, and commercial enterprises in Kerala.",
  alternates: {
    canonical: `${siteConfig.baseUrl}/industries`,
  },
  openGraph: {
    title: "Industry Practice Sectors | Manesh Rineesh & Associates",
    description:
      "Chartered Accountancy decision-led advisory across healthcare, retail, manufacturing, NBFCs, real estate, and commercial enterprises in Kerala.",
    url: `${siteConfig.baseUrl}/industries`,
  },
};

export default function IndustriesIndexPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.baseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Industries",
        item: `${siteConfig.baseUrl}/industries`,
      },
    ],
  };

  return (
    <div className="bg-[#faf8f5] text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* MOVEMENT 01 — SECTOR DISCOVERY OPENING */}
      <section className="py-10 sm:py-12 border-b border-stone-200/80">
        <Container>
          <div className="max-w-4xl space-y-4">
            {/* Accessible Breadcrumb Navigation */}
            <nav aria-label="Breadcrumb" className="mb-2">
              <ol className="flex items-center space-x-2 text-xs font-sans text-stone-500">
                <li>
                  <Link
                    href="/"
                    className="hover:text-amber-800 transition-colors focus-visible:outline-2 focus-visible:outline-amber-700 rounded-sm"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <span className="text-stone-400">/</span>
                </li>
                <li className="font-medium text-slate-950" aria-current="page">
                  Industries
                </li>
              </ol>
            </nav>

            <div className="inline-flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-700 inline-block" />
              <span className="font-sans text-xs font-semibold uppercase tracking-widest text-amber-800">
                Sector Recognition · Industry Practices
              </span>
            </div>

            <h1 className="font-serif font-normal text-3xl sm:text-4xl lg:text-5xl text-slate-950 leading-snug tracking-tight">
              Decision-Led Advisory Across Recognized Commercial Realities
            </h1>

            <p className="font-sans text-slate-700 text-base sm:text-lg leading-relaxed max-w-3xl">
              MR&amp;A categorizes financial decision-making by business sector, establishing recurring operating pressures, capital cycles, and commercial decisions before introducing advisory capabilities.
            </p>
          </div>
        </Container>
      </section>

      {/* MOVEMENT 02 — FLAGSHIP HEALTHCARE PRACTICE */}
      <section className="py-10 sm:py-12 border-b border-stone-200/80">
        <Container>
          <div className="max-w-4xl space-y-6">
            <div className="space-y-2">
              <span className="font-mono text-xs font-bold text-amber-800 uppercase tracking-wider block">
                01 · Flagship Industry Practice
              </span>
              <h2 className="font-serif font-normal text-2xl sm:text-3xl text-slate-950 leading-snug">
                Hospitals &amp; Healthcare Enterprise
              </h2>
              <p className="font-sans text-slate-700 text-sm sm:text-base leading-relaxed max-w-3xl">
                Growing a healthcare business creates financial decisions far beyond clinical care—balancing multi-location clinic expansion, equipment CapEx payback, doctor profit-sharing, and reimbursement cash flows.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-y-6 md:gap-y-0 gap-x-8 md:gap-x-10 items-start pt-2">
              {/* Primary Practice Feature (7 Cols Desktop, Left Amber Accent Rule) */}
              <div className="md:col-span-7 space-y-3 border-l-2 border-amber-800/80 pl-4 sm:pl-5">
                <span className="font-sans text-[11px] font-bold uppercase tracking-wider text-amber-800 block">
                  Level B+ Dedicated Practice
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-normal text-slate-950 leading-snug">
                  Healthcare Practice Advisory
                </h3>
                <p className="font-sans text-slate-700 text-xs sm:text-sm leading-relaxed">
                  Financial decision frameworks for growing healthcare organizations, medical clinics, and multi-location practices in Kerala. Evaluate clinic expansion payback, diagnostic equipment CapEx, and doctor payout models.
                </p>
                <div className="pt-2">
                  <Link
                    href="/industries/healthcare"
                    className="inline-flex items-center min-h-[44px] space-x-2 font-sans font-semibold text-xs sm:text-sm text-slate-950 hover:text-amber-800 border-b border-slate-950 hover:border-amber-800 pb-0.5 transition-colors focus-visible:outline-2 focus-visible:outline-amber-700 rounded-sm"
                  >
                    <span>Explore Healthcare Practice →</span>
                  </Link>
                </div>
              </div>

              {/* Practice Operational Realities (5 Cols Desktop) */}
              <div className="md:col-span-5 space-y-3 pt-1 md:pt-0 md:pl-2 border-t md:border-t-0 md:border-l border-stone-200/80 pt-4 md:pt-0">
                <span className="font-sans text-[11px] font-semibold uppercase tracking-wider text-stone-500 block">
                  Healthcare Decision Realities
                </span>
                <ul className="space-y-2 text-xs font-sans text-slate-700 leading-relaxed">
                  <li className="flex items-start space-x-2">
                    <span className="text-amber-800 font-bold">•</span>
                    <span>Clinic expansion payback &amp; ramp-up cash requirements</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-amber-800 font-bold">•</span>
                    <span>Diagnostic equipment CapEx vs operating liquidity</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-amber-800 font-bold">•</span>
                    <span>Clinical partner compensation &amp; profit distribution</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* MOVEMENT 03 — COMMERCIAL & OPERATIONAL SECTOR REALITIES */}
      <section className="py-10 sm:py-12 border-b border-stone-200/80">
        <Container>
          <div className="max-w-4xl space-y-6">
            <div className="space-y-2">
              <span className="font-mono text-xs font-bold text-stone-500 uppercase tracking-wider block">
                02 · Secondary Sector Recognition
              </span>
              <h2 className="font-serif font-normal text-2xl sm:text-3xl text-slate-950 leading-snug">
                Recognized sector realities &amp; operating pressures.
              </h2>
              <p className="font-sans text-slate-700 text-sm sm:text-base leading-relaxed max-w-3xl">
                Commercial enterprises face distinct capital structures, inventory cycles, and working capital demands based on their operating model.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 pt-2">
              {/* Sector 01: Retail & Wholesale */}
              <div className="space-y-2 border-l-2 border-stone-300 pl-4">
                <span className="font-mono text-[11px] font-bold text-stone-500 uppercase tracking-wider block">
                  01 · Retail &amp; Wholesale
                </span>
                <h3 className="font-serif font-normal text-lg sm:text-xl text-slate-950">
                  Inventory turnover &amp; working capital lockup
                </h3>
                <p className="font-sans text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Managing inventory holding cycles, supplier credit terms, multi-location working capital allocation, and operational margin preservation.
                </p>
              </div>

              {/* Sector 02: Manufacturing & Industrial */}
              <div className="space-y-2 border-l-2 border-stone-300 pl-4">
                <span className="font-mono text-[11px] font-bold text-stone-500 uppercase tracking-wider block">
                  02 · Manufacturing &amp; Industrial
                </span>
                <h3 className="font-serif font-normal text-lg sm:text-xl text-slate-950">
                  Plant CapEx payback &amp; capacity utilization
                </h3>
                <p className="font-sans text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Evaluating production facility CapEx payback, capacity utilization baselines, raw material cost variance, and production asset depreciation.
                </p>
              </div>

              {/* Sector 03: NBFCs & Financial Services */}
              <div className="space-y-1.5 sm:space-y-2 border-l-2 border-stone-300 pl-4">
                <span className="font-mono text-[11px] font-bold text-stone-500 uppercase tracking-wider block">
                  03 · NBFCs &amp; Financial Services
                </span>
                <h3 className="font-serif font-normal text-base sm:text-xl text-slate-950">
                  Capital adequacy &amp; credit liquidity monitoring
                </h3>
                <p className="font-sans text-[11px] leading-tight text-slate-600 sm:text-sm sm:leading-relaxed sm:text-slate-700">
                  Assessing capital adequacy standards, credit liquidity buffers, asset-liability matching, and statutory regulatory compliance.
                </p>
              </div>

              {/* Sector 04: Real Estate */}
              <div className="space-y-1.5 sm:space-y-2 border-l-2 border-stone-300 pl-4">
                <span className="font-mono text-[11px] font-bold text-stone-500 uppercase tracking-wider block">
                  04 · Real Estate
                </span>
                <h3 className="font-serif font-normal text-base sm:text-xl text-slate-950">
                  Property milestone cash flow &amp; project accounting
                </h3>
                <p className="font-sans text-[11px] leading-tight text-slate-600 sm:text-sm sm:leading-relaxed sm:text-slate-700">
                  Managing project-level milestone cash flows, subcontractor commitments, land aggregation capital exposure, and project accounting.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* MOVEMENT 04 — FINANCIAL DECISION COMMONALITIES */}
      <section className="py-10 sm:py-12 border-b border-stone-200/80">
        <Container>
          <div className="max-w-4xl space-y-6">
            <div className="space-y-2">
              <span className="font-mono text-xs font-bold text-stone-500 uppercase tracking-wider block">
                03 · Cross-Sector Decision Patterns
              </span>
              <h2 className="font-serif font-normal text-2xl sm:text-3xl text-slate-950 leading-snug">
                Financial decision patterns shared across commercial sectors.
              </h2>
              <p className="font-sans text-slate-700 text-sm sm:text-base leading-relaxed max-w-3xl">
                While operating realities differ by industry, core management decisions share underlying financial logic across three key decision phases.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2 font-sans text-xs sm:text-sm">
              <div className="space-y-2 border-l-2 border-amber-800/80 pl-4">
                <span className="font-mono text-[11px] font-bold text-amber-800 uppercase tracking-wider block">
                  Phase 01 · Pre-Commitment
                </span>
                <h3 className="font-serif font-normal text-lg text-slate-950">
                  Capital Exposure Evaluation
                </h3>
                <p className="text-slate-700 text-xs leading-relaxed">
                  Evaluating total capital exposure, break-even baselines, and downside sensitivity before major investments or expansions are finalized.
                </p>
              </div>

              <div className="space-y-2 border-l-2 border-stone-300 pl-4">
                <span className="font-mono text-[11px] font-bold text-stone-500 uppercase tracking-wider block">
                  Phase 02 · Operational Growth
                </span>
                <h3 className="font-serif font-normal text-lg text-slate-950">
                  Financial Visibility &amp; Control
                </h3>
                <p className="text-slate-700 text-xs leading-relaxed">
                  Establishing monthly MIS reporting, cash-flow forecasting, and working capital buffers to maintain operational control during expansion.
                </p>
              </div>

              <div className="space-y-2 border-l-2 border-stone-300 pl-4">
                <span className="font-mono text-[11px] font-bold text-stone-500 uppercase tracking-wider block">
                  Phase 03 · Governance
                </span>
                <h3 className="font-serif font-normal text-lg text-slate-950">
                  Independent Assurance &amp; Compliance
                </h3>
                <p className="text-slate-700 text-xs leading-relaxed">
                  Maintaining audit reliability, internal control discipline, and statutory tax compliance to protect stakeholder confidence.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* MOVEMENT 05 — CONNECTED ADVISORY & INSIGHT NODES */}
      <section className="py-10 sm:py-12 border-b border-stone-200/80">
        <Container>
          <div className="max-w-4xl space-y-6">
            <div className="space-y-2">
              <span className="font-mono text-xs font-bold text-stone-500 uppercase tracking-wider block">
                04 · Connected Practice Nodes
              </span>
              <h2 className="font-serif font-normal text-2xl sm:text-3xl text-slate-950 leading-snug">
                Connected practice insights &amp; advisory capabilities.
              </h2>
              <p className="font-sans text-slate-700 text-sm sm:text-base leading-relaxed max-w-3xl">
                Explore MR&amp;A&apos;s decision publications and advisory frameworks for structured evaluation of business decisions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 font-sans text-xs sm:text-sm">
              <div className="space-y-2 border-l-2 border-stone-300 pl-4">
                <span className="font-sans text-[11px] font-bold uppercase tracking-wider text-amber-800 block">
                  Flagship Decision Insight
                </span>
                <h3 className="font-serif font-medium text-base text-slate-950">
                  Healthcare Expansion Decision Publication
                </h3>
                <p className="text-slate-700 text-xs leading-relaxed mb-2">
                  Read MR&amp;A&apos;s published decision evaluation framework: &ldquo;Before Opening Another Clinic: What Should the Numbers Tell You?&rdquo;
                </p>
                <Link
                  href="/insights/before-opening-another-clinic-what-the-numbers-tell-you"
                  className="inline-block font-semibold text-xs text-slate-950 hover:text-amber-800 underline decoration-slate-400 hover:decoration-amber-800 transition-colors focus-visible:outline-2 focus-visible:outline-amber-700 rounded-sm"
                >
                  Read Flagship Healthcare Insight →
                </Link>
              </div>

              <div className="space-y-2 border-l-2 border-stone-300 pl-4">
                <span className="font-sans text-[11px] font-bold uppercase tracking-wider text-amber-800 block">
                  Strategic Decision Advisory
                </span>
                <h3 className="font-serif font-medium text-base text-slate-950">
                  Business Advisory Capability
                </h3>
                <p className="text-slate-700 text-xs leading-relaxed mb-2">
                  Financial decision structuring and advisory for growing commercial enterprises evaluating expansion, CapEx, or restructuring.
                </p>
                <Link
                  href="/services/business-advisory"
                  className="inline-block font-semibold text-xs text-slate-950 hover:text-amber-800 underline decoration-slate-400 hover:decoration-amber-800 transition-colors focus-visible:outline-2 focus-visible:outline-amber-700 rounded-sm"
                >
                  Explore Business Advisory Capability →
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* MOVEMENT 06 — UNIFIED CONSULTATION CTA */}
      <ConsultationCTA id="industries-consultation-cta" />
    </div>
  );
}
