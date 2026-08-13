import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import HeroNav from "@/components/sections/Section01Hero/HeroNav";
import Footer from "@/components/sections/Section12Footer/Section12Footer";
import ConsultationCTA from "@/components/consultation/ConsultationCTA";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { SERVICES_DATABASE, ServiceData } from "@/lib/data/servicesData";
import {
  Building2,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  Award,
} from "lucide-react";

interface ServiceDetailProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return Object.keys(SERVICES_DATABASE).map((slug) => ({
    slug,
  }));
}

export default function ServiceDetailPage({ params }: ServiceDetailProps) {
  const service = SERVICES_DATABASE[params.slug];

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#FAF8F1] text-[#111827] font-sans selection:bg-[#F4B942] selection:text-[#111827]">
      {/* GLOBAL HEADER NAV */}
      <HeroNav />

      {/* ── SECTION 1: EDITORIAL HERO ─────────────────────────────────────── */}
      <section className="relative pt-36 sm:pt-44 lg:pt-48 pb-20 lg:pb-28 px-6 lg:px-12 max-w-[1400px] mx-auto overflow-hidden">
        {/* Background Ambient Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-[radial-gradient(ellipse_at_center,rgba(56, 82, 180,0.12),transparent_70%)] pointer-events-none z-0" />

        <div className="relative z-10 max-w-4xl text-left space-y-6">
          {/* Breadcrumb Context */}
          <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-[#111827]/70 uppercase">
            <Link href="/" className="hover:text-[#F4B942] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#F4B942]" />
            <Link href="/services" className="hover:text-[#F4B942] transition-colors">
              Services
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#F4B942]" />
            <span className="text-[#F4B942] font-bold">{service.title}</span>
          </div>

          {/* Gold/Orange Eyebrow Kicker */}
          <SectionBadge align="left">{service.eyebrow}</SectionBadge>

          {/* Editorial Title & Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#111827] leading-[1.1] tracking-tight">
            {service.headline}
          </h1>

          {/* Supporting Paragraph */}
          <p className="text-base sm:text-lg text-[#111827]/85 font-sans leading-relaxed max-w-2xl pt-2">
            {service.description}
          </p>

          {/* Primary Action Button */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            <a
              href="#consultation"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#1F3A8A] hover:bg-[#F4B942] text-[#FAF8F1] font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-xl cursor-pointer group"
            >
              <span>Discuss With Us</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-full border border-[#111827]/25 hover:border-[#111827] hover:bg-[#FFD978]/30 text-[#111827] font-semibold text-xs uppercase tracking-widest transition-all duration-300"
            >
              <span>View All Services</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: THE BUSINESS PROBLEM ─────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#FFD978]/25 border-t border-b border-[#FFD978] px-6 lg:px-12">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Header */}
            <div className="lg:col-span-5 space-y-4">
              <SectionBadge align="left">BUSINESS CONTEXT &amp; CHALLENGE</SectionBadge>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#111827] leading-tight">
                {service.problemTitle}
              </h2>
              <p className="text-sm sm:text-base text-[#111827]/85 leading-relaxed font-sans pt-2">
                {service.problemDescription}
              </p>
            </div>

            {/* Right Pain Points Checklist */}
            <div className="lg:col-span-7 bg-[#FAF8F1] border border-[#FFD978] rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm">
              <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-[#F4B942] mb-4">
                COMMON RISKS &amp; BOTTLENECKS
              </h3>
              <div className="space-y-4">
                {service.problemPoints.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3.5">
                    <span className="w-5 h-5 rounded-full bg-[#F4B942]/15 border border-[#F4B942]/40 flex items-center justify-center text-[#F4B942] text-xs font-bold shrink-0 mt-0.5">
                      ✕
                    </span>
                    <p className="text-sm sm:text-base text-[#111827]/90 leading-relaxed font-sans">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: WHAT WE DELIVER (DELIVERABLES GRID) ──────────────── */}
      <section className="py-20 lg:py-28 px-6 lg:px-12 max-w-[1240px] mx-auto">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <SectionBadge align="center">PRACTICE DELIVERABLES</SectionBadge>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#111827]">
            What We Deliver in {service.title}
          </h2>
          <p className="text-sm sm:text-base text-[#111827]/80 font-sans leading-relaxed">
            Structured engagement frameworks designed to maintain compliance, mitigate risk, and drive outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {service.deliverables.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl bg-[#FAF8F1] border border-[#FFD978] hover:border-[#F4B942] hover:bg-[#FFD978]/20 transition-all duration-300 flex flex-col justify-between space-y-4 group shadow-sm"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#FFD978]/40 border border-[#F4B942]/30 flex items-center justify-center text-[#F4B942] font-mono text-sm font-bold">
                  0{idx + 1}
                </div>
                <h3 className="text-lg font-serif font-bold text-[#111827] group-hover:text-[#F4B942] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#111827]/80 leading-relaxed font-sans">
                  {item.desc}
                </p>
              </div>
              <div className="pt-2 flex items-center gap-2 text-xs font-bold text-[#F4B942]">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified Deliverable</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SECTION 4: HOW WE WORK (4-STEP PROCESS) ──────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#FFD978]/25 border-t border-b border-[#FFD978] px-6 lg:px-12">
        <div className="max-w-[1240px] mx-auto space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#FFD978]">
            <div>
              <SectionBadge align="left">OUR METHODOLOGY</SectionBadge>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#111827]">
                How We Engage
              </h2>
            </div>
            <p className="text-sm text-[#111827]/80 font-sans max-w-md">
              A structured 4-phase methodology ensuring smooth implementation and ongoing continuous advisory support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.processSteps.map((st, idx) => (
              <div key={idx} className="space-y-4 relative p-6 rounded-xl bg-[#FAF8F1] border border-[#FFD978] shadow-sm">
                <span className="text-4xl lg:text-5xl font-serif font-bold text-[#F4B942] block">
                  {st.step}
                </span>
                <h3 className="text-xl font-serif font-bold text-[#111827]">
                  {st.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#111827]/80 leading-relaxed font-sans">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 5: WHO IT IS FOR ─────────────────────────────────────── */}
      <section className="py-20 lg:py-28 px-6 lg:px-12 max-w-[1240px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-4">
            <SectionBadge align="left">TARGET SECTORS &amp; ENTITIES</SectionBadge>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#111827]">
              Who This Service Is For
            </h2>
            <p className="text-sm sm:text-base text-[#111827]/80 leading-relaxed font-sans">
              Tailored for enterprises seeking clear commercial governance, compliance discipline, and financial clarity.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {service.whoItIsFor.map((sec, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[#FAF8F1] border border-[#FFD978] flex items-center gap-3 shadow-sm hover:border-[#F4B942] transition-all"
              >
                <Building2 className="w-4 h-4 text-[#F4B942] shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-[#111827]">
                  {sec}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 6: WHY MANESH RINEESH & ASSOCIATES ──────────────────── */}
      <section className="py-20 lg:py-28 bg-[#FFD978]/25 border-t border-b border-[#FFD978] px-6 lg:px-12">
        <div className="max-w-[1240px] mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <SectionBadge align="center">THE FIRM DIFFERENCE</SectionBadge>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#111827]">
              Why Manesh Rineesh &amp; Associates
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.whyUsPoints.map((pt, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-[#FAF8F1] border border-[#FFD978] space-y-3 shadow-sm"
              >
                <Award className="w-6 h-6 text-[#F4B942]" />
                <h3 className="text-xl font-serif font-bold text-[#111827]">
                  {pt.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#111827]/80 leading-relaxed font-sans">
                  {pt.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 7: FINAL CONSULTATION CTA ───────────────────────────── */}
      <ConsultationCTA
        id="consultation"
        initialTopicId={service.slug}
      />

      {/* GLOBAL FOOTER */}
      <Footer />
    </div>
  );
}
