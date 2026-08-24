"use client";

import React from "react";
import Link from "next/link";
import Container from "@/components/layout/Container";

export default function Section12Footer() {
  return (
    <footer className="w-full bg-[#FAF8F1] text-[#111827] border-t border-[#FFD978]/40 pt-16 pb-12 font-sans">
      <Container>
        {/* Header Area — Firm Identity Block */}
        <div className="border-b border-[#FFD978]/40 pb-8 mb-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <p className="text-xl sm:text-2xl font-bold font-serif tracking-tight text-[#111827] mb-1">
              Manesh Rineesh &amp; Associates
            </p>
            <p className="text-xs font-mono font-bold tracking-[0.2em] text-[#1F3A8A] uppercase">
              CHARTERED ACCOUNTANTS
            </p>
          </div>

          <div className="flex items-center gap-6 text-xs font-mono text-[#4B5563]">
            <span>Established: <strong className="text-[#1F3A8A] font-semibold">2012</strong></span>
            <span className="text-[#FFD978]/60">•</span>
            <span>Scale: <strong className="text-[#1F3A8A] font-semibold">50+ Professionals</strong></span>
          </div>
        </div>

        {/* 5-Column Responsive Navigation Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 mb-16">
          
          {/* Column 1 — Firm & Practice */}
          <div>
            <h3 className="text-xs font-mono font-bold tracking-[0.2em] text-[#1F3A8A] uppercase mb-4 block">
              FIRM &amp; PRACTICE
            </h3>
            <ul className="space-y-2.5 text-xs text-[#111827]">
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
            <h3 className="text-xs font-mono font-bold tracking-[0.2em] text-[#1F3A8A] uppercase mb-4 block">
              CORE SERVICES
            </h3>
            <ul className="space-y-2.5 text-xs text-[#111827]">
              <li>
                <Link href="/services/virtual-cfo" className="hover:text-[#1F3A8A] transition-colors">
                  Virtual CFO
                </Link>
              </li>
              <li>
                <Link href="/services/audit-assurance" className="hover:text-[#1F3A8A] transition-colors">
                  Audit &amp; Assurance
                </Link>
              </li>
              <li>
                <Link href="/services/business-advisory" className="hover:text-[#1F3A8A] transition-colors">
                  Business Advisory
                </Link>
              </li>
              <li>
                <Link href="/services/corporate-advisory" className="hover:text-[#1F3A8A] transition-colors">
                  Corporate Advisory
                </Link>
              </li>
              <li>
                <Link href="/services/accounting-bookkeeping" className="hover:text-[#1F3A8A] transition-colors">
                  Accounting &amp; Bookkeeping
                </Link>
              </li>
              <li>
                <Link href="/services/tax-planning" className="hover:text-[#1F3A8A] transition-colors">
                  Tax Planning
                </Link>
              </li>
              <li>
                <Link href="/services/compliance" className="hover:text-[#1F3A8A] transition-colors">
                  Compliance Management
                </Link>
              </li>
              <li>
                <Link href="/services/roc-filing" className="hover:text-[#1F3A8A] transition-colors">
                  ROC Filing
                </Link>
              </li>
              <li>
                <Link href="/services/tds-compliance" className="hover:text-[#1F3A8A] transition-colors">
                  TDS Compliance
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 — Industries */}
          <div>
            <h3 className="text-xs font-mono font-bold tracking-[0.2em] text-[#1F3A8A] uppercase mb-4 block">
              INDUSTRIES
            </h3>
            <ul className="space-y-2.5 text-xs text-[#111827]">
              <li>
                <Link href="/industries/healthcare" className="hover:text-[#1F3A8A] transition-colors">
                  Hospitals &amp; Healthcare
                </Link>
              </li>
              <li>
                <Link href="/industries/manufacturing" className="hover:text-[#1F3A8A] transition-colors">
                  Manufacturers
                </Link>
              </li>
              <li>
                <Link href="/industries/real-estate" className="hover:text-[#1F3A8A] transition-colors">
                  Real Estate
                </Link>
              </li>
              <li>
                <Link href="/industries/retail" className="hover:text-[#1F3A8A] transition-colors">
                  Retail &amp; Wholesalers
                </Link>
              </li>
              <li>
                <Link href="/industries/nbfc" className="hover:text-[#1F3A8A] transition-colors">
                  NBFCs
                </Link>
              </li>
              <li>
                <Link href="/industries/education" className="hover:text-[#1F3A8A] transition-colors">
                  Education
                </Link>
              </li>
              <li>
                <Link href="/industries/textiles" className="hover:text-[#1F3A8A] transition-colors">
                  Textiles
                </Link>
              </li>
              <li>
                <Link href="/industries/pharma" className="hover:text-[#1F3A8A] transition-colors">
                  Pharma
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 — Practice Offices */}
          <div>
            <h3 className="text-xs font-mono font-bold tracking-[0.2em] text-[#1F3A8A] uppercase mb-4 block">
              PRACTICE OFFICES
            </h3>
            <div className="space-y-4 text-xs text-[#4B5563] leading-relaxed">
              <div>
                <p className="font-semibold text-[#111827] mb-1">Kozhikode Headquarters</p>
                <p className="text-[#4B5563]">
                  60/4798, Third Floor,<br />
                  Span Hotel Complex,<br />
                  Jail Road, Kozhikode &ndash; 673004,<br />
                  Kerala
                </p>
              </div>
              <div>
                <p className="font-semibold text-[#111827] mb-1">Mukkam Branch Office</p>
                <p className="text-[#4B5563]">
                  Mukkam,<br />
                  Kerala
                </p>
              </div>
            </div>
          </div>

          {/* Column 5 — Contact */}
          <div>
            <h3 className="text-xs font-mono font-bold tracking-[0.2em] text-[#1F3A8A] uppercase mb-4 block">
              CONTACT
            </h3>
            <div className="space-y-3 text-xs text-[#111827]">
              <div>
                <span className="block text-[10px] font-mono text-[#1F3A8A] uppercase tracking-wider mb-0.5 font-bold">
                  PHONE
                </span>
                <a href="tel:+919567523620" className="text-[#111827] hover:text-[#1F3A8A] transition-colors font-medium">
                  +91 95675 23620
                </a>
              </div>
              <div>
                <span className="block text-[10px] font-mono text-[#1F3A8A] uppercase tracking-wider mb-0.5 font-bold">
                  EMAIL
                </span>
                <a href="mailto:office@maneshrineesh.com" className="text-[#111827] hover:text-[#1F3A8A] transition-colors font-medium">
                  office@maneshrineesh.com
                </a>
              </div>
              <div>
                <span className="block text-[10px] font-mono text-[#1F3A8A] uppercase tracking-wider mb-0.5 font-bold">
                  WORKING HOURS
                </span>
                <p className="text-[#4B5563]">Mon &ndash; Fri: 9:30 AM &ndash; 5:30 PM</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#FFD978]/40 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-[#111827]/80">
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
        <div className="mt-6 pt-4 border-t border-[#FFD978]/30 text-[11px] text-[#111827]/70 leading-relaxed max-w-4xl">
          Website communications are intended only to provide information regarding the firm&apos;s professional services and are subject to the applicable provisions of the Chartered Accountants Act, 1949, the Chartered Accountants Regulations, 1988, and the ICAI Code of Ethics.
        </div>
      </Container>
    </footer>
  );
}
