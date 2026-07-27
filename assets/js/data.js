/**
 * Central content model for the site.
 * Edit this file to update any text, numbers, or entries shown on the page —
 * the rendering modules (timeline.js, projects.js, tabs.js, etc.) read from here.
 */

export const profile = {
  name: "Balachandra Srinevasalu",
  title: "Director, Data & Analytics",
  tagline: "Enterprise Data Strategy · BI & Data Warehousing · AI/GenAI Transformation",
  location: "Bengaluru, India",
  summary:
    "23 years turning enterprise data into a strategic asset for the C-suite — building the BI Centres of Excellence, cloud/Lakehouse platforms, and governance foundations that let global finance, sales, and operations leaders run their business on trusted data.",
  email: "balachandra.srinevasalu@gmail.com",
  phone: "+91-9740966006",
  linkedin: "https://www.linkedin.com/in/chandrra/",
  github: "https://github.com/chandrra111",
  resumeFile: "assets/resume/Balachandra_Srinevasalu_Resume.pdf",
};

export const heroStats = [
  { value: 23, suffix: "+", label: "Years, Enterprise Data & Analytics" },
  { value: 0.42, prefix: "$", suffix: "M", decimals: 2, label: "Annual P&L Owned" },
  { value: 20, suffix: "+", label: "Team Led — Engineers, Analysts, Managers & Partners" },
  { text: "Enterprise-Wide", label: "Data & Analytics Coverage" },
  { value: 300, suffix: "+", label: "BI Reports Modernized" },
  { value: 105, prefix: "$", suffix: "K+", label: "Annual Savings Delivered" },
];

export const philosophy = {
  intro:
    "I don't just report what happened — I build the platforms that predict what's next, the governance that makes the answer trustworthy, and the teams that turn it into action.",
  pillars: [
    {
      title: "Strategic Visionary & Transformation Agent",
      body: "I look past the next dashboard request to the capability the business will need in three years — then build the roadmap, budget, and platform to get there.",
      evidence: "Owns Pidilite's 3-year enterprise data strategy; leading the ~$260K Databricks Lakehouse migration.",
    },
    {
      title: "C-Suite Partnership & Executive Influence",
      body: "Data only matters when it changes a decision in the room. I translate complex data into narratives that move budgets and priorities.",
      evidence: "Direct strategic partner to MD, CFO, and functional heads across Pidilite and HP's global CFO organisation.",
    },
    {
      title: "Servant Leadership — People First",
      body: "My job is to make my team's careers succeed, not just my roadmap. Accountability and humility scale together.",
      evidence: "Leads and mentors a 20+ member high-performing Data & Analytics team, including external vendor and partner resources; coach & judge at Intelli-Fest global hackathons; trained 100+ business users.",
    },
    {
      title: "High Ownership & Accountability",
      body: "I own the outcome end-to-end — budget, vendors, platform, and results — not just the delivery milestone.",
      evidence: "Owns ~$0.42M annual P&L across vendor/contract staff and cloud infrastructure; manages Microsoft & Databricks OEM relationships directly.",
    },
    {
      title: "Player-Coach Leadership",
      body: "I still write the SQL and build the semantic model. Staying hands-on keeps my standards — and my team's trust — honest.",
      evidence: "Personally builds Power BI solutions and writes Databricks/SQL alongside the team while owning full strategic leadership.",
    },
  ],
};

