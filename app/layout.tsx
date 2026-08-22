import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://maneshrineesh.com"),
  title: {
    default: "Manesh Rineesh & Associates | Chartered Accountants",
    template: "%s",
  },
  description:
    "Executive chartered accountancy, Virtual CFO, corporate tax advisory, business valuation, and statutory assurance practice based in South India.",
  alternates: {
    canonical: "https://maneshrineesh.com/",
  },
  openGraph: {
    title: "Manesh Rineesh & Associates | Chartered Accountants",
    description:
      "Executive chartered accountancy, Virtual CFO, corporate tax advisory, business valuation, and statutory assurance practice based in South India.",
    url: "https://maneshrineesh.com/",
    siteName: "Manesh Rineesh & Associates",
    locale: "en_IN",
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
    title: "Manesh Rineesh & Associates | Chartered Accountants",
    description:
      "Executive chartered accountancy, Virtual CFO, corporate tax advisory, business valuation, and statutory assurance practice based in South India.",
    images: ["/images/section-02-team.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "googleba615f7bdd4d41b2.html",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AccountingService",
      "@id": "https://maneshrineesh.com/#organization",
      "name": "Manesh Rineesh & Associates",
      "legalName": "Manesh Rineesh & Associates, Chartered Accountants",
      "alternateName": "MR&A Chartered Accountants",
      "url": "https://maneshrineesh.com/",
      "logo": "https://maneshrineesh.com/icon.ico",
      "image": "https://maneshrineesh.com/images/section-02-team.jpg",
      "description":
        "Executive chartered accountancy, Virtual CFO, corporate tax advisory, business valuation, and statutory assurance practice based in Kozhikode, Kerala, serving commercial enterprises across South India.",
      "foundingDate": "2012",
      "telephone": "+91 495 272 2455",
      "email": "info@mraca.in",
      "priceRange": "$$",
      "address": [
        {
          "@type": "PostalAddress",
          "streetAddress":
            "60/4798, Third Floor, Span Hotel Complex, Jail Road",
          "addressLocality": "Kozhikode",
          "addressRegion": "Kerala",
          "postalCode": "673004",
          "addressCountry": "IN",
        },
        {
          "@type": "PostalAddress",
          "streetAddress": "14/629, Nefna Complex, Mukkam",
          "addressLocality": "Kozhikode",
          "addressRegion": "Kerala",
          "postalCode": "673602",
          "addressCountry": "IN",
        },
      ],
      "founder": [
        {
          "@type": "Person",
          "@id": "https://maneshrineesh.com/#manesh-kumar",
          "name": "CA. Manesh Kumar Kuttampoyil",
          "jobTitle": "Founder & Senior Partner",
          "worksFor": { "@id": "https://maneshrineesh.com/#organization" },
          "sameAs": [
            "https://www.linkedin.com/in/manesh-kumar-24015b83/",
            "https://www.instagram.com/ca_manesh/",
          ],
        },
        {
          "@type": "Person",
          "@id": "https://maneshrineesh.com/#rineesh-kumar",
          "name": "CA. Rineesh Kumar C.K.",
          "jobTitle": "Partner",
          "worksFor": { "@id": "https://maneshrineesh.com/#organization" },
          "sameAs": [
            "https://www.linkedin.com/in/ca-rineesh-kumar-6aa86a38/",
            "https://www.instagram.com/carineesh/",
          ],
        },
      ],
      "sameAs": [
        "https://www.linkedin.com/in/manesh-kumar-24015b83/",
        "https://www.linkedin.com/in/ca-rineesh-kumar-6aa86a38/",
        "https://www.instagram.com/ca_manesh/",
        "https://www.instagram.com/carineesh/",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://maneshrineesh.com/#website",
      "url": "https://maneshrineesh.com/",
      "name": "Manesh Rineesh & Associates",
      "publisher": { "@id": "https://maneshrineesh.com/#organization" },
      "inLanguage": "en-IN",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
