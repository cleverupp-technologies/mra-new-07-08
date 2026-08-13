import React from "react";
import HeroNav from "@/components/sections/Section01Hero/HeroNav";
import { AboutHero } from "@/components/sections/about/AboutHero";
import AboutWhoWeAre from "@/components/sections/about/AboutWhoWeAre";
import AboutLeadership from "@/components/sections/about/AboutLeadership";
import AboutPhilosophy from "@/components/sections/about/AboutPhilosophy";
import AboutMission from "@/components/sections/about/AboutMission";
import AboutVision from "@/components/sections/about/AboutVision";
import AboutValues from "@/components/sections/about/AboutValues";
import AboutGlance from "@/components/sections/about/AboutGlance";
import { ConsultationCTA } from "@/components/consultation/ConsultationCTA";
import Section12Footer from "@/components/sections/Section12Footer/Section12Footer";

export const metadata = {
  title: "About The Practice | Manesh Rineesh & Associates",
  description: "Learn about Manesh Rineesh & Associates — Chartered Accountants established in 2012 in Kozhikode, serving commercial enterprises across South India.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text)] overflow-x-hidden selection:bg-[var(--gold)] selection:text-black">
      {/* Primary Navigation */}
      <HeroNav />

      {/* 01. Migrated Old About Hero */}
      <AboutHero />

      {/* 02. Who We Are */}
      <AboutWhoWeAre />

      {/* 03. Leadership Section */}
      <AboutLeadership />

      {/* 04. Strategy Before Compliance (Philosophy) */}
      <AboutPhilosophy />

      {/* 05. Our Mission */}
      <AboutMission />

      {/* 06. Our Vision */}
      <AboutVision />

      {/* 07. Our Values (Governing Principles) */}
      <AboutValues />

      {/* 08. Firm at a Glance */}
      <AboutGlance />

      {/* 09. Consultation CTA */}
      <ConsultationCTA id="consultation" />

      {/* 10. Institutional Footer */}
      <Section12Footer />
    </main>
  );
}
