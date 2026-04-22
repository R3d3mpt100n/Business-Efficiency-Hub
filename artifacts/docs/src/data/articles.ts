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
