/**
 * Industry Decision Situations Data
 *
 * Bespoke commercial decision situations and financial frameworks for all 8 key industries:
 * Healthcare, Manufacturing, Retail & Wholesalers, Real Estate, Education, NBFCs, Pharma, Textiles.
 */

export interface IndustryDecisionSituation {
  id: string;
  slug: string;
  title: string;
  category: string;
  recognitionLine: string;
  commercialContext: string;
  financialConsiderations: {
    title: string;
    description: string;
  }[];
  professionalConsiderations: string[];
  associatedServiceSlugs: string[];
  relatedInsightTitles: {
    title: string;
    category: string;
    readTime: string;
    slug: string;
  }[];
}

export interface IndustryOverviewData {
  industrySlug: string;
  heroTitle: string;
  heroDescription: string;
  understandingEnvironment: {
    businessModel: string;
    operatingEnvironment: string;
    commercialCharacteristics: string;
    financialComplexity: string;
    regulatoryLandscape: string;
    commonDecisionAreas: string[];
  };
  decisions: IndustryDecisionSituation[];
}

export const defaultDecisionAreas = [
  "Planning Expansion",
  "Working Capital Planning",
  "Inventory Visibility",
  "Cash Flow Management",
  "Pricing Decisions",
  "GST Considerations",
  "Internal Controls",
  "MIS Reporting",
  "Department Profitability",
];

