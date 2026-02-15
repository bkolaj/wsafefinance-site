import type { ComponentType } from "react";
import {
  Building2,
  HandCoins,
  Home,
  ShieldCheck,
  Truck,
  ChevronDown,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import { cn } from "@/lib/utils";

type Service = {
  title: string;
  icon: ComponentType<{ className?: string }>;
  description: string;
  bullets: string[];
  featured?: boolean;
};

const services: Service[] = [
  {
    title: "Kredyty hipoteczne",
    icon: Home,
    description:
      "Flagowy obszar. Prowadzenie całego procesu: od strategii i analizy po podpisanie umowy.",
    bullets: [
      "Wybór rozwiązania dopasowanego do Twojej sytuacji",
      "Porównanie ofert i kosztów w czasie",
      "Wsparcie w dokumentach i komunikacji z bankiem",
    ],
    featured: true,
  },
  {
    title: "Kredyty gotówkowe",
    icon: HandCoins,
    description:
      "Finansowanie celów prywatnych z naciskiem na przejrzyste warunki i całkowity koszt.",
    bullets: ["Dobór okresu i raty", "Optymalizacja kosztu", "Czytelna rekomendacja"],
  },
  {
    title: "Kredyty firmowe",
    icon: Building2,
    description:
      "Finansowanie rozwoju, inwestycji i płynności — z analizą scenariuszy i ryzyk.",
    bullets: ["Zdolność i dokumenty", "Scenariusze spłat", "Proces wnioskowy end-to-end"],
  },
  {
    title: "Leasingi",
    icon: Truck,
    description:
      "Spójne podejście do finansowania aktywów w firmie — bez zbędnej komplikacji.",
    bullets: ["Dobór struktury", "Porównanie kosztów", "Prowadzenie formalności"],
  },
  {
    title: "Ubezpieczenia",
    icon: ShieldCheck,
    description:
      "Ochrona życia i nieruchomości jako element bezpieczeństwa finansowego.",
    bullets: ["Dopasowanie do finansowania", "Czytelne warianty", "Minimalizm w papierologii"],
  },
];

const faqs = [
  {
    q: "Od czego zaczynamy?",
    a: "Od krótkiej rozmowy i zdefiniowania priorytetów. Następnie przygotowuję plan działania i rekomendację kolejnych kroków.",
  },
  {
    q: "Czy mogę skorzystać z obsługi zdalnie?",
    a: "Tak. Obsługa może być prowadzona zdalnie w całej Polsce, z zachowaniem tego samego standardu i poufności.",
  },
  {
    q: "Jak szybko otrzymam informację zwrotną?",
    a: "Zwykle odpowiadam w ciągu 1–2 dni roboczych. W pilnych przypadkach ustalimy priorytet na starcie.",
  },
] as const;

function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;

  return (
    <div
      className={cn(
        "group rounded-2xl border bg-white p-6 transition-shadow duration-200 hover:shadow-soft dark:bg-midnight",
        service.featured ? "border-gold/40" : "border-line/80 dark:border-white/10",
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-3">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-line/80 bg-paper dark:border-white/10 dark:bg-night">
              <Icon className="h-5 w-5 text-ink dark:text-paper" />
            </div>
            <div className="font-serif text-lg text-ink dark:text-paper">{service.title}</div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-slateText/75 dark:text-paper/70">{service.description}</p>
        </div>
        {service.featured ? (
          <div className="rounded-full bg-gold/15 px-3 py-1 text-xs font-medium text-gold">
            Flagowy
          </div>
        ) : null}
      </div>

      <ul className="mt-5 grid gap-2 text-sm text-slateText/75 dark:text-paper/70">
        {service.bullets.map((b) => (
          <li key={b} className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-ink/35 dark:bg-white/30" />
            <span>{b}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6">
        <Link
          to="/kontakt"
          className="inline-flex items-center gap-2 text-sm text-ink/70 hover:text-ink dark:text-paper/70 dark:hover:text-paper"
        >
          Umów konsultację
          <span className="text-ink/35 dark:text-paper/35">→</span>
        </Link>
      </div>
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="group rounded-2xl border border-line/80 bg-white px-6 py-4 dark:border-white/10 dark:bg-midnight">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-sm font-medium text-ink dark:text-paper">
        <span>{q}</span>
        <ChevronDown className="h-4 w-4 text-ink/60 transition-transform duration-200 group-open:rotate-180 dark:text-paper/60" />
      </summary>
      <p className="mt-3 text-sm leading-relaxed text-slateText/75 dark:text-paper/70">{a}</p>
    </details>
  );
}

export default function Services() {
  return (
    <main className="bg-paper dark:bg-night">
      <div className="border-b border-line/70 bg-paper dark:border-white/10 dark:bg-night">
        <Container className="relative overflow-hidden py-14 sm:py-20">
          <div className="pointer-events-none absolute -right-10 -top-10 hidden h-56 w-56 opacity-[0.08] sm:block">
            <img src="/photos/light/solo_logo.png" alt="" className="h-full w-full object-contain dark:hidden" />
            <img src="/photos/dark/solo_logo_white.png" alt="" className="hidden h-full w-full object-contain dark:block" />
          </div>
          <SectionHeading
            eyebrow="Oferta"
            title="Usługi zaprojektowane pod stabilność"
            description="Wybierz zakres — dopasuję proces i tempo do Twoich ograniczeń. Bez presji, z pełną przejrzystością na każdym etapie."
          />
          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/kontakt">
              <Button>Umów bezpłatną konsultację</Button>
            </Link>
            <Link to="/">
              <Button variant="outline">Wróć na start</Button>
            </Link>
          </div>
        </Container>
      </div>

      <Container className="py-14">
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <ServiceCard key={s.title} service={s} />
          ))}
        </div>
      </Container>

      <div className="border-t border-line/70 bg-paper dark:border-white/10 dark:bg-night">
        <Container className="py-14">
          <SectionHeading
            eyebrow="Warianty"
            title="Pakiety współpracy"
            description="Jeśli nie wiesz, który wariant wybrać — zacznijmy od krótkiej rozmowy."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {[
              {
                name: "Essential",
                price: "Start",
                items: ["Krótka diagnoza", "Rekomendacja kierunku", "Lista dokumentów"],
              },
              {
                name: "Professional",
                price: "Najczęściej",
                items: ["Analiza + porównanie ofert", "Prowadzenie procesu", "Wsparcie formalne"],
                featured: true,
              },
              {
                name: "Executive",
                price: "Premium",
                items: ["Priorytet i tempo", "Scenariusze ryzyka", "Opieka end-to-end"],
              },
            ].map((p) => (
              <div
                key={p.name}
                className={cn(
                  "rounded-2xl border bg-white p-6 dark:bg-midnight",
                  p.featured ? "border-gold/45 shadow-soft" : "border-line/80 dark:border-white/10",
                )}
              >
                <div className="flex items-baseline justify-between gap-4">
                  <div className="font-serif text-xl text-ink dark:text-paper">{p.name}</div>
                  <div className="text-xs font-medium tracking-[0.18em] text-ink/60 dark:text-paper/60">{p.price}</div>
                </div>
                <ul className="mt-5 grid gap-2 text-sm text-slateText/75 dark:text-paper/70">
                  {p.items.map((it) => (
                    <li key={it} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-ink/35 dark:bg-white/30" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Link to="/kontakt">
                    <Button className="w-full" variant={p.featured ? "primary" : "outline"}>
                      Wybierz i porozmawiajmy
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>

      <Container className="py-14">
        <SectionHeading eyebrow="FAQ" title="Najczęstsze pytania" />
        <div className="mt-10 grid gap-3">
          {faqs.map((f) => (
            <FaqItem key={f.q} q={f.q} a={f.a} />
          ))}
        </div>
      </Container>
    </main>
  );
}
