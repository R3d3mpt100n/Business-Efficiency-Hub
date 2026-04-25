export type FeaturedArticle = {
  slug: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
};

export const featuredArticles: FeaturedArticle[] = [
  {
    slug: "what-is-an-ein",
    title: "What is an EIN?",
    description:
      "A clear, plain-English explanation of the Employer Identification Number and what it's used for.",
    category: "EIN",
    readTime: "3 min read",
  },
  {
    slug: "who-needs-an-ein",
    title: "Who needs an EIN?",
    description:
      "A quick rundown of which small businesses are required to have an EIN, and which ones simply benefit from one.",
    category: "EIN",
    readTime: "3 min read",
  },
  {
    slug: "ein-application-preparation-checklist",
    title: "EIN Application Preparation Checklist (Business Tax ID)",
    description:
      "Organize the information you'll need before applying for an EIN with the IRS.",
    category: "EIN",
    readTime: "6 min read",
  },
];
