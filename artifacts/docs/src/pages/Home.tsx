import { useState } from "react";
import { Link } from "wouter";
import { articles } from "@/data/articles";

type HomeProCardDef = {
  slug: string;
  title: string;
  outcome: string;
  meta: string;
  href: string;
  accentClass: string;
  badgeClass: string;
  statusLabel: string;
  included: string[];
};

const HOME_PRO_CARDS: HomeProCardDef[] = [
  {
    slug: "business-starter",
    title: "Business Starter",
    outcome: "Idea → legally registered business",
    meta: "4 phases  ·  EIN + setup + compliance",
    href: "/pro/business-starter",
    accentClass: "border-t-blue-500",
    badgeClass: "bg-blue-50 text-blue-700 border-blue-200",
    statusLabel: "Setup",
    included: ["Structure decision tool", "EIN checklist", "Operating agreement", "Compliance calendar"],
  },
  {
    slug: "financial-control",
    title: "Financial Control",
    outcome: "Monthly financial clarity",
    meta: "3 phases  ·  calculator + templates",
    href: "/pro/financial-control",
    accentClass: "border-t-emerald-500",
    badgeClass: "bg-emerald-50 text-emerald-700 border-emerald-200",
    statusLabel: "Finance",
    included: ["Profit calculator", "Expense tracker", "P&L template", "Review system"],
  },
  {
    slug: "client-invoice",
    title: "Client & Invoice",
    outcome: "No missed payments",
    meta: "3 phases  ·  invoice + tracking system",
    href: "/pro/client-invoice",
    accentClass: "border-t-amber-500",
    badgeClass: "bg-amber-50 text-amber-700 border-amber-200",
    statusLabel: "Clients",
    included: ["Invoice builder", "Tracking sheet", "Follow-up templates", "Escalation timeline"],
  },
];

function HomeProCard({ card }: { card: HomeProCardDef }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`bg-white rounded-xl border-t-4 border border-slate-200 ${card.accentClass} shadow-sm flex flex-col`}>
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="text-sm font-semibold text-slate-900 leading-snug">{card.title}</h3>
          <span className={`flex-none text-[10px] font-semibold uppercase tracking-widest border rounded px-2 py-0.5 ${card.badgeClass}`}>
            {card.statusLabel}
          </span>
        </div>
        <p className="text-sm text-slate-500 mb-2 leading-snug">{card.outcome}</p>
        <p className="text-xs text-slate-400 mb-4">{card.meta}</p>

        <div className="mb-4 rounded-lg border border-slate-200 overflow-hidden">
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="w-full flex items-center justify-between px-3 py-2 text-xs font-medium text-slate-600 bg-slate-50 hover:bg-slate-100 transition-colors"
          >
            <span>What's included</span>
            <svg className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {open && (
            <ul className="px-3 py-2.5 space-y-1.5 bg-white border-t border-slate-200">
              {card.included.map((item) => (
                <li key={item} className="flex items-center gap-2 text-xs text-slate-600">
                  <span className="w-1 h-1 rounded-full bg-slate-400 flex-none" />
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="mt-auto">
          <Link
            href={card.href}
            className="inline-flex items-center justify-center w-full rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800 transition-colors"
          >
            Open System
          </Link>
        </div>
      </div>
    </div>
  );
}

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

      {/* FOUNDER NOTE */}
      <section className="border-b border-slate-200 bg-white">
        <div className="max-w-5xl mx-auto px-6 py-12">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-500 mb-3">
            A note from the founder
          </p>
          <blockquote className="border-l-2 border-amber-400 pl-5 max-w-2xl">
            <p className="text-slate-700 leading-relaxed">
              I built Ledgely because every time I looked up something simple — like
              how to get an EIN or what documents to keep on file — I either got a
              law firm blog trying to sell me services, or a Reddit thread from
              2019 with conflicting answers.
            </p>
            <p className="mt-4 text-slate-700 leading-relaxed">
              Ledgely is the resource I wished existed. Plain answers, correct
              order of operations, no agenda.
            </p>
            <footer className="mt-4 text-sm text-slate-500">— The Ledgely Team</footer>
          </blockquote>
        </div>
      </section>

      {/* TRUST SIGNAL — STATS BAR */}
      <section className="border-b border-slate-200 bg-white">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <p className="text-center text-xs sm:text-sm text-slate-500">
            <span>16 free guides</span>
            <span className="mx-2 sm:mx-3 text-slate-300">·</span>
            <span>4 free tools</span>
            <span className="mx-2 sm:mx-3 text-slate-300">·</span>
            <span>3 ready-to-use templates</span>
            <span className="mx-2 sm:mx-3 text-slate-300">·</span>
            <span>No account needed</span>
          </p>
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
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="mb-8 flex items-end justify-between gap-4 flex-wrap">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-900 bg-slate-200 px-2 py-0.5 rounded">
                  Pro
                </span>
                <span className="text-xs font-medium uppercase tracking-widest text-slate-500">
                  Upgrade layer
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">
                Pro Systems
              </h2>
              <p className="mt-2 text-slate-600 max-w-xl leading-relaxed">
                Structured, done-for-you execution kits. Each system combines
                guides, tools, and templates into one complete workflow.
              </p>
            </div>
            <Link
              href="/pro"
              className="text-sm font-medium text-slate-600 hover:text-slate-900"
            >
              Browse all systems &rarr;
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {HOME_PRO_CARDS.map((card) => (
              <HomeProCard key={card.slug} card={card} />
            ))}
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

      {/* WHY PEOPLE USE LEDGELY */}
      <section className="border-t border-slate-200 bg-white">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-semibold text-slate-900 mb-3">
            Why people use Ledgely
          </h2>
          <p className="text-slate-600 max-w-2xl mb-8 leading-relaxed">
            What makes Ledgely different from the usual small business advice you'll find online.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                t: "Plain English, no jargon",
                d: "Every guide is written to give you a direct answer in the first two sentences — no filler, no upselling you on software.",
              },
              {
                t: "Free tools that work in your browser",
                d: "No account, no download, no signup. Open a tool and use it immediately.",
              },
              {
                t: "Built around the real order of operations",
                d: "Most business setup advice skips steps or gets the order wrong. Ledgely follows the actual sequence — structure first, EIN second, bank account third.",
              },
            ].map((b) => (
              <div
                key={b.t}
                className="rounded-lg border border-slate-200 bg-white p-5"
              >
                <h3 className="font-semibold text-slate-900 mb-2 leading-snug">
                  {b.t}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">{b.d}</p>
              </div>
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
