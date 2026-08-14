"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Linkedin, Instagram, Facebook } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionBadge } from "@/components/ui/SectionBadge";

export const founders = [
  {
    id: "manesh",
    name: "CA. Manesh Kumar Kuttampoyil",
    designation: "Managing Partner",
    qualification: "FCA",
    photo: "/images/founders/ca-manesh.jpg",
    objectPosition: "center 28%",
    bio: "Manesh leads strategic advisory and taxation at MR&A, bringing over a decade of experience helping businesses navigate complex financial decisions. His approach begins with understanding the commercial context before any recommendation is made — combining technical depth in direct taxation and audit with the commercial thinking that business owners need when capital is being committed.",
    focus: ["Strategic Advisory", "Direct Taxation", "Audit & Assurance"],
    linkedin: "https://www.linkedin.com/in/manesh-kumar-24015b83/",
    instagram: "https://www.instagram.com/ca_manesh/",
    facebook: "https://facebook.com/maneshrineesh",
    delay: 0,
  },
  {
    id: "rineesh",
    name: "CA. Rineesh Kumar C.K.",
    designation: "Partner",
    qualification: "FCA, DISA (ICAI)",
    photo: "/images/founders/ca-rineesh.jpg",
    objectPosition: "48% 44%",
    bio: "Rineesh oversees business advisory, compliance, and long-term client engagement at MR&A. He works closely with management teams to build governance frameworks, structure GST and indirect tax positions, and ensure that compliance obligations are never disconnected from the broader financial strategy of the business.",
    focus: ["Business Advisory", "Indirect Taxation", "Governance & Compliance"],
    linkedin: "https://www.linkedin.com/in/ca-rineesh-kumar-6aa86a38/",
    instagram: "https://www.instagram.com/carineesh/",
    facebook: "https://facebook.com/maneshrineesh",
    delay: 180,
  },
];

