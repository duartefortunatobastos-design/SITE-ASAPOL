import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Scale,
  Megaphone,
  GraduationCap,
  Landmark,
  Newspaper,
  HeartHandshake,
  ChevronRight,
  Shield,
} from "lucide-react";
import { AsapolLogo } from "@/components/site/AsapolLogo";
import { BannerStagger, BannerSurface } from "@/components/site/BannerSurface";
import { QuoteMark } from "@/components/site/QuoteMark";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/site/SectionHeading";
import { RevealButton } from "@/components/site/RevealButton";
import { RevealItem, RevealOnScroll } from "@/components/site/RevealOnScroll";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ASAPOL — Juntos por uma Polícia mais forte" },
      {
        name: "description",
        content:
          "ASAPOL — Associação Sindical Autónoma de Polícia. Defendemos os direitos, a dignidade e o futuro dos profissionais da PSP.",
      },
      { property: "og:title", content: "ASAPOL — Sindicato Independente da PSP" },
      {
        property: "og:description",
        content:
          "Junte-se ao sindicato que representa, protege e valoriza os profissionais da Polícia de Segurança Pública.",
      },
    ],
  }),
  component: HomePage,
});

const benefits = [
  {
    icon: Scale,
    title: "Defesa Jurídica",
    text: "Apoio jurídico especializado em todas as fases do serviço policial.",
  },
  {
    icon: Megaphone,
    title: "Apoio Sindical",
    text: "Representação firme em todas as instâncias e negociações.",
  },
  {
    icon: GraduationCap,
    title: "Formação Profissional",
    text: "Ações de formação contínua e desenvolvimento de carreira.",
  },
  {
    icon: Landmark,
    title: "Representação Nacional",
    text: "Voz forte e independente junto do Governo e tutela.",
  },
  {
    icon: Newspaper,
    title: "Informação Atualizada",
    text: "Comunicados, legislação e novidades em primeira mão.",
  },
  {
    icon: HeartHandshake,
    title: "Apoio ao Associado",
    text: "Acompanhamento personalizado e proximidade real.",
  },
];

const news = [
  {
    cat: "Sindicato",
    title: "ASAPOL reúne-se com o MAI para discutir suplementos da PSP",
    summary:
      "A direção da ASAPOL apresentou propostas concretas para a valorização dos profissionais da Polícia.",
    date: "12 Jun 2026",
  },
  {
    cat: "Legislação",
    title: "Novo regulamento de serviço: o que muda para os agentes",
    summary: "Análise jurídica detalhada das alterações que entram em vigor no próximo trimestre.",
    date: "08 Jun 2026",
  },
  {
    cat: "Formação",
    title: "Abertas inscrições para o ciclo de formação 2026/2027",
    summary: "Mais de 30 ações de formação certificadas, disponíveis para todos os associados.",
    date: "02 Jun 2026",
  },
];

