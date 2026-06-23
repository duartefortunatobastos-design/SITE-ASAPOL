import { Link } from "@tanstack/react-router";
import { ArrowLeft, ExternalLink, Mail, MapPin, Navigation, Phone } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { RevealButton } from "@/components/site/RevealButton";
import { RevealItem, RevealOnScroll } from "@/components/site/RevealOnScroll";
import type { ProtocolDetail } from "@/lib/protocolos-details";
import {
  buildMapQuery,
  googleMapsDirectionsUrl,
  googleMapsEmbedUrl,
  googleMapsSearchUrl,
} from "@/lib/google-maps";
import { nacionalCategories, protocolAssetUrl, protocolLabel } from "@/lib/protocolos-shared";

type ProtocolDetailViewProps = {
  title: string;
  subtitle: string;
  logo: string;
  logoAlt: string;
  description: string;
  regionName: string;
  detail?: ProtocolDetail;
  pdf?: string;
};

export function ProtocolDetailView({
  title,
  subtitle,
  logo,
  logoAlt,
  description,
  regionName,
  detail,
  pdf,
}: ProtocolDetailViewProps) {
  const mapQuery = buildMapQuery(detail?.address, detail?.postalCode, title, regionName);
  const contactFields = [
    detail?.phone && {
      icon: Phone,
      label: "Telefone",
      value: detail.phone,
      href: `tel:${detail.phone.replace(/\s/g, "")}`,
    },
    detail?.email && {
      icon: Mail,
      label: "Email",
      value: detail.email,
      href: `mailto:${detail.email}`,
    },
    detail?.address && { icon: MapPin, label: "Morada", value: detail.address },
    detail?.postalCode && { icon: MapPin, label: "Código Postal", value: detail.postalCode },
  ].filter(Boolean) as Array<{
    icon: typeof Phone;
    label: string;
    value: string;
    href?: string;
  }>;

  return (
    <>
      <PageHeader kicker="Protocolos" title={title} subtitle={subtitle} />

      <section className="section">
        <div className="container-x max-w-4xl">
          <RevealButton asChild delay={0} variant="ghost" className="mb-6 -ml-2 text-muted-foreground hover:text-navy">
            <Link to="/associados/protocolos">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar aos protocolos
            </Link>
          </RevealButton>

          <RevealOnScroll delay={80}>
            <article className="overflow-hidden rounded-2xl border border-border bg-card shadow-elegant">
              <div className="h-1 bg-pt-gradient" />
              <div className="p-8 md:p-12">
                <div className="flex flex-col items-center justify-center rounded-2xl border border-border/70 bg-muted/35 p-8">
                  <img src={protocolAssetUrl(logo)} alt={logoAlt} className="max-h-28 w-full object-contain" />
                </div>

                <p className="mt-6 text-muted-foreground leading-relaxed">{description}</p>

                {contactFields.length > 0 && (
                  <div className="mt-10 grid gap-4 sm:grid-cols-2">
                    {contactFields.map((field, i) => (
                      <RevealItem key={field.label} index={i} baseDelay={160}>
                        <ContactItem {...field} />
                      </RevealItem>
                    ))}
                  </div>
                )}

                {mapQuery && (
                  <div className="mt-10">
                    <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
                      Localização
                    </h3>
                    <div className="mt-4 overflow-hidden rounded-xl border border-border bg-muted/20">
                      <iframe
                        title={`Mapa Google Maps — ${title}`}
                        src={googleMapsEmbedUrl(mapQuery)}
                        className="h-72 w-full border-0"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        allowFullScreen
                      />
                    </div>
                    <div className="mt-4 flex flex-wrap gap-3">
                      <RevealButton
                        asChild
                        delay={320}
                        className="bg-navy-gradient text-white shadow-card hover:opacity-90"
                      >
                        <a
                          href={googleMapsDirectionsUrl(mapQuery)}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Navigation className="mr-2 h-4 w-4" />
                          Usar como GPS
                        </a>
                      </RevealButton>
                      <RevealButton asChild delay={400} variant="outline">
                        <a
                          href={googleMapsSearchUrl(mapQuery)}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <MapPin className="mr-2 h-4 w-4" />
                          Abrir no Google Maps
                        </a>
                      </RevealButton>
                    </div>
                  </div>
                )}

                {!detail && pdf && (
                  <RevealOnScroll delay={320}>
                    <a
                      href={pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:gap-3 transition-all"
                    >
                      Consultar documento do protocolo
                      <ExternalLink className="h-3.5 w-3.5 shrink-0" />
                    </a>
                  </RevealOnScroll>
                )}
              </div>
            </article>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}

export function protocolPageMeta(name: string, title: string, description: string) {
  return {
    meta: [
      { title: `${title} — Protocolos ASAPOL` },
      { name: "description", content: description },
      { property: "og:title", content: `${title} — Protocolos ASAPOL` },
      { property: "og:description", content: description },
    ],
  };
}

export function resolveProtocolPageContent(
  name: string,
  regionName: string,
  detail?: ProtocolDetail,
) {
  const label = protocolLabel(name);
  const title = detail?.title ?? label;
  const category = nacionalCategories[name];
  const subtitle = category ?? regionName;
  const description =
    detail?.description ??
    `Parceiro protocolado pela ASAPOL na região de ${regionName}. Vantagens e condições exclusivas para associados.`;

  return { title, subtitle, label, description };
}

function ContactItem({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Phone;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="rounded-xl border border-border bg-muted/30 p-5">
      <dt className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
        <Icon className="h-4 w-4 text-brand" />
        {label}
      </dt>
      <dd className="mt-2 text-sm font-medium text-navy">{value}</dd>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="transition-opacity hover:opacity-80">
        {content}
      </a>
    );
  }

  return content;
}
