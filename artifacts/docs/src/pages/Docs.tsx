import { useMemo, useState } from "react";
import { Link } from "wouter";
import { articles } from "@/data/articles";

export default function Docs() {
  const [query, setQuery] = useState("");

  const categories = useMemo(() => {
    const set = new Set(articles.map((a) => a.category));
    return Array.from(set);
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return articles;
    return articles.filter(
      (a) =>
        a.title.toLowerCase().includes(q) ||
        a.description.toLowerCase().includes(q) ||
        a.category.toLowerCase().includes(q),
    );
  }, [query]);

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-slate-900">Documentation</h1>
        <p className="mt-2 text-slate-600">
          Browse every guide. Use the search to jump straight to what you need.
        </p>
      </div>

      <div className="grid lg:grid-cols-[220px_1fr] gap-10">
        <aside className="lg:sticky lg:top-20 lg:self-start">
          <h2 className="text-xs font-medium uppercase tracking-widest text-slate-500 mb-3">
            Categories
          </h2>
          <ul className="space-y-2 text-sm">
            <li>
              <button
                onClick={() => setQuery("")}
                className={`block text-left w-full ${
                  !query ? "text-slate-900 font-medium" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                All guides
              </button>
            </li>
            {categories.map((c) => (
              <li key={c}>
                <button
                  onClick={() => setQuery(c)}
                  className="block text-left w-full text-slate-600 hover:text-slate-900"
                >
                  {c}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        <div>
          <div className="mb-6">
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search guides..."
              className="w-full rounded-md border border-slate-300 px-4 py-2.5 text-sm placeholder:text-slate-400 focus:outline-none focus:border-slate-900"
            />
          </div>

          {filtered.length === 0 ? (
            <p className="text-sm text-slate-500">No guides match your search.</p>
          ) : (
            <ul className="divide-y divide-slate-200 border-t border-b border-slate-200">
              {filtered.map((a) => (
                <li key={a.slug}>
                  <Link
                    href={`/docs/${a.slug}`}
                    className="block py-5 hover:bg-slate-50 -mx-2 px-2 rounded transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-xs font-medium text-slate-500">
                        {a.category}
                      </span>
                      <span className="text-xs text-slate-400">&middot;</span>
                      <span className="text-xs text-slate-500">{a.readTime}</span>
                    </div>
                    <h3 className="font-semibold text-slate-900 mb-1">{a.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {a.description}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
