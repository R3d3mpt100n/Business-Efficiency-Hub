const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/jspdf.es.min-BRh9Fd-n.js","assets/index-COccddqp.js","assets/vendor-CDandLuC.js","assets/react-dom-DP_650Lm.js","assets/react-query-BwgeJbZ9.js","assets/index-KvxHUJaE.css"])))=>i.map(i=>d[i]);
import{d as p,j as e,L as w}from"./vendor-CDandLuC.js";import{P as b}from"./checkout-x1PyrtZ-.js";import{E as N}from"./EarlyAccessNote-Dvy7dvwj.js";import{_ as T}from"./index-COccddqp.js";import{K as j}from"./proSystems-ulLxlKLd.js";import"./react-dom-DP_650Lm.js";import"./react-query-BwgeJbZ9.js";async function C(t,r){const{jsPDF:i}=await T(async()=>{const{jsPDF:_}=await import("./jspdf.es.min-BRh9Fd-n.js");return{jsPDF:_}},__vite__mapDeps([0,1,2,3,4,5])),a=new i({unit:"pt",format:"letter"}),o=56,n=72,l=a.internal.pageSize.getWidth(),s=l-o*2;a.setFont("helvetica","bold"),a.setFontSize(9),a.setTextColor(180,150,70),a.text("LEDGELY",o,n),a.setDrawColor(220,210,190),a.setLineWidth(.5),a.line(o,n+8,l-o,n+8);let d=n+26;const A=r.split(`
`);for(const _ of A){d>a.internal.pageSize.getHeight()-56&&(a.addPage(),d=56);const c=_.trimEnd();if(c===""){d+=8;continue}const v=/^[A-Z0-9 &/()—–-]{4,}$/.test(c)&&!c.startsWith("[ ")&&!c.startsWith("- ")&&!c.match(/^\d+\./);if(c.startsWith("===")||c.startsWith("---")){d+=4;continue}if(v){a.setFont("helvetica","bold"),a.setFontSize(10),a.setTextColor(30,25,20);const h=a.splitTextToSize(c,s);a.text(h,o,d),d+=h.length*14+6}else{a.setFont("helvetica","normal"),a.setFontSize(9.5),a.setTextColor(60,55,50);const h=a.splitTextToSize(c,s);a.text(h,o,d),d+=h.length*13}}const g=a.getNumberOfPages();for(let _=1;_<=g;_++)a.setPage(_),a.setFont("helvetica","normal"),a.setFontSize(7.5),a.setTextColor(180,175,168),a.text(`Ledgely · ledgely.com · Page ${_} of ${g}`,o,a.internal.pageSize.getHeight()-28);a.save(t)}const k=[{name:"ledgely-startup-checklist.pdf",label:"Startup Checklist",tag:"Master checklist",description:"The full ordered list of every step from idea to opened bank account.",build:()=>`LEDGELY — BUSINESS STARTUP CHECKLIST
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
`},{name:"ledgely-ein-prep-checklist.pdf",label:"EIN Preparation Checklist",tag:"Questionnaire",description:"Everything you need before applying for an EIN with the IRS.",build:()=>`LEDGELY — EIN PREPARATION CHECKLIST
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
`},{name:"ledgely-itin-prep-checklist.pdf",label:"ITIN Preparation Checklist",tag:"Questionnaire",description:"What to gather before applying for an ITIN with Form W-7.",build:()=>`LEDGELY — ITIN PREPARATION CHECKLIST
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
`},{name:"ledgely-compliance-calendar.pdf",label:"Compliance Calendar",tag:"Template",description:"A simple yearly calendar of items most small businesses must track.",build:()=>`LEDGELY — ANNUAL COMPLIANCE CALENDAR
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
`},{name:"ledgely-setup-plan-example.pdf",label:"Filled Setup Plan Example",tag:"Filled example",description:"A completed setup plan for a sample LLC so you know exactly what yours should look like.",build:()=>`LEDGELY — FILLED SETUP PLAN EXAMPLE
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
`}],R="https://www.irs.gov/pub/irs-pdf/fw7.pdf",O=[{name:"Reason you are submitting Form W-7",meaning:"Why you need an ITIN. You select one box (a–h) on the official form.",example:"Non-resident alien filing a U.S. federal tax return"},{name:"Name (Line 1a)",meaning:"Your full legal name exactly as it appears on your passport.",example:"Jane Q. Sample"},{name:"Name at birth, if different (Line 1b)",meaning:"Used only if your current legal name differs from birth name.",example:"Jane Q. Example"},{name:"Applicant's mailing address (Line 2)",meaning:"Where the IRS will send your ITIN approval letter.",example:"123 Sample Street, Apt 4, Anytown, ST 00000, USA"},{name:"Foreign (non-U.S.) address (Line 3)",meaning:"Your permanent address in your country of citizenship.",example:"45 Example Road, Sampleville, Sampleland"},{name:"Date of birth (Line 4)",meaning:"Format MM / DD / YYYY. Must match supporting documents.",example:"01 / 15 / 1990"},{name:"Country of birth (Line 4)",meaning:"Country where you were born.",example:"Sampleland"},{name:"Country of citizenship (Line 6a)",meaning:"All countries you currently hold citizenship in.",example:"Sampleland"},{name:"Foreign tax ID number (Line 6b)",meaning:"Your tax identification number issued by your home country.",example:"SAMPLE-ID-0000000"},{name:"U.S. visa info (Line 6c)",meaning:"Visa type, number, and expiration if you are in the U.S. on a visa.",example:"B-2 / 0000000 / 12-31-2027"},{name:"Identification documents (Line 6d)",meaning:"The supporting document you are submitting. Passport is the only stand-alone document.",example:"Passport — No. SAMPLE000000 — issued by Sampleland"},{name:"Sign here",meaning:"Your signature and the date you sign the form.",example:"(your signature) — 04/01/2026"}],L=["(a) Non-resident alien required to get an ITIN to claim tax treaty benefit","(b) Non-resident alien filing a U.S. federal tax return","(c) U.S. resident alien filing a U.S. federal tax return","(d) Dependent of a U.S. citizen / resident alien","(e) Spouse of a U.S. citizen / resident alien","(f) Non-resident alien student, professor, or researcher","(g) Dependent / spouse of a non-resident alien holder of a U.S. visa","(h) Other"],P=["Passport (stand-alone document)","National identification card + birth certificate","Foreign driver's license + birth certificate","U.S. driver's license + birth certificate","Civil birth certificate (for dependents under 18)","Other (see official IRS list)"],S={fullName:"",dob:"",countryOfBirth:"",citizenship:"",reason:"",documentType:"",mailingAddress:"",foreignAddress:""};function D(){const[t,r]=p.useState(S),i=(n,l)=>r(s=>({...s,[n]:l})),a=t.fullName.trim()!==""&&t.dob.trim()!==""&&t.countryOfBirth.trim()!==""&&t.reason.trim()!=="",o=()=>{const n=`LEDGELY — INFORMATION TO TRANSFER INTO OFFICIAL IRS FORM W-7

This is preparation only. Transfer these values into the official blank Form W-7
downloaded directly from the IRS. Do NOT use this document as a tax filing.

Full legal name: ${t.fullName||"(not entered)"}
Date of birth: ${t.dob||"(not entered)"}
Country of birth: ${t.countryOfBirth||"(not entered)"}
Country of citizenship: ${t.citizenship||"(not entered)"}
Reason for ITIN: ${t.reason||"(not selected)"}
Identification document: ${t.documentType||"(not selected)"}

Mailing address: ${t.mailingAddress||"(not entered)"}
Foreign address: ${t.foreignAddress||"(not entered)"}
`,l=new Blob([n],{type:"text/plain;charset=utf-8"}),s=URL.createObjectURL(l),d=document.createElement("a");d.href=s,d.download="ledgely-w7-prepared-information.txt",document.body.appendChild(d),d.click(),document.body.removeChild(d),URL.revokeObjectURL(s)};return e.jsxs("section",{className:"mb-10 rounded-lg border border-slate-200 bg-white p-6",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[e.jsx("span",{className:"text-[10px] font-semibold uppercase tracking-widest text-slate-900 bg-slate-200 px-2 py-0.5 rounded",children:"ITIN"}),e.jsx("span",{className:"text-xs font-medium uppercase tracking-widest text-slate-500",children:"W-7 Guide"})]}),e.jsx("h2",{className:"text-xl font-semibold text-slate-900",children:"ITIN Application Support System (W-7 Guide)"}),e.jsx("p",{className:"mt-2 text-sm text-slate-600 leading-relaxed",children:"A guided preparation system for the official IRS Form W-7. You'll understand each field, prepare your information, and confidently complete the official form yourself."}),e.jsxs("div",{className:"mt-6 rounded-md border border-slate-300 bg-slate-50 p-5",children:[e.jsx("p",{className:"text-[10px] font-semibold uppercase tracking-widest text-slate-500 mb-1",children:"Step A · Official document"}),e.jsx("h3",{className:"text-base font-semibold text-slate-900",children:"Download Official IRS Form W-7 (Blank)"}),e.jsx("p",{className:"mt-1 text-sm text-slate-600 leading-relaxed",children:"The blank form is hosted directly by the IRS. Always use the official, unmodified version for your application."}),e.jsx("a",{href:R,target:"_blank",rel:"noopener noreferrer",className:"mt-3 inline-flex items-center justify-center rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800",children:"Open Form W-7 on IRS.gov →"})]}),e.jsxs("div",{className:"mt-6 rounded-md border border-amber-300 bg-amber-50 p-5",children:[e.jsx("p",{className:"text-[10px] font-semibold uppercase tracking-widest text-amber-900 mb-1",children:"Step B · Educational Example"}),e.jsx("h3",{className:"text-base font-semibold text-amber-900",children:"Educational Example — How to Fill W-7"}),e.jsxs("p",{className:"mt-1 text-sm text-amber-900 leading-relaxed",children:["This is a learning guide only. It is ",e.jsx("strong",{children:"not"})," the official form and cannot be submitted. All example values are fictional."]})]}),e.jsx("div",{className:"mt-4 overflow-hidden rounded-md border border-slate-200",children:e.jsxs("table",{className:"w-full text-sm",children:[e.jsx("thead",{className:"bg-slate-50 text-left",children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-4 py-2 font-semibold text-slate-900 w-1/4",children:"Field"}),e.jsx("th",{className:"px-4 py-2 font-semibold text-slate-900",children:"What it means"}),e.jsx("th",{className:"px-4 py-2 font-semibold text-slate-900 w-1/3",children:"Example (fictional)"})]})}),e.jsx("tbody",{children:O.map((n,l)=>e.jsxs("tr",{className:l%2===0?"bg-white":"bg-slate-50/60",children:[e.jsx("td",{className:"px-4 py-3 align-top font-medium text-slate-900",children:n.name}),e.jsx("td",{className:"px-4 py-3 align-top text-slate-700 leading-relaxed",children:n.meaning}),e.jsx("td",{className:"px-4 py-3 align-top text-slate-600 italic",children:n.example})]},n.name))})]})}),e.jsxs("div",{className:"mt-8 rounded-md border border-slate-300 bg-slate-50 p-5",children:[e.jsx("p",{className:"text-[10px] font-semibold uppercase tracking-widest text-slate-500 mb-1",children:"Step C · Preparation tool"}),e.jsx("h3",{className:"text-base font-semibold text-slate-900",children:"Prepare Your Information"}),e.jsx("p",{className:"mt-1 text-sm text-slate-600 leading-relaxed",children:"Enter your real details below. Your prepared summary stays on this page — nothing is submitted, stored on a server, or sent to the IRS."}),e.jsxs("div",{className:"mt-5 grid sm:grid-cols-2 gap-4",children:[e.jsx(u,{label:"Full legal name",value:t.fullName,onChange:n=>i("fullName",n),placeholder:"As it appears on your passport"}),e.jsx(u,{label:"Date of birth",value:t.dob,onChange:n=>i("dob",n),placeholder:"MM / DD / YYYY"}),e.jsx(u,{label:"Country of birth",value:t.countryOfBirth,onChange:n=>i("countryOfBirth",n),placeholder:"Country name"}),e.jsx(u,{label:"Country of citizenship",value:t.citizenship,onChange:n=>i("citizenship",n),placeholder:"Country name"}),e.jsx(I,{label:"Reason for applying",value:t.reason,onChange:n=>i("reason",n),options:L,placeholder:"Select a reason",full:!0}),e.jsx(I,{label:"Identification document",value:t.documentType,onChange:n=>i("documentType",n),options:P,placeholder:"Select a document",full:!0}),e.jsx(u,{label:"Mailing address",value:t.mailingAddress,onChange:n=>i("mailingAddress",n),placeholder:"Where the IRS sends your letter",full:!0}),e.jsx(u,{label:"Foreign address",value:t.foreignAddress,onChange:n=>i("foreignAddress",n),placeholder:"Permanent address in your home country",full:!0})]}),e.jsx("button",{type:"button",onClick:()=>r(S),className:"mt-4 text-xs font-medium text-slate-500 hover:text-slate-900 underline-offset-2 hover:underline",children:"Clear all fields"})]}),e.jsxs("div",{className:"mt-6 rounded-md border-2 border-slate-900 bg-white p-5",children:[e.jsx("p",{className:"text-[10px] font-semibold uppercase tracking-widest text-slate-900 mb-1",children:"Prepared Information Summary"}),e.jsx("h3",{className:"text-base font-semibold text-slate-900",children:"Information to transfer into official IRS Form W-7"}),e.jsx("p",{className:"mt-1 text-xs text-slate-500 leading-relaxed",children:"This is preparation only. Use these values as a reference while you fill in the official blank Form W-7."}),a?e.jsxs("dl",{className:"mt-4 grid sm:grid-cols-2 gap-x-6 gap-y-3 text-sm",children:[e.jsx(m,{label:"Full legal name",value:t.fullName}),e.jsx(m,{label:"Date of birth",value:t.dob}),e.jsx(m,{label:"Country of birth",value:t.countryOfBirth}),e.jsx(m,{label:"Country of citizenship",value:t.citizenship}),e.jsx(m,{label:"Reason for ITIN",value:t.reason,full:!0}),e.jsx(m,{label:"Identification document",value:t.documentType,full:!0}),e.jsx(m,{label:"Mailing address",value:t.mailingAddress,full:!0}),e.jsx(m,{label:"Foreign address",value:t.foreignAddress,full:!0})]}):e.jsx("p",{className:"mt-4 text-sm text-slate-500",children:"Fill in at least your name, date of birth, country of birth, and reason to see your prepared summary."}),a&&e.jsx("button",{type:"button",onClick:o,className:"mt-5 inline-flex items-center justify-center rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800",children:"Download summary as .txt"})]})]})}function u({label:t,value:r,onChange:i,placeholder:a,full:o}){return e.jsxs("label",{className:"block "+(o?"sm:col-span-2":""),children:[e.jsx("span",{className:"block text-xs font-medium text-slate-700 mb-1",children:t}),e.jsx("input",{type:"text",value:r,onChange:n=>i(n.target.value),placeholder:a,className:"w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-900 bg-white"})]})}function I({label:t,value:r,onChange:i,options:a,placeholder:o,full:n}){return e.jsxs("label",{className:"block "+(n?"sm:col-span-2":""),children:[e.jsx("span",{className:"block text-xs font-medium text-slate-700 mb-1",children:t}),e.jsxs("select",{value:r,onChange:l=>i(l.target.value),className:"w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:outline-none focus:border-slate-900 bg-white",children:[e.jsx("option",{value:"",children:o}),a.map(l=>e.jsx("option",{value:l,children:l},l))]})]})}function m({label:t,value:r,full:i}){return e.jsxs("div",{className:i?"sm:col-span-2":"",children:[e.jsx("dt",{className:"text-xs font-medium uppercase tracking-wide text-slate-500",children:t}),e.jsx("dd",{className:"text-sm text-slate-900",children:r||e.jsx("span",{className:"text-slate-400",children:"—"})})]})}const F=["Decision gate: 3 questions that pick the right business structure for your situation","Ordered 5-step setup path: structure → name → tax ID → registration → banking","Branching EIN vs. ITIN preparation checklists (only the one you need)","Form W-7 preparation module for ITIN applicants","Common-mistakes list so you avoid the traps that force a redo later","Downloadable startup checklist, prep checklists, and compliance calendar (.txt)","A live 'Your Completed Setup Plan' summary you can save and reference"],E="pro:business-starter:answers",x={earning:"",people:"",risk:"",taxPath:""};function M(t){return!t.earning||!t.people||!t.risk?null:t.people==="others"?{name:"Partnership (or Multi-Member LLC)",why:"You're operating with others, so you need a structure that defines ownership, responsibilities, and how profits are split. A Multi-Member LLC is usually the safer modern choice."}:t.risk==="yes"||t.earning==="yes"?{name:"LLC (Single-Member)",why:"You're either earning income or expecting real legal/financial risk. An LLC separates personal assets from business liability and is the standard starting point."}:{name:"Sole Proprietor",why:"You're starting alone, with no current income and low risk exposure. A Sole Proprietorship is the simplest legal starting point — you can upgrade to an LLC later as the business grows."}}function U(){try{const t=localStorage.getItem(E);return t?{...x,...JSON.parse(t)}:x}catch{return x}}function y({label:t,value:r,options:i,onChange:a}){return e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-medium text-slate-900 mb-2",children:t}),e.jsx("div",{className:"flex flex-wrap gap-2",children:i.map(o=>{const n=r===o.value;return e.jsx("button",{type:"button",onClick:()=>a(o.value),className:"rounded-md px-3 py-1.5 text-sm border transition-colors "+(n?"bg-slate-900 text-white border-slate-900":"bg-white text-slate-700 border-slate-300 hover:border-slate-500"),children:o.label},o.value)})})]})}function f({n:t,title:r,children:i}){return e.jsx("section",{className:"rounded-lg border border-slate-200 bg-white p-6",children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("span",{className:"flex-none inline-flex items-center justify-center w-9 h-9 rounded-full bg-slate-900 text-white text-sm font-semibold",children:t}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("h2",{className:"text-lg font-semibold text-slate-900",children:r}),e.jsx("div",{className:"mt-3 text-slate-700 leading-relaxed text-sm space-y-3",children:i})]})]})})}function X(){const[t,r]=p.useState(x);p.useEffect(()=>{r(U())},[]),p.useEffect(()=>{try{localStorage.setItem(E,JSON.stringify(t))}catch{}},[t]);const i=p.useMemo(()=>M(t),[t]),a=t.taxPath,o=p.useMemo(()=>{const s=[];return i?s.push(`File formation documents to register as a ${i.name}.`):s.push("Answer the 3 questions in 'Before You Do Anything Else' to get your structure recommendation."),a?a==="ein"?s.push("Complete the EIN preparation checklist and apply through the IRS."):s.push("Complete the ITIN preparation checklist and submit Form W-7."):s.push("Choose your tax ID path in Step 3 (EIN or ITIN)."),s.push("Open a dedicated business bank account using your formation documents and tax ID."),s.slice(0,3)},[i,a]),n=()=>r(x),l=j["business-starter"]??[];return e.jsxs("div",{children:[e.jsx("div",{className:"border-b border-slate-200 bg-slate-50",children:e.jsxs("div",{className:"max-w-3xl mx-auto px-6 py-10",children:[e.jsxs(w,{href:"/pro",className:"inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-900 mb-6",children:[e.jsx("svg",{className:"w-3.5 h-3.5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 19l-7-7 7-7"})}),"Pro Systems"]}),e.jsx("div",{className:"bg-white rounded-xl border-t-4 border-t-blue-500 border border-slate-200 shadow-sm p-6",children:e.jsxs("div",{className:"flex items-start justify-between gap-4 flex-wrap",children:[e.jsxs("div",{className:"min-w-0",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[e.jsx("span",{className:"text-[10px] font-semibold uppercase tracking-widest border rounded px-2 py-0.5 bg-blue-50 text-blue-700 border-blue-200",children:"Setup"}),e.jsx("span",{className:"text-xs text-slate-400",children:"4 phases  ·  EIN + setup + compliance"})]}),e.jsx("h1",{className:"text-2xl font-semibold text-slate-900",children:"Business Starter System"}),e.jsx("p",{className:"mt-1 text-slate-500",children:"Idea → legally registered business"}),e.jsx("p",{className:"mt-3 text-sm text-slate-700 leading-relaxed max-w-xl",children:"A clear, ordered path from idea → decision → legal setup → banking → completion. Make each decision once, then move directly to the next step."})]}),e.jsxs("div",{className:"flex-none flex flex-col items-end gap-2",children:[e.jsx("a",{href:b,className:"inline-flex items-center justify-center rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-800 transition-colors",children:"Unlock full system →"}),e.jsx(N,{className:"text-right"})]})]})})]})}),e.jsxs("article",{className:"max-w-3xl mx-auto px-6 py-10",children:[e.jsxs("section",{className:"mb-10 grid gap-5 md:grid-cols-2",children:[e.jsxs("details",{open:!0,className:"group rounded-lg border border-slate-200 bg-white p-5 open:bg-white",children:[e.jsxs("summary",{className:"cursor-pointer list-none flex items-center justify-between text-sm font-semibold text-slate-900 select-none",children:[e.jsx("span",{children:"Key Benefits"}),e.jsx("span",{className:"text-slate-500 text-xs transition-transform duration-200 group-open:rotate-180",children:"▾"})]}),e.jsx("ul",{className:"mt-3 space-y-2",children:l.map(s=>e.jsxs("li",{className:"flex gap-3 text-sm text-slate-700 leading-relaxed",children:[e.jsx("span",{className:"text-slate-400",children:"•"}),e.jsx("span",{children:s})]},s))})]}),e.jsxs("div",{className:"rounded-lg border border-slate-200 bg-white p-5",children:[e.jsx("p",{className:"text-sm font-semibold text-slate-900",children:"What you get"}),e.jsx("ul",{className:"mt-3 space-y-2",children:F.map(s=>e.jsxs("li",{className:"flex gap-3 text-sm text-slate-700 leading-relaxed",children:[e.jsx("span",{className:"text-slate-400",children:"•"}),e.jsx("span",{children:s})]},s))})]})]}),e.jsxs("section",{className:"mb-8 rounded-lg border border-slate-200 bg-white p-5",children:[e.jsx("p",{className:"text-[10px] font-semibold uppercase tracking-widest text-slate-500 mb-2",children:"Before you write a business plan"}),e.jsx("p",{className:"text-sm text-slate-700 leading-relaxed",children:"Skip the 20-page business plan. Nobody reads it twice, and it's usually outdated before you finish writing it. Instead, draw a mind map: your idea in the center, then branch out every possibility — customers, problems you solve, revenue streams, risks, and competitors. It forces clarity in 30 minutes instead of 30 days, and you can update it as you learn. Once your thinking is clear, the setup steps below will make far more sense."})]}),e.jsxs("section",{className:"mb-10 rounded-lg border border-slate-900 bg-slate-50 p-6",children:[e.jsx("p",{className:"text-[10px] font-semibold uppercase tracking-widest text-slate-900 mb-2",children:"Start here · Decision gate"}),e.jsx("h2",{className:"text-xl font-semibold text-slate-900",children:"Before You Do Anything Else"}),e.jsx("p",{className:"mt-2 text-sm text-slate-700 leading-relaxed",children:"Most people pick the wrong business structure or start in the wrong order. Answer 3 questions and we'll point you to the right starting structure before you spend a dollar."}),e.jsxs("div",{className:"mt-6 space-y-5",children:[e.jsx(y,{label:"1. Are you already earning income from this business?",value:t.earning,options:[{value:"yes",label:"Yes"},{value:"no",label:"Not yet"}],onChange:s=>r({...t,earning:s})}),e.jsx(y,{label:"2. Are you operating alone or with others?",value:t.people,options:[{value:"alone",label:"Alone"},{value:"others",label:"With others"}],onChange:s=>r({...t,people:s})}),e.jsx(y,{label:"3. Do you expect meaningful legal or financial risk?",value:t.risk,options:[{value:"yes",label:"Yes"},{value:"no",label:"No / minimal"}],onChange:s=>r({...t,risk:s})})]}),e.jsxs("div",{className:"mt-6 rounded-md border border-slate-300 bg-white p-5",children:[e.jsx("p",{className:"text-[10px] font-semibold uppercase tracking-widest text-slate-500 mb-1",children:"Recommendation"}),i?e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"text-lg font-semibold text-slate-900",children:i.name}),e.jsx("p",{className:"mt-2 text-sm text-slate-700 leading-relaxed",children:i.why})]}):e.jsx("p",{className:"text-sm text-slate-500",children:"Answer all 3 questions above to see your recommended starting structure."})]})]}),e.jsxs("section",{className:"mb-10",children:[e.jsx("h2",{className:"text-2xl font-semibold text-slate-900 mb-2",children:"Setup Path"}),e.jsx("p",{className:"text-sm text-slate-600 mb-6",children:"A strict, ordered execution flow. Finish each step, then move to the next."}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs(f,{n:1,title:"Business Structure",children:[e.jsx("p",{children:"Use the recommendation from the Decision Gate above. Don't overthink this — a structure is a starting point, not a permanent decision."}),i?e.jsxs("p",{className:"rounded-md bg-slate-50 border border-slate-200 px-3 py-2",children:[e.jsx("span",{className:"font-semibold text-slate-900",children:"Your path:"})," ",i.name,"."]}):e.jsx("p",{className:"text-slate-500",children:"Complete the Decision Gate to lock in your structure."}),e.jsx("p",{className:"text-slate-500",children:"Once locked in, move directly to Step 2."})]}),e.jsxs(f,{n:2,title:"Name + Business Identity",children:[e.jsxs("p",{children:[e.jsx("span",{className:"font-semibold text-slate-900",children:"What matters when choosing a name:"})," ","clear, easy to spell, easy to say out loud, and not already in use in your industry or state."]}),e.jsxs("div",{children:[e.jsx("p",{className:"font-semibold text-slate-900",children:"How to check availability:"}),e.jsxs("ul",{className:"mt-1 list-disc pl-5 space-y-1",children:[e.jsx("li",{children:"Search your state's business name database."}),e.jsx("li",{children:"Search the USPTO trademark database for conflicts."}),e.jsx("li",{children:"Check that the matching domain name is available."}),e.jsx("li",{children:"Search the name on Google and major social platforms."})]})]}),e.jsxs("div",{className:"rounded-md border border-amber-300 bg-amber-50 px-3 py-2",children:[e.jsx("p",{className:"font-semibold text-amber-900",children:"Common mistake"}),e.jsx("p",{className:"text-amber-900",children:"Picking a name that's already trademarked in your industry, or that's nearly identical to another registered business in your state. Both can force a rebrand later."})]})]}),e.jsxs(f,{n:3,title:"EIN / ITIN Decision Layer",children:[e.jsx("p",{children:"Pick the path that matches your situation. Only the matching checklist will appear."}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx("button",{type:"button",onClick:()=>r({...t,taxPath:"ein"}),className:"rounded-md px-3 py-1.5 text-sm border "+(a==="ein"?"bg-slate-900 text-white border-slate-900":"bg-white text-slate-700 border-slate-300 hover:border-slate-500"),children:"US person (EIN path)"}),e.jsx("button",{type:"button",onClick:()=>r({...t,taxPath:"itin"}),className:"rounded-md px-3 py-1.5 text-sm border "+(a==="itin"?"bg-slate-900 text-white border-slate-900":"bg-white text-slate-700 border-slate-300 hover:border-slate-500"),children:"Non-resident / no SSN (ITIN path)"})]}),a==="ein"&&e.jsxs("div",{className:"mt-2 rounded-md border border-slate-200 bg-slate-50 px-4 py-3",children:[e.jsx("p",{className:"font-semibold text-slate-900 mb-2",children:"EIN preparation checklist"}),e.jsxs("ul",{className:"list-disc pl-5 space-y-1",children:[e.jsx("li",{children:"Legal entity name (matches formation docs)"}),e.jsx("li",{children:"Responsible party name + SSN or ITIN"}),e.jsx("li",{children:"US mailing address"}),e.jsx("li",{children:"Entity type and reason for applying"}),e.jsx("li",{children:"Date business started + accounting year close month"}),e.jsx("li",{children:"Principal activity description"})]})]}),a==="itin"&&e.jsxs("div",{className:"mt-2 rounded-md border border-slate-200 bg-slate-50 px-4 py-3",children:[e.jsx("p",{className:"font-semibold text-slate-900 mb-2",children:"ITIN preparation checklist"}),e.jsxs("ul",{className:"list-disc pl-5 space-y-1",children:[e.jsx("li",{children:"Reason for applying (Form W-7 category)"}),e.jsxs("li",{children:["Valid passport ",e.jsx("span",{className:"text-slate-500",children:"or"})," ","two acceptable supporting documents"]}),e.jsx("li",{children:"Foreign and US addresses"}),e.jsx("li",{children:"Date and country of birth, country of citizenship"}),e.jsx("li",{children:"Federal tax return (unless exception applies)"}),e.jsx("li",{children:"Submission plan: CAA, IRS office, or mail"})]})]}),!a&&e.jsx("p",{className:"text-slate-500",children:"Pick a path above to reveal the matching checklist."})]}),e.jsxs(f,{n:4,title:"Business Registration",children:[e.jsx("p",{children:"Complete in this exact sequence:"}),e.jsxs("ol",{className:"list-decimal pl-5 space-y-1",children:[e.jsxs("li",{children:[e.jsx("span",{className:"font-semibold text-slate-900",children:"File formation documents"})," ","with your state (Articles of Organization for an LLC, etc.)."]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-semibold text-slate-900",children:"Confirm legal entity approval"})," ","— wait for the official certificate or filing receipt."]}),e.jsxs("li",{children:[e.jsx("span",{className:"font-semibold text-slate-900",children:"Store official documents safely"})," ","— keep digital copies in a single labeled folder."]})]}),e.jsx("p",{className:"text-slate-500",children:"Do not skip ahead to banking until you have approved formation documents in hand."})]}),e.jsxs(f,{n:5,title:"Banking Setup",children:[e.jsxs("div",{children:[e.jsx("p",{className:"font-semibold text-slate-900",children:"What banks require:"}),e.jsxs("ul",{className:"mt-1 list-disc pl-5 space-y-1",children:[e.jsx("li",{children:"Approved formation documents from your state"}),e.jsx("li",{children:"Your EIN confirmation letter (or ITIN, if applicable)"}),e.jsx("li",{children:"Government-issued ID"}),e.jsx("li",{children:"Operating Agreement (for LLCs / multi-member entities)"}),e.jsx("li",{children:"Initial deposit (varies by bank)"})]})]}),e.jsxs("div",{className:"rounded-md border border-amber-300 bg-amber-50 px-3 py-2",children:[e.jsx("p",{className:"font-semibold text-amber-900",children:"Mistakes to avoid"}),e.jsxs("ul",{className:"mt-1 list-disc pl-5 space-y-1 text-amber-900",children:[e.jsx("li",{children:"Mixing personal and business funds in one account."}),e.jsx("li",{children:"Using a personal debit card for recurring business charges."}),e.jsx("li",{children:"Choosing a bank with no online business tools — you'll fight it every month."})]})]})]})]})]}),a==="itin"&&e.jsx(D,{}),e.jsxs("section",{className:"mb-10 rounded-lg border border-slate-200 bg-white p-6",children:[e.jsx("h2",{className:"text-xl font-semibold text-slate-900 mb-3",children:"Where Most People Get Stuck"}),e.jsx("ul",{className:"space-y-2 text-sm text-slate-700",children:["Choosing the wrong structure too early — locking in an LLC before knowing if you'll actually earn income.","Applying for an EIN at the wrong stage — before the entity is formed, or under the wrong responsible party.","Mixing personal and business finances from day one — making bookkeeping and taxes painful later.","Skipping compliance requirements — annual reports, local licenses, sales tax registration.","When you eventually hire: keeping mediocre performers too long. The top performers and the clear problems both handle themselves. The real trap is the middle — people who aren't bad enough to let go but aren't good enough to move the business forward. Most owners carry too many of them out of discomfort, and it costs the whole team."].map(s=>e.jsxs("li",{className:"flex gap-3",children:[e.jsx("span",{className:"text-slate-400",children:"•"}),e.jsx("span",{className:"leading-relaxed",children:s})]},s))})]}),e.jsxs("section",{className:"mb-10 rounded-lg border-2 border-slate-900 bg-white p-6",children:[e.jsx("p",{className:"text-[10px] font-semibold uppercase tracking-widest text-slate-900 mb-2",children:"Your output"}),e.jsx("h2",{className:"text-xl font-semibold text-slate-900 mb-4",children:"Your Completed Setup Plan"}),e.jsxs("dl",{className:"space-y-3 text-sm",children:[e.jsxs("div",{className:"grid grid-cols-3 gap-3",children:[e.jsx("dt",{className:"text-slate-500 font-medium",children:"Business structure"}),e.jsx("dd",{className:"col-span-2 text-slate-900 font-semibold",children:i?.name??"— pending decision gate"})]}),e.jsxs("div",{className:"grid grid-cols-3 gap-3",children:[e.jsx("dt",{className:"text-slate-500 font-medium",children:"Tax ID path"}),e.jsx("dd",{className:"col-span-2 text-slate-900 font-semibold",children:a==="ein"?"EIN (US person)":a==="itin"?"ITIN (non-resident / no SSN)":"— pending Step 3"})]}),e.jsxs("div",{className:"grid grid-cols-3 gap-3",children:[e.jsx("dt",{className:"text-slate-500 font-medium",children:"Next 3 actions"}),e.jsx("dd",{className:"col-span-2",children:e.jsx("ol",{className:"list-decimal pl-5 space-y-1 text-slate-900",children:o.map(s=>e.jsx("li",{children:s},s))})})]})]}),e.jsxs("div",{className:"mt-5 flex flex-wrap gap-3",children:[e.jsx("button",{type:"button",onClick:()=>{C("ledgely-setup-plan.pdf",`LEDGELY — YOUR COMPLETED SETUP PLAN

Business structure: ${i?.name??"(not yet chosen)"}
${i?"Why: "+i.why:""}

Tax ID path: ${a==="ein"?"EIN (US person)":a==="itin"?"ITIN (non-resident / no SSN)":"(not yet chosen)"}

Next 3 actions:
${o.map((s,d)=>`${d+1}. ${s}`).join(`
`)}
`)},className:"inline-flex items-center justify-center rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800",children:"Download my plan"}),e.jsx("button",{type:"button",onClick:n,className:"inline-flex items-center justify-center rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50",children:"Reset answers"})]})]}),e.jsxs("section",{className:"mb-10",children:[e.jsx("h2",{className:"text-xl font-semibold text-slate-900 mb-1",children:"Downloadable Setup Pack"}),e.jsx("p",{className:"text-sm text-slate-600 mb-4",children:"These files come with purchase. Each one is ready to fill in and save alongside the system above."}),e.jsx("div",{className:"grid sm:grid-cols-2 gap-3",children:k.map(s=>e.jsxs("div",{className:"rounded-lg border border-slate-200 bg-white p-4 flex flex-col",children:[e.jsxs("div",{className:"flex items-start justify-between gap-2 mb-1",children:[e.jsx("h3",{className:"font-semibold text-slate-900 text-sm leading-snug",children:s.label}),e.jsx("span",{className:"flex-none text-[10px] font-medium uppercase tracking-wide text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded",children:s.tag})]}),e.jsx("p",{className:"text-xs text-slate-600 leading-relaxed flex-1 mb-3",children:s.description}),e.jsxs("span",{className:"inline-flex items-center gap-1.5 text-xs text-slate-400 font-medium",children:[e.jsx("svg",{className:"w-3.5 h-3.5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"})}),"Available after purchase"]})]},s.name))})]}),e.jsxs("section",{className:"mb-10 rounded-lg border border-slate-200 bg-slate-50 p-6",children:[e.jsx("p",{className:"text-xs font-semibold uppercase tracking-widest text-slate-500 mb-3",children:"Full access includes"}),e.jsx("ul",{className:"space-y-2",children:["5 downloadable files: checklists, templates, questionnaires, and a filled example","Startup Checklist — master ordered list from idea to open bank account","EIN + ITIN Preparation Questionnaires — pre-built, just fill in your details","Compliance Calendar — yearly deadlines template, pre-structured","Filled Setup Plan Example — completed sample so you know what yours should look like"].map(s=>e.jsxs("li",{className:"flex gap-3 text-sm text-slate-700 leading-relaxed",children:[e.jsx("span",{className:"text-slate-400 mt-0.5",children:"•"}),e.jsx("span",{children:s})]},s))}),e.jsx("p",{className:"mt-4 text-xs text-slate-500",children:"After purchase you'll land on a page where every file is ready to download immediately — no email required."})]}),e.jsxs("section",{className:"mb-10 rounded-lg border border-slate-900 bg-slate-900 text-slate-100 p-6",children:[e.jsx("p",{className:"text-xs font-medium uppercase tracking-widest text-slate-400 mb-2",children:"Get full access"}),e.jsx("h2",{className:"text-lg font-semibold text-white mb-2",children:"Ready to start your business setup?"}),e.jsx("p",{className:"text-sm text-slate-300 leading-relaxed mb-4",children:"Purchase the Business Starter System to unlock all 5 downloadable files and the complete guided workflow."}),e.jsx("a",{href:b,className:"inline-flex items-center justify-center rounded-md bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 hover:bg-slate-100",children:"Unlock full system →"}),e.jsx(N,{className:"mt-3"})]})]})]})}export{X as default};
