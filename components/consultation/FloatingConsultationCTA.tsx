"use client";

import React, { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { ConsultationFlow } from "./ConsultationFlow";
import { scrollToConsultation } from "@/lib/consultation-scroll";

/**
 * Global Helper to trigger smooth scroll to Consultation section from any entrypoint
 */
export function openConsultationDrawer() {
  scrollToConsultation();
}

function HeroScrollCompanion() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (pathname !== "/") return;

    const targetSection = document.getElementById("industry-introduction");
    if (!targetSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(false);
        } else {
          const rect = targetSection.getBoundingClientRect();
          if (rect.top > 0) {
            setVisible(true);
          }
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(targetSection);
    return () => observer.disconnect();
  }, [pathname]);

  if (pathname !== "/") return null;

  const scrollToNext = () => {
    const nextSection =
      document.getElementById("our-perspective") ||
      document.getElementById("what-we-learned") ||
      document.getElementById("why-clarity-matters") ||
      document.getElementById("industry-introduction");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={`flex flex-col items-end mb-4 transition-all duration-300 ease-out pointer-events-auto ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-3 pointer-events-none"
      }`}
    >
      <div className="animate-[hero-float_2s_ease-in-out_infinite] flex flex-col items-end space-y-1.5">
        <span className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-slate-300 select-none">
          SCROLL
        </span>
        <button
          type="button"
          onClick={scrollToNext}
          className="group flex items-center justify-center w-8.5 h-8.5 rounded-full border border-slate-700/80 hover:border-slate-400 bg-slate-950/80 hover:bg-slate-900 text-slate-300 transition-all shadow-md cursor-pointer focus-visible:outline-2 focus-visible:outline-white"
          aria-label="Scroll down to Next section"
        >
          <svg
            className="w-3.5 h-3.5 text-slate-300 group-hover:text-white transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>
      <style jsx global>{`
        @keyframes hero-float {
          0%, 100% {
            transform: translateY(0px);
            opacity: 1;
          }
          50% {
            transform: translateY(8px);
            opacity: 0.7;
          }
        }
      `}</style>
    </div>
  );
}

export function FloatingConsultationCTA() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 60);
    return () => clearTimeout(timer);
  }, []);

  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const firstFocusableRef = useRef<HTMLButtonElement>(null);

  // Listen for external open-consultation-drawer custom events
  useEffect(() => {
    const handleOpenEvent = () => {
      setIsOpen(true);
    };

    window.addEventListener("open-consultation-drawer", handleOpenEvent);
    return () => window.removeEventListener("open-consultation-drawer", handleOpenEvent);
  }, []);

  // Smooth scroll to Consultation CTA section
  const togglePanel = (e?: React.MouseEvent) => {
    scrollToConsultation(e);
  };

  const closePanel = () => {
    setIsOpen(false);
    setTimeout(() => {
      if (triggerRef.current) {
        triggerRef.current.focus();
      }
    }, 0);
  };

  // Reset state during render on route / pathname changes
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setIsOpen(false);
  }

  // Browser back/forward & hash navigation reset
  useEffect(() => {
    const handleNavigationReset = () => {
      setIsOpen(false);
    };

    window.addEventListener("popstate", handleNavigationReset);
    window.addEventListener("hashchange", handleNavigationReset);
    return () => {
      window.removeEventListener("popstate", handleNavigationReset);
      window.removeEventListener("hashchange", handleNavigationReset);
    };
  }, []);

  return (
    <>
      {/* BACKDROP OVERLAY (Mobile & Desktop when open) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs z-40 transition-opacity motion-reduce:transition-none"
          onClick={closePanel}
          aria-hidden="true"
        />
      )}

      {/* FLOATING TRIGGER & CHOICE PANEL CONTAINER */}
      <div
        className={`fixed bottom-[calc(1rem+env(safe-area-inset-bottom,0px))] right-4 sm:bottom-6 sm:right-6 z-50 pointer-events-none flex flex-col items-end transition-all duration-400 delay-[700ms] motion-reduce:transition-none ${
          isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <HeroScrollCompanion />

        {/* OPEN PANEL */}
        {isOpen && (
          <div
            id="consultation-choice-panel"
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="consultation-panel-title"
            className="pointer-events-auto fixed inset-x-4 bottom-4 sm:absolute sm:inset-auto sm:bottom-14 sm:right-0 w-auto sm:w-[440px] max-h-[85vh] overflow-y-auto bg-slate-900 text-slate-100 border border-slate-800 shadow-2xl rounded-xl p-6 space-y-4 transition-all duration-200 motion-reduce:transition-none"
          >
            {/* Panel Top Header & Close Control */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="font-mono text-[11px] font-bold text-[#FBBF24] uppercase tracking-wider">
                MR&amp;A ADVISORY CONSULTATION
              </span>
              <button
                ref={firstFocusableRef}
                type="button"
                onClick={closePanel}
                className="text-slate-400 hover:text-white p-1 rounded-md transition-colors cursor-pointer min-h-[36px] min-w-[36px] flex items-center justify-center -mr-1"
                aria-label="Close consultation drawer"
              >
                ✕
              </button>
            </div>

            {/* LIGHTWEIGHT 3-STEP CONVERSATION FLOW */}
            <ConsultationFlow onClose={closePanel} />
          </div>
        )}

        {/* FLOATING ACTION BUTTON TRIGGER */}
        <button
          ref={triggerRef}
          type="button"
          aria-expanded={isOpen}
          aria-controls="consultation-choice-panel"
          onClick={togglePanel}
          className="pointer-events-auto group inline-flex items-center gap-3.5 min-h-[56px] sm:min-h-[58px] px-7 sm:px-8 bg-[linear-gradient(135deg,#1A1A1A_0%,#0D0D0D_45%,#000000_100%)] text-white font-sans font-bold text-sm sm:text-base uppercase tracking-[0.04em] rounded-[15px] shadow-[0_14px_40px_rgba(0,0,0,0.28)] hover:shadow-[0_18px_50px_rgba(0,0,0,0.35)] border border-white/10 transition-all duration-250 ease-out hover:-translate-y-[3px] hover:brightness-[1.08] active:translate-y-0 active:scale-[0.98] cursor-pointer focus-visible:outline-2 focus-visible:outline-white"
        >
          <span className="transition-transform duration-250 ease-out group-hover:translate-x-0.5">
            {isOpen ? "Close" : "Discuss With Us"}
          </span>
          {isOpen ? (
            <svg
              className="w-5 h-5 text-white transition-transform duration-250 ease-out shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.2}
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              className="w-5 h-5 transition-transform duration-250 ease-out group-hover:translate-x-1 shrink-0 animate-[cta-nudge_7s_ease-in-out_infinite] motion-reduce:animate-none"
              fill="none"
              viewBox="0 0 24 24"
              stroke="url(#cta-gold-radial)"
              strokeWidth={2.2}
              aria-hidden="true"
            >
              <defs>
                <radialGradient id="cta-gold-radial" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#FFD34A" />
                  <stop offset="100%" stopColor="#F4B400" />
                </radialGradient>
              </defs>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
          )}
        </button>
      </div>

      <style jsx global>{`
        @keyframes cta-nudge {
          0%, 90%, 100% {
            transform: scale(1);
          }
          94% {
            transform: scale(1.12) rotate(-3deg);
          }
          97% {
            transform: scale(1.08) rotate(3deg);
          }
        }
      `}</style>
    </>
  );
}
