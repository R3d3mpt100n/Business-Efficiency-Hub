import { Link } from "wouter";
import type { ProSystem } from "@/data/proSystems";

export function UpgradePrompt({
  system,
  variant = "full",
}: {
  system?: ProSystem;
  variant?: "full" | "compact";
}) {
  if (!system) return null;

  if (variant === "compact") {
    return (
      <Link
        href={`/pro/${system.slug}`}
        className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:border-slate-400 transition-colors print:hidden"
      >
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-slate-900" />
        Upgrade to {system.shortTitle}
      </Link>
    );
  }

  return (
    <aside className="mt-10 rounded-lg border border-slate-200 bg-slate-50 p-5 print:hidden">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-900 bg-slate-200 px-2 py-0.5 rounded">
          Pro
        </span>
        <p className="text-xs font-medium uppercase tracking-widest text-slate-500">
          Upgrade pathway
        </p>
      </div>
      <h3 className="font-semibold text-slate-900 mb-1">
        Get the complete {system.shortTitle} System
      </h3>
      <p className="text-sm text-slate-600 leading-relaxed mb-3">
        {system.tagline}
      </p>
      <Link
        href={`/pro/${system.slug}`}
        className="inline-flex items-center justify-center rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800"
      >
        See what's included &rarr;
      </Link>
    </aside>
  );
}
