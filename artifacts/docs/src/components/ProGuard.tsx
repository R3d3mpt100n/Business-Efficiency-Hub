import { useEffect, useState, type ReactNode } from "react";
import { useLocation } from "wouter";
import { hasAccess } from "@/lib/access";

export function ProGuard({ children }: { children: ReactNode }) {
  const [, setLocation] = useLocation();
  const [checked, setChecked] = useState(false);
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const ok = hasAccess();
    setAllowed(ok);
    setChecked(true);
    if (!ok) setLocation("/unlock");
  }, [setLocation]);

  if (!checked || !allowed) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-20 text-center text-slate-500 text-sm">
        Checking access&hellip;
      </div>
    );
  }

  return <>{children}</>;
}
