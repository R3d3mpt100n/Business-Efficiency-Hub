import { Link } from "wouter";
import type { ProSystem } from "@/data/proSystems";

export function UpgradePrompt({
  system,
  variant = "full",
  context = "guide",
}: {
  system?: ProSystem;
  variant?: "full" | "compact";
  context?: "guide" | "tool";
}) {
  if (!system) return null;

  const leadIn =
    context === "tool"
      ? "This tool is part of the"
      : "This guide is part of the";

  if (variant === "compact") {
    return (
      <Link
        href={`/pro/${system.slug}/`}
        className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:shadow-sm print:hidden"
      >
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-slate-900" />
        Upgrade to {system.shortTitle}
      </Link>
    );
  }

  return (
    <aside className="mt-12 rounded-xl bg-slate-900 text-white p-6 sm:p-8 shadow-sm ring-1 ring-slate-800 print:hidden">
      <p className="text-[10px] font-semibold uppercase tracking-widest text-amber-400 mb-3">
        Pro System
      </p>
      <h3 className="text-lg sm:text-xl font-semibold leading-snug">
        {leadIn}{" "}
        <span className="text-amber-400">{system.title}</span>
      </h3>
      <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
        Get the full step-by-step system — templates, checklists, and walkthrough in one place.
      </p>
      <div className="mt-5">
        <Link
          href={`/pro/${system.slug}/`}
          className="inline-flex items-center justify-center rounded-md bg-amber-400 px-5 py-2.5 text-sm font-semibold text-slate-900 hover:bg-amber-300 transition-colors"
        >
          Unlock the full system &rarr;
        </Link>
      </div>
    </aside>
  );
}
