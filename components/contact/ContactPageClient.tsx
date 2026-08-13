"use client";

/**
 * ContactPageClient — Synchronized Contact Page
 *
 * Reuses existing shared components without code duplication:
 * 1. Shared ConsultationCTA (Left contact info + Right 4-step decision selector journey)
 * 2. Shared PracticePresenceSection (Kozhikode HQ & Mukkom Branch offices, embedded maps, and action buttons from About page)
 */

import React from "react";
import { ConsultationCTA } from "@/components/consultation/ConsultationCTA";
import { PracticePresenceSection } from "@/components/about/PracticePresenceSection";

interface ContactPageClientProps {
  initialTopicId?: string;
  initialIndustry?: string;
}

export function ContactPageClient({
  initialTopicId,
  initialIndustry,
}: ContactPageClientProps) {
  return (
    <>
      {/* ─────────────────────────────────────────────────────────────────
          01 — SHARED CONSULTATION CTA SECTION
          - Left: Contact info (Headline, copy, phone, email, HQ address)
          - Right: 4-step decision selector journey
      ────────────────────────────────────────────────────────────────── */}
      <ConsultationCTA
        id="contact-consultation"
        initialTopicId={initialTopicId}
        initialIndustry={initialIndustry}
      />

      {/* ─────────────────────────────────────────────────────────────────
          02 — SHARED OFFICE LOCATIONS COMPONENT (FROM ABOUT PAGE)
          - Kozhikode HQ & Mukkom Branch offices
          - Embedded Google Maps
          - Action buttons & firm statistics
      ────────────────────────────────────────────────────────────────── */}
      <PracticePresenceSection />
    </>
  );
}

export default ContactPageClient;
