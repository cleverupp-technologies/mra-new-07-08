export interface SiteConfig {
  name: string;
  shortName: string;
  legalName: string;
  description: string;
  baseUrl: string;
  defaultOgImage: string;
  locale: string;
}

export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface HeaderContent {
  brandName: string;
  navItems: NavItem[];
}

export interface FooterContent {
  brandName: string;
  legalText: string;
  links: NavItem[];
}
