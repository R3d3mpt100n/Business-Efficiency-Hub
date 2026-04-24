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
    build: () => `LEDGELY — BUSINESS STARTUP CHECKLIST
Full execution guide: from idea to open bank account


REAL-WORLD EXAMPLE — WHAT A COMPLETED SETUP LOOKS LIKE

Name:          Apex Home Services LLC
Structure:     Single-Member LLC
State:         Texas
EIN:           Obtained at IRS.gov — took 15 minutes, instant confirmation
Bank:          Relay Business Checking — opened same week as EIN
Bookkeeping:   Wave (free) — connected to bank account day one
Status:        Ready to invoice and operate legally

Use this as your target. The checklist below is the exact path to get there.


PHASE 1 — DECIDE (Days 1 to 3)

STEP 1 — CHOOSE YOUR BUSINESS STRUCTURE

Sole Proprietorship
[ ] No state filing required — simplest to start
[ ] No legal separation between you and the business
[ ] Best for testing an idea with minimal cost or commitment
[ ] Downside: personal assets exposed to business debts and lawsuits
[ ] Use EIN (not SSN) for banking even as a sole prop

Single-Member LLC (recommended for most small business owners)
[ ] Provides liability separation between personal and business assets
[ ] State filing required ($50–$500 depending on state)
[ ] Requires EIN and Operating Agreement
[ ] Best for service businesses, contractors, and online businesses

Multi-Member LLC
[ ] Two or more owners — requires Operating Agreement with ownership %,
    profit split, decision authority, and exit terms for each owner
[ ] All owners must agree on formation state before filing

S-Corporation
[ ] Advanced structure — only choose after consulting a CPA
[ ] Can reduce self-employment taxes when net profit exceeds $60,000/year
[ ] Requires payroll setup, corporate formalities, additional filings

Structure chosen: ______________________________

STEP 2 — CHOOSE AND VERIFY BUSINESS NAME
[ ] Search state Secretary of State database for exact name availability
[ ] Search phonetically similar names (e.g. "Apex" and "Apeks")
[ ] Check .com domain availability at Namecheap or GoDaddy
[ ] Search USPTO TESS (tess.uspto.gov) for federal trademark conflicts
[ ] Confirm name works on invoices, cards, and signage

Name: ______________________________
Domain secured: ______________________________

STEP 3 — DECIDE YOUR TAX ID PATH
[ ] US citizen or permanent resident → Apply for EIN (free, 15 min, IRS.gov)
[ ] Non-US person without SSN → Apply for ITIN using Form W-7
[ ] Already have SSN → Still get EIN — never use SSN for business banking

Tax ID path: ______________________________


PHASE 2 — REGISTER (Days 3 to 10)

STEP 4 — APPLY FOR EIN (at IRS.gov — completely free)
[ ] Search "Apply for EIN Online" at irs.gov
[ ] Select entity type matching your business structure
[ ] Enter responsible party name and SSN or ITIN
[ ] Enter business name and address
[ ] Submit — your EIN appears immediately on screen
[ ] Print or screenshot the confirmation page immediately
[ ] Save as "EIN-Confirmation.pdf" in your Formation folder
[ ] Form CP 575 arrives by mail in 4–6 weeks — keep it permanently

STEP 5 — FILE STATE FORMATION DOCUMENTS (LLC only)
[ ] Prepare Articles of Organization
    Required: business name, address, registered agent, organizer name
[ ] File with your state's Secretary of State
[ ] Pay filing fee (look up current fee at state website)
[ ] Wait for state approval (1–10 business days depending on state)
[ ] Save official approval document to Formation folder immediately

STEP 6 — DRAFT OPERATING AGREEMENT
Required even if you are the only owner. Banks and investors may ask for it.
[ ] Owner names and ownership percentages
[ ] Management structure (member-managed or manager-managed)
[ ] Capital contributions of each member
[ ] Profit and loss distribution method
[ ] Process for adding or removing members
[ ] Dissolution process
[ ] Sign and date — store in Formation & Legal folder

Documents you will have after Phase 2:
  1. Articles of Organization (state-approved)
  2. EIN confirmation (IRS printout + CP 575 by mail)
  3. Signed Operating Agreement
  4. Any required state or local licenses


PHASE 3 — OPEN ACCOUNTS (Days 7 to 14)

STEP 7 — OPEN BUSINESS BANK ACCOUNT
Bring to the bank:
[ ] EIN letter or IRS.gov confirmation printout
[ ] State formation approval document
[ ] Government-issued photo ID
[ ] Initial deposit ($25–$100 minimum at most banks)

Recommended banks:
  Relay:    Built for small business. No fees. Excellent cash flow tools.
  Mercury:  Online only. No fees. Best for digital or tech businesses.
  Chase:    Strong integrations. Branches nationwide. Small monthly fee.
  Bank of America: Good for in-person banking needs.

After opening:
[ ] Set up online banking and mobile app
[ ] Request business debit card
[ ] Set transaction alerts for all activity
[ ] Rule: Never use a personal account for business income — not even once

STEP 8 — SET UP PAYMENT PROCESSING
[ ] Create Stripe, Square, or PayPal Business account
[ ] Connect and verify your business bank account
[ ] Send yourself a $1 test transaction — confirm deposit arrives in bank
[ ] Set up your payment link or invoicing inside the platform

STEP 9 — SET UP BOOKKEEPING
[ ] Choose platform: Wave (free) / Google Sheets / QuickBooks / FreshBooks
[ ] Create standard expense categories:
    Revenue / Contractor Costs / Software & Subscriptions /
    Marketing / Supplies / Professional Services /
    Insurance / Travel / Phone & Internet
[ ] Connect bank account to bookkeeping software
[ ] Record opening bank balance as first entry


PHASE 4 — COMPLIANCE (Days 14 to 21)

STEP 10 — SET UP COMPLIANCE CALENDAR
[ ] Set quarterly estimated tax reminders:
    April 15 / June 15 / September 15 / January 15
[ ] Find your state annual report filing date and add to calendar
[ ] Find your business license renewal date and add to calendar
[ ] Find sales tax filing frequency if applicable


INTERPRETATION GUIDE

If you finish Phases 1 and 2 but skip Phase 3:
  You are registered but cannot legally operate or accept payment.
  Do not invoice until you have a business bank account.

If you open a bank account before getting your EIN:
  Most banks will turn you away. Get the EIN first, then open the account.

If you skip the Operating Agreement:
  Some banks will reject your account application.
  You have no documented protection if a dispute arises with a partner.

If you miss quarterly estimated taxes in year one:
  You may owe a penalty at tax time. Pay the first quarterly payment
  as soon as your net profit exceeds approximately $4,000.


COMMON MISTAKES TO AVOID

Applying for EIN before LLC state filing is approved
  Fix: Wait for state confirmation email or letter before going to IRS.gov

Using personal bank account for business income
  Fix: Open a business account before accepting your first payment

Forgetting to save the EIN page before closing the browser
  Fix: Print or screenshot the IRS confirmation page immediately

Skipping the Operating Agreement
  Fix: Draft one within the first 30 days — even a one-page version counts

Losing the CP 575 letter
  Fix: Scan and store digitally in Formation folder the day it arrives

Missing first quarterly estimated tax payment
  Fix: Set all four reminders in your phone calendar today


IMPROVEMENT LOOP — REVIEW AT 30, 60, AND 90 DAYS

30-day check:
[ ] Is bookkeeping set up and current?
[ ] Have you received and saved your CP 575 EIN letter?
[ ] Is payment processing tested and confirmed working?

60-day check:
[ ] Have you reconciled your first month of bank transactions?
[ ] Are any licenses expiring in the next 90 days?
[ ] Is your Operating Agreement signed and stored?

90-day check:
[ ] Have you paid your first quarterly estimated tax (if applicable)?
[ ] Is your profit margin above 20 percent?
[ ] Do you have a separate savings account for tax set-asides?

After 90 days of clean operation, your business foundation is solid.
Every system builds on this — Financial Control, Client & Invoice come next.
`,
  },
  {
    name: "ledgely-ein-prep-checklist.pdf",
    label: "EIN Preparation Checklist",
    tag: "Questionnaire",
    description:
      "Everything you need before applying for an EIN with the IRS.",
    build: () => `LEDGELY — EIN PREPARATION CHECKLIST
Full execution guide: apply for your EIN in 15 minutes


WHAT IS AN EIN AND WHY YOU NEED IT

An EIN (Employer Identification Number) is a free, 9-digit federal tax ID
issued by the IRS. Format: XX-XXXXXXX  Example: 45-1234567

You need it to:
  - Open a business bank account (required by all major banks)
  - File federal and state business taxes
  - Pay contractors and issue 1099s
  - Set up Stripe, PayPal, Square, or other payment processors
  - Complete Form W-9 when a client requests your tax ID

It is completely free. Apply only at IRS.gov. Never pay a third party.
Third-party "EIN services" charge $50–$150 for something that takes 15 free minutes.


REAL-WORLD EXAMPLE — COMPLETED EIN APPLICATION

Business name:       Apex Home Services LLC
Entity type:         Limited Liability Company (LLC)
Responsible party:   Jordan Smith (sole owner)
SSN used:            Jordan's personal SSN (not shared publicly)
Business address:    1234 Business Blvd, Austin, TX 78701
Reason for applying: Started new business
Date started:        March 1, 2025
Principal activity:  Landscaping and lawn care services
Employees next 12 months: 0
Accounting year end: December
EIN assigned:        45-1234567
Time to complete:    12 minutes

Use this as reference when filling in your own information below.


GATHER THIS INFORMATION BEFORE YOU OPEN THE IRS WEBSITE

Entity information:
[ ] Legal business name (exactly as it appears on formation documents)
    Name: ______________________________
[ ] Trade name or DBA if operating under a different name
    DBA: ______________________________ (leave blank if none)
[ ] Business structure
    [ ] Sole Proprietorship    [ ] Single-Member LLC    [ ] Multi-Member LLC
    [ ] S-Corporation          [ ] C-Corporation        [ ] Partnership
[ ] Date business officially started or will start
    Date: ______________________________
[ ] Closing month of accounting year (almost always December)
    Month: ______________________________
[ ] Principal business activity
    Examples: consulting, landscaping, retail clothing, software development
    Activity: ______________________________
[ ] Reason for applying
    [ ] Started new business    [ ] Banking purposes
    [ ] Hired employees         [ ] Other: ______________________________

Business address:
[ ] Mailing address (must be a US address)
    Address: ______________________________
[ ] Physical address if different from mailing
    Address: ______________________________
[ ] Business phone number
    Phone: ______________________________

Responsible party (person who controls and manages the entity):
[ ] Full legal name
    Name: ______________________________
[ ] Social Security Number (SSN) or ITIN
    Note: This is required by the IRS for identity verification.
    It is not public information — it is used only for IRS records.

Employees:
[ ] Highest expected number of employees in the next 12 months
    If you have no employees, enter 0 — this does not affect eligibility.
    Expected employees: ______________________________


HOW TO APPLY — STEP BY STEP

1. Open: irs.gov
   Search "Apply for EIN Online" — click the IRS.gov result
2. Click "Apply Online Now" on the EIN Online page
3. Select your entity type (LLC, Sole Proprietor, etc.)
4. Select your reason for applying (Started new business is most common)
5. Enter responsible party information (your full name and SSN or ITIN)
6. Enter business name and address
7. Answer questions about activity and expected employees
8. Review your answers on the summary page
9. Submit
10. Your EIN appears immediately on the confirmation screen
    Example message: "Your EIN has been successfully assigned. Your EIN is: 45-1234567"
11. Print the page OR take a screenshot BEFORE closing the browser
12. Save as "EIN-Confirmation.pdf" to your Formation & Legal folder

Form CP 575 will arrive by mail in 4 to 6 weeks. Keep it permanently.
If you need to verify your EIN before CP 575 arrives, use your printed confirmation.


WHAT TO DO IMMEDIATELY AFTER RECEIVING YOUR EIN

[ ] Store confirmation in Formation & Legal folder as "EIN-Confirmation.pdf"
[ ] Write EIN on a separate note stored in the same folder
[ ] Enter EIN into your bookkeeping system
[ ] Open business bank account (bring EIN confirmation)
[ ] When CP 575 arrives: scan and save to same folder immediately

Providing EIN to others:
[ ] When a bank asks: provide EIN on account opening documents
[ ] When a client asks for Form W-9: enter EIN in box 1 (not your SSN)
[ ] When hiring a contractor: collect their EIN or SSN via Form W-9
[ ] Never provide your personal SSN for any business transaction


INTERPRETATION GUIDE

If the IRS site shows an error after submission:
  Do not apply again. Close the browser and call the IRS Business &
  Specialty Tax Line: 1-800-829-4933 (7am–7pm local time, Mon–Fri)
  They can issue your EIN by phone.

If you cannot find your EIN after applying:
  Check your email for a confirmation (if you entered one).
  Check the IRS online portal if you have an IRS account.
  Call the IRS Business & Specialty Tax Line.

If you applied as the wrong entity type:
  You cannot change an EIN once issued.
  Apply for a new EIN as the correct entity type.
  The old one should be closed by calling the IRS.


COMMON MISTAKES TO AVOID

Applying before LLC state filing is approved
  The business must legally exist before you get its federal tax ID.
  Wait for your state's confirmation email or letter.

Selecting Sole Proprietor when you formed an LLC
  These are different entity types. Select LLC — the IRS distinguishes them.

Closing the browser before saving the EIN
  The confirmation page is shown once. Leaving without saving means
  you must call the IRS to retrieve your EIN. Take a screenshot now.

Entering the wrong entity as responsible party
  The responsible party must be a person who controls the entity —
  not another business, not your spouse unless they are an owner.

Using a third-party EIN service
  These sites charge $50–$150 to submit the same free IRS form.
  The IRS application takes 12–15 minutes and is completely free.

Losing CP 575
  This is your official federal confirmation. Banks and accountants
  may ask for it. Scan it immediately when it arrives.


IMPROVEMENT LOOP

After getting your EIN:
[ ] Within 24 hours: open business bank account
[ ] Within 7 days: set up payment processing
[ ] Within 30 days: verify CP 575 received by mail and stored
[ ] At 90 days: confirm EIN is entered correctly in all systems —
    bookkeeping software, Stripe, payment processor, and tax software
`,
  },
  {
    name: "ledgely-itin-prep-checklist.pdf",
    label: "ITIN Preparation Checklist",
    tag: "Questionnaire",
    description:
      "What to gather before applying for an ITIN with Form W-7.",
    build: () => `LEDGELY — ITIN PREPARATION CHECKLIST
Full execution guide: apply for your ITIN using Form W-7


WHAT IS AN ITIN AND WHO NEEDS IT

An ITIN (Individual Taxpayer Identification Number) is a 9-digit tax ID
issued by the IRS to individuals who need to file US taxes but are not
eligible for a Social Security Number. Format: 9XX-XX-XXXX

You need an ITIN if:
  - You are a non-US citizen or resident alien operating a business in the US
  - You do not have and are not eligible for a Social Security Number
  - You need to file a US federal tax return

Once you have an ITIN, you can use it to apply for a business EIN,
which is required to open a US business bank account.

Note: An ITIN is for tax purposes only. It does not authorize work,
provide immigration status, or qualify you for Social Security benefits.


REAL-WORLD EXAMPLE — COMPLETED ITIN SCENARIO

Business owner:     Maria Costa, Brazilian citizen living in the US on a visa
Status:             Not eligible for SSN
Goal:               Obtain ITIN to file taxes and then get EIN for her LLC
Documents used:     Valid passport (most straightforward option)
Submission method:  Certified Acceptance Agent (CAA) — avoids mailing originals
Processing time:    7 weeks
ITIN received:      912-34-5678
Next step:          Applied for EIN using ITIN — opened business bank account


GATHER THIS BEFORE STARTING FORM W-7

Personal information:
[ ] Full legal name (first, middle, last)
    Name: ______________________________
[ ] Date of birth
    DOB: ______________________________
[ ] Country of birth
    Country: ______________________________
[ ] Country of citizenship
    Country: ______________________________
[ ] Foreign tax ID number (if your country issues one)
    Foreign ID: ______________________________
[ ] Visa type and number if you have a US visa
    Visa type: ______________________________
[ ] Visa expiration date
    Expires: ______________________________

Addresses:
[ ] Permanent foreign address (outside the US)
    Address: ______________________________
[ ] US mailing address (if different — where IRS will send your ITIN)
    Address: ______________________________

Reason for applying (select your reason on Form W-7):
[ ] Non-resident alien required to get ITIN to claim tax treaty benefit
[ ] Non-resident alien filing a US federal tax return
[ ] US resident alien filing a US federal tax return
[ ] Dependent of a US citizen or resident alien
[ ] Spouse of a US citizen or resident alien
[ ] Non-resident alien student, professor, or researcher
[ ] Dependent or spouse of a non-resident alien visa holder
[ ] Other: ______________________________


IDENTITY DOCUMENTS — WHAT IS ACCEPTED

Option 1: Passport (recommended — accepts as both identity and foreign status)
[ ] Valid passport — original OR certified copy through a CAA

Option 2: Two acceptable documents (if no passport available)
  Primary document (establishes foreign status):
  [ ] National identification card
  [ ] Foreign voter registration card
  [ ] US Citizenship and Immigration Services (USCIS) photo ID

  Secondary document (establishes identity):
  [ ] US driver's license
  [ ] Foreign driver's license
  [ ] US military ID card
  [ ] Foreign military ID

Note: Documents must be original or certified copies. Plain photocopies
are not accepted. Using a CAA avoids mailing original documents to the IRS.


HOW TO SUBMIT FORM W-7

OPTION 1: CERTIFIED ACCEPTANCE AGENT (CAA) — Recommended
  A CAA is an IRS-authorized individual who verifies your documents
  and submits Form W-7 on your behalf.
  Advantages: No need to mail original identity documents.
  How to find one: irs.gov → search "Acceptance Agent Program"
  Cost: $50–$200 depending on the agent

OPTION 2: IRS TAXPAYER ASSISTANCE CENTER
  Walk in with originals — they verify and return documents same day.
  Find locations: irs.gov → "Contact Your Local IRS Office"

OPTION 3: MAIL TO IRS
  Mail original identity documents with completed Form W-7 and tax return.
  Address: Internal Revenue Service, ITIN Operation, Austin, TX 73301-0057
  Risk: Original documents are held by IRS for 60+ days


WHAT ATTACHES TO FORM W-7

Most applicants must attach a completed federal tax return.
Exceptions exist — check the Form W-7 instructions at irs.gov.

If attaching a tax return:
[ ] Complete Form 1040-NR (non-resident) or Form 1040 (resident)
[ ] Write "Applied For" in the SSN field on the tax return
[ ] Attach tax return to your Form W-7 before submitting


TIMELINE AND WHAT TO EXPECT

Processing time: 7 to 11 weeks from submission
When you receive your ITIN: stored in IRS records, mailed to you by letter

After receiving ITIN:
[ ] Apply for EIN at IRS.gov using your ITIN as the responsible party ID
[ ] File any past-due tax returns using your new ITIN
[ ] Open business bank account using your EIN (obtained with ITIN)


INTERPRETATION GUIDE

If your application is rejected:
  You will receive a letter explaining why. Common reasons:
  - Incomplete or unsigned Form W-7
  - Documents not certified or expired
  - No tax return attached (when required)
  Correct the issue and resubmit. Processing restarts from the beginning.

If you have an expiring ITIN:
  ITINs issued before 2013 and unused for 3+ consecutive years expire.
  Renew using Form W-7 with box h checked ("Renew existing ITIN").


COMMON MISTAKES TO AVOID

Submitting without a federal tax return attached
  Most applicants must include a tax return with Form W-7.
  Check the W-7 instructions — an exception may apply to your situation.

Sending uncertified document copies
  Plain photocopies are not accepted. Use a CAA or go in person.

Mailing original passport and losing it
  If using the mail option, use certified mail with tracking.
  Better solution: use a CAA who verifies and returns originals same day.

Entering ITIN where SSN is requested on business forms
  For business purposes, use your EIN — not your ITIN.
  Your ITIN is for personal tax filing. Your EIN is for business.

Not renewing an expiring ITIN before tax season
  If your ITIN expires and you file a return, processing is delayed
  and you may miss refund deadlines.


IMPROVEMENT LOOP

After receiving ITIN:
[ ] Apply for EIN at IRS.gov immediately using your ITIN
[ ] Set a calendar reminder to check ITIN expiration status each January
[ ] Confirm with your accountant which forms require ITIN vs. EIN
[ ] If ITIN was used on any business form: update with EIN once obtained
`,
  },
  {
    name: "ledgely-compliance-calendar.pdf",
    label: "Compliance Calendar",
    tag: "Template",
    description:
      "A simple yearly calendar of items most small businesses must track.",
    build: () => `LEDGELY — ANNUAL COMPLIANCE CALENDAR
Full execution guide: never miss a deadline


HOW TO USE THIS CALENDAR

1. Fill in your state-specific dates using the instructions in each section
2. Set two reminders per deadline: 30 days before AND 7 days before
3. Complete this document once per year, at the start of each calendar year
4. Keep it in your Compliance folder alongside your license documents


REAL-WORLD EXAMPLE — COMPLETED CALENDAR

Business:            Apex Home Services LLC (Texas)
Federal Q1 tax:      April 15 — $680 (25% of Q1 net profit $2,720)
Federal Q2 tax:      June 15 — $410
Federal Q3 tax:      September 15 — $530
Federal Q4 tax:      January 15 — $590
Federal return:      April 15 (file with Schedule C on Form 1040)
1099-NEC due:        January 31 (issued to 2 contractors paid $600+)
State return:        May 15 (Texas franchise tax — no state income tax)
Annual report:       May 15 (Texas Public Information Report)
Local license:       January 31 renewal (City of Austin)

Use this as a model for filling in your own calendar.


FEDERAL DEADLINES — APPLY TO ALL US BUSINESSES

Q1 ESTIMATED TAX PAYMENT
Due date: April 15
Who must pay: Anyone expecting to owe $1,000 or more in federal tax for the year
How to calculate: 25 to 30 percent of net profit from January through March
How to pay: IRS Direct Pay at irs.gov/payments, or mail Form 1040-ES
[ ] Reminder set (March 15)    [ ] Reminder set (April 8)    [ ] Paid

Q2 ESTIMATED TAX PAYMENT
Due date: June 15
Amount: 25 to 30 percent of net profit from April through May
[ ] Reminder set (May 15)    [ ] Reminder set (June 8)    [ ] Paid

Q3 ESTIMATED TAX PAYMENT
Due date: September 15
Amount: 25 to 30 percent of net profit from June through August
[ ] Reminder set (August 15)    [ ] Reminder set (September 8)    [ ] Paid

Q4 ESTIMATED TAX PAYMENT
Due date: January 15 (of the following year)
Amount: 25 to 30 percent of net profit from September through December
[ ] Reminder set (December 15)    [ ] Reminder set (January 8)    [ ] Paid

FEDERAL INCOME TAX RETURN
Due date: April 15 (extension to October 15 available — file Form 4868 by April 15)
Form: Schedule C on Form 1040 (sole prop / single-member LLC)
      Form 1065 (multi-member LLC or partnership)
      Form 1120-S (S-Corporation)
[ ] Reminder set (March 15)    [ ] Filed    [ ] Extension filed

1099-NEC FORMS
Due date: January 31 (must reach contractors AND be filed with IRS)
Who must file: Anyone who paid a contractor $600 or more in the calendar year
How to file: IRS e-file at irs.gov or through QuickBooks / Wave
[ ] Reminder set (January 10)    [ ] Issued    [ ] Not applicable

W-2 FORMS (if you have employees)
Due date: January 31
[ ] Issued    [ ] Not applicable (no employees)


STATE DEADLINES — FILL IN FOR YOUR STATE

STATE INCOME TAX RETURN
Find your state's due date at your state Department of Revenue website.
Due date: ___________
Form: ___________
Filing instructions: ___________
[ ] Reminder set    [ ] Filed

STATE ANNUAL REPORT OR FRANCHISE TAX
Most states require LLCs to file an annual report to maintain good standing.
Filing keeps your entity "active" in state records. Failure risks dissolution.
Find your deadline at your state's Secretary of State website.

Due date: ___________
Filing fee: $___________
Where to file: ___________
[ ] Reminder set (30 days before)    [ ] Reminder set (7 days before)    [ ] Filed

STATE SALES TAX
Required if you sell taxable goods or services. Check your state's rules.
Filing frequency: [ ] Monthly    [ ] Quarterly    [ ] Annually
Due dates: ___________
[ ] Current

STATE BUSINESS LICENSE RENEWAL
Due date on your license: ___________
Fee: $___________
[ ] Reminder set    [ ] Renewed


LOCAL DEADLINES

CITY OR COUNTY BUSINESS LICENSE RENEWAL
Due date: ___________
Fee: $___________
Where to renew: ___________
[ ] Reminder set    [ ] Renewed

OTHER PERMITS OR REQUIREMENTS
Permit type: ___________    Due date: ___________    Fee: $___________
[ ] Reminder set    [ ] Renewed


INTERPRETATION GUIDE — WHAT HAPPENS IF YOU MISS EACH DEADLINE

Federal estimated taxes not paid:
  Underpayment penalty: approximately 8 percent annualized on the shortfall
  Paid at tax time, not immediately — but it adds up across all four quarters
  If/then: If you missed Q1, pay the missed amount plus Q2 together by June 15

Federal tax return late without extension:
  Failure-to-file penalty: 5 percent of unpaid taxes per month (up to 25%)
  Failure-to-pay penalty: 0.5 percent per month on unpaid balance
  If/then: If you know you will be late, file Form 4868 by April 15 to extend

State annual report missed:
  Late fees: $25–$500 depending on state
  Risk: Loss of "good standing" — may block loans, leases, or contracts
  Worst case: Administrative dissolution (your LLC is officially closed by the state)
  If/then: If already late, file and pay the late fee immediately — most states
  allow reinstatement but charge an additional reinstatement fee

Sales tax late:
  Penalties and interest vary by state — commonly 10 to 25 percent of amount due
  If/then: File even if you cannot pay in full — late filing penalty is higher
  than late payment penalty in most states

Business license expired:
  Operating without a valid license may result in fines and required closure
  If/then: Renew immediately. Most municipalities allow same-day renewal online.


COMMON MISTAKES TO AVOID

Skipping quarterly estimated taxes in year one
  The IRS does not bill you during the year. You are responsible for paying.
  If you skip all four quarters and owe more than $1,000 at filing, you pay
  an underpayment penalty on top of the full tax owed.

Missing the state annual report while paying federal taxes correctly
  Federal and state compliance are separate. Many business owners handle
  their federal taxes but forget their state annual report.

Not issuing 1099s to contractors paid $600 or more
  You may face IRS penalties plus loss of the deduction if audited.

Confusing extension to file with extension to pay
  Form 4868 extends your deadline to file. It does not extend your deadline
  to pay. Pay what you owe by April 15 even if filing an extension.


IMPROVEMENT LOOP — ANNUAL SETUP CHECKLIST

Complete this at the start of every calendar year:
[ ] Open fresh copy of this calendar template
[ ] Fill in all deadlines for the new year
[ ] Set all reminders in your phone or calendar app
[ ] Add any new deadlines from licenses obtained during prior year
[ ] Review prior year for any missed deadlines — correct them now
[ ] Confirm with your accountant: are there any new obligations this year?

At the end of each quarter:
[ ] Paid estimated taxes on time
[ ] Bookkeeping is current through end of quarter
[ ] No outstanding compliance items
`,
  },
  {
    name: "ledgely-setup-plan-example.pdf",
    label: "Filled Setup Plan Example",
    tag: "Filled example",
    description:
      "A completed setup plan for a sample LLC so you know exactly what yours should look like.",
    build: () => `LEDGELY — FILLED SETUP PLAN EXAMPLE
A complete walkthrough of a real business setup — use as your model


PURPOSE OF THIS DOCUMENT

This is a fully completed setup journey for a fictional business owner.
Read through it entirely before starting your own setup.
Then complete the blank framework at the end for your own business.

Goal: Show you exactly what a clean, complete setup looks like at every stage.


THE BUSINESS — APEX HOME SERVICES LLC

Owner:              Jordan Smith
Business type:      Residential landscaping and lawn care
Location:           Austin, Texas
Structure:          Single-Member LLC
Formation date:     March 3, 2025
Operating since:    March 17, 2025 (14 days from decision to open)


PHASE 1 — DECISION RECORD (March 1–2)

Structure decision:
  Jordan chose Single-Member LLC for liability protection.
  Sole proprietorship was considered but ruled out because:
  - Jordan uses a truck, equipment, and employs occasional subcontractors
  - A client injury on the job could expose personal assets without LLC protection
  Final decision: Single-Member LLC in Texas

Name decision:
  "Apex Home Services LLC"
  State check: Available in Texas Secretary of State database
  Domain: apexhomeservices.com secured at Namecheap — $12.99/year
  Trademark: No live marks found in Class 37 (construction / lawn services)
  Final result: Name confirmed, domain secured on March 2

Tax ID decision:
  Jordan is a US citizen with an SSN.
  Decision: Apply for EIN — SSN will not be used for any business purpose.


PHASE 2 — REGISTRATION RECORD (March 3–10)

EIN application (March 3):
  Completed at IRS.gov — took 14 minutes
  Responsible party: Jordan Smith (SSN entered)
  Entity type: Limited Liability Company
  Reason: Started new business
  Principal activity: Landscaping services
  Expected employees: 0
  EIN issued: 45-1234567
  Confirmation page: saved as "EIN-Confirmation.pdf"
  CP 575: received by mail March 28 — stored in Formation folder

State formation (March 3–7):
  Articles of Organization filed with Texas Secretary of State
  Registered agent: Jordan Smith (using business address)
  Filing fee: $300
  State approval received: March 7 via email
  Document saved as "TX-Formation-Approval-2025.pdf"

Operating Agreement (March 8):
  Single-member operating agreement drafted (two pages)
  Contents: Jordan's ownership (100%), management authority,
            capital contribution ($2,000), profit distribution (100% to Jordan),
            dissolution terms
  Signed and dated March 8
  Stored as "Operating-Agreement-Signed-2025.pdf"

Local business license (March 10):
  General business license obtained from City of Austin
  Fee: $45
  Renewal date: January 31 each year
  Stored as "Austin-Business-License-2025.pdf"


DOCUMENTS ON FILE AFTER PHASE 2
  1. EIN-Confirmation.pdf (IRS printout)
  2. TX-Formation-Approval-2025.pdf (state approval)
  3. Operating-Agreement-Signed-2025.pdf
  4. Austin-Business-License-2025.pdf
  5. CP 575 (scanned as CP575-2025.pdf)


PHASE 3 — ACCOUNTS RECORD (March 11–17)

Business bank account (March 11):
  Bank: Relay Business Checking
  Brought: EIN confirmation, TX formation approval, Texas ID, $500 deposit
  Outcome: Account opened same day
  Debit card ordered: arrived March 16
  Online banking: set up with transaction alerts on all activity

Payment processing (March 13):
  Platform: Stripe
  Connected: Relay business checking account verified
  Test transaction: $1 sent and confirmed deposited March 14
  Invoice tool: Stripe invoicing activated
  Payment link created for standard jobs

Bookkeeping setup (March 14):
  Platform: Wave (free)
  Bank connection: Relay account synced automatically
  Expense categories created:
    Revenue / Subcontractor Costs / Equipment / Fuel /
    Marketing / Insurance / Software / Professional Services
  Opening balance entered: $500.00


PHASE 4 — COMPLIANCE RECORD (March 17)

Compliance calendar reminders set:
  Q1 estimated tax:   April 15 (30-day reminder March 16)
  Q2 estimated tax:   June 15
  Q3 estimated tax:   September 15
  Q4 estimated tax:   January 15
  Federal return:     April 15 of next year
  Texas franchise tax: May 15 of each year
  Austin license renewal: January 31 of each year

Insurance:
  General liability policy obtained: Thimble (online, $58/month)
  Certificate of Insurance: stored in Insurance folder

First client invoice:
  Sent March 18 to first landscaping client
  Amount: $450
  Invoice #: INV-001
  Paid: March 22 — confirmed in Relay account


INTERPRETATION — WHAT THIS TIMELINE TELLS YOU

Jordan went from decision to first payment in 19 days.
The delays were: state approval (4 business days) and debit card shipping (5 days).
All paperwork was completed in under 3 hours total.

If your timeline is longer, the most common causes are:
  - Delayed state approval (some states take 10+ days without expedited filing)
  - Bank account rejected (usually missing EIN confirmation or formation docs)
  - Payment processing held for verification (common for first-time accounts)

If formation took more than 2 weeks, check your state's Secretary of State
website for status. You can usually pay for expedited processing.


COMMON MISTAKES JORDAN AVOIDED

Did not apply for EIN before state approval was confirmed
Did not use personal bank account for business income — not once
Saved the EIN confirmation page before closing the browser
Drafted Operating Agreement within the first week
Set all compliance reminders on the same day business opened


YOUR OWN SETUP PLAN — FILL IN BELOW

Business name:               ______________________________
Structure chosen:            ______________________________
State of formation:          ______________________________
Tax ID path (EIN or ITIN):   ______________________________
EIN application date:        ______________________________
EIN number:                  ______________________________
State formation filed date:  ______________________________
State approval date:         ______________________________
Operating Agreement signed:  ______________________________
Bank account opened:         ______________________________
Bank name:                   ______________________________
Payment processor:           ______________________________
Bookkeeping platform:        ______________________________
First invoice sent:          ______________________________
Target "open for business":  ______________________________

IMPROVEMENT LOOP — REVIEW AT 30 AND 90 DAYS

30-day check:
[ ] All documents saved to Formation & Legal folder
[ ] CP 575 received and stored
[ ] First bank reconciliation completed
[ ] Bookkeeping categories match actual expenses

90-day check:
[ ] First quarterly estimated tax paid (if applicable)
[ ] All compliance reminders confirmed in calendar
[ ] Profit margin above 20 percent
[ ] Operating Agreement still reflects actual business operation
[ ] Business bank account is the only account used for business expenses
`,
  },
];
