import type {
  V2Industry,
  V2Problem,
  V2Service,
  V2ClientExperience,
  V2IndustryUpdate,
  V2ProblemIndustryContext,
  V2IndustryCard,
  V2ExperienceCard,
  V2UpdateCard,
} from "@/types/v2";

import { v2Industries } from "@/content/v2/industries";
import { v2Problems } from "@/content/v2/problems";
import { v2Services } from "@/content/v2/services";
import { v2ClientExperiences } from "@/content/v2/client-experiences";
import { v2IndustryUpdates } from "@/content/v2/industry-updates";

function editorialSort<T extends { featured: boolean; priority: number; publishedAt?: string }>(
  items: T[]
): T[] {
  return [...items].sort((a, b) => {
    if (a.featured !== b.featured) return a.featured ? -1 : 1;
    if (a.priority !== b.priority) return a.priority - b.priority;
    const aDate = a.publishedAt ? new Date(a.publishedAt).getTime() : 0;
    const bDate = b.publishedAt ? new Date(b.publishedAt).getTime() : 0;
    return bDate - aDate;
  });
}

export function getAllPublishedIndustries(): V2Industry[] {
  return editorialSort(v2Industries.filter((i) => i.published));
}

export function getAllIndustriesRaw(): readonly V2Industry[] {
  return v2Industries;
}

export function getIndustryBySlug(slug: string): V2Industry | null {
  const norm = slug.toLowerCase();
  return v2Industries.find((i) => (i.slug === norm || i.id === norm) && i.published) ?? null;
}

export function getIndustryCards(): V2IndustryCard[] {
  return getAllPublishedIndustries().map((i) => ({
    id: i.id,
    slug: i.slug,
    name: i.name,
    shortInsight: i.shortInsight,
    image: i.image,
    imageAlt: i.imageAlt,
    href: `/industries/${i.slug}`,
    priority: i.priority,
  }));
}

export function getAllPublishedProblems(): V2Problem[] {
  return editorialSort(v2Problems.filter((p) => p.published));
}

export function getProblemById(id: string): V2Problem | null {
  return v2Problems.find((p) => p.id === id) ?? null;
}

export function getProblemBySlug(slug: string): V2Problem | null {
  return v2Problems.find((p) => p.slug === slug && p.published) ?? null;
}

export function getProblemsForIndustry(industrySlug: string): V2Problem[] {
  const industry = getIndustryBySlug(industrySlug);
  if (!industry) return [];

  const orderedIds = industry.problemIds;
  const published = v2Problems.filter(
    (p) => p.published && (p.industryIds.includes(industry.id) || p.industryIds.includes(industry.slug))
  );

  const inOrder = orderedIds
    .map((id) => published.find((p) => p.id === id))
    .filter((p): p is V2Problem => p !== undefined);

  const remainder = editorialSort(
    published.filter((p) => !orderedIds.includes(p.id))
  );

  return [...inOrder, ...remainder];
}

export function getProblemContextForIndustry(
  problem: V2Problem,
  industryId: string
): { recognitionLine: string; explanation: string } {
  const ctx: V2ProblemIndustryContext | undefined = problem.industryContexts?.find(
    (c) => c.industryId === industryId
  );
  return {
    recognitionLine: ctx?.recognitionOverride ?? problem.recognitionLine,
    explanation: ctx?.explanationOverride ?? problem.explanation,
  };
}

export function getAllPublishedServices(): V2Service[] {
  return editorialSort(v2Services.filter((s) => s.published));
}

export function getServiceBySlug(slug: string): V2Service | null {
  return v2Services.find((s) => s.slug === slug && s.published) ?? null;
}

export function getServicesForProblem(problemId: string): V2Service[] {
  return editorialSort(
    v2Services.filter((s) => s.published && s.problemIds.includes(problemId))
  );
}

export function getProblemsForService(serviceSlug: string): V2Problem[] {
  const service = getServiceBySlug(serviceSlug);
  if (!service) return [];

  const published = v2Problems.filter(
    (p) =>
      p.published &&
      (service.problemIds.includes(p.id) || p.serviceIds.includes(service.id))
  );

  const orderedIds = service.problemIds;
  const inOrder = orderedIds
    .map((id) => published.find((p) => p.id === id))
    .filter((p): p is V2Problem => p !== undefined);

  const remainder = editorialSort(
    published.filter((p) => !orderedIds.includes(p.id))
  );

  return [...inOrder, ...remainder];
}

