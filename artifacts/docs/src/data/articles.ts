export type ChecklistGroup = {
  heading: string;
  items: string[];
};

export type FAQ = {
  question: string;
  answer: string;
};

export type Article = {
  slug: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  directAnswer?: string;
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
  faq?: FAQ[];
  relatedSlugs?: string[];
  showDisclaimer?: boolean;
  nextStep?: { label: string; href: string; description?: string };
};

export const LEGAL_DISCLAIMER =
  "This content is for educational and informational purposes only. It does not constitute legal, tax, or financial advice. Users should consult a qualified professional for advice specific to their situation. We do not provide official government forms or services.";

export const CATEGORY_ORDER = [
  "EIN",
  "ITIN",
  "Business Setup",
  "Financial Systems",
  "Money & Profit",
  "Operations",
  "Sales & Clients",
  "Marketing & Growth",
];

export const articles: Article[] = [
  // ========================= EIN CLUSTER =========================
  {
    slug: "what-is-an-ein",
    title: "What is an EIN?",
    description:
      "A clear, plain-English explanation of the Employer Identification Number and what it's used for.",
    category: "EIN",
    readTime: "3 min read",
    showDisclaimer: true,
    directAnswer:
      "An EIN (Employer Identification Number) is a unique nine-digit number issued by the IRS to identify a business for federal tax purposes. Think of it as a Social Security number, but for your business. It's free to obtain directly from the IRS.",
    problemLabel: "Simple explanation",
    problem:
      "When the IRS or a bank needs to identify your business, they use the EIN. It appears on tax filings, payroll forms, business bank accounts, and many state and local registrations. It does not expire, and a business keeps the same EIN for its entire life unless its structure fundamentally changes.",
    solutionLabel: "How an EIN gets used in practice",
    solution: [
      {
        step: "Filing federal business taxes",
        detail:
          "Your EIN appears on the business's federal tax return and most related filings.",
      },
      {
        step: "Opening a business bank account",
        detail:
          "Banks require an EIN (or sometimes an SSN for sole proprietors) to open a business account.",
      },
      {
        step: "Hiring and paying employees",
        detail:
          "Payroll, W-2s, and employment tax filings all reference the EIN.",
      },
      {
        step: "Applying for licenses and permits",
        detail:
          "Many state and local agencies ask for your EIN during registration.",
      },
    ],
    summary: [
      "An EIN is a nine-digit federal tax ID for your business.",
      "It's free directly from the IRS — beware of paid lookalike sites.",
      "You'll need it for taxes, banking, payroll, and many registrations.",
      "The official application is IRS Form SS-4. Get it from IRS.gov.",
    ],
    faq: [
      {
        question: "Is an EIN the same as a tax ID number?",
        answer:
          "Yes. EIN stands for Employer Identification Number. It's sometimes called a Federal Tax ID Number or FTIN. They all refer to the same nine-digit number issued by the IRS.",
      },
      {
        question: "How long does it take to get an EIN?",
        answer:
          "If you apply online at IRS.gov, you receive your EIN immediately after completing the application — typically in under 15 minutes. Mail and fax applications take 4–8 weeks.",
      },
      {
        question: "Does an EIN expire?",
        answer:
          "No. An EIN never expires and is permanent for the life of the business. If you close the business or change its structure significantly, the old EIN is retired but not reused.",
      },
      {
        question: "Can a sole proprietor get an EIN?",
        answer:
          "Yes. Sole proprietors are not required to have an EIN unless they have employees or file certain excise tax returns, but many choose to get one to protect their SSN and open a business bank account.",
      },
    ],
    relatedSlugs: [
      "who-needs-an-ein",
      "ein-application-preparation-checklist",
      "common-ein-mistakes",
    ],
  },
  {
    slug: "who-needs-an-ein",
    title: "Who needs an EIN?",
    description:
      "A quick rundown of which small businesses are required to have an EIN, and which ones simply benefit from one.",
    category: "EIN",
    readTime: "3 min read",
    showDisclaimer: true,
    directAnswer:
      "You generally need an EIN if your business has employees, is a corporation or partnership, files certain federal tax returns, or withholds taxes for non-wage income paid to a non-resident. Many other small businesses choose to get one to keep their personal SSN private.",
    problemLabel: "Simple explanation",
    problem:
      "The IRS requires an EIN in specific situations, but the practical reasons go beyond requirements. Even when an EIN isn't strictly required, having one separates your business identity from your personal identity and is often required by banks, payroll providers, and clients.",
    solutionLabel: "Who typically needs (or wants) an EIN",
    solution: [
      {
        step: "Businesses with employees",
        detail: "Required, regardless of business structure.",
      },
      {
        step: "Multi-member LLCs, partnerships, and corporations",
        detail: "Required by the IRS.",
      },
      {
        step: "Single-member LLCs and sole proprietors",
        detail:
          "Not always required, but commonly obtained to open a business bank account or avoid sharing an SSN with clients.",
      },
      {
        step: "Freelancers issued many 1099s",
        detail:
          "An EIN can be given to clients in place of an SSN on a W-9, reducing exposure of personal info.",
      },
      {
        step: "Trusts, estates, and non-profits",
        detail:
          "These entities generally need their own EIN for tax reporting.",
      },
    ],
    summary: [
      "Required: employers, partnerships, corporations, multi-member LLCs.",
      "Optional but recommended: single-member LLCs, sole proprietors, freelancers.",
      "The benefit is identity separation and easier banking.",
      "When in doubt, an EIN is free and rarely a downside to have.",
    ],
    relatedSlugs: [
      "what-is-an-ein",
      "ein-application-preparation-checklist",
      "itin-vs-ein",
    ],
  },
  {
    slug: "ein-application-preparation-checklist",
    title: "EIN Application Preparation Checklist (Business Tax ID)",
    description:
      "Organize the information you'll need before applying for an EIN with the IRS.",
    category: "EIN",
    readTime: "6 min read",
    showDisclaimer: true,
    directAnswer:
      "Before applying for an EIN, gather your legal business name, business structure, responsible party's full name and SSN/ITIN, business address, and reason for applying. Then use the IRS's official Form SS-4 (available on IRS.gov) to submit.",
    problemLabel: "Simple explanation",
    problem:
      "The EIN application itself only takes a few minutes once you have the information ready. Most delays come from missing details or names that don't match formation documents. This checklist exists so you can gather everything once and apply without going back and forth.",
    solutionLabel: "Step-by-step preparation",
    solution: [
      {
        step: "Confirm your legal business name and structure",
        detail:
          "Sole proprietorship, single-member LLC, multi-member LLC, partnership, or corporation. Have filed formation documents in front of you so the name matches exactly.",
      },
      {
        step: "Gather information about the responsible party",
        detail:
          "This is the person who controls or owns the business. You'll need their full legal name and a valid taxpayer ID (SSN or ITIN).",
      },
      {
        step: "Confirm your business address and contact details",
        detail:
          "Use the physical address where the business operates and a working phone number.",
      },
      {
        step: "Know your reason for applying and start date",
        detail:
          "Common reasons: starting a new business, hiring employees, banking. Have your business start or acquisition date ready.",
      },
      {
        step: "Review the official IRS Form SS-4",
        detail:
          "Walk through it once before applying. We don't recreate the form here — get the current version from IRS.gov.",
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
        note: "Available on IRS.gov. We do not recreate or provide the form.",
      },
      {
        name: "Your business formation documents",
        note: "To confirm exact legal name and structure.",
      },
      {
        name: "A simple folder or document organizer",
        note: "Keep all gathered information in one place before starting.",
      },
    ],
    summary: [
      "Before applying, gather legal name, structure, responsible party info, and address.",
      "Most delays come from name mismatches with formation documents.",
      "Form SS-4 is the official IRS application — get it directly from IRS.gov.",
      "Apply only through IRS.gov. The EIN itself is free.",
    ],
    relatedSlugs: [
      "what-is-an-ein",
      "who-needs-an-ein",
      "common-ein-mistakes",
    ],
  },
  {
    slug: "common-ein-mistakes",
    title: "Common EIN mistakes to avoid",
    description:
      "Small mistakes during the EIN process that cause big delays — and how to skip them entirely.",
    category: "EIN",
    readTime: "4 min read",
    showDisclaimer: true,
    directAnswer:
      "The most common EIN mistakes are paying a third-party site for what the IRS provides for free, applying before the business is legally formed, mismatched legal names, and using the wrong responsible party. All are easy to avoid with a small amount of preparation.",
    problemLabel: "Simple explanation",
    problem:
      "An EIN application is straightforward, but small errors create real friction: rejected applications, IRS letters that take weeks to resolve, or worse — paying a service for something the IRS provides for free. Knowing the common pitfalls in advance saves time and money.",
    solutionLabel: "Mistakes to avoid",
    solution: [
      {
        step: "Paying a third-party site",
        detail:
          "Getting an EIN is free on IRS.gov. If a site charges a fee, it's not the IRS.",
      },
      {
        step: "Applying before the business is legally formed",
        detail:
          "If your business is an LLC or corporation, file your state formation paperwork first. The EIN application asks for your legal name and date — both come from formation.",
      },
      {
        step: "Name mismatches",
        detail:
          "The legal name on the EIN application must exactly match what's on your formation documents. Punctuation and spacing matter.",
      },
      {
        step: "Wrong responsible party",
        detail:
          "The responsible party must be a natural person who controls the entity, not another business or a service provider.",
      },
      {
        step: "Forgetting to save the EIN confirmation letter (CP 575)",
        detail:
          "Save the IRS confirmation letter immediately. Banks and many agencies will ask for it later.",
      },
    ],
    summary: [
      "Always apply directly through IRS.gov. It's free.",
      "Form your business legally before applying for the EIN.",
      "Match the legal name exactly to your formation documents.",
      "Save your CP 575 confirmation letter the day you receive it.",
    ],
    relatedSlugs: [
      "what-is-an-ein",
      "ein-application-preparation-checklist",
      "required-startup-documents",
    ],
  },

  // ========================= ITIN CLUSTER =========================
  {
    slug: "what-is-an-itin",
    title: "What is an ITIN?",
    description:
      "A simple explanation of the Individual Taxpayer Identification Number and what it's used for.",
    category: "ITIN",
    readTime: "3 min read",
    showDisclaimer: true,
    directAnswer:
      "An ITIN (Individual Taxpayer Identification Number) is a nine-digit tax processing number issued by the IRS for people who need to file or report to the IRS but are not eligible for a Social Security Number. It's used solely for federal tax purposes and does not authorize work in the United States.",
    problemLabel: "Simple explanation",
    problem:
      "An ITIN exists so people without an SSN can still meet US tax obligations. It looks like an SSN (nine digits) and is used in the same fields on tax forms, but it serves only tax purposes. It is not an immigration document and does not provide work authorization or eligibility for benefits.",
    solutionLabel: "How an ITIN gets used in practice",
    solution: [
      {
        step: "Filing a US federal tax return",
        detail:
          "If a non-citizen has US tax obligations, the ITIN goes where the SSN normally would.",
      },
      {
        step: "Reporting income on a 1099 or W-8",
        detail:
          "Used by certain non-resident contractors and investors with US-source income.",
      },
      {
        step: "Claiming dependents on a US tax return",
        detail:
          "Dependents who are not eligible for an SSN may need ITINs to be claimed.",
      },
      {
        step: "Treaty benefits and withholding statements",
        detail:
          "ITINs are often required to claim reduced withholding under a tax treaty.",
      },
    ],
    summary: [
      "An ITIN is a tax-only ID for people who can't get an SSN.",
      "It does not authorize work or provide immigration status.",
      "It looks like an SSN and goes in the same field on tax forms.",
      "The official application is IRS Form W-7. Get it from IRS.gov.",
    ],
    relatedSlugs: [
      "who-needs-an-itin",
      "itin-application-checklist",
      "itin-vs-ein",
    ],
  },
  {
    slug: "who-needs-an-itin",
    title: "Who needs an ITIN?",
    description:
      "Who typically applies for an ITIN, and how to know if it's the right ID for your situation.",
    category: "ITIN",
    readTime: "3 min read",
    showDisclaimer: true,
    directAnswer:
      "You may need an ITIN if you have a US tax filing or reporting requirement but are not eligible for a Social Security Number. This commonly applies to non-resident foreign nationals, certain spouses or dependents of US visa holders, and some non-US business owners with US income.",
    problemLabel: "Simple explanation",
    problem:
      "If you might qualify for an SSN, that's typically the right route — an ITIN is specifically for people who cannot get one. The IRS expects you to confirm SSN ineligibility before applying.",
    solutionLabel: "Common situations that require an ITIN",
    solution: [
      {
        step: "Non-resident aliens with US tax filing obligations",
        detail:
          "For example, foreign owners of US LLCs or those with US-source investment income.",
      },
      {
        step: "Dependents or spouses of US visa holders",
        detail:
          "Who themselves are not eligible for an SSN but appear on a tax return.",
      },
      {
        step: "Foreign nationals receiving US-source income",
        detail:
          "Including certain royalties, contract income, or treaty-protected income.",
      },
      {
        step: "Anyone needing to file a federal return without SSN eligibility",
        detail:
          "If you must file, but you can't get an SSN, the ITIN is your alternative.",
      },
    ],
    summary: [
      "ITINs are for people with US tax obligations who can't get an SSN.",
      "If you might be SSN-eligible, apply for an SSN instead.",
      "Common applicants: non-resident foreign nationals and their dependents.",
      "Form W-7 is the official application — get it directly from IRS.gov.",
    ],
    relatedSlugs: [
      "what-is-an-itin",
      "itin-application-checklist",
      "itin-vs-ein",
    ],
  },
  {
    slug: "itin-application-checklist",
    title: "ITIN Application Checklist (Individual Tax ID)",
    description:
      "Organize the documents you'll need before applying for an ITIN with the IRS.",
    category: "ITIN",
    readTime: "6 min read",
    showDisclaimer: true,
    directAnswer:
      "To apply for an ITIN, you need a primary identification document (usually a valid, unexpired passport) or a combination of supporting documents, plus IRS Form W-7 and any required tax documents. Originals or certified copies from the issuing agency are typically required.",
    problemLabel: "Simple explanation",
    problem:
      "An ITIN application requires careful document handling because the IRS often needs originals or certified copies. Knowing in advance which documents apply to your situation saves weeks of back-and-forth.",
    solutionLabel: "Step-by-step preparation",
    solution: [
      {
        step: "Confirm you actually need an ITIN",
        detail:
          "An ITIN is for people with US tax obligations who are not eligible for an SSN.",
      },
      {
        step: "Identify your primary identification document",
        detail:
          "A valid, unexpired passport is the most common primary ID — it can stand alone. Otherwise, you'll need a combination of two or more other supporting documents.",
      },
      {
        step: "Gather supporting documents based on your situation",
        detail:
          "These can include national IDs, foreign driver's licenses, civil birth certificates, visas, USCIS photo IDs, or school/medical records (for dependents).",
      },
      {
        step: "Prepare any tax-related supporting documents",
        detail:
          "Depending on your reason for applying, you may attach a federal tax return or specific documents proving the requirement (e.g. treaty benefits).",
      },
      {
        step: "Review the official IRS Form W-7",
        detail:
          "Get the current version directly from IRS.gov and read its instructions carefully — they explain exactly which documents apply.",
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
        note: "Optional. CAAs can certify documents so you don't need to mail original IDs.",
      },
      {
        name: "A document folder",
        note: "Keep originals and copies organized and clearly labeled.",
      },
    ],
    summary: [
      "A valid, unexpired passport is the simplest primary ID.",
      "Otherwise, combine two or more supporting documents.",
      "Originals or certified copies are typically required by the IRS.",
      "Form W-7 is the official IRS application — get it directly from IRS.gov.",
    ],
    relatedSlugs: ["what-is-an-itin", "who-needs-an-itin", "itin-vs-ein"],
  },
  {
    slug: "itin-vs-ein",
    title: "ITIN vs EIN: what's the difference?",
    description:
      "A side-by-side comparison so you can quickly tell which tax ID applies to your situation.",
    category: "ITIN",
    readTime: "3 min read",
    showDisclaimer: true,
    directAnswer:
      "An ITIN identifies an individual for US tax purposes when they can't get an SSN. An EIN identifies a business entity. They serve different purposes — many small business owners end up needing both: an ITIN for themselves and an EIN for the business.",
    problemLabel: "Simple explanation",
    problem:
      "Both are nine-digit IRS-issued numbers, both appear on tax forms, and both are confused for each other constantly. The difference is what they identify: a person versus a business.",
    solutionLabel: "Side-by-side comparison",
    solution: [
      {
        step: "ITIN — identifies a person",
        detail:
          "Issued to individuals with US tax obligations who can't get an SSN. Goes in the SSN field on personal tax forms. Application: Form W-7.",
      },
      {
        step: "EIN — identifies a business",
        detail:
          "Issued to businesses, partnerships, corporations, trusts, and similar entities. Used on business tax filings, payroll, and business banking. Application: Form SS-4.",
      },
      {
        step: "When you might need both",
        detail:
          "A non-US individual who forms a US LLC will often need an ITIN (for themselves) and an EIN (for the LLC).",
      },
      {
        step: "What they don't do",
        detail:
          "Neither one provides work authorization, immigration status, or eligibility for benefits.",
      },
    ],
    summary: [
      "ITIN = person. EIN = business.",
      "Both are nine-digit IRS numbers but serve different roles.",
      "Form W-7 for ITIN, Form SS-4 for EIN.",
      "Many small business owners eventually need both.",
    ],
    relatedSlugs: [
      "what-is-an-ein",
      "what-is-an-itin",
      "ein-application-preparation-checklist",
      "itin-application-checklist",
    ],
  },

  // ========================= BUSINESS SETUP CLUSTER =========================
  {
    slug: "how-to-register-a-small-business",
    title: "How do I register a small business?",
    description:
      "The basic order of operations for legally forming and registering a small business in the US.",
    category: "Business Setup",
    readTime: "5 min read",
    showDisclaimer: true,
    directAnswer:
      "Registering a small business generally means choosing a structure, registering with your state, getting an EIN from the IRS, opening a business bank account, and registering for any required state and local taxes or licenses. The exact order varies by state and structure.",
    problemLabel: "Simple explanation",
    problem:
      "Registration sounds complicated, but for most small businesses it's a sequence of clear, well-defined steps. The biggest source of confusion is the order — doing things in the right order avoids re-doing paperwork.",
    solutionLabel: "Step-by-step",
    solution: [
      {
        step: "Choose a business structure",
        detail:
          "Sole proprietorship, single-member LLC, multi-member LLC, partnership, S corp, or C corp. Each has different liability, tax, and paperwork implications.",
      },
      {
        step: "Pick and check a business name",
        detail:
          "Search your state's business name database to confirm it's available. Check domain availability and trademarks if branding matters.",
      },
      {
        step: "Register with your state",
        detail:
          "File the formation paperwork with your state's Secretary of State (or equivalent). Sole proprietors typically don't file at this step.",
      },
      {
        step: "Get an EIN from the IRS",
        detail:
          "Apply directly on IRS.gov. It's free and only takes a few minutes once your business is formed.",
      },
      {
        step: "Open a business bank account",
        detail:
          "Use the EIN and your formation documents. Keep all business income and expenses through this account.",
      },
      {
        step: "Register for state and local taxes",
        detail:
          "Sales tax, employer withholding, and city/county business licenses, depending on your state and what you sell.",
      },
    ],
    summary: [
      "Order matters: structure → name → state filing → EIN → bank → state/local.",
      "Sole proprietors skip the state filing step in most states.",
      "Get the EIN directly from IRS.gov — it's always free.",
      "Open the business bank account before taking any business payments.",
    ],
    faq: [
      {
        question: "Do I need an LLC to start a business?",
        answer:
          "No. Most businesses start as sole proprietorships, which require no state filing. An LLC adds a layer of liability protection but also adds cost and paperwork. Many businesses operate successfully as sole proprietors for years before forming an LLC.",
      },
      {
        question: "How much does it cost to register a small business?",
        answer:
          "State LLC filing fees range from $40 to $500 depending on the state. The EIN from the IRS is always free. Licenses and permits vary by location and industry. A sole proprietorship in most states has no upfront registration fee.",
      },
      {
        question: "Do I need a lawyer to register my business?",
        answer:
          "No, for most simple structures. Sole proprietorships, single-member LLCs, and even multi-member LLCs are commonly formed by owners directly through their state's Secretary of State website. Lawyers are advisable for complex arrangements, investor agreements, or industries with high regulatory requirements.",
      },
      {
        question: "What's the difference between a sole proprietorship and an LLC?",
        answer:
          "A sole proprietorship is the default structure — no state filing required, all income is personal income, and you have unlimited personal liability. An LLC (Limited Liability Company) separates your business and personal legal identities, potentially protecting personal assets from business debts and lawsuits. See our full guide for a detailed comparison.",
      },
    ],
    relatedSlugs: [
      "required-startup-documents",
      "basic-compliance-checklist",
      "ein-application-preparation-checklist",
    ],
  },
  {
    slug: "required-startup-documents",
    title: "Required startup documents for a small business",
    description:
      "The core documents most small businesses need on file from day one.",
    category: "Business Setup",
    readTime: "4 min read",
    showDisclaimer: true,
    directAnswer:
      "At a minimum, most small businesses need their state formation documents, an EIN confirmation letter, an operating agreement or partnership agreement (for LLCs/partnerships), required licenses and permits, and basic financial records like a business bank account opening packet.",
    problemLabel: "Simple explanation",
    problem:
      "These documents come up repeatedly: when opening accounts, applying for loans, signing contracts, and at tax time. Keeping them organized in one place saves real time later.",
    checklists: [
      {
        heading: "Core formation documents",
        items: [
          "State formation document (Articles of Organization, Articles of Incorporation, etc.)",
          "Operating agreement (LLCs) or partnership agreement",
          "Bylaws (corporations)",
          "DBA / trade name registration (if applicable)",
        ],
      },
      {
        heading: "Federal & tax documents",
        items: [
          "EIN confirmation letter (IRS Form CP 575)",
          "S-corp election (Form 2553), if applicable",
          "Initial federal tax return filing copies (once filed)",
        ],
      },
      {
        heading: "Licenses & registrations",
        items: [
          "State business license (if required)",
          "City or county business license / occupational permit",
          "Sales tax registration (if selling taxable goods or services)",
          "Industry-specific licenses (food, health, transportation, etc.)",
        ],
      },
      {
        heading: "Banking & financial",
        items: [
          "Business bank account opening packet",
          "Business credit card account info",
          "Merchant processor account info (Stripe, Square, etc.)",
          "Insurance policy documents",
        ],
      },
    ],
    summary: [
      "Keep formation, federal, license, and banking documents in one folder.",
      "Save the EIN CP 575 letter the moment you receive it.",
      "Include digital copies — many institutions accept PDFs.",
      "Update the folder any time you add a license, account, or insurance policy.",
    ],
    relatedSlugs: [
      "how-to-register-a-small-business",
      "basic-compliance-checklist",
      "tax-setup-document-organizer",
    ],
  },
  {
    slug: "basic-compliance-checklist",
    title: "Basic compliance checklist for small businesses",
    description:
      "The recurring requirements most small businesses need to stay on top of throughout the year.",
    category: "Business Setup",
    readTime: "4 min read",
    showDisclaimer: true,
    directAnswer:
      "Basic small business compliance covers federal, state, and local obligations: filing annual reports, paying estimated taxes, renewing licenses, maintaining required insurance, and keeping clean financial records. Most are predictable and can be put on a calendar.",
    problemLabel: "Simple explanation",
    problem:
      "Compliance failures are usually quiet — a missed annual report or expired license that turns into a fine months later. The fix is to put each requirement on a recurring calendar so nothing slips.",
    checklists: [
      {
        heading: "Annual / recurring filings",
        items: [
          "State annual report or biennial filing",
          "Local business license renewal",
          "Federal income tax return",
          "State income tax return (if applicable)",
          "Sales tax filings (monthly/quarterly/annual depending on state)",
          "Quarterly estimated tax payments",
        ],
      },
      {
        heading: "Employment-related (if you have employees)",
        items: [
          "Federal payroll tax deposits and Form 941 filings",
          "State unemployment insurance filings",
          "W-2s and 1099s issued by January 31",
          "Workers' compensation insurance",
        ],
      },
      {
        heading: "Records & insurance",
        items: [
          "Business insurance policy in force and renewed",
          "Registered agent service active and current",
          "Books and bank reconciliations up to date",
          "Receipts and contracts saved and organized",
        ],
      },
    ],
    summary: [
      "Most compliance is predictable — put each item on a recurring calendar.",
      "Annual report and license renewals are the most commonly missed.",
      "Quarterly estimated taxes are how most small businesses pay federal tax.",
      "Insurance and registered agent services renew on a schedule too.",
    ],
    relatedSlugs: [
      "how-to-register-a-small-business",
      "required-startup-documents",
      "tax-setup-document-organizer",
    ],
  },
  {
    slug: "tax-setup-document-organizer",
    title: "Tax Setup Document Organizer (Personal & Business)",
    description:
      "A clean checklist to help you gather and organize the documents you'll typically need for personal and business tax setup.",
    category: "Business Setup",
    readTime: "5 min read",
    showDisclaimer: true,
    directAnswer:
      "Tax setup is much easier when documents are organized into four buckets: identification, income, business registration, and bank/financial. This checklist gives you a starting point you can fill in over the year so tax time is never last-minute.",
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
    relatedSlugs: [
      "required-startup-documents",
      "basic-compliance-checklist",
      "how-to-track-business-expenses",
    ],
  },

  // ========================= FINANCIAL SYSTEMS CLUSTER =========================
  {
    slug: "how-to-track-business-expenses",
    title: "How do I track business expenses?",
    description:
      "A simple, no-fuss expense tracking system you can run in under 10 minutes a week.",
    category: "Financial Systems",
    readTime: "6 min read",
    directAnswer:
      "The simplest expense tracking system is: open a dedicated business bank account, run every business expense through it, capture receipts the moment they happen, and spend ten minutes a week categorizing transactions into five or six categories. That's the whole system.",
    problemLabel: "Simple explanation",
    problem:
      "Receipts pile up, personal and business spending get mixed, and at tax time owners scramble to reconstruct months of activity. The fix isn't a fancier tool — it's a small weekly habit using a few simple categories.",
    whyItHappensLabel: "The principle behind the habit",
    whyItHappens:
      "Most businesses fail financially not because they didn't earn enough, but because they spent everything the moment it came in. The businesses that build lasting financial health track their money closely in the early days — not to hoard it, but to know exactly what they can afford to reinvest. Discipline with money in year one creates options in year two and beyond.",
    solutionLabel: "Step-by-step",
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
    relatedSlugs: [
      "profit-and-loss-basics",
      "simple-cash-flow-overview",
      "how-small-businesses-lose-money-without-noticing",
    ],
  },
  {
    slug: "profit-and-loss-basics",
    title: "What is a profit and loss statement?",
    description:
      "A plain-English breakdown of the most important financial statement for a small business.",
    category: "Financial Systems",
    readTime: "4 min read",
    directAnswer:
      "A profit and loss statement (P&L) shows how much money your business made (revenue), how much it spent (expenses), and what's left (profit or loss) over a specific time period — usually a month, quarter, or year. It's the single most useful document for understanding your business's health.",
    problemLabel: "Simple explanation",
    problem:
      "A P&L answers one question: did the business make money in this period? Revenue at the top, expenses in the middle, profit (or loss) at the bottom. That's the whole structure.",
    solutionLabel: "What goes on a basic P&L",
    solution: [
      {
        step: "Revenue",
        detail:
          "All money earned from selling products or services during the period.",
      },
      {
        step: "Cost of goods sold (COGS)",
        detail:
          "Direct costs of producing what you sold — materials, direct labor, etc. Service businesses may not have this.",
      },
      {
        step: "Gross profit",
        detail:
          "Revenue minus COGS. Tells you how profitable the core product/service is before overhead.",
      },
      {
        step: "Operating expenses",
        detail:
          "Rent, software, marketing, payroll, supplies — the costs of running the business.",
      },
      {
        step: "Net profit (or loss)",
        detail:
          "Gross profit minus operating expenses. The bottom line. Positive = profit, negative = loss.",
      },
    ],
    summary: [
      "A P&L = revenue, minus expenses, equals profit or loss.",
      "Run one every month so you spot trends early.",
      "Gross profit shows how healthy the core offer is.",
      "Net profit is the true bottom line for the period.",
    ],
    faq: [
      {
        question: "How often should a small business run a P&L?",
        answer:
          "Monthly at minimum. A monthly P&L lets you catch trends — rising costs, falling revenue — before they become real problems. Quarterly review is the absolute minimum; annual-only means you're always looking backward.",
      },
      {
        question: "Is a P&L the same as an income statement?",
        answer:
          "Yes. Profit and loss statement, income statement, and statement of operations all refer to the same document. The terms are used interchangeably.",
      },
      {
        question: "Can a business be profitable but still fail?",
        answer:
          "Yes — this is one of the most common ways businesses fail. A business can show profit on a P&L (because revenue exceeds expenses over a period) but still run out of cash if payments come in slower than bills go out. This is a cash flow problem, not a profitability problem.",
      },
      {
        question: "Do I need accounting software to create a P&L?",
        answer:
          "No. A simple spreadsheet with your income and expense categories is enough for most small businesses. Software like QuickBooks or Wave can automate it, but the underlying math — revenue minus expenses equals profit — is the same regardless of tool.",
      },
    ],
    relatedSlugs: [
      "simple-cash-flow-overview",
      "how-to-track-business-expenses",
      "how-small-businesses-lose-money-without-noticing",
    ],
  },
  {
    slug: "simple-cash-flow-overview",
    title: "Cash flow basics for small businesses",
    description:
      "What cash flow is, why it differs from profit, and how to keep it healthy.",
    category: "Financial Systems",
    readTime: "4 min read",
    directAnswer:
      "Cash flow is the actual movement of money in and out of your business over time. A business can be profitable on paper but still run out of cash if money comes in slower than it goes out. Tracking cash flow is about timing, not just totals.",
    problemLabel: "Simple explanation",
    problem:
      "Profit and cash are not the same thing. You can invoice a client today (revenue) but not get paid for 30 days (cash). Meanwhile, rent and payroll are due now. Cash flow tracks when money actually moves so you don't get caught short.",
    solutionLabel: "How to keep cash flow healthy",
    solution: [
      {
        step: "Forecast monthly inflows and outflows",
        detail:
          "List expected income and expenses for the next 1–6 months. A simple spreadsheet works.",
      },
      {
        step: "Get paid faster",
        detail:
          "Invoice the day work is delivered. Set clear payment terms. Send polite reminders before due dates.",
      },
      {
        step: "Slow down outflows where possible",
        detail:
          "Negotiate net-30 terms with suppliers. Pay bills on (not before) their due date.",
      },
      {
        step: "Hold a small cash buffer",
        detail:
          "Even one month of operating expenses in a separate account smooths out timing surprises.",
      },
      {
        step: "Review weekly",
        detail:
          "A 5-minute weekly cash check is enough to catch problems before they become emergencies.",
      },
    ],
    summary: [
      "Cash flow = timing of money in vs. money out.",
      "Profitable businesses still fail when cash runs out.",
      "Invoice fast, collect on terms, hold a small buffer.",
      "A 5-minute weekly check is enough for most small businesses.",
    ],
    relatedSlugs: [
      "profit-and-loss-basics",
      "how-to-track-business-expenses",
      "how-small-businesses-lose-money-without-noticing",
    ],
  },

  // ========================= EXISTING ARTICLES =========================
  {
    slug: "how-small-businesses-lose-money-without-noticing",
    title: "How Small Businesses Lose Money Without Noticing",
    description:
      "The silent leaks draining your profit each month, and a simple way to spot them before they grow.",
    category: "Money & Profit",
    readTime: "5 min read",
    directAnswer:
      "Most small businesses lose money to forgotten subscriptions, small fees, and unreviewed expenses. The fix is a 30-minute monthly review where you read every line of every statement, cancel anything unused, and question your top 5 expenses.",
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
    relatedSlugs: [
      "how-to-track-business-expenses",
      "profit-and-loss-basics",
      "simple-cash-flow-overview",
    ],
  },
  {
    slug: "basic-client-follow-up-system-to-avoid-lost-sales",
    title: "A Basic Client Follow-Up System to Avoid Lost Sales",
    description:
      "Most lost sales aren't lost — they're forgotten. A simple follow-up system so no opportunity slips through.",
    category: "Sales & Clients",
    readTime: "7 min read",
    directAnswer:
      "Most lost sales are forgotten, not rejected. A simple follow-up system — one place to capture every lead, a defined cadence (2 days, 7 days, 14 days, then monthly), and 15 minutes a day — recovers most of those forgotten opportunities.",
    problem:
      "A potential client reaches out, gets a quote, and goes quiet. The owner gets busy and forgets to follow up. Weeks later, that prospect hires someone else. Multiply this by every quote sent and the lost revenue is significant — but invisible.",
    whyItHappens:
      "Sales follow-up isn't urgent until it's too late. There's no reminder, no list, and no defined moment to reach back out. The owner relies on memory, and memory loses to a busy week every time. It's also worth knowing that some clients take years to convert — not because they weren't interested, but because the timing wasn't right. Staying visible and consistently useful over months and years beats aggressive pitching every time.",
    solution: [
      {
        step: "Qualify before you pitch: Need → Like → Deal",
        detail:
          "Before chasing any lead, answer three questions in order. Does this person actually need what you offer? If not, no amount of follow-up fixes a bad fit — move on. Do you genuinely like each other? Clients you dread working with cost more than they earn. Can you agree on terms that work for both sides? If all three are yes, the close is easy. If any are no, no follow-up cadence will save it.",
      },
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
      "Qualify first: does the client need you, do you like each other, can you agree on a deal?",
      "Most lost sales are forgotten, not rejected.",
      "Capture every lead with a planned next-contact date.",
      "Use a simple cadence: 2 days, 7 days, 14 days, then monthly.",
      "Block 15 minutes a day for follow-ups. Some relationships take years — stay consistent.",
    ],
  },
  // ========================= MARKETING & GROWTH CLUSTER =========================
  {
    slug: "how-to-get-your-first-10-customers",
    title: "How to get your first 10 customers",
    description:
      "A simple, no-budget plan for getting your first paying customers from people and communities you already have access to.",
    category: "Marketing & Growth",
    readTime: "5 min read",
    showDisclaimer: false,
    directAnswer:
      "Your first 10 customers almost never come from ads, SEO, or social media. They come from people you already know, communities you already belong to, and direct outreach with a clear offer. Make a list of everyone who could buy from you (or refer someone who could), then talk to them one by one.",
    problemLabel: "Simple explanation",
    problem:
      "New owners assume they need a marketing strategy before they have customers. The opposite is true: you need 5–10 real conversations with potential buyers before you know what to market, what to say, or what to charge. The fastest path to revenue is direct, personal outreach to people who already trust you. Start with one very specific audience — new LLC owners, local contractors, freelance designers — and focus entirely on them. Once one type of customer knows and trusts you, reaching the next type becomes dramatically easier.",
    solutionLabel: "How to get your first 10 customers",
    solution: [
      {
        step: "Write down exactly what you're offering and to whom",
        detail:
          "One sentence: 'I help [type of person] do [specific outcome] for [price].' Without this, every conversation gets vague and people don't know how to refer you.",
      },
      {
        step: "Make a list of 50 people you can contact directly",
        detail:
          "Past clients or colleagues, friends in your industry, neighbors, parents from your kids' school, members of any group you already belong to. The list is your starting market.",
      },
      {
        step: "Send a short, personal message to each one",
        detail:
          "Two or three sentences: what you're doing, who it's for, and a direct ask — either to buy, to refer, or to give feedback. No marketing language. No pitch deck. Just a real message from you.",
      },
      {
        step: "Show up where your buyers already gather",
        detail:
          "Local Facebook groups, subreddits, neighborhood apps, industry Slack groups, in-person meetups. Don't pitch — answer questions and be useful. People will check your profile and reach out.",
      },
      {
        step: "Track every conversation in a simple spreadsheet",
        detail:
          "Name, what they said, what they asked, next step, and date. Most first sales take 2–4 follow-ups. Without tracking, you forget who to circle back to.",
      },
    ],
    summary: [
      "Your first customers come from your existing network and direct outreach.",
      "Write a one-sentence offer before you contact anyone.",
      "Personal messages convert; marketing copy doesn't.",
      "Track every conversation — most sales take more than one touch.",
    ],
    faq: [
      {
        question: "How long does it take to get your first 10 customers?",
        answer:
          "Most service-based businesses land their first 10 customers within 4–12 weeks of consistent direct outreach. Product businesses can take longer depending on market awareness. The speed depends almost entirely on how quickly and consistently you reach out.",
      },
      {
        question: "Do I need a website to get my first customers?",
        answer:
          "No. Most first customers come through personal outreach, not inbound traffic. A website is useful for credibility but it's not required to close your first 10 clients. Build your contact list and start messaging before you build a website.",
      },
      {
        question: "What should I say when reaching out to potential customers?",
        answer:
          "Keep it short and personal: what you're doing, who it's for, and a simple ask — either to buy, to refer, or to give feedback. Avoid sales language. Write like you're texting a friend who you think could benefit.",
      },
      {
        question: "What if I don't know 50 people I can contact?",
        answer:
          "Start smaller. Even 10–15 genuine contacts is enough to get started. Expand into niche communities (Facebook groups, subreddits, local meetups) where your target customers already spend time. Answer their questions genuinely and visibility follows.",
      },
    ],
    nextStep: {
      label: "Free marketing channels for a new small business",
      href: "/docs/free-marketing-channels-for-a-new-small-business",
      description:
        "Once your first 10 customers are in motion, expand into the free channels that compound over time.",
    },
    relatedSlugs: [
      "free-marketing-channels-for-a-new-small-business",
      "how-to-write-an-offer-people-actually-respond-to",
      "word-of-mouth-referral-system",
    ],
  },
  {
    slug: "free-marketing-channels-for-a-new-small-business",
    title: "Free marketing channels for a new small business",
    description:
      "The free, sustainable marketing channels that actually work for small businesses without a budget or marketing team.",
    category: "Marketing & Growth",
    readTime: "5 min read",
    showDisclaimer: false,
    directAnswer:
      "The free marketing channels that work for new small businesses are: Google Business Profile, a basic website with one clear page, niche communities (Facebook groups, subreddits, local forums), referrals from past customers, and short-form content that answers real questions. Pick one or two and be consistent — not all of them.",
    problemLabel: "Simple explanation",
    problem:
      "There is no shortage of free marketing advice; there is a shortage of focus. Most owners try five channels for two weeks each, see no results, and conclude marketing doesn't work. Free channels work — but only if you stay on them long enough to build momentum, which usually takes 60–90 days. The deeper issue is that most small businesses compete like businesses — on price and availability — instead of building a brand. A brand means people recognise you, trust you, and choose you before the conversation even starts. That takes longer to build, but it compounds in a way that advertising never does.",
    solutionLabel: "The free channels that actually work",
    solution: [
      {
        step: "Set up a Google Business Profile (if you serve a local market)",
        detail:
          "Free, fast, and the single highest-leverage channel for any local service business. Add photos, ask 5 customers for reviews, keep your hours updated. You'll start showing up in Google Maps within weeks.",
      },
      {
        step: "Build one simple website page",
        detail:
          "Who you help, what you do for them, how to contact you, and proof (testimonials or before/after). One clear page beats a five-page site nobody scrolls.",
      },
      {
        step: "Join 2–3 niche communities where your buyers already are",
        detail:
          "A local Facebook group, a subreddit for your industry, a Slack community. Read for a week first. Then answer questions consistently. People will reach out — they almost always do.",
      },
      {
        step: "Ask every happy customer for a referral or review",
        detail:
          "The single line: 'If you know anyone else who could use this, would you mind sending them my way?' Plus a Google review request. Both should be standard at the end of every job.",
      },
      {
        step: "Publish short content that answers one real question",
        detail:
          "A LinkedIn post, a TikTok, a blog post — pick one. Format: a question your customer just asked you, then your two-paragraph answer. Aim for one piece a week for 90 days.",
      },
    ],
    summary: [
      "Pick 1–2 free channels and commit for 60–90 days.",
      "Google Business Profile is the highest-leverage channel for local businesses.",
      "One simple website page beats a five-page site no one reads.",
      "Niche communities and customer referrals beat broad social media.",
      "Build a brand, not just a business — people buy from businesses they recognise and trust.",
      "Your personal story is your competitive advantage. Share it. No one can copy who you are.",
    ],
    nextStep: {
      label: "How to write an offer people actually respond to",
      href: "/docs/how-to-write-an-offer-people-actually-respond-to",
      description:
        "Channels only work when the offer is clear. Tighten the message before you scale the reach.",
    },
    relatedSlugs: [
      "how-to-get-your-first-10-customers",
      "how-to-write-an-offer-people-actually-respond-to",
      "simple-social-media-for-small-businesses-with-no-budget",
    ],
  },
  {
    slug: "how-to-write-an-offer-people-actually-respond-to",
    title: "How to write an offer people actually respond to",
    description:
      "A simple framework for writing a clear, specific offer that converts conversations into customers.",
    category: "Marketing & Growth",
    readTime: "4 min read",
    showDisclaimer: false,
    directAnswer:
      "An offer that converts has four parts: who it's for, what specific outcome it delivers, what's included, and the price. If a stranger can't repeat your offer back to you in one sentence after reading it, it's too vague — and vague offers get ignored.",
    problemLabel: "Simple explanation",
    problem:
      "Most small business owners describe what they do, not what they sell. 'I do bookkeeping for small businesses' is a description. 'I clean up 12 months of messy books for solo service businesses for $1,200, in 3 weeks' is an offer. The first gets a polite nod. The second gets a yes or no.",
    solutionLabel: "How to write an offer that converts",
    solution: [
      {
        step: "Name the exact person it's for",
        detail:
          "Not 'small businesses' — be specific. 'Solo lawyers in their first 2 years.' 'New parents in our zip code.' The narrower you go, the easier you are to refer.",
      },
      {
        step: "State the specific outcome they get",
        detail:
          "Not 'better marketing' — write the result they can picture. '5 new local customers a month.' 'A clean P&L every month, ready for your accountant.' Outcomes sell. Features don't.",
      },
      {
        step: "List what's included in plain language",
        detail:
          "3–5 concrete items, not a long bulleted list. The buyer wants to know what they get and what they don't. Ambiguity kills conversion.",
      },
      {
        step: "Put the price (or a clear price range) in the offer",
        detail:
          "Hiding price loses you the buyers who can afford you and wastes time on the ones who can't. A range is fine: 'Starting at $X' or '$X–$Y depending on scope.'",
      },
      {
        step: "Test it on 5 real people and rewrite",
        detail:
          "Send it to 5 potential buyers and ask: 'Does this make sense? Would you buy this? What's missing?' Rewrite based on the patterns. Don't guess — your buyers will tell you exactly what to change.",
      },
    ],
    summary: [
      "An offer = who + outcome + what's included + price.",
      "Specific beats clever every time.",
      "Hiding price filters out your best buyers, not your worst.",
      "Test the offer on 5 real people before publishing it anywhere.",
    ],
    nextStep: {
      label: "Word of mouth — how to build a referral system for free",
      href: "/docs/word-of-mouth-referral-system",
      description:
        "Once your offer is clear, referrals get dramatically easier — because your customers can finally describe you.",
    },
    relatedSlugs: [
      "how-to-get-your-first-10-customers",
      "how-to-price-your-services",
      "word-of-mouth-referral-system",
    ],
  },
  {
    slug: "word-of-mouth-referral-system",
    title: "Word of mouth — how to build a referral system for free",
    description:
      "Word of mouth doesn't need to stay random. A simple referral system turns your best customers into a steady source of new ones.",
    category: "Marketing & Growth",
    readTime: "4 min read",
    showDisclaimer: false,
    directAnswer:
      "Most word of mouth dies in silence — happy customers would refer you if you made it easy and asked at the right moment. A simple referral system has three parts: a clear ask script, a good moment to use it, and an easy way for the referrer to make the introduction.",
    problemLabel: "Simple explanation",
    problem:
      "Owners assume referrals are passive: do good work, and customers tell their friends. In reality, even thrilled customers rarely refer unless prompted. They forget, they're busy, or they don't know exactly who to send. A 30-second ask after a successful project usually doubles your referral rate.",
    solutionLabel: "Build a free referral system in 5 steps",
    solution: [
      {
        step: "Identify your best 'referral moments'",
        detail:
          "Right after a project finishes, after positive feedback, or when a customer thanks you. These are the moments people are most willing to refer — and most likely to forget if you don't ask now.",
      },
      {
        step: "Write one short referral ask script",
        detail:
          "Two sentences: 'Glad this worked for you. If you know anyone else who [specific situation], would you mind sending them my way?' Specific beats generic — 'a friend' isn't a person, but 'a friend starting a business' is.",
      },
      {
        step: "Make it effortless for the referrer",
        detail:
          "Send a short, copy-pasteable intro they can forward: who you are, what you do, and how to reach you. The easier you make it, the more they'll do it.",
      },
      {
        step: "Track every referral source",
        detail:
          "A simple column in your customer sheet: 'How did they hear about us?' Within 6 months you'll know who your top referrers are — and you can thank them properly.",
      },
      {
        step: "Close the loop and say thank you",
        detail:
          "Tell the referrer when their referral became a customer. A handwritten note, a small gift, or just a personal thank-you message. People who get acknowledged refer again.",
      },
    ],
    summary: [
      "Referrals are usually lost to silence, not unwillingness.",
      "Ask at the moment of success, with a specific script.",
      "Give the referrer a copy-paste intro to make it easy.",
      "Track sources and thank people — they'll refer again.",
    ],
    nextStep: {
      label: "Simple social media for small businesses with no budget",
      href: "/docs/simple-social-media-for-small-businesses-with-no-budget",
      description:
        "Referrals work even better when prospects can find you online and verify you're real.",
    },
    relatedSlugs: [
      "how-to-get-your-first-10-customers",
      "how-to-write-an-offer-people-actually-respond-to",
      "free-marketing-channels-for-a-new-small-business",
    ],
  },
  {
    slug: "simple-social-media-for-small-businesses-with-no-budget",
    title: "Simple social media for small businesses with no budget",
    description:
      "A no-budget social media plan that takes 30 minutes a week and works without ads, agencies, or daily posting.",
    category: "Marketing & Growth",
    readTime: "4 min read",
    showDisclaimer: false,
    directAnswer:
      "You don't need to post every day on every platform. Pick one platform where your customers actually spend time, post one useful thing a week, and reply to every comment and DM. That's the entire plan for a small business with no budget.",
    problemLabel: "Simple explanation",
    problem:
      "Small business owners burn out on social media because they treat it like a full-time job. The truth is most small businesses don't need a content strategy — they need a presence: a profile that proves they're real, a few posts that show they know their craft, and someone who replies when a real person reaches out.",
    solutionLabel: "A 30-minute-a-week social media plan",
    solution: [
      {
        step: "Pick one platform where your customers actually are",
        detail:
          "Local services → Instagram or Facebook. B2B services → LinkedIn. Visual products → Instagram or TikTok. One platform, done well, beats five done badly.",
      },
      {
        step: "Set up the profile so it converts",
        detail:
          "Clear photo, clear description of who you help and how, link to your one website page or Google Business Profile, contact info visible. Most lost customers come from confusing profiles, not bad content.",
      },
      {
        step: "Post one useful thing a week",
        detail:
          "Format: take a question a customer just asked you and answer it in 4–6 sentences. That's it. You're not entertaining — you're proving you know your work.",
      },
      {
        step: "Reply to every comment and DM the same day",
        detail:
          "This is where customers actually convert. A 30-second response to a real question converts faster than 30 posts. Treat replies as a sales channel, not customer service.",
      },
      {
        step: "Skip the ads until your offer is proven",
        detail:
          "Paid ads amplify what already works. If your free posts and DMs aren't generating customers, ads won't fix it — they'll just burn cash. Get the offer right first.",
      },
    ],
    summary: [
      "One platform, one weekly post, fast replies — that's the plan.",
      "A clear profile converts more than clever content.",
      "Answer real customer questions in your posts.",
      "Don't spend on ads until the free version is working.",
    ],
    nextStep: {
      label: "How to price your services (and stop undercharging)",
      href: "/docs/how-to-price-your-services",
      description:
        "Reach is wasted if your prices don't sustain the business. Fix pricing before scaling marketing.",
    },
    relatedSlugs: [
      "free-marketing-channels-for-a-new-small-business",
      "how-to-write-an-offer-people-actually-respond-to",
      "word-of-mouth-referral-system",
    ],
  },
  {
    slug: "how-to-price-your-services",
    title: "How to price your services (and stop undercharging)",
    description:
      "A practical method for setting service prices that cover your costs, reflect your value, and don't scare off the right customers.",
    category: "Marketing & Growth",
    readTime: "5 min read",
    showDisclaimer: false,
    directAnswer:
      "Most service businesses undercharge because they price based on what they think customers will accept, not on what the work actually costs. Set your price based on three things: your real hourly cost, the value of the outcome to the customer, and what comparable providers charge. Then add a margin — never sell at break-even.",
    problemLabel: "Simple explanation",
    problem:
      "Underpricing feels safer because it makes the 'yes' easier — but it traps you. Low prices mean more customers to pay your bills, less time per customer, lower quality, more burnout, and no margin to invest in growth. Owners who raise prices once usually wish they'd done it 12 months earlier.",
    solutionLabel: "How to set a price that actually works",
    solution: [
      {
        step: "Calculate your real hourly cost (not your wage)",
        detail:
          "Add up everything: target salary, taxes, software, insurance, equipment, time off, admin time. Divide by your actual billable hours per year (usually 1,000–1,200, not 2,000). That's your true minimum hourly cost.",
      },
      {
        step: "Estimate the customer's outcome value",
        detail:
          "What does this work save or earn the customer? A bookkeeper who saves a business owner 6 hours a month at $100/hr is worth more than $50/hr. Value-based pricing starts here.",
      },
      {
        step: "Check what comparable providers charge",
        detail:
          "Look at 5 similar providers in your market. Don't undercut them — match or exceed if you have a reason to. Being the cheapest signals lower quality, not better value.",
      },
      {
        step: "Pick a price and write the offer at that price",
        detail:
          "Combine cost, value, and market rate. Round up — $1,200 lands better than $1,150. Write the offer and use it for the next 5 conversations. Don't negotiate against yourself.",
      },
      {
        step: "Raise prices on new customers every 6–12 months",
        detail:
          "Existing customers can stay on their current price for a cycle. New customers should always pay the current rate — which should grow as your skills, results, and demand grow.",
      },
    ],
    summary: [
      "Underpricing is the most common (and most fixable) small business mistake.",
      "Start with your true hourly cost, then layer in value and market.",
      "Don't be the cheapest — it signals lower quality.",
      "Raise prices for new customers regularly. Existing ones can lag a cycle.",
    ],
    nextStep: {
      label: "How to write an offer people actually respond to",
      href: "/docs/how-to-write-an-offer-people-actually-respond-to",
      description:
        "Once your price is set, package it inside a clear offer so customers can decide quickly.",
    },
    relatedSlugs: [
      "how-to-write-an-offer-people-actually-respond-to",
      "how-to-get-your-first-10-customers",
      "free-marketing-channels-for-a-new-small-business",
    ],
  },

  // ========================= NEW ARTICLES — SEO EXPANSION =========================
  {
    slug: "llc-vs-sole-proprietorship",
    title: "LLC vs sole proprietorship: which is right for your small business?",
    description:
      "A plain-English comparison of the two most common small business structures — what each one means, costs, and when to choose one over the other.",
    category: "Business Setup",
    readTime: "5 min read",
    showDisclaimer: true,
    directAnswer:
      "A sole proprietorship is the default structure — no paperwork required, income flows directly to you, and you have full personal liability. An LLC (Limited Liability Company) separates your business legally from you personally, potentially protecting your personal assets if the business is sued or owes debts. Most new small businesses start as sole proprietors and form an LLC once they have regular revenue or clients.",
    problemLabel: "Simple explanation",
    problem:
      "Choosing the wrong structure doesn't usually destroy a business, but it can cost you money in taxes, expose you to unnecessary legal risk, or require expensive restructuring later. The good news: most small businesses have a clear answer once you understand the two options.",
    solutionLabel: "How to choose",
    solution: [
      {
        step: "Choose sole proprietorship if you're just starting and have low risk",
        detail:
          "No state filing, no formation cost, no ongoing compliance fees. Your business income is your personal income. Best for: freelancers, consultants, solo service providers testing a new idea, or anyone generating under $30K/year.",
      },
      {
        step: "Choose an LLC if liability is a real concern",
        detail:
          "If a client could sue you for damages, if you have employees, if you work in a regulated field, or if you store customer data — an LLC creates a legal wall between your business assets and your personal ones.",
      },
      {
        step: "Consider an LLC for credibility and banking",
        detail:
          "Some clients, larger contracts, and payment processors prefer or require a registered entity. An LLC gives you a formal business name on your bank account and contracts.",
      },
      {
        step: "Tax treatment is similar at the start — but can change",
        detail:
          "Both structures default to pass-through taxation (profit is your personal income). Once an LLC earns over roughly $40–50K/year in net profit, electing S-corp status can reduce self-employment tax. That's a separate step and worth discussing with a tax professional.",
      },
    ],
    summary: [
      "Sole proprietorship = simplest, no cost, full personal liability.",
      "LLC = legal separation between you and the business, costs $40–$500 to form.",
      "Both are pass-through for taxes by default.",
      "Start as a sole proprietor if you're testing. Form an LLC once you have regular clients or real risk.",
    ],
    faq: [
      {
        question: "Can I convert a sole proprietorship to an LLC later?",
        answer:
          "Yes, and it's common. You file formation paperwork with your state, get a new EIN (or keep your existing one in some cases), update your bank account, and notify clients. There's no continuity issue — many businesses make this transition in their first 1–2 years.",
      },
      {
        question: "Does an LLC protect personal assets?",
        answer:
          "An LLC provides a liability shield, meaning your personal bank accounts, home, and other assets are generally protected from business debts or lawsuits — but only if you maintain proper separation (separate bank account, proper contracts, no commingling of funds). The protection can be 'pierced' if the business and personal finances are mixed.",
      },
      {
        question: "Is an LLC or sole proprietorship better for taxes?",
        answer:
          "At low income levels, they're effectively the same — both are pass-through entities. The tax advantage of an LLC comes when you elect S-corp status (typically at $40K+ net profit), which can reduce self-employment taxes. A tax professional can run the numbers for your specific situation.",
      },
      {
        question: "What is an operating agreement and do I need one?",
        answer:
          "An operating agreement is a document that describes how your LLC is run — ownership percentages, how decisions are made, what happens if a member leaves. Some states require one; others don't. Even when not required, it's strongly recommended for any multi-member LLC.",
      },
    ],
    relatedSlugs: [
      "how-to-register-a-small-business",
      "what-is-an-ein",
      "required-startup-documents",
    ],
  },
  {
    slug: "how-to-open-a-business-bank-account",
    title: "How to open a business bank account",
    description:
      "What you need, where to go, and why separating your business and personal finances from day one saves significant time and money.",
    category: "Financial Systems",
    readTime: "4 min read",
    showDisclaimer: false,
    directAnswer:
      "To open a business bank account you'll typically need: your EIN (or SSN for sole proprietors), state formation documents (for LLCs and corporations), a government-issued ID, and an initial deposit. Most banks can open a business account in 30–60 minutes in person, or online in some cases.",
    problemLabel: "Simple explanation",
    problem:
      "Mixing business and personal money is the single most common bookkeeping mistake small business owners make. It makes taxes harder, makes audits more likely, and makes it nearly impossible to actually know if your business is profitable. A separate business account costs nothing extra and fixes all three problems.",
    solutionLabel: "How to open a business bank account",
    solution: [
      {
        step: "Get your EIN first",
        detail:
          "Most banks require an EIN for any business account. Apply directly at IRS.gov — it takes under 15 minutes and is free. Sole proprietors can sometimes use an SSN but an EIN is strongly preferred.",
      },
      {
        step: "Gather your documents",
        detail:
          "EIN confirmation letter, state formation documents (Articles of Organization for LLCs), your government ID, and business name registration (if operating under a DBA). Call ahead to confirm the specific list your chosen bank requires.",
      },
      {
        step: "Choose a bank type",
        detail:
          "Local credit unions and community banks often have lower fees and more flexibility for small businesses. National banks (Chase, Bank of America, Wells Fargo) offer extensive ATM networks and integrations. Online banks (Relay, Mercury, Bluevine) have no monthly fees and fast setup.",
      },
      {
        step: "Set up direct deposit and payment routing",
        detail:
          "Once the account is open, update all clients and payment processors (Stripe, PayPal, Square) to deposit into the business account. Never deposit business income into a personal account after this point.",
      },
    ],
    summary: [
      "Get your EIN before visiting a bank — almost all business accounts require it.",
      "Bring: EIN, state formation docs, government ID, initial deposit.",
      "Online banks (Relay, Mercury) have no monthly fees and are easy to open.",
      "All business income should flow through the business account from day one.",
    ],
    faq: [
      {
        question: "Can I use my personal bank account for business?",
        answer:
          "Technically yes, but it's strongly discouraged. Mixing accounts makes bookkeeping and taxes significantly harder, can create legal problems for LLCs (undermining the liability shield), and makes it impossible to see your true business profit at a glance.",
      },
      {
        question: "What's the best bank for a small business?",
        answer:
          "It depends on your needs. For zero fees: Relay or Mercury (online). For in-person banking: local credit unions often beat national banks on service and fees. For integrations with accounting software: Chase and Bank of America have strong connections to QuickBooks. Compare monthly fees, minimum balances, and transaction limits before choosing.",
      },
      {
        question: "Do I need a business bank account to accept payments?",
        answer:
          "No — you can accept payments into a personal account, but it's a bad practice. Most payment processors (Stripe, Square, PayPal Business) let you link either type. Linking a dedicated business account keeps your records clean from the start.",
      },
      {
        question: "How long does it take to open a business bank account?",
        answer:
          "In-person at a major bank: 30–60 minutes if you have all documents. Online banks (Mercury, Relay): typically 1–3 business days for approval and account activation. The main delay is usually gathering the required documents beforehand.",
      },
    ],
    relatedSlugs: [
      "what-is-an-ein",
      "how-to-register-a-small-business",
      "how-to-track-business-expenses",
    ],
  },
  {
    slug: "self-employed-tax-deductions",
    title: "Self-employed tax deductions: what small business owners can write off",
    description:
      "A plain-English list of the most common and valuable tax deductions available to self-employed individuals and small business owners.",
    category: "Financial Systems",
    readTime: "6 min read",
    showDisclaimer: true,
    directAnswer:
      "Self-employed individuals can deduct ordinary and necessary business expenses — things like home office space, business mileage, health insurance premiums, software, equipment, professional services, and half of self-employment tax. Keeping records throughout the year makes these deductions straightforward at tax time.",
    problemLabel: "Simple explanation",
    problem:
      "Most self-employed people overpay on taxes because they either don't know what's deductible or don't keep records that support the deduction. The IRS allows deductions for any expense that is 'ordinary and necessary' for your business — but you have to claim them, and you have to document them.",
    solutionLabel: "Common deductions to track",
    solution: [
      {
        step: "Home office deduction",
        detail:
          "If you use a dedicated space in your home exclusively and regularly for business, you can deduct either a simplified rate ($5 per square foot, up to 300 sq ft) or actual expenses (a proportional share of rent/mortgage, utilities, and insurance). The space must be used only for business.",
      },
      {
        step: "Business mileage",
        detail:
          "Every mile driven for business purposes is deductible. The IRS standard mileage rate changes annually (67 cents per mile in 2024). Track every business trip — client visits, supply runs, bank trips. A mileage log app is the easiest way.",
      },
      {
        step: "Health insurance premiums",
        detail:
          "Self-employed individuals can deduct 100% of health, dental, and vision insurance premiums paid for themselves and their families — as long as you're not eligible for coverage through an employer (or spouse's employer).",
      },
      {
        step: "Equipment and technology",
        detail:
          "Computers, phones (business-use percentage), cameras, tools, office furniture, and software subscriptions used for business are deductible. Large equipment may be deducted all at once under Section 179 or depreciated over time.",
      },
      {
        step: "Professional services",
        detail:
          "Accountant fees, legal fees, consulting fees paid for business purposes are fully deductible. So are bank fees, merchant processing fees (Stripe, Square), and professional memberships.",
      },
      {
        step: "Half of self-employment tax",
        detail:
          "Self-employed individuals pay both the employee and employer portions of Social Security and Medicare taxes (15.3% total). The IRS lets you deduct half of that (the employer portion) from your taxable income.",
      },
    ],
    summary: [
      "Track all business expenses throughout the year — deductions require documentation.",
      "Home office, mileage, health insurance, and software are commonly missed.",
      "You can deduct half of your self-employment tax from your income.",
      "Consult a tax professional for situation-specific advice — the savings often outweigh the cost.",
    ],
    faq: [
      {
        question: "Can I deduct my phone as a business expense?",
        answer:
          "Yes, but only the business-use percentage. If you use your phone 60% for business, you can deduct 60% of the monthly bill and 60% of the phone's cost. Keeping a reasonable estimate and being consistent year to year is the key.",
      },
      {
        question: "What records do I need to support a deduction?",
        answer:
          "For most expenses: a receipt or bank statement showing the amount, the vendor name, and the date. For mileage: a log showing the date, destination, business purpose, and miles driven. For home office: a floor plan showing the dedicated space and its square footage.",
      },
      {
        question: "Can I deduct meals as a business expense?",
        answer:
          "Business meals where a business topic is genuinely discussed are 50% deductible. The meal must have a clear business purpose, and you should note who attended and what was discussed. Personal meals are not deductible, even if you ate while working.",
      },
      {
        question: "Do I need to be profitable to claim deductions?",
        answer:
          "No. You can claim deductions even in a loss year. However, if your business shows a loss in more than 3 of 5 consecutive years, the IRS may classify it as a hobby and disallow deductions. Maintaining a genuine profit motive (and documenting it) protects you.",
      },
    ],
    relatedSlugs: [
      "how-to-track-business-expenses",
      "profit-and-loss-basics",
      "quarterly-estimated-taxes-for-small-businesses",
    ],
  },
  {
    slug: "quarterly-estimated-taxes-for-small-businesses",
    title: "Quarterly estimated taxes for small businesses",
    description:
      "How self-employed individuals and small business owners pay taxes during the year — and how to avoid underpayment penalties.",
    category: "Financial Systems",
    readTime: "5 min read",
    showDisclaimer: true,
    directAnswer:
      "If you expect to owe $1,000 or more in federal taxes for the year, the IRS requires you to pay estimated taxes quarterly — in April, June, September, and January. Missing or underpaying these installments results in an underpayment penalty. The simplest approach is to pay 100% of last year's tax bill across four equal payments.",
    problemLabel: "Simple explanation",
    problem:
      "Employees have taxes withheld from every paycheck. Self-employed people don't — so the IRS requires them to estimate and pre-pay taxes four times a year. Most first-year business owners don't know this and get hit with a penalty when they file their annual return.",
    solutionLabel: "How to handle quarterly estimated taxes",
    solution: [
      {
        step: "Understand who needs to pay",
        detail:
          "If you expect to owe $1,000 or more in federal income tax for the year (after credits and withholding), you're required to pay quarterly. This includes self-employed individuals, freelancers, sole proprietors, and business owners who take distributions.",
      },
      {
        step: "Know the four due dates",
        detail:
          "Q1 (Jan–Mar): April 15. Q2 (Apr–May): June 15. Q3 (Jun–Aug): September 15. Q4 (Sep–Dec): January 15 of the following year. Mark these on your calendar and set reminders.",
      },
      {
        step: "Calculate a safe payment amount",
        detail:
          "The safest method: pay 100% of last year's total tax bill in equal quarterly installments (110% if last year's adjusted gross income exceeded $150,000). This is the 'safe harbor' rule — if you hit it, no penalty applies even if you end up owing more.",
      },
      {
        step: "Pay directly at IRS.gov",
        detail:
          "Use IRS Direct Pay (free) or the Electronic Federal Tax Payment System (EFTPS) to make payments online. Keep your confirmation numbers.",
      },
      {
        step: "Set aside money monthly",
        detail:
          "A practical rule: set aside 25–30% of every payment you receive into a separate savings account labeled 'taxes.' This removes the quarterly payment from your operating cash flow and prevents surprise shortfalls.",
      },
    ],
    summary: [
      "Pay quarterly if you expect to owe $1,000+ in federal taxes.",
      "Due dates: April 15, June 15, September 15, January 15.",
      "Safe harbor: pay 100% of last year's tax in equal installments.",
      "Set aside 25–30% of income monthly so the payment isn't a surprise.",
    ],
    faq: [
      {
        question: "What happens if I miss a quarterly tax payment?",
        answer:
          "The IRS charges an underpayment penalty — currently calculated at the federal short-term interest rate plus 3%. It's not a massive amount but it adds up, and it's completely avoidable by making the four payments on time.",
      },
      {
        question: "Do I have to pay state estimated taxes too?",
        answer:
          "In most states, yes. State estimated tax rules mirror the federal system but the thresholds and due dates vary. Check your state's department of revenue website for the specific rules — most states follow the same quarterly schedule.",
      },
      {
        question: "Can I pay more than required to avoid any surprise at filing?",
        answer:
          "Yes, and many business owners do. Overpaying results in a refund when you file your annual return. Some owners prefer to slightly overpay each quarter and treat the refund as a forced savings buffer.",
      },
      {
        question: "How do I know how much I'll owe for the year?",
        answer:
          "If it's your first year in business, estimate based on your projected net profit. Multiply net profit by your expected effective tax rate (roughly 25–30% for most self-employed individuals when you include self-employment tax). A tax professional can give you a more precise estimate.",
      },
    ],
    relatedSlugs: [
      "self-employed-tax-deductions",
      "how-to-track-business-expenses",
      "profit-and-loss-basics",
    ],
  },
  {
    slug: "what-is-a-w9-form",
    title: "What is a W-9 form and when do you need one?",
    description:
      "A plain-English explanation of IRS Form W-9 — what it is, who fills it out, who requests it, and when it's required.",
    category: "Financial Systems",
    readTime: "3 min read",
    showDisclaimer: true,
    directAnswer:
      "A W-9 is an IRS form that collects your name, business name, and taxpayer identification number (SSN or EIN) so the person or company paying you can report that income to the IRS. You fill it out and give it to whoever is paying you — you don't file it with the IRS yourself.",
    problemLabel: "Simple explanation",
    problem:
      "When a business pays a contractor, freelancer, or vendor $600 or more in a year, it's required to report that payment to the IRS using Form 1099. To file the 1099, they need your tax information — that's what the W-9 collects. As a self-employed person, you'll be asked for a W-9 regularly.",
    solutionLabel: "How it works in practice",
    solution: [
      {
        step: "A client or company asks you to fill out a W-9",
        detail:
          "This happens before or shortly after you start doing paid work for them. It's a standard request and a sign they intend to report your payment correctly.",
      },
      {
        step: "You fill in your legal name, business name, and TIN",
        detail:
          "For most self-employed individuals: your legal name, business name (if different), and either your SSN or EIN. Using an EIN instead of your SSN protects your personal information.",
      },
      {
        step: "You give the completed W-9 back to the requester",
        detail:
          "You do not send it to the IRS. The requester keeps it on file and uses the information to prepare your 1099 at year-end.",
      },
      {
        step: "You receive a 1099 if payments exceeded $600",
        detail:
          "In January of the following year, any company that paid you $600+ will send you (and the IRS) a Form 1099-NEC or 1099-MISC. You use this when filing your annual tax return.",
      },
    ],
    summary: [
      "A W-9 collects your tax ID so payers can file a 1099 reporting your income.",
      "You fill it out and give it to the payer — you don't send it to the IRS.",
      "Use your EIN instead of your SSN on W-9s to protect your personal info.",
      "Required when a business plans to pay you $600+ in a calendar year.",
    ],
    faq: [
      {
        question: "Do I have to fill out a W-9?",
        answer:
          "If a legitimate payer requests one before making a business payment, yes. Refusing can result in them withholding a flat 24% backup withholding from your payment. There's no reason to refuse — a W-9 simply allows them to report the income correctly.",
      },
      {
        question: "Should I use my SSN or EIN on a W-9?",
        answer:
          "If you have an EIN, use it. Using your EIN instead of your SSN reduces exposure of your Social Security number, which is valuable for identity protection. Sole proprietors can get a free EIN from IRS.gov in minutes.",
      },
      {
        question: "Is a W-9 the same as a W-2?",
        answer:
          "No. A W-2 is issued by an employer to an employee and reports wages and taxes withheld. A W-9 is filled out by a contractor or vendor — it's not a tax statement, it's a form that collects your information so a 1099 can be prepared later.",
      },
      {
        question: "What if I make a mistake on a W-9?",
        answer:
          "Ask the requester for a new blank form and fill it out again. W-9s are not filed with the IRS directly, so there's no 'correction' process — just submit an accurate one.",
      },
    ],
    relatedSlugs: [
      "what-is-an-ein",
      "self-employed-tax-deductions",
      "quarterly-estimated-taxes-for-small-businesses",
    ],
  },
  {
    slug: "what-is-a-dba",
    title: "What is a DBA (doing business as) and do you need one?",
    description:
      "A clear explanation of trade names, assumed names, and DBAs — what they are, when you need one, and how to file.",
    category: "Business Setup",
    readTime: "4 min read",
    showDisclaimer: true,
    directAnswer:
      "A DBA (Doing Business As) — also called a trade name, fictitious name, or assumed name — lets you operate your business under a name other than your legal name or the name you filed with the state. Example: John Smith, sole proprietor, files a DBA to operate as 'Sunrise Plumbing.' Most states require a DBA filing to use a business name publicly.",
    problemLabel: "Simple explanation",
    problem:
      "Without a DBA, a sole proprietor can only legally operate under their own full legal name. If you want to use a business name on your invoices, website, or signage, a DBA is usually required and often necessary to open a bank account under that name.",
    solutionLabel: "When you need a DBA and how to get one",
    solution: [
      {
        step: "Sole proprietors and general partnerships operating under a trade name",
        detail:
          "If you're John Smith and you want to operate as 'Smith's Auto Repair,' most states require you to file a DBA. Without it, you can't legally advertise or enter contracts under that name.",
      },
      {
        step: "LLCs or corporations operating under a different brand name",
        detail:
          "If your registered LLC is 'Sunrise Digital LLC' but you market under 'Sunrise Studios,' you'll likely need a DBA for the secondary name. Check your state's rules.",
      },
      {
        step: "To open a business bank account under the business name",
        detail:
          "Banks typically require a DBA certificate or state registration to open an account under a name other than your personal name.",
      },
      {
        step: "How to file",
        detail:
          "DBA filings are usually done at the county or state level, depending on your state. Fees range from $10 to $100. Search '[your state] DBA filing' to find the official form. Some states also require a newspaper publication notice.",
      },
    ],
    summary: [
      "A DBA lets you operate under a name other than your legal or registered business name.",
      "Required in most states to use a trade name on invoices, signage, or contracts.",
      "Filed at the county or state level — fees typically $10–$100.",
      "Banks often require a DBA certificate to open an account under the business name.",
    ],
    faq: [
      {
        question: "Does a DBA protect my business name?",
        answer:
          "No. A DBA registers a name for use in commerce but does not give you exclusive rights to it. Only a federal trademark can do that. Two businesses in the same state can hold DBAs for similar names — a trademark is the only way to protect the name nationally.",
      },
      {
        question: "Does an LLC need a DBA?",
        answer:
          "Only if it operates under a name different from its registered LLC name. If your LLC is filed as 'Riverside Consulting LLC' and you market exclusively as that, no DBA is needed. If you run a second brand or use a shortened version of the name publicly, a DBA may be required.",
      },
      {
        question: "How long does a DBA last?",
        answer:
          "DBA registrations typically expire and must be renewed every 5 years, depending on the state. Some states require renewal every 1–3 years. Check with your county clerk or state business agency for the renewal schedule.",
      },
      {
        question: "Can I have multiple DBAs?",
        answer:
          "Yes. A single business entity can file multiple DBAs to operate under different brand names. This is common for businesses running multiple service lines or targeting different customer segments under separate names.",
      },
    ],
    relatedSlugs: [
      "how-to-register-a-small-business",
      "required-startup-documents",
      "llc-vs-sole-proprietorship",
    ],
  },
  {
    slug: "how-to-write-a-business-invoice",
    title: "How to write a business invoice that gets paid faster",
    description:
      "What to include on a professional invoice, how to structure it, and practical steps that reduce the time between sending and getting paid.",
    category: "Sales & Clients",
    readTime: "5 min read",
    showDisclaimer: false,
    directAnswer:
      "A professional business invoice needs: your business name and contact info, the client's name and address, a unique invoice number, the invoice date and payment due date, an itemized list of services or products with quantities and rates, the total amount due, and accepted payment methods. Simple, clear, and sent the day work is delivered.",
    problemLabel: "Simple explanation",
    problem:
      "The longer you wait to invoice, the longer you wait to get paid — and sometimes payment never comes at all. A professional invoice sent immediately after delivery, with clear terms and a specific due date, gets paid significantly faster than a vague request sent 'whenever you get to it.'",
    solutionLabel: "What to include on every invoice",
    solution: [
      {
        step: "Your business name, logo, and contact information",
        detail:
          "Name, address (or city/state at minimum), email, and phone. Make it easy for the client to reach you with questions without having to dig through old emails.",
      },
      {
        step: "Client name and billing address",
        detail:
          "Use the exact legal name of the person or company you're billing. If they need to process it through accounts payable, the name must match their records.",
      },
      {
        step: "Unique invoice number and date",
        detail:
          "Invoice numbers create a paper trail for both parties. A simple sequential system (INV-001, INV-002) works fine. Include both the invoice date and the payment due date — 'Net 15' or 'Net 30' in addition to an explicit date.",
      },
      {
        step: "Itemized list of services or products",
        detail:
          "Description, quantity, unit rate, and line total for each item. Avoid vague descriptions like 'services rendered' — specificity builds trust and reduces back-and-forth.",
      },
      {
        step: "Total amount due and accepted payment methods",
        detail:
          "Show subtotal, any applicable taxes, and the final total clearly. List how you accept payment: bank transfer (include routing/account number or use a payment link), check, Stripe, PayPal, etc.",
      },
      {
        step: "Late payment policy",
        detail:
          "Include a simple statement: 'A 1.5% monthly fee applies to invoices unpaid after 30 days.' You don't have to enforce it every time — but having it written creates leverage.",
      },
    ],
    summary: [
      "Invoice the day work is delivered — every day you wait adds days to payment.",
      "Include a specific due date, not just 'Net 30.'",
      "Itemize clearly — vague descriptions create questions that delay payment.",
      "Add your payment methods prominently so clients don't have to ask.",
      "A stated late fee policy speeds up payments even if you rarely enforce it.",
    ],
    faq: [
      {
        question: "What payment terms should I use on an invoice?",
        answer:
          "For most small service businesses, Net 15 (payment due 15 days after invoice date) is reasonable. Net 30 is standard for larger contracts. For new clients or high-value projects, consider requiring a 50% deposit upfront, with the remainder due on delivery.",
      },
      {
        question: "Do I need invoicing software?",
        answer:
          "No. A Word doc, Google Doc, or spreadsheet formatted properly works perfectly. However, tools like Wave (free), QuickBooks, or FreshBooks automate reminders, track payment status, and make it easy to send professional PDFs — worth considering once you're invoicing regularly.",
      },
      {
        question: "What should I do if a client doesn't pay an invoice?",
        answer:
          "Send a polite reminder 1–2 days before the due date, then again on the due date. After 7 days past due, send a firmer follow-up referencing the invoice number and late fee policy. After 30 days, consider a collections call or small claims court for smaller amounts.",
      },
      {
        question: "Can I charge sales tax on a business invoice?",
        answer:
          "It depends on what you're selling and where. Tangible products are taxable in most states. Services vary widely — some states tax services, most don't. Check your state's sales tax rules for your specific service type, and register with your state if you're required to collect.",
      },
    ],
    relatedSlugs: [
      "basic-client-follow-up-system-to-avoid-lost-sales",
      "how-to-price-your-services",
      "how-to-track-business-expenses",
    ],
  },
  {
    slug: "business-mileage-deduction",
    title: "Business mileage deduction: how to track and claim it",
    description:
      "How the IRS business mileage deduction works, what counts as a deductible trip, and the simplest way to keep a compliant mileage log.",
    category: "Financial Systems",
    readTime: "4 min read",
    showDisclaimer: true,
    directAnswer:
      "The IRS allows self-employed individuals and small business owners to deduct business miles driven at the standard mileage rate (67 cents per mile for 2024). You can also use the actual expense method (tracking real fuel, insurance, and depreciation costs). Most small businesses use the standard rate — it's simpler and often yields a higher deduction.",
    problemLabel: "Simple explanation",
    problem:
      "Business mileage is one of the most commonly missed small business deductions. Every trip to a client's office, supply store, bank, or job site is potentially deductible — but only if you document it. The IRS requires a contemporaneous mileage log, meaning records kept at or near the time of each trip, not reconstructed months later.",
    solutionLabel: "How to track and claim business mileage",
    solution: [
      {
        step: "Know what qualifies as a business mile",
        detail:
          "Driving to a client meeting, job site, bank for a business deposit, office supply store, or business networking event qualifies. Commuting from home to a regular office does not. If your home office is your principal place of business, then driving from home to any business destination qualifies.",
      },
      {
        step: "Keep a mileage log",
        detail:
          "For each trip record: the date, starting and ending location, business purpose, and miles driven. A small notebook works, but a mileage tracking app (MileIQ, Everlance, or Google Maps history) is much easier and creates an audit-ready log automatically.",
      },
      {
        step: "Calculate your deduction",
        detail:
          "Multiply total business miles by the IRS standard rate for that year. For 2024: total business miles × $0.67. Example: 3,000 business miles × $0.67 = $2,010 deduction. Claim this on Schedule C (for sole proprietors) or your business return.",
      },
      {
        step: "Track total odometer readings at year-start and year-end",
        detail:
          "The IRS may ask for your total vehicle mileage for the year to verify the business percentage. Note your odometer at January 1 and December 31.",
      },
    ],
    summary: [
      "The 2024 IRS standard mileage rate is 67 cents per business mile.",
      "Record date, destination, purpose, and miles for every business trip.",
      "Commuting to a regular office doesn't count — client and errand trips do.",
      "A mileage app creates an automatic, audit-ready log with minimal effort.",
    ],
    faq: [
      {
        question: "Can I deduct mileage if I drive a personal vehicle for business?",
        answer:
          "Yes. The standard mileage rate is specifically designed for personal vehicles used for business. You don't need a dedicated business vehicle to claim the deduction — just a reliable mileage log separating business and personal trips.",
      },
      {
        question: "What's the difference between the standard mileage rate and actual expenses?",
        answer:
          "Standard mileage rate: multiply business miles by the IRS rate ($0.67/mile in 2024). Simple, and covers gas, wear, depreciation, and insurance proportionally. Actual expenses: track and deduct the real cost of gas, insurance, repairs, and depreciation, then multiply by your business-use percentage. Actual expenses can yield a higher deduction for high-cost vehicles but requires more recordkeeping.",
      },
      {
        question: "What counts as a deductible business purpose?",
        answer:
          "Travel to meet clients, deliver goods, pick up supplies, make business bank deposits, attend business-related meetings or training, and travel to temporary work sites. The trip must have a genuine business purpose — personal errands combined with a small business detour are only partially deductible.",
      },
      {
        question: "How far back can the IRS audit mileage records?",
        answer:
          "The standard IRS audit window is 3 years from when you file. Keep all mileage logs, receipts, and odometer records for at least 3 years — 6 years if there's any chance of underreporting income by more than 25%.",
      },
    ],
    relatedSlugs: [
      "self-employed-tax-deductions",
      "how-to-track-business-expenses",
      "quarterly-estimated-taxes-for-small-businesses",
    ],
  },
];

