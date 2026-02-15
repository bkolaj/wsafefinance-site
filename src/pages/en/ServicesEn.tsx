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
import { assetUrl, brandAssets } from "@/lib/brandAssets";
import { useTheme } from "@/hooks/useTheme";

type Service = {
  title: string;
  icon: ComponentType<{ className?: string }>;
  description: string;
  bullets: string[];
  featured?: boolean;
};

const services: Service[] = [
  {
    title: "Mortgage loans",
    icon: Home,
    description: "Flagship area. Full process support — from strategy to signing.",
    bullets: [
      "Help choosing a solution tailored to your financial situation",
      "Comparison of offers from multiple banks",
      "Support with documents and bank communication",
    ],
    featured: true,
  },
  {
    title: "Cash loans",
    icon: HandCoins,
    description: "Financing personal goals with focus on clear terms and total cost.",
    bullets: [
      "Repayment period & monthly payment",
      "Cost optimization",
      "Help finding the most advantageous offer",
    ],
  },
  {
    title: "Business loans",
    icon: Building2,
    description: "Funding growth, investments and liquidity — with scenario and risk analysis.",
    bullets: ["Eligibility & documents", "Repayment scenarios", "End-to-end application"],
  },
  {
    title: "Leasing",
    icon: Truck,
    description: "A consistent approach to business asset financing — without complexity.",
    bullets: ["Structure selection", "Cost comparison", "Formalities support"],
  },
  {
    title: "Insurance",
    icon: ShieldCheck,
    description: "Life and property protection as part of financial security.",
    bullets: ["Aligned with financing", "Clear options", "Minimal paperwork"],
  },
];

const faqs = [
  {
    q: "Where do we start?",
    a: "With a short call and defining priorities. Next, I prepare a plan and recommend the next steps.",
  },
  {
    q: "Can we work remotely?",
    a: "Yes. I can support clients remotely across Poland with the same standard and confidentiality.",
  },
  {
    q: "How soon will I hear back?",
    a: "Usually within 1–2 business days. For urgent cases we’ll agree on priority upfront.",
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
          <div className="rounded-full bg-gold/15 px-3 py-1 text-xs font-medium text-gold">Featured</div>
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
          to="/en/contact"
          className="inline-flex items-center gap-2 text-sm text-ink/70 hover:text-ink dark:text-paper/70 dark:hover:text-paper"
        >
          Book a consultation
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

export default function ServicesEn() {
  const { isDark } = useTheme();
  const markSrc = assetUrl(isDark ? brandAssets.dark.mark : brandAssets.light.mark);

  return (
    <main className="bg-paper dark:bg-night">
      <div className="border-b border-line/70 bg-paper dark:border-white/10 dark:bg-night">
        <Container className="relative overflow-hidden py-14 sm:py-20">
          <div className="pointer-events-none absolute -right-10 -top-10 hidden h-56 w-56 opacity-[0.08] sm:block">
            <img src={markSrc} alt="" className="h-full w-full object-contain" decoding="async" />
          </div>
          <SectionHeading
            eyebrow="Offer"
            title="Services designed for stability"
            description="Pick a scope — I’ll match the process and pace to your constraints. No pressure, full clarity at every step."
          />
          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/en/contact">
              <Button>Book a free consultation</Button>
            </Link>
            <Link to="/en">
              <Button variant="outline">Back to home</Button>
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
            eyebrow="Packages"
            title="Collaboration options"
            description="Not sure which package is best? Let’s start with a quick call."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {[
              {
                name: "Essential",
                price: "Start",
                items: ["Quick diagnosis", "Direction recommendation", "Document checklist"],
              },
              {
                name: "Professional",
                price: "Most popular",
                items: ["Analysis + offer comparison", "Process guidance", "Formal support"],
                featured: true,
              },
              {
                name: "Executive",
                price: "Premium",
                items: ["Priority & pace", "Risk scenarios", "End-to-end care"],
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
                  <Link to="/en/contact">
                    <Button className="w-full" variant={p.featured ? "primary" : "outline"}>
                      Choose and talk
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>

      <Container className="py-14">
        <SectionHeading eyebrow="FAQ" title="Frequently asked questions" />
        <div className="mt-10 grid gap-3">
          {faqs.map((f) => (
            <FaqItem key={f.q} q={f.q} a={f.a} />
          ))}
        </div>
      </Container>
    </main>
  );
}
