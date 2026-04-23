export function downloadText(filename: string, content: string) {
  const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export const BUSINESS_STARTER_FILES: {
  name: string;
  label: string;
  description: string;
  tag: string;
  build: () => string;
}[] = [
  {
    name: "ledgely-startup-checklist.txt",
    label: "Startup Checklist",
    tag: "Master checklist",
    description:
      "The full ordered list of every step from idea to opened bank account.",
    build: () => `LEDGELY — STARTUP CHECKLIST (MASTER LIST)

1. Decide business structure (Sole Prop / LLC / Partnership)
2. Choose business name and verify availability
3. Decide tax ID path (EIN or ITIN)
4. Apply for the chosen tax ID
5. File formation documents with your state
6. Receive and store official approval documents
7. Get an operating agreement (even for single-member LLC)
8. Open a dedicated business bank account
9. Set up a basic bookkeeping system
10. Confirm any state/local compliance requirements
`,
  },
  {
    name: "ledgely-ein-prep-checklist.txt",
    label: "EIN Preparation Checklist",
    tag: "Questionnaire",
    description:
      "Everything you need before applying for an EIN with the IRS.",
    build: () => `LEDGELY — EIN PREPARATION CHECKLIST

[ ] Legal name of the entity (matches formation docs)
[ ] Trade name / DBA (if any)
[ ] Mailing address (US)
[ ] Responsible party name
[ ] Responsible party SSN or ITIN
[ ] Entity type (Sole Prop / LLC / Partnership / Corp)
[ ] Reason for applying (Started new business / Banking purposes / etc.)
[ ] Date business started
[ ] Closing month of accounting year (usually December)
[ ] Highest expected number of employees in next 12 months
[ ] Principal activity of the business
`,
  },
  {
    name: "ledgely-itin-prep-checklist.txt",
    label: "ITIN Preparation Checklist",
    tag: "Questionnaire",
    description:
      "What to gather before applying for an ITIN with Form W-7.",
    build: () => `LEDGELY — ITIN PREPARATION CHECKLIST

[ ] Reason for applying (selected on Form W-7)
[ ] Valid passport OR two acceptable supporting documents
[ ] Foreign address
[ ] US mailing address (if different)
[ ] Date and country of birth
[ ] Country of citizenship
[ ] Foreign tax ID number (if applicable)
[ ] Visa information (if applicable)
[ ] Federal tax return to attach (unless exception applies)
[ ] Plan for document submission (CAA / IRS office / mail)
`,
  },
  {
    name: "ledgely-compliance-calendar.txt",
    label: "Compliance Calendar",
    tag: "Template",
    description:
      "A simple yearly calendar of items most small businesses must track.",
    build: () => `LEDGELY — COMPLIANCE CALENDAR TEMPLATE

JANUARY
- Issue 1099s to contractors (if applicable)
- Reconcile prior-year bookkeeping

MARCH / APRIL
- File federal tax return (or extension)
- File state tax return (or extension)

QUARTERLY (Apr / Jun / Sep / Jan)
- Pay estimated taxes if required

ANNUALLY (varies by state)
- File state annual report / franchise tax
- Renew local business license

ONGOING (monthly)
- Reconcile bank account
- Review profit/loss
- File and pay sales tax (if applicable)
`,
  },
  {
    name: "ledgely-setup-plan-example.txt",
    label: "Filled Setup Plan Example",
    tag: "Filled example",
    description:
      "A completed setup plan for a sample LLC so you know exactly what yours should look like.",
    build: () => `LEDGELY — FILLED SETUP PLAN EXAMPLE

Business structure:   Single-Member LLC
Business name:        Apex Home Services LLC
Tax ID path:          EIN (US person)
State of formation:   Texas
Formation date:       March 2025

NEXT 3 ACTIONS
1. File Articles of Organization with the Texas Secretary of State.
2. Apply for EIN through IRS online (takes 15 minutes, instant confirmation).
3. Open a business checking account at a bank that accepts LLCs — bring your EIN letter and Articles.

COMMON MISTAKES TO AVOID
- Do not apply for an EIN before the LLC is officially formed.
- Do not use a personal bank account for any business income.
- Do not skip the Operating Agreement — even for a single-member LLC.
`,
  },
];
