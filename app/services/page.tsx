import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import HeroNav from "@/components/sections/Section01Hero/HeroNav";
import Footer from "@/components/sections/Section12Footer/Section12Footer";
import ConsultationCTA from "@/components/consultation/ConsultationCTA";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { SERVICES_DATABASE } from "@/lib/data/servicesData";
import {
  ArrowRight,
  ChevronRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Manesh Rineesh & Associates | Practice Capabilities",
  description:
    "Explore our core financial advisory capabilities: Virtual CFO, Audit & Assurance, Tax Planning, Corporate Advisory, ROC Filing, and Compliance.",
  alternates: {
    canonical: "https://maneshrineesh.com/services",
  },
  openGraph: {
    title: "Manesh Rineesh & Associates | Practice Capabilities",
    description:
      "Explore our core financial advisory capabilities: Virtual CFO, Audit & Assurance, Tax Planning, Corporate Advisory, ROC Filing, and Compliance.",
    url: "https://maneshrineesh.com/services",
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
    title: "Manesh Rineesh & Associates | Practice Capabilities",
    description:
      "Explore our core financial advisory capabilities: Virtual CFO, Audit & Assurance, Tax Planning, Corporate Advisory, ROC Filing, and Compliance.",
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
      name: "Services",
      item: "https://maneshrineesh.com/services",
    },
  ],
};

export default function ServicesOverviewPage() {
  const serviceList = Object.values(SERVICES_DATABASE).filter(
    (s, idx, self) => self.findIndex((item) => item.title === s.title) === idx
  );

  return (
    <div className="min-h-screen bg-[#FAF8F1] text-[#111827] font-sans selection:bg-[#F4B942] selection:text-[#111827]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* GLOBAL HEADER NAV */}
      <HeroNav />

      {/* ── HERO SECTION ─────────────────────────────────────────────────── */}
      <section className="relative pt-36 sm:pt-44 lg:pt-48 pb-20 lg:pb-28 px-6 lg:px-12 max-w-[1400px] mx-auto overflow-hidden">
        {/* Background Ambient Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-[radial-gradient(ellipse_at_center,rgba(56, 82, 180,0.12),transparent_70%)] pointer-events-none z-0" />

        <div className="relative z-10 max-w-4xl text-left space-y-6">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-[#111827]/70 uppercase">
            <Link href="/" className="hover:text-[#F4B942] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#F4B942]" />
            <span className="text-[#F4B942] font-bold">Services</span>
          </div>

          <SectionBadge align="left" as="span">PRACTICE CAPABILITIES</SectionBadge>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#111827] leading-[1.1] tracking-tight">
            Comprehensive Financial Advisory &amp; Compliance Services
          </h1>

          <p className="text-base sm:text-lg text-[#111827]/85 font-sans leading-relaxed max-w-2xl pt-2">
            Core financial advisory frameworks, Virtual CFO guidance, statutory audit, taxation, and corporate secretarial compliance for business leaders.
          </p>

          <div className="pt-4">
            <a
              href="#consultation"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#1F3A8A] hover:bg-[#F4B942] text-[#FAF8F1] font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-xl cursor-pointer group"
            >
              <span>Discuss Your Requirements</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ─────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#FFD978]/25 border-t border-b border-[#FFD978] px-6 lg:px-12">
        <div className="max-w-[1240px] mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <SectionBadge align="center" as="h2">FULL PRACTICE SPECTRUM</SectionBadge>
            <p className="text-3xl sm:text-4xl font-serif font-bold text-[#111827]">
              Our Practice Capabilities
            </p>
            <p className="text-sm sm:text-base text-[#111827]/80 font-sans leading-relaxed">
              Select a service area to explore detailed deliverables, methodology, and business impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceList.map((service, idx) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="p-8 rounded-2xl bg-[#FAF8F1] border border-[#FFD978] hover:border-[#F4B942] hover:bg-[#FFD978]/30 transition-all duration-300 flex flex-col justify-between space-y-6 group cursor-pointer shadow-sm"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-[#F4B942] font-bold">
                      0{idx + 1}
                    </span>
                    <span className="text-xs font-mono tracking-widest text-[#111827]/60 uppercase font-semibold">
                      {service.eyebrow}
                    </span>
                  </div>

                  <h3 className="text-2xl font-serif font-bold text-[#111827] group-hover:text-[#F4B942] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#111827]/80 leading-relaxed font-sans line-clamp-3">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#FFD978] flex items-center justify-between text-xs font-bold text-[#F4B942]">
                  <span>Explore Practice Details</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONSULTATION CTA ────────────────────────────────────────────── */}
      <ConsultationCTA id="consultation" />

      {/* GLOBAL FOOTER */}
      <Footer />
    </div>
  );
}
