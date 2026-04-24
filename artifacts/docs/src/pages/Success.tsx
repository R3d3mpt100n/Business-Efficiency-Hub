import { useEffect } from "react";
import { Link } from "wouter";
import { BUSINESS_STARTER_FILES, downloadPdf } from "@/data/downloads";
import { PRO_SYSTEMS_BYPASS_URL } from "@/data/checkout";

const FULL_ACCESS_ITEMS = [
  "Startup Checklist — master ordered list from idea to open bank account",
  "EIN Preparation Checklist — everything to gather before applying",
  "ITIN Preparation Checklist — documents and steps for Form W-7",
  "Compliance Calendar — yearly deadlines template, pre-filled",
  "Filled Setup Plan Example — completed sample so you know what yours should look like",
];

export default function Success() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = PRO_SYSTEMS_BYPASS_URL;
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <div className="flex items-center gap-3 mb-8">
        <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-emerald-100 flex-none">
          <svg
            className="w-5 h-5 text-emerald-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-widest text-emerald-700">
            Purchase complete
          </p>
          <h1 className="text-2xl font-semibold text-slate-900 leading-tight">
            You're in. Here's your full access.
          </h1>
        </div>
      </div>

      <p className="text-slate-600 leading-relaxed mb-10 max-w-xl">
        Everything below is unlocked. Download any file, work through the
        guided system, and return any time — your access doesn't expire.
      </p>

      {/* DOWNLOADS */}
      <section className="mb-10">
        <h2 className="text-lg font-semibold text-slate-900 mb-1">
          Your downloadable files
        </h2>
        <p className="text-sm text-slate-500 mb-5">
          Save locally and work through them alongside the system below.
        </p>
        <div className="grid sm:grid-cols-2 gap-3">
          {BUSINESS_STARTER_FILES.map((f) => (
            <div
              key={f.name}
              className="rounded-lg border border-slate-200 bg-white p-4 flex flex-col"
            >
              <div className="flex items-start justify-between gap-2 mb-1">
                <h3 className="font-semibold text-slate-900 text-sm leading-snug">
                  {f.label}
                </h3>
                <span className="flex-none text-[10px] font-medium uppercase tracking-wide text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded">
                  {f.tag}
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed flex-1 mb-3">
                {f.description}
              </p>
              <button
                type="button"
                onClick={() => downloadPdf(f.name, f.build())}
                className="inline-flex items-center justify-center gap-1.5 rounded-md bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white hover:bg-slate-800"
              >
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                Download PDF
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* WHATS INCLUDED RECAP */}
      <section className="mb-10 rounded-lg border border-slate-200 bg-slate-50 p-6">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-slate-500 mb-4">
          Full access includes
        </h2>
        <ul className="space-y-2">
          {FULL_ACCESS_ITEMS.map((item) => (
            <li key={item} className="flex gap-3 text-sm text-slate-700 leading-relaxed">
              <span className="text-emerald-600 mt-0.5">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* GO TO SYSTEM */}
      <section className="mb-10 rounded-lg border border-slate-900 bg-slate-900 text-white p-6">
        <p className="text-xs font-medium uppercase tracking-widest text-slate-400 mb-2">
          Next step
        </p>
        <h2 className="text-lg font-semibold mb-2">
          Open the Pro Systems
        </h2>
        <p className="text-sm text-slate-300 leading-relaxed mb-2">
          You're being redirected automatically in a moment. Or go there now —
          you're already authenticated.
        </p>
        <p className="text-xs text-emerald-400 font-mono mb-5">
          Redirecting to Pro Systems&hellip;
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href={PRO_SYSTEMS_BYPASS_URL}
            className="inline-flex items-center justify-center rounded-md bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 hover:bg-slate-100"
          >
            Go to Pro Systems now &rarr;
          </a>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-slate-700 px-5 py-2.5 text-sm font-medium text-slate-300 hover:border-slate-400"
          >
            Back to home
          </Link>
        </div>
      </section>

      <p className="text-xs text-slate-400 text-center">
        You can also bookmark{" "}
        <a href={PRO_SYSTEMS_BYPASS_URL} className="underline text-slate-300">
          /pro-systems.html
        </a>{" "}
        for direct access any time.
      </p>
    </div>
  );
}
