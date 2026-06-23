import { createFileRoute, Link } from "@tanstack/react-router";
import { ExternalLink, FileText, Globe2, Newspaper, Shield, UserPlus } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { SectionHeading } from "@/components/site/SectionHeading";
import { RevealItem, RevealOnScroll } from "@/components/site/RevealOnScroll";

export const Route = createFileRoute("/quem-somos/links")({
  head: () => ({
    meta: [
      { title: "Links Úteis — ASAPOL" },
      {
        name: "description",
        content: "Links úteis da ASAPOL e referências públicas para associados e profissionais da PSP.",
      },
      { property: "og:title", content: "Links Úteis — ASAPOL" },
      {
        property: "og:description",
        content: "Acesso rápido a páginas institucionais, informação pública e recursos relevantes.",
      },
    ],
  }),
  component: LinksPage,
});

const asapolLinks = [
  {
    icon: UserPlus,
    title: "Ficha de Associado",
    text: "Acesso à página oficial para adesão à ASAPOL.",
    href: "https://www.asapol.net/pt/ficha-de-associado",
  },
  {
    icon: Newspaper,
    title: "Jornal ASAPOL",
    text: "Publicações e edições informativas da associação.",
    href: "https://www.asapol.net/pt/jornal-asapol",
  },
  {
    icon: FileText,
    title: "Comunicados",
    text: "Informação pública, comunicados e tomadas de posição.",
    href: "https://www.asapol.net/pt/comunicados",
  },
  {
    icon: Shield,
    title: "Estatutos Oficiais",
    text: "Consulta dos estatutos publicados no site oficial da ASAPOL.",
    href: "https://www.asapol.net/pt/estatutos",
  },
];

const officialSections = [
  {
    title: "Quem Somos",
    links: [
      { label: "Manifesto Sindical", href: "https://www.asapol.net/pt/apresentacao" },
      { label: "Estatutos", href: "https://www.asapol.net/pt/estatutos" },
      { label: "Links Úteis", href: "https://www.asapol.net/pt/links" },
    ],
  },
  {
    title: "Associados",
    links: [
      { label: "As nossas Sentenças", href: "https://www.asapol.net/pt/sentencas" },
      { label: "Protocolos", href: "https://www.asapol.net/pt/protocolos" },
      { label: "Outros Benefícios", href: "https://www.asapol.net/pt/outros-beneficios" },
      { label: "Ficha de Associado", href: "https://www.asapol.net/pt/ficha-de-associado" },
    ],
  },
  {
    title: "Informação",
    links: [
      { label: "Comunicados", href: "https://www.asapol.net/pt/comunicados" },
      {
        label: "Reuniões - Grupos Parlamentares",
        href: "https://www.asapol.net/pt/reunioes-grupos-parlamentares",
      },
    ],
  },
  {
    title: "Média",
    links: [
      { label: "Galeria", href: "https://www.asapol.net/pt/galeria" },
      { label: "Vídeos ASAPOL", href: "https://www.asapol.net/pt/videos-asapol" },
      { label: "Cartazes Publicitários", href: "https://www.asapol.net/pt/cartazes-publicitarios" },
    ],
  },
];

const institutionalLinks = [
  {
    title: "Polícia de Segurança Pública",
    href: "https://www.psp.pt/",
  },
  {
    title: "Ministério da Administração Interna",
    href: "https://www.portugal.gov.pt/pt/gc24/area-de-governo/administracao-interna",
  },
  {
    title: "Diário da República Eletrónico",
    href: "https://diariodarepublica.pt/",
  },
  {
    title: "Portal ePortugal",
    href: "https://eportugal.gov.pt/",
  },
];

function LinksPage() {
  return (
    <>
      <PageHeader
        kicker="Quem Somos"
        title="Links Úteis"
        subtitle="Uma área de acesso rápido a recursos oficiais da ASAPOL e a entidades públicas relevantes."
      />

      <section className="section">
        <div className="container-x">
          <SectionHeading
            kicker="ASAPOL"
            title="Recursos da associação"
            subtitle="Páginas públicas oficiais para associados, candidatos e profissionais da PSP."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {asapolLinks.map((item, i) => (
              <RevealItem key={item.title} index={i} baseDelay={320}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block rounded-2xl border border-border bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-elegant"
                >
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-gold-gradient text-white group-hover:rotate-6 transition-transform duration-300">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold text-navy">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                  <div className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand transition-all group-hover:gap-2">
                    Abrir link <ExternalLink className="h-3.5 w-3.5" />
                  </div>
                </a>
              </RevealItem>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-muted">
        <div className="container-x grid gap-10 lg:grid-cols-[0.8fr_1fr] items-start">
          <div>
            <SectionHeading
              align="left"
              kicker="Institucional"
              title="Referências públicas"
              subtitle="Entidades e portais oficiais úteis para consulta de legislação, serviços públicos e informação institucional."
            />
            <RevealOnScroll delay={320}>
              <Link
                to="/contactos"
                className="mt-8 inline-flex items-center justify-center rounded-md bg-cta px-5 py-3 text-sm font-semibold shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--pt-red)]/90"
              >
                Falar com a ASAPOL
              </Link>
            </RevealOnScroll>
          </div>

          <RevealOnScroll delay={160}>
            <div className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-card">
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-gold-gradient text-white">
                <Globe2 className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-navy">Links institucionais</h3>
                <p className="text-sm text-muted-foreground">Acesso externo em nova aba.</p>
              </div>
            </div>

            <div className="mt-6 divide-y divide-border">
              {institutionalLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-4 py-4 text-sm font-medium text-foreground/80 transition-colors hover:text-navy"
                >
                  {item.title}
                  <ExternalLink className="h-4 w-4 shrink-0 text-brand" />
                </a>
              ))}
            </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <SectionHeading
            kicker="Site Oficial"
            title="Áreas principais da ASAPOL"
            subtitle="Organização das principais áreas públicas que constam no menu do site oficial."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {officialSections.map((section, i) => (
              <RevealItem key={section.title} index={i} baseDelay={320} className="rounded-2xl border border-border bg-card p-6 shadow-card">
                <div className="h-1 w-16 rounded-full bg-pt-gradient" />
                <h3 className="mt-5 font-display text-xl font-bold text-navy">{section.title}</h3>
                <div className="mt-5 grid gap-2">
                  {section.links.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-between gap-3 rounded-lg px-3 py-2 text-sm text-foreground/75 transition-colors hover:bg-muted hover:text-navy"
                    >
                      {item.label}
                      <ExternalLink className="h-3.5 w-3.5 shrink-0 text-brand" />
                    </a>
                  ))}
                </div>
              </RevealItem>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
