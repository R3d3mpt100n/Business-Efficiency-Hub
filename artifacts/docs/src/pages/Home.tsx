import { Link } from "wouter";
import { articles } from "@/data/articles";

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
            Simple systems that save small business owners time and money.
          </h1>
          <p className="mt-5 text-lg text-slate-600 max-w-2xl leading-relaxed">
            Practical, plain-English guides to the everyday problems that quietly cost
            small businesses money — and the simple systems you can put in place this
            week to fix them.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/docs"
              className="inline-flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-800 transition-colors"
            >
              Browse the guides
            </Link>
            <Link
              href={`/docs/${featured[0].slug}`}
              className="inline-flex items-center justify-center rounded-md border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-900 hover:bg-slate-50 transition-colors"
            >
              Read the first one
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16">
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
      </section>

      <section className="border-t border-slate-200 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-semibold text-slate-900 mb-3">
            What you'll find here
          </h2>
          <p className="text-slate-600 max-w-2xl mb-8 leading-relaxed">
            Every guide follows the same simple format so you can read it in a few
            minutes and act on it the same day.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { t: "The problem", d: "What's actually going wrong, in plain language." },
              { t: "Why it happens", d: "The real reason it keeps happening to owners." },
              { t: "The solution", d: "A clear step-by-step system you can run yourself." },
              { t: "Quick recap", d: "An actionable summary you can come back to." },
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
