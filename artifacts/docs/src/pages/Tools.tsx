import { Link } from "wouter";
import { tools } from "@/data/tools";

export default function Tools() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-semibold text-slate-900">Business Tools</h1>
        <p className="mt-2 text-slate-600 max-w-2xl">
          A small suite of free, lightweight utilities to help you understand your
          money, track activity, and generate basic documents. No accounts, no
          downloads — everything runs in your browser.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        {tools.map((t) => (
          <Link
            key={t.slug}
            href={`/tools/${t.slug}/`}
            className="block rounded-lg border border-slate-200 p-5 hover:shadow-sm"
          >
            <h2 className="font-semibold text-slate-900 mb-1">{t.title}</h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              {t.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
