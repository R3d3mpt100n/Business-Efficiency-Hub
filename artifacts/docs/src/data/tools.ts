export type Tool = {
  slug: string;
  title: string;
  description: string;
  relatedSlugs?: string[];
};

export const tools: Tool[] = [
  {
    slug: "budget",
    title: "Budgeting Tool",
    description:
      "Enter your monthly income and expenses to see your remaining profit and savings margin.",
    relatedSlugs: [
      "profit-and-loss-basics",
      "how-small-businesses-lose-money-without-noticing",
      "how-to-track-business-expenses",
    ],
  },
  {
    slug: "invoice",
    title: "Invoice Generator",
    description:
      "Fill in client and service details to generate a clean, printable invoice.",
    relatedSlugs: [
      "how-to-track-business-expenses",
      "simple-cash-flow-overview",
    ],
  },
  {
    slug: "expenses",
    title: "Expense Categorizer",
    description:
      "Add expenses with a category to see your totals broken down in real time.",
    relatedSlugs: [
      "how-to-track-business-expenses",
      "profit-and-loss-basics",
      "how-small-businesses-lose-money-without-noticing",
    ],
  },
  {
    slug: "forecast",
    title: "Cash Flow Forecast",
    description:
      "Plug in expected monthly income and expenses to project profit or loss.",
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
