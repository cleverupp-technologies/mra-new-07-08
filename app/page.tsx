import type { Metadata } from "next";
import HomePage from "@/components/pages/HomePage";

export const metadata: Metadata = {
  title: "Manesh Rineesh & Associates | Business Decision Advisory",
  description:
    "Chartered Accountancy firm in Kozhikode providing Virtual CFO, statutory audit, tax advisory, and financial decision clarity for growing businesses.",
  alternates: {
    canonical: "https://maneshrineesh.com/",
  },
  openGraph: {
    title: "Manesh Rineesh & Associates | Business Decision Advisory",
    description:
      "Chartered Accountancy firm in Kozhikode providing Virtual CFO, statutory audit, tax advisory, and financial decision clarity for growing businesses.",
    url: "https://maneshrineesh.com/",
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
    title: "Manesh Rineesh & Associates | Business Decision Advisory",
    description:
      "Chartered Accountancy firm in Kozhikode providing Virtual CFO, statutory audit, tax advisory, and financial decision clarity for growing businesses.",
    images: ["/images/section-02-team.jpg"],
  },
};

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://maneshrineesh.com/#webpage",
  "url": "https://maneshrineesh.com/",
  "name": "Manesh Rineesh & Associates | Chartered Accountants & Advisory",
  "description":
    "Chartered Accountancy firm in Kozhikode providing Virtual CFO, statutory audit, tax advisory, and financial decision clarity for growing businesses.",
  "isPartOf": { "@id": "https://maneshrineesh.com/#website" },
  "about": { "@id": "https://maneshrineesh.com/#organization" },
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
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <HomePage />
    </>
  );
}