export const journey = [
  {
    year: "2023 — Present",
    company: "Pidilite Industries Limited",
    role: "Head of Technical Delivery — Data & Analytics (Centre of Excellence)",
    location: "Bengaluru",
    highlights: [
      "Enterprise data strategy & roadmap: direct strategic partner to the MD, CFO, and functional leadership — own and drive the 3-year enterprise data & analytics strategy, aligning platform investment, governance, and capability building to enterprise growth priorities.",
      "Data & AI transformation leadership: leading the enterprise-wide shift from fragmented, siloed reporting to a unified, governed data platform — built the Analytics Centre of Excellence that is the foundation for AI-driven, predictive decision-making across the organisation.",
      "Platform modernization: directing large-scale modernization from legacy infrastructure to a governed Databricks Lakehouse with Unity Catalog — simplifying the estate and building enterprise-scale AI/ML readiness.",
      "Data governance & quality: established enterprise-wide governance standards, quality controls, and stewardship practices that ensure trusted, compliant data underpins every executive decision.",
      "Stakeholder management & executive influence: the primary data & analytics partner to the C-suite, translating enterprise priorities into technology investment decisions and building organisation-wide trust in data as a strategic asset.",
      "Organisational capability building: built and leads a high-performing 20+ member Data & Analytics team — data engineers, business analysts, BI engineers, and AI engineers — plus external vendor and partner resources, with a focus on talent development and succession planning.",
      "Business value realization: ~$105K+ in annual platform savings, ~75% faster enterprise reporting performance, and ~$0.42M in P&L under direct ownership — technology investment translated into measurable business outcomes.",
      "Player-coach leadership style: pairs enterprise-level strategic ownership with deep platform fluency, setting the technical bar for the organisation while operating at the executive level.",
    ],
    tags: ["Enterprise Data Strategy", "Digital Transformation", "Data Governance", "Stakeholder Management", "P&L Ownership", "Team Leadership"],
    logoInitial: "P",
  },
  {
    year: "2018 — 2023",
    company: "HP Computing & Printing Systems India Pvt. Ltd.",
    role: "Lead Consultant — Data Warehousing, BI & Analytics (Finance Global Operations)",
    location: "Bengaluru",
    highlights: [
      "Strategic analytics business partner to the global CFO organisation across US, EMEA, and APAC.",
      "Architected 50+ global finance analytics solutions across Cash Flow, Treasury, Profitability, OPEX, and Collections.",
      "Deployed NLP and text-analytics POCs, laying groundwork for AI adoption in Finance operations.",
      "Eliminated manual Excel reporting, saving 100+ FTE hours/month; recognised with multiple CFO & Rock Star Awards (2019–2021).",
    ],
    tags: ["Finance Analytics", "NLP POCs", "Power BI", "Global Stakeholders"],
    logoInitial: "H",
  },
  {
    year: "2014 — 2018",
    company: "Manthan Software Services Pvt. Ltd.",
    role: "Project Manager — BI Engineering & Data Analytics (SaaS Analytics Product Company)",
    location: "Bengaluru",
    highlights: [
      "Led BI engineering teams delivering customer-facing SaaS analytics products for retail & FMCG enterprise customers.",
      "Architected a multi-tenant analytics platform on Vertica (~5 fact tables, 20 dimensions, ~300 attributes) with Pentaho ETL.",
      "Delivered US onshore engagements — Sales Channel Effectiveness and Fulfilment Centre Operational Analysis.",
    ],
    tags: ["SaaS Analytics", "Vertica", "Multi-Tenant Architecture", "Scrum"],
    logoInitial: "M",
  },
  {
    year: "2010 — 2014",
    company: "Genpact",
    role: "Business Analyst → Assistant Manager → Manager",
    location: "Bengaluru",
    highlights: [
      "Led advanced analytics engagements — Market Mix Modelling, Demand Forecasting, Test & Control studies.",
      "Grew project revenue by 43% through consultative analytics expansion and pre-sales support.",
      "Managed global delivery teams and led RFI/RFP responses; earned Bronze & Silver VP Awards.",
    ],
    tags: ["Predictive Analytics", "Pre-Sales", "Global Delivery"],
    logoInitial: "G",
  },
  {
    year: "2003 — 2010",
    company: "Early Career",
    role: "HCL Technologies · Vista Infotech (Underwriters Laboratories) · Leitz Tooling Systems",
    location: "India",
    highlights: [
      "HCL Technologies — Senior Software Engineer: enterprise BI & application support with strong SLA governance.",
      "Vista Infotech — Software Engineer: requirements, solution design, SQL Server database changes.",
      "Leitz Tooling Systems — Software Consultant: end-to-end enterprise application development (VB 6.0, SQL Server, Crystal Reports).",
    ],
    tags: ["Foundations", "Enterprise Applications", "SQL Server"],
    logoInitial: "E",
  },
];

export const educationMilestones = [
  { year: "2024", label: "Professional Certificate, Data Science & AI — IIM Kozhikode" },
  { year: "2010", label: "Master of Computer Application (MCA) — IGNOU" },
  { year: "2002", label: "B.Sc. Computer Science — Sri Krishnadevaraya University" },
];

export const strategyPhases = [
  {
    phase: "Phase 1",
    name: "Foundation",
    period: "2023",
    status: "done",
    points: [
      "Stood up centralized Analytics CoE — standardized tools, data models, and delivery frameworks.",
      "Baselined data governance and quality controls at the enterprise level.",
    ],
  },
  {
    phase: "Phase 2",
    name: "Modernization",
    period: "2024 — 2025",
    status: "done",
    points: [
      "Migrated 300+ Power BI reports from Analysis Services to Microsoft Fabric — $105K+ annual savings.",
      "Optimized ~10 enterprise semantic models (~3GB each), cutting report load time by ~75% for 200–300 sales teams.",
    ],
  },
  {
    phase: "Phase 3",
    name: "AI-Readiness",
    period: "2026",
    status: "current",
    points: [
      "Leading migration to Databricks Lakehouse with Unity Catalog governance (lineage, access control, discovery).",
      "Targeting AWS Redshift & BO decommissioning, further Power BI capacity cost reduction, and ML/GenAI-ready data foundations.",
    ],
  },
];

