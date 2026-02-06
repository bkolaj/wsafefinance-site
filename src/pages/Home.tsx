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
        "rounded-2xl border bg-white p-6 transition-shadow duration-200 hover:shadow-soft",
        featured ? "border-gold/40" : "border-line/80",
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-line/80 bg-paper">
          <Icon className="h-5 w-5 text-ink" />
        </div>
        {featured ? (
          <div className="rounded-full bg-gold/15 px-3 py-1 text-xs font-medium text-gold">
            Flagowy
          </div>
        ) : null}
      </div>
      <div className="mt-5 font-serif text-lg text-ink">{title}</div>
      <p className="mt-3 text-sm leading-relaxed text-slateText/75">{description}</p>
      <Link
        to="/uslugi"
        className="mt-5 inline-flex items-center gap-2 text-sm text-ink/70 hover:text-ink"
      >
        Szczegóły
        <ChevronRight className="h-4 w-4" />
      </Link>
    </div>
  );
}

export default function Home() {
  return (
    <main className="bg-paper">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -left-24 -top-24 h-[520px] w-[520px] rounded-full bg-ink/10 blur-3xl" />
          <div className="absolute -bottom-40 -right-24 h-[620px] w-[620px] rounded-full bg-gold/18 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(11,31,59,0.10),transparent_60%)]" />
        </div>

        <Container className="relative py-16 sm:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="text-xs font-medium tracking-[0.18em] text-ink/60">
                Rokietnica · standard ogólnopolski
              </div>
              <h1 className="mt-4 max-w-2xl font-serif text-4xl leading-[1.05] text-ink sm:text-5xl">
                Finanse w porządku. Spokój w standardzie premium.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-slateText/75">
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

              <div className="mt-10 grid gap-3 text-sm text-slateText/75 sm:grid-cols-3">
                {[
                  "Strategia dopasowana do Twojej sytuacji",
                  "Jasne porównanie ofert i kosztów",
                  "Prowadzenie procesu krok po kroku",
                ].map((t) => (
                  <div key={t} className="rounded-2xl border border-line/80 bg-white/70 px-4 py-3">
                    {t}
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-line/80 bg-white p-6 shadow-soft">
                <div className="text-xs font-medium tracking-[0.18em] text-ink/60">Podejście</div>
                <div className="mt-3 font-serif text-2xl text-ink">Partnerstwo, nie sprzedaż</div>
                <p className="mt-4 text-sm leading-relaxed text-slateText/75">
                  Nazywam się Sylwia Wiśniewska. W. Safe Finance to butikowe doradztwo finansowe,
                  w którym liczy się precyzja, poufność i spokojne prowadzenie procesu.
                </p>
                <div className="mt-6 grid gap-3">
                  {[
                    { title: "Bezpieczeństwo", desc: "Decyzje oparte na analizie, nie emocjach." },
                    { title: "Przejrzystość", desc: "Warunki i koszty przedstawione wprost." },
                    { title: "Opieka", desc: "Od pierwszej rozmowy do finalizacji." },
                  ].map((x) => (
                    <div key={x.title} className="rounded-2xl bg-paper px-5 py-4">
                      <div className="text-sm font-medium text-ink">{x.title}</div>
                      <div className="mt-1 text-sm text-slateText/75">{x.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-line/70 bg-paper">
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

      <section className="border-t border-line/70 bg-paper">
        <Container className="py-14">
          <SectionHeading
            eyebrow="Zaufanie"
            title="Zaufanie buduje się faktami"
            description="Miejsce na logotypy banków partnerskich w wersji monochromatycznej — bez agresywnych kolorów."
          />
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "LOGO BANKU",
              "LOGO BANKU",
              "LOGO BANKU",
              "LOGO BANKU",
              "LOGO BANKU",
              "LOGO BANKU",
              "LOGO BANKU",
              "LOGO BANKU",
            ].map((t, idx) => (
              <div
                key={`${t}-${idx}`}
                className="flex h-14 items-center justify-center rounded-2xl border border-line/80 bg-white text-xs font-medium tracking-[0.22em] text-ink/35"
              >
                {t}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-line/70 bg-paper">
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
              <div key={s.n} className="rounded-2xl border border-line/80 bg-white p-6">
                <div className="text-xs font-medium tracking-[0.18em] text-ink/50">{s.n}</div>
                <div className="mt-3 font-serif text-xl text-ink">{s.t}</div>
                <div className="mt-3 text-sm leading-relaxed text-slateText/75">{s.d}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-line/70 bg-paper">
        <Container className="py-14">
          <div className="rounded-3xl border border-line/80 bg-white p-8 shadow-soft sm:p-12">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-8">
                <div className="text-xs font-medium tracking-[0.18em] text-ink/60">Następny krok</div>
                <h2 className="mt-3 font-serif text-3xl text-ink">Gotowy/a na decyzję bez zgadywania?</h2>
                <p className="mt-4 text-sm leading-relaxed text-slateText/75">
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
