import { Link } from "wouter";
import { articles } from "@/data/articles";
import { proSystems, KEY_BENEFITS } from "@/data/proSystems";
import { STRIPE_CHECKOUT_URL } from "@/data/checkout";

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

const MILESTONES = [
  {
    n: 1,
    label: "EIN Decision",
    badge: "Start here",
    description: "Find out if your business actually needs an EIN.",
    href: "/docs/who-needs-an-ein",
    cta: "Begin step 1",
  },
  {
    n: 2,
    label: "EIN Preparation",
    badge: "Next milestone",
    description: "Gather every detail you need before you apply.",
    href: "/docs/ein-application-preparation-checklist",
    cta: "Open the checklist",
  },
  {
    n: 3,
    label: "Business Setup",
    badge: "Register your business",
    description: "Form your entity, organize documents, stay compliant.",
    href: "/docs/basic-compliance-checklist",
    cta: "Set up the business",
  },
  {
    n: 4,
    label: "Financial Tracking",
    badge: "Understand your money",
    description: "Track expenses and see your real monthly profit.",
    href: "/tools/expenses",
    cta: "Open the tracker",
  },
  {
    n: 5,
    label: "Invoice System",
    badge: "Start getting paid",
    description: "Send a clean, professional invoice and get paid faster.",
    href: "/tools/invoice",
    cta: "Open the invoice tool",
  },
  {
    n: 6,
    label: "Templates",
    badge: "Final setup tools",
    description: "Grab ready-to-use templates and checklists to lock it in.",
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

const PRO_PITCH: Record<string, { headline: string }> = {
  "business-starter": {
    headline:
      "Go from idea to a legally formed business without figuring it out step by step on your own.",
  },
  "financial-control": {
    headline:
      "Stop guessing your profit. Know exactly where your money goes every month.",
  },
  "client-invoice": {
    headline:
      "Turn invoicing into a system so you stop losing track of payments and clients.",
  },
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

      {/* WHY LEDGELY EXISTS */}
      <section className="border-b border-slate-200 bg-white">
        <div className="max-w-5xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-500 mb-2">
                Why this matters
              </p>
              <h2 className="text-2xl font-semibold text-slate-900">
                Why Ledgely Exists
              </h2>
            </div>
            <div className="md:col-span-2 space-y-3 text-slate-700 leading-relaxed">
              <p>
                Most small businesses fail because of two things: poor financial
                clarity and a messy setup structure.
              </p>
              <p>
                Ledgely simplifies setup, tracking, and documentation into one
                connected system — so the basics are no longer a guessing game.
              </p>
              <p>
                Everything is designed to move you from{" "}
                <span className="font-semibold text-slate-900">confusion</span>{" "}
                to{" "}
                <span className="font-semibold text-slate-900">control</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* START HERE — TIER 1: TOP PRIORITY */}
      <section className="border-b-2 border-slate-900 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[10px] font-semibold uppercase tracking-widest text-white bg-slate-900 px-2 py-0.5 rounded">
                Step 1
              </span>
              <span className="text-xs font-medium uppercase tracking-widest text-slate-500">
                Top priority
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">
              Recommended Path (Follow in Order)
            </h2>
            <p className="mt-3 text-slate-600 max-w-2xl leading-relaxed">
              Most users start here to go from idea &rarr; registered business
              &rarr; first invoice. Each milestone unlocks the next.
            </p>
          </div>

          <ol className="space-y-3">
            {MILESTONES.map((m, i) => {
              const next = MILESTONES[i + 1];
              const isLast = i === MILESTONES.length - 1;
              return (
                <li
                  key={m.n}
                  className="rounded-lg border border-slate-200 bg-white p-5 hover:border-slate-400 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-none flex flex-col items-center">
                      <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-slate-900 text-white text-sm font-semibold">
                        {m.n}
                      </span>
                      {!isLast && (
                        <span className="mt-1 w-px flex-1 bg-slate-200 min-h-[24px]" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <Link
                          href={m.href}
                          className="font-semibold text-slate-900 hover:underline underline-offset-2"
                        >
                          Step {m.n}: {m.label}
                        </Link>
                        <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-700 bg-slate-100 border border-slate-200 px-2 py-0.5 rounded">
                          {m.badge}
                        </span>
                      </div>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {m.description}
                      </p>
                      <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1">
                        <Link
                          href={m.href}
                          className="text-sm font-medium text-slate-900 underline-offset-2 hover:underline"
                        >
                          {m.cta} &rarr;
                        </Link>
                        {next && (
                          <span className="text-xs text-slate-500">
                            Then unlocks: Step {next.n} &middot; {next.label}
                          </span>
                        )}
                        {!next && (
                          <span className="text-xs font-medium text-slate-700">
                            You've completed the recommended path.
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

      {/* TIER 2: TOOLS — UTILITY LAYER */}
      <section className="border-b border-slate-200 bg-white">
        <div className="max-w-5xl mx-auto px-6 py-14">
          <div className="mb-6 flex items-end justify-between gap-4 flex-wrap">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-500 mb-2">
                Utility layer &middot; In-browser
              </p>
              <h2 className="text-2xl font-semibold text-slate-900">Tools</h2>
              <p className="mt-2 text-slate-600 max-w-2xl leading-relaxed">
                Free, no-signup tools you can use right now to put what you've
                learned into action.
              </p>
            </div>
            <Link
              href="/tools"
              className="text-sm font-medium text-slate-600 hover:text-slate-900"
            >
              View all tools &rarr;
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { slug: "budget", title: "Monthly Profit Estimator", desc: "Know your real monthly profit after expenses in seconds." },
              { slug: "expenses", title: "Business Expense Tracker", desc: "See exactly where your money goes and what to cut immediately." },
              { slug: "forecast", title: "Cash Flow Planner", desc: "Predict future cash shortages before they happen." },
              { slug: "invoice", title: "Get Paid Invoice System", desc: "Send professional invoices that make clients take payment seriously." },
            ].map((t) => (
              <Link
                key={t.slug}
                href={`/tools/${t.slug}`}
                className="block rounded-lg border border-slate-200 p-5 hover:border-slate-400 transition-colors"
              >
                <h3 className="font-semibold text-slate-900">{t.title}</h3>
                <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                  {t.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TIER 3: TEMPLATES — SUPPORT LAYER */}
      <section className="border-b border-slate-200 bg-white">
        <div className="max-w-5xl mx-auto px-6 py-12">
          <div className="rounded-lg border border-dashed border-slate-300 p-6 flex items-start justify-between gap-6 flex-wrap">
            <div className="min-w-0">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-500 mb-2">
                Support layer
              </p>
              <h2 className="text-xl font-semibold text-slate-900">Templates</h2>
              <p className="mt-1 text-slate-600 max-w-2xl text-sm leading-relaxed">
                Copy-paste checklists, CSV starters, and document templates to
                support every step of the recommended path.
              </p>
            </div>
            <Link
              href="/templates"
              className="inline-flex items-center justify-center rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-900 hover:bg-slate-50"
            >
              Browse templates &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* TIER 4: PRO SYSTEMS — UPGRADE LAYER */}
      <section className="border-b border-slate-200 bg-slate-900 text-slate-100">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-900 bg-white px-2 py-0.5 rounded">
                Pro
              </span>
              <span className="text-xs font-medium uppercase tracking-widest text-slate-400">
                Upgrade layer &middot; Preview
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">
              Pro Systems
            </h2>
            <p className="mt-3 text-slate-300 max-w-2xl leading-relaxed">
              When the free path isn't enough, these structured kits combine
              everything into complete, done-for-you systems for a specific area
              of your business.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {proSystems.map((p) => {
              const pitch = PRO_PITCH[p.slug];
              const benefits = KEY_BENEFITS[p.slug] ?? [];
              return (
                <article
                  key={p.slug}
                  className="flex flex-col rounded-lg border border-slate-700 bg-slate-800 p-5"
                >
                  <h3 className="font-semibold text-white">
                    {p.shortTitle} System (Pro)
                  </h3>
                  <p className="mt-2 text-sm text-slate-300 leading-relaxed font-medium">
                    {pitch?.headline ?? p.tagline}
                  </p>

                  <details className="mt-4 group rounded-md border border-slate-700 bg-slate-900/60 open:bg-slate-900/80 transition-colors">
                    <summary className="cursor-pointer list-none flex items-center justify-between px-3 py-2 text-sm font-medium text-slate-100 select-none">
                      <span>Key Benefits</span>
                      <span className="text-slate-400 text-xs transition-transform duration-200 group-open:rotate-180">
                        &#9662;
                      </span>
                    </summary>
                    <ul className="px-3 pb-3 pt-1 space-y-1.5">
                      {benefits.map((b) => (
                        <li
                          key={b}
                          className="flex gap-2 text-sm text-slate-300 leading-relaxed"
                        >
                          <span className="text-slate-500">&bull;</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </details>

                  <div className="mt-5 pt-4 border-t border-slate-700">
                    <a
                      href={STRIPE_CHECKOUT_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full rounded-md bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-100"
                    >
                      Unlock full system &rarr;
                    </a>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-6">
            <Link
              href="/pro"
              className="inline-flex items-center justify-center rounded-md border border-slate-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-800"
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
