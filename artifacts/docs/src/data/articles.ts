export type Article = {
  slug: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  problem: string;
  whyItHappens: string;
  solution: { step: string; detail: string }[];
  tools: { name: string; note: string }[];
  summary: string[];
};

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
];

export function findArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
