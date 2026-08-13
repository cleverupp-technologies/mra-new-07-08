import type { V2Industry } from "@/types/v2";

export const v2Industries: readonly V2Industry[] = [
  // ─── HEALTHCARE ──────────────────────────────────────────────────────────
  {
    id: "hospitals",
    slug: "healthcare",
    name: "Hospitals & Healthcare",
    shortInsight:
      "Healthcare institutions, medical centers, and specialized clinics.",
    description:
      "Growing a healthcare business creates financial decisions far beyond clinical care. As a clinic or medical practice expands, equipment investments, new location economics, partner profit sharing, and operating cash flow compete for capital.",
    image: "/images/healthcare.jpg",
    imageAlt: "Multi-storey hospital building — healthcare sector",
    experienceContext:
      "MR&A has worked with healthcare businesses navigating clinic expansion, equipment CapEx evaluation, TPA reimbursement cycles, and multi-location financial structures.",
    verifiedClientCount: undefined,
    problemIds: [
      "prob-healthcare-expansion",
      "prob-healthcare-cashflow",
      "prob-growth-without-cash-flow",
    ],
    published: true,
    featured: true,
    priority: 1,
    seo: {
      metaTitle:
        "Healthcare Business & Practice Advisory | Manesh Rineesh & Associates",
      metaDescription:
        "Financial decision frameworks for growing healthcare organizations, medical clinics, and multi-location practices. Evaluate clinic expansion, equipment CapEx, and cash flow.",
      canonicalPath: "/industries/healthcare",
    },
  },

  // ─── MANUFACTURING ───────────────────────────────────────────────────────
  {
    id: "manufacturers",
    slug: "manufacturers",
    name: "Manufacturers",
    shortInsight:
      "Industrial manufacturing plants and production facilities.",
    description:
      "Manufacturing businesses face capital-intensive decisions around plant expansion, equipment procurement, working capital cycles, and cost structure discipline as production scales.",
    image: "/images/manufacturing.jpg",
    imageAlt: "Manufacturing facility",
    experienceContext: null,
    verifiedClientCount: undefined,
    problemIds: [
      "prob-cross-capex-decision",
      "prob-mfg-margin-visibility",
      "prob-growth-without-cash-flow",
    ],
    published: true,
    featured: true,
    priority: 2,
    seo: {
      metaTitle: "Manufacturing Business Advisory | Manesh Rineesh & Associates",
      metaDescription:
        "Financial advisory for manufacturing businesses — CapEx evaluation, working capital management, cost structure, and compliance.",
      canonicalPath: "/industries/manufacturers",
    },
  },

  // ─── REAL ESTATE ─────────────────────────────────────────────────────────
  {
    id: "real-estate",
    slug: "real-estate",
    name: "Real Estate",
    shortInsight:
      "Property developers, land aggregators, and commercial real estate.",
    description:
      "Real estate businesses operate with high capital commitment, long project cycles, and complex regulatory environments. Financial structure, project accounting, and cash flow timing are critical to viability.",
    image: "/images/real-estate.jpg",
    imageAlt: "Real estate development — construction site",
    experienceContext: null,
    verifiedClientCount: undefined,
    problemIds: [
      "prob-re-project-cashflow",
      "prob-re-multi-project-visibility",
      "prob-cross-capex-decision",
    ],
    published: true,
    featured: true,
    priority: 3,
    seo: {
      metaTitle: "Real Estate Business Advisory | Manesh Rineesh & Associates",
      metaDescription:
        "Financial advisory for property developers and real estate businesses — project accounting, regulatory compliance, and capital structuring.",
      canonicalPath: "/industries/real-estate",
    },
  },

  // ─── RETAIL & WHOLESALERS ─────────────────────────────────────────────────
  {
    id: "retail-wholesalers",
    slug: "retail-wholesalers",
    name: "Retail & Wholesalers",
    shortInsight:
      "Multi-location retail chains, trading entities, and wholesale distributors.",
    description:
      "Retail and wholesale businesses manage multi-location economics, inventory capital, supplier terms, and margin discipline across varied product mixes.",
    image: "/images/retail.jpg",
    imageAlt: "Retail business operations",
    experienceContext: null,
    verifiedClientCount: undefined,
    problemIds: [
      "prob-retail-inventory-capital",
      "prob-retail-margin-pressure",
      "prob-cross-expansion",
      "prob-growth-without-cash-flow",
    ],
    published: true,
    featured: true,
    priority: 4,
    seo: {
      metaTitle: "Retail & Wholesale Business Advisory | Manesh Rineesh & Associates",
      metaDescription:
        "Financial advisory for retail chains and wholesale distributors — inventory capital, margin analysis, multi-location economics.",
      canonicalPath: "/industries/retail-wholesalers",
    },
  },

  // ─── NBFCs ───────────────────────────────────────────────────────────────
  {
    id: "nbfcs",
    slug: "nbfcs",
    name: "NBFCs",
    shortInsight:
      "Non-Banking Financial Companies and credit organizations.",
    description:
      "NBFCs operate under specific RBI regulatory frameworks with requirements around capital adequacy, NPA provisioning, and statutory compliance that differ substantially from general businesses.",
    image: "/images/industry-nbfc.jpg",
    imageAlt: "Financial institution architecture",
    experienceContext: null,
    verifiedClientCount: undefined,
    problemIds: [
      "prob-nbfc-financial-visibility",
      "prob-nbfc-compliance-workload",
    ],
    published: true,
    featured: false,
    priority: 5,
    seo: {
      metaTitle: "NBFC Advisory & Compliance | Manesh Rineesh & Associates",
      metaDescription:
        "Financial advisory and compliance support for NBFCs — RBI regulatory requirements, capital adequacy, and statutory obligations.",
      canonicalPath: "/industries/nbfcs",
    },
  },

  // ─── EDUCATION ───────────────────────────────────────────────────────────
  {
    id: "education",
    slug: "education",
    name: "Education",
    shortInsight:
      "Educational trusts, schools, colleges, and training institutes.",
    description:
      "Education sector entities operate across trust, society, and private company structures with specific accounting, taxation, and regulatory requirements.",
    image: "/images/education.jpg",
    imageAlt: "Educational institution campus",
    experienceContext: null,
    verifiedClientCount: undefined,
    problemIds: [
      "prob-edu-fee-cashflow",
      "prob-cross-expansion",
      "prob-cross-capex-decision",
    ],
    published: true,
    featured: false,
    priority: 6,
    seo: {
      metaTitle: "Education Sector Advisory | Manesh Rineesh & Associates",
      metaDescription:
        "Financial advisory for educational institutions, trusts, and training organizations — structure, compliance, and financial management.",
      canonicalPath: "/industries/education",
    },
  },

  // ─── TEXTILES ────────────────────────────────────────────────────────────
  {
    id: "textiles",
    slug: "textiles",
    name: "Textiles",
    shortInsight:
      "Garment manufacturers, textile mills, and apparel retail networks.",
    description:
      "Textile and garment businesses manage seasonal working capital cycles, export compliance, job-work structures, and GST complexity across value chains.",
    image: "/images/retail.jpg",
    imageAlt: "Textile and apparel operations",
    experienceContext: null,
    verifiedClientCount: undefined,
    problemIds: [
      "prob-textiles-seasonal-working-capital",
      "prob-textiles-margin-volatility",
      "prob-cross-capex-decision",
    ],
    published: true,
    featured: false,
    priority: 7,
    seo: {
      metaTitle: "Textile & Garment Business Advisory | Manesh Rineesh & Associates",
      metaDescription:
        "Financial advisory for textile manufacturers and garment businesses — export compliance, GST, job-work accounting.",
      canonicalPath: "/industries/textiles",
    },
  },

  // ─── PHARMA ──────────────────────────────────────────────────────────────
  {
    id: "pharma",
    slug: "pharma",
    name: "Pharma",
    shortInsight:
      "Pharmaceutical formulation units and medical distribution.",
    description:
      "Pharmaceutical businesses operate with regulatory requirements, drug pricing controls, and complex distribution structures that create specific financial and compliance challenges.",
    image: "/images/healthcare.jpg",
    imageAlt: "Pharmaceutical formulation laboratory",
    experienceContext: null,
    verifiedClientCount: undefined,
    problemIds: [
      "prob-pharma-inventory-working-capital",
      "prob-cross-expansion",
      "prob-cross-capex-decision",
    ],
    published: true,
    featured: false,
    priority: 8,
    seo: {
      metaTitle: "Pharma Business Advisory | Manesh Rineesh & Associates",
      metaDescription:
        "Financial advisory for pharmaceutical formulation units and distributors — regulatory compliance, pricing, and financial management.",
      canonicalPath: "/industries/pharma",
    },
  },
];
