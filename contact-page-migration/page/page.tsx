import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/content/site-config";
import { ContactPageClient } from "@/components/contact/ContactPageClient";

export const metadata: Metadata = {
  title: "Partner Consultation & Office Locations | Manesh Rineesh & Associates",
  description:
    "Connect with Manesh Rineesh & Associates to discuss your financial, tax, audit, or business decision requirements. Offices in Kozhikode HQ & Mukkam branch.",
  alternates: {
    canonical: `${siteConfig.baseUrl}/contact`,
  },
  openGraph: {
    title: "Partner Consultation & Office Locations | Manesh Rineesh & Associates",
    description:
      "Connect with Manesh Rineesh & Associates to discuss your financial, tax, audit, or business decision requirements. Offices in Kozhikode HQ & Mukkam branch.",
    url: `${siteConfig.baseUrl}/contact`,
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
    <div className="bg-[#FAF8F5] text-slate-950 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ContactPageClient
        initialTopicId={initialTopicId}
        initialIndustry={initialIndustry}
      />
    </div>
  );
}
