"use client";

import React from "react";
import Link from "next/link";
import Container from "@/components/layout/Container";

export default function Section12Footer() {
  return (
    <footer className="w-full bg-[#1F3A8A] text-[#FAF8F1] border-t border-[#FFD978]/22 pt-16 pb-12 font-sans">
      <Container>
        {/* Header Area — Firm Identity Block */}
        <div className="border-b border-[#FFD978]/22 pb-8 mb-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold font-serif tracking-tight text-[#FAF8F1] mb-1">
              Manesh Rineesh &amp; Associates
            </h2>
            <p className="text-xs font-mono font-bold tracking-[0.2em] text-[#F4B942] uppercase">
              CHARTERED ACCOUNTANTS
            </p>
          </div>

          <div className="flex items-center gap-6 text-xs font-mono text-[#FAF8F1]/80">
            <span>Established: <strong className="text-[#F4B942] font-semibold">2012</strong></span>
            <span className="text-[#FFD978]/40">•</span>
            <span>Scale: <strong className="text-[#FFD978] font-semibold">50+ Professionals</strong></span>
          </div>
        </div>

        {/* 5-Column Responsive Navigation Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 mb-16">
          
          {/* Column 1 — Firm & Practice */}
          <div>
            <h3 className="text-xs font-mono font-bold tracking-[0.2em] text-[#F4B942] uppercase mb-4 block">
              FIRM &amp; PRACTICE
            </h3>
            <ul className="space-y-2.5 text-xs text-[#FAF8F1]">
              <li>
                <Link href="/about" className="hover:text-[#F4B942] transition-colors">
                  About the Practice
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#F4B942] transition-colors">
                  Services Overview
                </Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-[#F4B942] transition-colors">
                  Industry Practice
                </Link>
              </li>
              <li>
                <Link href="/insights" className="hover:text-[#F4B942] transition-colors">
                  Insights &amp; Briefings
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#F4B942] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2 — Core Services */}
          <div>
            <h3 className="text-xs font-mono font-bold tracking-[0.2em] text-[#F4B942] uppercase mb-4 block">
              CORE SERVICES
            </h3>
            <ul className="space-y-2.5 text-xs text-[#FAF8F1]">
              <li>
                <Link href="/services/virtual-cfo" className="hover:text-[#F4B942] transition-colors">
                  Virtual CFO
                </Link>
              </li>
              <li>
                <Link href="/services/audit-assurance" className="hover:text-[#F4B942] transition-colors">
                  Audit &amp; Assurance
                </Link>
              </li>
              <li>
                <Link href="/services/business-advisory" className="hover:text-[#F4B942] transition-colors">
                  Business Advisory
                </Link>
              </li>
              <li>
                <Link href="/services/corporate-advisory" className="hover:text-[#F4B942] transition-colors">
                  Corporate Advisory
                </Link>
              </li>
              <li>
                <Link href="/services/accounting-bookkeeping" className="hover:text-[#F4B942] transition-colors">
                  Accounting &amp; Bookkeeping
                </Link>
              </li>
              <li>
                <Link href="/services/tax-planning" className="hover:text-[#F4B942] transition-colors">
                  Tax Planning
                </Link>
              </li>
              <li>
                <Link href="/services/compliance" className="hover:text-[#F4B942] transition-colors">
                  Compliance Management
                </Link>
              </li>
              <li>
                <Link href="/services/roc-filing" className="hover:text-[#F4B942] transition-colors">
                  ROC Filing
                </Link>
              </li>
              <li>
                <Link href="/services/tds-compliance" className="hover:text-[#F4B942] transition-colors">
                  TDS Compliance
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 — Industries */}
          <div>
            <h3 className="text-xs font-mono font-bold tracking-[0.2em] text-[#F4B942] uppercase mb-4 block">
              INDUSTRIES
            </h3>
            <ul className="space-y-2.5 text-xs text-[#FAF8F1]">
              <li>
                <Link href="/industries/healthcare" className="hover:text-[#F4B942] transition-colors">
                  Hospitals &amp; Healthcare
                </Link>
              </li>
              <li>
                <Link href="/industries/manufacturing" className="hover:text-[#F4B942] transition-colors">
                  Manufacturers
                </Link>
              </li>
              <li>
                <Link href="/industries/real-estate" className="hover:text-[#F4B942] transition-colors">
                  Real Estate
                </Link>
              </li>
              <li>
                <Link href="/industries/retail" className="hover:text-[#F4B942] transition-colors">
                  Retail &amp; Wholesalers
                </Link>
              </li>
              <li>
                <Link href="/industries/nbfc" className="hover:text-[#F4B942] transition-colors">
                  NBFCs
                </Link>
              </li>
              <li>
                <Link href="/industries/education" className="hover:text-[#F4B942] transition-colors">
                  Education
                </Link>
              </li>
              <li>
                <Link href="/industries/textiles" className="hover:text-[#F4B942] transition-colors">
                  Textiles
                </Link>
              </li>
              <li>
                <Link href="/industries/pharma" className="hover:text-[#F4B942] transition-colors">
                  Pharma
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 — Practice Offices */}
          <div>
            <h3 className="text-xs font-mono font-bold tracking-[0.2em] text-[#F4B942] uppercase mb-4 block">
              PRACTICE OFFICES
            </h3>
            <div className="space-y-4 text-xs text-[#FFD978] leading-relaxed">
              <div>
                <p className="font-semibold text-[#FAF8F1] mb-1">Kozhikode Headquarters</p>
                <p className="text-[#FFD978]/90">
                  60/4798, Third Floor,<br />
                  Span Hotel Complex,<br />
                  Jail Road, Kozhikode &ndash; 673004,<br />
                  Kerala
                </p>
              </div>
              <div>
                <p className="font-semibold text-[#FAF8F1] mb-1">Mukkam Branch Office</p>
                <p className="text-[#FFD978]/90">
                  Mukkam,<br />
                  Kerala
                </p>
              </div>
            </div>
          </div>

          {/* Column 5 — Contact */}
          <div>
            <h3 className="text-xs font-mono font-bold tracking-[0.2em] text-[#F4B942] uppercase mb-4 block">
              CONTACT
            </h3>
            <div className="space-y-3 text-xs text-[#FFD978]">
              <div>
                <span className="block text-[10px] font-mono text-[#F4B942] uppercase tracking-wider mb-0.5 font-bold">
                  PHONE
                </span>
                <a href="tel:+919567523620" className="text-[#FAF8F1] hover:text-[#F4B942] transition-colors">
                  +91 95675 23620
                </a>
              </div>
              <div>
                <span className="block text-[10px] font-mono text-[#F4B942] uppercase tracking-wider mb-0.5 font-bold">
                  EMAIL
                </span>
                <a href="mailto:office@maneshrineesh.com" className="text-[#FAF8F1] hover:text-[#F4B942] transition-colors">
                  office@maneshrineesh.com
                </a>
              </div>
              <div>
                <span className="block text-[10px] font-mono text-[#F4B942] uppercase tracking-wider mb-0.5 font-bold">
                  WORKING HOURS
                </span>
                <p className="text-[#FAF8F1]/90">Mon &ndash; Fri: 9:30 AM &ndash; 5:30 PM</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#FFD978]/22 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-[#FAF8F1]/80">
          <p>© 2026 Manesh Rineesh &amp; Associates. All Rights Reserved.</p>

          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-[#F4B942] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/about" className="hover:text-[#F4B942] transition-colors">
              Terms of Use
            </Link>
            <Link href="/contact" className="hover:text-[#F4B942] transition-colors">
              Disclaimer
            </Link>
          </div>
        </div>

        {/* ICAI Regulatory Disclaimer */}
        <div className="mt-6 pt-4 border-t border-[#FFD978]/15 text-[11px] text-[#FFD978]/70 leading-relaxed max-w-4xl">
          Website communications are intended only to provide information regarding the firm&apos;s professional services and are subject to the applicable provisions of the Chartered Accountants Act, 1949, the Chartered Accountants Regulations, 1988, and the ICAI Code of Ethics.
        </div>
      </Container>
    </footer>
  );
}
