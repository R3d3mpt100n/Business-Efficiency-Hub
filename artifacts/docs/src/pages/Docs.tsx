import { useEffect, useMemo, useState } from "react";
import { Link, useSearch } from "wouter";
import { articles, CATEGORY_ORDER } from "@/data/articles";

export default function Docs() {
  const search = useSearch();
  const initialCat = useMemo(() => {
    const params = new URLSearchParams(search);
    return params.get("cat") ?? "";
  }, [search]);

  const [query, setQuery] = useState("");
  const [activeCat, setActiveCat] = useState<string>(initialCat);

  useEffect(() => {
    setActiveCat(initialCat);
  }, [initialCat]);

  const categories = useMemo(() => {
    const set = new Set(articles.map((a) => a.category));
    const found = Array.from(set);
    return found.sort(
      (a, b) =>
        (CATEGORY_ORDER.indexOf(a) === -1 ? 999 : CATEGORY_ORDER.indexOf(a)) -
        (CATEGORY_ORDER.indexOf(b) === -1 ? 999 : CATEGORY_ORDER.indexOf(b)),
    );
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return articles.filter((a) => {
      if (activeCat && a.category !== activeCat) return false;
      if (!q) return true;
      return (
        a.title.toLowerCase().includes(q) ||
        a.description.toLowerCase().includes(q) ||
        a.category.toLowerCase().includes(q) ||
        (a.directAnswer ?? "").toLowerCase().includes(q)
      );
    });
  }, [query, activeCat]);

  const grouped = useMemo(() => {
    const map: Record<string, typeof articles> = {};
    for (const a of filtered) {
      if (!map[a.category]) map[a.category] = [];
      map[a.category].push(a);
    }
    return map;
  }, [filtered]);

  const orderedGroups = categories.filter((c) => grouped[c]?.length);

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-slate-900">Documentation</h1>
        <p className="mt-2 text-slate-600">
          Browse every guide. Use search or pick a cluster to narrow down.
        </p>
      </div>

      <div className="grid lg:grid-cols-[220px_1fr] gap-10">
        <aside className="lg:sticky lg:top-20 lg:self-start">
          <h2 className="text-xs font-medium uppercase tracking-widest text-slate-500 mb-3">
            Clusters
          </h2>
          <ul className="space-y-2 text-sm">
            <li>
              <button
                onClick={() => setActiveCat("")}
                className={`block text-left w-full ${
                  !activeCat
                    ? "text-slate-900 font-medium"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                All guides
              </button>
            </li>
            {categories.map((c) => (
              <li key={c}>
                <button
                  onClick={() => setActiveCat(c)}
                  className={`block text-left w-full ${
                    activeCat === c
                      ? "text-slate-900 font-medium"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
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
            <div className="space-y-10">
              {orderedGroups.map((cat) => (
                <section key={cat}>
                  <h2 className="text-xs font-medium uppercase tracking-widest text-slate-500 mb-3">
                    {cat}
                  </h2>
                  <ul className="divide-y divide-slate-200 border-t border-b border-slate-200">
                    {grouped[cat].map((a) => (
                      <li key={a.slug}>
                        <Link
                          href={`/docs/${a.slug}/`}
                          className="block py-5 hover:bg-slate-50 -mx-2 px-2 rounded"
                        >
                          <div className="flex items-center gap-3 mb-1">
                            <span className="text-xs text-slate-500">
                              {a.readTime}
                            </span>
                          </div>
                          <h3 className="font-semibold text-slate-900 mb-1">
                            {a.title}
                          </h3>
                          <p className="text-sm text-slate-600 leading-relaxed">
                            {a.description}
                          </p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
