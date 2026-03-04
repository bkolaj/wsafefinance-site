import type { ComponentType } from "react";
import {
  Building2,
  HandCoins,
  Home as HomeIcon,
  ShieldCheck,
  Truck,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { cn } from "@/lib/utils";
import { assetUrl, brandAssets } from "@/lib/brandAssets";
import { useTheme } from "@/hooks/useTheme";

const services: Array<{
  title: string;
  icon: ComponentType<{ className?: string }>;
  description: string;
  featured?: boolean;
}> = [
  {
    title: "Kredyty hipoteczne",
    icon: HomeIcon,
    description: "Flagowy produkt. Strategia, porównanie ofert i prowadzenie procesu end-to-end.",
    featured: true,
  },
  {
    title: "Kredyty gotówkowe",
    icon: HandCoins,
    description: "Przejrzyste warunki i całkowity koszt — bez niedomówień.",
  },
  {
    title: "Kredyty firmowe",
    icon: Building2,
    description: "Finansowanie rozwoju i płynności, z analizą scenariuszy i ryzyk.",
  },
  {
    title: "Leasingi",
    icon: Truck,
    description: "Prosto i spójnie: dobór struktury, kosztu i formalności.",
  },
  {
    title: "Ubezpieczenia",
    icon: ShieldCheck,
    description: "Życie i nieruchomość — ochrona jako część bezpieczeństwa finansowego.",
  },
] as const;

function ServicePreviewCard({
  title,
  description,
  icon: Icon,
  featured,
}: {
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
  featured?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border bg-white p-6 transition-shadow duration-200 hover:shadow-soft dark:bg-midnight",
        featured ? "border-gold/40" : "border-line/80 dark:border-white/10",
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-line/80 bg-paper dark:border-white/10 dark:bg-night">
          <Icon className="h-5 w-5 text-ink dark:text-paper" />
        </div>
        {featured ? (
          <div className="rounded-full bg-gold/15 px-3 py-1 text-xs font-medium text-gold">
            Flagowy
          </div>
        ) : null}
      </div>
      <div className="mt-5 font-serif text-lg text-ink dark:text-paper">{title}</div>
      <p className="mt-3 text-sm leading-relaxed text-slateText/75 dark:text-paper/70">{description}</p>
      <Link
        to="/uslugi"
        className="mt-5 inline-flex items-center gap-2 text-sm text-ink/70 hover:text-ink dark:text-paper/70 dark:hover:text-paper"
      >
        Szczegóły
        <ChevronRight className="h-4 w-4" />
      </Link>
    </div>
  );
}

export default function Home() {
  const { isDark } = useTheme();
  const markSrc = assetUrl(isDark ? brandAssets.dark.mark : brandAssets.light.mark);
  const shortLogoSrc = assetUrl(
    isDark ? brandAssets.dark.shortLogo : brandAssets.light.shortLogo,
  );

  return (
    <main className="bg-paper dark:bg-night">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -left-24 -top-24 h-[520px] w-[520px] rounded-full bg-ink/10 blur-3xl dark:bg-white/5" />
          <div className="absolute -bottom-40 -right-24 h-[620px] w-[620px] rounded-full bg-gold/18 blur-3xl dark:bg-gold/12" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(30,52,72,0.10),transparent_60%)] dark:bg-[radial-gradient(circle_at_25%_25%,rgba(187,158,112,0.10),transparent_60%)]" />
          <div className="pointer-events-none absolute -right-20 top-12 hidden h-[520px] w-[520px] opacity-[0.07] lg:block">
            <img src={markSrc} alt="" className="h-full w-full object-contain" decoding="async" />
          </div>
        </div>

        <Container className="relative py-16 sm:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="text-xs font-medium tracking-[0.18em] text-ink/60 dark:text-paper/60">
                Rokietnica · standard ogólnopolski
              </div>
              <h1 className="mt-4 max-w-2xl font-serif text-4xl leading-[1.05] text-ink dark:text-paper sm:text-5xl">
                Finanse w porządku. Spokój w standardzie premium.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-slateText/75 dark:text-paper/70">
                Kompleksowo prowadzę proces finansowania — od analizy potrzeb i ryzyk, po wybór
                najlepszych warunków i finalizację. Bez presji, z pełną przejrzystością.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/kontakt" state={{ sourcePage: "/" }}>
                  <Button>Umów bezpłatną konsultację</Button>
                </Link>
                <Link to="/uslugi">
                  <Button variant="outline">Zobacz usługi</Button>
                </Link>
              </div>

              <div className="mt-10 grid gap-3 text-sm text-slateText/75 dark:text-paper/70 sm:grid-cols-3">
                {[
                  "Strategia dopasowana do Twojej sytuacji",
                  "Jasne porównanie ofert i kosztów",
                  "Prowadzenie procesu krok po kroku",
                ].map((t) => (
                  <div
                    key={t}
                    className="rounded-2xl border border-line/80 bg-white/70 px-4 py-3 dark:border-white/10 dark:bg-white/5"
                  >
                    {t}
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="grid gap-6">
                <div className="relative overflow-hidden rounded-3xl border border-line/80 bg-white shadow-soft dark:border-white/10 dark:bg-midnight">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(187,158,112,0.10),transparent_55%)]" />
                  <div className="relative px-7 py-8">
                    <div className="text-xs font-medium tracking-[0.18em] text-ink/60 dark:text-paper/60">
                      W. Safe Finance
                    </div>
                    <div className="mt-3 font-serif text-2xl text-ink dark:text-paper">Szwajcarski spokój, fintechowa precyzja</div>
                    <div className="mt-6">
                      <img
                        src={shortLogoSrc}
                        alt="W. Safe Finance"
                        className="block w-full max-w-[420px]"
                        loading="eager"
                        decoding="async"
                      />
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl border border-line/80 bg-white p-6 shadow-soft dark:border-white/10 dark:bg-midnight">
                  <div className="text-xs font-medium tracking-[0.18em] text-ink/60 dark:text-paper/60">Podejście</div>
                  <div className="mt-3 font-serif text-2xl text-ink dark:text-paper">Partnerstwo, nie sprzedaż</div>
                  <p className="mt-4 text-sm leading-relaxed text-slateText/75 dark:text-paper/70">
                    Nazywam się Sylwia Wiśniewska. W. Safe Finance to profesjonalny consulting finansowy,
                    w którym liczy się precyzja, poufność i spokojne prowadzenie procesu.
                  </p>
                  <div className="mt-6 grid gap-3">
                    {[
                      { title: "Bezpieczeństwo", desc: "Decyzje oparte na analizie, nie emocjach." },
                      { title: "Przejrzystość", desc: "Warunki i koszty przedstawione wprost." },
                      { title: "Opieka", desc: "Od pierwszej rozmowy do finalizacji." },
                    ].map((x) => (
                      <div key={x.title} className="rounded-2xl bg-paper px-5 py-4 dark:bg-night">
                        <div className="text-sm font-medium text-ink dark:text-paper">{x.title}</div>
                        <div className="mt-1 text-sm text-slateText/75 dark:text-paper/70">{x.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-line/70 bg-paper dark:border-white/10 dark:bg-night">
        <Container className="py-14">
          <SectionHeading
            eyebrow="Usługi"
            title="W czym mogę Ci pomóc"
            description="Elegancka, uporządkowana obsługa kluczowych produktów finansowych — ze szczególnym wyróżnieniem kredytów hipotecznych."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <ServicePreviewCard
                key={s.title}
                title={s.title}
                description={s.description}
                icon={s.icon}
                featured={s.featured}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-line/70 bg-paper dark:border-white/10 dark:bg-night">
        <Container className="py-14">
          <SectionHeading
            eyebrow="Proces"
            title="Jak pracuję"
            description="Spokojny, uporządkowany proces. Wiesz, co dzieje się na każdym etapie."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              { n: "01", t: "Bezpłatna konsultacja i cele", d: "Ustalamy priorytety, ograniczenia i horyzont." },
              { n: "02", t: "Analiza i rekomendacja", d: "Porównanie opcji, kosztów i ryzyk." },
              { n: "03", t: "Wnioski i formalności", d: "Prowadzenie procesu i dokumentów krok po kroku." },
              { n: "04", t: "Finalizacja", d: "Dopięcie szczegółów i spokojne domknięcie." },
            ].map((s) => (
              <div key={s.n} className="rounded-2xl border border-line/80 bg-white p-6 dark:border-white/10 dark:bg-midnight">
                <div className="text-xs font-medium tracking-[0.18em] text-ink/50 dark:text-paper/55">{s.n}</div>
                <div className="mt-3 font-serif text-xl text-ink dark:text-paper">{s.t}</div>
                <div className="mt-3 text-sm leading-relaxed text-slateText/75 dark:text-paper/70">{s.d}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-line/70 bg-paper dark:border-white/10 dark:bg-night">
        <Container className="py-14">
          <div className="rounded-3xl border border-line/80 bg-white p-8 shadow-soft dark:border-white/10 dark:bg-midnight sm:p-12">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-8">
                <div className="text-xs font-medium tracking-[0.18em] text-ink/60 dark:text-paper/60">Następny krok</div>
                <h2 className="mt-3 font-serif text-3xl text-ink dark:text-paper">Gotowy/a na decyzję bez zgadywania?</h2>
                <p className="mt-4 text-sm leading-relaxed text-slateText/75 dark:text-paper/70">
                  Wyślij krótki opis sytuacji — wrócę z propozycją terminu konsultacji i kolejnym krokiem.
                </p>
              </div>
              <div className="lg:col-span-4 lg:flex lg:justify-end">
                <Link to="/kontakt" state={{ sourcePage: "/" }}>
                  <Button className="w-full lg:w-auto">Umów bezpłatną konsultację</Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
