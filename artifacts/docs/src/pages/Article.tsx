import { Link, useRoute } from "wouter";
import { articles, findArticle } from "@/data/articles";

export default function Article() {
  const [, params] = useRoute("/docs/:slug");
  const slug = params?.slug ?? "";
  const article = findArticle(slug);

  if (!article) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-20 text-center">
        <h1 className="text-2xl font-semibold text-slate-900">Guide not found</h1>
        <p className="mt-2 text-slate-600">
          The guide you're looking for doesn't exist.
        </p>
        <Link
          href="/docs"
          className="inline-block mt-6 text-sm font-medium text-slate-900 underline"
        >
          Back to all guides
        </Link>
      </div>
    );
  }

  const others = articles.filter((a) => a.slug !== article.slug).slice(0, 2);

  return (
    <article className="max-w-3xl mx-auto px-6 py-12">
      <Link
        href="/docs"
        className="text-sm text-slate-500 hover:text-slate-900"
      >
        &larr; Back to docs
      </Link>

      <header className="mt-6 mb-10 pb-8 border-b border-slate-200">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs font-medium uppercase tracking-widest text-slate-500">
            {article.category}
          </span>
          <span className="text-xs text-slate-400">&middot;</span>
          <span className="text-xs text-slate-500">{article.readTime}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 leading-tight">
          {article.title}
        </h1>
        <p className="mt-4 text-lg text-slate-600 leading-relaxed">
          {article.description}
        </p>
      </header>

      <Section title="The problem">
        <p className="text-slate-700 leading-relaxed">{article.problem}</p>
      </Section>

      <Section title="Why it happens">
        <p className="text-slate-700 leading-relaxed">{article.whyItHappens}</p>
      </Section>

      <Section title="The solution">
        <ol className="space-y-5">
          {article.solution.map((s, i) => (
            <li key={i} className="flex gap-4">
              <span className="flex-none mt-0.5 inline-flex items-center justify-center w-7 h-7 rounded-full bg-slate-900 text-white text-sm font-medium">
                {i + 1}
              </span>
              <div>
                <h3 className="font-semibold text-slate-900">{s.step}</h3>
                <p className="mt-1 text-slate-700 leading-relaxed">{s.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      {article.tools.length > 0 && (
        <Section title="Tools that help">
          <ul className="space-y-3">
            {article.tools.map((t) => (
              <li
                key={t.name}
                className="rounded-md border border-slate-200 p-4"
              >
                <p className="font-medium text-slate-900">{t.name}</p>
                <p className="mt-1 text-sm text-slate-600">{t.note}</p>
              </li>
            ))}
          </ul>
          {/* Affiliate links area — reserved for future tool recommendations. */}
          <div
            data-section="affiliate-links"
            className="mt-4 text-xs text-slate-400"
            aria-hidden
          />
        </Section>
      )}

      <Section title="Quick recap">
        <ul className="space-y-2">
          {article.summary.map((s, i) => (
            <li key={i} className="flex gap-3 text-slate-700">
              <span className="text-slate-400">&bull;</span>
              <span className="leading-relaxed">{s}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* Resources / tools placeholder — reserved for future expansion. */}
      <div data-section="resources-placeholder" aria-hidden />

      {others.length > 0 && (
        <section className="mt-16 pt-10 border-t border-slate-200">
          <h2 className="text-sm font-medium uppercase tracking-widest text-slate-500 mb-5">
            Keep reading
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/docs/${o.slug}`}
                className="block rounded-lg border border-slate-200 p-4 hover:border-slate-400 transition-colors"
              >
                <p className="text-xs text-slate-500 mb-1">{o.category}</p>
                <h3 className="font-semibold text-slate-900 leading-snug">
                  {o.title}
                </h3>
              </Link>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-semibold text-slate-900 mb-3">{title}</h2>
      {children}
    </section>
  );
}
