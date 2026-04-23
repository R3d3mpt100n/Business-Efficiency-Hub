import { useState, type FormEvent } from "react";
import { Link, useLocation } from "wouter";
import {
  USER_CODE,
  ADMIN_CODE,
  grantUserAccess,
  grantAdminAccess,
} from "@/lib/access";

const REDIRECT_TO = "/pro/business-starter";

export default function Unlock() {
  const [, setLocation] = useLocation();
  const [code, setCode] = useState("");
  const [error, setError] = useState<string | null>(null);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const cleaned = code.trim().toUpperCase();
    if (cleaned === USER_CODE) {
      grantUserAccess();
      setError(null);
      setLocation(REDIRECT_TO);
      return;
    }
    if (cleaned === ADMIN_CODE) {
      grantAdminAccess();
      setError(null);
      setLocation(REDIRECT_TO);
      return;
    }
    setError("That code didn't match. Check your purchase confirmation and try again.");
  }

  return (
    <div className="max-w-xl mx-auto px-6 py-16">
      <div className="mb-8">
        <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-900 bg-slate-200 px-2 py-0.5 rounded">
          Pro
        </span>
      </div>
      <h1 className="text-3xl font-semibold text-slate-900 mb-3">
        Access Your System
      </h1>
      <p className="text-slate-600 leading-relaxed">
        After completing your purchase you were redirected here. Enter the
        access code from your confirmation to open your Pro System.
      </p>

      <form
        onSubmit={onSubmit}
        className="mt-8 rounded-lg border border-slate-200 p-6 bg-white"
      >
        <label
          htmlFor="access-code"
          className="block text-sm font-medium text-slate-900 mb-2"
        >
          Enter Access Code
        </label>
        <input
          id="access-code"
          type="text"
          autoComplete="off"
          autoFocus
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="e.g. LEDGELY-XXXXX"
          className="w-full rounded-md border border-slate-300 px-3 py-2.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-900"
        />
        {error && (
          <p className="mt-3 text-sm text-red-600" role="alert">
            {error}
          </p>
        )}
        <button
          type="submit"
          className="mt-4 w-full inline-flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-800"
        >
          Unlock system &rarr;
        </button>
      </form>

      <p className="mt-6 text-sm text-slate-500 leading-relaxed">
        Lost your code or didn't receive a confirmation? Return to the{" "}
        <Link href="/" className="text-slate-900 underline underline-offset-2">
          home page
        </Link>
        .
      </p>
    </div>
  );
}
