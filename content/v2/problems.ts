import type { V2Problem } from "@/types/v2";

export const v2Problems: readonly V2Problem[] = [
  // ─── HEALTHCARE: EXPANSION ───────────────────────────────────────────────
  {
    id: "prob-healthcare-expansion",
    slug: "expansion",
    title: "Considering another clinic location",
    recognitionLine:
      "Patient demand at your primary clinic is strong, leading management to evaluate expanding to a second location.",
    explanation:
      "Opening a second location creates a distinct economic unit with its own capital exposure, cost base, and operating assumptions that differ materially from the first location.",
    industryIds: ["hospitals"],
    serviceIds: ["business-advisory"],
    approachSteps: [
      {
        title: "Capital Exposure Mapping",
        description:
          "Identifying the full capital requirement including setup, pre-opening costs, and ramp-up working capital beyond the initial investment figure.",
      },
      {
        title: "Break-Even Economics",
        description:
          "Modelling the exact patient volume and contribution margin required for the new location to become self-sustaining.",
      },
      {
        title: "Cash Flow Sensitivity",
        description:
          "Stress-testing assumptions on volume ramp-up timing and collection cycles to understand the range of cash exposure.",
      },
    ],
    technicalContext: [
      "Branch Division vs Separate SPV Entity Structuring",
      "Companies Act 2013 MCA Rules",
      "GST Multi-State & Inter-Branch Allocation Rules",
    ],
    published: true,
    featured: true,
    priority: 1,
  },

  // ─── HEALTHCARE: CASH FLOW ───────────────────────────────────────────────
  {
    id: "prob-healthcare-cashflow",
    slug: "cashflow",
    title: "Navigating TPA & insurance receivables lead times",
    recognitionLine:
      "Patient volume is steady, but working capital is locked in insurance and TPA claim processing cycles.",
    explanation:
      "Delayed TPA reimbursements create liquidity squeezes despite strong revenue. Aligning operating expenditure with actual cash realization requires structured cash flow modeling.",
    industryIds: ["hospitals"],
    serviceIds: ["business-advisory", "audit-assurance"],
    approachSteps: [
      {
        title: "TPA Aging Analysis",
        description:
          "Categorizing outstanding claims by payer to identify systemic delays and reconciliation gaps.",
      },
      {
        title: "Working Capital Buffer Planning",
        description:
          "Determining necessary cash reserves to cover operational overheads during extended claim cycles.",
      },
      {
        title: "Revenue Cycle Controls",
        description:
          "Implementing tighter pre-authorization and documentation checks to reduce claim rejection rates.",
      },
    ],
    technicalContext: [
      "IRDAI TPA Settlement Guidelines",
      "Income Tax Section 194C/194J TDS Deductions on TPA Payouts",
    ],
    published: true,
    featured: true,
    priority: 2,
  },

  // ─── CROSS-INDUSTRY: CAPEX ───────────────────────────────────────────────
  {
    id: "prob-cross-capex-decision",
    slug: "capex-decision",
    title: "Evaluating major capital expenditure & machinery investment",
    recognitionLine:
      "Management is evaluating significant equipment or facility investments to expand capacity.",
    explanation:
      "Major CapEx commitments alter fixed cost structures and require clear payback horizons to prevent long-term liquidity strain.",
    industryIds: ["manufacturers", "real-estate", "education", "pharma", "textiles"],
    serviceIds: ["business-advisory", "corporate-advisory"],
    approachSteps: [
      {
        title: "Payback & NPV Evaluation",
        description:
          "Evaluating projected cash flows against capital costs using conservative volume assumptions.",
      },
      {
        title: "Debt vs Equity Structuring",
        description:
          "Determining optimal funding mix to match asset lifespan and debt servicing capacity.",
      },
    ],
    technicalContext: [
      "Income Tax Act Section 32 Depreciation Rules",
      "Companies Act Schedule II Asset Useful Life Directives",
    ],
    published: true,
    featured: false,
    priority: 3,
  },

  // ─── MANUFACTURING: MARGIN VISIBILITY ────────────────────────────────────
  {
    id: "prob-mfg-margin-visibility",
    slug: "margin-visibility",
    title: "Unclear SKU-level production margins & overhead allocation",
    recognitionLine:
      "Total factory turnover is growing, but net profitability per product line remains uncertain due to unallocated plant overheads.",
    explanation:
      "Without precise activity-based costing, high-volume SKUs may subsidize loss-making product lines.",
    industryIds: ["manufacturers"],
    serviceIds: ["business-advisory", "accounting-bookkeeping"],
    approachSteps: [
      {
        title: "Overhead Cost Center Mapping",
        description:
          "Allocating power, labor, and machine depreciation directly to specific production lines.",
      },
      {
        title: "Contribution Margin Review",
        description:
          "Identifying true unit-level profitability to optimize product mix and pricing strategies.",
      },
    ],
    technicalContext: [
      "Cost Accounting Standards (CAS)",
      "GST Input Tax Credit Reversal Rules on Production Waste",
    ],
    published: true,
    featured: false,
    priority: 4,
  },

  // ─── REAL ESTATE: PROJECT CASHFLOW ────────────────────────────────────────
  {
    id: "prob-re-project-cashflow",
    slug: "project-cashflow",
    title: "Project cash flow timing & RERA escrow management",
    recognitionLine:
      "Constrained escrow withdrawals under RERA regulations create project execution bottlenecks.",
    explanation:
      "Real estate cash flows must align strictly with construction milestones and RERA release conditions.",
    industryIds: ["real-estate"],
    serviceIds: ["business-advisory", "compliance"],
    approachSteps: [
      {
        title: "Milestone Cash Flow Matching",
        description:
          "Structuring project cash inflows with contractor billing schedules to prevent construction halts.",
      },
      {
        title: "RERA Certificate Audit",
        description:
          "Verifying percentage of completion and engineer certifications for compliant escrow drawdown.",
      },
    ],
    technicalContext: [
      "RERA Act Section 4(2)(l)(D) Escrow Requirements",
      "GST Joint Development Agreement (JDA) Tax Treatment",
    ],
    published: true,
    featured: false,
    priority: 5,
  },

  // ─── RETAIL: INVENTORY CAPITAL ───────────────────────────────────────────
  {
    id: "prob-retail-inventory-capital",
    slug: "inventory-capital",
    title: "Working capital tied up in slow-moving retail inventory",
    recognitionLine:
      "Multi-store stock accumulation reduces cash flow available for seasonal purchasing and vendor payments.",
    explanation:
      "Excess inventory locks up liquid capital and increases holding costs across retail branches.",
    industryIds: ["retail-wholesalers"],
    serviceIds: ["business-advisory", "audit-assurance"],
    approachSteps: [
      {
        title: "Inventory Turn Audit",
        description:
          "Analyzing stock velocity across SKUs and locations to isolate dead stock.",
      },
      {
        title: "Supplier Credit Optimization",
        description:
          "Aligning payment terms with actual sell-through rates to preserve liquidity.",
      },
    ],
    technicalContext: [
      "AS 2 / Ind AS 2 Inventory Valuation at Lower of Cost or Net Realizable Value",
      "GST Credit Loss on Written-off Stock",
    ],
    published: true,
    featured: false,
    priority: 6,
  },

  // ─── NBFC: COMPLIANCE ───────────────────────────────────────────────────
  {
    id: "prob-nbfc-compliance-workload",
    slug: "nbfc-compliance",
    title: "Managing RBI regulatory return filings & asset classification",
    recognitionLine:
      "Evolving RBI Master Directions require ongoing portfolio audit and capital adequacy monitoring.",
    explanation:
      "Regulatory non-compliance leads to penal levies and operational restrictions for credit entities.",
    industryIds: ["nbfcs"],
    serviceIds: ["compliance", "audit-assurance"],
    approachSteps: [
      {
        title: "NPA Provisioning Audit",
        description:
          "Reviewing loan books against RBI asset classification criteria and provisioning norms.",
      },
      {
        title: "Capital Adequacy Computation",
        description:
          "Calculating Tier I and Tier II capital ratios to ensure ongoing statutory compliance.",
      },
    ],
    technicalContext: [
      "RBI Master Direction – Non-Banking Financial Company – Scale Based Regulation (SBR)",
      "Prudential Norms on Asset Classification",
    ],
    published: true,
    featured: false,
    priority: 7,
  },

  // ─── EDUCATION: FEE CASHFLOW ──────────────────────────────────────────────
  {
    id: "prob-edu-fee-cashflow",
    slug: "edu-fee-cashflow",
    title: "Seasonal fee collection cycles & trust tax compliance",
    recognitionLine:
      "Lumpy fee receipt schedules create mid-year liquidity gaps while maintaining trust tax exemptions.",
    explanation:
      "Educational institutions must manage annual cash flow cycles while satisfying Section 11/12A income accumulation limits.",
    industryIds: ["education"],
    serviceIds: ["tax-planning", "compliance"],
    approachSteps: [
      {
        title: "Fee Cycle Reserve Budgeting",
        description:
          "Building month-by-month cash reserves to fund staff payroll during non-admission months.",
      },
      {
        title: "Income Accumulation Advisory",
        description:
          "Structuring Form 10 / 10B filings for lawful 85% income application compliance.",
      },
    ],
    technicalContext: [
      "Income Tax Act Section 11, 12A, 10(23C) Educational Trust Exemptions",
      "FCRA Foreign Contribution Audit Rules",
    ],
    published: true,
    featured: false,
    priority: 8,
  },

  // ─── TEXTILES: WORKING CAPITAL ───────────────────────────────────────────
  {
    id: "prob-textiles-seasonal-working-capital",
    slug: "textiles-working-capital",
    title: "Seasonal yarn procurement & job-work GST structuring",
    recognitionLine:
      "Fluctuating raw material prices and job-work processing strain export margin visibility.",
    explanation:
      "Textile mills require specialized cost accounting to track raw material yield and inverted GST refund claims.",
    industryIds: ["textiles"],
    serviceIds: ["business-advisory", "tax-planning"],
    approachSteps: [
      {
        title: "Inverted Duty Refund Audit",
        description:
          "Filing timely GST refund claims on unutilized input tax credits from raw material purchases.",
      },
      {
        title: "Job-Work Accounting Controls",
        description:
          "Tracking job-work material movements via ITC-04 declarations to prevent tax leakage.",
      },
    ],
    technicalContext: [
      "GST Section 54 Inverted Tax Structure Refund Formula",
      "Job-Work ITC-04 Statutory Reporting",
    ],
    published: true,
    featured: false,
    priority: 9,
  },

  // ─── PHARMA: INVENTORY ────────────────────────────────────────────────────
  {
    id: "prob-pharma-inventory-working-capital",
    slug: "pharma-inventory",
    title: "Expiry batch costing & R&D tax credit structuring",
    recognitionLine:
      "Batch expiration risks and complex distributor margin structures demand tight financial oversight.",
    explanation:
      "Pharma businesses must balance inventory shelf-life write-offs with R&D expenditure tax incentives.",
    industryIds: ["pharma"],
    serviceIds: ["business-advisory", "audit-assurance"],
    approachSteps: [
      {
        title: "Batch Expiry Provisioning",
        description:
          "Establishing systematic reserve accounting for short-dated formulations.",
      },
      {
        title: "R&D Expense Tax Advisory",
        description:
          "Structuring clinical research expenditure to maximize eligible tax deductions.",
      },
    ],
    technicalContext: [
      "Income Tax Section 35(2AB) Scientific Research Expense Deductions",
      "Drugs (Prices Control) Order DPCO Financial Compliance",
    ],
    published: true,
    featured: false,
    priority: 10,
  },

  // ─── GENERAL GROWTH ───────────────────────────────────────────────────────
  {
    id: "prob-growth-without-cash-flow",
    slug: "growth-without-cash-flow",
    title: "Revenue is growing, but cash flow remains tight",
    recognitionLine:
      "Top-line sales are increasing, but bank balances do not reflect the growth.",
    explanation:
      "Rapid top-line expansion often absorbs cash into working capital, receivables, and inventory faster than profits are realized.",
    industryIds: ["hospitals", "manufacturers", "retail-wholesalers"],
    serviceIds: ["virtual-cfo", "business-advisory"],
    approachSteps: [
      {
        title: "Working Capital Cycle Audit",
        description:
          "Measuring Days Sales Outstanding (DSO) and Inventory Turnover to pinpoint cash bottlenecks.",
      },
      {
        title: "Cash Flow Forecasting Model",
        description:
          "Establishing a rolling 13-week cash flow projection to anticipate funding needs.",
      },
    ],
    technicalContext: [
      "Working Capital Ratio Analysis",
      "Bank Borrowing Base Certification & Debt Covenants",
    ],
    published: true,
    featured: true,
    priority: 11,
  },
];

export function getHealthcareProblems(): readonly V2Problem[] {
  return v2Problems.filter((p) => p.industryIds.includes("hospitals"));
}
