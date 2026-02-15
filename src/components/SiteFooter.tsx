import { Link, useLocation } from "react-router-dom";
import { Container } from "@/components/Container";

export function SiteFooter() {
  const location = useLocation();
  const isEn = location.pathname === "/en" || location.pathname.startsWith("/en/");

  return (
    <footer className="border-t border-line/70 bg-paper dark:border-white/10 dark:bg-night">
      <Container className="py-12">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="font-serif text-lg text-ink dark:text-paper">W. Safe Finance</div>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-slateText/70 dark:text-paper/70">
              {isEn
                ? "Professional financial advisory with a premium standard — calm, transparent and without pressure."
                : "Profesjonalne doradztwo finansowe o standardzie premium — spokojnie, przejrzyście i bez presji."}
            </p>
          </div>

          <div className="grid gap-8 md:col-span-7 md:grid-cols-2">
            <div>
              <div className="text-xs font-medium tracking-[0.18em] text-ink/60 dark:text-paper/55">
                {isEn ? "Contact" : "Kontakt"}
              </div>
              <div className="mt-3 grid gap-2 text-sm text-ink dark:text-paper">
                <a className="hover:underline" href="tel:782002822">
                  782-002-822
                </a>
                <a className="hover:underline" href="mailto:biuro@wsafefinance.pl">
                  biuro@wsafefinance.pl
                </a>
                <div className="text-slateText/70 dark:text-paper/70">
                  ul. Spichrzowa 11, 62-090 Rokietnica
                </div>
              </div>
            </div>

            <div>
              <div className="text-xs font-medium tracking-[0.18em] text-ink/60 dark:text-paper/55">
                {isEn ? "Links" : "Linki"}
              </div>
              <div className="mt-3 grid gap-2 text-sm">
                <a
                  className="text-ink/80 hover:text-ink hover:underline dark:text-paper/75 dark:hover:text-paper"
                  href="https://instagram.com/w.safefinance"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram: w.safefinance
                </a>
                <Link
                  className="text-ink/80 hover:text-ink hover:underline dark:text-paper/75 dark:hover:text-paper"
                  to={isEn ? "/en/privacy-policy" : "/polityka-prywatnosci"}
                >
                  {isEn ? "Privacy policy" : "Polityka prywatności"}
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-line/70 pt-6 text-xs text-slateText/70 dark:border-white/10 dark:text-paper/60 sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} W. Safe Finance</div>
          <div>www.wsafefinance.pl</div>
        </div>
      </Container>
    </footer>
  );
}
