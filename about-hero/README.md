# About Page Hero — Isolated Migration Package

This folder contains the self-contained implementation of the **About Page Hero Section** extracted directly from the original website (`mra-website`).

---

## 1. Source Location
- **Original Component Location:** `src/components/about/AboutHeroSection.tsx`
- **Original Overlay Location:** `src/components/common/HeroOverlay.tsx`
- **Original Asset Location:** `public/images/about-team-hero.jpg`
- **Original Usage:** `src/app/about/page.tsx`

---

## 2. Migrated Files & Assets

```
migration/about-hero/
├── README.md                           # Migration documentation & integration guide
├── AboutHero.tsx                       # Main self-contained Hero component
├── HeroOverlay.tsx                     # Cinematic dual-gradient overlay component
└── assets/
    └── images/
        └── about-team-hero.jpg         # Full-resolution background team photograph (205 KB)
```

---

## 3. Hero Composition & Assets Used

- **Background Imagery:** `assets/images/about-team-hero.jpg` (or `/images/about-team-hero.jpg` in Next.js `public/` directory).
- **Overlays:** Dual overlay composition via `HeroOverlay.tsx`:
  - **Mobile (< lg):** Vertical ambient gradient (`from-slate-950/50 via-slate-950/60 to-slate-950/80`).
  - **Desktop (≥ lg):** 90° directional linear gradient (`linear-gradient(90deg, rgba(3,8,18,0.88) 0%, rgba(3,8,18,0.72) 35%, rgba(3,8,18,0.40) 65%, rgba(3,8,18,0.15) 100%)`).
- **Typography:**
  - **Heading:** `font-serif` (Cormorant Garamond / Newsreader)
  - **Supporting Copy:** `font-sans` (Inter)
  - **Eyebrow Badge:** `font-mono` (JetBrains Mono)
- **Inline SVGs:** Floating social navigation dock icons (LinkedIn, Facebook, Instagram) included natively within `AboutHero.tsx`.
- **Transitions:** Smooth camera scale settle (`scale(1.03)` → `scale(1.00)`) and fade-up text reveals.

---

## 4. Dependencies
- **Core Framework:** Next.js (`next/image`, `next/link`, React `useState` & `useEffect`).
- **Styling:** Tailwind CSS (uses standard Tailwind slate, amber, and flex/grid layout utilities).
- **Layout Wrapper:** `@/components/layout/Container` (Standard responsive max-w-7xl layout container).

---

## 5. Unmigrated / Preserved Functionality
- **Zero Unmigrated Code:** All features—including breadcrumbs, label badges, dynamic load animations, mobile right dock, and desktop floating social dock—have been 100% extracted without missing dependencies.

---

## 6. How to Integrate into New `/about` Page

When ready to integrate into the target `/about` page:

1. Ensure `assets/images/about-team-hero.jpg` is copied into your project's `public/images/` folder:
   ```bash
   cp migration/about-hero/assets/images/about-team-hero.jpg public/images/about-team-hero.jpg
   ```

2. Import and place `AboutHero` at the top of your About page:
   ```tsx
   import { AboutHero } from "@/migration/about-hero/AboutHero";

   export default function AboutPage() {
     return (
       <main>
         <AboutHero />
         {/* Other About page sections */}
       </main>
     );
   }
   ```
