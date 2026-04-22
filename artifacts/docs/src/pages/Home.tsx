import { Link } from "wouter";
import { articles } from "@/data/articles";

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

export default function Home() {
  const featured = articles.slice(0, 3);

  return (
    <div>
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
              href="/docs"
              className="inline-flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-800 transition-colors"
            >
              Browse the docs
            </Link>
            <Link
              href="/tools"
              className="inline-flex items-center justify-center rounded-md border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-900 hover:bg-slate-50 transition-colors"
            >
              Open the tools
            </Link>
            <Link
              href="/templates"
              className="inline-flex items-center justify-center rounded-md border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-900 hover:bg-slate-50 transition-colors"
            >
              Get templates
            </Link>
          </div>
        </div>
      </section>

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

      <section className="border-t border-slate-200 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-semibold text-slate-900 mb-3">
            How every guide is structured
          </h2>
          <p className="text-slate-600 max-w-2xl mb-8 leading-relaxed">
            Pages are written so you can extract an answer in seconds and act on
            it the same day.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { t: "Direct answer", d: "A 2–3 sentence answer at the top of every page." },
              { t: "Simple explanation", d: "Plain-English context, no jargon." },
              { t: "Step-by-step", d: "Numbered actions you can follow today." },
              { t: "Checklist or summary", d: "A quick recap or interactive checklist." },
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
