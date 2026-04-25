import { useState } from "react";

export function FeedbackPrompt() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <aside className="mt-10 rounded-md border border-slate-200 bg-slate-50 p-5 text-sm text-slate-700 print:hidden">
        Thanks — this helps us improve.
      </aside>
    );
  }

  return (
    <aside className="mt-10 rounded-md border border-slate-200 bg-slate-50 p-5 print:hidden">
      <p className="text-sm font-medium text-slate-900 mb-3">
        Was this guide helpful?
      </p>
      <div className="flex flex-wrap gap-2">
        {["Yes, it helped", "Somewhat", "Not really"].map((label) => (
          <button
            key={label}
            type="button"
            onClick={() => setSubmitted(true)}
            className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:border-slate-400 transition-colors"
          >
            {label}
          </button>
        ))}
      </div>
    </aside>
  );
}
