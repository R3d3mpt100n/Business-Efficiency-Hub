import { Link, useRoute } from "wouter";
import { findProSystem } from "@/data/proSystems";
import { articlesBySlugs } from "@/data/articles";
import { tools } from "@/data/tools";
import { templates } from "@/data/templates";

export default function ProSystem() {
  const [, params] = useRoute("/pro/:slug");
  const slug = params?.slug ?? "";
  const system = findProSystem(slug);

  if (!system) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-20 text-center">
        <h1 className="text-2xl font-semibold text-slate-900">System not found</h1>
        <Link
          href="/pro"
          className="inline-block mt-6 text-sm font-medium text-slate-900 underline"
        >
          Back to Pro Systems
        </Link>
      </div>
    );
  }

  const docs = articlesBySlugs(system.freeDocSlugs);
  const linkedTools = tools.filter((t) =>
    (system.freeToolSlugs ?? []).includes(t.slug),
  );
  const linkedTemplates = templates.filter((t) =>
    (system.freeTemplateSlugs ?? []).includes(t.slug),
  );

  return (
    <article className="max-w-3xl mx-auto px-6 py-12">
      <Link href="/pro" className="text-sm text-slate-500 hover:text-slate-900">
        &larr; Back to Pro Systems
      </Link>

      <header className="mt-6 mb-10 pb-8 border-b border-slate-200">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-900 bg-slate-200 px-2 py-0.5 rounded">
            Pro
          </span>
          <span className="text-xs font-medium uppercase tracking-widest text-slate-500">
            Complete system
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 leading-tight">
          {system.title}
        </h1>
        <p className="mt-3 text-lg text-slate-600 leading-relaxed">
          {system.tagline}
        </p>
        <p className="mt-4 text-slate-700 leading-relaxed">
          {system.description}
        </p>
      </header>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">
          What's included
        </h2>
        <div className="space-y-5">
          {system.sections.map((s) => (
            <div
              key={s.heading}
              className="rounded-lg border border-slate-200 p-5"
            >
              <h3 className="font-semibold text-slate-900 mb-3">{s.heading}</h3>
              <ul className="space-y-2">
                {s.items.map((it) => (
                  <li key={it} className="flex gap-3 text-sm text-slate-700">
                    <span className="text-slate-400">&bull;</span>
                    <span className="leading-relaxed">{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-slate-900 mb-2">Purpose</h2>
        <p className="text-slate-700 leading-relaxed">{system.purpose}</p>
      </section>

      <section className="mb-12 rounded-lg border border-slate-300 bg-slate-50 p-6">
        <p className="text-xs font-medium uppercase tracking-widest text-slate-500 mb-2">
          Availability
        </p>
        <h2 className="text-lg font-semibold text-slate-900 mb-2">
          Coming soon
        </h2>
        <p className="text-sm text-slate-600 leading-relaxed">
          Pro Systems are being prepared as structured, downloadable kits.
          Checkout isn't live yet — in the meantime, every related free guide,
          tool, and template is linked below.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-sm font-medium uppercase tracking-widest text-slate-500 mb-4">
          Related free guides
        </h2>
        {docs.length === 0 ? (
          <p className="text-sm text-slate-500">No related guides yet.</p>
        ) : (
          <div className="grid sm:grid-cols-2 gap-3">
            {docs.map((a) => (
              <Link
                key={a.slug}
                href={`/docs/${a.slug}`}
                className="block rounded-md border border-slate-200 p-4 hover:border-slate-400 transition-colors"
              >
                <p className="text-xs text-slate-500 mb-1">{a.category}</p>
                <h3 className="text-sm font-semibold text-slate-900 leading-snug">
                  {a.title}
                </h3>
              </Link>
            ))}
          </div>
        )}
      </section>

      {linkedTools.length > 0 && (
        <section className="mb-10">
          <h2 className="text-sm font-medium uppercase tracking-widest text-slate-500 mb-4">
            Related free tools
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {linkedTools.map((t) => (
              <Link
                key={t.slug}
                href={`/tools/${t.slug}`}
                className="block rounded-md border border-slate-200 p-4 hover:border-slate-400 transition-colors"
              >
                <h3 className="text-sm font-semibold text-slate-900 leading-snug">
                  {t.title}
                </h3>
                <p className="mt-1 text-xs text-slate-600">{t.description}</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      {linkedTemplates.length > 0 && (
        <section className="mb-10">
          <h2 className="text-sm font-medium uppercase tracking-widest text-slate-500 mb-4">
            Related free templates
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {linkedTemplates.map((t) => (
              <Link
                key={t.slug}
                href="/templates"
                className="block rounded-md border border-slate-200 p-4 hover:border-slate-400 transition-colors"
              >
                <h3 className="text-sm font-semibold text-slate-900 leading-snug">
                  {t.title}
                </h3>
                <p className="mt-1 text-xs text-slate-600">{t.description}</p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
