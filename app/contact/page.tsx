import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/content/site-config";
import HeroNav from "@/components/sections/Section01Hero/HeroNav";
import { ContactPageClient } from "@/components/contact/ContactPageClient";
import Section12Footer from "@/components/sections/Section12Footer/Section12Footer";

export const metadata: Metadata = {
  title: "Manesh Rineesh & Associates | Contact & Office Locations",
  description:
    "Connect with Manesh Rineesh & Associates to discuss your financial, tax, audit, or business decision requirements. Offices in Kozhikode HQ & Mukkam branch.",
  alternates: {
    canonical: `${siteConfig.baseUrl}/contact`,
  },
  openGraph: {
    title: "Manesh Rineesh & Associates | Contact & Office Locations",
    description:
      "Connect with Manesh Rineesh & Associates to discuss your financial, tax, audit, or business decision requirements. Offices in Kozhikode HQ & Mukkam branch.",
    url: `${siteConfig.baseUrl}/contact`,
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
    title: "Manesh Rineesh & Associates | Contact & Office Locations",
    description:
      "Connect with Manesh Rineesh & Associates to discuss your financial, tax, audit, or business decision requirements. Offices in Kozhikode HQ & Mukkam branch.",
    images: ["/images/section-02-team.jpg"],
  },
};

interface ContactPageProps {
  searchParams?: Promise<{
    focus?: string;
    service?: string;
    industry?: string;
    topic?: string;
  }>;
}

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const resolvedParams = searchParams ? await searchParams : {};
  const initialTopicId =
    resolvedParams.topic || resolvedParams.service || resolvedParams.focus || undefined;
  const initialIndustry = resolvedParams.industry || undefined;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.baseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Contact",
        item: `${siteConfig.baseUrl}/contact`,
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text)] overflow-x-hidden selection:bg-[var(--gold)] selection:text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <HeroNav />
      <ContactPageClient
        initialTopicId={initialTopicId}
        initialIndustry={initialIndustry}
      />
      <Section12Footer />
    </main>
  );
}
