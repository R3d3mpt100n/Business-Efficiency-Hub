export type Tool = {
  slug: string;
  title: string;
  description: string;
  relatedSlugs?: string[];
};

export const tools: Tool[] = [
  {
    slug: "budget",
    title: "Monthly Profit Estimator",
    description:
      "See how much profit you actually keep each month after expenses — and where your margin really stands.",
    relatedSlugs: [
      "profit-and-loss-basics",
      "how-small-businesses-lose-money-without-noticing",
      "how-to-track-business-expenses",
    ],
  },
  {
    slug: "invoice",
    title: "Get Paid Invoice System",
    description:
      "Send clear, professional invoices in minutes so clients pay you faster — no design or accounting skills needed.",
    relatedSlugs: [
      "how-to-track-business-expenses",
      "simple-cash-flow-overview",
    ],
  },
  {
    slug: "expenses",
    title: "Business Expense Tracker",
    description:
      "Know exactly where your money goes each month so you can cut waste and protect your profit.",
    relatedSlugs: [
      "how-to-track-business-expenses",
      "profit-and-loss-basics",
      "how-small-businesses-lose-money-without-noticing",
    ],
  },
  {
    slug: "forecast",
    title: "Cash Flow Planner",
    description:
      "See where your cash will be in the months ahead so you can plan, save, and avoid shortfalls.",
    relatedSlugs: [
      "simple-cash-flow-overview",
      "profit-and-loss-basics",
      "how-to-track-business-expenses",
    ],
  },
];

export function findTool(slug: string): Tool | undefined {
  return tools.find((t) => t.slug === slug);
}
