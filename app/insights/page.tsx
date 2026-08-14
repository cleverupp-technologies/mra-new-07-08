import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import HeroNav from "@/components/sections/Section01Hero/HeroNav";
import Footer from "@/components/sections/Section12Footer/Section12Footer";
import ConsultationCTA from "@/components/consultation/ConsultationCTA";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { ChevronRight, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Manesh Rineesh & Associates | Insights & Briefings",
  description:
    "Perspectives, evidence streams, verified client experiences, statutory updates, and strategic briefings for business leaders.",
  alternates: {
    canonical: "https://maneshrineesh.com/insights",
  },
  openGraph: {
    title: "Manesh Rineesh & Associates | Insights & Briefings",
    description:
      "Perspectives, evidence streams, verified client experiences, statutory updates, and strategic briefings for business leaders.",
    url: "https://maneshrineesh.com/insights",
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
    title: "Manesh Rineesh & Associates | Insights & Briefings",
    description:
      "Perspectives, evidence streams, verified client experiences, statutory updates, and strategic briefings for business leaders.",
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
  ],
};

export default function InsightsPage() {
  const articles = [
    {
      slug: "client-experiences",
      category: "EVIDENCE STREAM",
      title: "Verified Client Engagement Experiences",
      description:
        "Anonymous accounts of verified business situations, working capital diagnostics, restructuring, and commercial outcomes.",
      date: "August 2026",
      readTime: "5 min read",
      link: "/insights/client-experiences",
    },
    {
      slug: "industry-updates",
      category: "REGULATORY ALERTS",
      title: "Statutory & Industry Regulatory Updates",
      description:
        "Timely statutory notifications, Income Tax developments, GST rate rationalization, and ROC compliance updates.",
      date: "August 2026",
      readTime: "4 min read",
      link: "/insights/industry-updates",
    },
    {
      slug: "cfo-perspective-working-capital",
      category: "CFO PERSPECTIVE",
      title: "Managing Cash Flow Liquidity in Rapid Expansion Cycles",
      description:
        "Strategic principles for growth-stage businesses balancing inventory build-ups, vendor credit cycles, and bank credit facilities.",
      date: "July 2026",
      readTime: "6 min read",
      link: "/insights/client-experiences",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAF8F1] text-[#111827] font-sans selection:bg-[#F4B942] selection:text-[#111827]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
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
            <span className="text-[#F4B942] font-bold">Insights</span>
          </div>

          <SectionBadge align="left" as="span">PERSPECTIVES &amp; EVIDENCE</SectionBadge>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#111827] leading-[1.1] tracking-tight">
            Insights &amp; Industry Briefings
          </h1>

          <p className="text-base sm:text-lg text-[#111827]/85 font-sans leading-relaxed max-w-2xl pt-2">
            Evidence streams, verified engagement cases, statutory updates, and strategic financial analysis for corporate leaders.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-[#FFD978]/25 border-t border-b border-[#FFD978] px-6 lg:px-12">
        <div className="max-w-[1240px] mx-auto space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((art, idx) => (
              <Link
                key={idx}
                href={art.link}
                className="p-8 rounded-2xl bg-[#FAF8F1] border border-[#FFD978] hover:border-[#F4B942] hover:bg-[#FFD978]/30 transition-all duration-300 flex flex-col justify-between space-y-6 group cursor-pointer shadow-sm"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-[#F4B942] font-bold tracking-wider uppercase">
                      {art.category}
                    </span>
                    <span className="text-xs font-mono text-[#111827]/60 font-semibold">{art.date}</span>
                  </div>

                  <h3 className="text-2xl font-serif font-bold text-[#111827] group-hover:text-[#F4B942] transition-colors">
                    {art.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#111827]/80 leading-relaxed font-sans">
                    {art.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#FFD978] flex items-center justify-between text-xs font-bold text-[#F4B942]">
                  <span>Read Full Article</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ConsultationCTA id="consultation" />
      <Footer />
    </div>
  );
}
