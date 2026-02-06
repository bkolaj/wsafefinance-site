import { Link } from "react-router-dom";
import { Container } from "@/components/Container";

export function SiteFooter() {
  return (
    <footer className="border-t border-line/70 bg-paper">
      <Container className="py-12">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="font-serif text-lg text-ink">W. Safe Finance</div>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-slateText/70">
              Butikowe doradztwo finansowe o standardzie premium — spokojnie, przejrzyście i bez
              presji.
            </p>
          </div>

          <div className="grid gap-8 md:col-span-7 md:grid-cols-2">
            <div>
              <div className="text-xs font-medium tracking-[0.18em] text-ink/60">Kontakt</div>
              <div className="mt-3 grid gap-2 text-sm text-ink">
                <a className="hover:underline" href="tel:782002822">
                  782-002-822
                </a>
                <a className="hover:underline" href="mailto:biuro@wsafefinance.pl">
                  biuro@wsafefinance.pl
                </a>
                <div className="text-slateText/70">
                  ul. Spichrzowa 11, 62-090 Rokietnica
                </div>
              </div>
            </div>

            <div>
              <div className="text-xs font-medium tracking-[0.18em] text-ink/60">Linki</div>
              <div className="mt-3 grid gap-2 text-sm">
                <a
                  className="text-ink/80 hover:text-ink hover:underline"
                  href="https://instagram.com/w.safefinance"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram: w.safefinance
                </a>
                <Link className="text-ink/80 hover:text-ink hover:underline" to="/polityka-prywatnosci">
                  Polityka prywatności
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-line/70 pt-6 text-xs text-slateText/70 sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} W. Safe Finance</div>
          <div>www.wsafefinance.pl</div>
        </div>
      </Container>
    </footer>
  );
}

