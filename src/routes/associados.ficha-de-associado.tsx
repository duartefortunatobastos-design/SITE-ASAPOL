import { createFileRoute } from "@tanstack/react-router";
import { Copy, FileText, Mail, Check } from "lucide-react";
import { useState, type ReactNode } from "react";
import { PageHeader } from "@/components/site/PageHeader";
import { RevealButton } from "@/components/site/RevealButton";
import { RevealItem, RevealOnScroll } from "@/components/site/RevealOnScroll";
import { publicUrl } from "@/lib/site";

export const Route = createFileRoute("/associados/ficha-de-associado")({
  head: () => ({
    meta: [
      { title: "Ficha de Associado — ASAPOL" },
      {
        name: "description",
        content:
          "Instruções, documentos e contacto para adesão à ASAPOL: proposta de inscrição, declaração de desistência e envio por email.",
      },
      { property: "og:title", content: "Ficha de Associado — ASAPOL" },
      {
        property: "og:description",
        content: "Preencha a ficha de associado e adira à ASAPOL.",
      },
    ],
  }),
  component: FichaAssociadoPage,
});


const documents = {
  propostaDoc: publicUrl("documentos/Ficha%20Socio%20ASAPOL.doc"),
  propostaPdf: publicUrl("documentos/Ficha%20Socio%20ASAPOL.pdf"),
  vantagensFlyer: publicUrl("imagens/documentos/vantagens-socio-asapol.png"),
  desistenciaDoc: publicUrl("documentos/desistencia.docx"),
  desistenciaPdf: publicUrl("documentos/desistencia.pdf"),
} as const;

const emailTemplate = `À Direcção Nacional da ASAPOL

Em anexo envio proposta de sócio devidamente preenchida e assinada.

(sendo o caso ) Junto envio ainda declaração/ões de desistência do/s anterior/es Sindicato/s que assinei e entreguei na Secretaria da minha unidade, na data nela/s constante/s e com carimbo de entrada naqueles serviços.

Com os melhores cumprimentos

ASS:`;

const mailtoLink = `mailto:sede@asapol.net?subject=${encodeURIComponent("Proposta de Associado")}&body=${encodeURIComponent(emailTemplate)}`;

