export type ProSystemSection = {
  heading: string;
  items: string[];
};

export type ProSystem = {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  purpose: string;
  sections: ProSystemSection[];
  freeDocSlugs: string[];
  freeToolSlugs?: string[];
  freeTemplateSlugs?: string[];
};

export const proSystems: ProSystem[] = [
  {
    slug: "business-starter",
    title: "Business Starter System (Pro)",
    shortTitle: "Business Starter",
    tagline: "Go from idea to legally formed business with one organized system.",
    description:
      "A complete, structured kit that combines the EIN, ITIN, and business setup material into a single done-for-you workflow — so you stop assembling pieces and just follow one path.",
    purpose:
      "Turn scattered setup information into a complete 'start a business' system.",
    sections: [
      {
        heading: "Full step-by-step business setup workflow",
        items: [
          "Decision worksheet for picking the right business structure",
          "Name selection and state availability checks",
          "State formation walkthrough with what to expect at each step",
          "Bank account opening prep with required documents listed",
        ],
      },
      {
        heading: "Combined EIN + ITIN preparation (advanced)",
        items: [
          "Single combined checklist for owners who need both",
          "Decision tree: which forms apply to your situation",
          "Common-mistake guardrails built into each step",
        ],
      },
      {
        heading: "Business registration roadmap",
        items: [
          "Idea → legal entity → bank account, in one sequence",
          "State-by-state notes for the most common requirements",
          "Recurring compliance calendar (annual report, license renewals)",
        ],
      },
      {
        heading: "Downloadable startup checklist bundle",
        items: [
          "Master setup checklist (printable PDF + editable text)",
          "EIN preparation checklist (advanced)",
          "ITIN preparation checklist (advanced)",
          "Compliance calendar template",
        ],
      },
      {
        heading: "Pre-filled document templates",
        items: [
          "Operating agreement starter (single-member LLC)",
          "Operating agreement starter (multi-member LLC)",
          "Founder roles outline",
          "Initial banking & merchant setup checklist",
        ],
      },
    ],
    freeDocSlugs: [
      "how-to-register-a-small-business",
      "required-startup-documents",
      "basic-compliance-checklist",
      "what-is-an-ein",
      "ein-application-preparation-checklist",
      "common-ein-mistakes",
      "what-is-an-itin",
      "itin-application-checklist",
      "itin-vs-ein",
    ],
    freeTemplateSlugs: ["business-setup", "ein", "itin"],
  },
  {
    slug: "financial-control",
    title: "Financial Control System (Pro)",
    shortTitle: "Financial Control",
    tagline:
      "Understand and control your business finances — not just track them.",
    description:
      "An upgraded version of the free expense, budgeting, and cash flow tools, shaped into one structured system with monthly reviews, reporting templates, and a simple performance dashboard.",
    purpose:
      "Help users fully understand and control their business finances, not just track them.",
    sections: [
      {
        heading: "Advanced expense tracking system",
        items: [
          "Categorized monthly tracker with subcategories",
          "Vendor and recurring-charge insight views",
          "Drill-down totals by month, quarter, and year",
        ],
      },
      {
        heading: "Cash flow tracking + forecasting sheet",
        items: [
          "Rolling 6-month projection sheet",
          "Inflow vs. outflow timing view",
          "Cash buffer tracker with target alerts",
        ],
      },
      {
        heading: "Profit & loss reporting template",
        items: [
          "Monthly P&L sheet with auto-calculated gross and net profit",
          "Year-to-date roll-up for review and tax prep",
          "Plain-English summary section for non-finance founders",
        ],
      },
      {
        heading: "Monthly financial review checklist",
        items: [
          "Same-day-each-month review sequence",
          "Top expenses review prompts",
          "Subscription audit and cleanup steps",
        ],
      },
      {
        heading: "Simple business performance dashboard",
        items: [
          "One-page snapshot: revenue, expenses, profit, cash on hand",
          "Trend indicators vs. previous month",
          "At-a-glance status: profitable / break-even / losing money",
        ],
      },
    ],
    freeDocSlugs: [
      "how-to-track-business-expenses",
      "profit-and-loss-basics",
      "simple-cash-flow-overview",
      "how-small-businesses-lose-money-without-noticing",
    ],
    freeToolSlugs: ["budget", "expenses", "forecast"],
    freeTemplateSlugs: ["expense-sheet"],
  },
  {
    slug: "client-invoice",
    title: "Client & Invoice Management System (Pro)",
    shortTitle: "Client & Invoice",
    tagline:
      "Turn basic invoicing into a full client management workflow.",
    description:
      "An expanded version of the invoice generator and client follow-up basics, structured into a complete client and payment management system for small service businesses.",
    purpose:
      "Turn basic invoicing into a full client management workflow.",
    sections: [
      {
        heading: "Professional invoice template pack",
        items: [
          "Multiple polished layouts (service, product, retainer, recurring)",
          "Editable branding fields (name, logo placement, colors)",
          "Print-ready and PDF-ready formats",
        ],
      },
      {
        heading: "Client tracking system",
        items: [
          "Per-client record of payments, status, and history",
          "Project / engagement log",
          "Invoice index linked to each client record",
        ],
      },
      {
        heading: "Payment reminder workflow",
        items: [
          "Pre-written reminder messages (gentle, firm, final)",
          "Cadence template: due date, +3 days, +14 days, +30 days",
          "Trackable status column in the client sheet",
        ],
      },
      {
        heading: "Simple CRM-style spreadsheet",
        items: [
          "Lead → quote → client lifecycle tracker",
          "Notes, next contact date, and source columns",
          "Won/Lost/Nurture filter views",
        ],
      },
      {
        heading: "Invoice + payment organization",
        items: [
          "Folder structure for invoices and receipts",
          "Naming convention that makes year-end tax prep painless",
          "Payment reconciliation checklist",
        ],
      },
    ],
    freeDocSlugs: [
      "basic-client-follow-up-system-to-avoid-lost-sales",
      "how-to-track-business-expenses",
      "simple-cash-flow-overview",
    ],
    freeToolSlugs: ["invoice"],
    freeTemplateSlugs: ["invoice"],
  },
];

export function findProSystem(slug: string): ProSystem | undefined {
  return proSystems.find((p) => p.slug === slug);
}

const CATEGORY_TO_PRO: Record<string, string> = {
  EIN: "business-starter",
  ITIN: "business-starter",
  "Business Setup": "business-starter",
  "Financial Systems": "financial-control",
  "Money & Profit": "financial-control",
  "Sales & Clients": "client-invoice",
};

const TOOL_TO_PRO: Record<string, string> = {
  budget: "financial-control",
  expenses: "financial-control",
  forecast: "financial-control",
  invoice: "client-invoice",
};

export function proSystemForCategory(category: string): ProSystem | undefined {
  const slug = CATEGORY_TO_PRO[category];
  return slug ? findProSystem(slug) : undefined;
}

export function proSystemForTool(toolSlug: string): ProSystem | undefined {
  const slug = TOOL_TO_PRO[toolSlug];
  return slug ? findProSystem(slug) : undefined;
}
