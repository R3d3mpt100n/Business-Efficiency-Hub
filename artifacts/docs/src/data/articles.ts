export type ChecklistGroup = {
  heading: string;
  items: string[];
};

export type Article = {
  slug: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  problem?: string;
  problemLabel?: string;
  whyItHappens?: string;
  whyItHappensLabel?: string;
  solution?: { step: string; detail: string }[];
  solutionLabel?: string;
  checklists?: ChecklistGroup[];
  tools?: { name: string; note: string }[];
  toolsLabel?: string;
  summary: string[];
  showDisclaimer?: boolean;
};

export const LEGAL_DISCLAIMER =
  "This content is for educational and informational purposes only. It does not constitute legal, tax, or financial advice. Users should consult a qualified professional for advice specific to their situation. We do not provide official government forms or services.";

export const articles: Article[] = [
  {
    slug: "how-small-businesses-lose-money-without-noticing",
    title: "How Small Businesses Lose Money Without Noticing",
    description:
      "The silent leaks draining your profit each month, and a simple way to spot them before they grow.",
    category: "Money & Profit",
    readTime: "5 min read",
    problem:
      "Many small businesses look profitable on paper but quietly lose money every single month. Subscriptions stay active long after they're useful, small fees add up, refunds slip past unnoticed, and time gets spent on tasks that don't generate revenue. Owners often don't notice until cash flow gets tight.",
    whyItHappens:
      "Most small businesses don't have a routine for checking where money actually goes. Expenses get approved once and then forgotten. Bank statements are scanned quickly instead of reviewed line by line. Without a regular review habit, small leaks become normal background noise.",
    solution: [
      {
        step: "Run a 30-minute monthly money review",
        detail:
          "Block 30 minutes on the same day each month. Open your bank and card statements and read every single line. If you can't immediately explain what a charge is for, flag it.",
      },
      {
        step: "Cancel or downgrade anything you didn't actively use this month",
        detail:
          "Software, memberships, services. If it wasn't used, pause it. You can always re-subscribe later.",
      },
      {
        step: "List your top 5 expenses and ask if each one is still pulling its weight",
        detail:
          "For each one, ask: does this clearly help us make or save money? If the answer is no or unclear, it's a candidate to cut.",
      },
      {
        step: "Track recurring fees in one simple list",
        detail:
          "Keep a single sheet with the name, amount, billing date, and purpose of every recurring charge. Update it during your monthly review.",
      },
      {
        step: "Set a calendar reminder to repeat the review",
        detail:
          "Make it recurring. The habit matters more than the tool.",
      },
    ],
    tools: [
      {
        name: "A simple spreadsheet (Google Sheets or Excel)",
        note: "All you really need to start. Free and flexible.",
      },
      {
        name: "Your bank's transaction export",
        note: "Most banks let you download statements as CSV for easy review.",
      },
      {
        name: "A subscription tracker app (optional)",
        note: "Useful if you have many recurring services across different cards.",
      },
    ],
    summary: [
      "Small leaks are the biggest silent threat to profit.",
      "Block 30 minutes each month to review every line of every statement.",
      "Cancel anything unused. Question your top 5 expenses every month.",
      "Keep one master list of recurring charges and review it on a schedule.",
    ],
  },
  {
    slug: "simple-system-to-track-business-expenses",
    title: "A Simple System to Track Business Expenses",
    description:
      "Stop guessing where your money goes. A no-fuss expense tracking system you can run in under 10 minutes a week.",
    category: "Operations",
    readTime: "6 min read",
    problem:
      "Receipts pile up. Personal and business spending get mixed. At tax time, owners scramble to reconstruct months of expenses, often missing deductions and overpaying. The lack of a simple system costs both money and peace of mind.",
    whyItHappens:
      "Most owners try to track expenses only when they have to: tax time, a loan application, or a cash flow scare. There's no daily or weekly habit, and no single place where everything lives. The system either doesn't exist or is too complicated to actually keep up with.",
    solution: [
      {
        step: "Open a dedicated business bank account and card",
        detail:
          "This single change solves half the problem. Run every business expense through it. No exceptions.",
      },
      {
        step: "Pick one place to store receipts",
        detail:
          "A folder in your email, a shared cloud folder, or a dedicated app. The choice matters less than picking one and sticking to it.",
      },
      {
        step: "Snap or forward every receipt the moment you get it",
        detail:
          "Don't let it sit in your wallet or inbox. The 10 seconds it takes now saves hours later.",
      },
      {
        step: "Do a 10-minute weekly cleanup",
        detail:
          "Once a week, label each transaction with a simple category: software, supplies, travel, meals, services, other. Five or six categories is plenty.",
      },
      {
        step: "Run a one-page monthly summary",
        detail:
          "Total each category. Look at the trend. Share the summary with your accountant or keep it for your own decisions.",
      },
    ],
    tools: [
      {
        name: "A separate business checking account",
        note: "Most banks offer free or low-cost business accounts.",
      },
      {
        name: "Google Drive, Dropbox, or a receipt-scanning app",
        note: "Pick whichever you'll actually use consistently.",
      },
      {
        name: "A basic accounting tool (optional)",
        note: "Tools like Wave, QuickBooks, or Xero make categorization faster but aren't required to start.",
      },
    ],
    summary: [
      "Separate business and personal money. This alone removes most of the chaos.",
      "Capture receipts the moment they happen, in one consistent place.",
      "Spend 10 minutes a week categorizing. Five or six categories is enough.",
      "Produce a simple one-page monthly summary so you always know where money goes.",
    ],
  },
  {
    slug: "basic-client-follow-up-system-to-avoid-lost-sales",
    title: "A Basic Client Follow-Up System to Avoid Lost Sales",
    description:
      "Most lost sales aren't lost — they're forgotten. A simple follow-up system so no opportunity slips through.",
    category: "Sales & Clients",
    readTime: "7 min read",
    problem:
      "A potential client reaches out, gets a quote, and goes quiet. The owner gets busy and forgets to follow up. Weeks later, that prospect hires someone else. Multiply this by every quote sent and the lost revenue is significant — but invisible.",
    whyItHappens:
      "Sales follow-up isn't urgent until it's too late. There's no reminder, no list, and no defined moment to reach back out. The owner relies on memory, and memory loses to a busy week every time.",
    solution: [
      {
        step: "Capture every lead in one place",
        detail:
          "Name, contact, what they asked about, the date you first spoke, and the date of your next planned follow-up. A spreadsheet works perfectly.",
      },
      {
        step: "Define a simple follow-up cadence",
        detail:
          "A reliable starting point: follow up 2 days after the first contact, then 7 days later, then 14 days later, then once a month. Stop after 3 to 4 attempts if there's no response.",
      },
      {
        step: "Write 3 short follow-up message templates",
        detail:
          "One for the first nudge, one for a value-add check-in (sharing something useful, not just asking), and one polite closer. Personalize the first line each time.",
      },
      {
        step: "Block 15 minutes daily for follow-ups",
        detail:
          "Same time each day. Open your lead list, send today's follow-ups, update the next-contact date. Done.",
      },
      {
        step: "Mark each lead as Won, Lost, or Nurture",
        detail:
          "Lost is not a failure — it tells you what kind of prospect isn't a fit. Nurture leads stay on a slow monthly check-in for the future.",
      },
    ],
    tools: [
      {
        name: "A simple spreadsheet or Notion table",
        note: "More than enough to start. Don't pay for a CRM until you outgrow this.",
      },
      {
        name: "A calendar with daily reminders",
        note: "Google Calendar or your phone's reminder app works fine.",
      },
      {
        name: "An email tool with templates (optional)",
        note: "Saved replies in Gmail or Outlook speed up the process.",
      },
    ],
    summary: [
      "Most lost sales are forgotten, not rejected.",
      "Capture every lead with a planned next-contact date.",
      "Use a simple cadence: 2 days, 7 days, 14 days, then monthly.",
      "Block 15 minutes a day for follow-ups. Consistency is the whole game.",
    ],
  },

  // Business & Tax Setup Documents
  {
    slug: "ein-application-preparation-checklist",
    title: "EIN Application Preparation Checklist (Business Tax ID)",
    description:
      "A plain-English guide to understanding the EIN and organizing the information you'll need before applying.",
    category: "Business & Tax Setup Documents",
    readTime: "6 min read",
    showDisclaimer: true,
    problemLabel: "What an EIN is",
    problem:
      "An EIN (Employer Identification Number) is a unique nine-digit number issued by the IRS to identify a business for tax purposes. Think of it as a Social Security number, but for your business. It's used when filing taxes, opening a business bank account, hiring employees, and applying for certain licenses.",
    whyItHappensLabel: "Who needs an EIN",
    whyItHappens:
      "Most small businesses benefit from having one — and many are required to. This generally includes LLCs (especially multi-member), corporations, partnerships, businesses with employees, and businesses that file certain federal tax returns. Even single-member LLCs and freelancers often choose to get one to keep their personal SSN private when working with clients and banks.",
    solutionLabel: "Step-by-step preparation",
    solution: [
      {
        step: "Confirm your legal business name and structure",
        detail:
          "Decide whether you're applying as a sole proprietorship, single-member LLC, multi-member LLC, partnership, or corporation. Have your filed formation documents in front of you so the name matches exactly.",
      },
      {
        step: "Gather information about the responsible party",
        detail:
          "This is the person who controls or owns the business. You'll need their full legal name and a valid taxpayer ID (typically an SSN or ITIN).",
      },
      {
        step: "Confirm your business address and contact details",
        detail:
          "Use the physical address where the business operates. Have a phone number ready as well.",
      },
      {
        step: "Know your reason for applying and your start date",
        detail:
          "Common reasons include starting a new business, hiring employees, or banking purposes. Have your business start or acquisition date ready.",
      },
      {
        step: "Review the official IRS Form SS-4",
        detail:
          "The IRS uses Form SS-4 as the official application. We don't provide or recreate the form here — visit IRS.gov to access the current version. Walk through it once before starting your application so nothing surprises you.",
      },
    ],
    checklists: [
      {
        heading: "Information checklist",
        items: [
          "Legal business name (matches formation documents exactly)",
          "Trade name / DBA, if different",
          "Business structure (LLC, sole proprietorship, partnership, corporation, etc.)",
          "Responsible party's full legal name",
          "Responsible party's SSN or ITIN",
          "Business mailing address",
          "Business physical address (if different)",
          "Business phone number",
          "Reason for applying (new business, hiring employees, banking, etc.)",
          "Date the business started or was acquired",
          "Expected number of employees in the next 12 months (if any)",
        ],
      },
    ],
    toolsLabel: "Helpful references",
    tools: [
      {
        name: "IRS Form SS-4 (official application)",
        note: "The official form is available on IRS.gov. We do not recreate or provide the form.",
      },
      {
        name: "Your business formation documents",
        note: "Articles of organization, partnership agreement, or corporate filing — to confirm exact legal name.",
      },
      {
        name: "A simple folder or document organizer",
        note: "Keep all gathered information in one place before starting the application.",
      },
    ],
    summary: [
      "An EIN is a federal Tax ID for your business — like an SSN for the company.",
      "Most LLCs, partnerships, corporations, and businesses with employees need one.",
      "Before applying, gather: legal name, structure, responsible party info, and address.",
      "Form SS-4 is the official IRS application — get it directly from IRS.gov.",
    ],
  },
  {
    slug: "itin-application-checklist",
    title: "ITIN Application Checklist (Individual Tax ID)",
    description:
      "Understand what an ITIN is, who typically needs one, and how to organize the documents required to apply.",
    category: "Business & Tax Setup Documents",
    readTime: "6 min read",
    showDisclaimer: true,
    problemLabel: "What an ITIN is",
    problem:
      "An ITIN (Individual Taxpayer Identification Number) is a nine-digit tax processing number issued by the IRS for people who need to file or report to the IRS but are not eligible for a Social Security Number. It's used purely for federal tax reporting.",
    whyItHappensLabel: "Who typically needs one",
    whyItHappens:
      "ITINs are commonly needed by non-US citizens with US tax filing obligations, foreign nationals receiving income from US sources, dependents or spouses of US visa holders, and certain non-resident business owners. An ITIN does not authorize work in the US and is not a substitute for an SSN — it exists only for tax purposes.",
    solutionLabel: "Step-by-step preparation",
    solution: [
      {
        step: "Confirm you actually need an ITIN",
        detail:
          "An ITIN is needed when you have a US tax filing requirement but are not eligible for an SSN. If you might qualify for an SSN, that's typically the right route instead.",
      },
      {
        step: "Identify your primary identification document",
        detail:
          "A valid, unexpired passport is the most common primary ID because it can stand alone. If you don't have a passport, you'll need a combination of two or more other supporting documents.",
      },
      {
        step: "Gather supporting documents based on your situation",
        detail:
          "These can include national identification cards, foreign driver's license, civil birth certificate, visa, US Citizenship and Immigration Services (USCIS) photo ID, or school/medical records (for dependents). Originals or certified copies from the issuing agency are typically required.",
      },
      {
        step: "Prepare any income or supporting documents",
        detail:
          "Depending on your reason for applying, you may need to attach a federal tax return or specific documents that prove your tax filing requirement (for example, certain treaty benefits or third-party withholding statements).",
      },
      {
        step: "Review the official IRS Form W-7",
        detail:
          "Form W-7 is the official IRS application for an ITIN. We don't provide or recreate it here — get the current version directly from IRS.gov. Read its instructions carefully because they explain exactly which supporting documents apply to your situation.",
      },
    ],
    checklists: [
      {
        heading: "Identification documents",
        items: [
          "Valid, unexpired passport (preferred — can stand alone as primary ID)",
          "National identification card (with photo, name, address, DOB, expiration)",
          "Foreign driver's license",
          "Civil birth certificate (required for dependents under 18 if no passport)",
          "US Citizenship and Immigration Services (USCIS) photo ID",
          "Visa issued by the US Department of State (if applicable)",
        ],
      },
      {
        heading: "Supporting / situational documents",
        items: [
          "Federal tax return (if filing one with your application)",
          "Proof of US residency for dependents (school or medical records)",
          "Documents supporting any treaty benefits claimed",
          "Letter from a withholding agent (if applicable)",
        ],
      },
    ],
    toolsLabel: "Helpful references",
    tools: [
      {
        name: "IRS Form W-7 (official application)",
        note: "The official form and instructions are on IRS.gov. We do not provide or recreate the form.",
      },
      {
        name: "An IRS-authorized Certifying Acceptance Agent (CAA)",
        note: "Optional. CAAs can help verify documents so you don't need to mail original IDs.",
      },
      {
        name: "A document folder",
        note: "Keep originals and copies organized and clearly labeled before submitting.",
      },
    ],
    summary: [
      "An ITIN is a tax-only ID for people who need to file with the IRS but can't get an SSN.",
      "A valid, unexpired passport is the simplest primary ID.",
      "Otherwise, you'll combine two or more supporting documents — check Form W-7 instructions.",
      "Form W-7 is the official IRS application — get it directly from IRS.gov.",
    ],
  },
  {
    slug: "tax-setup-document-organizer",
    title: "Tax Setup Document Organizer (Personal & Business)",
    description:
      "A clean checklist to help you gather and organize the documents you'll typically need for personal and business tax setup.",
    category: "Business & Tax Setup Documents",
    readTime: "5 min read",
    showDisclaimer: true,
    problemLabel: "Why an organizer helps",
    problem:
      "Most of the stress around tax setup comes from chasing scattered documents at the last minute. A simple, categorized checklist means you can gather things gradually — by the time you sit down with a professional or file, everything is already in one place.",
    checklists: [
      {
        heading: "Identification documents",
        items: [
          "Government-issued photo ID (driver's license or state ID)",
          "Passport (yours and dependents', if applicable)",
          "Social Security card or ITIN letter",
          "Dependents' SSNs or ITINs",
        ],
      },
      {
        heading: "Income records",
        items: [
          "W-2 forms from employers",
          "1099 forms (contract income, interest, dividends, etc.)",
          "Records of any cash income",
          "Investment income statements",
          "Rental income records",
          "Records of unemployment or other government payments",
        ],
      },
      {
        heading: "Business registration documents",
        items: [
          "EIN confirmation letter (IRS Form CP 575)",
          "State business registration / formation documents",
          "Operating agreement (LLCs) or partnership agreement",
          "Business licenses and permits",
          "DBA / trade name filings",
        ],
      },
      {
        heading: "Bank & financial statements",
        items: [
          "Business checking and savings statements (full year)",
          "Business credit card statements (full year)",
          "Loan documents and year-end interest statements",
          "Merchant processor statements (Stripe, Square, PayPal, etc.)",
          "Mileage logs and vehicle expense records",
          "Receipts for major business purchases",
        ],
      },
    ],
    summary: [
      "Gather documents in four buckets: ID, income, business registration, and financials.",
      "Use the checklists above to confirm nothing is missing.",
      "Keep digital copies in a single folder for easy sharing with a professional.",
      "Update the folder throughout the year so tax setup never feels last-minute.",
    ],
  },
];

export function findArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
