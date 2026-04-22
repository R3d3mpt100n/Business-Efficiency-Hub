export type Tool = {
  slug: string;
  title: string;
  description: string;
};

export const tools: Tool[] = [
  {
    slug: "budget",
    title: "Budgeting Tool",
    description:
      "Enter your monthly income and expenses to see your remaining profit and savings margin.",
  },
  {
    slug: "invoice",
    title: "Invoice Generator",
    description:
      "Fill in client and service details to generate a clean, printable invoice.",
  },
  {
    slug: "expenses",
    title: "Expense Categorizer",
    description:
      "Add expenses with a category to see your totals broken down in real time.",
  },
  {
    slug: "forecast",
    title: "Cash Flow Forecast",
    description:
      "Plug in expected monthly income and expenses to project profit or loss.",
  },
];
