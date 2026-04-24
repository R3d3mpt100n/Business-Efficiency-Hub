import { useState } from "react";
import { Link, useRoute } from "wouter";
import { findProSystem, KEY_BENEFITS } from "@/data/proSystems";
import { articlesBySlugs } from "@/data/articles";
import { tools } from "@/data/tools";
import { templates } from "@/data/templates";
import { PRO_SYSTEMS_URL } from "@/data/checkout";

const SYSTEM_META: Record<string, { outcome: string; meta: string; accentClass: string; badgeClass: string; statusLabel: string }> = {
  "financial-control": {
    outcome: "Monthly financial clarity",
    meta: "3 phases  ·  calculator + templates",
    accentClass: "border-t-emerald-500",
    badgeClass: "bg-emerald-50 text-emerald-700 border-emerald-200",
    statusLabel: "Finance",
  },
  "client-invoice": {
    outcome: "No missed payments",
    meta: "3 phases  ·  invoice + tracking system",
    accentClass: "border-t-amber-500",
    badgeClass: "bg-amber-50 text-amber-700 border-amber-200",
    statusLabel: "Clients",
  },
  "business-starter": {
    outcome: "Idea → legally registered business",
    meta: "4 phases  ·  EIN + setup + compliance",
    accentClass: "border-t-blue-500",
    badgeClass: "bg-blue-50 text-blue-700 border-blue-200",
    statusLabel: "Setup",
  },
};

export default function ProSystem() {
  const [, params] = useRoute("/pro/:slug");
  const slug = params?.slug ?? "";
  const system = findProSystem(slug);
  const meta = SYSTEM_META[slug];

  if (!system) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-20 text-center">
        <h1 className="text-2xl font-semibold text-slate-900">System not found</h1>
        <Link href="/pro" className="inline-block mt-6 text-sm font-medium text-slate-900 underline">
          Back to Pro Systems
        </Link>
      </div>
    );
  }

  const docs = articlesBySlugs(system.freeDocSlugs);
  const linkedTools = tools.filter((t) => (system.freeToolSlugs ?? []).includes(t.slug));
  const linkedTemplates = templates.filter((t) => (system.freeTemplateSlugs ?? []).includes(t.slug));
  const benefits = KEY_BENEFITS[slug] ?? [];

  return (
    <div>
      {/* Page header card */}
      <div className="border-b border-slate-200 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6 py-10">
          <Link href="/pro" className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-900 mb-6">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Pro Systems
          </Link>

          <div
            className={`bg-white rounded-xl border-t-4 border border-slate-200 shadow-sm p-6 ${meta?.accentClass ?? ""}`}
          >
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div className="min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className={`text-[10px] font-semibold uppercase tracking-widest border rounded px-2 py-0.5 ${meta?.badgeClass ?? "bg-slate-100 text-slate-600 border-slate-200"}`}
                  >
                    {meta?.statusLabel ?? "Pro"}
                  </span>
                  <span className="text-xs text-slate-400">{meta?.meta}</span>
                </div>
                <h1 className="text-2xl font-semibold text-slate-900">{system.shortTitle} System</h1>
                <p className="mt-1 text-slate-500">{meta?.outcome ?? system.tagline}</p>
                <p className="mt-3 text-sm text-slate-700 leading-relaxed max-w-xl">{system.description}</p>
              </div>
              <a
                href={PRO_SYSTEMS_URL}
                className="flex-none inline-flex items-center justify-center rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-800 transition-colors"
              >
                Unlock full system →
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-10 space-y-8">

        {/* What's included — module cards */}
        <section>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-slate-500 mb-4">
            What's included
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {system.sections.map((s) => (
              <ModuleCard key={s.heading} heading={s.heading} items={s.items} />
            ))}
          </div>
        </section>

        {/* Key benefits */}
        {benefits.length > 0 && (
          <section>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-slate-500 mb-4">
              Key benefits
            </h2>
            <div className="rounded-xl border border-slate-200 bg-white p-5">
              <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2.5">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <svg className="w-4 h-4 mt-0.5 flex-none text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="rounded-xl border border-slate-900 bg-slate-900 text-slate-100 p-6 flex items-center justify-between gap-6 flex-wrap">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-1">Get full access</p>
            <p className="text-lg font-semibold text-white">
              Unlock the full {system.shortTitle} system
            </p>
            <p className="text-sm text-slate-300 mt-1 leading-relaxed">
              Complete workflow, downloadable templates, and ongoing access.
            </p>
          </div>
          <a
            href={PRO_SYSTEMS_URL}
            className="flex-none inline-flex items-center justify-center rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 hover:bg-slate-100 transition-colors"
          >
            Unlock full system →
          </a>
        </section>

        {/* Related free content */}
        {docs.length > 0 && (
          <section>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-slate-500 mb-4">
              Related free guides
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {docs.map((a) => (
                <Link
                  key={a.slug}
                  href={`/docs/${a.slug}`}
                  className="block rounded-lg border border-slate-200 bg-white p-4 hover:border-slate-400 transition-colors"
                >
                  <p className="text-xs text-slate-400 mb-1">{a.category}</p>
                  <h3 className="text-sm font-semibold text-slate-900 leading-snug">{a.title}</h3>
                </Link>
              ))}
            </div>
          </section>
        )}

        {linkedTools.length > 0 && (
          <section>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-slate-500 mb-4">
              Related free tools
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {linkedTools.map((t) => (
                <Link
                  key={t.slug}
                  href={`/tools/${t.slug}`}
                  className="block rounded-lg border border-slate-200 bg-white p-4 hover:border-slate-400 transition-colors"
                >
                  <h3 className="text-sm font-semibold text-slate-900">{t.title}</h3>
                  <p className="mt-1 text-xs text-slate-500">{t.description}</p>
                </Link>
              ))}
            </div>
          </section>
        )}

        {linkedTemplates.length > 0 && (
          <section>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-slate-500 mb-4">
              Related free templates
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {linkedTemplates.map((t) => (
                <Link
                  key={t.slug}
                  href="/templates"
                  className="block rounded-lg border border-slate-200 bg-white p-4 hover:border-slate-400 transition-colors"
                >
                  <h3 className="text-sm font-semibold text-slate-900">{t.title}</h3>
                  <p className="mt-1 text-xs text-slate-500">{t.description}</p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

function ModuleCard({ heading, items }: { heading: string; items: string[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-xl border border-slate-200 bg-white overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-slate-50 transition-colors"
      >
        <span className="text-sm font-semibold text-slate-900">{heading}</span>
        <svg
          className={`w-4 h-4 text-slate-400 flex-none transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <ul className="px-5 pb-4 pt-1 space-y-2 border-t border-slate-100">
          {items.map((it) => (
            <li key={it} className="flex items-start gap-2.5 text-sm text-slate-600">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-300 flex-none mt-1.5" />
              <span className="leading-relaxed">{it}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
