import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Mail, MapPin, Phone, Youtube } from "lucide-react";
import { AsapolLogo } from "@/components/site/AsapolLogo";
import { RevealOnScroll } from "@/components/site/RevealOnScroll";
import { SEDE_ADDRESS } from "@/lib/site";

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/asapolnacional", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/asapol_sindicato/", label: "Instagram" },
  { icon: Youtube, href: "https://www.youtube.com/@asapolosindicato", label: "YouTube" },
] as const;

const siteLinks = [
  { to: "/quem-somos", label: "Quem Somos" },
  { to: "/noticias", label: "Notícias" },
  { to: "/vitorias-judiciais", label: "Vitórias Judiciais" },
  { to: "/beneficios", label: "Benefícios" },
  { to: "/associados/protocolos", label: "Protocolos" },
  { to: "/contactos", label: "Contactos" },
] as const;

export function Footer() {
  return (
    <footer className="relative mt-24 bg-slate-900 text-slate-200">
      <div
        className="absolute inset-0 opacity-[0.04]"
        aria-hidden
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="container-x relative grid grid-cols-1 gap-10 py-14 md:grid-cols-12">
        <RevealOnScroll className="md:col-span-5" delay={0}>
          <div className="flex items-center gap-2.5">
            <AsapolLogo className="h-11 w-11 rounded-full ring-1 ring-slate-700" />
            <span className="font-display text-lg font-bold tracking-tight text-white">ASAPOL</span>
          </div>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-400">
            Associação Sindical Autónoma de Polícia. Defendemos os direitos dos polícias
            portugueses com independência e transparência.
          </p>
          <div className="mt-5 flex items-center gap-2">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="grid h-9 w-9 place-items-center rounded-full bg-slate-800 transition hover:bg-brand hover:scale-110"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </RevealOnScroll>

        <RevealOnScroll className="md:col-span-3" delay={120}>
          <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Mapa do site
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {siteLinks.map(({ to, label }) => (
              <li key={to}>
                <Link to={to} className="text-slate-300 transition hover:text-white">
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/adesao" className="font-semibold text-white transition hover:text-white/90">
                Tornar-me sócio →
              </Link>
            </li>
          </ul>
        </RevealOnScroll>

        <RevealOnScroll className="md:col-span-4" delay={240}>
          <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Contactos
          </h3>
          <ul className="mt-4 space-y-3.5 text-sm">
            <li className="flex items-start gap-2.5">
              <MapPin size={16} className="mt-0.5 shrink-0 text-slate-500" />
              <span className="text-slate-300">{SEDE_ADDRESS}</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail size={16} className="shrink-0 text-slate-500" />
              <a
                href="mailto:sede@asapol.net"
                className="text-slate-300 transition hover:text-white"
              >
                sede@asapol.net
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone size={16} className="shrink-0 text-slate-500" />
              <a href="tel:+351919731911" className="text-slate-300 transition hover:text-white">
                919 731 911
              </a>
            </li>
          </ul>
        </RevealOnScroll>
      </div>

      <div className="border-t border-slate-800">
        <RevealOnScroll animation="animate-fade-in" delay={360}>
          <div className="container-x flex flex-col items-center justify-between gap-2 py-5 text-xs text-slate-500 sm:flex-row">
            <span>© {new Date().getFullYear()} ASAPOL — Todos os direitos reservados.</span>
            <span>Direção Nacional</span>
          </div>
        </RevealOnScroll>
      </div>
    </footer>
  );
}
