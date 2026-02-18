export type PrivacyConsent = "accepted" | "declined";

const CONSENT_KEY = "wsf_privacy_consent";

const listeners = new Set<() => void>();

export function getPrivacyConsent(): PrivacyConsent | null {
  if (typeof window === "undefined") return null;
  const raw = window.localStorage.getItem(CONSENT_KEY);
  if (raw === "accepted" || raw === "declined") return raw;
  return null;
}

export function setPrivacyConsent(value: PrivacyConsent) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(CONSENT_KEY, value);
  listeners.forEach((l) => l());
}

export function subscribePrivacyConsent(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

