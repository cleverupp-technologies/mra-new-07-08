"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
} from "lucide-react";

export function HeroNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isInsightsOpen, setIsInsightsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isLightPage = pathname === "/contact" || pathname.startsWith("/services") || pathname.startsWith("/industries") || pathname.startsWith("/insights");

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Industries", href: "/industries" },
    { name: "Insights", href: "/insights" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href === "/about") return pathname === "/about";
    if (href === "/contact") return pathname === "/contact";
    if (href === "/services") return pathname.startsWith("/services");
    if (href === "/industries") return pathname.startsWith("/industries");
    if (href === "/insights") return pathname.startsWith("/insights");
    return false;
  };

  return (
    <>
      <header
        style={{
          backgroundColor: scrolled
            ? "rgba(31, 58, 138, 0.68)"
            : "transparent",
          backdropFilter: scrolled ? "blur(14px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(14px)" : "none",
        }}
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ease-out ${
          scrolled
            ? "border-b border-[#FFD978]/20 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.25)] py-3 sm:py-3.5 lg:py-4 text-[#FAF8F1]"
            : isLightPage
            ? "border-b border-transparent py-5 sm:py-6 lg:py-7 text-[#111827]"
            : "border-b border-transparent py-5 sm:py-6 lg:py-7 text-white"
        }`}
      >
        <div className="flex items-center justify-between px-6 lg:px-12 max-w-[1400px] mx-auto w-full transition-all duration-300">
          {/* Left Side: Dominant Brand Lockup & CA Emblem (Mobile + Desktop) */}
          <div className="flex items-center gap-3.5">
            {/* Mobile Hamburger Button (< 1024px) */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation menu"
              className={`lg:hidden w-11 h-11 rounded-full border flex items-center justify-center transition-colors active:scale-95 flex-shrink-0 cursor-pointer ${
                scrolled
                  ? "border-white/20 bg-white/10 text-[#FAF8F1] hover:border-[#F4B942]"
                  : isLightPage
                  ? "border-[#111827]/20 bg-[#FAF8F1]/80 text-[#111827] hover:border-[#F4B942]"
                  : "border-white/15 bg-black/40 text-white hover:border-[#F4B942]/50"
              }`}
            >
              {isOpen ? <X className="w-5 h-5 text-[#F4B942]" /> : <Menu className="w-5 h-5" />}
            </button>

            {/* Desktop & Mobile Brand Lockup Link */}
            <Link href="/" className="flex items-center gap-3.5 lg:gap-4 xl:gap-5 select-none group shrink-0">
              {/* CA India Logo Emblem on Left */}
              <div className="flex items-center justify-center flex-shrink-0">
                <img
                  src="/images/ca-logo.png"
                  alt="CA India Official Trust Badge"
                  className="h-10 sm:h-11 lg:h-13 xl:h-[58px] w-auto object-contain max-w-[65px] lg:max-w-[75px] xl:max-w-[82px] opacity-95 transition-opacity group-hover:opacity-100 drop-shadow"
                />
              </div>

              {/* Manesh Rineesh & Associates Title + CHARTERED ACCOUNTANTS Subtitle */}
              <div className="flex flex-col text-left justify-center min-w-0">
                <span className={`text-[19px] sm:text-[21px] lg:text-[22px] xl:text-[25px] font-extrabold leading-[1.1] font-serif tracking-tight drop-shadow-sm group-hover:text-[#F4B942] transition-colors block ${
                  scrolled ? "text-[#FAF8F1]" : isLightPage ? "text-[#111827]" : "text-white"
                }`}>
                  Manesh Rineesh<br className="lg:hidden" />
                  <span className="hidden lg:inline">&nbsp;</span>
                  <span className="font-sans font-bold mr-1 lg:mr-1.5">&amp;</span>Associates
                </span>
                
                <span className="text-[9px] sm:text-[10px] lg:text-[10.5px] xl:text-[11.5px] font-semibold uppercase tracking-[0.28em] text-[#F4B942] mt-1 font-sans block whitespace-nowrap">
                  CHARTERED ACCOUNTANTS
                </span>
              </div>
            </Link>
          </div>

          {/* Right Side: Desktop Navigation Links & Mega-Menu */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 font-sans">
            {/* INDUSTRIES ITEM WITH DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => setIsIndustriesOpen(true)}
              onMouseLeave={() => setIsIndustriesOpen(false)}
            >
              <Link
                href="/industries"
                onClick={() => setIsIndustriesOpen(false)}
                className={`text-xs xl:text-[13px] font-semibold tracking-[0.18em] transition-colors flex items-center gap-1.5 uppercase whitespace-nowrap py-2 cursor-pointer relative ${
                  isIndustriesOpen || pathname.startsWith("/industries")
                    ? "text-[#F4B942] font-bold"
                    : scrolled
                    ? "text-[#FAF8F1]/90 hover:text-[#F4B942]"
                    : isLightPage
                    ? "text-[#111827] hover:text-[#F4B942]"
                    : "text-white/90 hover:text-[#F4B942]"
                }`}
              >
              <span>INDUSTRIES</span>
              <ChevronDown
                className={`w-3.5 h-3.5 text-[#F4B942] shrink-0 transition-transform duration-200 ${
                  isIndustriesOpen ? "rotate-180" : ""
                }`}
              />
              {(isIndustriesOpen || pathname.startsWith("/industries")) && (
                <motion.span
                  layoutId="activeTabUnderline"
                  className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#F4B942]"
                />
              )}
            </Link>

            {/* DESKTOP MEGA-MENU DROPDOWN FOR INDUSTRIES - BLACK THEME (#0B0B0B) */}
            <AnimatePresence>
              {isIndustriesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                  className="fixed top-[96px] sm:top-[104px] lg:top-[112px] left-0 right-0 w-full z-50 bg-[#0B0B0B] text-[#FAF8F1] border-t border-b border-[#FFD978]/30 shadow-[0_20px_35px_-5px_rgba(0,0,0,0.8)] text-left font-sans"
                >
                  <div className="max-w-[80rem] w-full mx-auto p-5 sm:p-6 box-border">
                    <nav aria-label="Industries Navigation" className="flex flex-col gap-4">
                      {/* Section Header */}
                      <div className="flex flex-col gap-1 pb-3 border-b border-white/10">
                        <span className="block font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-[#F4B942]">
                          INDUSTRIES WE SERVE
                        </span>
                        <h3 className="m-0 font-serif text-[1.375rem] font-bold text-[#FAF8F1] leading-snug">
                          Industries We Serve
                        </h3>
                        <p className="m-0 font-sans text-xs sm:text-[0.8125rem] text-[#FAF8F1]/80 max-w-3xl leading-relaxed">
                          Commercial advisory experience across major sectors including healthcare, manufacturing, construction, retail and education.
                        </p>
                      </div>

                      {/* 3-Column Industry Links Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-1.5 py-1">
                        {/* Item 1: Healthcare */}
                        <Link
                          href="/industries/healthcare"
                          onClick={() => setIsIndustriesOpen(false)}
                          className="flex items-center justify-between py-2 px-3 rounded-md bg-transparent border-l-2 border-transparent text-decoration-none transition-all duration-200 ease-out cursor-pointer hover:bg-white/[0.08] hover:border-l-[#F4B942] group"
                        >
                          <div className="flex items-center gap-2.5">
                            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-[#F4B942] shrink-0">
                              <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path>
                              <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path>
                              <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path>
                              <path d="M10 6h4"></path><path d="M10 10h4"></path><path d="M10 14h4"></path><path d="M10 18h4"></path>
                            </svg>
                            <span className="font-serif text-sm font-semibold text-[#FAF8F1] group-hover:text-[#F4B942] transition-colors">Hospitals &amp; Healthcare</span>
                          </div>
                          <span className="text-[#F4B942] text-xs opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">→</span>
                        </Link>

                        {/* Item 2: Manufacturers */}
                        <Link
                          href="/industries/manufacturers"
                          onClick={() => setIsIndustriesOpen(false)}
                          className="flex items-center justify-between py-2 px-3 rounded-md bg-transparent border-l-2 border-transparent text-decoration-none transition-all duration-200 ease-out cursor-pointer hover:bg-white/[0.08] hover:border-l-[#F4B942] group"
                        >
                          <div className="flex items-center gap-2.5">
                            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-[#F4B942] shrink-0">
                              <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path>
                              <path d="M17 18h1"></path><path d="M12 18h1"></path><path d="M7 18h1"></path>
                            </svg>
                            <span className="font-serif text-sm font-semibold text-[#FAF8F1] group-hover:text-[#F4B942] transition-colors">Manufacturers</span>
                          </div>
                          <span className="text-[#F4B942] text-xs opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">→</span>
                        </Link>

                        {/* Item 3: Real Estate */}
                        <Link
                          href="/industries/real-estate"
                          onClick={() => setIsIndustriesOpen(false)}
                          className="flex items-center justify-between py-2 px-3 rounded-md bg-transparent border-l-2 border-transparent text-decoration-none transition-all duration-200 ease-out cursor-pointer hover:bg-white/[0.08] hover:border-l-[#F4B942] group"
                        >
                          <div className="flex items-center gap-2.5">
                            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-[#F4B942] shrink-0">
                              <rect width="16" height="20" x="4" y="2" rx="2" ry="2"></rect>
                              <path d="M9 22v-4h6v4"></path><path d="M8 6h.01"></path><path d="M16 6h.01"></path><path d="M12 6h.01"></path><path d="M12 10h.01"></path><path d="M12 14h.01"></path><path d="M16 10h.01"></path><path d="M16 14h.01"></path><path d="M8 10h.01"></path><path d="M8 14h.01"></path>
                            </svg>
                            <span className="font-serif text-sm font-semibold text-[#FAF8F1] group-hover:text-[#F4B942] transition-colors">Real Estate</span>
                          </div>
                          <span className="text-[#F4B942] text-xs opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">→</span>
                        </Link>

                        {/* Item 4: Retail & Wholesalers */}
                        <Link
                          href="/industries/retail-wholesalers"
                          onClick={() => setIsIndustriesOpen(false)}
                          className="flex items-center justify-between py-2 px-3 rounded-md bg-transparent border-l-2 border-transparent text-decoration-none transition-all duration-200 ease-out cursor-pointer hover:bg-white/[0.08] hover:border-l-[#F4B942] group"
                        >
                          <div className="flex items-center gap-2.5">
                            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-[#F4B942] shrink-0">
                              <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"></path>
                              <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                              <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"></path>
                              <path d="M2 7h20"></path>
                            </svg>
                            <span className="font-serif text-sm font-semibold text-[#FAF8F1] group-hover:text-[#F4B942] transition-colors">Retail &amp; Wholesalers</span>
                          </div>
                          <span className="text-[#F4B942] text-xs opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">→</span>
                        </Link>

                        {/* Item 5: NBFCs */}
                        <Link
                          href="/industries/nbfcs"
                          onClick={() => setIsIndustriesOpen(false)}
                          className="flex items-center justify-between py-2 px-3 rounded-md bg-transparent border-l-2 border-transparent text-decoration-none transition-all duration-200 ease-out cursor-pointer hover:bg-white/[0.08] hover:border-l-[#F4B942] group"
                        >
                          <div className="flex items-center gap-2.5">
                            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-[#F4B942] shrink-0">
                              <line x1="3" x2="21" y1="22" y2="22"></line>
                              <line x1="6" x2="6" y1="18" y2="11"></line>
                              <line x1="10" x2="10" y1="18" y2="11"></line>
                              <line x1="14" x2="14" y1="18" y2="11"></line>
                              <line x1="18" x2="18" y1="18" y2="11"></line>
                              <polygon points="12 2 20 7 4 7"></polygon>
                            </svg>
                            <span className="font-serif text-sm font-semibold text-[#FAF8F1] group-hover:text-[#F4B942] transition-colors">NBFCs</span>
                          </div>
                          <span className="text-[#F4B942] text-xs opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">→</span>
                        </Link>

                        {/* Item 6: Education */}
                        <Link
                          href="/industries/education"
                          onClick={() => setIsIndustriesOpen(false)}
                          className="flex items-center justify-between py-2 px-3 rounded-md bg-transparent border-l-2 border-transparent text-decoration-none transition-all duration-200 ease-out cursor-pointer hover:bg-white/[0.08] hover:border-l-[#F4B942] group"
                        >
                          <div className="flex items-center gap-2.5">
                            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-[#F4B942] shrink-0">
                              <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path>
                              <path d="M22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>
                            </svg>
                            <span className="font-serif text-sm font-semibold text-[#FAF8F1] group-hover:text-[#F4B942] transition-colors">Education</span>
                          </div>
                          <span className="text-[#F4B942] text-xs opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">→</span>
                        </Link>

                        {/* Item 7: Textiles */}
                        <Link
                          href="/industries/textiles"
                          onClick={() => setIsIndustriesOpen(false)}
                          className="flex items-center justify-between py-2 px-3 rounded-md bg-transparent border-l-2 border-transparent text-decoration-none transition-all duration-200 ease-out cursor-pointer hover:bg-white/[0.08] hover:border-l-[#F4B942] group"
                        >
                          <div className="flex items-center gap-2.5">
                            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-[#F4B942] shrink-0">
                              <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"></path>
                            </svg>
                            <span className="font-serif text-sm font-semibold text-[#FAF8F1] group-hover:text-[#F4B942] transition-colors">Textiles</span>
                          </div>
                          <span className="text-[#F4B942] text-xs opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">→</span>
                        </Link>

                        {/* Item 8: Pharma */}
                        <Link
                          href="/industries/pharma"
                          onClick={() => setIsIndustriesOpen(false)}
                          className="flex items-center justify-between py-2 px-3 rounded-md bg-transparent border-l-2 border-transparent text-decoration-none transition-all duration-200 ease-out cursor-pointer hover:bg-white/[0.08] hover:border-l-[#F4B942] group"
                        >
                          <div className="flex items-center gap-2.5">
                            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-[#F4B942] shrink-0">
                              <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"></path>
                              <path d="m8.5 8.5 7 7"></path>
                            </svg>
                            <span className="font-serif text-sm font-semibold text-[#FAF8F1] group-hover:text-[#F4B942] transition-colors">Pharma</span>
                          </div>
                          <span className="text-[#F4B942] text-xs opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">→</span>
                        </Link>
                      </div>

                      {/* Bottom Action Footer */}
                      <div className="pt-3 border-t border-white/10 flex items-center justify-between flex-wrap gap-2">
                        <span className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#FAF8F1]/60">
                          INTEGRATED ADVISORY PRACTICES
                        </span>
                        <Link
                          href="/industries"
                          onClick={() => setIsIndustriesOpen(false)}
                          className="font-sans text-xs font-bold text-[#F4B942] hover:text-[#FFD978] hover:underline inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                        >
                          <span>Explore all industry practices</span>
                          <span aria-hidden="true" className="text-sm">→</span>
                        </Link>
                      </div>
                    </nav>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* SERVICES ITEM WITH EXACT DROPDOWN */}
          <div
            className="relative"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <Link
              href="/services"
              onClick={() => setIsServicesOpen(false)}
              className={`text-xs xl:text-[13px] font-semibold tracking-[0.18em] transition-colors flex items-center gap-1 uppercase whitespace-nowrap py-2 cursor-pointer relative ${
                isServicesOpen || pathname.startsWith("/services")
                  ? "text-[#F4B942] font-bold"
                  : scrolled
                  ? "text-[#FAF8F1]/90 hover:text-[#F4B942]"
                  : isLightPage
                  ? "text-[#111827] hover:text-[#F4B942]"
                  : "text-white/90 hover:text-[#F4B942]"
              }`}
            >
              <span>SERVICES</span>
              <ChevronDown
                className={`w-3.5 h-3.5 text-[#F4B942] shrink-0 transition-transform duration-200 ${
                  isServicesOpen ? "rotate-180" : ""
                }`}
              />
            </Link>

            {/* DESKTOP MEGA-MENU DROPDOWN FOR SERVICES - BLACK THEME (#0B0B0B) */}
            <AnimatePresence>
              {isServicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                  className="fixed top-[96px] sm:top-[104px] lg:top-[112px] left-0 right-0 w-full z-50 bg-[#0B0B0B] text-[#FAF8F1] border-t border-b border-[#FFD978]/30 shadow-[0_20px_35px_-5px_rgba(0,0,0,0.8)] text-left font-sans"
                >
                  <div className="max-w-[80rem] w-full mx-auto p-5 sm:p-6 box-border">
                    <nav aria-label="Services Navigation" className="flex flex-col gap-4">
                      {/* Section Header */}
                      <div className="flex flex-col gap-1 pb-3 border-b border-white/10">
                        <span className="block font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-[#F4B942]">
                          PRACTICE CAPABILITIES
                        </span>
                        <h3 className="m-0 font-serif text-[1.375rem] font-bold text-[#FAF8F1] leading-snug">
                          Services We Deliver
                        </h3>
                        <p className="m-0 font-sans text-xs sm:text-[0.8125rem] text-[#FAF8F1]/80 max-w-3xl leading-relaxed">
                          Core financial advisory frameworks, Virtual CFO guidance, statutory audit, taxation and corporate compliance.
                        </p>
                      </div>

                      {/* 3-Column Service Links Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-1.5 py-1">
                        {/* 01: Virtual CFO */}
                        <Link
                          href="/services/virtual-cfo"
                          onClick={() => setIsServicesOpen(false)}
                          className="flex items-center justify-between py-2 px-3 rounded-md bg-transparent border-l-2 border-transparent text-decoration-none transition-all duration-200 ease-out cursor-pointer hover:bg-[#1F3A8A]/40 hover:border-l-[#F4B942] group"
                        >
                          <div className="flex items-center gap-2.5">
                            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-[#F4B942] shrink-0">
                              <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                              <polyline points="16 7 22 7 22 13"></polyline>
                            </svg>
                            <span className="font-serif text-sm font-semibold text-[#FAF8F1] group-hover:text-[#F4B942] transition-colors">Virtual CFO</span>
                          </div>
                          <span className="text-[#F4B942] text-xs opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">→</span>
                        </Link>

                        {/* 02: Business Advisory */}
                        <Link
                          href="/services/business-advisory"
                          onClick={() => setIsServicesOpen(false)}
                          className="flex items-center justify-between py-2 px-3 rounded-md bg-transparent border-l-2 border-transparent text-decoration-none transition-all duration-200 ease-out cursor-pointer hover:bg-[#1F3A8A]/40 hover:border-l-[#F4B942] group"
                        >
                          <div className="flex items-center gap-2.5">
                            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-[#F4B942] shrink-0">
                              <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                              <rect width="20" height="14" x="2" y="6" rx="2"></rect>
                            </svg>
                            <span className="font-serif text-sm font-semibold text-[#FAF8F1] group-hover:text-[#F4B942] transition-colors">Business Advisory</span>
                          </div>
                          <span className="text-[#F4B942] text-xs opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">→</span>
                        </Link>

                        {/* 03: Audit & Assurance */}
                        <Link
                          href="/services/audit-assurance"
                          onClick={() => setIsServicesOpen(false)}
                          className="flex items-center justify-between py-2 px-3 rounded-md bg-transparent border-l-2 border-transparent text-decoration-none transition-all duration-200 ease-out cursor-pointer hover:bg-[#1F3A8A]/40 hover:border-l-[#F4B942] group"
                        >
                          <div className="flex items-center gap-2.5">
                            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-[#F4B942] shrink-0">
                              <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                              <path d="m9 12 2 2 4-4"></path>
                            </svg>
                            <span className="font-serif text-sm font-semibold text-[#FAF8F1] group-hover:text-[#F4B942] transition-colors">Audit &amp; Assurance</span>
                          </div>
                          <span className="text-[#F4B942] text-xs opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">→</span>
                        </Link>

                        {/* 04: Corporate Advisory */}
                        <Link
                          href="/services/corporate-advisory"
                          onClick={() => setIsServicesOpen(false)}
                          className="flex items-center justify-between py-2 px-3 rounded-md bg-transparent border-l-2 border-transparent text-decoration-none transition-all duration-200 ease-out cursor-pointer hover:bg-[#1F3A8A]/40 hover:border-l-[#F4B942] group"
                        >
                          <div className="flex items-center gap-2.5">
                            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-[#F4B942] shrink-0">
                              <path d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"></path>
                              <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
                            </svg>
                            <span className="font-serif text-sm font-semibold text-[#FAF8F1] group-hover:text-[#F4B942] transition-colors">Corporate Advisory</span>
                          </div>
                          <span className="text-[#F4B942] text-xs opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">→</span>
                        </Link>

                        {/* 05: Accounting & Bookkeeping */}
                        <Link
                          href="/services/accounting-bookkeeping"
                          onClick={() => setIsServicesOpen(false)}
                          className="flex items-center justify-between py-2 px-3 rounded-md bg-transparent border-l-2 border-transparent text-decoration-none transition-all duration-200 ease-out cursor-pointer hover:bg-[#1F3A8A]/40 hover:border-l-[#F4B942] group"
                        >
                          <div className="flex items-center gap-2.5">
                            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-[#F4B942] shrink-0">
                              <rect width="16" height="20" x="4" y="2" rx="2"></rect>
                              <line x1="8" x2="16" y1="6" y2="6"></line>
                              <line x1="16" x2="16" y1="14" y2="18"></line>
                              <path d="M16 10h.01"></path><path d="M12 10h.01"></path><path d="M8 10h.01"></path><path d="M12 14h.01"></path><path d="M8 14h.01"></path><path d="M12 18h.01"></path><path d="M8 18h.01"></path>
                            </svg>
                            <span className="font-serif text-sm font-semibold text-[#FAF8F1] group-hover:text-[#F4B942] transition-colors">Accounting &amp; Bookkeeping</span>
                          </div>
                          <span className="text-[#F4B942] text-xs opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">→</span>
                        </Link>

                        {/* 06: Finance Outsourcing */}
                        <Link
                          href="/services/finance-outsourcing"
                          onClick={() => setIsServicesOpen(false)}
                          className="flex items-center justify-between py-2 px-3 rounded-md bg-transparent border-l-2 border-transparent text-decoration-none transition-all duration-200 ease-out cursor-pointer hover:bg-[#1F3A8A]/40 hover:border-l-[#F4B942] group"
                        >
                          <div className="flex items-center gap-2.5">
                            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-[#F4B942] shrink-0">
                              <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                              <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                              <path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path>
                            </svg>
                            <span className="font-serif text-sm font-semibold text-[#FAF8F1] group-hover:text-[#F4B942] transition-colors">Finance Outsourcing</span>
                          </div>
                          <span className="text-[#F4B942] text-xs opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">→</span>
                        </Link>

                        {/* 07: Tax Planning */}
                        <Link
                          href="/services/tax-planning"
                          onClick={() => setIsServicesOpen(false)}
                          className="flex items-center justify-between py-2 px-3 rounded-md bg-transparent border-l-2 border-transparent text-decoration-none transition-all duration-200 ease-out cursor-pointer hover:bg-[#1F3A8A]/40 hover:border-l-[#F4B942] group"
                        >
                          <div className="flex items-center gap-2.5">
                            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-[#F4B942] shrink-0">
                              <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                              <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                              <path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path>
                            </svg>
                            <span className="font-serif text-sm font-semibold text-[#FAF8F1] group-hover:text-[#F4B942] transition-colors">Tax Planning</span>
                          </div>
                          <span className="text-[#F4B942] text-xs opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">→</span>
                        </Link>

                        {/* 08: TDS Compliance */}
                        <Link
                          href="/services/tds-compliance"
                          onClick={() => setIsServicesOpen(false)}
                          className="flex items-center justify-between py-2 px-3 rounded-md bg-transparent border-l-2 border-transparent text-decoration-none transition-all duration-200 ease-out cursor-pointer hover:bg-[#1F3A8A]/40 hover:border-l-[#F4B942] group"
                        >
                          <div className="flex items-center gap-2.5">
                            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-[#F4B942] shrink-0">
                              <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"></path>
                              <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"></path>
                              <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"></path>
                            </svg>
                            <span className="font-serif text-sm font-semibold text-[#FAF8F1] group-hover:text-[#F4B942] transition-colors">TDS Compliance</span>
                          </div>
                          <span className="text-[#F4B942] text-xs opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">→</span>
                        </Link>

                        {/* 09: ROC Filing */}
                        <Link
                          href="/services/roc-filing"
                          onClick={() => setIsServicesOpen(false)}
                          className="flex items-center justify-between py-2 px-3 rounded-md bg-transparent border-l-2 border-transparent text-decoration-none transition-all duration-200 ease-out cursor-pointer hover:bg-[#1F3A8A]/40 hover:border-l-[#F4B942] group"
                        >
                          <div className="flex items-center gap-2.5">
                            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-[#F4B942] shrink-0">
                              <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                              <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                              <path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path>
                            </svg>
                            <span className="font-serif text-sm font-semibold text-[#FAF8F1] group-hover:text-[#F4B942] transition-colors">ROC Filing</span>
                          </div>
                          <span className="text-[#F4B942] text-xs opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">→</span>
                        </Link>

                        {/* 10: Personal ITR Filing */}
                        <Link
                          href="/services/personal-itr-filing"
                          onClick={() => setIsServicesOpen(false)}
                          className="flex items-center justify-between py-2 px-3 rounded-md bg-transparent border-l-2 border-transparent text-decoration-none transition-all duration-200 ease-out cursor-pointer hover:bg-[#1F3A8A]/40 hover:border-l-[#F4B942] group"
                        >
                          <div className="flex items-center gap-2.5">
                            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-[#F4B942] shrink-0">
                              <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                              <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                              <path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path>
                            </svg>
                            <span className="font-serif text-sm font-semibold text-[#FAF8F1] group-hover:text-[#F4B942] transition-colors">Personal ITR Filing</span>
                          </div>
                          <span className="text-[#F4B942] text-xs opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">→</span>
                        </Link>

                        {/* 11: Compliance */}
                        <Link
                          href="/services/compliance"
                          onClick={() => setIsServicesOpen(false)}
                          className="flex items-center justify-between py-2 px-3 rounded-md bg-transparent border-l-2 border-transparent text-decoration-none transition-all duration-200 ease-out cursor-pointer hover:bg-[#1F3A8A]/40 hover:border-l-[#F4B942] group"
                        >
                          <div className="flex items-center gap-2.5">
                            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-[#F4B942] shrink-0">
                              <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                              <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                              <path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path>
                            </svg>
                            <span className="font-serif text-sm font-semibold text-[#FAF8F1] group-hover:text-[#F4B942] transition-colors">Compliance</span>
                          </div>
                          <span className="text-[#F4B942] text-xs opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">→</span>
                        </Link>
                      </div>

                      {/* Bottom Action Footer */}
                      <div className="pt-3 border-t border-white/10 flex items-center justify-between flex-wrap gap-2">
                        <span className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#FAF8F1]/60">
                          PRACTICE CAPABILITIES
                        </span>
                        <Link
                          href="/services"
                          onClick={() => setIsServicesOpen(false)}
                          className="font-sans text-xs font-bold text-[#F4B942] hover:text-[#FFD978] hover:underline inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                        >
                          <span>View all professional services</span>
                          <span aria-hidden="true" className="text-sm">→</span>
                        </Link>
                      </div>

                    </nav>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* INSIGHTS ITEM WITH MATCHING DROPDOWN */}
          <div
            className="relative"
            onMouseEnter={() => setIsInsightsOpen(true)}
            onMouseLeave={() => setIsInsightsOpen(false)}
          >
            <Link
              href="/insights"
              onClick={() => setIsInsightsOpen(false)}
              className={`text-xs xl:text-[13px] font-semibold tracking-[0.18em] transition-colors flex items-center gap-1 uppercase whitespace-nowrap py-2 ${
                isInsightsOpen || pathname.startsWith("/insights")
                  ? "text-[#F4B942] font-bold"
                  : scrolled
                  ? "text-[#FAF8F1]/90 hover:text-[#F4B942]"
                  : isLightPage
                  ? "text-[#111827] hover:text-[#F4B942]"
                  : "text-white/90 hover:text-[#F4B942]"
              }`}
            >
              <span>INSIGHTS</span>
              <ChevronDown
                className={`w-3.5 h-3.5 text-[#F4B942] shrink-0 transition-transform duration-200 ${
                  isInsightsOpen ? "rotate-180" : ""
                }`}
              />
            </Link>

            {/* INSIGHTS DROPDOWN - BLACK THEME (#0B0B0B) */}
            <AnimatePresence>
              {isInsightsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                  className="fixed top-[96px] sm:top-[104px] lg:top-[112px] left-0 right-0 w-full z-50 bg-[#0B0B0B] text-[#FAF8F1] border-t border-b border-[#FFD978]/30 shadow-[0_20px_35px_-5px_rgba(0,0,0,0.8)] py-5 px-6 lg:px-12 text-left font-sans"
                >
                  <div className="max-w-7xl w-full mx-auto px-4 box-border">
                    <nav aria-label="Insights Navigation" className="flex flex-col gap-4">
                      {/* Header Block */}
                      <div className="flex flex-col gap-1 pb-3 border-b border-white/10">
                        <span className="block font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-[#F4B942]">
                          PERSPECTIVES &amp; EVIDENCE
                        </span>
                        <h3 className="m-0 font-serif text-2xl font-bold text-[#FAF8F1] leading-snug">
                          Insights &amp; Industry Briefings
                        </h3>
                        <p className="m-0 font-sans text-xs sm:text-sm text-[#FAF8F1]/80 max-w-3xl leading-relaxed">
                          Evidence streams, verified engagement cases, statutory updates, and strategic analysis for business leaders.
                        </p>
                      </div>

                      {/* 3-Column Card Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-1">
                        {/* Card 1: Library */}
                        <Link
                          href="/insights"
                          onClick={() => setIsInsightsOpen(false)}
                          className="flex flex-col gap-1.5 p-4 bg-[#1F3A8A]/30 rounded-xl border border-[#FFD978]/30 hover:bg-[#1F3A8A]/60 hover:border-[#F4B942] transition-all cursor-pointer group"
                        >
                          <span className="block font-mono text-[10px] font-bold text-[#F4B942] uppercase tracking-wider">
                            LIBRARY
                          </span>
                          <h4 className="m-0 font-serif text-base font-bold text-[#FAF8F1] group-hover:text-[#F4B942] transition-colors">
                            Insights Library
                          </h4>
                          <p className="m-0 font-sans text-xs text-[#FAF8F1]/80 leading-relaxed">
                            Complete directory of client experiences, statutory updates, and industry briefings.
                          </p>
                        </Link>

                        {/* Card 2: Client Experiences */}
                        <Link
                          href="/insights/client-experiences"
                          onClick={() => setIsInsightsOpen(false)}
                          className="flex flex-col gap-1.5 p-4 bg-[#1F3A8A]/30 rounded-xl border border-[#FFD978]/30 hover:bg-[#1F3A8A]/60 hover:border-[#F4B942] transition-all cursor-pointer group"
                        >
                          <span className="block font-mono text-[10px] font-bold text-[#F4B942] uppercase tracking-wider">
                            EVIDENCE STREAM
                          </span>
                          <h4 className="m-0 font-serif text-base font-bold text-[#FAF8F1] group-hover:text-[#F4B942] transition-colors">
                            Client Experiences
                          </h4>
                          <p className="m-0 font-sans text-xs text-[#FAF8F1]/80 leading-relaxed">
                            Anonymous accounts of verified business situations, diagnostic findings, and operational outcomes.
                          </p>
                        </Link>

                        {/* Card 3: Industry Updates */}
                        <Link
                          href="/insights/industry-updates"
                          onClick={() => setIsInsightsOpen(false)}
                          className="flex flex-col gap-1.5 p-4 bg-[#1F3A8A]/30 rounded-xl border border-[#FFD978]/30 hover:bg-[#1F3A8A]/60 hover:border-[#F4B942] transition-all cursor-pointer group"
                        >
                          <span className="block font-mono text-[10px] font-bold text-[#F4B942] uppercase tracking-wider">
                            REGULATORY ALERTS
                          </span>
                          <h4 className="m-0 font-serif text-base font-bold text-[#FAF8F1] group-hover:text-[#F4B942] transition-colors">
                            Industry Updates
                          </h4>
                          <p className="m-0 font-sans text-xs text-[#FAF8F1]/80 leading-relaxed">
                            Regulatory alerts, statutory filing changes, and tax framework updates.
                          </p>
                        </Link>
                      </div>

                      {/* Bottom Footer Bar */}
                      <div className="pt-3 border-t border-white/10 flex items-center justify-between flex-wrap gap-2">
                        <span className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#FAF8F1]/60">
                          KNOWLEDGE BASE
                        </span>
                        <Link
                          href="/insights"
                          onClick={() => setIsInsightsOpen(false)}
                          className="font-sans text-xs font-bold text-[#F4B942] hover:text-[#FFD978] hover:underline inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                        >
                          <span>Explore all insights and perspectives</span>
                          <span aria-hidden="true" className="text-sm">→</span>
                        </Link>
                      </div>
                    </nav>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            href="/about"
            className={`text-xs xl:text-[13px] font-semibold tracking-[0.18em] transition-colors uppercase whitespace-nowrap ${
              pathname === "/about"
                ? "text-[#F4B942] font-bold"
                : scrolled
                ? "text-[#FAF8F1]/90 hover:text-[#F4B942]"
                : isLightPage
                ? "text-[#111827] hover:text-[#F4B942]"
                : "text-white/90 hover:text-[#F4B942]"
            }`}
          >
            ABOUT
          </Link>

          <Link
            href="/contact"
            className={`text-xs xl:text-[13px] font-semibold tracking-[0.18em] transition-colors uppercase whitespace-nowrap ${
              pathname === "/contact"
                ? "text-[#F4B942] font-bold"
                : scrolled
                ? "text-[#FAF8F1]/90 hover:text-[#F4B942]"
                : isLightPage
                ? "text-[#111827] hover:text-[#F4B942]"
                : "text-white/90 hover:text-[#F4B942]"
            }`}
          >
            CONTACT
          </Link>
        </nav>
        </div>
      </header>

      {/* Mobile Navigation Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#1F3A8A] text-[#FAF8F1] pt-32 px-6 lg:px-12 pb-12 flex flex-col justify-between border-b border-[#FFD978]/30 max-w-[1400px] mx-auto w-full"
          >
            <div className="space-y-6">
              <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-[#F4B942] uppercase block mb-4">
                PRACTICE NAVIGATION
              </span>

              <nav className="flex flex-col space-y-4 font-sans">
                {navItems.map((item) => {
                  const active = isActive(item.href);

                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-lg sm:text-xl lg:text-2xl font-serif font-bold tracking-tight flex items-center justify-between transition-colors py-2 border-b border-[#FAF8F1]/15 ${
                        active ? "text-[#F4B942]" : "text-[#FAF8F1] hover:text-[#F4B942]"
                      }`}
                    >
                      <span>{item.name}</span>
                      {active && (
                        <span className="w-2 h-2 rounded-full bg-[#F4B942] shadow-[0_0_8px_rgba(56, 82, 180,0.8)]" />
                      )}
                    </Link>
                  );
                })}
              </nav>
            </div>

            <div className="pt-6 border-t border-[#FAF8F1]/20 space-y-2 font-sans">
              <span className="text-[10px] font-mono text-[#FAF8F1]/60 uppercase tracking-wider block font-bold">
                HEADQUARTERS CONTACT
              </span>
              <p className="text-xs text-[#FAF8F1] font-medium">+91 95675 23620 &bull; office@maneshrineesh.com</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default HeroNav;
