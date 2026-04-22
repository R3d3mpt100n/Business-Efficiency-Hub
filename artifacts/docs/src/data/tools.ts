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
      "Know your real monthly profit after expenses in seconds.",
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
      "Send professional invoices that make clients take payment seriously.",
    relatedSlugs: [
      "how-to-track-business-expenses",
      "simple-cash-flow-overview",
    ],
  },
  {
    slug: "expenses",
    title: "Business Expense Tracker",
    description:
      "See exactly where your money goes and what to cut immediately.",
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
      "Predict future cash shortages before they happen.",
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
