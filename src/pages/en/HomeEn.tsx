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
    title: "Mortgage loans",
    icon: HomeIcon,
    description: "Flagship service. Strategy, offer comparison and end-to-end guidance.",
    featured: true,
  },
  {
    title: "Cash loans",
    icon: HandCoins,
    description: "Clear terms and total cost — no fine print.",
  },
  {
    title: "Business loans",
    icon: Building2,
    description: "Funding growth and liquidity with scenario and risk analysis.",
  },
  {
    title: "Leasing",
    icon: Truck,
    description: "Simple and consistent: structure, cost and formalities.",
  },
  {
    title: "Insurance",
    icon: ShieldCheck,
    description: "Life and property — protection as part of financial security.",
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
            Featured
          </div>
        ) : null}
      </div>
      <div className="mt-5 font-serif text-lg text-ink dark:text-paper">{title}</div>
      <p className="mt-3 text-sm leading-relaxed text-slateText/75 dark:text-paper/70">{description}</p>
      <Link
        to="/en/services"
        className="mt-5 inline-flex items-center gap-2 text-sm text-ink/70 hover:text-ink dark:text-paper/70 dark:hover:text-paper"
      >
        Details
        <ChevronRight className="h-4 w-4" />
      </Link>
    </div>
  );
}

export default function HomeEn() {
  const { isDark } = useTheme();
  const markSrc = assetUrl(isDark ? brandAssets.dark.mark : brandAssets.light.mark);
  const shortLogoSrc = assetUrl(isDark ? brandAssets.dark.shortLogo : brandAssets.light.shortLogo);

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
                Rokietnica · nationwide standard
              </div>
              <h1 className="mt-4 max-w-2xl font-serif text-4xl leading-[1.05] text-ink dark:text-paper sm:text-5xl">
                Order in your finances. Premium peace of mind.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-slateText/75 dark:text-paper/70">
                I guide your financing process end-to-end — from needs and risk analysis, through the best offer
                selection, to closing. No pressure. Full clarity.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/en/contact" state={{ sourcePage: "/en" }}>
                  <Button>Book a free consultation</Button>
                </Link>
                <Link to="/en/services">
                  <Button variant="outline">See services</Button>
                </Link>
              </div>

              <div className="mt-10 grid gap-3 text-sm text-slateText/75 dark:text-paper/70 sm:grid-cols-3">
                {[
                  "Strategy tailored to your situation",
                  "Clear comparison of offers and costs",
                  "Step-by-step guidance",
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
                    <div className="mt-3 font-serif text-2xl text-ink dark:text-paper">
                      Swiss calm, fintech precision
                    </div>
                    <div className="mt-6">
                      <img
                        src={shortLogoSrc}
                        alt="W. Safe Finance"
                        className="block w-full max-w-[460px]"
                        loading="eager"
                        decoding="async"
                      />
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl border border-line/80 bg-white p-6 shadow-soft dark:border-white/10 dark:bg-midnight">
                  <div className="text-xs font-medium tracking-[0.18em] text-ink/60 dark:text-paper/60">Approach</div>
                  <div className="mt-3 font-serif text-2xl text-ink dark:text-paper">Partnership, not sales</div>
                  <p className="mt-4 text-sm leading-relaxed text-slateText/75 dark:text-paper/70">
                    My name is Sylwia Wiśniewska. W. Safe Finance is professional financial consulting built on precision,
                    confidentiality and calm guidance.
                  </p>
                  <div className="mt-6 grid gap-3">
                    {[
                      { title: "Security", desc: "Decisions based on analysis, not emotions." },
                      { title: "Clarity", desc: "Terms and costs explained plainly." },
                      { title: "Care", desc: "From the first call to closing." },
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
            eyebrow="Services"
            title="How I can help"
            description="Elegant, structured support across key financial products — with a special focus on mortgages."
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
            eyebrow="Process"
            title="How we work"
            description="A calm, structured process. You always know what’s happening."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              { n: "01", t: "Free consultation & goals", d: "We define priorities, constraints and timeline." },
              { n: "02", t: "Analysis & recommendation", d: "Comparison of options, costs and risks." },
              { n: "03", t: "Applications & paperwork", d: "Guidance through documents step by step." },
              { n: "04", t: "Closing", d: "Final details and a calm finish." },
            ].map((s) => (
              <div
                key={s.n}
                className="rounded-2xl border border-line/80 bg-white p-6 dark:border-white/10 dark:bg-midnight"
              >
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
                <div className="text-xs font-medium tracking-[0.18em] text-ink/60 dark:text-paper/60">Next step</div>
                <h2 className="mt-3 font-serif text-3xl text-ink dark:text-paper">Ready to decide without guessing?</h2>
                <p className="mt-4 text-sm leading-relaxed text-slateText/75 dark:text-paper/70">
                  Send a short description — I’ll come back with a consultation slot and the next step.
                </p>
              </div>
              <div className="lg:col-span-4 lg:flex lg:justify-end">
                <Link to="/en/contact" state={{ sourcePage: "/en" }}>
                  <Button className="w-full lg:w-auto">Book a free consultation</Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
