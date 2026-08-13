# Industries Migration Package

This folder contains the complete, isolated backup and migration source for all **Industries pages** from the MR&A website (`mra-website`).

---

## 1. Migration Package Location
- **Exact Path:** `/migration/industries/` (`file:///c:/Users/safnas/OneDrive/Documents/mra-website/migration/industries`)

---

## 2. Industries Pages Found & Routes

The following 9 Industries pages were identified in the website structure:

| Route / URL | Industry Name | Content Status |
| :--- | :--- | :--- |
| `/industries` | **Industries Overview Index** | Complete overview listing all practices & decision patterns |
| `/industries/healthcare` | **Hospitals & Healthcare** | Full detailed practice page with problem contexts & case studies |
| `/industries/manufacturers` | **Manufacturers** | Standard practice page structure |
| `/industries/real-estate` | **Real Estate** | Standard practice page structure |
| `/industries/retail-wholesalers` | **Retail & Wholesalers** | Standard practice page structure |
| `/industries/nbfcs` | **NBFCs** | Standard practice page structure |
| `/industries/education` | **Education** | Standard practice page structure |
| `/industries/textiles` | **Textiles** | Standard practice page structure |
| `/industries/pharma` | **Pharma** | Standard practice page structure |

---

## 3. Inventory of Copied Files

```
migration/industries/
├── README.md                            # Comprehensive migration report & index
├── pages/
│   ├── index/
│   │   └── page.tsx                     # Main /industries index page
│   └── [slug]/
│       └── page.tsx                     # Dynamic /industries/[slug] detail route
├── components/
│   ├── V3IndustryPage.tsx               # Primary V3 Industry page rendering component
│   ├── V2IndustryPage.tsx               # Legacy V2 Industry page rendering component
│   └── HealthcareIndustryPage.tsx       # Dedicated Healthcare practice page component
├── content/
│   ├── industries.ts                    # Industry data definitions & metadata
│   ├── industry-decisions.ts           # Industry decision contexts & frameworks
│   ├── problems.ts                      # Cross-industry commercial problems
│   └── repository.ts                    # Data retrieval repository logic
└── assets/
    └── images/
        ├── healthcare.jpg               # Healthcare sector hero/card image (1.9 MB)
        ├── manufacturing.jpg            # Manufacturing sector hero/card image (2.5 MB)
        ├── real-estate.jpg              # Real Estate sector hero/card image (2.4 MB)
        ├── retail.jpg                   # Retail sector hero/card image (963 KB)
        └── education.jpg                # Education sector hero/card image (849 KB)
```

---

## 4. Images & Assets Copied

1. `assets/images/healthcare.jpg` (`1,956,998 bytes`) — Multi-storey hospital building photograph
2. `assets/images/manufacturing.jpg` (`2,510,697 bytes`) — Industrial manufacturing plant facility
3. `assets/images/real-estate.jpg` (`2,478,546 bytes`) — Commercial real estate construction site
4. `assets/images/retail.jpg` (`963,908 bytes`) — Retail chain operating store
5. `assets/images/education.jpg` (`849,384 bytes`) — Educational campus building

---

## 5. Missing Assets or Dependencies Report

- **Assets:** None missing. All 5 sector photographs used by the Industries pages were successfully located in `public/images/` and copied to `migration/industries/assets/images/`.
- **Dependencies:**
  - Page routes depend on Next.js App Router (`next/navigation`, `next/link`, `Metadata`).
  - Layout components depend on `@/components/layout/Container` and `@/components/consultation/ConsultationCTA`.
  - Content definitions depend on `@/types/v2`.

---

## 6. Migration Rules Enforced

- [x] Old website original content preserved as-is.
- [x] All 9 Industries page routes and URLs preserved.
- [x] All sector photography and images copied.
- [x] No redesign or styling changes applied.
- [x] Current live `/industries` pages and routes NOT overwritten.
- [x] Homepage, Services, About, Insights, and Contact pages NOT modified.
