import { createFileRoute } from "@tanstack/react-router";
import { Target, Eye, Heart, ShieldCheck, Handshake, Scale, Users } from "lucide-react";
import { SectionHeading } from "./index";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/quem-somos")({
  head: () => ({
    meta: [
      { title: "Quem Somos — ASAPOL" },
      { name: "description", content: "Conheça a história, missão, visão e valores da ASAPOL — o sindicato independente da PSP." },
      { property: "og:title", content: "Quem Somos — ASAPOL" },
      { property: "og:description", content: "História, missão, visão e valores do sindicato independente da PSP." },
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

const timeline = [
  { year: "2004", title: "Fundação", text: "Nasce a ASAPOL como resposta independente às necessidades dos profissionais da PSP." },
  { year: "2010", title: "Expansão Nacional", text: "Presença consolidada em todos os distritos do país." },
  { year: "2016", title: "Plataforma de Apoio Jurídico", text: "Lançamento da rede de apoio jurídico permanente aos associados." },
  { year: "2021", title: "Acordos Históricos", text: "Negociação de melhorias salariais e de carreira para a PSP." },
  { year: "2026", title: "Uma Nova Era", text: "Modernização digital e reforço da representação nacional." },
];

function AboutPage() {
  return (
    <>
      <PageHeader
        kicker="Quem Somos"
        title="Uma associação independente, ao lado de quem serve."
        subtitle="A ASAPOL representa, defende e valoriza os profissionais da Polícia de Segurança Pública há mais de duas décadas."
      />

      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-3">
          {[
            { icon: Users, t: "História", d: "Fundada por profissionais da PSP, a ASAPOL cresceu sustentada na confiança, no rigor e na proximidade aos seus associados. Hoje é uma das vozes mais respeitadas do panorama sindical policial." },
            { icon: Target, t: "Missão", d: "Defender os direitos, a dignidade profissional e as condições de trabalho dos profissionais da PSP, com independência, competência e responsabilidade." },
            { icon: Eye, t: "Visão", d: "Ser referência nacional na representação sindical da Polícia, promovendo uma instituição moderna, justa e valorizada." },
          ].map((b, i) => (
            <div key={i} className="rounded-2xl bg-card border border-border p-8 shadow-card">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-navy-gradient text-[var(--gold)] mb-5">
                <b.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-2xl font-bold text-navy">{b.t}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{b.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section bg-muted">
        <div className="container-x">
          <SectionHeading kicker="Valores" title="Os princípios que nos guiam" />
          <div className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-5">
            {values.map((v, i) => (
              <div key={i} className="text-center rounded-2xl bg-card border border-border p-6 hover:shadow-elegant hover:-translate-y-1 transition-all">
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-gold-gradient text-[var(--navy)] mb-4">
                  <v.icon className="h-7 w-7" />
                </div>
                <div className="font-display font-bold text-navy">{v.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <SectionHeading kicker="A nossa história" title="Mais de 20 anos a representar a PSP" />
          <div className="mt-14 relative max-w-3xl mx-auto">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />
            {timeline.map((t, i) => (
              <div key={i} className={`relative mb-10 md:grid md:grid-cols-2 md:gap-10 ${i % 2 ? "md:[&>div]:order-2" : ""}`}>
                <div className={`pl-12 md:pl-0 ${i % 2 ? "md:text-left md:pl-10" : "md:text-right md:pr-10"}`}>
                  <div className="font-display text-3xl font-black text-[var(--gold)]">{t.year}</div>
                  <h3 className="mt-1 font-display text-lg font-bold text-navy">{t.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{t.text}</p>
                </div>
                <div className="absolute left-4 md:left-1/2 top-1 -translate-x-1/2 grid h-4 w-4 place-items-center rounded-full bg-gold-gradient ring-4 ring-background" />
                <div className="hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
