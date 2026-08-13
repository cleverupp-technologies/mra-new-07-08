/**
 * V2 Problem Data
 *
 * Source of truth for all business problems MR&A addresses.
 * Problems are NOT industry-specific by default — they carry industryIds arrays
 * so the same problem can appear in multiple industry contexts.
 *
 * Migrated from src/content/problems.ts (HealthcareProblem[]).
 * Adapted to V2Problem schema — industryId → industryIds[], added serviceIds.
 *
 * DATA INTEGRITY RULES:
 * - verifiedExperienceCount: omit if unknown
 * - verifiedExperienceStatement: factual only
 * - status field from v1 removed — use published: boolean instead
 */

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
    slug: "cash-flow",
    title: "Patient revenue is growing, but cash flow remains tight",
    recognitionLine:
      "Billing levels are increasing, but bank balances remain constrained due to insurance and TPA reimbursement lead times.",
    explanation:
      "Revenue growth does not automatically produce cash availability. Reimbursement cycles, working capital lockup in pharmaceutical inventory, and operating cost commitments can create cash pressure even as billing rises.",
    industryIds: ["hospitals"],
    serviceIds: ["virtual-cfo"],
    technicalContext: [
      "TPA Reimbursement Reconciliation & Deduction Accounting",
      "Pharmacy & Clinical Consumables Inventory Turnover Accounting",
    ],
    published: true,
    featured: true,
    priority: 2,
  },

  // ─── HEALTHCARE: DOCTOR PAYOUTS (UNPUBLISHED) ───────────────────────────
  {
    id: "prob-healthcare-doctor-payouts",
    slug: "doctor-payouts",
    title: "Doctor payout structures create unpredictable monthly margins",
    recognitionLine:
      "Specialist doctor compensation agreements vary across fixed, retainer, percentage, and procedure-based models.",
    explanation:
      "Mixed compensation structures across specialties make it difficult to predict the net margin contribution from each department, creating planning challenges as the practice grows.",
    industryIds: ["hospitals"],
    serviceIds: ["virtual-cfo", "accounting-bookkeeping"],
    technicalContext: [
      "Section 194J TDS Deduction on Professional Fees to Doctors",
      "Clinician Retainer vs Revenue-Share Accounting Models",
    ],
    published: false,
    featured: false,
    priority: 3,
  },

  // ─── HEALTHCARE: EQUIPMENT CAPEX (UNPUBLISHED) ──────────────────────────
  {
    id: "prob-healthcare-equipment-capex",
    slug: "equipment-capex",
    title: "Evaluating major diagnostic equipment purchases",
    recognitionLine:
      "Acquiring advanced MRI, CT, or surgical equipment requires significant capital outlay or lease financing.",
    explanation:
      "The decision to purchase or lease major medical equipment involves payback period modelling, depreciation tax efficiency, financing cost analysis, and break-even utilization assumptions.",
    industryIds: ["hospitals"],
    serviceIds: ["business-advisory", "corporate-advisory"],
    technicalContext: [
      "Income Tax Act Section 32 Depreciation Rules on Medical Equipment",
      "Ind AS 116 Lease Accounting for Medical Equipment Leases",
    ],
    published: false,
    featured: false,
    priority: 4,
  },

  // ─── HEALTHCARE: GST ITC (UNPUBLISHED) ───────────────────────────────────
  {
    id: "prob-healthcare-gst-itc",
    slug: "gst-input-credit",
    title: "GST input tax credit leakages on healthcare services",
    recognitionLine:
      "Healthcare services are largely exempt from GST, leading to inverted tax structures and unutilized input tax credits.",
    explanation:
      "The mixed nature of healthcare revenue — exempt clinical services alongside taxable pharmacy and room rental — creates GST credit reversal obligations that, if not managed, represent a recurring cost.",
    industryIds: ["hospitals"],
    serviceIds: ["compliance", "tax-planning"],
    technicalContext: [
      "GST Notification No. 12/2017-Central Tax (Rate) Healthcare Exemption Rules",
      "CGST Rules 42 & 43 Proportionate Credit Reversal Calculations",
    ],
    published: false,
    featured: false,
    priority: 5,
  },

  // ─── HEALTHCARE: MULTI-BRANCH (UNPUBLISHED) ──────────────────────────────
  {
    id: "prob-healthcare-multi-branch",
    slug: "multi-branch",
    title: "Multi-branch financial consolidation and inter-clinic transfers",
    recognitionLine:
      "Operating multiple clinics creates complexity in central pharmacy procurement, shared doctor payroll, and inter-branch billing.",
    explanation:
      "As healthcare groups grow, branch accounting, inter-entity cost allocation, and GST cross-charge compliance create significant administrative and regulatory complexity.",
    industryIds: ["hospitals"],
    serviceIds: ["audit-assurance", "virtual-cfo", "compliance"],
    technicalContext: [
      "GST Cross-Charge vs Service Distributor (ISD) Compliance",
      "Companies Act Branch Audit Requirements & Financial Consolidation",
    ],
    published: false,
    featured: false,
    priority: 6,
  },

  // ─── CROSS-INDUSTRY: GROWTH WITHOUT CASH FLOW ────────────────────────────
  {
    id: "prob-growth-without-cash-flow",
    slug: "growth-without-stronger-cash-flow",
    title: "Revenue is growing but cash flow is not keeping pace",
    recognitionLine:
      "The business is growing in turnover, but cash availability is not improving at the same rate.",
    explanation:
      "Growth can obscure deteriorating cash conversion. Working capital cycles lengthen, receivables grow faster than collections, and operating cost commitments increase before the revenue converts to cash.",
    industryIds: ["hospitals", "manufacturers", "retail-wholesalers"],
    industryContexts: [
      {
        industryId: "hospitals",
        recognitionOverride:
          "Revenue and patient volumes are growing, but as the business scales, management's financial visibility and control are not growing at the same pace.",
      },
      {
        industryId: "manufacturers",
        recognitionOverride:
          "Production is scaling but debtor cycles and raw material procurement are consuming cash.",
      },
      {
        industryId: "retail-wholesalers",
        recognitionOverride:
          "Sales volumes are increasing but inventory capital and supplier payment cycles are tightening cash.",
      },
    ],
    serviceIds: ["virtual-cfo", "business-advisory"],
    published: true,
    featured: true,
    priority: 7,
  },

  // ─── CROSS-INDUSTRY: EXPANSION ───────────────────────────────────────────
  {
    id: "prob-cross-expansion",
    slug: "expansion-planning",
    title: "Considering a new branch, campus, or facility location",
    recognitionLine:
      "The business is evaluating expanding to a new location or facility, requiring capital commitment before revenue begins.",
    explanation:
      "Opening a new location creates an independent financial unit with setup capital, pre-opening overheads, and ramp-up working capital. Evaluating break-even timelines and cash exposure before committing capital is critical to protecting current operations.",
    industryIds: [
      "retail-wholesalers",
      "education",
      "fmcg",
      "pharma",
    ],
    industryContexts: [
      {
        industryId: "retail-wholesalers",
        recognitionOverride:
          "Opening a new store or branch requires a clear financial evaluation of the investment, operating cost base, and break-even timeline before committing capital.",
      },
      {
        industryId: "education",
        recognitionOverride:
          "Adding a new campus, branch, or programme requires a financial evaluation of the capital, operating cost base, and ramp-up assumptions before the commitment is made.",
      },
      {
        industryId: "fmcg",
        recognitionOverride:
          "Expanding to new geographies or adding production capacity requires financial evaluation of the investment, credit structure, and cash flow assumptions before committing.",
      },
      {
        industryId: "pharma",
        recognitionOverride:
          "Expanding distribution to new geographies or adding products requires financial evaluation of the investment, credit terms, and cash flow implications before committing.",
      },
    ],
    serviceIds: ["business-advisory", "virtual-cfo"],
    published: true,
    featured: true,
    priority: 8,
  },

  // ─── CROSS-INDUSTRY: CAPEX DECISION ──────────────────────────────────────
  {
    id: "prob-cross-capex-decision",
    slug: "capital-investment-decision",
    title: "Evaluating a major capital or equipment purchase",
    recognitionLine:
      "A significant investment in machinery, equipment, or facility infrastructure is under consideration to expand capability.",
    explanation:
      "Major capital expenditures require evaluation beyond the headline price tag. Financing terms, payback period under realistic utilization assumptions, cash flow impact during setup, and tax treatment determine whether the investment generates long-term value.",
    industryIds: [
      "manufacturers",
      "real-estate",
      "construction",
      "education",
      "textiles",
      "pharma",
    ],
    industryContexts: [
      {
        industryId: "manufacturers",
        recognitionOverride:
          "Production capacity is constrained, or existing equipment is limiting output quality — and the business is considering a material capital investment to address it.",
      },
      {
        industryId: "real-estate",
        recognitionOverride:
          "A significant capital decision — land acquisition, infrastructure development, or major construction commitment — requires financial evaluation before capital is committed.",
      },
      {
        industryId: "construction",
        recognitionOverride:
          "A significant equipment or plant investment — construction machinery, specialist equipment, or a vehicle fleet — requires financial evaluation before capital is committed.",
      },
      {
        industryId: "education",
        recognitionOverride:
          "A significant capital investment — infrastructure, equipment, or campus development — requires financial evaluation before funds are committed.",
      },
      {
        industryId: "textiles",
        recognitionOverride:
          "Upgrading processing machinery or expanding production plant requires financial evaluation of payback timelines and cash flow impact before capital is committed.",
      },
      {
        industryId: "pharma",
        recognitionOverride:
          "A capital investment in manufacturing capacity, formulation equipment, or quality infrastructure requires financial evaluation before the commitment is made.",
      },
    ],
    serviceIds: ["business-advisory", "tax-planning"],
    published: true,
    featured: true,
    priority: 9,
  },

  // ─── MANUFACTURERS: MARGIN VISIBILITY ────────────────────────────────────
  {
    id: "prob-mfg-margin-visibility",
    slug: "product-margin-visibility",
    title: "Margins are changing, but we cannot see exactly where",
    recognitionLine:
      "The business is generating revenue, but profitability across product lines, customers, or production batches is unclear — pricing and investment decisions lack structured financial support.",
    explanation:
      "Manufacturing businesses often operate with blended margins that obscure which products, customers, or batch sizes are genuinely profitable. Without structured cost accounting and margin analysis by product line, decisions about pricing, volume, and investment are based on incomplete information.",
    industryIds: ["manufacturers"],
    serviceIds: ["business-advisory", "accounting-bookkeeping"],
    published: true,
    featured: false,
    priority: 10,
  },

  // ─── REAL ESTATE: PROJECT CASH FLOW ──────────────────────────────────────
  {
    id: "prob-re-project-cashflow",
    slug: "project-cash-flow-timing",
    title: "Project cash flow is unpredictable across the development cycle",
    recognitionLine:
      "Capital was committed early — in land, construction, and infrastructure — but buyer collections arrive across milestones that don't always align with the cost timeline.",
    explanation:
      "Real estate development involves a long gap between capital commitment and cash collection. Booking amounts, milestone payments, and registration timing create a structural mismatch between cash outflow and inflow across the project cycle. Without disciplined cash flow planning, the project can face liquidity pressure even when commercially successful.",
    industryIds: ["real-estate"],
    serviceIds: ["virtual-cfo", "business-advisory"],
    published: true,
    featured: true,
    priority: 11,
  },

  // ─── REAL ESTATE: MULTI-PROJECT VISIBILITY ───────────────────────────────
  {
    id: "prob-re-multi-project-visibility",
    slug: "multi-project-financial-control",
    title: "Managing financial visibility across multiple projects is becoming difficult",
    recognitionLine:
      "Each project has its own costs, collections, and timelines — but overall business performance and true financial position across all of them is difficult to read clearly.",
    explanation:
      "Developers with multiple active projects, landholdings, or separate project entities find it difficult to understand their consolidated financial position. Cost overruns in one project, collection delays in another, and inter-entity transfers make consolidated visibility difficult without structured reporting across the portfolio.",
    industryIds: ["real-estate"],
    serviceIds: ["virtual-cfo", "audit-assurance"],
    published: true,
    featured: false,
    priority: 12,
  },

  // ─── RETAIL: INVENTORY CAPITAL LOCKUP ────────────────────────────────────
  {
    id: "prob-retail-inventory-capital",
    slug: "inventory-capital-lockup",
    title: "Inventory is growing, but it is consuming more capital than planned",
    recognitionLine:
      "Stock levels are rising to meet demand or supplier terms, but the working capital tied up in inventory is creating consistent pressure on available cash.",
    explanation:
      "For retail and wholesale businesses, inventory represents the largest use of working capital. When stock turnover slows, supplier payment terms shorten, or buying decisions are made on instinct rather than financial analysis, inventory becomes a cash trap — money tied up in stock that is not converting to revenue quickly enough.",
    industryIds: ["retail-wholesalers"],
    serviceIds: ["virtual-cfo", "business-advisory"],
    published: true,
    featured: true,
    priority: 13,
  },

  // ─── RETAIL: MARGIN PRESSURE ─────────────────────────────────────────────
  {
    id: "prob-retail-margin-pressure",
    slug: "retail-margin-thinning",
    title: "Margins are thinning, but the cause is not clearly visible",
    recognitionLine:
      "Overall profitability appears to be declining, but the business does not have clear visibility into which product categories, supplier relationships, or store locations are driving the pressure.",
    explanation:
      "Retail and wholesale businesses often operate across many SKUs, locations, and supplier relationships. Without structured margin analysis by category or location, decisions about pricing, distributor terms, and product mix lack structured financial support.",
    industryIds: ["retail-wholesalers"],
    serviceIds: ["business-advisory", "accounting-bookkeeping"],
    published: true,
    featured: false,
    priority: 14,
  },

  // ─── CONSTRUCTION: PROJECT CASH FLOW ────────────────────────────────────
  {
    id: "prob-const-project-cashflow",
    slug: "construction-cash-flow-milestones",
    title: "Project cash flow is tied to milestones that don't always arrive on schedule",
    recognitionLine:
      "Bills are issued when work is completed, but client payments, certification approvals, or milestone sign-offs arrive late — creating a gap between cost commitments and cash received.",
    explanation:
      "Construction businesses face a structural cash flow challenge: costs (labour, materials, subcontractors) are incurred continuously, while billing and collection depends on milestone completion, client certification, and sometimes retention clauses. When milestones slip or client payments delay, the cash gap widens quickly and can create serious operational pressure.",
    industryIds: ["construction"],
    serviceIds: ["virtual-cfo", "accounting-bookkeeping"],
    published: true,
    featured: true,
    priority: 15,
  },

  // ─── CONSTRUCTION: PROJECT MARGIN ───────────────────────────────────────
  {
    id: "prob-const-project-margin",
    slug: "project-cost-escalation-margins",
    title: "Project costs are escalating, but it's not clear exactly where margin is being lost",
    recognitionLine:
      "Materials, subcontractor, and labour costs are rising mid-project, but the business does not have a real-time view of which projects are eroding overall profitability.",
    explanation:
      "In construction, margin erosion happens gradually through scope changes, material price movements, subcontractor rate revisions, and inefficient resource use. Without structured project-level cost accounting and comparison against estimated margins, the full financial impact is only visible at project close — when it is too late to respond.",
    industryIds: ["construction"],
    serviceIds: ["business-advisory", "accounting-bookkeeping"],
    published: true,
    featured: false,
    priority: 16,
  },

  // ─── NBFC: FINANCIAL VISIBILITY ──────────────────────────────────────────
  {
    id: "prob-nbfc-financial-visibility",
    slug: "nbfc-portfolio-financial-visibility",
    title: "Portfolio and financial performance are difficult to read clearly as the business grows",
    recognitionLine:
      "The NBFC is growing — more borrowers, more collections, more disbursements — but management does not have timely, structured visibility into what the numbers actually mean for the business.",
    explanation:
      "As an NBFC scales its lending portfolio, the volume and complexity of financial data grows. Without structured management information — cost of funds, yield trends, collection efficiency, operating ratios — leadership decisions are based on incomplete financial intelligence. Accounting and reporting must keep pace with portfolio growth.",
    industryIds: ["nbfcs"],
    serviceIds: ["virtual-cfo", "accounting-bookkeeping"],
    published: true,
    featured: true,
    priority: 17,
  },

  // ─── NBFC: COMPLIANCE WORKLOAD ───────────────────────────────────────────
  {
    id: "prob-nbfc-compliance-workload",
    slug: "nbfc-compliance-workload-coordination",
    title: "Compliance obligations are growing faster than the team's capacity to manage them",
    recognitionLine:
      "Statutory, accounting, and applicable filing obligations are increasing as the business grows, and the current internal capacity is not structured to manage them without risk of gaps.",
    explanation:
      "Financial businesses operating under regulatory frameworks accumulate layered compliance obligations across income tax, accounting standards, corporate law, and applicable regulatory requirements. As operations scale, managing these across internal teams and external advisors creates coordination complexity. A structured compliance framework reduces the risk of gaps.",
    industryIds: ["nbfcs"],
    serviceIds: ["compliance", "audit-assurance"],
    published: true,
    featured: false,
    priority: 18,
  },

  // ─── EDUCATION: FEE CASH FLOW ────────────────────────────────────────────
  {
    id: "prob-edu-fee-cashflow",
    slug: "education-fee-cycle-cashflow",
    title: "Revenue arrives in concentrated admission cycles, but costs are continuous",
    recognitionLine:
      "Fee income arrives in batches at the start of each term or academic year, but salaries, infrastructure, and operating costs continue every month — creating a structural cash flow challenge.",
    explanation:
      "Educational institutions face a predictable but difficult cash flow pattern: significant fee income arrives during admission and term-start periods, while operating costs run continuously. Planning cash flow across this gap, and timing capital decisions around it, requires structured financial management that many institutions outgrow their current processes for.",
    industryIds: ["education"],
    serviceIds: ["virtual-cfo", "accounting-bookkeeping"],
    published: true,
    featured: true,
    priority: 19,
  },

  // ─── FMCG: DISTRIBUTOR WORKING CAPITAL ───────────────────────────────────
  {
    id: "prob-fmcg-distributor-working-capital",
    slug: "fmcg-distributor-credit-inventory",
    title: "Distributor credit and inventory across the supply chain are consuming more capital than planned",
    recognitionLine:
      "Expanding distribution requires extending credit to distributors and maintaining stock at multiple points in the chain — and the working capital required is growing faster than revenue converts to cash.",
    explanation:
      "FMCG businesses that scale distribution often find that distributor credit and multi-point inventory consumes a disproportionate amount of working capital. Without structured management of debtor cycles, inventory turnover, and cash conversion across distribution channels, growth can actually worsen the business's cash position.",
    industryIds: ["fmcg"],
    serviceIds: ["virtual-cfo", "business-advisory"],
    published: true,
    featured: true,
    priority: 20,
  },

  // ─── FMCG: MARGIN CHANNEL EROSION ────────────────────────────────────────
  {
    id: "prob-fmcg-margin-channel",
    slug: "fmcg-channel-margin-erosion",
    title: "Margin is being lost across the distribution chain, but the exact cause isn't visible",
    recognitionLine:
      "Revenue is growing with new distributors and channels, but overall profitability is not improving proportionally — and the business cannot pinpoint where in the chain margin is being eroded.",
    explanation:
      "FMCG businesses operating through multiple distributor relationships see blended margins that mask where profitability is genuinely created or lost. Without structured margin analysis by channel, region, or product category, decisions about pricing, distributor incentives, and product mix lack disciplined financial support.",
    industryIds: ["fmcg"],
    serviceIds: ["business-advisory", "accounting-bookkeeping"],
    published: true,
    featured: false,
    priority: 21,
  },

  // ─── TEXTILES: SEASONAL WORKING CAPITAL ──────────────────────────────────
  {
    id: "prob-textiles-seasonal-working-capital",
    slug: "textiles-seasonal-inventory-capital",
    title: "Seasonal inventory requirements lock up capital at exactly the wrong times",
    recognitionLine:
      "Fabric and raw material procurement must happen well ahead of the season — but the capital tied up in inventory peaks at exactly the point when cash flow is most constrained.",
    explanation:
      "Textile and garment businesses face predictable seasonal working capital cycles. Raw material procurement, processing, and production timelines require capital commitment months before goods are sold. When collection from buyers is also slow, the business can face simultaneous inventory capital pressure and receivable delays at the same point in the calendar.",
    industryIds: ["textiles"],
    serviceIds: ["virtual-cfo", "business-advisory"],
    published: true,
    featured: true,
    priority: 22,
  },

  // ─── TEXTILES: MARGIN VOLATILITY ─────────────────────────────────────────
  {
    id: "prob-textiles-margin-volatility",
    slug: "textiles-input-cost-margin-volatility",
    title: "Raw material price changes affect margins in ways that are difficult to respond to quickly",
    recognitionLine:
      "Yarn, fabric, or material costs fluctuate, but pricing to buyers cannot always be adjusted at the same speed — and the margin impact is only visible after the fact.",
    explanation:
      "Textile businesses are exposed to raw material price volatility. When input costs rise and buyer pricing cannot be adjusted immediately (due to contracts or competitive pressure), margin erosion happens quickly and is often only visible retrospectively. Structured margin tracking and financial modelling enables faster identification and response.",
    industryIds: ["textiles"],
    serviceIds: ["business-advisory", "accounting-bookkeeping"],
    published: true,
    featured: false,
    priority: 23,
  },

  // ─── PHARMA: INVENTORY WORKING CAPITAL ───────────────────────────────────
  {
    id: "prob-pharma-inventory-working-capital",
    slug: "pharma-inventory-working-capital-pressure",
    title: "Pharmaceutical inventory requirements tie up significant working capital across the supply chain",
    recognitionLine:
      "Distribution stocking norms, expiry management, and product range depth mean that inventory must be maintained at levels that consume more working capital than a simple sales forecast would suggest.",
    explanation:
      "Pharma businesses — manufacturing or distribution — maintain inventory shaped not just by demand, but by expiry constraints, product range requirements, and distributor stocking norms. This structural inventory pressure has a direct and often underestimated impact on working capital that requires structured financial management.",
    industryIds: ["pharma"],
    serviceIds: ["virtual-cfo", "accounting-bookkeeping"],
    published: true,
    featured: true,
    priority: 24,
  },

  // ─── SERVICE RECOGNITION: FINANCE OUTSOURCING ────────────────────────────
  {
    id: "prob-outsourcing-finance-capacity",
    slug: "finance-team-capacity-workflow",
    title: "Internal finance capacity and recurring accounting processes are becoming strained",
    recognitionLine:
      "Transaction volume, billing reconciliations, and routine accounting tasks are consuming management time or causing reporting delays as the business scales.",
    explanation:
      "As operations grow, routine accounting, ledger maintenance, and monthly reporting require dedicated attention. Strained internal teams or turnover can lead to delayed reporting and lost financial visibility if processes are not structured with external discipline.",
    industryIds: [],
    serviceIds: ["outsourcing"],
    published: true,
    featured: false,
    priority: 25,
  },

  // ─── SERVICE RECOGNITION: TDS COMPLIANCE ─────────────────────────────────
  {
    id: "prob-tds-compliance-workload",
    slug: "tds-deduction-reconciliation-workload",
    title: "TDS deduction, record maintenance, and return reconciliations are creating recurring operational workload",
    recognitionLine:
      "Expanding vendor payments, contractor bills, and payroll deductions require systematic review to prevent filing delays and ledger mismatches.",
    explanation:
      "Managing tax deduction obligations across high transaction volumes requires disciplined record maintenance, ledger reconciliation, and timely return preparation. Gaps in process control can lead to interest, penalty notices, or vendor credit holds.",
    industryIds: [],
    serviceIds: ["tds-compliance"],
    published: true,
    featured: false,
    priority: 26,
  },

  // ─── SERVICE RECOGNITION: ROC FILING ─────────────────────────────────────
  {
    id: "prob-roc-filing-coordination",
    slug: "corporate-filing-statutory-coordination",
    title: "Statutory corporate filing obligations and company changes require structured secretarial coordination",
    recognitionLine:
      "Annual corporate compliance deadlines, director updates, or share capital modifications require accurate record alignment and statutory filing.",
    explanation:
      "Corporate statutory filings require coordination between financial records, board documentation, and statutory submissions. Timely filing and structured record maintenance prevent statutory non-compliance and keep corporate records up to date.",
    industryIds: [],
    serviceIds: ["roc-filing"],
    published: true,
    featured: false,
    priority: 27,
  },
];