export function findArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

type NextStep = { label: string; href: string; description: string };

const CATEGORY_NEXT_STEP: Record<string, NextStep> = {
  EIN: {
    label: "EIN Preparation Checklist",
    href: "/docs/ein-application-preparation-checklist",
    description:
      "Have everything ready before you apply — names, addresses, responsible party, and entity details.",
  },
  ITIN: {
    label: "ITIN Application Checklist",
    href: "/docs/itin-application-checklist",
    description:
      "Gather the documents and information you'll need for the W-7 application.",
  },
  "Business Setup": {
    label: "Basic compliance checklist",
    href: "/docs/basic-compliance-checklist",
    description:
      "Lock in the recurring obligations that keep your business in good standing.",
  },
  "Financial Systems": {
    label: "Open the Business Expense Tracker",
    href: "/tools/expenses",
    description:
      "Put what you just learned into practice and start tracking expenses in your browser.",
  },
  "Money & Profit": {
    label: "Open the Monthly Profit Estimator",
    href: "/tools/budget",
    description:
      "See how much profit you actually keep each month after expenses.",
  },
  "Sales & Clients": {
    label: "Open the Get Paid Invoice System",
    href: "/tools/invoice",
    description:
      "Send a clean, professional invoice in minutes so clients pay you faster.",
  },
  "Marketing & Growth": {
    label: "How to get your first 10 customers",
    href: "/docs/how-to-get-your-first-10-customers",
    description:
      "Start at the beginning of the marketing path: a no-budget plan to land your first paying customers.",
  },
};

export function getNextStep(article: Article): NextStep | undefined {
  if (article.nextStep) {
    return { description: "", ...article.nextStep };
  }
  return CATEGORY_NEXT_STEP[article.category];
}

export function articlesBySlugs(slugs: string[] = []): Article[] {
  return slugs
    .map((s) => findArticle(s))
    .filter((a): a is Article => Boolean(a));
}

export function articlesByCategory(): Record<string, Article[]> {
  const map: Record<string, Article[]> = {};
  for (const a of articles) {
    if (!map[a.category]) map[a.category] = [];
    map[a.category].push(a);
  }
  return map;
}