export function getRelatedServices(serviceSlug: string): V2Service[] {
  const service = getServiceBySlug(serviceSlug);
  if (!service) return [];
  return service.relatedServiceSlugs
    .map((slug) => getServiceBySlug(slug))
    .filter((s): s is V2Service => s !== null);
}

export function getServicesForIndustry(industrySlug: string): V2Service[] {
  const industry = getIndustryBySlug(industrySlug);
  if (!industry) return [];

  const relevantServiceIds = new Set<string>();

  v2Services
    .filter((s) => s.published && (s.industryIds?.includes(industry.id) || s.industryIds?.includes(industry.slug)))
    .forEach((s) => relevantServiceIds.add(s.id));

  v2Problems
    .filter((p) => p.published && (p.industryIds.includes(industry.id) || p.industryIds.includes(industry.slug)))
    .flatMap((p) => p.serviceIds)
    .forEach((id) => {
      const svc = v2Services.find((s) => s.id === id && s.published);
      if (svc) relevantServiceIds.add(svc.id);
    });

  return editorialSort(
    v2Services.filter((s) => relevantServiceIds.has(s.id))
  );
}

export interface V2ServiceIndustryContext {
  industry: V2Industry;
  problems: {
    problem: V2Problem;
    recognitionLine: string;
    explanation: string;
  }[];
}

export function getIndustryContextsForService(
  serviceSlug: string
): V2ServiceIndustryContext[] {
  const service = getServiceBySlug(serviceSlug);
  if (!service) return [];

  const allIndustries = getAllPublishedIndustries();
  const allProblems = getAllPublishedProblems();

  const serviceProblems = allProblems.filter((p) =>
    service.problemIds.includes(p.id)
  );

  const results: V2ServiceIndustryContext[] = [];

  for (const industry of allIndustries) {
    const isDirectlyTagged = service.industryIds?.includes(industry.id) || service.industryIds?.includes(industry.slug);

    const matchingProblems = serviceProblems.filter((p) =>
      p.industryIds.includes(industry.id) || p.industryIds.includes(industry.slug)
    );

    if (isDirectlyTagged || matchingProblems.length > 0) {
      const formattedProblems = matchingProblems.map((p) => {
        const ctx = getProblemContextForIndustry(p, industry.id);
        return {
          problem: p,
          recognitionLine: ctx.recognitionLine,
          explanation: ctx.explanation,
        };
      });

      results.push({
        industry,
        problems: formattedProblems,
      });
    }
  }

  return results;
}

function toExperienceCard(ce: V2ClientExperience): V2ExperienceCard {
  return {
    id: ce.id,
    slug: ce.slug,
    title: ce.title,
    anonymousBusinessType: ce.anonymousBusinessType,
    shortPreview: ce.shortPreview,
    industryIds: ce.industryIds,
    problemIds: ce.problemIds,
    serviceIds: ce.serviceIds,
    href: `/insights/client-experiences/${ce.slug}`,
    featured: ce.featured,
    priority: ce.priority,
    publishedAt: ce.publishedAt,
  };
}

export function getAllPublishedClientExperiences(): V2ClientExperience[] {
  return editorialSort(v2ClientExperiences.filter((ce) => ce.published));
}

export function getAllExperienceCards(): V2ExperienceCard[] {
  return getAllPublishedClientExperiences().map(toExperienceCard);
}

export function getClientExperienceBySlug(slug: string): V2ClientExperience | null {
  return v2ClientExperiences.find((ce) => ce.slug === slug && ce.published) ?? null;
}

export function getClientExperiencesForIndustry(industrySlug: string): V2ExperienceCard[] {
  const industry = getIndustryBySlug(industrySlug);
  if (!industry) return [];
  return editorialSort(
    v2ClientExperiences.filter(
      (ce) => ce.published && (ce.industryIds.includes(industry.id) || ce.industryIds.includes(industry.slug))
    )
  ).map(toExperienceCard);
}

export function getClientExperiencesForProblem(problemId: string): V2ExperienceCard[] {
  return editorialSort(
    v2ClientExperiences.filter(
      (ce) => ce.published && ce.problemIds.includes(problemId)
    )
  ).map(toExperienceCard);
}

export function getClientExperiencesForService(serviceSlug: string): V2ExperienceCard[] {
  const service = getServiceBySlug(serviceSlug);
  if (!service) return [];
  return editorialSort(
    v2ClientExperiences.filter(
      (ce) => ce.published && ce.serviceIds.includes(service.id)
    )
  ).map(toExperienceCard);
}