const industryCustomDecisions: Record<string, IndustryDecisionSituation[]> = {
  // ─── HEALTHCARE ──────────────────────────────────────────────────────────
  healthcare: [
    {
      id: "healthcare-dec-1",
      slug: "clinic-expansion",
      title: "Clinic & Multi-Location Expansion",
      category: "Growth & CapEx",
      recognitionLine: "Patient demand at your primary clinic is strong, prompting leadership to evaluate opening a second medical center.",
      commercialContext: "Expanding a healthcare practice requires committing capital for leasehold improvements, diagnostic suites, and medical staffing before patient volumes generate positive operating cash flow.",
      financialConsiderations: [
        {
          title: "Capital Outlay & Ramp-Up Reserves",
          description: "Calculating pre-opening fit-out outlay and estimating working capital reserves required during early operating months.",
        },
        {
          title: "Break-Even Patient Volume",
          description: "Determining exact monthly consultation and procedure volumes needed to cover fixed clinic overhead.",
        },
        {
          title: "Entity & Branch Risk Structure",
          description: "Evaluating direct branch setup versus registering a separate corporate entity for legal and financial risk management.",
        },
      ],
      professionalConsiderations: [
        "System study of primary clinic cash flows to assess capacity to fund expansion deficits",
        "Financial analysis and sensitivity stress-testing of patient volume and fee assumptions",
        "Operational review of central procurement and shared clinical staff utilization",
        "Tax and statutory compliance review for multi-location healthcare operations",
        "Risk assessment of capital recovery and downside volume scenarios",
        "Reporting frameworks for periodic branch financial tracking",
      ],
      associatedServiceSlugs: ["business-advisory", "virtual-cfo", "compliance"],
      relatedInsightTitles: [
        {
          title: "Before Opening Another Clinic: What the Numbers Tell You",
          category: "Healthcare Growth",
          readTime: "6 min read",
          slug: "before-opening-another-clinic-what-the-numbers-tell-you",
        },
      ],
    },
    {
      id: "healthcare-dec-2",
      slug: "doctor-compensation",
      title: "Doctor Compensation & Specialty Margins",
      category: "Clinical Margins",
      recognitionLine: "Specialist doctor compensation structures vary across fixed retainers, revenue shares, and procedure fees, creating unpredictable monthly practice margins.",
      commercialContext: "Aligning doctor incentives with clinic solvency requires modeling net margin contributions per department after accounting for consumable and support overhead.",
      financialConsiderations: [
        {
          title: "Departmental Net Contribution",
          description: "Evaluating net profit contribution per specialty after direct clinical expenses and doctor payouts.",
        },
        {
          title: "Payout Model Evaluation",
          description: "Structuring fixed retainer versus percentage-based payouts to protect baseline practice margins.",
        },
        {
          title: "Withholding Tax Alignment",
          description: "Ensuring doctor compensation agreements comply with statutory withholding guidelines.",
        },
      ],
      professionalConsiderations: [
        "System study of existing clinician contracts and fee sharing arrangements",
        "Financial analysis of department-wise net margin contributions",
        "Operational review of procedure-level consumable cost tracking",
        "Review of statutory withholding and professional fee compliance",
        "Risk assessment of specialist concentration risk on overall practice revenue",
        "Reporting frameworks for monthly doctor payout and margin statements",
      ],
      associatedServiceSlugs: ["virtual-cfo", "business-advisory"],
      relatedInsightTitles: [
        {
          title: "Structuring Doctor Payout Models to Protect Practice Margins",
          category: "Healthcare Advisory",
          readTime: "5 min read",
          slug: "structuring-doctor-payout-models",
        },
      ],
    },
    {
      id: "healthcare-dec-3",
      slug: "equipment-capex",
      title: "Diagnostic Equipment Acquisition",
      category: "Equipment CapEx",
      recognitionLine: "Upgrading diagnostic imaging, laboratory equipment, or surgical suites requires substantial capital outlay or OEM financing.",
      commercialContext: "Acquiring high-value medical equipment requires analyzing scan volume thresholds, technology obsolescence, and operational cash flows.",
      financialConsiderations: [
        {
          title: "Utilization & Payback Modeling",
          description: "Calculating the monthly patient scan volume required to service equipment debt or lease costs.",
        },
        {
          title: "Lease versus Purchase Evaluation",
          description: "Comparing cash flow impact, asset depreciation benefits, and lease rental deductions.",
        },
      ],
      professionalConsiderations: [
        "System study of projected diagnostic demand and pricing structures",
        "Financial evaluation of payback period, Net Present Value (NPV), and cash flow impact",
        "Operational review of maintenance agreements and operating overhead",
        "Assessment of depreciation tax benefits and lease accounting treatments",
        "Risk assessment of technology obsolescence and volume sensitivity",
        "Reporting frameworks for asset utilization tracking",
      ],
      associatedServiceSlugs: ["corporate-advisory", "business-advisory"],
      relatedInsightTitles: [
        {
          title: "Evaluating Diagnostic Equipment CapEx: Payback & Financing",
          category: "CapEx Evaluation",
          readTime: "6 min read",
          slug: "evaluating-diagnostic-equipment-capex",
        },
      ],
    },
  ],

  // ─── MANUFACTURING ───────────────────────────────────────────────────────
  manufacturers: [
    {
      id: "manufacturers-dec-1",
      slug: "capacity-expansion",
      title: "Plant & Production Line Expansion",
      category: "CapEx & Production",
      recognitionLine: "Factory order books are near capacity, prompting management to evaluate expanding production lines or adding plant machinery.",
      commercialContext: "Industrial manufacturing expansion requires balancing capital expenditure with long-term debt servicing, power utilities, and raw material procurement liquidity.",
      financialConsiderations: [
        {
          title: "Debt Service & Cash Break-Even",
          description: "Modeling fixed plant overhead and term loan interest against projected order volumes.",
        },
        {
          title: "Machine Utilization & Shift OEE",
          description: "Assessing overall equipment effectiveness and shift capacity before committing new capital.",
        },
      ],
      professionalConsiderations: [
        "System study of plant capacity, bottleneck processes, and shift economics",
        "Financial analysis of payback periods, NPV, and debt service coverage ratios",
        "Operational review of raw material supply agreements and power/utility costs",
        "Tax review of capital asset depreciation benefits and vendor payment mandates",
        "Risk assessment of demand cyclicality and fixed cost burdens",
        "Reporting frameworks for plant expansion capital tracking",
      ],
      associatedServiceSlugs: ["business-advisory", "virtual-cfo"],
      relatedInsightTitles: [
        {
          title: "Evaluating Plant Expansion CapEx: Debt Service & Capacity Modeling",
          category: "Manufacturing Strategy",
          readTime: "6 min read",
          slug: "evaluating-plant-expansion-capex",
        },
      ],
    },
    {
      id: "manufacturers-dec-2",
      slug: "working-capital-msme",
      title: "Raw Material Procurement & Supplier Credit",
      category: "Working Capital",
      recognitionLine: "Raw material price volatility and strict vendor payment terms strain cash reserves during peak production runs.",
      commercialContext: "Managing manufacturing liquidity requires balancing supplier credit terms, raw material holding cycles, and customer receivables.",
      financialConsiderations: [
        {
          title: "Supplier Payment Alignment",
          description: "Aligning vendor payment terms with statutory payment timelines to maintain tax deductions.",
        },
        {
          title: "Raw Material Yield & Scrap Tracking",
          description: "Measuring material conversion ratios and scrap recovery value against standard product costing.",
        },
      ],
      professionalConsiderations: [
        "System study of procurement schedules, inventory holding, and supplier credit agreements",
        "Financial analysis of cash conversion cycle from raw material arrival to customer collection",
        "Operational review of store management, material issue controls, and scrap records",
        "Tax implications of statutory vendor payment timelines and input tax credit availability",
        "Risk assessment of supplier concentration and input price inflation",
        "Reporting frameworks for weekly working capital and inventory aging reports",
      ],
      associatedServiceSlugs: ["virtual-cfo", "accounting-bookkeeping"],
      relatedInsightTitles: [
        {
          title: "Optimizing Manufacturing Working Capital & Vendor Credit Guidelines",
          category: "Working Capital",
          readTime: "5 min read",
          slug: "optimizing-manufacturing-working-capital",
        },
      ],
    },
    {
      id: "manufacturers-dec-3",
      slug: "jobwork-vs-captive",
      title: "Job-Work vs Captive Line Production",
      category: "Operations & Costing",
      recognitionLine: "Surging order volumes require choosing between investing in additional in-house machinery or outsourcing specialized processes to job-workers.",
      commercialContext: "Outsourcing processes converts fixed machinery CapEx into variable operating costs, but requires strict yield reconciliation and quality control.",
      financialConsiderations: [
        {
          title: "In-House vs Outsourced Cost Per Unit",
          description: "Comparing internal machine hour rates against job-work processing charges.",
        },
        {
          title: "Process Yield & Waste Accounting",
          description: "Establishing material reconciliation procedures for raw stock sent to external processors.",
        },
      ],
      professionalConsiderations: [
        "Financial comparison of fixed machinery investment vs variable job-work expenses",
        "Operational audit of job-work material dispatch, processing loss, and return schedules",
        "Tax review of job-work documentation and input tax credit compliance",
        "Risk evaluation of supplier dependency and product quality consistency",
      ],
      associatedServiceSlugs: ["business-advisory", "audit-assurance"],
      relatedInsightTitles: [
        {
          title: "Job-Work vs Captive Line Expansion: Cost & Inventory Control",
          category: "Manufacturing Operations",
          readTime: "5 min read",
          slug: "jobwork-vs-captive-expansion",
        },
      ],
    },
  ],

  // ─── RETAIL & WHOLESALERS ─────────────────────────────────────────────────
  "retail-wholesalers": [
    {
      id: "retail-dec-1",
      slug: "store-expansion",
      title: "Retail Store Expansion & Lease Economics",
      category: "Retail Growth",
      recognitionLine: "Sales at flagship retail outlets are established, prompting management to evaluate launching additional retail stores.",
      commercialContext: "Opening new retail stores requires evaluating prime location rentals, store fit-out capital, inventory seeding, and local footfall velocity.",
      financialConsiderations: [
        {
          title: "Store Rent to Sales Ratio",
          description: "Establishing maximum sustainable lease rental commitments relative to projected store revenue.",
        },
        {
          title: "Inventory Seeding Outlay",
          description: "Calculating capital required to stock initial store inventory and maintain stock rotation.",
        },
      ],
      professionalConsiderations: [
        "System study of existing store economics, sales per square foot, and margin performance",
        "Financial analysis of store break-even timelines and lease vs asset payback",
        "Operational review of central warehouse replenishment and store logistics",
        "Tax and GST multi-store registration and inter-branch inventory transfer compliance",
        "Risk assessment of store location cannibalization and fixed lease commitments",
        "Reporting frameworks for store-wise P&L and sales velocity tracking",
      ],
      associatedServiceSlugs: ["business-advisory", "virtual-cfo"],
      relatedInsightTitles: [
        {
          title: "Evaluating Retail Store Expansion: Rent-to-Sales & Inventory Seeding",
          category: "Retail Advisory",
          readTime: "5 min read",
          slug: "evaluating-retail-store-expansion",
        },
      ],
    },
    {
      id: "retail-dec-2",
      slug: "pos-reconciliation",
      title: "POS Reconciliation & Cash/UPI Settlements",
      category: "Cash & Control",
      recognitionLine: "Daily point-of-sale billing records show discrepancy when reconciled against bank deposits and payment gateway settlements.",
      commercialContext: "High transaction volumes across cash, card, UPI, and delivery platforms create settlement lag and reconciliation risk.",
      financialConsiderations: [
        {
          title: "Gateway & Card Fee Deductions",
          description: "Reconciling merchant discount rates (MDR) and net gateway payouts against gross POS sales.",
        },
        {
          title: "Cash Collection Discipline",
          description: "Establishing daily store-level cash deposit verification and safe balancing controls.",
        },
      ],
      professionalConsiderations: [
        "System study of POS software billing integration with central accounting ledger",
        "Financial analysis of daily payment gateway settlements and unidentified ledger differences",
        "Operational review of store cashier controls and cash deposit routines",
        "Review of statutory GST reporting accuracy based on POS transaction logs",
        "Risk assessment of store-level cash leakages and unrecorded discounts",
        "Reporting frameworks for daily sales and gateway settlement dashboards",
      ],
      associatedServiceSlugs: ["accounting-bookkeeping", "audit-assurance"],
      relatedInsightTitles: [
        {
          title: "Streamlining POS Cash and Gateway Reconciliation for Retail Chains",
          category: "Retail Controls",
          readTime: "4 min read",
          slug: "streamlining-pos-reconciliation",
        },
      ],
    },
    {
      id: "retail-dec-3",
      slug: "inventory-shrinkage-rotation",
      title: "Multi-Location Stock Rotation & Shrinkage",
      category: "Inventory Capital",
      recognitionLine: "Capital is locked in slow-moving retail stock while fast-selling product lines face stockouts across retail branches.",
      commercialContext: "Retail profitability requires managing inventory holding cycles, store-to-store stock transfers, and seasonal clearance markdowns.",
      financialConsiderations: [
        {
          title: "Inventory Velocity & Stockouts",
          description: "Measuring inventory turnover ratios across categories to eliminate dead stock and prevent lost sales.",
        },
        {
          title: "Shrinkage & Markdown Reserve",
          description: "Establishing formal reserves for store pilferage, shelf damage, and seasonal clearance markdowns.",
        },
      ],
      professionalConsiderations: [
        "Audit of store inventory counting routines and variance reconciliation",
        "Financial analysis of category-wise gross margin return on investment",
        "Review of inter-branch inventory transfer valuation and tax compliance",
        "Design of inventory aging dashboards for purchasing teams",
      ],
      associatedServiceSlugs: ["virtual-cfo", "audit-assurance"],
      relatedInsightTitles: [
        {
          title: "Managing Inventory Capital & Stock Rotation Across Retail Chains",
          category: "Retail Management",
          readTime: "5 min read",
          slug: "managing-retail-inventory-capital",
        },
      ],
    },
  ],

  // ─── REAL ESTATE ─────────────────────────────────────────────────────────
  "real-estate": [
    {
      id: "realestate-dec-1",
      slug: "rera-cashflow",
      title: "Project Designated Accounts & Milestone Liquidity",
      category: "Project Cash Flow",
      recognitionLine: "Customer booking collections are arriving, but project funds must be managed in accordance with project construction schedules.",
      commercialContext: "Managing real estate project liquidity requires adhering to statutory project account rules while funding ongoing construction schedules.",
      financialConsiderations: [
        {
          title: "Permissible Account Withdrawals",
          description: "Calculating permissible fund withdrawals based on percentage of completion and professional progress certifications.",
        },
        {
          title: "Construction Debt Service",
          description: "Matching debt service commitments against project milestone receivables.",
        },
      ],
      professionalConsiderations: [
        "System study of project bank accounts, contractor billing, and compliance registers",
        "Financial analysis of project cash flow velocity, construction cost estimates, and receivables",
        "Operational review of vendor payment processing and site milestone verification",
        "Issuance of statutory progress certifications for account withdrawals and compliance filings",
        "Risk assessment of project cash deficits and construction delay penalties",
        "Reporting frameworks for project-wise liquidity dashboards",
      ],
      associatedServiceSlugs: ["business-advisory", "audit-assurance"],
      relatedInsightTitles: [
        {
          title: "Navigating Designated Project Accounts & Construction Cash Management",
          category: "Real Estate Compliance",
          readTime: "6 min read",
          slug: "navigating-rera-designated-accounts",
        },
      ],
    },
    {
      id: "realestate-dec-2",
      slug: "jda-structuring",
      title: "Joint Development Agreements & Landowner Terms",
      category: "Project Structuring",
      recognitionLine: "Acquiring new land parcels requires evaluating Joint Development Agreements (JDA) with landowners versus outright land purchase.",
      commercialContext: "Structuring JDAs requires balancing area-sharing versus revenue-sharing ratios, upfront landowner deposits, and construction cost allocations.",
      financialConsiderations: [
        {
          title: "Area-Sharing vs Revenue-Sharing",
          description: "Modeling gross profit margins under area-allocation versus revenue-distribution developer terms.",
        },
        {
          title: "Upfront Land Deposit Payback",
          description: "Calculating cash flow timelines required to recover refundable landowner security deposits.",
        },
      ],
      professionalConsiderations: [
        "Financial modeling of developer margin sensitivity under varied JDA revenue split ratios",
        "Review of landowner payout milestones against construction cash inflow schedules",
        "Tax structuring of Joint Development Agreements and development rights transfer timing",
        "Risk assessment of title disputes, municipal approval delays, and landowner litigation",
      ],
      associatedServiceSlugs: ["business-advisory", "tax-planning"],
      relatedInsightTitles: [
        {
          title: "Structuring Joint Development Agreements: Revenue-Sharing & Cash Flow",
          category: "Real Estate Advisory",
          readTime: "6 min read",
          slug: "structuring-joint-development-agreements",
        },
      ],
    },
  ],

  // ─── EDUCATION ───────────────────────────────────────────────────────────
  education: [
    {
      id: "education-dec-1",
      slug: "campus-infrastructure-capex",
      title: "Campus Infrastructure & Facility Expansion",
      category: "Institutional Growth",
      recognitionLine: "Student enrollment is growing, prompting management to evaluate building new academic blocks, hostels, or laboratory facilities.",
      commercialContext: "Educational infrastructure expansion requires committing upfront capital for building construction and academic equipment before tuition collections arrive.",
      financialConsiderations: [
        {
          title: "Capital Outlay & Fee Match",
          description: "Balancing debt financing with internal reserves to cover construction costs without straining annual operating funds.",
        },
        {
          title: "Student Batch Break-Even",
          description: "Determining minimum enrollment numbers per course required to service campus expansion debt.",
        },
      ],
      professionalConsiderations: [
        "System study of current campus capacity, enrollment trends, and fee collection cycles",
        "Financial feasibility modeling and sensitivity analysis for new academic facilities",
        "Operational review of laboratory procurement, technology setup, and maintenance costs",
        "Statutory compliance review for educational trust and society capital expenditure",
        "Risk assessment of enrollment fluctuations and fixed campus overhead",
        "Reporting frameworks for trust board oversight and lender reporting",
      ],
      associatedServiceSlugs: ["business-advisory", "virtual-cfo"],
      relatedInsightTitles: [
        {
          title: "Evaluating Campus Infrastructure CapEx: Enrollment & Debt Capacity",
          category: "Education Strategy",
          readTime: "5 min read",
          slug: "evaluating-campus-infrastructure-capex",
        },
      ],
    },
    {
      id: "education-dec-2",
      slug: "fee-cashflow-seasonality",
      title: "Tuition Collection Seasonality & Operational Liquidity",
      category: "Operating Liquidity",
      recognitionLine: "Annual tuition fee collection creates high cash inflows during admission months followed by 8 months of recurring operational expenses.",
      commercialContext: "Managing institutional liquidity requires structuring cash reserves during admission peak to cover year-round faculty payroll and facility overhead.",
      financialConsiderations: [
        {
          title: "Year-Round Payroll Reserve",
          description: "Calculating monthly cash reserve allocations from admission fee receipts to cover lean-season faculty salaries.",
        },
        {
          title: "Auxiliary Facility Recovery",
          description: "Evaluating cost recovery and margins across hostel, transport, and canteen operating arrangements.",
        },
      ],
      professionalConsiderations: [
        "Financial modeling of annual tuition collection cycles and monthly operational disbursements",
        "Review of student fee installment structures and delinquency tracking",
        "Operational review of auxiliary service contracts (transportation, catering, security)",
        "Regulatory review of statutory trust income application mandates",
        "Risk management of fee defaults and mid-year student dropouts",
        "Reporting frameworks for monthly liquidity and budget variance tracking",
      ],
      associatedServiceSlugs: ["virtual-cfo", "accounting-bookkeeping"],
      relatedInsightTitles: [
        {
          title: "Managing Educational Institution Cash Flows Across Admission Cycles",
          category: "Institutional Finance",
          readTime: "5 min read",
          slug: "managing-education-cashflows",
        },
      ],
    },
  ],

  // ─── NBFCs ───────────────────────────────────────────────────────────────
  nbfcs: [
    {
      id: "nbfcs-dec-1",
      slug: "cost-of-funds-spread",
      title: "Cost of Funds & Lending Margin Management",
      category: "Treasury & Spread",
      recognitionLine: "Fluctuating bank borrowing rates pressure net interest margins across vehicle, personal, or micro-finance loan portfolios.",
      commercialContext: "Maintaining credit profitability requires balancing institutional borrowing costs against borrower interest yields and loan origination fees.",
      financialConsiderations: [
        {
          title: "Net Interest Margin (NIM) Protection",
          description: "Modeling lending interest rates against weighted average cost of bank borrowings and commercial paper.",
        },
        {
          title: "Fee Income & Origination Cost",
          description: "Evaluating loan processing fee contributions relative to credit assessment and channel sourcing expenses.",
        },
      ],
      professionalConsiderations: [
        "System study of borrowing portfolio, debt maturity profiles, and interest rate sensitivity",
        "Financial analysis of portfolio net interest margins across loan categories and borrower segments",
        "Operational review of loan origination costs, verification expenses, and branch overhead",
        "Tax review of interest income recognition and statutory provision deductions",
        "Risk assessment of interest rate fluctuations and competitor lending rates",
        "Reporting frameworks for board risk committees and asset-liability management",
      ],
      associatedServiceSlugs: ["business-advisory", "virtual-cfo"],
      relatedInsightTitles: [
        {
          title: "Protecting Net Interest Margins in NBFC Lending Portfolios",
          category: "NBFC Strategy",
          readTime: "6 min read",
          slug: "protecting-nbfc-net-interest-margins",
        },
      ],
    },
    {
      id: "nbfcs-dec-2",
      slug: "alm-liquidity-matching",
      title: "Asset-Liability Matching & Liquidity Duration",
      category: "ALM & Liquidity",
      recognitionLine: "Short-term credit facilities fund multi-year borrower loan portfolios, creating liquidity maturity gaps.",
      commercialContext: "Managing financial institution liquidity requires monitoring maturity buckets to ensure repayment commitments match portfolio collection inflows.",
      financialConsiderations: [
        {
          title: "Maturity Gap Analysis",
          description: "Tracking asset and liability cash flows across monthly time buckets to identify structural liquidity shortfalls.",
        },
        {
          title: "Refinancing & Debt Mix",
          description: "Structuring term loans, bank lines, and securitization pools to support long-term portfolio growth.",
        },
      ],
      professionalConsiderations: [
        "Financial modeling of asset-liability maturity schedules and liquidity coverage ratios",
        "Review of loan portfolio prepayment rates and default probability assumptions",
        "Operational evaluation of treasury operations and borrowing documentation",
        "Regulatory compliance review of capital adequacy and statutory liquidity reserves",
        "Risk assessment of credit market tighteners and lender concentration",
        "Reporting frameworks for monthly Asset Liability Committee (ALCO) disclosures",
      ],
      associatedServiceSlugs: ["virtual-cfo", "audit-assurance"],
      relatedInsightTitles: [
        {
          title: "Managing Asset-Liability Mismatch and Treasury Liquidity in NBFCs",
          category: "NBFC Governance",
          readTime: "6 min read",
          slug: "nbfc-alm-liquidity-management",
        },
      ],
    },
  ],

  // ─── PHARMACEUTICALS ─────────────────────────────────────────────────────
  pharma: [
    {
      id: "pharma-dec-1",
      slug: "formulation-plant-capex",
      title: "Formulation Plant CapEx & Quality Upgrades",
      category: "Facility & Regulatory CapEx",
      recognitionLine: "Expanding market reach or updating manufacturing lines requires investing in cleanroom facilities, machinery, and quality control systems.",
      commercialContext: "Upgrading pharma production requires committing capital to WHO-GMP compliant facilities and automated packaging lines before new batch approvals.",
      financialConsiderations: [
        {
          title: "Cleanroom & Machinery Outlay",
          description: "Calculating capital required for HVAC cleanrooms, air handling units, and high-speed tableting machinery.",
        },
        {
          title: "Batch Volume Payback",
          description: "Modeling unit production costs and minimum monthly batch volumes required to achieve payback.",
        },
      ],
      professionalConsiderations: [
        "System study of plant capacity utilization, cleanroom specs, and batch cycle times",
        "Financial feasibility modeling and NPV analysis for new formulation lines",
        "Operational review of raw active pharmaceutical ingredient (API) procurement and utility costs",
        "Tax review of capital asset depreciation benefits and scientific research incentives",
        "Risk assessment of regulatory inspection timelines and market adoption",
        "Reporting frameworks for plant CapEx tracking and cost accounting",
      ],
      associatedServiceSlugs: ["business-advisory", "corporate-advisory"],
      relatedInsightTitles: [
        {
          title: "Evaluating Pharma Plant CapEx: Cleanroom Investment & Payback",
          category: "Pharma CapEx",
          readTime: "6 min read",
          slug: "evaluating-pharma-plant-capex",
        },
      ],
    },
    {
      id: "pharma-dec-2",
      slug: "distribution-expiry-returns",
      title: "Distribution Channel Terms & Expired Stock Credit Notes",
      category: "Distribution Liquidity",
      recognitionLine: "Managing stockist credit terms and market returns of near-expiry formulations strains working capital.",
      commercialContext: "Pharma profitability requires balancing distributor payment credit, stockist inventory levels, and credit note issuance for returned near-expiry medicines.",
      financialConsiderations: [
        {
          title: "Expired Stock Credit Note Allocation",
          description: "Establishing financial reserves for market returns of expired formulations and credit note reconciliations.",
        },
        {
          title: "Distributor Margin Structure",
          description: "Structuring trade discounts and stockist payment credit terms to maintain channel distribution velocity.",
        },
      ],
      professionalConsiderations: [
        "Audit of distributor credit terms, stockist inventory levels, and return policy agreements",
        "Financial analysis of net margin contribution by formulation line and territory",
        "Operational review of batch tracking, expiry date monitoring, and reverse logistics",
        "Tax and GST review of credit note issuance and input tax credit adjustments for expired goods",
        "Risk evaluation of price control regulations and distributor concentration",
        "Reporting frameworks for monthly channel sales and expiry return dashboards",
      ],
      associatedServiceSlugs: ["virtual-cfo", "accounting-bookkeeping"],
      relatedInsightTitles: [
        {
          title: "Managing Pharma Distribution Margins & Expired Stock Credit Notes",
          category: "Pharma Controls",
          readTime: "5 min read",
          slug: "managing-pharma-distribution-margins",
        },
      ],
    },
  ],

  // ─── TEXTILES ────────────────────────────────────────────────────────────
  textiles: [
    {
      id: "textiles-dec-1",
      slug: "yarn-procurement-volatility",
      title: "Raw Cotton & Yarn Procurement Volatility",
      category: "Raw Material Liquidity",
      recognitionLine: "Fluctuating raw cotton and yarn prices strain operating margins on fixed-price garment export and domestic supply orders.",
      commercialContext: "Managing textile mill liquidity requires balancing yarn purchase schedules against customer delivery contracts and inventory holding periods.",
      financialConsiderations: [
        {
          title: "Yarn Costing & Margin Lock-In",
          description: "Calculating raw material cost ratios relative to committed customer purchase order prices.",
        },
        {
          title: "Seasonal Holding Outlay",
          description: "Managing working capital borrowing for seasonal raw cotton or yarn inventory buildup.",
        },
      ],
      professionalConsiderations: [
        "System study of raw material procurement contracts, stock holding, and price hedging",
        "Financial analysis of cash conversion cycle from yarn purchase to garment export collection",
        "Operational review of cotton spinning waste, yarn quality specs, and warehouse storage",
        "Tax review of statutory supplier payment rules and GST input tax credit availability",
        "Risk assessment of raw material price spikes and customer order cancellations",
        "Reporting frameworks for weekly raw material inventory aging and margin reports",
      ],
      associatedServiceSlugs: ["virtual-cfo", "business-advisory"],
      relatedInsightTitles: [
        {
          title: "Managing Raw Material Volatility & Working Capital in Textiles",
          category: "Textile Advisory",
          readTime: "5 min read",
          slug: "managing-textile-working-capital",
        },
      ],
    },
    {
      id: "textiles-dec-2",
      slug: "jobwork-processing-yield",
      title: "Decentralized Job-Work & Processing Yield",
      category: "Production & Job-Work Costing",
      recognitionLine: "Processing fabric across decentralized spinning, weaving, dyeing, and stitching units creates yield loss and tracking complexity.",
      commercialContext: "Textile manufacturing profitability requires auditing material weight loss during processing and monitoring job-worker conversion charges.",
      financialConsiderations: [
        {
          title: "Process Weight Loss & Waste Norms",
          description: "Establishing standard shrinkage, dyeing loss, and cutting waste percentages against actual job-worker returns.",
        },
        {
          title: "Job-Work Rate Reconciliation",
          description: "Auditing conversion charges per meter or kilogram across external processing contractors.",
        },
      ],
      professionalConsiderations: [
        "System audit of job-work challan dispatches, process waste norms, and fabric returns",
        "Financial comparison of captive processing expansion vs outsourced job-work expenses",
        "Operational review of fabric inspection routines and contractor defect rates",
        "Tax review of job-work documentation and GST input tax credit reconciliation",
        "Risk management of processor delays and inventory damage during transit",
        "Reporting frameworks for job-worker inventory status and process yield dashboards",
      ],
      associatedServiceSlugs: ["accounting-bookkeeping", "audit-assurance"],
      relatedInsightTitles: [
        {
          title: "Auditing Textile Job-Work Yield and Processing Conversion Charges",
          category: "Textile Operations",
          readTime: "5 min read",
          slug: "auditing-textile-jobwork-yield",
        },
      ],
    },
  ],
};

