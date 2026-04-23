import { proSystems, KEY_BENEFITS } from "@/data/proSystems";
import { STRIPE_CHECKOUT_URL } from "@/data/checkout";

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
        {proSystems.map((p) => {
          const benefits = KEY_BENEFITS[p.slug] ?? [];
          return (
            <article
              key={p.slug}
              className="rounded-lg border border-slate-200 bg-white p-6 hover:border-slate-300 transition-colors"
            >
              <h2 className="text-xl font-semibold text-slate-900">
                {p.title}
              </h2>
              <p className="mt-1 text-slate-600">{p.tagline}</p>
              <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                {p.description}
              </p>

              <details className="mt-5 group rounded-md border border-slate-200 bg-slate-50 open:bg-white open:border-slate-300 transition-colors">
                <summary className="cursor-pointer list-none flex items-center justify-between px-4 py-3 text-sm font-semibold text-slate-900 select-none">
                  <span>Key Benefits</span>
                  <span className="text-slate-500 text-xs transition-transform duration-200 group-open:rotate-180">
                    &#9662;
                  </span>
                </summary>
                <ul className="px-4 pb-4 pt-1 space-y-2">
                  {benefits.map((b) => (
                    <li
                      key={b}
                      className="flex gap-3 text-sm text-slate-700 leading-relaxed"
                    >
                      <span className="text-slate-400">&bull;</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </details>

              <div className="mt-5">
                <a
                  href={STRIPE_CHECKOUT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
                >
                  Unlock full system &rarr;
                </a>
              </div>
            </article>
          );
        })}
      </div>

      <section className="mt-16 rounded-lg border border-slate-200 bg-slate-50 p-6">
        <h2 className="font-semibold text-slate-900 mb-1">
          How Pro Systems relate to free content
        </h2>
        <p className="text-sm text-slate-600 leading-relaxed">
          Free guides, tools, and templates stay free — Pro Systems are
          structured upgrades that combine related material into one organized,
          ready-to-use kit.
        </p>
      </section>
    </div>
  );
}
