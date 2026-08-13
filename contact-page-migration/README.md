# Contact Page Self-Contained Migration Package

This folder contains the complete, self-contained implementation of the **Contact Page** from **Manesh Rineesh & Associates** (`mra-website`), ready to be integrated into any new Next.js project using App Router.

---

## 1. Original Location & Main Entry Component
- **Original Page Route:** `src/app/contact/page.tsx`
- **Main Client Entry Component:** `src/components/contact/ContactPageClient.tsx`

---

## 2. Directory & File Inventory

```
contact-page-migration/
├── README.md
│
├── page/
│   └── page.tsx                      # App Router page file with metadata & JSON-LD Breadcrumbs
│
├── components/
│   ├── contact/
│   │   └── ContactPageClient.tsx     # Client layout combining CTA & Practice Presence sections
│   ├── consultation/
│   │   └── ConsultationCTA.tsx        # 4-step guided intake form & editorial practice panel
│   ├── about/
│   │   └── PracticePresenceSection.tsx # HQ & Mukkam office cards with maps & animated count-ups
│   └── layout/
│       └── Container.tsx             # Standard max-w-7xl responsive layout container
│
├── styles/
│   └── contact-styles.css            # Custom gold scrollbar styles & keyframe fade animations
│
├── assets/                           # All icons & maps are embedded inline (no external image files)
│   ├── images/
│   ├── icons/
│   └── fonts/
│
├── data/
│   └── site-config.ts                # Site metadata & canonical URL configuration
│
└── dependencies/
    ├── app/
    │   └── actions/
    │       └── consultation.ts       # Server Action for guided consultation intake & Resend API
    ├── lib/
    │   └── utils.ts                  # Classname merging helper (`cn`)
    └── types/
        ├── metadata.ts               # Metadata type definitions
        └── content.ts                # Content type definitions
```

---

## 3. Required npm Packages

Install the following packages in your new Next.js project:

```bash
npm install clsx tailwind-merge
```

*(Note: Uses native Next.js `fetch` API for Resend — no SDK installation required).*

---

## 4. Required Environment Variables

Configure these in your target project's `.env.local`:

```env
# Resend API Key for dispatching email notifications
RESEND_API_KEY="re_..."

# Optional override for recipient team email (defaults to office@maneshrineesh.com)
CONSULTATION_RECEIVER_EMAIL="office@maneshrineesh.com"

# Optional override for sender email identity
CONSULTATION_FROM_EMAIL="Manesh Rineesh & Associates <onboarding@resend.dev>"

# Base URL for canonical links & JSON-LD breadcrumb schema
NEXT_PUBLIC_SITE_URL="https://maneshrineesh.com"
```

---

## 5. Tailwind CSS & Font Configuration

Ensure your `tailwind.config.js` or global CSS supports:
- **Serif Font:** `font-serif` (e.g. Playfair Display or Cormorant Garamond)
- **Sans Font:** `font-sans` (e.g. Inter or Plus Jakarta Sans)
- **Mono Font:** `font-mono` (e.g. JetBrains Mono)
- **Key Brand Colors:**
  - Dark Charcoal: `#0D0D0D`
  - Off-White Background: `#FAF8F5`
  - Warm Gold Accents: `#FBBF24` and `#C89B3C`

---

## 6. Step-by-Step Integration Guide

1. **Copy Files to Target Project:**
   - Copy `page/page.tsx` → `src/app/contact/page.tsx`
   - Copy `components/contact/ContactPageClient.tsx` → `src/components/contact/ContactPageClient.tsx`
   - Copy `components/consultation/ConsultationCTA.tsx` → `src/components/consultation/ConsultationCTA.tsx`
   - Copy `components/about/PracticePresenceSection.tsx` → `src/components/about/PracticePresenceSection.tsx`
   - Copy `components/layout/Container.tsx` → `src/components/layout/Container.tsx`
   - Copy `dependencies/app/actions/consultation.ts` → `src/app/actions/consultation.ts`
   - Copy `dependencies/lib/utils.ts` → `src/lib/utils.ts`
   - Copy `data/site-config.ts` → `src/content/site-config.ts`

2. **Path Alias Alignment:**
   - The components rely on standard Next.js path alias `@/` pointing to `src/`. Ensure your `tsconfig.json` includes:
     ```json
     "compilerOptions": {
       "paths": {
         "@/*": ["./src/*"]
       }
     }
     ```

3. **Global Layout Note (Header & Footer):**
   - The Contact page renders inside your project's root `app/layout.tsx`. Your existing site Header and Footer will frame this page naturally without any modification.
