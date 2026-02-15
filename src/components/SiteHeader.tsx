import { useMemo, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Menu, Moon, Sun, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { useTheme } from "@/hooks/useTheme";
import { assetUrl, brandAssets } from "@/lib/brandAssets";

function toEnPath(pathname: string) {
  if (pathname === "/") return "/en";
  if (pathname === "/uslugi") return "/en/services";
  if (pathname === "/kontakt") return "/en/contact";
  if (pathname === "/polityka-prywatnosci") return "/en/privacy-policy";
  return pathname.startsWith("/en") ? pathname : `/en${pathname === "/" ? "" : pathname}`;
}

function toPlPath(pathname: string) {
  if (pathname === "/en") return "/";
  if (pathname === "/en/services") return "/uslugi";
  if (pathname === "/en/contact") return "/kontakt";
  if (pathname === "/en/privacy-policy") return "/polityka-prywatnosci";
  return pathname.startsWith("/en/") ? pathname.replace(/^\/en/, "") : pathname;
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { toggleTheme, isDark } = useTheme();

  const isEn = useMemo(
    () => location.pathname === "/en" || location.pathname.startsWith("/en/"),
    [location.pathname],
  );

  const navItems = useMemo(
    () =>
      isEn
        ? ([
            { to: "/en", label: "Home" },
            { to: "/en/services", label: "Services" },
            { to: "/en/contact", label: "Contact" },
          ] as const)
        : ([
            { to: "/", label: "Start" },
            { to: "/uslugi", label: "Usługi" },
            { to: "/kontakt", label: "Kontakt" },
          ] as const),
    [isEn],
  );

  const headerLogoSrc = assetUrl(
    isDark ? brandAssets.dark.headerLogo : brandAssets.light.headerLogo,
  );

  const isTransparent = useMemo(() => location.pathname === "/" || location.pathname === "/en", [location.pathname]);
  const languageHref = useMemo(
    () => (isEn ? toPlPath(location.pathname) : toEnPath(location.pathname)),
    [isEn, location.pathname],
  );

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-line/60 bg-paper/80 backdrop-blur supports-[backdrop-filter]:bg-paper/75 dark:border-white/10 dark:bg-night/70 dark:supports-[backdrop-filter]:bg-night/55",
        isTransparent ? "" : "",
      )}
    >
      <Container className="flex h-16 items-center justify-between">
        <Link to={isEn ? "/en" : "/"} className="group inline-flex items-center gap-3">
          <img
            src={headerLogoSrc}
            alt="W. Safe Finance"
            className="h-9 w-auto select-none object-contain"
            loading="eager"
            decoding="async"
          />
          <span className="sr-only">{isEn ? "Go to homepage" : "Przejdź do strony głównej"}</span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Nawigacja">
          {navItems.map((it) => (
            <NavLink
              key={it.to}
              to={it.to}
              className={({ isActive }) =>
                cn(
                  "text-sm transition-colors",
                  isActive
                    ? "text-ink dark:text-paper"
                    : "text-ink/65 hover:text-ink dark:text-paper/70 dark:hover:text-paper",
                )
              }
            >
              {it.label}
            </NavLink>
          ))}
          <Link to={isEn ? "/en/contact" : "/kontakt"}>
            <Button variant="outline" size="sm">
              {isEn ? "Book a free consultation" : "Umów bezpłatną konsultację"}
            </Button>
          </Link>
          <Link
            to={languageHref}
            className="text-xs font-medium tracking-[0.18em] text-ink/65 hover:text-ink dark:text-paper/70 dark:hover:text-paper"
            aria-label={isEn ? "Switch language to Polish" : "Przełącz język na angielski"}
          >
            {isEn ? "PL" : "EN"}
          </Link>
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-line/70 text-ink/70 transition-colors hover:bg-ink/5 dark:border-white/10 dark:text-paper/70 dark:hover:bg-white/10"
            aria-label={isDark ? "Przełącz na tryb jasny" : "Przełącz na tryb ciemny"}
            onClick={toggleTheme}
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <Link
            to={languageHref}
            className="inline-flex h-10 items-center justify-center rounded-xl border border-line/70 px-3 text-xs font-medium tracking-[0.18em] text-ink/70 transition-colors hover:bg-ink/5 dark:border-white/10 dark:text-paper/70 dark:hover:bg-white/10"
            aria-label={isEn ? "Switch language to Polish" : "Przełącz język na angielski"}
          >
            {isEn ? "PL" : "EN"}
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-line/70 text-ink/70 transition-colors hover:bg-ink/5 dark:border-white/10 dark:text-paper/70 dark:hover:bg-white/10"
            aria-label={isDark ? "Przełącz na tryb jasny" : "Przełącz na tryb ciemny"}
            onClick={toggleTheme}
          >
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-line/70 text-ink/70 transition-colors hover:bg-ink/5 dark:border-white/10 dark:text-paper/70 dark:hover:bg-white/10"
            aria-label={open ? "Zamknij menu" : "Otwórz menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      {open ? (
        <div className="border-t border-line/60 dark:border-white/10 md:hidden">
          <Container className="py-4">
            <div className="grid gap-2">
              {navItems.map((it) => (
                <NavLink
                  key={it.to}
                  to={it.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      "rounded-xl px-4 py-3 text-sm",
                      isActive
                        ? "bg-ink/5 text-ink dark:bg-white/10 dark:text-paper"
                        : "text-ink/70 hover:bg-ink/5 dark:text-paper/70 dark:hover:bg-white/10",
                    )
                  }
                >
                  {it.label}
                </NavLink>
              ))}
              <Link to={isEn ? "/en/contact" : "/kontakt"} onClick={() => setOpen(false)}>
                <Button className="w-full" variant="primary">
                  {isEn ? "Book a free consultation" : "Umów bezpłatną konsultację"}
                </Button>
              </Link>
              <Link
                to={languageHref}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm text-ink/70 hover:bg-ink/5 dark:text-paper/70 dark:hover:bg-white/10"
              >
                {isEn ? "Switch to Polish" : "Switch to English"}
              </Link>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