/* ─── Founder Card ───────────────────────────────────────────────────────── */
function FounderCard({
  founder,
  inView,
}: {
  founder: (typeof founders)[number];
  inView: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative bg-[#FAF8F1] flex flex-col overflow-hidden text-left shadow-sm"
      style={{
        borderRadius: "28px",
        border: hovered
          ? "1.5px solid #F4B942"
          : "1.5px solid rgba(255, 217, 120, 0.6)",
        transform: inView
          ? hovered
            ? "translateY(-6px)"
            : "translateY(0)"
          : "translateY(32px)",
        opacity: inView ? 1 : 0,
        transition: `opacity 700ms cubic-bezier(0.22,1,0.36,1) ${founder.delay}ms, transform 700ms cubic-bezier(0.22,1,0.36,1) ${founder.delay}ms, border-color 400ms ease`,
      }}
    >
      {/* Portrait */}
      <div
        className="relative w-full overflow-hidden"
        style={{
          height: "340px",
          borderRadius: "28px 28px 0 0",
        }}
      >
        <Image
          src={founder.photo}
          alt={`${founder.name}, ${founder.designation} at Manesh Rineesh & Associates`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 ease-out"
          style={{
            objectPosition: founder.objectPosition,
            transform: hovered ? "scale(1.04)" : "scale(1)",
          }}
          priority
        />
        {/* Subtle warm gradient overlay at bottom of portrait */}
        <div
          className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, transparent, rgba(250, 248, 241, 0.95))",
          }}
          aria-hidden="true"
        />

        {/* Floating Social Profile Links Overlay */}
        <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
          {founder.linkedin && (
            <a
              href={founder.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${founder.name} LinkedIn Profile`}
              className="w-8 h-8 rounded-full bg-[#111827]/60 backdrop-blur-md border border-white/20 text-[#FAF8F1] flex items-center justify-center transition-all hover:bg-[#F4B942] hover:text-[#111827] hover:border-[#F4B942] hover:scale-105 active:scale-95 shadow-md cursor-pointer"
            >
              <Linkedin className="w-3.5 h-3.5" />
            </a>
          )}
          {founder.instagram && (
            <a
              href={founder.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${founder.name} Instagram Profile`}
              className="w-8 h-8 rounded-full bg-[#111827]/60 backdrop-blur-md border border-white/20 text-[#FAF8F1] flex items-center justify-center transition-all hover:bg-[#F4B942] hover:text-[#111827] hover:border-[#F4B942] hover:scale-105 active:scale-95 shadow-md cursor-pointer"
            >
              <Instagram className="w-3.5 h-3.5" />
            </a>
          )}
          {founder.facebook && (
            <a
              href={founder.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${founder.name} Facebook Profile`}
              className="w-8 h-8 rounded-full bg-[#111827]/60 backdrop-blur-md border border-white/20 text-[#FAF8F1] flex items-center justify-center transition-all hover:bg-[#F4B942] hover:text-[#111827] hover:border-[#F4B942] hover:scale-105 active:scale-95 shadow-md cursor-pointer"
            >
              <Facebook className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-8 lg:p-10 space-y-5">
        {/* Name + Designation */}
        <div
          className="space-y-1.5 transition-all duration-500"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(12px)",
            transitionDelay: `${founder.delay + 100}ms`,
            transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        >
          <h3
            className="font-serif font-bold text-[#111827] tracking-tight leading-tight"
            style={{ fontSize: "clamp(1.7rem, 2.4vw, 2.1rem)" }}
          >
            {founder.name}
          </h3>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-mono text-[10.5px] font-bold text-[#F4B942] uppercase tracking-[0.18em]">
                {founder.designation}
              </span>
              <span className="w-px h-3 bg-[#111827]/20" aria-hidden="true" />
              <span className="font-mono text-[10px] text-[#111827]/60 uppercase tracking-[0.14em]">
                {founder.qualification}
              </span>
            </div>

            {/* In-Card Social Buttons */}
            <div className="flex items-center gap-2">
              {founder.linkedin && (
                <a
                  href={founder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${founder.name} LinkedIn Profile`}
                  className="w-7 h-7 rounded-full bg-[#111827]/[0.05] border border-[#FFD978]/40 text-[#111827]/80 flex items-center justify-center transition-all hover:bg-[#1F3A8A] hover:text-[#FAF8F1] hover:border-[#1F3A8A] active:scale-95 cursor-pointer"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                </a>
              )}
              {founder.instagram && (
                <a
                  href={founder.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${founder.name} Instagram Profile`}
                  className="w-7 h-7 rounded-full bg-[#111827]/[0.05] border border-[#FFD978]/40 text-[#111827]/80 flex items-center justify-center transition-all hover:bg-[#1F3A8A] hover:text-[#FAF8F1] hover:border-[#1F3A8A] active:scale-95 cursor-pointer"
                >
                  <Instagram className="w-3.5 h-3.5" />
                </a>
              )}
              {founder.facebook && (
                <a
                  href={founder.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${founder.name} Facebook Profile`}
                  className="w-7 h-7 rounded-full bg-[#111827]/[0.05] border border-[#FFD978]/40 text-[#111827]/80 flex items-center justify-center transition-all hover:bg-[#1F3A8A] hover:text-[#FAF8F1] hover:border-[#1F3A8A] active:scale-95 cursor-pointer"
                >
                  <Facebook className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Thin accent line */}
        <div
          className="h-px w-8 transition-all duration-500"
          style={{ background: hovered ? "#F4B942" : "rgba(244, 185, 66, 0.4)" }}
          aria-hidden="true"
        />

        {/* Bio */}
        <p
          className="font-sans text-[#111827]/82 text-sm sm:text-[15px] leading-[1.8] flex-1 transition-all duration-500"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(8px)",
            transitionDelay: `${founder.delay + 300}ms`,
            transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        >
          {founder.bio}
        </p>

        {/* Focus areas - Outlined Pills */}
        <div className="flex flex-wrap gap-2 pt-2">
          {founder.focus.map((f) => (
            <span
              key={f}
              className="font-mono text-[9.5px] font-bold uppercase tracking-[0.14em] text-[#3157C7] border border-[#3157C7]/40 rounded-full px-3 py-1 bg-transparent transition-colors duration-300"
            >
              {f}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Section ────────────────────────────────────────────────────────────── */
export function LeadershipSection() {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      const t = setTimeout(() => setInView(true), 0);
      return () => clearTimeout(t);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id="leadership"
      aria-label="Leadership"
      className="py-24 sm:py-32 bg-[#FAF8F1] border-b border-[#FFD978]/40 font-sans text-left"
    >
      <Container>
        {/* ── Header ── */}
        <div
          className="text-center mb-16 lg:mb-20 transition-all duration-700"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(20px)",
            transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        >
          <SectionBadge align="center" as="h2">PRACTICE LEADERSHIP</SectionBadge>
          <p
            className="font-serif font-bold text-[#111827] leading-[1.1] tracking-tight mb-4 mt-1 text-center"
            style={{ fontSize: "clamp(2.1rem, 3.5vw, 3rem)" }}
          >
            Meet the Leadership Behind
            <br className="hidden sm:block" /> Better Business Decisions
          </p>

          {/* Gold Divider */}
          <div className="w-[60px] h-[3px] bg-[#F4B942] mt-4 mb-6 mx-auto" />

          <p className="font-sans text-[#111827]/82 text-base sm:text-lg leading-relaxed max-w-[620px] mx-auto text-center">
            Every engagement is guided by experienced Chartered Accountants who
            combine technical depth with commercial thinking, helping business
            owners make informed decisions with confidence.
          </p>
        </div>

        {/* ── Founder Cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12 max-w-[1050px] mx-auto">
          {founders.map((founder) => (
            <FounderCard key={founder.id} founder={founder} inView={inView} />
          ))}
        </div>

        {/* ── Credential Footnote ── */}
        <p
          className="text-left font-mono text-[10px] text-[#111827]/50 uppercase tracking-[0.18em] mt-12 transition-all duration-700"
          style={{
            opacity: inView ? 1 : 0,
            transitionDelay: "400ms",
          }}
        >
          Members of the Institute of Chartered Accountants of India
        </p>
      </Container>
    </section>
  );
}

export default LeadershipSection;
