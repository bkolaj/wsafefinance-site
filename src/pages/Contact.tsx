import type { FormEvent } from "react";
import { useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import { cn } from "@/lib/utils";
import { assetUrl, brandAssets } from "@/lib/brandAssets";
import { useTheme } from "@/hooks/useTheme";

type ContactFormValues = {
  name: string;
  email: string;
  phone: string;
  topic: string;
  message: string;
};

type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>;

function isValidEmail(value: string) {
  const v = value.trim();
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

function InputField({
  label,
  value,
  onChange,
  name,
  type = "text",
  placeholder,
  error,
}: {
  label: string;
  name: keyof ContactFormValues;
  value: string;
  onChange: (next: string) => void;
  type?: string;
  placeholder?: string;
  error?: string;
}) {
  return (
    <div className="grid gap-2">
      <label className="text-xs font-medium tracking-[0.12em] text-ink/65 dark:text-paper/60" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={cn(
          "h-11 w-full rounded-xl border bg-white px-4 text-sm text-slateText outline-none transition-colors placeholder:text-slateText/45 focus:border-gold/55 focus:ring-2 focus:ring-gold/20 dark:border-white/10 dark:bg-night dark:text-paper dark:placeholder:text-paper/40",
          error ? "border-red-300" : "border-line/80",
        )}
      />
      {error ? <div className="text-xs text-red-600">{error}</div> : null}
    </div>
  );
}

function TextareaField({
  label,
  value,
  onChange,
  name,
  placeholder,
  error,
}: {
  label: string;
  name: keyof ContactFormValues;
  value: string;
  onChange: (next: string) => void;
  placeholder?: string;
  error?: string;
}) {
  return (
    <div className="grid gap-2">
      <label className="text-xs font-medium tracking-[0.12em] text-ink/65 dark:text-paper/60" htmlFor={name}>
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={6}
        className={cn(
          "w-full resize-none rounded-xl border bg-white px-4 py-3 text-sm leading-relaxed text-slateText outline-none transition-colors placeholder:text-slateText/45 focus:border-gold/55 focus:ring-2 focus:ring-gold/20 dark:border-white/10 dark:bg-night dark:text-paper dark:placeholder:text-paper/40",
          error ? "border-red-300" : "border-line/80",
        )}
      />
      {error ? <div className="text-xs text-red-600">{error}</div> : null}
    </div>
  );
}

export default function Contact() {
  const location = useLocation();
  const sourcePage = useMemo(() => location.state?.sourcePage ?? location.pathname, [location]);
  const { isDark } = useTheme();
  const markSrc = assetUrl(isDark ? brandAssets.dark.mark : brandAssets.light.mark);

  const [values, setValues] = useState<ContactFormValues>({
    name: "",
    email: "",
    phone: "",
    topic: "",
    message: "",
  });
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const validate = () => {
    const next: ContactFormErrors = {};
    if (!values.name.trim()) next.name = "Podaj imię i nazwisko lub nazwę.";
    if (!values.email.trim()) next.email = "Podaj adres e-mail.";
    else if (!isValidEmail(values.email)) next.email = "Podaj poprawny adres e-mail.";
    if (!values.message.trim()) next.message = "Wpisz krótką wiadomość (min. 1 zdanie).";
    return next;
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");
    await new Promise((r) => setTimeout(r, 650));

    const payload = {
      ...values,
      sourcePage,
      createdAt: new Date().toISOString(),
    };

    try {
      const existingRaw = localStorage.getItem("wsf_leads");
      const existing = existingRaw ? (JSON.parse(existingRaw) as unknown[]) : [];
      localStorage.setItem("wsf_leads", JSON.stringify([payload, ...existing].slice(0, 50)));
    } catch {
      setErrors((s) => s);
    }

    setStatus("success");
  };

  return (
    <main className="bg-paper dark:bg-night">
      <Container className="py-14 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Kontakt"
              title="Umów bezpłatną konsultację"
              description="Napisz 2–3 zdania: cel, horyzont, najważniejsze ograniczenia. Wrócę z propozycją kolejnego kroku."
            />

            <div className="mt-10 rounded-2xl border border-line/80 bg-white p-6 sm:p-8 dark:border-white/10 dark:bg-midnight">
              {status === "success" ? (
                <div className="max-w-xl">
                  <div className="text-xs font-medium tracking-[0.18em] text-ink/60 dark:text-paper/60">Wysłano</div>
                  <h2 className="mt-3 font-serif text-2xl text-ink dark:text-paper">Dziękuję za wiadomość</h2>
                  <p className="mt-3 text-sm leading-relaxed text-slateText/75 dark:text-paper/70">
                    Odpowiem zwykle w ciągu 1–2 dni roboczych. Jeśli temat jest pilny, zadzwoń:
                    782-002-822.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link to="/">
                      <Button variant="outline">Wróć na start</Button>
                    </Link>
                    <a href="tel:782002822">
                      <Button>Zadzwoń teraz</Button>
                    </a>
                  </div>
                </div>
              ) : (
                <form className="grid gap-5" onSubmit={onSubmit}>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <InputField
                      label="Imię i nazwisko / Nazwa"
                      name="name"
                      value={values.name}
                      onChange={(v) => setValues((s) => ({ ...s, name: v }))}
                      placeholder="np. Jan Kowalski"
                      error={errors.name}
                    />
                    <InputField
                      label="E-mail"
                      name="email"
                      type="email"
                      value={values.email}
                      onChange={(v) => setValues((s) => ({ ...s, email: v }))}
                      placeholder="np. jan@firma.pl"
                      error={errors.email}
                    />
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <InputField
                      label="Telefon (opcjonalnie)"
                      name="phone"
                      value={values.phone}
                      onChange={(v) => setValues((s) => ({ ...s, phone: v }))}
                      placeholder="np. 782-002-822"
                      error={errors.phone}
                    />
                    <InputField
                      label="Temat (opcjonalnie)"
                      name="topic"
                      value={values.topic}
                      onChange={(v) => setValues((s) => ({ ...s, topic: v }))}
                      placeholder="np. kredyt hipoteczny"
                      error={errors.topic}
                    />
                  </div>

                  <TextareaField
                    label="Wiadomość"
                    name="message"
                    value={values.message}
                    onChange={(v) => setValues((s) => ({ ...s, message: v }))}
                    placeholder="Opisz krótko sytuację: cel, kwota (opcjonalnie), termin, najważniejsze ograniczenia."
                    error={errors.message}
                  />

                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div className="text-xs leading-relaxed text-slateText/70 dark:text-paper/60">
                      Wysyłając formularz, zgadzasz się na kontakt zwrotny.
                    </div>
                    <Button type="submit" disabled={status === "submitting"}>
                      {status === "submitting" ? "Wysyłanie…" : "Wyślij"}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>

          <aside className="lg:col-span-5">
            <div className="rounded-2xl border border-line/80 bg-white p-6 sm:p-8 dark:border-white/10 dark:bg-midnight">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <div className="text-xs font-medium tracking-[0.18em] text-ink/60 dark:text-paper/60">Dane</div>
                  <div className="mt-3 font-serif text-xl text-ink dark:text-paper">W. Safe Finance</div>
                </div>
                <div className="h-12 w-12 rounded-2xl bg-white p-2.5 shadow-soft ring-1 ring-black/5 dark:bg-ink dark:ring-white/10">
                  <img src={markSrc} alt="" className="h-full w-full object-contain" decoding="async" />
                </div>
              </div>
              <div className="mt-5 grid gap-2 text-sm">
                <a className="text-ink hover:underline dark:text-paper" href="tel:782002822">
                  782-002-822
                </a>
                <a className="text-ink hover:underline dark:text-paper" href="mailto:biuro@wsafefinance.pl">
                  biuro@wsafefinance.pl
                </a>
                <div className="text-slateText/75 dark:text-paper/70">ul. Spichrzowa 11, 62-090 Rokietnica</div>
                <a
                  className="text-ink/80 hover:text-ink hover:underline dark:text-paper/75 dark:hover:text-paper"
                  href="https://instagram.com/w.safefinance"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram: w.safefinance
                </a>
              </div>

              <div className="mt-8 rounded-2xl bg-paper p-5 dark:bg-night">
                <div className="text-xs font-medium tracking-[0.18em] text-ink/60 dark:text-paper/60">Poufność</div>
                <p className="mt-3 text-sm leading-relaxed text-slateText/75 dark:text-paper/70">
                  Minimum danych, maksimum klarowności. Informacje z formularza są traktowane
                  poufnie.
                </p>
                <div className="mt-5">
                  <Link
                    to="/polityka-prywatnosci"
                    className="text-sm text-ink/70 hover:text-ink dark:text-paper/70 dark:hover:text-paper"
                  >
                    Polityka prywatności →
                  </Link>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </main>
  );
}