// Helper to generate canonical decision situations for any industry
export function getIndustryDecisions(
  industrySlug: string,
  industryName: string
): IndustryOverviewData {
  const normalizedSlug =
    industrySlug === "retail"
      ? "retail-wholesalers"
      : industrySlug === "nbfc"
      ? "nbfcs"
      : industrySlug;

  const customDecisions =
    industryCustomDecisions[normalizedSlug] ||
    industryCustomDecisions[industrySlug];

  const decisionsToUse =
    customDecisions && customDecisions.length > 0
      ? customDecisions
      : [
          {
            id: `${industrySlug}-dec-1`,
            slug: "planning-expansion",
            title: "Planning Expansion",
            category: "Capital Exposure",
            recognitionLine: `Demand is growing, prompting management to evaluate expanding facilities, opening new branches, or acquiring assets.`,
            commercialContext: `Expanding an existing ${industryName.toLowerCase()} operation creates a distinct economic unit with its own setup costs, pre-opening overhead, and ramp-up working capital requirements.`,
            financialConsiderations: [
              {
                title: "Capital Outlay & Financing Structure",
                description:
                  "Balancing debt financing with internal accruals to prevent liquidity pressure during construction or setup.",
              },
              {
                title: "Break-Even & Sensitivity Modeling",
                description:
                  "Determining required operating volume and contribution margins to achieve cash break-even.",
              },
              {
                title: "Tax & Entity Governance",
                description:
                  "Evaluating branch structure versus new corporate entities for tax optimization and legal protection.",
              },
            ],
            professionalConsiderations: [
              "System study of current capital structure and available cash reserves",
              "Detailed financial analysis and sensitivity modeling under varied revenue scenarios",
              "Operational review of supply chain and staffing dependencies",
              "Direct tax and GST structuring for new capital assets",
              "Risk assessment of downside cash flow exposure",
              "Reporting considerations for lender and board oversight",
            ],
            associatedServiceSlugs: [
              "virtual-cfo",
              "business-advisory",
              "compliance",
            ],
            relatedInsightTitles: [
              {
                title: "Evaluating Capital Outlay Before Multi-Location Expansion",
                category: "Capital Strategy",
                readTime: "6 min read",
                slug: "before-opening-another-clinic-what-the-numbers-tell-you",
              },
            ],
          },
        ];

  return {
    industrySlug,
    heroTitle: `Financial, Tax & Strategic Advisory for ${industryName} Businesses`,
    heroDescription: `Helping ${industryName.toLowerCase()} enterprises make clearer, more confident financial decisions across capital commitments, working capital, statutory compliance, and strategic growth.`,
    understandingEnvironment: {
      businessModel: `${industryName} enterprises operate through capital commitments, structured commercial cycles, and multi-layered cash flow dependencies. Operating margins depend on disciplined cost allocation and working capital control.`,
      operatingEnvironment: `The commercial landscape requires balancing front-line operations with backend financial governance, supplier terms, and compliance obligations.`,
      commercialCharacteristics: `Long transaction cycles, specialized asset requirements, and customer payment lead times characterize day-to-day operations in this sector.`,
      financialComplexity: `Managing multi-branch operations, variable margin structures, indirect tax allocations, and working capital lockup requires structured financial oversight.`,
      regulatoryLandscape: `Subject to statutory audit, direct tax provisions, GST compliance, environmental/sectoral licensing, and state-specific commercial regulations.`,
      commonDecisionAreas: [
        "Evaluating capital expenditure for new capacity or equipment",
        "Structuring working capital cycles against credit terms",
        "Establishing department and unit-level profitability tracking",
        "Managing tax positions across multi-branch or inter-state operations",
      ],
    },
    decisions: decisionsToUse,
  };
}
