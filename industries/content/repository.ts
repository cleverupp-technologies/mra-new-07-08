/**
 * V2 Content Repository
 *
 * THE ONLY FILE page components and UI components should import
 * for V2 content. This is the CMS-ready boundary.
 *
 * Current implementation: reads from local TypeScript data files.
 * Future implementation: swap data sources here without touching any
 * page or component. The contract (function signatures and return types)
 * remains stable regardless of content source.
 *
 * ┌─────────────────────────────┐
 * │  Local .ts data files       │  ← current
 * │  or                         │
 * │  CMS API / SDK              │  ← future
 * └────────────┬────────────────┘
 *              │
 *              ▼
 * ┌─────────────────────────────┐
 * │  repository.ts (this file)  │  ← stable contract
 * └────────────┬────────────────┘
 *              │
 *              ▼
 * ┌─────────────────────────────┐
 * │  Page components / routes   │
 * └─────────────────────────────┘
 *
 * ORDERING RULES (applied to all list queries):
 *   1. published === true only (unless explicitly requested otherwise)
 *   2. Relationship relevance (exact match > partial match)
 *   3. featured === true first
 *   4. Lower priority number = higher in list
 *   5. Recency (publishedAt) as tiebreaker
 */

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

// ─────────────────────────────────────────────────────────────────────────────
// ORDERING HELPERS
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Deterministic editorial sort:
 *   1. featured first
 *   2. lower priority number first
 *   3. recency (publishedAt) as tiebreaker — newer first
 */
