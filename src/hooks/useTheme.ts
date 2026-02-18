import { useEffect, useSyncExternalStore } from "react";

type Theme = "light" | "dark";

const THEME_KEY = "theme";

function normalizeTheme(value: unknown): Theme | null {
  if (value === "light" || value === "dark") return value;
  return null;
}

function readStoredTheme(): Theme | null {
  if (typeof window === "undefined") return null;
  return normalizeTheme(window.localStorage.getItem(THEME_KEY));
}

let currentTheme: Theme = readStoredTheme() ?? "dark";
const listeners = new Set<() => void>();

function applyTheme(theme: Theme) {
  if (typeof document === "undefined") return;
  document.documentElement.classList.remove("light", "dark");
  document.documentElement.classList.add(theme);
  document.documentElement.dataset.theme = theme;
}

applyTheme(currentTheme);

function setTheme(next: Theme) {
  if (next === currentTheme) return;
  currentTheme = next;
  if (typeof window !== "undefined") {
    window.localStorage.setItem(THEME_KEY, next);
  }
  applyTheme(next);
  listeners.forEach((l) => l());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getSnapshot() {
  return currentTheme;
}

function getServerSnapshot(): Theme {
  return "dark";
}

export function useTheme() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    const stored = readStoredTheme();
    if (stored && stored !== currentTheme) {
      setTheme(stored);
      return;
    }
    applyTheme(currentTheme);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return {
    theme,
    toggleTheme,
    isDark: theme === "dark",
  };
}
