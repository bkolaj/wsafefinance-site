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

export default function ContactEn() {
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
    if (!values.name.trim()) next.name = "Please provide your name or company.";
    if (!values.email.trim()) next.email = "Please provide an email address.";
    else if (!isValidEmail(values.email)) next.email = "Please provide a valid email address.";
    if (!values.message.trim()) next.message = "Write a short message (at least one sentence).";
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
              eyebrow="Contact"
              title="Book a free consultation"
              description="Write 2–3 sentences: goal, timeline, key constraints. I’ll get back with the next step."
            />

            <div className="mt-10 rounded-2xl border border-line/80 bg-white p-6 sm:p-8 dark:border-white/10 dark:bg-midnight">
              {status === "success" ? (
                <div className="max-w-xl">
                  <div className="text-xs font-medium tracking-[0.18em] text-ink/60 dark:text-paper/60">Sent</div>
                  <h2 className="mt-3 font-serif text-2xl text-ink dark:text-paper">Thank you</h2>
                  <p className="mt-3 text-sm leading-relaxed text-slateText/75 dark:text-paper/70">
                    I usually reply within 1–2 business days. If it’s urgent, call: 782-002-822.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link to="/en">
                      <Button variant="outline">Back to home</Button>
                    </Link>
                    <a href="tel:782002822">
                      <Button>Call now</Button>
                    </a>
                  </div>
                </div>
              ) : (
                <form className="grid gap-5" onSubmit={onSubmit}>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <InputField
                      label="Name / Company"
                      name="name"
                      value={values.name}
                      onChange={(v) => setValues((s) => ({ ...s, name: v }))}
                      placeholder="e.g. Jane Doe"
                      error={errors.name}
                    />
                    <InputField
                      label="Email"
                      name="email"
                      type="email"
                      value={values.email}
                      onChange={(v) => setValues((s) => ({ ...s, email: v }))}
                      placeholder="e.g. jane@company.com"
                      error={errors.email}
                    />
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <InputField
                      label="Phone (optional)"
                      name="phone"
                      value={values.phone}
                      onChange={(v) => setValues((s) => ({ ...s, phone: v }))}
                      placeholder="e.g. +48 782 002 822"
                      error={errors.phone}
                    />
                    <InputField
                      label="Topic (optional)"
                      name="topic"
                      value={values.topic}
                      onChange={(v) => setValues((s) => ({ ...s, topic: v }))}
                      placeholder="e.g. mortgage"
                      error={errors.topic}
                    />
                  </div>

                  <TextareaField
                    label="Message"
                    name="message"
                    value={values.message}
                    onChange={(v) => setValues((s) => ({ ...s, message: v }))}
                    placeholder="Briefly describe your situation: goal, amount (optional), deadline, key constraints."
                    error={errors.message}
                  />

                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div className="text-xs leading-relaxed text-slateText/70 dark:text-paper/60">
                      By sending this form you agree to be contacted.
                    </div>
                    <Button type="submit" disabled={status === "submitting"}>
                      {status === "submitting" ? "Sending…" : "Send"}
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
                  <div className="text-xs font-medium tracking-[0.18em] text-ink/60 dark:text-paper/60">Details</div>
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
                <div className="text-xs font-medium tracking-[0.18em] text-ink/60 dark:text-paper/60">Confidentiality</div>
                <p className="mt-3 text-sm leading-relaxed text-slateText/75 dark:text-paper/70">
                  Minimum data, maximum clarity. Information from the form is treated confidentially.
                </p>
                <div className="mt-5">
                  <Link
                    to="/en/privacy-policy"
                    className="text-sm text-ink/70 hover:text-ink dark:text-paper/70 dark:hover:text-paper"
                  >
                    Privacy policy →
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

