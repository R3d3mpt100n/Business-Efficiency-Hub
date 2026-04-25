import { useState } from "react";
import { Link } from "wouter";
import { STRIPE_BUNDLE_URL, STRIPE_URLS, PRO_SYSTEMS_URL } from "@/data/checkout";

type SystemDef = {
  slug: string;
  title: string;
  outcome: string;
  meta: string;
  href: string;
  accentClass: string;
  badgeClass: string;
  statusLabel: string;
  included: string[];
};

const SYSTEMS: SystemDef[] = [
  {
    slug: "business-starter",
    title: "Business Starter",
    outcome: "Idea → legally registered business",
    meta: "4 phases  ·  EIN + setup + compliance",
    href: "/pro/business-starter",
    accentClass: "border-t-blue-500",
    badgeClass: "bg-blue-50 text-blue-700 border-blue-200",
    statusLabel: "Setup",
    included: [
      "Structure decision tool",
      "EIN checklist",
      "Operating agreement",
      "Compliance calendar",
    ],
  },
  {
    slug: "financial-control",
    title: "Financial Control",
    outcome: "Monthly financial clarity",
    meta: "3 phases  ·  calculator + templates",
    href: "/pro/financial-control",
    accentClass: "border-t-emerald-500",
    badgeClass: "bg-emerald-50 text-emerald-700 border-emerald-200",
    statusLabel: "Finance",
    included: [
      "Profit calculator",
      "Expense tracker",
      "P&L template",
      "Review system",
    ],
  },
  {
    slug: "client-invoice",
    title: "Client & Invoice",
    outcome: "No missed payments",
    meta: "3 phases  ·  invoice + tracking system",
    href: "/pro/client-invoice",
    accentClass: "border-t-amber-500",
    badgeClass: "bg-amber-50 text-amber-700 border-amber-200",
    statusLabel: "Clients",
    included: [
      "Invoice builder",
      "Tracking sheet",
      "Follow-up templates",
      "Escalation timeline",
    ],
  },
  {
    slug: "marketing-growth",
    title: "Marketing & Growth",
    outcome: "Repeatable customer acquisition",
    meta: "4 phases  ·  offer + channels + referrals",
    href: "/pro/marketing-growth",
    accentClass: "border-t-purple-500",
    badgeClass: "bg-purple-50 text-purple-700 border-purple-200",
    statusLabel: "Marketing",
    included: [
      "ICP worksheet",
      "Offer template",
      "Referral script",
      "30-day plan",
    ],
  },
];

function SystemCard({ system }: { system: SystemDef }) {
  const [open, setOpen] = useState(false);
  const stripeUrl = STRIPE_URLS[system.slug];

  return (
    <div
      className={`bg-white rounded-xl border-t-4 border border-slate-200 ${system.accentClass} shadow-sm flex flex-col`}
    >
      <div className="p-5 flex-1 flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="min-w-0">
            <h2 className="text-base font-semibold text-slate-900 leading-snug">
              {system.title}
            </h2>
            <p className="mt-1 text-sm text-slate-500 leading-snug">
              {system.outcome}
            </p>
          </div>
          <span
            className={`flex-none text-[10px] font-semibold uppercase tracking-widest border rounded px-2 py-0.5 ${system.badgeClass}`}
          >
            {system.statusLabel}
          </span>
        </div>

        {/* Meta row */}
        <p className="text-xs text-slate-400 mb-4">{system.meta}</p>

        {/* Expandable included */}
        <div className="mb-4 rounded-lg border border-slate-200 overflow-hidden">
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="w-full flex items-center justify-between px-4 py-2.5 text-sm font-medium text-slate-700 bg-slate-50 hover:bg-slate-100"
          >
            <span>What's included</span>
            <svg
              className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {open && (
            <ul className="px-4 py-3 space-y-1.5 bg-white border-t border-slate-200">
              {system.included.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 flex-none" />
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Actions */}
        <div className="mt-auto flex gap-2">
          <Link
            href={system.href}
            className="flex-1 inline-flex items-center justify-center rounded-lg bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-zinc-800"
          >
            Open System
          </Link>
          <a
            href={stripeUrl}
            className="inline-flex items-center justify-center rounded-lg bg-amber-400 px-3 py-2 text-sm font-semibold text-black hover:bg-amber-300 whitespace-nowrap"
          >
            Unlock — $15
          </a>
        </div>
      </div>
    </div>
  );
}

export default function ProSystems() {
  return (
    <div>
      {/* Page header */}
      <div className="border-b border-slate-200 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6 py-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-900 bg-slate-200 px-2 py-0.5 rounded">
              Pro
            </span>
            <span className="text-xs font-medium uppercase tracking-widest text-slate-500">
              Complete business systems
            </span>
          </div>
          <h1 className="text-3xl font-semibold text-slate-900">
            Pro Systems
          </h1>
          <p className="mt-2 text-slate-600 max-w-xl leading-relaxed">
            Structured, done-for-you execution kits for every key area of your
            business — from setup to financial control to getting paid.
          </p>

          {/* Bundle CTA */}
          <div className="mt-6 inline-flex items-center gap-4 bg-slate-900 rounded-xl px-5 py-3.5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-0.5">Best value</p>
              <p className="text-white font-semibold text-sm">All 4 systems for $47</p>
            </div>
            <a
              href={STRIPE_BUNDLE_URL}
              className="flex-none inline-flex items-center justify-center rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold text-sm px-4 py-2 whitespace-nowrap"
            >
              Unlock bundle →
            </a>
          </div>
        </div>
      </div>

      {/* Card grid */}
      <div className="max-w-5xl mx-auto px-6 py-10">
        <p className="text-xs font-medium uppercase tracking-widest text-slate-400 mb-5">
          Or unlock individual systems — $15 each
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SYSTEMS.map((s) => (
            <SystemCard key={s.slug} system={s} />
          ))}
        </div>

        {/* Already have a code */}
        <div className="mt-6 rounded-xl border border-slate-200 bg-white p-4 flex items-center justify-between gap-4">
          <p className="text-sm text-slate-600">
            Already purchased? Use your access code to enter.
          </p>
          <a
            href={PRO_SYSTEMS_URL}
            className="flex-none inline-flex items-center justify-center rounded-lg border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 whitespace-nowrap"
          >
            Enter code →
          </a>
        </div>

        {/* How it works footer note */}
        <div className="mt-4 rounded-xl border border-slate-200 bg-white p-5 flex items-start gap-4">
          <div className="flex-none w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900 mb-0.5">
              How Pro Systems work
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              Free guides, tools, and templates stay free. Pro Systems
              combine everything into one organized, step-by-step execution kit
              you can follow without guessing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