export const competencies = [
  "Enterprise Data Strategy & 3–5 Year Roadmap Ownership",
  "C-Suite Partnership — CFO, COO, MD, CMO Stakeholder Influence",
  "Business Transformation & Revenue Growth through Data",
  "SaaS Analytics — GTM Metrics, Pipeline, Customer Intelligence",
  "Predictive & Advanced Analytics — ML, NLP, Forecasting",
  "Eliminating Data Silos across Sales, Finance, HR, Supply Chain",
  "Data-Driven Culture & Organisational Data Literacy",
  "Analytics CoE Design, Governance & Enterprise Scaling",
  "P&L Ownership — Vendor, Contract Staff & Cloud Infrastructure",
  "OEM & Strategic Vendor Management (Microsoft, Databricks)",
  "Executive Presence — Data Narratives that Drive Investment",
  "Player-Coach — Hands-On Power BI, Databricks & SQL Leadership",
];

export const aiGenai = {
  delivered: [
    {
      title: "NLP & Text Analytics POCs",
      body: "Deployed natural-language and text-analytics proofs-of-concept in Finance operations at HP, surfacing insight patterns beyond structured reporting.",
    },
    {
      title: "Predictive & Prescriptive Modelling",
      body: "Forecasting, anomaly detection, and market-mix modelling delivered across Finance and commercial analytics engagements — shifting teams from reactive to forward-looking decisions.",
    },
    {
      title: "AI & Data Science Certification",
      body: "Professional Certificate in Data Science & Artificial Intelligence, IIM Kozhikode (2024); Microsoft Certified: Azure AI Fundamentals (AI-900).",
    },
  ],
  roadmap: [
    {
      title: "AI-Ready Data Foundation",
      body: "Building the governed Lakehouse (Databricks + Unity Catalog) that enterprise GenAI and Copilot-style natural-language analytics require to be trustworthy at scale.",
    },
    {
      title: "AI-Assisted Governance",
      body: "Piloting AI-assisted metadata documentation and lineage discovery as the governance foundation matures in 2026.",
    },
  ],
};

export const governance = [
  {
    title: "Standards & Stewardship",
    body: "Standardized tools, data models, and delivery frameworks across the Analytics CoE; championed data stewardship across every business vertical.",
  },
  {
    title: "Quality & Controls",
    body: "Drove data quality, consistency, and control improvements, ensuring trusted reporting for executive decision-making.",
  },
  {
    title: "Lineage & Cataloguing",
    body: "Implementing Unity Catalog for lineage, access control, and discovery; hands-on with Erwin and SQLDBM for data modelling and metadata management.",
  },
  {
    title: "Trusted Decisions",
    body: "Every governance control exists to serve one outcome: leadership can act on the number without re-verifying it first.",
  },
];

export const cloudPlatforms = {
  handsOn: [
    { name: "Power BI", note: "Hands-on builder" },
    { name: "Databricks SQL", note: "Hands-on builder" },
    { name: "T-SQL", note: "Hands-on builder" },
    { name: "Microsoft Fabric", note: "Migration lead" },
  ],
  architecture: [
    { name: "Databricks Lakehouse", note: "Program lead, 2026" },
    { name: "Azure Synapse", note: "Modernizing from" },
    { name: "AWS Redshift", note: "Decommissioning" },
    { name: "Vertica", note: "Prior architecture lead" },
    { name: "Snowflake", note: "Strategic evaluation" },
    { name: "Google BigQuery", note: "Strategic evaluation" },
  ],
  concepts: ["Lakehouse Architecture", "Data Lake", "Data Fabric", "Data Mesh", "Unity Catalog Governance"],
  bi: ["Power BI", "Tableau", "ThoughtSpot", "Looker", "SAP BusinessObjects", "MicroStrategy"],
};

export const dashboardKpis = [
  { value: "300+", label: "Reports migrated to Fabric" },
  { value: "$105K+", label: "Annual platform savings" },
  { value: "200–300", label: "Sales teams impacted" },
  { value: "75%", label: "Faster report load time" },
];

export const dashboardCharts = {
  loadTime: {
    labels: ["Before Optimization", "After Optimization"],
    values: [18.4, 4.6],
  },
  savings: {
    labels: ["Fabric Platform Consolidation", "Manual Reporting Eliminated (FTE hrs)", "Semantic Model Efficiency"],
    values: [45, 35, 20],
  },
};

