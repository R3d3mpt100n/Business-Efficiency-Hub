import { Link, useLocation } from "wouter";
import { ReactNode } from "react";

export function Layout({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  const navLink = (href: string, label: string) => {
    const active = location === href || (href !== "/" && location.startsWith(href));
    return (
      <Link
        href={href}
        className={`text-sm font-medium transition-colors ${
          active
            ? "text-slate-900"
            : "text-slate-600 hover:text-slate-900"
        }`}
      >
        {label}
      </Link>
    );
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col">
      <header className="border-b border-slate-200 bg-white sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-semibold text-slate-900">
            <span className="inline-block w-6 h-6 rounded-md bg-slate-900" />
            <span>Ledgely</span>
          </Link>
          <nav className="flex items-center gap-6">
            {navLink("/", "Home")}
            {navLink("/docs", "Docs")}
            {navLink("/tools", "Tools")}
            {navLink("/templates", "Templates")}
            {navLink("/pro", "Pro Systems")}
          </nav>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-slate-200 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6 py-8 text-sm text-slate-500 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div>
            Ledgely &middot; Practical systems for small business owners.
          </div>
          <div className="flex items-center gap-4">
            <Link href="/docs" className="hover:text-slate-900">
              Docs
            </Link>
            <Link href="/tools" className="hover:text-slate-900">
              Tools
            </Link>
            <Link href="/templates" className="hover:text-slate-900">
              Templates
            </Link>
            <Link href="/pro" className="hover:text-slate-900">
              Pro Systems
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
