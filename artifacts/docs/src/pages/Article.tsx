import { useEffect, useState } from "react";
import { Link, useRoute } from "wouter";
import {
  articles,
  articlesBySlugs,
  findArticle,
  LEGAL_DISCLAIMER,
  type ChecklistGroup,
} from "@/data/articles";

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

  const related =
    articlesBySlugs(article.relatedSlugs).length > 0
      ? articlesBySlugs(article.relatedSlugs)
      : articles.filter((a) => a.slug !== article.slug).slice(0, 2);

  return (
    <article className="max-w-3xl mx-auto px-6 py-12">
      <Link href="/docs" className="text-sm text-slate-500 hover:text-slate-900">
        &larr; Back to docs
      </Link>

      <header className="mt-6 mb-10 pb-8 border-b border-slate-200">
        <div className="flex items-center gap-3 mb-3 flex-wrap">
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

      {article.directAnswer && (
        <div className="mb-10 rounded-lg border-l-4 border-slate-900 bg-slate-50 px-5 py-4">
          <p className="text-xs font-medium uppercase tracking-widest text-slate-500 mb-2">
            Direct answer
          </p>
          <p className="text-slate-800 leading-relaxed">
            {article.directAnswer}
          </p>
        </div>
      )}

      {article.problem && (
        <Section title={article.problemLabel ?? "The problem"}>
          <p className="text-slate-700 leading-relaxed">{article.problem}</p>
        </Section>
      )}

      {article.whyItHappens && (
        <Section title={article.whyItHappensLabel ?? "Why it happens"}>
          <p className="text-slate-700 leading-relaxed">{article.whyItHappens}</p>
        </Section>
      )}

      {article.solution && article.solution.length > 0 && (
        <Section title={article.solutionLabel ?? "The solution"}>
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
      )}

      {article.checklists && article.checklists.length > 0 && (
        <Section title="Checklist">
          <div className="space-y-6">
            {article.checklists.map((group, i) => (
              <Checklist key={i} slug={article.slug} group={group} index={i} />
            ))}
          </div>
        </Section>
      )}

      {article.tools && article.tools.length > 0 && (
        <Section title={article.toolsLabel ?? "Tools that help"}>
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
          <div
            data-section="affiliate-links"
            className="mt-4 text-xs text-slate-400"
            aria-hidden
          />
        </Section>
      )}

      <Section title="Summary">
        <ul className="space-y-2">
          {article.summary.map((s, i) => (
            <li key={i} className="flex gap-3 text-slate-700">
              <span className="text-slate-400">&bull;</span>
              <span className="leading-relaxed">{s}</span>
            </li>
          ))}
        </ul>
      </Section>

      <div data-section="resources-placeholder" aria-hidden />

      {article.showDisclaimer && (
        <aside
          role="note"
          className="mt-10 rounded-md border border-slate-200 bg-slate-50 p-5"
        >
          <p className="text-xs font-medium uppercase tracking-widest text-slate-500 mb-2">
            Legal disclaimer
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            {LEGAL_DISCLAIMER}
          </p>
        </aside>
      )}

      {related.length > 0 && (
        <section className="mt-16 pt-10 border-t border-slate-200">
          <h2 className="text-sm font-medium uppercase tracking-widest text-slate-500 mb-5">
            Related guides
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {related.map((o) => (
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

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-semibold text-slate-900 mb-3">{title}</h2>
      {children}
    </section>
  );
}

function Checklist({
  slug,
  group,
  index,
}: {
  slug: string;
  group: ChecklistGroup;
  index: number;
}) {
  const storageKey = `checklist:${slug}:${index}`;
  const [checked, setChecked] = useState<Record<number, boolean>>({});

  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) setChecked(JSON.parse(raw));
    } catch {
      /* ignore */
    }
  }, [storageKey]);

  const toggle = (i: number) => {
    setChecked((prev) => {
      const next = { ...prev, [i]: !prev[i] };
      try {
        localStorage.setItem(storageKey, JSON.stringify(next));
      } catch {
        /* ignore */
      }
      return next;
    });
  };

  return (
    <div className="rounded-md border border-slate-200 p-5">
      <h3 className="font-semibold text-slate-900 mb-3">{group.heading}</h3>
      <ul className="space-y-2">
        {group.items.map((item, i) => {
          const id = `${storageKey}:${i}`;
          const isChecked = !!checked[i];
          return (
            <li key={i} className="flex items-start gap-3">
              <input
                id={id}
                type="checkbox"
                checked={isChecked}
                onChange={() => toggle(i)}
                className="mt-1 h-4 w-4 flex-none rounded border-slate-300 accent-slate-900 cursor-pointer"
              />
              <label
                htmlFor={id}
                className={`text-sm leading-relaxed cursor-pointer ${
                  isChecked ? "text-slate-400 line-through" : "text-slate-700"
                }`}
              >
                {item}
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
