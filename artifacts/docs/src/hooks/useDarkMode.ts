import { useState, useEffect } from "react";

export function useDarkMode() {
  const [dark, setDark] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    const saved = localStorage.getItem("ledgely-dark");
    if (saved !== null) return saved === "1";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
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
