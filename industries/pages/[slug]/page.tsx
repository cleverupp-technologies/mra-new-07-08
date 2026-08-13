import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { siteConfig } from "@/content/site-config";
import {
  getAllPublishedIndustries,
  getIndustryBySlug,
  getProblemsForIndustry,
  getProblemContextForIndustry,
  getServicesForProblem,
  getClientExperiencesForContext,
} from "@/content/v2/repository";
import { V3IndustryPage } from "@/components/industries/V3IndustryPage";

interface IndustryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const industries = getAllPublishedIndustries();
  return industries.map((ind) => ({
    slug: ind.slug,
  }));
}

export async function generateMetadata({
  params,
}: IndustryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    notFound();
  }

  const metaTitle =
    industry.seo.metaTitle || `${industry.name} | Manesh Rineesh & Associates`;
  const metaDescription =
    industry.seo.metaDescription || industry.description;
  const canonicalUrl = `${siteConfig.baseUrl}/industries/${industry.slug}`;

  return {
    title: metaTitle,
    description: metaDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: canonicalUrl,
    },
  };
}

export default async function IndustryDetailPage({
  params,
}: IndustryPageProps) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    notFound();
  }

  const problems = getProblemsForIndustry(slug);

  // Pre-fetch problem contexts, services, and experiences for every problem
  const problemContextsMap = Object.fromEntries(
    problems.map((p) => [p.id, getProblemContextForIndustry(p, industry.id)])
  );

  const servicesMap = Object.fromEntries(
    problems.map((p) => [p.id, getServicesForProblem(p.id)])
  );

  const experiencesMap = Object.fromEntries(
    problems.map((p) => [
      p.id,
      getClientExperiencesForContext(industry.id, p.id),
    ])
  );

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
        name: "Industries",
        item: `${siteConfig.baseUrl}/#industry-welcome`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: industry.name,
        item: `${siteConfig.baseUrl}/industries/${industry.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <V3IndustryPage
        industry={industry}
        problems={problems}
        problemContextsMap={problemContextsMap}
        servicesMap={servicesMap}
        experiencesMap={experiencesMap}
      />
    </>
  );
}
