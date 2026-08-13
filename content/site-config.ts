export interface SiteConfig {
  name: string;
  shortName: string;
  legalName: string;
  description: string;
  baseUrl: string;
  defaultOgImage: string;
  locale: string;
}

export const siteConfig: SiteConfig = {
  name: "Manesh Rineesh & Associates",
  shortName: "MR&A",
  legalName: "Manesh Rineesh & Associates, Chartered Accountants",
  description: "Official portal of Manesh Rineesh & Associates, Chartered Accountants.",
  baseUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://maneshrineesh.com",
  defaultOgImage: "/images/og-default.jpg",
  locale: "en_IN",
};
