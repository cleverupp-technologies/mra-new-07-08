import type { SiteConfig, HeaderContent, FooterContent } from "../dependencies/types/metadata";

export const siteConfig: SiteConfig = {
  name: "Manesh Rineesh & Associates",
  shortName: "MR&A",
  legalName: "Manesh Rineesh & Associates, Chartered Accountants",
  description: "Official portal of Manesh Rineesh & Associates, Chartered Accountants.",
  baseUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://maneshrineesh.com",
  defaultOgImage: "/images/og-default.jpg",
  locale: "en_IN",
};
