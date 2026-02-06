import { useMemo, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";

const navItems = [
  { to: "/", label: "Start" },
  { to: "/uslugi", label: "Usługi" },
  { to: "/kontakt", label: "Kontakt" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isTransparent = useMemo(() => location.pathname === "/", [location.pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-line/60 backdrop-blur supports-[backdrop-filter]:bg-paper/75",
        isTransparent ? "bg-paper/70" : "bg-paper/85",
      )}
    >
      <Container className="flex h-16 items-center justify-between">
        <Link to="/" className="group inline-flex items-baseline gap-2">
          <span className="font-serif text-lg text-ink">W. Safe Finance</span>
          <span className="hidden text-xs tracking-[0.16em] text-ink/50 sm:inline">
            Sylwia Wiśniewska
          </span>
          <span className="sr-only">Przejdź do strony głównej</span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Nawigacja">
          {navItems.map((it) => (
            <NavLink
              key={it.to}
              to={it.to}
              className={({ isActive }) =>
                cn(
                  "text-sm transition-colors",
                  isActive ? "text-ink" : "text-ink/65 hover:text-ink",
                )
              }
            >
              {it.label}
            </NavLink>
          ))}
          <Link to="/kontakt">
            <Button variant="outline" size="sm">
              Umów bezpłatną konsultację
            </Button>
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-line/70 text-ink/70 transition-colors hover:bg-ink/5 md:hidden"
          aria-label={open ? "Zamknij menu" : "Otwórz menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      {open ? (
        <div className="border-t border-line/60 md:hidden">
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
                      isActive ? "bg-ink/5 text-ink" : "text-ink/70 hover:bg-ink/5",
                    )
                  }
                >
                  {it.label}
                </NavLink>
              ))}
              <Link to="/kontakt" onClick={() => setOpen(false)}>
                <Button className="w-full" variant="primary">
                  Umów bezpłatną konsultację
                </Button>
              </Link>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}

