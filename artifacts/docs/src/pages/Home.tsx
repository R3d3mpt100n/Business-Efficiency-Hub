import { Link } from "wouter";
import { articles } from "@/data/articles";
import { proSystems } from "@/data/proSystems";

const CLUSTERS = [
  {
    name: "EIN",
    description: "Understand and prepare for the federal business tax ID.",
    href: "/docs?cat=EIN",
    catalogSlug: "what-is-an-ein",
  },
  {
    name: "ITIN",
    description: "The individual tax ID for those without an SSN.",
    href: "/docs?cat=ITIN",
    catalogSlug: "what-is-an-itin",
  },
  {
    name: "Business Setup",
    description: "Register, organize documents, and stay compliant.",
    href: "/docs?cat=Business%20Setup",
    catalogSlug: "how-to-register-a-small-business",
  },
  {
    name: "Financial Systems",
    description: "Track expenses, understand profit, and manage cash flow.",
    href: "/docs?cat=Financial%20Systems",
    catalogSlug: "how-to-track-business-expenses",
  },
];

const START_HERE_STEPS = [
  {
    n: 1,
    label: "EIN Decision",
    description: "Find out if your business actually needs an EIN.",
    href: "/docs/who-needs-an-ein",
    cta: "Do I need an EIN?",
  },
  {
    n: 2,
    label: "EIN Preparation Checklist",
    description: "Gather every detail you need before applying.",
    href: "/docs/ein-application-preparation-checklist",
    cta: "Open the checklist",
  },
  {
    n: 3,
    label: "Business Setup Checklist",
    description: "Register your business, organize documents, stay compliant.",
    href: "/docs/basic-compliance-checklist",
    cta: "Set up the business",
  },
  {
    n: 4,
    label: "Financial Tracking Tools",
    description: "Track expenses and estimate your monthly profit.",
    href: "/tools/expenses",
    cta: "Open the tracker",
  },
  {
    n: 5,
    label: "Invoice Generator",
    description: "Send a clean, professional invoice and get paid faster.",
    href: "/tools/invoice",
    cta: "Open the invoice tool",
  },
  {
    n: 6,
    label: "Templates",
    description: "Grab ready-to-use templates and checklists to keep moving.",
    href: "/templates",
    cta: "Browse templates",
  },
];

const PROGRESS_PATH = [
  { label: "Beginner", href: "/docs" },
  { label: "Setup", href: "/docs?cat=Business%20Setup" },
  { label: "Tools", href: "/tools" },
  { label: "Templates", href: "/templates" },
  { label: "Pro Systems", href: "/pro" },
];

const PRO_BENEFITS: Record<string, string[]> = {
  "business-starter": [
    "Go from idea to legally formed business with one organized path",
    "Combined EIN + ITIN advanced checklist in one place",
    "Pre-filled operating agreement and setup templates",
  ],
  "financial-control": [
    "See your real profit, not just totals in a spreadsheet",
    "6-month rolling cash flow forecast built in",
    "Monthly review checklist so nothing slips through",
  ],
  "client-invoice": [
    "Get paid faster with a structured reminder workflow",
    "Track every client, payment, and project in one sheet",
    "Year-end tax prep is painless because everything is organized",
  ],
};

