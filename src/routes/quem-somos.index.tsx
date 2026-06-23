import { createFileRoute } from "@tanstack/react-router";
import {
  Eye,
  Heart,
  Handshake,
  Scale,
  ShieldCheck,
  Target,
  UserRound,
  Users,
} from "lucide-react";
import { SectionHeading } from "@/components/site/SectionHeading";
import { PageHeader } from "@/components/site/PageHeader";
import { RevealItem, RevealOnScroll } from "@/components/site/RevealOnScroll";

export const Route = createFileRoute("/quem-somos/")({
  head: () => ({
    meta: [
      { title: "Quem Somos — ASAPOL" },
      {
        name: "description",
        content:
          "Conheça a história, missão, visão e valores da ASAPOL — o sindicato independente da PSP.",
      },
      { property: "og:title", content: "Quem Somos — ASAPOL" },
      {
        property: "og:description",
        content: "História, missão, visão e valores do sindicato independente da PSP.",
      },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: ShieldCheck, label: "Integridade" },
  { icon: Eye, label: "Transparência" },
  { icon: Handshake, label: "União" },
  { icon: Heart, label: "Respeito" },
  { icon: Scale, label: "Defesa dos Profissionais" },
];

const board = [
  { name: "André Filipe Dias Silva", role: "Presidente" },
  { name: "Gaspar Batista", role: "Secretário" },
];

function AboutPage() {
  return (
    <>
      <PageHeader
        kicker="Quem Somos"
        title="Uma associação independente, ao lado de quem serve."
        subtitle="A ASAPOL representa, defende e valoriza os profissionais da Polícia de Segurança Pública há mais de duas décadas."
      />

      <section className="section bg-muted">
        <div className="container-x grid gap-12 lg:grid-cols-3">
          {[
            {
              icon: Users,
              t: "História",
              d: "Fundada por profissionais da PSP, a ASAPOL cresceu sustentada na confiança, no rigor e na proximidade aos seus associados. Hoje é uma das vozes mais respeitadas do panorama sindical policial.",
            },
            {
              icon: Target,
              t: "Missão",
              d: "Defender os direitos, a dignidade profissional e as condições de trabalho dos profissionais da PSP, com independência, competência e responsabilidade.",
            },
            {
              icon: Eye,
              t: "Visão",
              d: "Ser referência nacional na representação sindical da Polícia, promovendo uma instituição moderna, justa e valorizada.",
            },
          ].map((b, i) => (
            <RevealItem
              key={i}
              index={i}
                className="card-pt-hover group rounded-2xl bg-card border border-border p-8 shadow-card hover:shadow-elegant hover:-translate-y-1 transition-all duration-300"
            >
              <div className="grid h-14 w-14 place-items-center rounded-xl bg-gold-gradient text-white mb-5 group-hover:rotate-6 transition-transform duration-300">
                <b.icon className="h-7 w-7" />
              </div>
              <h3 className="font-display text-2xl font-bold text-navy">{b.t}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{b.d}</p>
            </RevealItem>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <SectionHeading kicker="Valores" title="Os princípios que nos guiam" />
          <div className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-5">
            {values.map((v, i) => (
              <RevealItem
                key={i}
                index={i}
                baseDelay={320}
                className="card-pt-hover group text-center rounded-2xl bg-card border border-border p-6 hover:shadow-elegant hover:-translate-y-1 transition-all duration-300"
              >
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-gold-gradient text-white mb-4 group-hover:rotate-6 transition-transform duration-300">
                  <v.icon className="h-7 w-7" />
                </div>
                <div className="font-display font-bold text-navy">{v.label}</div>
              </RevealItem>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <RevealOnScroll animation="animate-fade-in">
            <span className="inline-flex rounded-full bg-brand/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand">
              Estrutura
            </span>
          </RevealOnScroll>
          <RevealOnScroll delay={80}>
            <h2 className="mt-4 font-display text-3xl md:text-4xl font-black text-navy text-balance">
              Direção Nacional
            </h2>
          </RevealOnScroll>
          <RevealOnScroll
            delay={160}
            animation="animate-scale-x-in"
            className="mt-3 inline-block w-14"
          >
            <div className="h-1 w-full rounded-full bg-[var(--pt-red)]" aria-hidden />
          </RevealOnScroll>
          <RevealOnScroll delay={240}>
            <p className="mt-4 max-w-2xl text-muted-foreground leading-relaxed">
              Quem representa os associados.
            </p>
          </RevealOnScroll>

          <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {board.map((member, i) => (
              <RevealOnScroll
                key={member.name}
                as="li"
                delay={320 + i * 120}
                className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-elegant"
              >
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-gold-gradient text-white group-hover:rotate-6 group-hover:scale-105 transition-transform duration-300">
                  <UserRound className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-navy transition-colors duration-300 group-hover:text-brand">
                    {member.name}
                  </p>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
              </RevealOnScroll>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
