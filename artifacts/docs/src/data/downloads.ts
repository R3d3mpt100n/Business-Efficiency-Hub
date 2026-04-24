import { jsPDF } from "jspdf";

export function downloadPdf(filename: string, content: string) {
  const doc = new jsPDF({ unit: "pt", format: "letter" });

  const marginLeft = 56;
  const marginTop = 72;
  const pageWidth = doc.internal.pageSize.getWidth();
  const maxWidth = pageWidth - marginLeft * 2;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.setTextColor(180, 150, 70);
  doc.text("LEDGELY", marginLeft, marginTop);

  doc.setDrawColor(220, 210, 190);
  doc.setLineWidth(0.5);
  doc.line(marginLeft, marginTop + 8, pageWidth - marginLeft, marginTop + 8);

  let y = marginTop + 26;

  const lines = content.split("\n");
  for (const raw of lines) {
    if (y > doc.internal.pageSize.getHeight() - 56) {
      doc.addPage();
      y = 56;
    }

    const line = raw.trimEnd();

    if (line === "") {
      y += 8;
      continue;
    }

    const isHeading =
      /^[A-Z0-9 &/()—–-]{4,}$/.test(line) && !line.startsWith("[ ") && !line.startsWith("- ") && !line.match(/^\d+\./);
    const isSectionLabel = line.startsWith("===") || line.startsWith("---");

    if (isSectionLabel) {
      y += 4;
      continue;
    }

    if (isHeading) {
      doc.setFont("helvetica", "bold");
      doc.setFontSize(10);
      doc.setTextColor(30, 25, 20);
      const wrapped = doc.splitTextToSize(line, maxWidth);
      doc.text(wrapped, marginLeft, y);
      y += wrapped.length * 14 + 6;
    } else {
      doc.setFont("helvetica", "normal");
      doc.setFontSize(9.5);
      doc.setTextColor(60, 55, 50);
      const wrapped = doc.splitTextToSize(line, maxWidth);
      doc.text(wrapped, marginLeft, y);
      y += wrapped.length * 13;
    }
  }

  const pageCount = doc.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.5);
    doc.setTextColor(180, 175, 168);
    doc.text(
      `Ledgely · ledgely.com · Page ${i} of ${pageCount}`,
      marginLeft,
      doc.internal.pageSize.getHeight() - 28
    );
  }

  doc.save(filename);
}

export const BUSINESS_STARTER_FILES: {
  name: string;
  label: string;
  description: string;
  tag: string;
  build: () => string;
}[] = [
  {
    name: "ledgely-startup-checklist.pdf",
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
    name: "ledgely-ein-prep-checklist.pdf",
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
    name: "ledgely-itin-prep-checklist.pdf",
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
    name: "ledgely-compliance-calendar.pdf",
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
    name: "ledgely-setup-plan-example.pdf",
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