export default function Home() {
  const featured = articles.slice(0, 3);

  return (
    <div>
      {/* HERO */}
      <section className="border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6 py-16 sm:py-24">
          <p className="text-xs font-medium tracking-widest uppercase text-slate-500 mb-4">
            Small business systems &amp; efficiency
          </p>
          <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-slate-900 leading-tight max-w-3xl">
            Clear answers, simple tools, and templates for small business owners.
          </h1>
          <p className="mt-5 text-lg text-slate-600 max-w-2xl leading-relaxed">
            Ledgely is a focused library of plain-English documentation, free
            in-browser tools, and ready-to-use templates for tax IDs, business
            setup, and basic financial systems.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/docs/who-needs-an-ein"
              className="inline-flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-800 transition-colors"
            >
              Start here &rarr;
            </Link>
            <Link
              href="/docs"
              className="inline-flex items-center justify-center rounded-md border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-900 hover:bg-slate-50 transition-colors"
            >
              Browse the docs
            </Link>
            <Link
              href="/tools"
              className="inline-flex items-center justify-center rounded-md border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-900 hover:bg-slate-50 transition-colors"
            >
              Open the tools
            </Link>
          </div>

          {/* PROGRESS PATH */}
          <div className="mt-10">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-500 mb-3">
              Your progression
            </p>
            <ol className="flex items-center flex-wrap gap-y-2 text-sm">
              {PROGRESS_PATH.map((step, i) => (
                <li key={step.label} className="flex items-center">
                  <Link
                    href={step.href}
                    className="px-2.5 py-1 rounded-md border border-slate-200 text-slate-700 hover:border-slate-400 hover:text-slate-900"
                  >
                    {step.label}
                  </Link>
                  {i < PROGRESS_PATH.length - 1 && (
                    <span className="mx-2 text-slate-400">&rarr;</span>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* START HERE GUIDED FLOW */}
      <section className="border-b border-slate-200 bg-white">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="mb-8">
            <p className="text-xs font-medium uppercase tracking-widest text-slate-500 mb-2">
              Guided workflow
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">
              Start Here: Build Your Business Step by Step
            </h2>
            <p className="mt-3 text-slate-600 max-w-2xl leading-relaxed">
              Follow these steps in order. Each one links straight to the next
              so you go from "do I need an EIN?" to a working financial system
              without getting lost.
            </p>
          </div>

          <ol className="space-y-3">
            {START_HERE_STEPS.map((s, i) => {
              const next = START_HERE_STEPS[i + 1];
              return (
                <li
                  key={s.n}
                  className="rounded-lg border border-slate-200 p-5 hover:border-slate-400 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex-none mt-0.5 inline-flex items-center justify-center w-8 h-8 rounded-full bg-slate-900 text-white text-sm font-medium">
                      {s.n}
                    </span>
                    <div className="flex-1 min-w-0">
                      <Link
                        href={s.href}
                        className="font-semibold text-slate-900 hover:underline underline-offset-2"
                      >
                        {s.label}
                      </Link>
                      <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                        {s.description}
                      </p>
                      <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1">
                        <Link
                          href={s.href}
                          className="text-sm font-medium text-slate-900 underline-offset-2 hover:underline"
                        >
                          {s.cta} &rarr;
                        </Link>
                        {next && (
                          <span className="text-xs text-slate-500">
                            Then: {next.label}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* PRO SYSTEMS PREVIEW */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-900 bg-slate-200 px-2 py-0.5 rounded">
                Pro
              </span>
              <span className="text-xs font-medium uppercase tracking-widest text-slate-500">
                Preview
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">
              Pro Systems
            </h2>
            <p className="mt-3 text-slate-600 max-w-2xl leading-relaxed">
              When you're ready to go beyond individual guides and tools, these
              structured kits combine related material into complete,
              done-for-you systems.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {proSystems.map((p) => (
              <article
                key={p.slug}
                className="flex flex-col rounded-lg border border-slate-200 bg-white p-5"
              >
                <h3 className="font-semibold text-slate-900">{p.shortTitle} System (Pro)</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {p.tagline}
                </p>
                <ul className="mt-4 space-y-1.5">
                  {(PRO_BENEFITS[p.slug] ?? []).map((b) => (
                    <li
                      key={b}
                      className="flex gap-2 text-sm text-slate-700 leading-relaxed"
                    >
                      <span className="text-slate-400">&bull;</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 pt-4 border-t border-slate-200 flex items-center justify-between gap-3">
                  <Link
                    href={`/pro/${p.slug}`}
                    className="text-sm font-medium text-slate-900 underline-offset-2 hover:underline"
                  >
                    See what's included &rarr;
                  </Link>
                  <button
                    type="button"
                    disabled
                    className="text-xs font-medium text-slate-400 border border-slate-200 rounded px-2 py-1 cursor-not-allowed"
                    title="Checkout isn't live yet"
                  >
                    Unlock full system
                  </button>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-6">
            <Link
              href="/pro"
              className="inline-flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-800"
            >
              Browse all Pro Systems
            </Link>
          </div>
        </div>
      </section>

      {/* CLUSTERS */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold text-slate-900 mb-2">
          Documentation clusters
        </h2>
        <p className="text-slate-600 mb-8 max-w-2xl">
          Each cluster groups related answers so you can move from a single
          question to a full understanding.
        </p>
        <div className="grid sm:grid-cols-2 gap-5">
          {CLUSTERS.map((c) => (
            <Link
              key={c.name}
              href={`/docs/${c.catalogSlug}`}
              className="block rounded-lg border border-slate-200 p-5 hover:border-slate-400 hover:shadow-sm transition-all"
            >
              <p className="text-xs font-medium uppercase tracking-widest text-slate-500 mb-1">
                Cluster
              </p>
              <h3 className="text-lg font-semibold text-slate-900 mb-1">
                {c.name}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {c.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* LATEST GUIDES */}
      <section className="border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="flex items-end justify-between mb-8">
            <h2 className="text-2xl font-semibold text-slate-900">Latest guides</h2>
            <Link href="/docs" className="text-sm font-medium text-slate-600 hover:text-slate-900">
              View all
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featured.map((a) => (
              <Link
                key={a.slug}
                href={`/docs/${a.slug}`}
                className="block rounded-lg border border-slate-200 p-5 hover:border-slate-400 hover:shadow-sm transition-all"
              >
                <p className="text-xs font-medium text-slate-500 mb-2">{a.category}</p>
                <h3 className="font-semibold text-slate-900 leading-snug mb-2">
                  {a.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">{a.description}</p>
                <p className="mt-4 text-xs text-slate-500">{a.readTime}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* HOW EVERY GUIDE IS STRUCTURED */}
      <section className="border-t border-slate-200 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-semibold text-slate-900 mb-3">
            How every guide is structured
          </h2>
          <p className="text-slate-600 max-w-2xl mb-8 leading-relaxed">
            Pages are written so you can extract an answer in seconds and act on
            it the same day.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { t: "Direct answer", d: "A 1–2 sentence answer at the top of every page." },
              { t: "Simple explanation", d: "Plain-English context in bullet points." },
              { t: "Step-by-step", d: "Numbered actions you can follow today." },
              { t: "Checklist or summary", d: "A quick recap or interactive checklist." },
              { t: "Next step", d: "A direct link to the matching tool, template, or guide." },
            ].map((b) => (
              <div key={b.t} className="rounded-lg bg-white border border-slate-200 p-5">
                <h3 className="font-semibold text-slate-900 mb-1">{b.t}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
