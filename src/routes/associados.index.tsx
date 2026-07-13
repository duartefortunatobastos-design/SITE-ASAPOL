import { createFileRoute } from "@tanstack/react-router";
import { Download, ExternalLink, GraduationCap, Mail, MessageSquare, User } from "lucide-react";
import { AsapolLogo } from "@/components/site/AsapolLogo";
import { PageHeader } from "@/components/site/PageHeader";
import { RevealButton } from "@/components/site/RevealButton";
import { RevealItem, RevealOnScroll } from "@/components/site/RevealOnScroll";

const MEMBER_PORTAL_URL = "https://portal.asapol.net/pft";

export const Route = createFileRoute("/associados/")({
  head: () => ({
    meta: [
      { title: "Área do Associado — ASAPOL" },
      {
        name: "description",
        content:
          "Aceda ao portal exclusivo de associados da ASAPOL: documentos, comunicações internas e formação.",
      },
      { property: "og:title", content: "Área do Associado — ASAPOL" },
      { property: "og:description", content: "Portal exclusivo para os associados da ASAPOL." },
    ],
  }),
  component: AssociadosPage,
});

const features = [
  {
    icon: Download,
    t: "Download de Documentos",
    d: "Aceda a circulares, pareceres e formulários.",
  },
  {
    icon: MessageSquare,
    t: "Comunicações Internas",
    d: "Receba comunicados oficiais em primeira mão.",
  },
  {
    icon: GraduationCap,
    t: "Materiais de Formação",
    d: "Biblioteca de conteúdos e cursos online.",
  },
  { icon: User, t: "Gestão de Perfil", d: "Atualize os seus dados a qualquer momento." },
  { icon: Mail, t: "Contacto Direto", d: "Linha aberta com a direção da ASAPOL." },
];

function AssociadosPage() {
  return (
    <>
      <PageHeader
        breadcrumbLabel="Associados"
        kicker="Portal Seguro"
        title="Área do Associado"
        subtitle="O seu espaço privado, com tudo o que precisa, sempre disponível."
      />

      <section className="section">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-start">
          <RevealOnScroll>
            <div className="rounded-2xl bg-card border border-border p-8 md:p-10 shadow-elegant">
              <div className="flex items-center gap-4 border-b border-border pb-6">
                <AsapolLogo className="h-16 w-16 rounded-full shadow-card" />
                <div className="leading-tight">
                  <div className="font-display text-xl font-extrabold tracking-tight text-navy">
                    ASAPOL
                  </div>
                  <div className="mt-1 text-[0.65rem] uppercase tracking-[0.14em] text-muted-foreground">
                    Associação Sindical Autónoma de Polícia
                  </div>
                </div>
              </div>

              <h2 className="mt-6 font-display text-2xl font-bold text-navy">Portal de Sócios</h2>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                O acesso à área de associado é feito através da plataforma oficial da ASAPOL.
                Utilize o seu número de sócio ou email e password para entrar.
              </p>

              <RevealButton
                asChild
                delay={240}
                wrapperClassName="mt-8 w-full"
                className="w-full bg-navy-gradient text-white h-12 font-semibold"
              >
                <a href={MEMBER_PORTAL_URL} target="_blank" rel="noopener noreferrer">
                  Aceder ao Portal de Sócios
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </RevealButton>

              <p className="mt-4 text-center text-xs text-muted-foreground">
                Será redirecionado para{" "}
                <a
                  href={MEMBER_PORTAL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-brand hover:underline"
                >
                  portal.asapol.net
                </a>
              </p>
            </div>
          </RevealOnScroll>

          <div>
            <RevealOnScroll delay={80}>
              <h3 className="font-display text-2xl font-bold text-navy">O que pode fazer aqui</h3>
              <p className="mt-2 text-muted-foreground">
                Ferramentas e recursos exclusivos para associados ASAPOL.
              </p>
            </RevealOnScroll>
            <div className="mt-6 space-y-3">
              {features.map((f, i) => (
                <RevealItem
                  key={i}
                  index={i}
                  baseDelay={160}
                  className="flex gap-4 rounded-xl border border-border bg-card p-5 hover:shadow-card hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-gold-gradient text-white">
                    <f.icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-semibold text-navy">{f.t}</div>
                    <div className="text-sm text-muted-foreground">{f.d}</div>
                  </div>
                </RevealItem>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
