import { Link, useLocation } from "wouter";
import { ReactNode } from "react";
import { useDarkMode } from "@/hooks/useDarkMode";

function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4"/>
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  );
}

export function Layout({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  const [dark, setDark] = useDarkMode();

  const navLink = (href: string, label: string) => {
    const active = location === href || (href !== "/" && location.startsWith(href));
    return (
      <Link
        href={href}
        className={`text-sm font-medium ${
          active
            ? "text-slate-900 dark:text-slate-100"
            : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
        }`}
      >
        {label}
      </Link>
    );
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col">
      <header className="border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-semibold text-slate-900 dark:text-slate-100">
            <span className="inline-block w-6 h-6 rounded-md bg-slate-900 dark:bg-slate-100" />
            <span>Ledgely</span>
          </Link>
          <nav className="flex items-center gap-6">
            {navLink("/", "Home")}
            {navLink("/docs", "Docs")}
            {navLink("/tools", "Tools")}
            {navLink("/templates", "Templates")}
            {navLink("/pro", "Pro Systems")}
            <button
              suppressHydrationWarning
              onClick={() => setDark(!dark)}
              aria-label="Toggle dark mode"
              className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-slate-100 dark:hover:bg-slate-800"
            >
              <span className="icon-moon"><MoonIcon /></span>
              <span className="icon-sun"><SunIcon /></span>
            </button>
          </nav>
        </div>
      </header>

      <main className="flex-1" style={{ minHeight: "80vh" }}>{children}</main>

      <footer className="border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 min-h-[88px]">
        <div className="max-w-5xl mx-auto px-6 py-8 text-sm text-slate-500 dark:text-slate-400 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div>
            Ledgely &middot; Practical systems for small business owners.
          </div>
          <div className="flex items-center gap-4">
            <Link href="/docs" className="hover:text-slate-900 dark:hover:text-slate-100">
              Docs
            </Link>
            <Link href="/tools" className="hover:text-slate-900 dark:hover:text-slate-100">
              Tools
            </Link>
            <Link href="/templates" className="hover:text-slate-900 dark:hover:text-slate-100">
              Templates
            </Link>
            <Link href="/pro" className="hover:text-slate-900 dark:hover:text-slate-100">
              Pro Systems
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
