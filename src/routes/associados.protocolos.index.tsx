import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { PageHeader } from "@/components/site/PageHeader";
import { RevealItem, RevealOnScroll } from "@/components/site/RevealOnScroll";
import { PortugalAccent } from "@/components/site/PortugalAccent";
import { cn } from "@/lib/utils";
import {
  nacionalCategories,
  protocolLabel,
  protocolSlug,
  regions,
  type ProtocolMeta,
} from "@/lib/protocolos-shared";

export const Route = createFileRoute("/associados/protocolos/")({
  head: () => ({
    meta: [
      { title: "Protocolos — ASAPOL" },
      {
        name: "description",
        content:
          "Protocolos e parcerias da ASAPOL organizados por região: descontos e vantagens exclusivas para associados.",
      },
      { property: "og:title", content: "Protocolos — ASAPOL" },
      {
        property: "og:description",
        content: "Consulte os protocolos disponíveis para associados da ASAPOL.",
      },
    ],
  }),
  component: ProtocolosPage,
});

function ProtocolosPage() {
  const [activeRegionId, setActiveRegionId] = useState(regions[0]?.id ?? "nacionais");
  const visibleRegions = regions.filter((region) => region.id === activeRegionId);

  return (
    <>
      <PageHeader
        kicker="Associados"
        title="Protocolos"
        subtitle="Parcerias e vantagens exclusivas para associados ASAPOL, organizadas por região."
      />

      <section className="section pt-0">
        <div className="container-x">
          <nav
            aria-label="Filtrar protocolos por região"
            className="sticky top-[4.75rem] z-40 -mx-4 overflow-x-auto border-y border-border bg-background/95 px-4 py-3 backdrop-blur-md lg:top-20"
          >
            <div className="flex min-w-max gap-2">
              {regions.map((region) => {
                const isActive = region.id === activeRegionId;

                return (
                  <button
                    key={region.id}
                    type="button"
                    onClick={() => setActiveRegionId(region.id)}
                    aria-pressed={isActive}
                    className={cn(
                      "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                      isActive
                        ? "border-navy bg-navy-gradient text-white shadow-card"
                        : "border-border bg-card text-foreground/75 hover:border-brand/30 hover:bg-muted hover:text-navy",
                    )}
                  >
                    {region.name}
                    <span
                      className={cn(
                        "ml-1.5 text-xs",
                        isActive ? "text-white/75" : "text-muted-foreground",
                      )}
                    >
                      ({region.protocols.length})
                    </span>
                  </button>
                );
              })}
            </div>
          </nav>

          <div className="mt-12 space-y-16">
            {visibleRegions.map((region) => (
              <section key={region.id} id={region.id}>
                <RevealOnScroll>
                  <div className="flex flex-wrap items-end justify-between gap-4 border-b border-border pb-5">
                    <div>
                      <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-brand">
                        <PortugalAccent /> Protocolos
                      </div>
                      <h2 className="mt-2 font-display text-3xl font-black text-navy">{region.name}</h2>
                    </div>
                    <span className="rounded-full bg-muted px-3 py-1 text-xs font-semibold text-muted-foreground">
                      {region.protocols.length} parceiros
                    </span>
                  </div>
                </RevealOnScroll>

                <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {region.protocols.map((protocol, i) => (
                    <RevealItem key={`${region.id}-${protocol.name}`} index={i} baseDelay={160}>
                      <ProtocolCard
                        protocol={protocol}
                        category={
                          region.id === "nacionais" ? nacionalCategories[protocol.name] : undefined
                        }
                      />
                    </RevealItem>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function ProtocolCard({ protocol, category }: { protocol: ProtocolMeta; category?: string }) {
  const label = protocolLabel(protocol.name);
  const slug = protocolSlug(protocol.name);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all hover:-translate-y-1 hover:shadow-elegant">
      <div className="h-1 bg-pt-gradient opacity-80" />
      <div className="flex flex-1 flex-col p-5">
        {category && (
          <p className="text-[0.68rem] font-bold uppercase tracking-[0.14em] text-muted-foreground">
            {category}
          </p>
        )}

        <div className="mt-3 flex min-h-[7.5rem] items-center justify-center rounded-xl border border-border/70 bg-muted/35 p-4">
          <img
            src={protocol.logo}
            alt={label}
            loading="lazy"
            className="max-h-20 w-full object-contain"
          />
        </div>

        <h3 className="mt-4 font-display text-base font-bold leading-snug text-navy">{label}</h3>

        <Link
          to="/associados/protocolos/$slug"
          params={{ slug }}
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition-all group-hover:gap-2.5"
        >
          Saber mais
          <ChevronRight className="h-3.5 w-3.5 shrink-0" />
        </Link>
      </div>
    </article>
  );
}
