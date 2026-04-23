import { useEffect, useState, type FormEvent } from "react";
import { useLocation } from "wouter";
import {
  USER_CODE,
  ADMIN_CODE,
  grantUserAccess,
  grantAdminAccess,
} from "@/lib/access";
import { STRIPE_CHECKOUT_URL } from "@/data/checkout";

const REDIRECT_TO = "/pro/business-starter";
const MAX_ATTEMPTS = 2;
const ATTEMPTS_KEY = "unlock:attempts";

function loadAttempts(): number {
  try {
    const raw = localStorage.getItem(ATTEMPTS_KEY);
    if (!raw) return 0;
    const n = parseInt(raw, 10);
    return Number.isFinite(n) && n >= 0 ? n : 0;
  } catch {
    return 0;
  }
}

function saveAttempts(n: number) {
  try {
    localStorage.setItem(ATTEMPTS_KEY, String(n));
  } catch {
    // ignore
  }
}

export default function Unlock() {
  const [, setLocation] = useLocation();
  const [code, setCode] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [message, setMessage] = useState<string | null>(null);
  const [messageTone, setMessageTone] = useState<"error" | "info">("error");
  const [locked, setLocked] = useState(false);

  useEffect(() => {
    const n = loadAttempts();
    setAttempts(n);
    if (n >= MAX_ATTEMPTS) {
      setLocked(true);
      setMessageTone("info");
      setMessage("No attempts remaining. Redirecting to payment…");
      const t = window.setTimeout(() => {
        window.location.href = STRIPE_CHECKOUT_URL;
      }, 1500);
      return () => window.clearTimeout(t);
    }
  }, []);

  const remaining = Math.max(0, MAX_ATTEMPTS - attempts);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (locked) return;
    const cleaned = code.trim().toUpperCase();

    if (cleaned === ADMIN_CODE) {
      grantAdminAccess();
      saveAttempts(0);
      setLocation(REDIRECT_TO);
      return;
    }

    if (cleaned === USER_CODE) {
      grantUserAccess();
      saveAttempts(0);
      setLocation(REDIRECT_TO);
      return;
    }

    const next = attempts + 1;
    setAttempts(next);
    saveAttempts(next);
    const left = MAX_ATTEMPTS - next;
    setCode("");

    if (left <= 0) {
      setLocked(true);
      setMessageTone("info");
      setMessage("No attempts remaining. Redirecting to payment…");
      window.setTimeout(() => {
        window.location.href = STRIPE_CHECKOUT_URL;
      }, 1500);
    } else {
      setMessageTone("error");
      setMessage(
        `Incorrect code. ${left} attempt${left === 1 ? "" : "s"} remaining.`,
      );
    }
  }

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md">
        <div className="mb-6 text-center">
          <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-900 bg-slate-200 px-2 py-0.5 rounded">
            Pro
          </span>
          <h1 className="mt-4 text-2xl font-semibold text-slate-900">
            Access Your System
          </h1>
          <p className="mt-2 text-sm text-slate-600 leading-relaxed">
            Enter the access code from your purchase confirmation to open your
            Pro System.
          </p>
        </div>

        <form
          onSubmit={onSubmit}
          className="rounded-lg border border-slate-200 bg-white p-6"
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
            disabled={locked}
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="e.g. LEDGELY-XXXXX"
            className="w-full rounded-md border border-slate-300 px-3 py-2.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-900 disabled:bg-slate-50 disabled:text-slate-400"
          />

          {message && (
            <p
              role="alert"
              className={
                "mt-3 text-sm " +
                (messageTone === "error" ? "text-red-600" : "text-slate-700")
              }
            >
              {message}
            </p>
          )}

          <button
            type="submit"
            disabled={locked}
            className="mt-4 w-full inline-flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Continue
          </button>

          <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
            <span>
              Attempts remaining:{" "}
              <span
                className={
                  "font-semibold " +
                  (remaining === 0
                    ? "text-red-600"
                    : remaining === 1
                      ? "text-amber-600"
                      : "text-slate-900")
                }
              >
                {remaining}
              </span>{" "}
              of {MAX_ATTEMPTS}
            </span>
            {locked && (
              <a
                href={STRIPE_CHECKOUT_URL}
                className="font-medium text-slate-900 underline underline-offset-2"
              >
                Go to payment now
              </a>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
