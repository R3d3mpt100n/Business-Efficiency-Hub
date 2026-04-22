export type Template =
  | {
      slug: string;
      title: string;
      description: string;
      kind: "text";
      filename: string;
      content: string;
      relatedSlugs?: string[];
      relatedToolSlug?: string;
    }
  | {
      slug: string;
      title: string;
      description: string;
      kind: "tool";
      toolSlug: string;
      relatedSlugs?: string[];
    };

const expenseSheet = `Date,Vendor,Description,Category,Amount,Payment Method,Notes
,,,Operations,,,
,,,Marketing,,,
,,,Supplies,,,
,,,Software,,,
,,,Travel,,,
,,,Other,,,
`;

const businessSetupChecklist = `Small Business Setup Checklist
================================

Phase 1 — Decide
[ ] Choose business structure (sole proprietor, LLC, partnership, corp)
[ ] Choose and verify business name (state DB + domain + trademark search)
[ ] Decide on business address (home, virtual, or commercial)

Phase 2 — Register
[ ] File state formation paperwork (LLC/corp/partnership)
[ ] Register DBA / trade name (if applicable)
[ ] Apply for EIN on IRS.gov (free)
[ ] Save EIN confirmation letter (Form CP 575)

Phase 3 — Open accounts
[ ] Open business checking account
[ ] Apply for business credit/debit card
[ ] Set up merchant processor (Stripe, Square, etc.) if needed
[ ] Set up bookkeeping system or spreadsheet

Phase 4 — Compliance
[ ] State business license (if required)
[ ] City/county business license or permit
[ ] Sales tax registration (if selling taxable goods/services)
[ ] Industry-specific licenses
[ ] Business insurance policy in place
[ ] Calendar reminders for annual report and license renewals
`;

const einChecklist = `EIN Application Preparation Checklist
=====================================

Before you apply on IRS.gov, gather:

[ ] Legal business name (matches formation documents exactly)
[ ] Trade name / DBA (if different)
[ ] Business structure (LLC, sole prop, partnership, corporation)
[ ] Responsible party's full legal name
[ ] Responsible party's SSN or ITIN
[ ] Business mailing address
[ ] Business physical address (if different)
[ ] Business phone number
[ ] Reason for applying (new business, hiring, banking, etc.)
[ ] Date business started or was acquired
[ ] Expected number of employees in next 12 months

Apply only at IRS.gov. The EIN is free.
The official form is IRS Form SS-4.
`;

const itinChecklist = `ITIN Application Preparation Checklist
======================================

Identification documents (need primary OR a combination of supporting):
[ ] Valid, unexpired passport (preferred — can stand alone)
[ ] National identification card (with photo, name, address, DOB, expiration)
[ ] Foreign driver's license
[ ] Civil birth certificate (required for dependents under 18 if no passport)
[ ] USCIS photo ID
[ ] US visa (if applicable)

Supporting / situational documents:
[ ] Federal tax return (if filing one with the application)
[ ] Proof of US residency for dependents (school or medical records)
[ ] Treaty benefit documents (if applicable)
[ ] Letter from a withholding agent (if applicable)

The official form is IRS Form W-7 — get it from IRS.gov.
Originals or certified copies from the issuing agency are typically required.
`;

export const templates: Template[] = [
  {
    slug: "invoice",
    title: "Invoice Template",
    description:
      "Use the invoice generator to fill out and print a clean invoice — no setup needed.",
    kind: "tool",
    toolSlug: "invoice",
    relatedSlugs: ["how-to-track-business-expenses", "simple-cash-flow-overview"],
  },
  {
    slug: "expense-sheet",
    title: "Expense Tracking Sheet",
    description:
      "A simple CSV starter you can open in Google Sheets or Excel and customize.",
    kind: "text",
    filename: "expense-tracking-sheet.csv",
    content: expenseSheet,
    relatedSlugs: [
      "how-to-track-business-expenses",
      "profit-and-loss-basics",
    ],
  },
  {
    slug: "business-setup",
    title: "Business Setup Checklist",
    description:
      "A four-phase checklist that walks you through forming and registering a small business.",
    kind: "text",
    filename: "business-setup-checklist.txt",
    content: businessSetupChecklist,
    relatedSlugs: [
      "how-to-register-a-small-business",
      "required-startup-documents",
      "basic-compliance-checklist",
    ],
  },
  {
    slug: "ein",
    title: "EIN Preparation Checklist",
    description:
      "Everything you need to gather before applying for an EIN on IRS.gov.",
    kind: "text",
    filename: "ein-preparation-checklist.txt",
    content: einChecklist,
    relatedSlugs: [
      "ein-application-preparation-checklist",
      "what-is-an-ein",
      "common-ein-mistakes",
    ],
  },
  {
    slug: "itin",
    title: "ITIN Preparation Checklist",
    description:
      "Document checklist for organizing an ITIN application.",
    kind: "text",
    filename: "itin-preparation-checklist.txt",
    content: itinChecklist,
    relatedSlugs: [
      "itin-application-checklist",
      "what-is-an-itin",
      "itin-vs-ein",
    ],
  },
];

export function findTemplate(slug: string): Template | undefined {
  return templates.find((t) => t.slug === slug);
}
