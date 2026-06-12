import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, Shield, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { to: "/", label: "Início" },
  { to: "/quem-somos", label: "Quem Somos" },
  { to: "/beneficios", label: "Benefícios" },
  { to: "/noticias", label: "Notícias" },
  { to: "/area-associado", label: "Área do Associado" },
  { to: "/contactos", label: "Contactos" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-18 items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-navy-gradient shadow-card">
            <Shield className="h-5 w-5 text-[var(--gold)]" strokeWidth={2.5} />
          </div>
          <div className="leading-tight">
            <div className="font-display font-extrabold text-[1.05rem] tracking-tight text-navy">
              ASAPOL
            </div>
            <div className="text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground">
              Sindicato PSP
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="px-3.5 py-2 text-sm font-medium text-foreground/80 hover:text-navy rounded-md transition-colors data-[status=active]:text-navy data-[status=active]:font-semibold"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            asChild
            className="hidden sm:inline-flex bg-gold-gradient text-[var(--gold-foreground)] hover:opacity-90 font-semibold shadow-card"
          >
            <Link to="/adesao">Associar-me</Link>
          </Button>
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden grid place-items-center h-10 w-10 rounded-md border border-border bg-background"
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background animate-fade-in">
          <div className="container-x py-4 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="px-3 py-2.5 rounded-md text-sm font-medium text-foreground/80 hover:bg-muted"
              >
                {l.label}
              </Link>
            ))}
            <Button
              asChild
              className="mt-2 bg-gold-gradient text-[var(--gold-foreground)] font-semibold"
            >
              <Link to="/adesao" onClick={() => setOpen(false)}>
                Associar-me
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