export const outcomes = [
  { value: 105, prefix: "$", suffix: "K+", label: "Annual savings — Fabric platform consolidation (2024)" },
  { value: 75, suffix: "%", label: "Faster report load/query performance for 200–300 sales teams (2025)" },
  { value: 100, suffix: "+", label: "FTE hours/month saved by eliminating manual Excel reporting" },
  { value: 300, suffix: "+", label: "Power BI reports modernized to Microsoft Fabric" },
  { value: 50, suffix: "+", label: "Global finance analytics solutions delivered (Cash Flow, Treasury, OPEX)" },
  { value: 43, suffix: "%", label: "Project revenue growth driven through analytics engagements" },
  { value: 100, suffix: "+", label: "Business users trained across Delhi, Singapore & Malaysia" },
  { text: "Enterprise-Wide", label: "Analytics platform adopted across the enterprise" },
];

export const programs = [
  {
    title: "Modern Enterprise Data Platform — Databricks Lakehouse",
    period: "Jan 2026 – Dec 2026",
    scale: "$260K Program",
    summary:
      "Leading enterprise migration from Azure Synapse to Databricks Lakehouse, delivered via implementation partner.",
    points: [
      "Establishing governance using Unity Catalog (lineage, access control, discovery).",
      "Driving platform simplification, performance improvement, and AI readiness.",
      "Targeting decommissioning of AWS Redshift & BO reports and reduction in Power BI capacity cost.",
    ],
    tags: ["Databricks", "Unity Catalog", "Azure Synapse", "AI Readiness"],
  },
  {
    title: "Enterprise Business Intelligence Optimization",
    period: "Jan 2025 – Dec 2025",
    scale: "~10 Semantic Models (~3GB each)",
    summary: "Spearheaded optimization of enterprise Power BI semantic models used for sales analytics.",
    points: [
      "Redesigned models with simplified relationships, aggregations, and optimized DAX.",
      "Impacted ~200–300 sales teams; reduced capacity throttling during month/quarter/year-end cycles.",
      "Achieved ~75% faster report load & query performance with improved reliability and adoption.",
    ],
    tags: ["Power BI", "DAX Optimization", "Capacity Management"],
  },
  {
    title: "BI Platform Modernization — Analysis Services to Microsoft Fabric",
    period: "Jan 2024 – Dec 2024",
    scale: "300+ Reports Migrated",
    summary: "Orchestrated migration of 300+ Power BI reports from Analysis Services to Microsoft Fabric.",
    points: [
      "Modernized the organization's analytics platform, improving scalability and performance.",
      "Delivered ~$105K annual cost savings through platform consolidation.",
      "Recognized with the Pidilite Spirit Award for high-impact analytics transformation.",
    ],
    tags: ["Microsoft Fabric", "Platform Migration", "Cost Optimization"],
  },
  {
    title: "Finance Analytics & Reporting Transformation",
    period: "Jan 2018 – Aug 2023",
    scale: "50+ Global Solutions",
    summary:
      "Architected and delivered global finance analytics solutions across Cash Flow, Treasury, Profitability, OPEX, and Collections.",
    points: [
      "Designed interactive dashboards providing historical trends, projections, and variance drivers in a unified finance view.",
      "Implemented automated, touchless reporting improving cash visibility, counterparty exposure tracking, and FX risk monitoring.",
      "Achieved ~100+ hours/month FTE savings by eliminating manual Excel reporting.",
    ],
    tags: ["Power BI", "Treasury Analytics", "Process Automation"],
  },
  {
    title: "Analytics Capability Building & Training Program",
    period: "Jan 2019 – Dec 2019",
    scale: "100+ Users Enabled",
    summary: "Conducted SQL and Power BI enablement across three geographies as part of organizational learning initiatives.",
    points: [
      "Delivered Power BI workshops to teams across New Delhi, Singapore, and Malaysia.",
      "Created facilitator guides and participant learning materials; provided post-training support via forums and 1:1 sessions.",
      "Enabled 100+ business users to transition from Excel-based reporting to Power BI.",
    ],
    tags: ["Enablement", "Power BI Training", "Change Management"],
  },
  {
    title: "Multi-Tenant BI Reporting Platform Implementation",
    period: "Sep 2015 – Dec 2017",
    scale: "5 Fact Tables · 20 Dimensions",
    summary: "Architected a multi-tenant reporting solution on Vertica with ETL pipelines built using Pentaho Data Integrator.",
    points: [
      "Designed dimensional physical model (~300 attributes) using ERwin.",
      "Delivered analytical and interactive reporting using Pentaho Analysis & Interactive Reports.",
      "Led a team of 4 BI developers as Scrum Master, managing delivery through Jira.",
    ],
    tags: ["Vertica", "Pentaho", "Dimensional Modelling", "Scrum"],
  },
  {
    title: "Sales Channel Effectiveness",
    period: "Jun 2015 – Aug 2015 (Onshore — USA)",
    scale: "Channel ROI Analytics",
    summary: "Developed and analyzed BI reports identifying opportunities for various channels to improve ROI and data integrity.",
    points: [
      "Automated and standardized weekly, monthly, and annual reporting with quality checks using MicroStrategy, SQL, and Excel (Power Pivot, Power Query).",
    ],
    tags: ["MicroStrategy", "Channel Analytics"],
  },
  {
    title: "Fulfillment Center Operational Analysis",
    period: "Oct 2014 – Dec 2014 (Onshore — USA)",
    scale: "Self-Service BI Roadmap",
    summary: "Studied day-to-day fulfilment center operations (Pick, Put, Pack) to identify gaps and design a future-state roadmap.",
    points: [
      "Developed key reports on employee and warehouse performance using SQL Server Reporting Services.",
      "Established the foundation for enterprise warehouse self-service BI.",
    ],
    tags: ["SSRS", "Warehouse Analytics"],
  },
];

