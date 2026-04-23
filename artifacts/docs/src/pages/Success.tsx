import { Link } from "wouter";

export default function Success() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-lg text-center">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-emerald-100 mb-6">
          <svg
            className="w-7 h-7 text-emerald-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <h1 className="text-2xl font-semibold text-slate-900">
          Purchase complete
        </h1>
        <p className="mt-3 text-slate-600 leading-relaxed">
          Thank you for your purchase. You'll receive access instructions and
          downloadable materials via email shortly.
        </p>

        <div className="mt-8 rounded-lg border border-slate-200 bg-slate-50 p-5 text-left">
          <p className="text-sm font-semibold text-slate-900 mb-2">
            What happens next
          </p>
          <ol className="space-y-2">
            {[
              "Check your email for a confirmation from Stripe — your receipt will be there.",
              "A follow-up email will include your access materials and any downloadable files.",
              "Return to this page any time to continue working through the system.",
            ].map((step, i) => (
              <li key={i} className="flex gap-3 text-sm text-slate-700 leading-relaxed">
                <span className="flex-none font-semibold text-slate-400">
                  {i + 1}.
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/pro/business-starter"
            className="inline-flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
          >
            Go to Business Starter System
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-700 hover:border-slate-500"
          >
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
