export interface V2SEO {
  metaTitle: string;
  metaDescription: string;
  canonicalPath?: string;
}

export interface V2Industry {
  id: string;
  slug: string;
  name: string;
  shortInsight: string;
  description: string;
  image: string | null;
  imageAlt: string | null;
  experienceContext: string | null;
  verifiedClientCount?: number;
  problemIds: string[];
  published: boolean;
  featured: boolean;
  priority: number;
  seo: V2SEO;
}

export interface V2ProblemApproachStep {
  title: string;
  description: string;
}

export interface V2ProblemIndustryContext {
  industryId: string;
  recognitionOverride?: string;
  explanationOverride?: string;
}

export interface V2Problem {
  id: string;
  slug: string;
  title: string;
  recognitionLine: string;
  explanation: string;
  industryIds: string[];
  serviceIds: string[];
  approachSteps?: V2ProblemApproachStep[];
  technicalContext?: string[];
  published: boolean;
  featured: boolean;
  priority: number;
  industryContexts?: V2ProblemIndustryContext[];
}

export interface V2Service {
  id: string;
  slug: string;
  title: string;
  description: string;
  problemIds: string[];
  industryIds?: string[];
  relatedServiceSlugs: string[];
  published: boolean;
  featured: boolean;
  priority: number;
  verifiedClientCount?: number;
  publishedAt?: string;
}

export interface V2ClientExperience {
  id: string;
  slug: string;
  title: string;
  anonymousBusinessType: string;
  shortPreview: string;
  industryIds: string[];
  problemIds: string[];
  serviceIds: string[];
  published: boolean;
  featured: boolean;
  priority: number;
  publishedAt?: string;
}

export interface V2IndustryUpdate {
  id: string;
  slug: string;
  title: string;
  summary: string;
  industryIds: string[];
  topics: string[];
  published: boolean;
  featured: boolean;
  priority: number;
  publishedAt?: string;
}

export interface V2IndustryCard {
  id: string;
  slug: string;
  name: string;
  shortInsight: string;
  image: string | null;
  imageAlt: string | null;
  href: string;
  priority: number;
}

export interface V2ExperienceCard {
  id: string;
  slug: string;
  title: string;
  anonymousBusinessType: string;
  shortPreview: string;
  industryIds: string[];
  problemIds: string[];
  serviceIds: string[];
  href: string;
  featured: boolean;
  priority: number;
  publishedAt?: string;
}

export interface V2UpdateCard {
  id: string;
  slug: string;
  title: string;
  summary: string;
  industryIds: string[];
  topics: string[];
  href: string;
  featured: boolean;
  priority: number;
  publishedAt?: string;
}