export function getClientExperiencesForContext(
  industryId: string,
  problemId: string
): V2ExperienceCard[] {
  const matchesContext = v2ClientExperiences.filter(
    (ce) =>
      ce.published &&
      ce.industryIds.includes(industryId) &&
      ce.problemIds.includes(problemId)
  );

  if (matchesContext.length > 0) {
    return editorialSort(matchesContext).map(toExperienceCard);
  }

  return editorialSort(
    v2ClientExperiences.filter(
      (ce) => ce.published && ce.problemIds.includes(problemId)
    )
  ).map(toExperienceCard);
}

export function getClientExperiencesForServiceContext(
  serviceSlug: string,
  industryId?: string
): V2ExperienceCard[] {
  const service = getServiceBySlug(serviceSlug);
  if (!service) return [];

  const allServiceExp = v2ClientExperiences.filter(
    (ce) => ce.published && ce.serviceIds.includes(service.id)
  );

  if (industryId) {
    const industryMatches = allServiceExp.filter((ce) =>
      ce.industryIds.includes(industryId)
    );
    if (industryMatches.length > 0) {
      return editorialSort(industryMatches).map(toExperienceCard);
    }
  }

  return editorialSort(allServiceExp).map(toExperienceCard);
}

function toUpdateCard(iu: V2IndustryUpdate): V2UpdateCard {
  return {
    id: iu.id,
    slug: iu.slug,
    title: iu.title,
    summary: iu.summary,
    industryIds: iu.industryIds,
    topics: iu.topics,
    href: `/insights/industry-updates/${iu.slug}`,
    featured: iu.featured,
    priority: iu.priority,
    publishedAt: iu.publishedAt,
  };
}

export function getAllPublishedIndustryUpdates(): V2IndustryUpdate[] {
  return editorialSort(v2IndustryUpdates.filter((u) => u.published));
}

export function getIndustryUpdateBySlug(slug: string): V2IndustryUpdate | null {
  return v2IndustryUpdates.find((u) => u.slug === slug && u.published) ?? null;
}

export function getIndustryUpdatesForIndustry(industrySlug: string): V2UpdateCard[] {
  const industry = getIndustryBySlug(industrySlug);
  if (!industry) return [];
  return editorialSort(
    v2IndustryUpdates.filter(
      (u) => u.published && (u.industryIds.includes(industry.id) || u.industryIds.includes(industry.slug))
    )
  ).map(toUpdateCard);
}

export function getIndustryUpdatesByTopic(topics: string[]): V2UpdateCard[] {
  const normalized = topics.map((t) => t.toLowerCase());
  return editorialSort(
    v2IndustryUpdates.filter(
      (u) =>
        u.published &&
        u.topics.some((t) => normalized.includes(t.toLowerCase()))
    )
  ).map(toUpdateCard);
}

export function getRelatedProblems(serviceSlug: string): V2Problem[] {
  const service = getServiceBySlug(serviceSlug);
  if (!service) return [];
  return editorialSort(
    v2Problems.filter(
      (p) => p.published && p.serviceIds.includes(service.id)
    )
  );
}

export function industryHasPublishedExperiences(industrySlug: string): boolean {
  const industry = getIndustryBySlug(industrySlug);
  if (!industry) return false;
  return v2ClientExperiences.some(
    (ce) => ce.published && (ce.industryIds.includes(industry.id) || ce.industryIds.includes(industry.slug))
  );
}

export function serviceHasPublishedExperiences(serviceSlug: string): boolean {
  const service = getServiceBySlug(serviceSlug);
  if (!service) return false;
  return v2ClientExperiences.some(
    (ce) => ce.published && ce.serviceIds.includes(service.id)
  );
}

export function industryHasPublishedUpdates(industrySlug: string): boolean {
  const industry = getIndustryBySlug(industrySlug);
  if (!industry) return false;
  return v2IndustryUpdates.some(
    (u) => u.published && (u.industryIds.includes(industry.id) || u.industryIds.includes(industry.slug))
  );
}

export function industryHasVerifiedClientCount(industrySlug: string): boolean {
  const industry = getIndustryBySlug(industrySlug);
  return typeof industry?.verifiedClientCount === "number";
}

export function serviceHasVerifiedClientCount(serviceSlug: string): boolean {
  const service = getServiceBySlug(serviceSlug);
  return typeof service?.verifiedClientCount === "number";
}