function FichaAssociadoPage() {
  const [copied, setCopied] = useState(false);

  async function copyEmailTemplate() {
    await navigator.clipboard.writeText(emailTemplate);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  }

  return (
    <>
      <PageHeader
        kicker="Associados"
        title="Ficha de Associado"
        subtitle="Siga os passos abaixo para concluir a sua adesão à ASAPOL."
      />

      <section className="section">
        <div className="container-x max-w-4xl space-y-8">
          <RevealOnScroll>
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-elegant">
              <div className="h-1 bg-pt-gradient" />
              <div className="p-8 md:p-10">
                <h2 className="font-display text-2xl font-bold text-navy">Instruções</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Descarregue os documentos, preencha com letra legível e envie tudo por email para{" "}
                  <a
                    href="mailto:sede@asapol.net"
                    className="font-semibold text-brand hover:underline"
                  >
                    sede@asapol.net
                  </a>
                  .
                </p>
              </div>
            </div>
          </RevealOnScroll>

          <StepCard
            revealIndex={0}
            step={1}
            title="Proposta de inscrição"
            description="Preencher a Proposta de Incrição de Sócio completamente com letra legível, e Assinar."
          >
            <div className="relative overflow-hidden rounded-2xl border-2 border-cta/35 bg-gradient-to-br from-cta/10 via-white to-[var(--gold)]/5 px-5 py-6 text-center shadow-elegant">
              <div className="absolute inset-x-0 top-0 h-1.5 bg-cta" aria-hidden />
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-cta">Cota única</p>
              <p className="mt-2 font-display text-4xl font-black leading-none text-cta sm:text-5xl">
                6,80€
              </p>
            </div>

            <div className="mt-6 grid gap-3">
              <DocButton href={documents.propostaDoc} label="Proposta de Inscrição de Sócio (DOC)" />
              <DocButton href={documents.propostaPdf} label="Proposta de Inscrição de Sócio (PDF)" />
              <DocButton
                href={documents.vantagensFlyer}
                label="Algumas vantagens de ser sócio ASAPOL"
                variant="gold"
                openInNewTab
              />
            </div>
          </StepCard>

          <StepCard
            revealIndex={1}
            step={2}
            title="Declaração de desistência"
            description="No caso de ser associado de outro sindicato preencher a declaração de Desistência e entregar na secretaria do local onde presta serviço, e requerer cópia datada do documento em como deu entrada. (No caso de ainda estar inscrito em mais do que um sindicato preencher uma Declaração por cada para comunicar a desistência e consequente suspenssão do desconto da quota mensal no vencimento.)"
          >
            <div className="grid gap-3">
              <DocButton href={documents.desistenciaDoc} label="Declaração de Desistência (DOC)" />
              <DocButton href={documents.desistenciaPdf} label="Declaração de Desistência (PDF)" />
            </div>
          </StepCard>

          <StepCard
            revealIndex={2}
            step={3}
            title="Envio por email"
            description={
              <>
                Digitalizar todos os Documentos em (PDF ou JPEG), eviar por email como Anexo.
                (Desde que fiquem legíveis poderão ser fotografados com um smartphone ou
                equipamento análogo e anexados, para{" "}
                <a href="mailto:sede@asapol.net" className="font-semibold text-brand hover:underline">
                  sede@asapol.net
                </a>
                )
              </>
            }
          >
            <p className="text-sm font-medium text-foreground/85">
              Deverá colocar o texto abaixo no corpo do email com as devidas retificações.
            </p>

            <div className="relative mt-4 overflow-hidden rounded-xl border border-border bg-muted/40">
              <div className="absolute inset-x-0 top-0 h-px bg-pt-gradient" />
              <pre className="whitespace-pre-wrap p-5 text-sm leading-relaxed text-muted-foreground font-sans">
                {emailTemplate}
              </pre>
              <div className="border-t border-border bg-card/80 px-4 py-3">
                <RevealButton
                  type="button"
                  delay={240}
                  variant="outline"
                  size="sm"
                  onClick={copyEmailTemplate}
                  className="gap-2"
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4 text-pt-green" />
                      Texto copiado
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" />
                      Copiar texto do email
                    </>
                  )}
                </RevealButton>
              </div>
            </div>

            <RevealOnScroll delay={320}>
              <a href={mailtoLink} className="mt-6 block">
                <span className="flex w-full items-center justify-center gap-2 rounded-xl bg-navy-gradient px-6 py-4 text-center text-sm font-bold uppercase tracking-wide text-white shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90">
                  <Mail className="h-5 w-5 shrink-0" />
                  Envio dos documentos por email
                </span>
              </a>
            </RevealOnScroll>
          </StepCard>
        </div>
      </section>
    </>
  );
}

function StepCard({
  step,
  title,
  description,
  children,
  revealIndex = 0,
}: {
  step: number;
  title: string;
  description: ReactNode;
  children: ReactNode;
  revealIndex?: number;
}) {
  return (
    <RevealItem index={revealIndex} baseDelay={120}>
      <article className="overflow-hidden rounded-2xl border border-border bg-card shadow-elegant">
        <div className="h-1 bg-pt-gradient" />
        <div className="p-8 md:p-10">
          <div className="flex items-start gap-4">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-cta font-display text-lg font-black text-white">
              {step}
            </span>
            <div className="min-w-0 flex-1">
              <h3 className="font-display text-xl font-bold text-navy">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
            </div>
          </div>
          <div className="mt-6 pl-0 md:pl-[3.75rem]">{children}</div>
        </div>
      </article>
    </RevealItem>
  );
}

function DocButton({
  href,
  label,
  variant = "navy",
  openInNewTab = false,
}: {
  href: string;
  label: string;
  variant?: "navy" | "gold";
  openInNewTab?: boolean;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      {...(!openInNewTab && { download: true })}
      className={`flex items-center justify-center gap-2 rounded-xl px-6 py-4 text-center text-sm font-bold uppercase tracking-wide text-white shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90 ${
        variant === "gold" ? "bg-cta hover:bg-[var(--pt-red)]/90" : "bg-navy-gradient"
      }`}
    >
      <FileText className="h-5 w-5 shrink-0" />
      {label}
    </a>
  );
}
