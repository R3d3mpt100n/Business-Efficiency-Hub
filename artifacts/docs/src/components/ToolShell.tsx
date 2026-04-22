import { Link } from "wouter";
import { ReactNode } from "react";
import { RelatedDocs } from "./RelatedDocs";

export function ToolShell({
  title,
  description,
  relatedSlugs,
  children,
}: {
  title: string;
  description: string;
  relatedSlugs?: string[];
  children: ReactNode;
}) {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <Link href="/tools" className="text-sm text-slate-500 hover:text-slate-900">
        &larr; Back to tools
      </Link>
      <header className="mt-6 mb-8">
        <h1 className="text-3xl font-semibold text-slate-900">{title}</h1>
        <p className="mt-2 text-slate-600">{description}</p>
      </header>
      {children}
      <RelatedDocs slugs={relatedSlugs} />
    </div>
  );
}

export function Field({
  label,
  children,
  hint,
}: {
  label: string;
  children: ReactNode;
  hint?: string;
}) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-slate-700 mb-1.5">
        {label}
      </span>
      {children}
      {hint && <span className="block text-xs text-slate-500 mt-1">{hint}</span>}
    </label>
  );
}

export const inputClass =
  "w-full rounded-md border border-slate-300 px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:border-slate-900";

export function formatCurrency(n: number): string {
  if (!isFinite(n)) return "$0.00";
  return n.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });
}
