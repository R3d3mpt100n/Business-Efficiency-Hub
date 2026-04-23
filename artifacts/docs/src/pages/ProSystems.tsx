import { Link } from "wouter";
import { proSystems } from "@/data/proSystems";

export default function ProSystems() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <div className="mb-10">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-900 bg-slate-200 px-2 py-0.5 rounded">
            Pro
          </span>
          <span className="text-xs font-medium uppercase tracking-widest text-slate-500">
            Complete business systems
          </span>
        </div>
        <h1 className="text-3xl font-semibold text-slate-900">Pro Systems</h1>
        <p className="mt-2 text-slate-600 max-w-2xl">
          Pro Systems are structured, done-for-you workflows that turn the free
          guides and tools into complete, step-by-step systems you can follow
          without guessing.
        </p>
      </div>

      <div className="space-y-5">
        {proSystems.map((p) => (
          <Link
            key={p.slug}
            href={`/pro/${p.slug}`}
            className="block rounded-lg border border-slate-200 p-6 hover:border-slate-400 hover:shadow-sm transition-all"
          >
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div className="min-w-0">
                <h2 className="text-xl font-semibold text-slate-900">
                  {p.title}
                </h2>
                <p className="mt-1 text-slate-600">{p.tagline}</p>
              </div>
              <span className="text-xs font-medium text-slate-500 whitespace-nowrap">
                See what's included &rarr;
              </span>
            </div>
            <p className="mt-4 text-sm text-slate-600 leading-relaxed">
              {p.description}
            </p>
          </Link>
        ))}
      </div>

      <section className="mt-16 rounded-lg border border-slate-200 bg-slate-50 p-6">
        <h2 className="font-semibold text-slate-900 mb-1">
          How Pro Systems relate to free content
        </h2>
        <p className="text-sm text-slate-600 leading-relaxed">
          Free guides, tools, and templates stay free — Pro Systems are
          structured upgrades that combine related material into one organized,
          ready-to-use kit. Each Pro System page links back to every related
          free resource so you can compare before upgrading.
        </p>
      </section>
    </div>
  );
}
