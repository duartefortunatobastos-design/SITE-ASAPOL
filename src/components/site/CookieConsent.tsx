import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  acceptCookieConsent,
  dismissCookieBannerForSession,
  shouldShowCookieBanner,
} from "@/lib/cookie-consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(shouldShowCookieBanner());
  }, []);

  if (!visible) return null;

  function accept() {
    acceptCookieConsent();
    setVisible(false);
  }

  function close() {
    dismissCookieBannerForSession();
    setVisible(false);
  }

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-description"
      className="fixed inset-x-0 bottom-0 z-[60] p-4 sm:p-5"
    >
      <div className="container-x">
        <div className="banner-surface mx-auto flex max-w-6xl flex-col gap-4 overflow-hidden rounded-xl border border-white/15 p-5 shadow-elegant sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:p-6">
          <div className="min-w-0 text-sm leading-relaxed text-white/90">
            <p id="cookie-consent-title" className="font-display font-bold text-white">
              Privacidade e cookies
            </p>
            <p id="cookie-consent-description" className="mt-1.5">
              Este website utiliza armazenamento essencial e registos básicos de visita para
              melhorar a segurança e compreender a navegação nas páginas. Leia a{" "}
              <Link
                to="/politica-de-privacidade"
                className="font-semibold text-white underline decoration-[var(--asapol-red-light)] underline-offset-2 transition hover:text-[var(--asapol-red-light)]"
              >
                Política de Privacidade
              </Link>{" "}
              e a{" "}
              <Link
                to="/politica-de-cookies"
                className="font-semibold text-white underline decoration-[var(--asapol-red-light)] underline-offset-2 transition hover:text-[var(--asapol-red-light)]"
              >
                Política de Cookies
              </Link>
              .
            </p>
          </div>

          <div className="flex shrink-0 flex-wrap items-center gap-2 sm:justify-end">
            <Button
              type="button"
              variant="outline"
              onClick={close}
              className="h-10 border-white/35 bg-white/5 px-5 text-white hover:bg-white/15 hover:text-white"
            >
              Fechar
            </Button>
            <Button
              type="button"
              onClick={accept}
              className="h-10 bg-white px-5 font-semibold text-[var(--brand-dark)] shadow-sm hover:bg-slate-100"
            >
              Aceitar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
