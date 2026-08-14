import React from "react";
import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Manesh Rineesh & Associates | About the Practice",
  description:
    "Learn about Manesh Rineesh & Associates — Chartered Accountants established in 2012 in Kozhikode, serving commercial enterprises across South India.",
  alternates: {
    canonical: "https://maneshrineesh.com/about",
  },
  openGraph: {
    title: "Manesh Rineesh & Associates | About the Practice",
    description:
      "Learn about Manesh Rineesh & Associates — Chartered Accountants established in 2012 in Kozhikode, serving commercial enterprises across South India.",
    url: "https://maneshrineesh.com/about",
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
    title: "Manesh Rineesh & Associates | About the Practice",
    description:
      "Learn about Manesh Rineesh & Associates — Chartered Accountants established in 2012 in Kozhikode, serving commercial enterprises across South India.",
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
      name: "About",
      item: "https://maneshrineesh.com/about",
    },
  ],
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text)] overflow-x-hidden selection:bg-[var(--gold)] selection:text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <HeroNav />
      <AboutHero />
      <AboutWhoWeAre />
      <AboutLeadership />
      <AboutPhilosophy />
      <AboutMission />
      <AboutVision />
      <AboutValues />
      <AboutGlance />
      <ConsultationCTA id="consultation" />
      <Section12Footer />
    </main>
  );
}
