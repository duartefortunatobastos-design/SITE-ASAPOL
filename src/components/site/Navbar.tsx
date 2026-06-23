import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AsapolLogo } from "@/components/site/AsapolLogo";

const links = [
  { to: "/", label: "Início" },
  {
    to: "/quem-somos",
    label: "Quem Somos",
    children: [
      { to: "/quem-somos/manifesto-sindical", label: "Manifesto Sindical" },
      { to: "/quem-somos/estatutos", label: "Estatutos" },
      { to: "/quem-somos/links", label: "Links" },
    ],
  },
  { to: "/beneficios", label: "Benefícios" },
  { to: "/noticias", label: "Notícias" },
  { to: "/vitorias-judiciais", label: "Vitórias" },
  {
    to: "/associados",
    label: "Associados",
    children: [
      { to: "/associados/protocolos", label: "Protocolos" },
      { to: "/associados/ficha-de-associado", label: "Ficha de Associado" },
    ],
  },
  { to: "/contactos", label: "Contactos" },
] as const;

const linkClass =
  "relative px-3.5 py-2 text-sm font-medium rounded-md text-foreground/80 transition-colors hover:text-[var(--brand-dark)] data-[status=active]:text-[var(--brand-dark)] data-[status=active]:font-semibold data-[status=active]:after:absolute data-[status=active]:after:bottom-0 data-[status=active]:after:inset-x-1 data-[status=active]:after:h-0.5 data-[status=active]:after:rounded-full data-[status=active]:after:bg-pt-green";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white shadow-sm">
      <div className="container-x flex h-16 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2.5">
          <AsapolLogo className="h-9 w-9 rounded-full ring-1 ring-slate-200" />
          <span className="font-display text-lg font-bold tracking-tight text-[var(--brand-dark)]">
            ASAPOL
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l) => {
            if ("children" in l) {
              return (
                <div key={l.to} className="relative group">
                  <Link to={l.to} activeOptions={{ exact: false }} className={linkClass}>
                    {l.label}
                  </Link>
                  <div className="invisible absolute left-1/2 top-full z-50 mt-1.5 w-48 -translate-x-1/2 translate-y-1 rounded-lg border border-border bg-white p-1.5 pb-2 opacity-0 shadow-card transition-all duration-150 after:absolute after:inset-x-3 after:bottom-1 after:h-0.5 after:rounded-full after:bg-pt-gradient group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    {l.children.map((child) => (
                      <Link
                        key={child.to}
                        to={child.to}
                        className="block rounded-md px-2.5 py-2 text-[0.82rem] font-medium text-foreground/75 transition-colors hover:bg-muted hover:text-[var(--brand-dark)] data-[status=active]:bg-muted data-[status=active]:text-[var(--brand-dark)]"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                className={linkClass}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            asChild
            variant="outline"
            className="hidden border-slate-200 bg-white text-[var(--brand-dark)] hover:bg-slate-50 sm:inline-flex"
          >
            <Link to="/associados">Área de sócio</Link>
          </Button>
          <Button
            asChild
            className="hidden bg-cta hover:bg-[var(--asapol-red-hover)] font-semibold sm:inline-flex"
          >
            <Link to="/adesao">Tornar-me sócio</Link>
          </Button>
          <button
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-lg text-slate-700 hover:bg-slate-100 lg:hidden"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white lg:hidden animate-fade-in">
          <div className="container-x flex flex-col gap-1 py-4">
            {links.map((l) => (
              <div key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-muted"
                >
                  {l.label}
                </Link>
                {"children" in l && (
                  <div className="ml-3 border-l border-border pl-2">
                    {l.children.map((child) => (
                      <Link
                        key={child.to}
                        to={child.to}
                        onClick={() => setOpen(false)}
                        className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-[var(--brand-dark)]"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Button asChild variant="outline" className="mt-2 border-slate-200 text-[var(--brand-dark)]">
              <Link to="/associados" onClick={() => setOpen(false)}>
                Área de sócio
              </Link>
            </Button>
            <Button asChild className="bg-cta hover:bg-[var(--asapol-red-hover)] font-semibold">
              <Link to="/adesao" onClick={() => setOpen(false)}>
                Tornar-me sócio
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
