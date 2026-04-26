import { Link } from "wouter";
import { articlesBySlugs } from "@/data/articles";

export function RelatedDocs({ slugs }: { slugs?: string[] }) {
  const related = articlesBySlugs(slugs ?? []);
  if (related.length === 0) return null;

  return (
    <section className="mt-12 pt-8 border-t border-slate-200 print:hidden">
      <h2 className="text-sm font-medium uppercase tracking-widest text-slate-500 mb-4">
        Related guides
      </h2>
      <div className="grid sm:grid-cols-2 gap-3">
        {related.map((a) => (
          <Link
            key={a.slug}
            href={`/docs/${a.slug}`}
            className="block rounded-md border border-slate-200 p-4 hover:shadow-sm"
          >
            <p className="text-xs text-slate-500 mb-1">{a.category}</p>
            <h3 className="text-sm font-semibold text-slate-900 leading-snug">
              {a.title}
            </h3>
          </Link>
        ))}
      </div>
    </section>
  );
}
