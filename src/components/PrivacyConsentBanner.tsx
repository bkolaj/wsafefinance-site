import { useMemo, useSyncExternalStore } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/Button";
import { cn } from "@/lib/utils";
import {
  getPrivacyConsent,
  setPrivacyConsent,
  subscribePrivacyConsent,
  type PrivacyConsent,
} from "@/lib/privacyConsent";

export function PrivacyConsentBanner({ className }: { className?: string }) {
  const location = useLocation();
  const isEn = useMemo(
    () => location.pathname === "/en" || location.pathname.startsWith("/en/"),
    [location.pathname],
  );

  const consent = useSyncExternalStore(
    subscribePrivacyConsent,
    getPrivacyConsent,
    () => null,
  ) as PrivacyConsent | null;

  const policyHref = isEn ? "/en/privacy-policy" : "/polityka-prywatnosci";

  if (consent) return null;

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-[60] p-4",
        className,
      )}
      role="dialog"
      aria-modal="false"
      aria-label={isEn ? "Privacy policy consent" : "Zgoda na politykę prywatności"}
    >
      <div className="mx-auto max-w-5xl">
        <div className="rounded-2xl border border-line/80 bg-white/85 p-4 shadow-lift backdrop-blur dark:border-white/10 dark:bg-midnight/85">
          <div className="grid gap-3 md:grid-cols-[1fr_auto] md:items-center">
            <div className="text-sm text-slateText/75 dark:text-paper/70">
              {isEn ? (
                <span>
                  Choose whether you accept the{" "}
                  <Link className="text-ink underline underline-offset-4 dark:text-paper" to={policyHref}>
                    privacy policy
                  </Link>
                  .
                </span>
              ) : (
                <span>
                  Wybierz, czy akceptujesz{" "}
                  <Link className="text-ink underline underline-offset-4 dark:text-paper" to={policyHref}>
                    politykę prywatności
                  </Link>
                  .
                </span>
              )}
            </div>

            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-end">
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setPrivacyConsent("declined");
                }}
              >
                {isEn ? "Decline" : "Anuluj"}
              </Button>
              <Button
                variant="primary"
                size="sm"
                onClick={() => {
                  setPrivacyConsent("accepted");
                }}
              >
                {isEn ? "Accept" : "Akceptuję"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
