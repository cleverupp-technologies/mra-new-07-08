import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import HeroNav from "@/components/sections/Section01Hero/HeroNav";
import Footer from "@/components/sections/Section12Footer/Section12Footer";
import ConsultationCTA from "@/components/consultation/ConsultationCTA";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Manesh Rineesh & Associates | Regulatory Updates",
  description:
    "Statutory updates, Income Tax notifications, GST compliance changes, and ROC filing deadlines for corporate entities.",
  alternates: {
    canonical: "https://maneshrineesh.com/insights/industry-updates",
  },
  openGraph: {
    title: "Manesh Rineesh & Associates | Regulatory Updates",
    description:
      "Statutory updates, Income Tax notifications, GST compliance changes, and ROC filing deadlines for corporate entities.",
    url: "https://maneshrineesh.com/insights/industry-updates",
    type: "article",
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
    title: "Manesh Rineesh & Associates | Regulatory Updates",
    description:
      "Statutory updates, Income Tax notifications, GST compliance changes, and ROC filing deadlines for corporate entities.",
    images: ["/images/section-02-team.jpg"],
  },
};

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
      name: "Insights",
      item: "https://maneshrineesh.com/insights",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Industry Updates",
      item: "https://maneshrineesh.com/insights/industry-updates",
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Industry Updates & Statutory Briefings",
  "description": "Timely notifications, statutory filing changes, and tax framework updates for corporate management.",
  "author": { "@id": "https://maneshrineesh.com/#organization" },
  "publisher": { "@id": "https://maneshrineesh.com/#organization" },
  "mainEntityOfPage": "https://maneshrineesh.com/insights/industry-updates"
};

export default function IndustryUpdatesPage() {
  const updates = [
    {
      category: "INCOME TAX ADVISORY",
      title: "Automated AIS & TIS Reconciliation Protocols for FY 2025-26",
      summary:
        "The Income Tax Department has enhanced automated data cross-matching between high-value financial transactions and filed ITRs. Review key reconciliation steps before response deadlines.",
      date: "August 2026",
    },
    {
      category: "GST & INDIRECT TAX",
      title: "GSTR-2B Input Tax Credit Matching & Invoice Timelines",
      summary:
        "Strict enforcement of GSTR-2B reflection criteria requires businesses to establish automated monthly vendor reconciliation workflows to prevent credit blockage.",
      date: "July 2026",
    },
    {
      category: "CORPORATE SECRETARIAL",
      title: "MCA V3 Portal Annual Filing Guidelines (AOC-4 & MGT-7)",
      summary:
        "Key secretarial guidelines for corporate entities preparing statutory annual return filings, director disclosures, and board resolutions.",
      date: "July 2026",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAF8F1] text-[#111827] font-sans selection:bg-[#F4B942] selection:text-[#111827]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
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
            <span className="text-[#F4B942] font-bold">Industry Updates</span>
          </div>

          <SectionBadge align="left" as="span">REGULATORY ALERTS</SectionBadge>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#111827] leading-[1.1] tracking-tight">
            Industry Updates &amp; Statutory Briefings
          </h1>

          <p className="text-base sm:text-lg text-[#111827]/85 font-sans leading-relaxed max-w-2xl pt-2">
            Timely notifications, statutory filing changes, and tax framework updates for corporate management.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-[#FFD978]/25 border-t border-b border-[#FFD978] px-6 lg:px-12">
        <div className="max-w-[1240px] mx-auto space-y-8">
          {updates.map((upd, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-[#FAF8F1] border border-[#FFD978] space-y-4 hover:border-[#F4B942] transition-all shadow-sm"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-[#F4B942] font-bold tracking-widest uppercase">
                  {upd.category}
                </span>
                <span className="text-xs font-mono text-[#111827]/60 font-semibold">{upd.date}</span>
              </div>

              <h3 className="text-2xl font-serif font-bold text-[#111827]">
                {upd.title}
              </h3>

              <p className="text-sm sm:text-base text-[#111827]/85 leading-relaxed font-sans max-w-3xl">
                {upd.summary}
              </p>
            </div>
          ))}
        </div>
      </section>

      <ConsultationCTA id="consultation" />
      <Footer />
    </div>
  );
}
