import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, Send } from "lucide-react";
import { useState } from "react";
import { PageHeader } from "@/components/site/PageHeader";
import { RevealButton } from "@/components/site/RevealButton";
import { RevealItem, RevealOnScroll } from "@/components/site/RevealOnScroll";
import { SEDE_ADDRESS, SEDE_COORDS, SEDE_MAPS_URL, googleMapsEmbedUrl, googleMapsSearchUrl } from "@/lib/site";

type Location = {
  title: string;
  address: string;
  mapsUrl: string;
  embedUrl?: string;
};

const locations: Location[] = [
  {
    title: "Sede",
    address: SEDE_ADDRESS,
    mapsUrl: SEDE_MAPS_URL,
    embedUrl: googleMapsEmbedUrl(SEDE_COORDS),
  },
  {
    title: "Filial ASAPOL - Madeira",
    address: "Estrada de Santo António da Serra, nº 529, Sítio dos Casais, 9100-268 Santa Cruz",
    mapsUrl: googleMapsSearchUrl(
      "Estrada de Santo António da Serra, nº 529, Sítio dos Casais, 9100-268 Santa Cruz, Madeira, Portugal",
    ),
  },
  {
    title: "Filial ASAPOL - Açores",
    address: "Rua da Cidade de Artesia, n.º39, 9760-586 Praia da Vitoria",
    mapsUrl: googleMapsSearchUrl(
      "Rua da Cidade de Artesia, n.º39, 9760-586 Praia da Vitória, Açores, Portugal",
    ),
  },
];

export const Route = createFileRoute("/contactos")({
  head: () => ({
    meta: [      {
        name: "description",
        content: "Entre em contacto com a ASAPOL. Morada, telefone, email e formulário direto.",
      },
      { property: "og:title", content: "Contactos — ASAPOL" },
      { property: "og:description", content: "Fale com a ASAPOL." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHeader
        breadcrumbLabel="Contactos"
        kicker="Fale Connosco"
        title="Estamos à sua disposição."
        subtitle="A direção da ASAPOL responde a cada associado com a atenção que merece."
      />

      <section className="section">
        <div className="container-x grid lg:grid-cols-[1fr_1.3fr] gap-10 items-start">
          <div className="space-y-5">
            <RevealOnScroll>
              <div className="rounded-2xl bg-card border border-border shadow-card overflow-hidden">
                <div className="px-6 py-5 border-b border-border">
                  <h3 className="font-display text-2xl font-bold text-navy">Onde Estamos</h3>
                </div>
                <div className="divide-y divide-border">
                  {locations.map((loc) => (
                    <div key={loc.title} className="px-6 py-5">
                      <h4 className="font-display font-bold text-navy">{loc.title}</h4>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{loc.address}</p>
                      <a
                        href={loc.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-block text-sm font-medium text-navy hover:underline transition-all hover:-translate-y-0.5"
                      >
                        Ver Mapa
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>

            {[
              { icon: Phone, t: "Telefone", v: "919 731 911", href: "tel:+351919731911" },
              { icon: Mail, t: "Email", v: "sede@asapol.net", href: "mailto:sede@asapol.net" },
            ].map((c, i) => (
              <RevealItem
                key={c.t}
                index={i}
                baseDelay={120}
                className="flex gap-4 rounded-2xl bg-card border border-border p-6 shadow-card"
              >
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gold-gradient text-white">
                  <c.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-display font-bold text-navy">{c.t}</div>
                  <a
                    href={c.href}
                    className="text-sm text-muted-foreground hover:text-navy transition-colors"
                  >
                    {c.v}
                  </a>
                </div>
              </RevealItem>
            ))}

            <RevealOnScroll delay={320}>
              <div
                id="mapa-sede"
                className="rounded-2xl overflow-hidden border border-border aspect-[4/3] shadow-card scroll-mt-28"
              >
                <iframe
                  title="Localização ASAPOL — Sede"
                  src={locations[0].embedUrl}
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </RevealOnScroll>
          </div>
          <RevealOnScroll delay={160}>
            <div className="rounded-2xl bg-card border border-border p-8 md:p-10 shadow-elegant">
              <h3 className="font-display text-2xl font-bold text-navy">Envie-nos uma mensagem</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Responderemos no mais curto espaço de tempo.
              </p>

              {sent ? (
                <div className="mt-8 rounded-xl bg-muted p-6 text-center">
                  <p className="font-semibold text-navy">Mensagem enviada com sucesso!</p>
                  <p className="text-sm text-muted-foreground mt-1">Obrigado pelo seu contacto.</p>
                </div>
              ) : (
                <form
                  className="mt-6 space-y-4"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                  }}
                >
                  <Field label="Nome" required />
                  <Field label="Email" type="email" required />
                  <Field label="Telefone" type="tel" />
                  <label className="block">
                    <span className="text-xs font-semibold uppercase tracking-wider text-foreground/70">
                      Mensagem *
                    </span>
                    <textarea
                      required
                      rows={5}
                      className="mt-1.5 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--secondary)] resize-none"
                    />
                  </label>
                  <RevealButton
                    type="submit"
                    delay={400}
                    wrapperClassName="w-full"
                    className="w-full bg-cta h-11 font-semibold shadow-elegant hover:bg-[var(--pt-red)]/90"
                  >
                    Enviar Mensagem <Send className="ml-2 h-4 w-4" />
                  </RevealButton>
                </form>
              )}
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  type = "text",
  required,
}: {
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-xs font-semibold uppercase tracking-wider text-foreground/70">
        {label} {required && <span className="text-destructive">*</span>}
      </span>
      <input
        type={type}
        required={required}
        spellCheck={false}
        autoCorrect="off"
        autoCapitalize="off"
        className="mt-1.5 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--secondary)]"
      />
    </label>
  );
}
