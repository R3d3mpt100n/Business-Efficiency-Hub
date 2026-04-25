import { useState, useEffect } from "react";

export function useDarkMode() {
  const [dark, setDark] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    // Read from the <html> classList — the inline script in index.html
    // already applied the correct class before React hydrates, so this
    // matches the DOM state and eliminates the hydration mismatch (#418).
    // Use optional chaining: SSR polyfills may not include classList.
    return document.documentElement.classList?.contains("dark") ?? false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("ledgely-dark", "1");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("ledgely-dark", "0");
    }
  }, [dark]);

  return [dark, setDark] as const;
}