const testimonials = [
  {
    name: "Agente Principal João M.",
    role: "Lisboa",
    text: "A ASAPOL acompanhou-me num processo difícil. Senti que tinha o sindicato verdadeiramente do meu lado.",
  },
  {
    name: "Chefe Ana R.",
    role: "Porto",
    text: "Profissionalismo, proximidade e resultados. É isto que esperamos de quem nos representa.",
  },
  {
    name: "Agente Carlos S.",
    role: "Coimbra",
    text: "A informação clara e o apoio jurídico fazem toda a diferença no dia a dia do serviço.",
  },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <BannerSurface as="section" className="-mt-20">
        <div className="container-x relative grid grid-cols-1 items-center gap-12 pb-20 pt-28 lg:grid-cols-12 lg:pb-28 lg:pt-32">
          <div className="lg:col-span-7">
            <BannerStagger variant="fade-in" delay={80}>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white ring-1 ring-white/20">
                <Shield size={14} aria-hidden />
                Associação Sindical Autónoma
              </span>
            </BannerStagger>

            <BannerStagger delay={160}>
              <h1 className="mt-5 font-display text-4xl font-black leading-[1.08] text-balance sm:text-5xl lg:text-[3.35rem]">
                Associação Sindical Autónoma de Polícia
              </h1>
            </BannerStagger>

            <BannerStagger delay={240}>
              <p className="mt-5 max-w-2xl text-lg text-white/90 sm:text-xl leading-relaxed">
                Defendemos os direitos dos polícias portugueses desde 2005.
              </p>
            </BannerStagger>

            <BannerStagger delay={320}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button
                  asChild
                  size="lg"
                  className="h-auto rounded-lg bg-cta px-5 py-3 font-semibold shadow-sm hover:bg-[var(--asapol-red-hover)]"
                >
                  <Link to="/adesao">
                    Tornar-me sócio <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="h-auto rounded-lg bg-white px-5 py-3 font-semibold text-[#082c69] hover:bg-slate-100"
                >
                  <Link to="/associados">Área de sócio</Link>
                </Button>
              </div>
            </BannerStagger>

            <BannerStagger delay={400}>
              <dl className="mt-12 grid max-w-xl grid-cols-3 gap-6 border-t border-white/20 pt-8">
                {[
                  { value: "20+", label: "anos de luta" },
                  { value: "1900+", label: "sócios ativos" },
                  { value: "100%", label: "autonomia sindical" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <dt className="font-display text-3xl font-bold text-white sm:text-4xl">
                      {stat.value}
                    </dt>
                    <dd className="mt-1 text-xs uppercase tracking-wide text-white/70">
                      {stat.label}
                    </dd>
                  </div>
                ))}
              </dl>
            </BannerStagger>
          </div>

          <div className="flex items-center justify-center lg:col-span-5">
            <BannerStagger variant="fade-left" delay={200}>
              <div className="relative">
                <div className="absolute -inset-6 rounded-full bg-white/5 blur-xl" aria-hidden />
                <AsapolLogo
                  variant="hero"
                  className="relative h-64 w-64 sm:h-72 sm:w-72 lg:h-80 lg:w-80 ring-asapol"
                />
              </div>
            </BannerStagger>
          </div>
        </div>
      </BannerSurface>

      {/* WHY CHOOSE */}
      <section className="section">
        <div className="container-x">
          <SectionHeading
            kicker="Porquê ASAPOL"
            title="Razões para confiar na sua representação"
            subtitle="Mais do que um sindicato — um parceiro permanente na carreira de cada profissional da PSP."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b, i) => (
              <RevealItem
                key={i}
                index={i}
                baseDelay={320}
                className="card-pt-hover group relative rounded-2xl border border-border bg-card p-7 hover:-translate-y-1 hover:shadow-elegant transition-all duration-300"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gold-gradient text-white mb-5 group-hover:rotate-6 transition-transform duration-300">
                  <b.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl font-bold text-navy">{b.title}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed text-[0.95rem]">
                  {b.text}
                </p>
              </RevealItem>
            ))}
          </div>
        </div>
      </section>

      {/* NEWS */}
      <section className="section bg-muted">
        <div className="container-x">
          <div className="flex items-end justify-between flex-wrap gap-4">
            <SectionHeading
              kicker="Atualidade"
              title="Últimas Notícias"
              subtitle="O que está a acontecer na ASAPOL e na PSP."
              align="left"
            />
            <RevealButton
              asChild
              delay={320}
              variant="outline"
              className="border-primary/25 text-navy hover:bg-primary hover:text-white hover:border-primary"
            >
              <Link to="/noticias">
                Ver todas <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </RevealButton>
          </div>
          <div className="mt-12 grid gap-7 md:grid-cols-3">
            {news.map((n, i) => (
              <RevealItem
                key={i}
                index={i}
                baseDelay={320}
                as="article"
                className="group rounded-2xl bg-card border border-border overflow-hidden shadow-card hover:shadow-elegant transition-shadow duration-300"
              >
                <div className="aspect-[16/10] bg-navy-gradient relative">
                  <div className="absolute top-4 left-4 rounded-full bg-[var(--gold)] text-white px-3 py-1 text-xs font-semibold uppercase tracking-wider">
                    {n.cat}
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">
                    {n.date}
                  </div>
                  <h3 className="mt-2 font-display text-lg font-bold text-navy leading-snug group-hover:text-brand transition-colors">
                    {n.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{n.summary}</p>
                  <Link
                    to="/noticias"
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[var(--secondary)] hover:gap-2 transition-all"
                  >
                    Ler Mais <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </RevealItem>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section">
        <div className="container-x">
          <SectionHeading
            kicker="Testemunhos"
            title="A voz dos nossos associados"
            subtitle="Profissionais que confiam todos os dias na ASAPOL."
          />
          <div className="mt-14 grid items-stretch gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <RevealItem
                key={i}
                index={i}
                baseDelay={320}
                className="relative flex h-full flex-col overflow-hidden rounded-2xl bg-card border border-border p-8 shadow-card"
              >
                <QuoteMark className="pointer-events-none absolute top-5 right-5 text-[#e8a5a8]" />
                <p className="flex-1 pr-16 text-[0.98rem] leading-relaxed text-foreground/85 italic">
                  "{t.text}"
                </p>
                <div className="mt-auto border-t border-border pt-5">
                  <div className="font-semibold text-navy">{t.name}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mt-0.5">
                    {t.role}
                  </div>
                </div>
              </RevealItem>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <BannerSurface as="section" className="px-4 py-12 md:py-16">
        <div className="container-x relative text-white text-center max-w-3xl mx-auto">
          <BannerStagger delay={80}>
            <h2 className="font-display text-4xl md:text-5xl font-black text-balance">
              Junta-te à voz que representa os profissionais da{" "}
              <span className="text-[var(--gold)]">PSP</span>.
            </h2>
          </BannerStagger>
          <BannerStagger delay={180}>
            <p className="mt-5 text-lg text-white/80">
              Faz parte de um movimento independente, profissional e comprometido com o futuro da
              Polícia.
            </p>
          </BannerStagger>
          <BannerStagger delay={280}>
            <Button
              asChild
              size="lg"
              className="mt-8 bg-cta font-semibold h-12 px-8 shadow-elegant hover:bg-[var(--pt-red)]/90"
            >
              <Link to="/adesao">
                Quero Ser Associado <ArrowRight className="ml-1.5 h-4 w-4" />
              </Link>
            </Button>
          </BannerStagger>
        </div>
      </BannerSurface>
    </>
  );
}
