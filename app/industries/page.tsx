import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { SectionBadge } from "@/components/ui/SectionBadge";
import HeroNav from "@/components/sections/Section01Hero/HeroNav";
import Section12Footer from "@/components/sections/Section12Footer/Section12Footer";
import { ConsultationCTA } from "@/components/consultation/ConsultationCTA";
import { getAllPublishedIndustries } from "@/content/v2/repository";
import {
  Stethoscope,
  Factory,
  Building,
  ShoppingBag,
  Landmark,
  GraduationCap,
  Scissors,
  Microscope,
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Clock,
  Coins,
  Building2,
  BookOpen,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Manesh Rineesh & Associates | Industry Sectors",
  description:
    "Decision-led Chartered Accountancy advisory across Healthcare, Manufacturing, Real Estate, Retail, NBFCs, Education, Textiles, and Pharma in Kerala.",
  alternates: {
    canonical: "https://maneshrineesh.com/industries",
  },
  openGraph: {
    title: "Manesh Rineesh & Associates | Industry Sectors",
    description:
      "Decision-led Chartered Accountancy advisory across Healthcare, Manufacturing, Real Estate, Retail, NBFCs, Education, Textiles, and Pharma in Kerala.",
    url: "https://maneshrineesh.com/industries",
    type: "website",
    images: [
      {
        url: "/images/section-02-team.jpg",
        width: 1200,
        height: 630,
        alt: "Manesh Rineesh & Associates Chartered Accountants Firm Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Manesh Rineesh & Associates | Industry Sectors",
    description:
      "Decision-led Chartered Accountancy advisory across Healthcare, Manufacturing, Real Estate, Retail, NBFCs, Education, Textiles, and Pharma in Kerala.",
    images: ["/images/section-02-team.jpg"],
  },
};

function getIndustryIcon(slug: string) {
  switch (slug.toLowerCase()) {
    case "healthcare":
    case "hospitals":
      return <Stethoscope className="w-6 h-6 text-[#F4B942]" />;
    case "manufacturers":
    case "manufacturing":
      return <Factory className="w-6 h-6 text-[#F4B942]" />;
    case "real-estate":
      return <Building className="w-6 h-6 text-[#F4B942]" />;
    case "retail-wholesalers":
    case "retail":
      return <ShoppingBag className="w-6 h-6 text-[#F4B942]" />;
    case "nbfcs":
    case "nbfc":
      return <Landmark className="w-6 h-6 text-[#F4B942]" />;
    case "education":
      return <GraduationCap className="w-6 h-6 text-[#F4B942]" />;
    case "textiles":
      return <Scissors className="w-6 h-6 text-[#F4B942]" />;
    case "pharma":
      return <Microscope className="w-6 h-6 text-[#F4B942]" />;
    default:
      return <Building className="w-6 h-6 text-[#F4B942]" />;
  }
}

export default function IndustriesOverviewPage() {
  const industries = getAllPublishedIndustries();

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://maneshrineesh.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Industries",
        item: "https://maneshrineesh.com/industries",
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[#FAF8F1] text-[#111827] font-sans selection:bg-[#F4B942] selection:text-[#111827]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* 1. PRIMARY NAVIGATION HEADER */}
      <HeroNav />

      {/* MOVEMENT 01 — SECTOR DISCOVERY OPENING */}
      <section className="relative pt-36 sm:pt-44 lg:pt-48 pb-16 lg:pb-24 border-b border-[#FFD978]/40 overflow-hidden text-left bg-[#FAF8F1]">
        <Container>
          <div className="max-w-4xl space-y-5">
            <nav aria-label="Breadcrumb" className="mb-2">
              <ol className="flex items-center space-x-2 text-xs font-mono tracking-wider text-[#111827]/70 uppercase">
                <li>
                  <Link href="/" className="hover:text-[#F4B942] transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <span className="text-[#111827]/40">/</span>
                </li>
                <li className="font-bold text-[#F4B942]" aria-current="page">
                  Industries
                </li>
              </ol>
            </nav>

            <SectionBadge align="left">SECTOR RECOGNITION · INDUSTRY PRACTICES</SectionBadge>

            <h1 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-[#111827] leading-[1.12] tracking-tight">
              Decision-Led Advisory Across Recognized Commercial Realities
            </h1>

            <p className="font-sans text-[#111827]/85 text-base sm:text-lg lg:text-xl leading-relaxed max-w-3xl font-normal">
              MR&amp;A categorizes financial decision-making by business sector, establishing recurring operating pressures, capital cycles, and commercial decisions before introducing advisory capabilities.
            </p>
          </div>
        </Container>
      </section>

      {/* MOVEMENT 02 — FLAGSHIP HEALTHCARE PRACTICE */}
      <section className="py-16 sm:py-20 border-b border-[#FFD978]/40 bg-white text-left">
        <Container>
          <div className="max-w-4xl space-y-6">
            <div className="space-y-2">
              <SectionBadge align="left" as="h2">01 · FLAGSHIP INDUSTRY PRACTICE</SectionBadge>
              <p className="font-serif font-bold text-2xl sm:text-3xl lg:text-4xl text-[#111827]">
                Hospitals &amp; Healthcare Enterprise
              </p>
              <p className="font-sans text-[#111827]/85 text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl">
                Growing a healthcare business creates financial decisions far beyond clinical care—balancing multi-location clinic expansion, equipment CapEx payback, doctor profit-sharing, and reimbursement cash flows.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pt-2">
              <div className="md:col-span-7 space-y-3 border-l-4 border-[#F4B942] pl-5 bg-[#FAF8F1] p-6 rounded-r-2xl border border-l-4 border-[#FFD978]/60 shadow-sm">
                <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#1F3A8A] block">
                  Level B+ Dedicated Practice
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#111827]">
                  Healthcare Practice Advisory
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#111827]/80 leading-relaxed">
                  Financial decision frameworks for growing healthcare organizations, medical clinics, and multi-location practices in South India. Evaluate clinic expansion payback, diagnostic equipment CapEx, and clinician payout models.
                </p>
                <div className="pt-2">
                  <Link
                    href="/industries/healthcare"
                    className="inline-flex items-center gap-2 font-sans font-bold text-sm text-[#1F3A8A] hover:text-[#F4B942] transition-colors"
                  >
                    <span>Explore Healthcare Practice →</span>
                  </Link>
                </div>
              </div>

              <div className="md:col-span-5 space-y-3 p-6 rounded-2xl bg-[#FAF8F1] border border-[#FFD978]/60 shadow-sm">
                <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#F4B942] block">
                  Healthcare Decision Realities
                </span>
                <ul className="space-y-2.5 text-xs font-sans text-[#111827]/85 leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="text-[#F4B942] font-bold">•</span>
                    <span>Clinic expansion payback &amp; ramp-up cash requirements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#F4B942] font-bold">•</span>
                    <span>Diagnostic equipment CapEx vs operating liquidity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#F4B942] font-bold">•</span>
                    <span>Clinical partner compensation &amp; profit distribution</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* MOVEMENT 03 — COMMERCIAL & OPERATIONAL SECTOR REALITIES */}
      <section className="py-16 sm:py-20 border-b border-[#FFD978]/40 bg-[#FAF8F1] text-left">
        <Container>
          <div className="max-w-4xl space-y-8">
            <div className="space-y-2">
              <SectionBadge align="left" as="h2">02 · SECONDARY SECTOR RECOGNITION</SectionBadge>
              <p className="font-serif font-bold text-2xl sm:text-3xl text-[#111827]">
                Recognized sector realities &amp; operating pressures.
              </p>
              <p className="font-sans text-[#111827]/85 text-sm sm:text-base leading-relaxed max-w-3xl">
                Commercial enterprises face distinct capital structures, inventory cycles, and working capital demands based on their operating model.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="p-6 rounded-2xl bg-white border border-[#FFD978] space-y-2 border-l-4 border-l-[#1F3A8A] shadow-sm">
                <span className="font-mono text-[11px] font-bold text-[#1F3A8A] uppercase tracking-wider block">
                  01 · Retail &amp; Wholesale
                </span>
                <h3 className="font-serif font-bold text-lg text-[#111827]">
                  Inventory turnover &amp; working capital lockup
                </h3>
                <p className="font-sans text-xs text-[#111827]/80 leading-relaxed">
                  Managing inventory holding cycles, supplier credit terms, multi-location working capital allocation, and operational margin preservation.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-[#FFD978] space-y-2 border-l-4 border-l-[#1F3A8A] shadow-sm">
                <span className="font-mono text-[11px] font-bold text-[#1F3A8A] uppercase tracking-wider block">
                  02 · Manufacturing &amp; Industrial
                </span>
                <h3 className="font-serif font-bold text-lg text-[#111827]">
                  Plant CapEx payback &amp; capacity utilization
                </h3>
                <p className="font-sans text-xs text-[#111827]/80 leading-relaxed">
                  Evaluating production facility CapEx payback, capacity utilization baselines, raw material cost variance, and production asset depreciation.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-[#FFD978] space-y-2 border-l-4 border-l-[#1F3A8A] shadow-sm">
                <span className="font-mono text-[11px] font-bold text-[#1F3A8A] uppercase tracking-wider block">
                  03 · NBFCs &amp; Financial Services
                </span>
                <h3 className="font-serif font-bold text-lg text-[#111827]">
                  Capital adequacy &amp; credit liquidity monitoring
                </h3>
                <p className="font-sans text-xs text-[#111827]/80 leading-relaxed">
                  Assessing capital adequacy standards, credit liquidity buffers, asset-liability matching, and statutory regulatory compliance.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-[#FFD978] space-y-2 border-l-4 border-l-[#1F3A8A] shadow-sm">
                <span className="font-mono text-[11px] font-bold text-[#1F3A8A] uppercase tracking-wider block">
                  04 · Real Estate
                </span>
                <h3 className="font-serif font-bold text-lg text-[#111827]">
                  Property milestone cash flow &amp; project accounting
                </h3>
                <p className="font-sans text-xs text-[#111827]/80 leading-relaxed">
                  Managing project-level milestone cash flows, subcontractor commitments, land aggregation capital exposure, and project accounting.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* MOVEMENT 04 — FINANCIAL DECISION COMMONALITIES */}
      <section className="py-16 sm:py-20 border-b border-[#FFD978]/40 bg-white text-left">
        <Container>
          <div className="max-w-4xl space-y-8">
            <div className="space-y-2">
              <SectionBadge align="left" as="h2">03 · CROSS-SECTOR DECISION PATTERNS</SectionBadge>
              <p className="font-serif font-bold text-2xl sm:text-3xl text-[#111827]">
                Financial decision patterns shared across commercial sectors.
              </p>
              <p className="font-sans text-[#111827]/85 text-sm sm:text-base leading-relaxed max-w-3xl">
                While operating realities differ by industry, core management decisions share underlying financial logic across three key decision phases.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2 font-sans text-xs sm:text-sm">
              <div className="p-5 rounded-2xl bg-[#FAF8F1] border border-[#FFD978] space-y-2 border-l-4 border-l-[#F4B942]">
                <span className="font-mono text-[11px] font-bold text-[#F4B942] uppercase tracking-wider block">
                  Phase 01 · Pre-Commitment
                </span>
                <h3 className="font-serif font-bold text-lg text-[#111827]">
                  Capital Exposure Evaluation
                </h3>
                <p className="text-[#111827]/80 text-xs leading-relaxed">
                  Evaluating total capital exposure, break-even baselines, and downside sensitivity before major investments or expansions are finalized.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#FAF8F1] border border-[#FFD978] space-y-2 border-l-4 border-l-[#1F3A8A]">
                <span className="font-mono text-[11px] font-bold text-[#1F3A8A] uppercase tracking-wider block">
                  Phase 02 · Operational Growth
                </span>
                <h3 className="font-serif font-bold text-lg text-[#111827]">
                  Financial Visibility &amp; Control
                </h3>
                <p className="text-[#111827]/80 text-xs leading-relaxed">
                  Establishing monthly MIS reporting, cash-flow forecasting, and working capital buffers to maintain operational control during expansion.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#FAF8F1] border border-[#FFD978] space-y-2 border-l-4 border-l-[#1F3A8A]">
                <span className="font-mono text-[11px] font-bold text-[#1F3A8A] uppercase tracking-wider block">
                  Phase 03 · Governance
                </span>
                <h3 className="font-serif font-bold text-lg text-[#111827]">
                  Independent Assurance &amp; Compliance
                </h3>
                <p className="text-[#111827]/80 text-xs leading-relaxed">
                  Maintaining audit reliability, internal control discipline, and statutory tax compliance to protect stakeholder confidence.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* MOVEMENT 05 — CONNECTED ADVISORY & INSIGHT NODES */}
      <section className="py-16 sm:py-20 border-b border-[#FFD978]/40 bg-[#FAF8F1] text-left">
        <Container>
          <div className="max-w-4xl space-y-8">
            <div className="space-y-2">
              <SectionBadge align="left" as="h2">04 · CONNECTED PRACTICE NODES</SectionBadge>
              <p className="font-serif font-bold text-2xl sm:text-3xl text-[#111827]">
                Connected practice insights &amp; advisory capabilities.
              </p>
              <p className="font-sans text-[#111827]/85 text-sm sm:text-base leading-relaxed max-w-3xl">
                Explore MR&amp;A&apos;s decision publications and advisory frameworks for structured evaluation of business decisions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans text-xs sm:text-sm">
              <div className="p-6 rounded-2xl bg-white border border-[#FFD978] space-y-3 shadow-sm">
                <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#F4B942] block">
                  Flagship Decision Insight
                </span>
                <h3 className="font-serif font-bold text-lg text-[#111827]">
                  Healthcare Expansion Decision Publication
                </h3>
                <p className="text-[#111827]/80 text-xs leading-relaxed">
                  Read MR&amp;A&apos;s published decision evaluation framework: &ldquo;Before Opening Another Clinic: What Should the Numbers Tell You?&rdquo;
                </p>
                <Link
                  href="/insights/before-opening-another-clinic-what-the-numbers-tell-you"
                  className="inline-flex items-center gap-1.5 font-bold text-xs text-[#1F3A8A] hover:text-[#F4B942] transition-colors pt-1"
                >
                  <span>Read Flagship Healthcare Insight</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-[#FFD978] space-y-3 shadow-sm">
                <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#F4B942] block">
                  Strategic Decision Advisory
                </span>
                <h3 className="font-serif font-bold text-lg text-[#111827]">
                  Business Advisory Capability
                </h3>
                <p className="text-[#111827]/80 text-xs leading-relaxed">
                  Financial decision structuring and advisory for growing commercial enterprises evaluating expansion, CapEx, or restructuring.
                </p>
                <Link
                  href="/services/business-advisory"
                  className="inline-flex items-center gap-1.5 font-bold text-xs text-[#1F3A8A] hover:text-[#F4B942] transition-colors pt-1"
                >
                  <span>Explore Business Advisory Capability</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* MOVEMENT 06 — ALL PRACTICE SECTORS GRID */}
      <section className="py-16 sm:py-24 border-b border-[#FFD978]/40 text-left bg-[#FFD978]/15">
        <Container>
          <div className="max-w-4xl space-y-8">
            <div className="space-y-2">
              <SectionBadge align="left" as="h2">ALL PRACTICE SECTORS</SectionBadge>
              <p className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#111827]">
                Sectors We Understand &amp; Serve
              </p>
              <p className="font-sans text-[#111827]/85 text-sm sm:text-base">
                Click any industry practice sector to explore commercial decision contexts, operating realities, and relevant advisory services.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((ind) => {
                const icon = getIndustryIcon(ind.slug);
                return (
                  <Link
                    key={ind.id}
                    href={`/industries/${ind.slug}`}
                    className="group p-6 rounded-2xl bg-white border border-[#FFD978] flex flex-col justify-between space-y-4 hover:border-[#F4B942] hover:shadow-md transition-all text-left cursor-pointer"
                  >
                    <div className="space-y-3">
                      <div className="w-12 h-12 rounded-xl bg-[#FAF8F1] border border-[#FFD978]/60 flex items-center justify-center group-hover:bg-[#FFD978]/30 transition-colors">
                        {icon}
                      </div>
                      <h3 className="font-serif font-bold text-xl text-[#111827] group-hover:text-[#1F3A8A] transition-colors">
                        {ind.name}
                      </h3>
                      <p className="font-sans text-xs text-[#111827]/75 leading-relaxed">
                        {ind.shortInsight}
                      </p>
                    </div>

                    <div className="pt-2 flex items-center gap-1.5 text-xs font-bold text-[#1F3A8A] group-hover:text-[#F4B942] transition-colors">
                      <span>View Sector Practice</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* MOVEMENT 07 — INSTITUTIONAL CONSULTATION CTA */}
      <ConsultationCTA id="consultation" />

      {/* 8. FOOTER */}
      <Section12Footer />
    </main>
  );
}
