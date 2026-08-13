"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { HeroOverlay } from "./HeroOverlay";

/**
 * AboutHero — Migrated Old About Page Hero Component
 *
 * Preserves the exact structure, visual design, typography, responsive composition,
 * cinematic image overlays, camera settle transition, and social navigation dock from the original website.
 */
export function AboutHero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 60);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-slate-950 text-slate-100 border-b border-slate-800">
      
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          MOBILE HERO COMPOSITION (< lg VIEWPORT): EDITORIAL (75vh)
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="lg:hidden relative min-h-[75vh] max-h-[760px] w-full flex flex-col justify-center px-6 sm:px-8 pt-32 sm:pt-36 pb-10 overflow-hidden">
        
        {/* Full Width Background Image with Shared Hero Overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/images/about-team-hero.jpg"
            alt="Manesh Rineesh & Associates professional team"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_35%]"
          />
          {/* Shared Cinematic Hero Overlay */}
          <HeroOverlay />
        </div>

        {/* Vertically Centered Content Block (Left Aligned) */}
        <div className="relative z-20 space-y-4">
          
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-2">
            <ol className="flex items-center space-x-2 text-xs font-sans text-slate-300">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">
                <span className="text-slate-500">/</span>
              </li>
              <li className="font-semibold text-amber-400" aria-current="page">
                About
              </li>
            </ol>
          </nav>

          {/* Label Badge */}
          <SectionBadge align="left">THE FIRM</SectionBadge>

          {/* Headline */}
          <div>
            <p
              role="heading"
              aria-level={1}
              className="font-serif font-bold text-[34px] sm:text-[42px] text-white leading-[1.05] tracking-tight max-w-[340px] transition-all duration-700 ease-out"
              style={{
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? "translateY(0)" : "translateY(20px)",
                transitionDelay: "100ms",
              }}
            >
              A Chartered Accountancy Practice Built Around Better Business Decisions
            </p>
          </div>

          {/* Supporting Paragraph */}
          <div className="pt-2">
            <p
              className="font-sans text-slate-200 text-sm sm:text-base font-normal leading-relaxed max-w-[310px] border-l-2 border-amber-400/80 pl-3 py-0.5 transition-all duration-700 ease-out"
              style={{
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? "translateY(0)" : "translateY(20px)",
                transitionDelay: "200ms",
              }}
            >
              Financial, taxation, and statutory advisory work is most valuable when it informs management decisions before capital exposure and commercial commitments are finalized.
            </p>
          </div>

        </div>

        {/* Mobile & Small Tablet Vertical Floating Social Navigation (Right Dock) */}
        <div
          className="flex lg:hidden absolute right-3.5 sm:right-4 top-1/2 -translate-y-1/2 z-30 flex-col items-center space-y-4.5 sm:space-y-5 transition-all duration-700 ease-out pointer-events-auto"
          style={{
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? "translateY(-50%)" : "translateY(-40%)",
            transitionDelay: "350ms",
          }}
        >
          <a
            href="https://www.instagram.com/_mra_ca/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Profile"
            className="text-white/80 hover:text-[#FBBF24] active:text-[#FBBF24] transition-all duration-250 ease-out hover:scale-105 active:scale-105 p-1.5 focus-visible:outline-2 focus-visible:outline-[#FBBF24] rounded-sm"
          >
            <svg className="w-[19px] h-[19px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>

          <a
            href="https://facebook.com/maneshrineesh"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook Page"
            className="text-white/80 hover:text-[#FBBF24] active:text-[#FBBF24] transition-all duration-250 ease-out hover:scale-105 active:scale-105 p-1.5 focus-visible:outline-2 focus-visible:outline-[#FBBF24] rounded-sm"
          >
            <svg className="w-[19px] h-[19px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>

          <a
            href="https://linkedin.com/company/maneshrineesh"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="text-white/80 hover:text-[#FBBF24] active:text-[#FBBF24] transition-all duration-250 ease-out hover:scale-105 active:scale-105 p-1.5 focus-visible:outline-2 focus-visible:outline-[#FBBF24] rounded-sm"
          >
            <svg className="w-[19px] h-[19px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>

          <div className="w-px h-[50px] bg-white/35 mt-2 pointer-events-none" aria-hidden="true" />
        </div>
      </div>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          DESKTOP HERO COMPOSITION (≥ lg VIEWPORT): EDITORIAL 92vh
         ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="hidden lg:flex pt-[160px] pb-28 min-h-[92vh] flex-col justify-center relative">
        
        {/* Desktop Editorial Background Image with Camera Settle */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div
            className="absolute inset-0 transition-transform duration-[1400ms] motion-reduce:transform-none motion-reduce:transition-none"
            style={{
              transform: isLoaded ? "scale(1.00)" : "scale(1.03)",
              transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            <Image
              src="/images/about-team-hero.jpg"
              alt="Manesh Rineesh & Associates professional team"
              fill
              priority
              sizes="100vw"
              className="object-cover object-[center_35%]"
            />
          </div>

          {/* Shared Cinematic Hero Overlay */}
          <HeroOverlay />
        </div>

        {/* Desktop Floating Right Social Dock */}
        <div
          className="absolute right-6 lg:right-10 top-1/2 -translate-y-1/2 z-30 flex flex-col items-center space-y-7 transition-all duration-1000 motion-reduce:transition-none"
          style={{
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? "translateY(-50%)" : "translateY(-40%)",
            transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
            transitionDelay: "480ms",
          }}
        >
          <a
            href="https://linkedin.com/company/maneshrineesh"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="text-white/60 hover:text-amber-400 transition-colors duration-250 focus-visible:outline-2 focus-visible:outline-amber-400 p-1"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.7a1.64 1.64 0 1 0 1.64 1.64A1.64 1.64 0 0 0 7.86 6.7Z"/>
            </svg>
          </a>
          <a
            href="https://facebook.com/maneshrineesh"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook Page"
            className="text-white/60 hover:text-amber-400 transition-colors duration-250 focus-visible:outline-2 focus-visible:outline-amber-400 p-1"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z"/>
            </svg>
          </a>
          <a
            href="https://www.instagram.com/_mra_ca/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Profile"
            className="text-white/60 hover:text-amber-400 transition-colors duration-250 focus-visible:outline-2 focus-visible:outline-amber-400 p-1"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
        </div>

        {/* Desktop Content Area — 640px Editorial Container */}
        <Container className="relative z-20">
          <div className="max-w-[640px] space-y-6">
            
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-2">
              <ol className="flex items-center space-x-2 text-xs font-sans text-slate-300">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">
                  <span className="text-slate-500">/</span>
                </li>
                <li className="font-semibold text-amber-400" aria-current="page">
                  About
                </li>
              </ol>
            </nav>

            {/* Label Badge */}
            <SectionBadge align="left">THE FIRM</SectionBadge>

            {/* Headline */}
            <h1
              className="font-serif font-bold text-[clamp(2.8rem,4vw,3.8rem)] text-white leading-[1.05] tracking-[-0.02em] transition-all duration-800 motion-reduce:transition-none"
              style={{
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? "translateY(0)" : "translateY(24px)",
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              A Chartered Accountancy Practice Built Around Better Business Decisions
            </h1>

            {/* Supporting Paragraph */}
            <p
              className="mt-6 font-sans text-slate-200 text-lg font-normal leading-relaxed border-l-2 border-amber-400/80 pl-4 py-1 transition-all duration-800 motion-reduce:transition-none"
              style={{
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? "translateY(0)" : "translateY(24px)",
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                transitionDelay: "180ms",
              }}
            >
              Financial, taxation, and statutory advisory work is most valuable when it informs management decisions before capital exposure and commercial commitments are finalized.
            </p>

          </div>
        </Container>
      </div>

    </section>
  );
}

export default AboutHero;