function editorialSort<T extends { featured: boolean; priority: number; publishedAt?: string }>(
  items: T[]
): T[] {
  return [...items].sort((a, b) => {
    if (a.featured !== b.featured) return a.featured ? -1 : 1;
    if (a.priority !== b.priority) return a.priority - b.priority;
    // Recency tiebreaker — treat undefined as oldest
    const aDate = a.publishedAt ? new Date(a.publishedAt).getTime() : 0;
    const bDate = b.publishedAt ? new Date(b.publishedAt).getTime() : 0;
    return bDate - aDate;
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// INDUSTRY QUERIES
// ─────────────────────────────────────────────────────────────────────────────

/** All published industries, ordered by editorial priority. */
export function getAllPublishedIndustries(): V2Industry[] {
  return editorialSort(v2Industries.filter((i) => i.published));
}

/** All industries including unpublished — for admin/build use only. */
export function getAllIndustriesRaw(): readonly V2Industry[] {
  return v2Industries;
}

/** Look up a single industry by slug. Returns null if not found or unpublished. */
export function getIndustryBySlug(slug: string): V2Industry | null {
  return v2Industries.find((i) => i.slug === slug && i.published) ?? null;
}

/** Slim card representations for industry grid rendering. */
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

// ─────────────────────────────────────────────────────────────────────────────
// PROBLEM QUERIES
// ─────────────────────────────────────────────────────────────────────────────

/** All published problems, ordered by editorial priority. */
export function getAllPublishedProblems(): V2Problem[] {
  return editorialSort(v2Problems.filter((p) => p.published));
}

/** Look up a single problem by its stable ID. */
export function getProblemById(id: string): V2Problem | null {
  return v2Problems.find((p) => p.id === id) ?? null;
}

/** Look up a problem by slug. */
export function getProblemBySlug(slug: string): V2Problem | null {
  return v2Problems.find((p) => p.slug === slug && p.published) ?? null;
}

/**
 * Get all published problems for a given industry, ordered editorially.
 * Respects the order of industryId.problemIds for industry-defined sequencing.
 */
export function getProblemsForIndustry(industrySlug: string): V2Problem[] {
  const industry = getIndustryBySlug(industrySlug);
  if (!industry) return [];

  const orderedIds = industry.problemIds;
  const published = v2Problems.filter(
    (p) => p.published && p.industryIds.includes(industry.id)
  );

  const inOrder = orderedIds
    .map((id) => published.find((p) => p.id === id))
    .filter((p): p is V2Problem => p !== undefined);

  const remainder = editorialSort(
    published.filter((p) => !orderedIds.includes(p.id))
  );

  return [...inOrder, ...remainder];
}

/**
 * Get the industry-specific framing for a problem, if available.
 * Returns the problem's default text if no override exists for the industry.
 */
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

// ─────────────────────────────────────────────────────────────────────────────
// SERVICE QUERIES
// ─────────────────────────────────────────────────────────────────────────────

/** All published services. */
export function getAllPublishedServices(): V2Service[] {
  return editorialSort(v2Services.filter((s) => s.published));
}

/** Look up a single service by slug. */
export function getServiceBySlug(slug: string): V2Service | null {
  return v2Services.find((s) => s.slug === slug && s.published) ?? null;
}

/**
 * Get published services that address a specific problem.
 * Many-to-many: one problem may be addressed by multiple services.
 */
export function getServicesForProblem(problemId: string): V2Service[] {
  return editorialSort(
    v2Services.filter((s) => s.published && s.problemIds.includes(problemId))
  );
}

/**
 * Get published problems addressed by a specific service.
 */
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

/**
 * Get the primary related services for a given service (cross-linking).
 */
export function getRelatedServices(serviceSlug: string): V2Service[] {
  const service = getServiceBySlug(serviceSlug);
  if (!service) return [];
  return service.relatedServiceSlugs
    .map((slug) => getServiceBySlug(slug))
    .filter((s): s is V2Service => s !== null);
}

/**
 * Get published services most relevant to an industry.
 * Combines services explicitly tagged to the industry + services addressing
 * problems of that industry.
 */
export function getServicesForIndustry(industrySlug: string): V2Service[] {
  const industry = getIndustryBySlug(industrySlug);
  if (!industry) return [];

  const relevantServiceIds = new Set<string>();

  // Direct industry tagging
  v2Services
    .filter((s) => s.published && s.industryIds?.includes(industry.id))
    .forEach((s) => relevantServiceIds.add(s.id));

  // Via problem relationships
  v2Problems
    .filter((p) => p.published && p.industryIds.includes(industry.id))
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

/**
 * Get relevant industry contexts for a service.
 * Finds published industries linked directly via service.industryIds OR via shared problemIds.
 */
export function getIndustryContextsForService(
  serviceSlug: string
): V2ServiceIndustryContext[] {
  const service = getServiceBySlug(serviceSlug);
  if (!service) return [];

  const allIndustries = getAllPublishedIndustries();
  const allProblems = getAllPublishedProblems();

  // Find all problems addressed by this service
  const serviceProblems = allProblems.filter((p) =>
    service.problemIds.includes(p.id)
  );

  const results: V2ServiceIndustryContext[] = [];

  for (const industry of allIndustries) {
    const isDirectlyTagged = service.industryIds?.includes(industry.id);

    // Problems in this industry addressed by this service
    const matchingProblems = serviceProblems.filter((p) =>
      p.industryIds.includes(industry.id)
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

/**
 * Get client experiences for a service, optionally prioritized by active industry.
 */
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

// ─────────────────────────────────────────────────────────────────────────────
// CLIENT EXPERIENCE QUERIES
// ─────────────────────────────────────────────────────────────────────────────

/** Convert a full record to a slim card for list/grid rendering. */
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

/** All published client experiences, ordered editorially. */
export function getAllPublishedClientExperiences(): V2ClientExperience[] {
  return editorialSort(v2ClientExperiences.filter((ce) => ce.published));
}

/** All published experiences as slim cards. */
export function getAllExperienceCards(): V2ExperienceCard[] {
  return getAllPublishedClientExperiences().map(toExperienceCard);
}

/** Look up a single experience by slug. */
export function getClientExperienceBySlug(slug: string): V2ClientExperience | null {
  return v2ClientExperiences.find((ce) => ce.slug === slug && ce.published) ?? null;
}

/**
 * Client experiences relevant to an industry.
 * A record is included if its industryIds contains the given industry ID.
 */
export function getClientExperiencesForIndustry(industrySlug: string): V2ExperienceCard[] {
  const industry = getIndustryBySlug(industrySlug);
  if (!industry) return [];
  return editorialSort(
    v2ClientExperiences.filter(
      (ce) => ce.published && ce.industryIds.includes(industry.id)
    )
  ).map(toExperienceCard);
}

/**
 * Client experiences relevant to a specific problem.
 */
export function getClientExperiencesForProblem(problemId: string): V2ExperienceCard[] {
  return editorialSort(
    v2ClientExperiences.filter(
      (ce) => ce.published && ce.problemIds.includes(problemId)
    )
  ).map(toExperienceCard);
}

/**
 * Client experiences relevant to a specific service.
 */
export function getClientExperiencesForService(serviceSlug: string): V2ExperienceCard[] {
  const service = getServiceBySlug(serviceSlug);
  if (!service) return [];
  return editorialSort(
    v2ClientExperiences.filter(
      (ce) => ce.published && ce.serviceIds.includes(service.id)
    )
  ).map(toExperienceCard);
}

/**
 * Client experiences relevant to a specific industry and problem context.
 * Prioritizes records matching both industry + problem, falling back to problem match.
 */
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

// ─────────────────────────────────────────────────────────────────────────────
// INDUSTRY UPDATE QUERIES
// ─────────────────────────────────────────────────────────────────────────────

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

/** All published industry updates, ordered editorially. */
export function getAllPublishedIndustryUpdates(): V2IndustryUpdate[] {
  return editorialSort(v2IndustryUpdates.filter((u) => u.published));
}

/** Look up a single industry update by slug. */
export function getIndustryUpdateBySlug(slug: string): V2IndustryUpdate | null {
  return v2IndustryUpdates.find((u) => u.slug === slug && u.published) ?? null;
}

/** Get published updates relevant to a specific industry. */
export function getIndustryUpdatesForIndustry(industrySlug: string): V2UpdateCard[] {
  const industry = getIndustryBySlug(industrySlug);
  if (!industry) return [];
  return editorialSort(
    v2IndustryUpdates.filter(
      (u) => u.published && u.industryIds.includes(industry.id)
    )
  ).map(toUpdateCard);
}

/** Get published updates matching any of the provided topic strings (case-insensitive). */
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

// ─────────────────────────────────────────────────────────────────────────────
// CROSS-ENTITY RELEVANCE QUERIES
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Get all problems related to a given service (reverse lookup).
 * Many-to-many: a service may address many problems.
 */
export function getRelatedProblems(serviceSlug: string): V2Problem[] {
  const service = getServiceBySlug(serviceSlug);
  if (!service) return [];
  return editorialSort(
    v2Problems.filter(
      (p) => p.published && p.serviceIds.includes(service.id)
    )
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// GRACEFUL ABSENCE HELPERS
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Returns true if an industry has at least one published client experience.
 * Use this to conditionally render experience sections — never render empty.
 */
export function industryHasPublishedExperiences(industrySlug: string): boolean {
  const industry = getIndustryBySlug(industrySlug);
  if (!industry) return false;
  return v2ClientExperiences.some(
    (ce) => ce.published && ce.industryIds.includes(industry.id)
  );
}

/**
 * Returns true if a service has at least one published client experience.
 */
export function serviceHasPublishedExperiences(serviceSlug: string): boolean {
  const service = getServiceBySlug(serviceSlug);
  if (!service) return false;
  return v2ClientExperiences.some(
    (ce) => ce.published && ce.serviceIds.includes(service.id)
  );
}

/**
 * Returns true if an industry has at least one published update.
 */
export function industryHasPublishedUpdates(industrySlug: string): boolean {
  const industry = getIndustryBySlug(industrySlug);
  if (!industry) return false;
  return v2IndustryUpdates.some(
    (u) => u.published && u.industryIds.includes(industry.id)
  );
}

/**
 * Returns true if an industry has a verified client count.
 * Used to decide whether to render proof blocks — never render undefined/0+.
 */
export function industryHasVerifiedClientCount(industrySlug: string): boolean {
  const industry = getIndustryBySlug(industrySlug);
  return typeof industry?.verifiedClientCount === "number";
}

/**
 * Returns true if a service has a verified client count.
 */
export function serviceHasVerifiedClientCount(serviceSlug: string): boolean {
  const service = getServiceBySlug(serviceSlug);
  return typeof service?.verifiedClientCount === "number";
}
