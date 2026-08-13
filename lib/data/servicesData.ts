export interface ServiceData {
  slug: string;
  title: string;
  eyebrow: string;
  headline: string;
  description: string;
  heroImage: string;
  problemTitle: string;
  problemDescription: string;
  problemPoints: string[];
  deliverables: { title: string; desc: string }[];
  processSteps: { step: string; title: string; desc: string }[];
  whoItIsFor: string[];
  whyUsPoints: { title: string; desc: string }[];
}

export const SERVICES_DATABASE: Record<string, ServiceData> = {
  "virtual-cfo": {
    slug: "virtual-cfo",
    title: "Virtual CFO",
    eyebrow: "STRATEGIC FINANCIAL LEADERSHIP",
    headline: "Transform financial data into strategic decision-making and sustainable business growth.",
    description:
      "Get executive-level financial management, cash flow governance, budgeting, and board reporting without the cost of a full-time in-house CFO.",
    heroImage: "/images/hero-bg.jpg",
    problemTitle: "Growing businesses need CFO leadership before they can afford one.",
    problemDescription:
      "As businesses scale, basic accounting is no longer sufficient. Managing cash flow bottlenecks, capital allocation decisions, bank negotiations, and management reporting requires experienced strategic guidance. Without dedicated financial leadership, growth stalls due to poor visibility.",
    problemPoints: [
      "Lack of cash flow forecasting leads to sudden liquidity stress during expansion.",
      "Monthly financials are delayed, missing crucial decision-making windows.",
      "Lack of structured budgeting and variance analysis results in unchecked operational costs.",
      "Lenders and investors demand institutional-grade reporting that internal teams struggle to provide.",
    ],
    deliverables: [
      {
        title: "Cash Flow & Liquidity Management",
        desc: "Rolling 13-week cash flow forecasts, working capital optimization, and liquidity risk mitigation.",
      },
      {
        title: "Financial Planning & Analysis (FP&A)",
        desc: "Annual budgeting, monthly variance tracking, profitability analysis, and cost center optimization.",
      },
      {
        title: "Executive MIS & Board Reporting",
        desc: "Customized dashboard reporting highlighting KPIs, margins, and operational metrics for leadership.",
      },
      {
        title: "Capital Structure & Banking Liaison",
        desc: "Debt structuring, credit facility negotiations, term loan syndication support, and banking management.",
      },
      {
        title: "Strategic Advisory & Expansion Planning",
        desc: "Feasibility studies for new branch rollouts, capital expenditure ROI analysis, and M&A support.",
      },
      {
        title: "Internal Financial Controls",
        desc: "Designing robust internal check balances, approval hierarchies, and fraud prevention mechanisms.",
      },
    ],
    processSteps: [
      {
        step: "01",
        title: "Financial Diagnostic",
        desc: "We perform a comprehensive review of your historical financial data, reporting systems, and cash cycles.",
      },
      {
        step: "02",
        title: "Framework Design",
        desc: "We establish customized reporting templates, rolling cash forecasts, and monthly review cadences.",
      },
      {
        step: "03",
        title: "Strategic Execution",
        desc: "Our senior advisors lead regular management reviews, optimize working capital, and guide major financial decisions.",
      },
      {
        step: "04",
        title: "Continuous Optimization",
        desc: "We continuously refine financial models as your business grows, ensuring agility and regulatory alignment.",
      },
    ],
    whoItIsFor: [
      "Hospitals & Healthcare",
      "Manufacturers",
      "Retail & Wholesalers",
      "NBFCs & Financial Services",
      "Real Estate & Construction",
      "Textiles & Garment Exporters",
    ],
    whyUsPoints: [
      {
        title: "Advisory-First Perspective",
        desc: "We go beyond compliance to provide active strategic insights that impact your bottom line.",
      },
      {
        title: "Cross-Sector Insight",
        desc: "Leveraging experience across manufacturing, healthcare, retail, and financial services.",
      },
      {
        title: "Institutional Discipline",
        desc: "Bringing corporate governance and structured financial management to middle-market enterprises.",
      },
    ],
  },

  "business-advisory": {
    slug: "business-advisory",
    title: "Business Advisory",
    eyebrow: "COMMERCIAL ADVISORY & PERFORMANCE",
    headline: "Solve complex business challenges with strategic clarity and rigorous commercial execution.",
    description:
      "Comprehensive advisory solutions for operational optimization, growth strategy, risk management, and structural transformation.",
    heroImage: "/images/hero-bg.jpg",
    problemTitle: "Navigating market volatility requires structured strategy.",
    problemDescription:
      "Businesses encounter critical junctures—scaling operations, entering new territories, restructuring declining margins, or preparing for generational transition. Navigating these milestones requires objective commercial insight grounded in sound financial realities.",
    problemPoints: [
      "Operational inefficiencies erode profit margins despite revenue growth.",
      "Unclear business model economics make expanding to new markets risky.",
      "Lack of structured risk management leaves the firm vulnerable to market shocks.",
      "Unaligned organizational goals create bottlenecks across finance and operations.",
    ],
    deliverables: [
      {
        title: "Business Model Optimization",
        desc: "Evaluating margin contribution by product line, business unit, and customer segment.",
      },
      {
        title: "Operational Efficiency Audits",
        desc: "Identifying process bottlenecks, overhead waste, and supply chain inefficiencies.",
      },
      {
        title: "Risk Assessment & Mitigation",
        desc: "Formulating comprehensive operational, regulatory, and market risk frameworks.",
      },
      {
        title: "Strategic Growth Roadmaps",
        desc: "Evaluating expansion opportunities, market feasibility, and execution milestones.",
      },
      {
        title: "Generational & Ownership Succession",
        desc: "Structuring smooth leadership transitions and family governance frameworks.",
      },
      {
        title: "Turnaround & Restructuring Support",
        desc: "Restructuring non-performing units, debt obligations, and operational cost bases.",
      },
    ],
    processSteps: [
      {
        step: "01",
        title: "Discovery & Audit",
        desc: "Deep-dive diagnostic into current business operations, market positioning, and financial drivers.",
      },
      {
        step: "02",
        title: "Strategy Formulation",
        desc: "Developing clear strategic options, financial projections, and actionable growth roadmaps.",
      },
      {
        step: "03",
        title: "Implementation Guidance",
        desc: "Collaborating with internal teams to execute strategic initiatives and monitor progress.",
      },
      {
        step: "04",
        title: "Performance Review",
        desc: "Measuring outcomes against established KPIs and adjusting tactics as market conditions evolve.",
      },
    ],
    whoItIsFor: [
      "Promoter-led Enterprises",
      "Manufacturing Units",
      "Retail Chains",
      "Healthcare Groups",
      "Educational Institutions",
      "Real Estate Developers",
    ],
    whyUsPoints: [
      {
        title: "Practical Business Orientation",
        desc: "We focus on pragmatic execution that works within your realistic operational constraints.",
      },
      {
        title: "Multidisciplinary Expertise",
        desc: "Combining financial, legal, tax, and operational perspectives into single-window advisory.",
      },
      {
        title: "Trusted Advisor Partnership",
        desc: "Long-term relationships founded on transparency, confidentiality, and measurable value creation.",
      },
    ],
  },

  "audit-assurance": {
    slug: "audit-assurance",
    title: "Audit & Assurance",
    eyebrow: "STATUTORY ASSURANCE & GOVERNANCE",
    headline: "Maintain rigorous statutory integrity, legal compliance, and stakeholder trust.",
    description:
      "Independent, objective statutory audit, internal financial controls assessment, and assurance services tailored for corporate precision.",
    heroImage: "/images/hero-bg.jpg",
    problemTitle: "Regulatory scrutiny and stakeholder expectations require absolute precision.",
    problemDescription:
      "In an increasingly stringent regulatory landscape, external stakeholders, banks, boards, and regulatory authorities require absolute clarity and confidence in your financial statements. A thorough audit protects brand reputation and mitigates structural risks.",
    problemPoints: [
      "Risk of regulatory penalties due to non-compliance with evolving Accounting Standards.",
      "Internal control deficiencies leading to undetected leakage or operational errors.",
      "Delayed audit cycles stalling bank credit approvals and annual shareholder meetings.",
      "Lack of qualitative feedback on financial risk management during routine audits.",
    ],
    deliverables: [
      {
        title: "Statutory Financial Audit",
        desc: "Independent audit conducted in strict compliance with Companies Act and Indian Accounting Standards.",
      },
      {
        title: "Internal Audit & Control Review",
        desc: "Evaluating internal financial controls (IFCoFR), operational efficiency, and risk exposure.",
      },
      {
        title: "Tax Audit (Section 44AB)",
        desc: "Comprehensive examination of tax records ensuring full compliance with Income Tax Act rules.",
      },
      {
        title: "Stock & Inventory Audit",
        desc: "Physical verification and valuation auditing for manufacturing, retail, and wholesale entities.",
      },
      {
        title: "Management & Operational Audit",
        desc: "Customized audit focus areas evaluating policy adherence, branch performance, and compliance.",
      },
      {
        title: "Concurrent & Bank Audits",
        desc: "Specialized audit services for financial institutions, NBFCs, and commercial lenders.",
      },
    ],
    processSteps: [
      {
        step: "01",
        title: "Planning & Scoping",
        desc: "Understanding the entity, evaluating risk profiles, and establishing the audit strategy.",
      },
      {
        step: "02",
        title: "Fieldwork & Testing",
        desc: "Executing substantive testing, internal control evaluations, and sample verification.",
      },
      {
        step: "03",
        title: "Findings & Discussion",
        desc: "Presenting draft observations to management to ensure complete factual accuracy and clarity.",
      },
      {
        step: "04",
        title: "Reporting & Certification",
        desc: "Issuing formal independent audit reports with actionable internal control recommendations.",
      },
    ],
    whoItIsFor: [
      "Private & Public Limited Companies",
      "Hospitals & Healthcare Networks",
      "NBFCs & Financial Entities",
      "Manufacturing Corporations",
      "Educational Trusts",
      "Real Estate Firms",
    ],
    whyUsPoints: [
      {
        title: "Uncompromising Quality",
        desc: "Adherence to highest professional standards set by ICAI and statutory bodies.",
      },
      {
        title: "Constructive Value Addition",
        desc: "We go beyond highlighting issues to provide practical recommendations for process improvements.",
      },
      {
        title: "Timely Delivery",
        desc: "Structured audit schedules that ensure your statutory filing deadlines are consistently met.",
      },
    ],
  },

  "corporate-advisory": {
    slug: "corporate-advisory",
    title: "Corporate Advisory",
    eyebrow: "CORPORATE TRANSACTIONS & GOVERNANCE",
    headline: "Strategic guidance for capital restructuring, mergers, acquisitions, and corporate governance.",
    description:
      "Expert corporate financial advisory for complex transaction structuring, valuations, due diligence, and regulatory compliance.",
    heroImage: "/images/hero-bg.jpg",
    problemTitle: "Complex corporate transactions require specialized expert guidance.",
    problemDescription:
      "Whether entering joint ventures, executing M&A, restructuring equity, or navigating complex corporate law requirements, improper structuring can create long-term tax liabilities, legal friction, and loss of shareholder value.",
    problemPoints: [
      "Suboptimal transaction structuring resulting in excessive capital gains or stamp duty.",
      "Inadequate financial due diligence hiding liabilities in target acquisitions.",
      "Corporate restructuring delays due to complex Ministry of Corporate Affairs (MCA) procedures.",
      "Lack of valuation clarity leading to disputed deal pricing during transactions.",
    ],
    deliverables: [
      {
        title: "M&A Advisory & Deal Structuring",
        desc: "End-to-end guidance on corporate acquisitions, divestment, and joint venture agreements.",
      },
      {
        title: "Financial Due Diligence",
        desc: "Rigorous financial, tax, and legal due diligence reports for buyers and investors.",
      },
      {
        title: "Business & Asset Valuation",
        desc: "DCF, market approach, and asset-based valuations for statutory, tax, and deal purposes.",
      },
      {
        title: "Corporate Restructuring",
        desc: "Demergers, amalgamations, slump sales, and internal capital reduction schemes.",
      },
      {
        title: "Shareholders Agreements & Governance",
        desc: "Drafting corporate governance protocols, board resolutions, and shareholder terms.",
      },
      {
        title: "FDI & FEMA Compliance",
        desc: "Foreign Direct Investment advisory, cross-border remittance reporting, and RBI filings.",
      },
    ],
    processSteps: [
      {
        step: "01",
        title: "Transaction Structuring",
        desc: "Designing optimal deal models analyzing tax, regulatory, and financial implications.",
      },
      {
        step: "02",
        title: "Valuation & Diligence",
        desc: "Executing thorough background verification, asset evaluation, and financial modeling.",
      },
      {
        step: "03",
        title: "Regulatory Approvals",
        desc: "Managing statutory filings across NCLT, ROC, RBI, and tax authorities.",
      },
      {
        step: "04",
        title: "Post-Merger Integration",
        desc: "Supporting system integration, accounting unification, and continuous governance.",
      },
    ],
    whoItIsFor: [
      "Mid-Market Enterprises",
      "Promoter Groups preparing for Exit/M&A",
      "Companies seeking Institutional Capital",
      "Cross-Border Businesses",
      "NBFCs & Financial Firms",
    ],
    whyUsPoints: [
      {
        title: "Integrated Deal Expertise",
        desc: "Combining tax knowledge, corporate legal framework, and valuation skills.",
      },
      {
        title: "Rigorous Due Diligence",
        desc: "Protecting capital by exposing hidden liabilities and operational red flags.",
      },
      {
        title: "Discreet Execution",
        desc: "Strict confidentiality and seamless execution across all transaction phases.",
      },
    ],
  },

  "accounting-bookkeeping": {
    slug: "accounting-bookkeeping",
    title: "Accounting & Bookkeeping",
    eyebrow: "PRECISION FINANCIAL RECORDKEEPING",
    headline: "Maintain flawless financial ledgers, statutory accounts, and timely monthly closures.",
    description:
      "Reliable, end-to-end accounting services tailored to deliver accurate books, GAAP compliance, and timely management financial statements.",
    heroImage: "/images/hero-bg.jpg",
    problemTitle: "Inaccurate books lead to poor decisions and regulatory penalties.",
    problemDescription:
      "Maintaining internal accounting staff can lead to high turnover, delayed monthly closures, incorrect GST reconciliation, and compliance oversights. Accurate ledgers are the foundational base for all business decisions and tax filings.",
    problemPoints: [
      "Delayed month-end closing leaves management without current financial visibility.",
      "Misclassified expenses result in inaccurate GST input tax credit claims and loss.",
      "High staff turnover in accounts department creates continuity issues and lost records.",
      "Audit preparation takes months due to disorganized books and missing documentation.",
    ],
    deliverables: [
      {
        title: "End-to-End Ledger Accounting",
        desc: "Daily transaction posting, accounts receivable/payable management, and general ledger maintenance.",
      },
      {
        title: "Bank & GST Reconciliation",
        desc: "Monthly bank statement reconciliation, GSTR-2B matching, and ledger verification.",
      },
      {
        title: "Month-End Financial Closure",
        desc: "Timely monthly closing statements, balance sheet reconciliations, and profit loss reports.",
      },
      {
        title: "Payroll & Compensation Processing",
        desc: "Monthly payroll computation, PF/ESI deductions, salary slips, and Form 16 generation.",
      },
      {
        title: "GAAP & Schedule III Compliance",
        desc: "Financial statement preparation adhering to Schedule III of Companies Act.",
      },
      {
        title: "Audit-Ready Support",
        desc: "Compiling audit schedules and working papers to minimize external audit duration.",
      },
    ],
    processSteps: [
      {
        step: "01",
        title: "Chart of Accounts Setup",
        desc: "Structuring a standardized ledger hierarchy tailored to your operational reporting needs.",
      },
      {
        step: "02",
        title: "Data Stream Capture",
        desc: "Establishing secure electronic channels for daily invoice, receipt, and statement processing.",
      },
      {
        step: "03",
        title: "Reconciliation & Closure",
        desc: "Executing monthly reconciliations, accrual entries, and generating preliminary trial balances.",
      },
      {
        step: "04",
        title: "Management Reporting",
        desc: "Delivering finalized monthly financial statements and variance notes to management.",
      },
    ],
    whoItIsFor: [
      "Growing Businesses",
      "SMEs & MSMEs",
      "Branch Offices & Subsidiaries",
      "Retail & Wholesale Entities",
      "Professional Services Firms",
    ],
    whyUsPoints: [
      {
        title: "Continuity & Reliability",
        desc: "Eliminating dependency on internal accountants and eliminating turnover disruptions.",
      },
      {
        title: "Quality Control",
        desc: "Every ledger entry is reviewed by qualified chartered accountants before closure.",
      },
      {
        title: "Seamless Integration",
        desc: "Compatible with modern accounting software (Tally, Zoho Books, SAP, QuickBooks).",
      },
    ],
  },

  "tax-planning": {
    slug: "tax-planning",
    title: "Tax Planning",
    eyebrow: "STRATEGIC TAX OPTIMIZATION & COMPLIANCE",
    headline: "Proactive tax strategies designed to optimize tax positions and ensure full compliance.",
    description:
      "Strategic direct and indirect tax advisory, structured tax planning, assessment representation, and dispute resolution for corporate entities.",
    heroImage: "/images/hero-bg.jpg",
    problemTitle: "Unplanned tax handling leads to surprise liabilities and cash outflow.",
    problemDescription:
      "Tax laws change constantly. Without forward-looking tax planning, businesses miss legitimate deductions, overpay corporate tax, face unexpected year-end demand notices, or trigger costly tax scrutiny.",
    problemPoints: [
      "Surprise tax demands at year-end disrupt cash flow and growth capital.",
      "Failure to structure transactions efficiently leads to double taxation or missed deductions.",
      "Lack of proactive alignment with dynamic GST rules results in blocked input tax credits.",
      "Improper documentation during scrutiny leads to unnecessary penalty proceedings.",
    ],
    deliverables: [
      {
        title: "Corporate Tax Strategy",
        desc: "Structuring business operations, capital investments, and expenses for optimal tax efficiency.",
      },
      {
        title: "Direct Tax Advisory & Opinions",
        desc: "Expert legal opinion on complex Income Tax provisions, capital gains, and international tax.",
      },
      {
        title: "GST Advisory & ITC Optimization",
        desc: "Indirect tax planning, input tax credit optimization, and supply chain tax structuring.",
      },
      {
        title: "Advance Tax Estimation",
        desc: "Quarterly advance tax computation ensuring compliance without overpaying funds early.",
      },
      {
        title: "Assessment & Scrutiny Representation",
        desc: "Drafting responses and representing clients before Income Tax & GST assessment officers.",
      },
      {
        title: "Appeals & Dispute Resolution",
        desc: "Handling appeals before CIT(Appeals) and tax appellate tribunals.",
      },
    ],
    processSteps: [
      {
        step: "01",
        title: "Tax Exposure Audit",
        desc: "Analyzing past tax returns, transaction structures, and current operational framework.",
      },
      {
        step: "02",
        title: "Strategy Development",
        desc: "Designing tailored tax optimization models while ensuring complete statutory compliance.",
      },
      {
        step: "03",
        title: "Quarterly Review",
        desc: "Monitoring estimated profits quarterly to optimize advance tax payments and cash flow.",
      },
      {
        step: "04",
        title: "Filing & Defense",
        desc: "Filing precise tax returns and defending positions strongly during statutory assessments.",
      },
    ],
    whoItIsFor: [
      "Corporate Entities",
      "Promoters & HNIs",
      "Exporters & Importers",
      "Real Estate Developers",
      "Manufacturing Corporations",
    ],
    whyUsPoints: [
      {
        title: "Proactive Guidance",
        desc: "We look ahead to prevent tax issues before year-end, rather than acting reactively.",
      },
      {
        title: "Deep Statutory Knowledge",
        desc: "Backed by years of representation experience in complex tax assessments.",
      },
      {
        title: "Strict Regulatory Ethics",
        desc: "Strategies designed to withstand statutory audit and regulatory scrutiny.",
      },
    ],
  },

  "personal-itr-filing": {
    slug: "personal-itr-filing",
    title: "Personal ITR Filing",
    eyebrow: "INDIVIDUAL TAXATION & WEALTH COMPLIANCE",
    headline: "Accurate, hassle-free Income Tax Return filing for individuals, directors, and HNIs.",
    description:
      "Comprehensive individual tax filing services covering salary, capital gains, foreign assets, house property, and promoter remuneration.",
    heroImage: "/images/hero-bg.jpg",
    problemTitle: "Personal tax compliance has become complex and automated by AI notices.",
    problemDescription:
      "With automated tax matching (AIS & TIS) by the Income Tax Department, simple discrepancies between Form 26AS, bank interest, stock market transactions, and reported income immediately trigger automated tax notices and penalty proceedings.",
    problemPoints: [
      "Mismatch between AIS/TIS data and filed ITR triggering automated defect notices.",
      "Complex capital gains calculations from stocks, mutual funds, real estate, and crypto.",
      "Improper reporting of foreign assets or offshore income incurring severe penalties.",
      "Missed tax deductions under relevant tax regimes (Old vs New Tax Regime optimization).",
    ],
    deliverables: [
      {
        title: "AIS / TIS / Form 26AS Reconciliation",
        desc: "Cross-verifying all personal financial transactions with official tax department records.",
      },
      {
        title: "Capital Gains Computation",
        desc: "Calculating short-term and long-term capital gains across real estate, equity, and debt instruments.",
      },
      {
        title: "Regime Optimization (Old vs New)",
        desc: "Comparative analysis to select the tax regime offering maximum tax savings.",
      },
      {
        title: "Promoter & Director Tax Filing",
        desc: "Filing specialized returns (ITR-2/ITR-3) for company directors, partners, and business owners.",
      },
      {
        title: "Foreign Income & Asset Disclosure",
        desc: "Compliant disclosure of offshore accounts, ESOPs, and foreign equity investments.",
      },
      {
        title: "Notice Response & Rectification",
        desc: "Handling 143(1) intimation adjustments, 139(9) defective returns, and rectification applications.",
      },
    ],
    processSteps: [
      {
        step: "01",
        title: "Document Collection",
        desc: "Gathering Form 16, capital gain statements, bank statements, and investment proofs.",
      },
      {
        step: "02",
        title: "Data Reconciliation",
        desc: "Cross-matching income entries with Annual Information Statement (AIS) and TIS.",
      },
      {
        step: "03",
        title: "Tax Optimization",
        desc: "Evaluating eligible deductions and selecting the most beneficial tax regime.",
      },
      {
        step: "04",
        title: "E-Filing & Verification",
        desc: "Secure online return submission, e-verification guidance, and tracking refund processing.",
      },
    ],
    whoItIsFor: [
      "Company Directors & Promoters",
      "High Net Worth Individuals (HNIs)",
      "Salaried Executives & NRIs",
      "Real Estate Investors",
      "Consultants & Independent Professionals",
    ],
    whyUsPoints: [
      {
        title: "Zero Mismatch Guarantee",
        desc: "Thorough reconciliation with AIS/TIS data to ensure zero defect notices.",
      },
      {
        title: "HNI & Director Expertise",
        desc: "Specialized knowledge handling complex equity structures and director disclosures.",
      },
      {
        title: "Confidential & Secure",
        desc: "Highest standards of personal financial privacy and data protection.",
      },
    ],
  },

  "tds-compliance": {
    slug: "tds-compliance",
    title: "TDS Compliance",
    eyebrow: "TAX DEDUCTION AT SOURCE MANAGEMENT",
    headline: "Flawless Tax Deduction at Source management, timely filings, and Form 16 generation.",
    description:
      "End-to-end TDS compliance services—deduction computation, challan payment, quarterly statement filing, and TRACES reconciliation.",
    heroImage: "/images/hero-bg.jpg",
    problemTitle: "TDS non-compliance leads to heavy interest, disallowance, and TRACES defaults.",
    problemDescription:
      "Tax Deduction at Source (TDS) regulations require precise calculation and strict monthly/quarterly deadlines. Failure to deduct or deposit TDS on time results in 18% annual interest, disallowance of entire business expenses under Section 40(a)(ia), and TRACES short deduction notices.",
    problemPoints: [
      "Expense disallowance under Section 40(a)(ia) leading to inflated tax liability.",
      "Interest and mandatory late filing fees under Section 234E for delayed quarterly returns.",
      "TRACES default demand notices due to PAN errors or incorrect rate selection.",
      "Vendor friction caused by delayed issuance of Form 16A TDS certificates.",
    ],
    deliverables: [
      {
        title: "TDS Rate & Threshold Advisory",
        desc: "Determining applicability of TDS under various sections (194C, 194J, 194H, 194Q, 194R).",
      },
      {
        title: "Monthly TDS Computation & Deposit",
        desc: "Calculating monthly TDS liabilities and generating deposit challans (CRN/Net Banking).",
      },
      {
        title: "Quarterly Return Filing (24Q, 26Q, 27Q)",
        desc: "Error-free quarterly return preparation and e-filing through NSDL/IT portal.",
      },
      {
        title: "TRACES Default Resolution",
        desc: "Analyzing TRACES justification files, filing correction returns, and clearing short deduction demands.",
      },
      {
        title: "Form 16 & 16A Generation",
        desc: "Timely bulk downloading and distribution of digitally signed TDS certificates.",
      },
      {
        title: "Lower TDS Certificate Application",
        desc: "Assisting clients in securing Section 197 certificates for nil/lower TDS deduction.",
      },
    ],
    processSteps: [
      {
        step: "01",
        title: "Monthly Audit",
        desc: "Reviewing vendor ledgers and payroll data to compute exact monthly TDS liabilities.",
      },
      {
        step: "02",
        title: "Challan Payment",
        desc: "Ensuring statutory deposit of TDS before the 7th of every calendar month.",
      },
      {
        step: "03",
        title: "Quarterly Return",
        desc: "Compiling FVU files, verifying PAN records, and submitting quarterly e-TDS returns.",
      },
      {
        step: "04",
        title: "TRACES Closure",
        desc: "Downloading Form 16/16A certificates and auditing TRACES ledger for zero defaults.",
      },
    ],
    whoItIsFor: [
      "Corporate Entities",
      "Partnership Firms & LLPs",
      "Contracting & Infrastructure Firms",
      "Healthcare Networks",
      "Educational Institutions",
    ],
    whyUsPoints: [
      {
        title: "Zero Penalty Record",
        desc: "Systematic monthly workflows that eliminate 234E late fees and interest penalties.",
      },
      {
        title: "TRACES Expert Team",
        desc: "Specialized in rectifying old demand notices and clearing un-reconciled defaults.",
      },
      {
        title: "Seamless Vendor Experience",
        desc: "Prompt certificate generation keeps your vendor and contractor relationships smooth.",
      },
    ],
  },

  "roc-filing": {
    slug: "roc-filing",
    title: "ROC Filing & Secretarial Compliance",
    eyebrow: "CORPORATE SECRETARIAL COMPLIANCE",
    headline: "Seamless Registrar of Companies (ROC) filings, statutory registers, and MCA portal compliance.",
    description:
      "Complete secretarial compliance for Private Limited, Public Limited, and LLP entities under the Companies Act.",
    heroImage: "/images/hero-bg.jpg",
    problemTitle: "ROC non-compliance leads to heavy daily fines and director disqualification.",
    problemDescription:
      "Under the Companies Act, delay in filing statutory annual returns (AOC-4 & MGT-7) attracts continuous daily penalties of ₹100 per day per form with no upper cap. Serious non-compliance risks director DIN disqualification and corporate striking-off.",
    problemPoints: [
      "Accumulating daily statutory penalties for delayed annual return filings.",
      "Risk of Director DIN status becoming inactive due to non-filing of DIR-3 KYC.",
      "Non-maintenance of statutory registers resulting in corporate audit qualifications.",
      "Delays in reporting share allotments, board changes, or registered office shifts.",
    ],
    deliverables: [
      {
        title: "Annual Financial & Return Filings",
        desc: "Preparation and filing of Form AOC-4 (Financials) and MGT-7/7A (Annual Return).",
      },
      {
        title: "Director KYC & DIN Compliance",
        desc: "Annual DIR-3 KYC web verification for all active company directors.",
      },
      {
        title: "Board & General Meeting Documentation",
        desc: "Drafting board meeting notices, agendas, minutes, and annual general meeting (AGM) resolutions.",
      },
      {
        title: "Event-Based ROC Filings",
        desc: "Filing forms for director changes (DIR-12), share capital increase (SH-7), and office relocation (INC-22).",
      },
      {
        title: "Charge Creation & Satisfaction",
        desc: "Filing CHG-1 and CHG-4 forms for securing bank credit facilities and debt clearing.",
      },
      {
        title: "LLP Annual Compliance",
        desc: "Filing Form 11 (Annual Return) and Form 8 (Statement of Accounts & Solvency) for LLPs.",
      },
    ],
    processSteps: [
      {
        step: "01",
        title: "Compliance Audit",
        desc: "Auditing MCA portal master data to check current filing status and identify pending forms.",
      },
      {
        step: "02",
        title: "Document Compilation",
        desc: "Drafting board resolutions, financial disclosures, and director statements.",
      },
      {
        step: "03",
        title: "Professional Certification",
        desc: "Certification of MCA e-forms by practicing Chartered Accountants/Company Secretaries.",
      },
      {
        step: "04",
        title: "Filing & Archival",
        desc: "Submitting forms on V3 MCA portal, paying government fee, and delivering SRN receipts.",
      },
    ],
    whoItIsFor: [
      "Private Limited Companies",
      "Public Limited Entities",
      "Limited Liability Partnerships (LLPs)",
      "Section 8 Companies",
      "Foreign Subsidiary Corporations",
    ],
    whyUsPoints: [
      {
        title: "Timely Statutory Tracking",
        desc: "Automated compliance calendar ensures statutory timelines are never missed.",
      },
      {
        title: "V3 Portal Expertise",
        desc: "Full proficiency navigating the new MCA V3 filing platform without technical delays.",
      },
      {
        title: "Complete Secretarial Support",
        desc: "Handling everything from routine annual returns to complex corporate restructuring filings.",
      },
    ],
  },

  "finance-outsourcing": {
    slug: "finance-outsourcing",
    title: "Finance Outsourcing",
    eyebrow: "MANAGED FINANCIAL OPERATIONS",
    headline: "Outsource your back-office finance function for maximum operational efficiency and security.",
    description:
      "Scalable, managed back-office financial processing—accounts payable, receivable, payroll, and statutory reconciliation.",
    heroImage: "/images/hero-bg.jpg",
    problemTitle: "In-house finance teams create operational friction and key-person risk.",
    problemDescription:
      "Managing an internal accounting department involves high overheads, software licensing, training expenses, and constant key-person risk when key staff resign. Outsourcing provides structured, enterprise-grade operations at lower costs.",
    problemPoints: [
      "High staff turnover disrupting daily invoicing, vendor payments, and bank reconciliations.",
      "Elevated operational costs from full-time salaries, software licenses, and office infrastructure.",
      "Lack of process standardization causing errors in vendor payment cycles.",
      "Inability to scale finance operations quickly during periods of rapid business growth.",
    ],
    deliverables: [
      {
        title: "Accounts Payable Management",
        desc: "Vendor bill verification, 3-way matching, payment scheduling, and ledger reconciliations.",
      },
      {
        title: "Accounts Receivable & Collections",
        desc: "Customer invoicing, payment tracking, aging analysis, and follow-up support.",
      },
      {
        title: "End-to-End Payroll Operations",
        desc: "Salary calculations, incentive processing, tax deductions, PF/ESI deposits, and pay slips.",
      },
      {
        title: "Bank & Credit Card Reconciliation",
        desc: "Daily automated bank feed reconciliation and cash balance tracking.",
      },
      {
        title: "Fixed Asset Accounting",
        desc: "Asset register maintenance, depreciation calculations under Income Tax & Companies Act.",
      },
      {
        title: "Management Financial Dashboard",
        desc: "Weekly operational metrics, cash burn reports, and profitability summaries.",
      },
    ],
    processSteps: [
      {
        step: "01",
        title: "Process Mapping",
        desc: "Documenting your existing financial workflows, approval thresholds, and software stack.",
      },
      {
        step: "02",
        title: "SLA & Portal Setup",
        desc: "Establishing Service Level Agreements (SLAs), data security protocols, and shared drives.",
      },
      {
        step: "03",
        title: "Transition & Migration",
        desc: "Migrating active accounting data with parallel testing to ensure zero operational downtime.",
      },
      {
        step: "04",
        title: "Managed Execution",
        desc: "Dedicated team executes daily processing, weekly payments, and monthly reporting.",
      },
    ],
    whoItIsFor: [
      "Fast-Growing SMEs",
      "Multi-Branch Retailers",
      "Healthcare Facilities",
      "IT & Professional Firms",
      "Foreign Subsidiaries operating in India",
    ],
    whyUsPoints: [
      {
        title: "Cost Efficiency",
        desc: "Save up to 40% compared to maintaining an equivalent full-time internal finance team.",
      },
      {
        title: "Zero Key-Person Risk",
        desc: "Our team structure ensures continuous, uninterrupted operations 365 days a year.",
      },
      {
        title: "Enterprise Data Security",
        desc: "Bank-grade data encryption, restricted access controls, and strict NDAs.",
      },
    ],
  },

  compliance: {
    slug: "compliance",
    title: "Corporate Compliance",
    eyebrow: "REGULATORY COMPLIANCE MANAGEMENT",
    headline: "Comprehensive statutory compliance management to insulate your enterprise from legal risks.",
    description:
      "360-degree compliance tracking, health checks, and filing execution across Direct Tax, Indirect Tax, Corporate Law, and Labour Laws.",
    heroImage: "/images/hero-bg.jpg",
    problemTitle: "Multiple statutory regulatory frameworks create overwhelming legal liability.",
    problemDescription:
      "Indian businesses navigate complex overlapping statutory frameworks—GST, Income Tax, ROC, EPF, ESI, Professional Tax, and Shops & Establishment laws. Overlooking even a minor filing timeline creates severe legal exposure and reputation risk.",
    problemPoints: [
      "Overlapping filing deadlines leading to missed statutory timelines and interest accrual.",
      "Disjointed compliance handling across multiple external vendors causing gaps.",
      "Lack of central compliance visibility for boards and executive management.",
      "Heavy financial penalties for minor procedural non-compliance in statutory filings.",
    ],
    deliverables: [
      {
        title: "Centralized Compliance Calendar",
        desc: "Mapping all annual, quarterly, and monthly statutory timelines specific to your industry.",
      },
      {
        title: "Statutory Health Check & Audit",
        desc: "Comprehensive diagnostic of past compliance records across GST, IT, ROC, and Labour laws.",
      },
      {
        title: "Direct & Indirect Tax Filings",
        desc: "Managing all regular GST returns (GSTR-1, 3B, 9), advance tax, and corporate ITR filings.",
      },
      {
        title: "Labour Law & Payroll Compliance",
        desc: "PF, ESI, Professional Tax, and LWF monthly deposits and statutory return filings.",
      },
      {
        title: "Corporate Law Filings",
        desc: "ROC annual filings, director KYC, and board meeting secretarial documentation.",
      },
      {
        title: "Regulatory Representation",
        desc: "Representing your company before regulatory departments for routine inquiries and audits.",
      },
    ],
    processSteps: [
      {
        step: "01",
        title: "Compliance Mapping",
        desc: "Identifying all statutory provisions applicable to your business structure and industry.",
      },
      {
        step: "02",
        title: "Baseline Audit",
        desc: "Reviewing historical filings to identify and resolve past compliance gaps or liabilities.",
      },
      {
        step: "03",
        title: "Execution Engine",
        desc: "Managing data collection, computation, filing, and deposit before statutory due dates.",
      },
      {
        step: "04",
        title: "Compliance Certificate",
        desc: "Issuing periodic compliance management certificates for board review and governance.",
      },
    ],
    whoItIsFor: [
      "Established Corporations",
      "Multi-Location Businesses",
      "Healthcare Networks",
      "Manufacturing Corporations",
      "Financial Services & NBFCs",
    ],
    whyUsPoints: [
      {
        title: "Single-Window Management",
        desc: "One trusted institutional partner handling all statutory tax, legal, and secretarial requirements.",
      },
      {
        title: "Proactive Risk Mitigation",
        desc: "Early warning alerts and checks prevent non-compliance before statutory deadlines.",
      },
      {
        title: "Institutional Credibility",
        desc: "Enhancing stakeholder confidence with certified, pristine compliance records.",
      },
    ],
  },
};

SERVICES_DATABASE["outsourcing"] = {
  ...SERVICES_DATABASE["finance-outsourcing"],
  slug: "outsourcing",
};