export const speaking = [
  {
    title: "Global Power BI Enablement Facilitator",
    period: "2019",
    body:
      "Delivered Power BI workshops to business teams across New Delhi, Singapore, and Malaysia; authored facilitator guides and participant learning materials; ran post-training forums and one-on-one coaching that enabled 100+ users to move from Excel to Power BI.",
  },
  {
    title: "Coach & Judge — Intelli-Fest Global Hackathons",
    period: "2018 – 2023",
    body: "Mentored teams and judged advanced analytics and data-science submissions at HP's global innovation hackathon, promoting data-driven innovation across the CFO organisation.",
  },
  {
    title: "Organisation-Wide SQL Trainer",
    period: "2019",
    body: "Conducted SQL trainings as part of organisational learning initiatives, building foundational data literacy ahead of the Power BI rollout.",
  },
];

export const speakingAvailability =
  "Open to panel discussions, industry roundtables, and speaking engagements on enterprise data strategy, BI modernization, and AI-ready governance.";

export const certifications = [
  { name: "Professional Certificate in Data Science & Artificial Intelligence", issuer: "IIM Kozhikode (IIMK)", year: "2024" },
  { name: "Digital Personal Data Protection Act (DPDP), 2023 — Certificate Course & Examination", issuer: "DPDPA.com", year: "2026" },
  { name: "Leadership and Talent Management — NPTEL+ Workshop", issuer: "IIT Roorkee (Dept. of Management Studies)", year: "2026" },
  { name: "Step Up To Leadership", issuer: "Dale Carnegie & Associates, Inc.", year: "2024" },
  { name: "Microsoft Certified: Data Analyst Associate — DA-100", issuer: "Microsoft", year: "2021" },
  { name: "Microsoft Certified: Azure AI Fundamentals — AI-900", issuer: "Microsoft", year: "2021" },
  { name: "Microsoft Certified: Power Platform Fundamentals — PL-900", issuer: "Microsoft", year: "2021" },
  { name: "Microsoft Certified: Azure Data Fundamentals — DP-900", issuer: "Microsoft", year: "2021" },
  { name: "Microsoft Certified: Azure Fundamentals — AZ-900", issuer: "Microsoft", year: "2021" },
  { name: "Scrum Master Certified (SMC®)", issuer: "SCRUMstudy", year: "2014" },
  { name: "ITIL Version 3 Foundation", issuer: "EXIN", year: "2008" },
];

export const insights = {
  note:
    "Long-form perspectives on enterprise data strategy, BI modernization, and AI-ready governance — published on LinkedIn.",
  cta: { label: "Follow updates on LinkedIn", href: profile.linkedin },
  placeholderCount: 0,
};

export const awards = [
  {
    title: "Pidilite Spirit Award",
    year: "2024",
    body: "Recognised for driving the high-impact Microsoft Fabric analytics transformation.",
  },
  {
    title: "CFO & Rock Star Awards",
    year: "2019 – 2021",
    body: "Multiple awards from HP's global CFO organisation for impact beyond core responsibilities.",
  },
  {
    title: "Bronze & Silver VP Awards",
    year: "2010 – 2014",
    body: "Genpact recognition for a 43% project revenue increase and delivery excellence.",
  },
];
