export const COOKIE_CONSENT_KEY = "asapol-cookie-consent";
export const COOKIE_BANNER_SESSION_KEY = "asapol-cookie-banner-closed";

export type CookieConsentStatus = "accepted";

export function shouldShowCookieBanner(): boolean {
  if (typeof window === "undefined") return false;
  if (localStorage.getItem(COOKIE_CONSENT_KEY) === "accepted") return false;
  if (sessionStorage.getItem(COOKIE_BANNER_SESSION_KEY) === "true") return false;
  return true;
}

export function acceptCookieConsent() {
  localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
}

export function dismissCookieBannerForSession() {
  sessionStorage.setItem(COOKIE_BANNER_SESSION_KEY, "true");
}
