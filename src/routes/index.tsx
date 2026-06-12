import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Scale, Megaphone, GraduationCap, Landmark, Newspaper, HeartHandshake, ShieldCheck, Quote, ChevronRight } from "lucide-react";
import heroImg from "@/assets/hero-psp.jpg";
import { Button } from "@/components/ui/button";
import { Counter } from "@/components/site/Counter";
import { SectionHeading } from "@/components/site/SectionHeading";


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
  { icon: Scale, title: "Defesa Jurídica", text: "Apoio jurídico especializado em todas as fases do serviço policial." },
  { icon: Megaphone, title: "Apoio Sindical", text: "Representação firme em todas as instâncias e negociações." },
  { icon: GraduationCap, title: "Formação Profissional", text: "Ações de formação contínua e desenvolvimento de carreira." },
  { icon: Landmark, title: "Representação Nacional", text: "Voz forte e independente junto do Governo e tutela." },
  { icon: Newspaper, title: "Informação Atualizada", text: "Comunicados, legislação e novidades em primeira mão." },
  { icon: HeartHandshake, title: "Apoio ao Associado", text: "Acompanhamento personalizado e proximidade real." },
];

const news = [
  {
    cat: "Sindicato",
    title: "ASAPOL reúne-se com o MAI para discutir suplementos da PSP",
    summary: "A direção da ASAPOL apresentou propostas concretas para a valorização dos profissionais da Polícia.",
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
      <section className="relative -mt-20 min-h-[92vh] flex items-center overflow-hidden">
        <img
          src={heroImg}
          alt="Profissionais da PSP em formação"
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-hero-gradient opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy)] via-transparent to-transparent" />

        <div className="container-x relative z-10 pt-28 pb-20 text-white">
          <div className="max-w-3xl animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-[var(--gold)] backdrop-blur">
              <ShieldCheck className="h-3.5 w-3.5" /> Associação Sindical Autónoma de Polícia
            </div>
            <h1 className="mt-6 font-display text-5xl md:text-7xl font-black leading-[1.05] text-balance">
              Juntos por uma <span className="text-[var(--gold)]">Polícia</span> mais forte.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
              A ASAPOL defende os direitos, a dignidade e o futuro dos profissionais
              da Polícia de Segurança Pública.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-gold-gradient text-[var(--navy)] hover:opacity-90 font-semibold h-12 px-7 shadow-elegant">
                <Link to="/adesao">
                  Tornar-me Associado <ArrowRight className="ml-1.5 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-12 px-7 border-white/30 bg-white/5 text-white hover:bg-white/15 hover:text-white backdrop-blur">
                <Link to="/quem-somos">Saber Mais</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-b from-transparent to-background" />
      </section>

      {/* STATS */}
      <section className="relative -mt-12 z-20">
        <div className="container-x">
          <div className="grid grid-cols-2 md:grid-cols-4 rounded-2xl bg-card shadow-elegant border border-border overflow-hidden">
            {[
              { n: 8500, s: "+", label: "Associados" },
              { n: 22, s: "", label: "Anos de Experiência" },
              { n: 1200, s: "+", label: "Processos Apoiados" },
              { n: 18, s: "", label: "Distritos Representados" },
            ].map((s, i) => (
              <div key={i} className="p-6 md:p-8 text-center border-r last:border-r-0 border-border [&:nth-child(2n)]:border-r-0 md:[&:nth-child(2n)]:border-r md:last:border-r-0">
                <div className="font-display text-4xl md:text-5xl font-extrabold text-navy">
                  <Counter end={s.n} suffix={s.s} />
                </div>
                <div className="mt-2 text-sm text-muted-foreground uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
              <div
                key={i}
                className="group relative rounded-2xl border border-border bg-card p-7 hover:-translate-y-1 hover:shadow-elegant transition-all duration-300"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-navy-gradient text-[var(--gold)] mb-5 group-hover:scale-110 transition-transform">
                  <b.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl font-bold text-navy">{b.title}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed text-[0.95rem]">{b.text}</p>
                <div className="absolute inset-x-0 bottom-0 h-1 bg-gold-gradient scale-x-0 group-hover:scale-x-100 origin-left transition-transform rounded-b-2xl" />
              </div>
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
            <Button asChild variant="outline" className="border-navy/20 text-navy hover:bg-navy hover:text-white">
              <Link to="/noticias">Ver todas <ChevronRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </div>
          <div className="mt-12 grid gap-7 md:grid-cols-3">
            {news.map((n, i) => (
              <article key={i} className="group rounded-2xl bg-card border border-border overflow-hidden shadow-card hover:shadow-elegant transition-shadow">
                <div className="aspect-[16/10] bg-navy-gradient relative overflow-hidden">
                  <div className="absolute inset-0 opacity-30 mix-blend-overlay" style={{backgroundImage: `url(${heroImg})`, backgroundSize: 'cover', backgroundPosition: 'center'}} />
                  <div className="absolute top-4 left-4 rounded-full bg-[var(--gold)] text-[var(--navy)] px-3 py-1 text-xs font-semibold uppercase tracking-wider">{n.cat}</div>
                </div>
                <div className="p-6">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{n.date}</div>
                  <h3 className="mt-2 font-display text-lg font-bold text-navy leading-snug group-hover:text-[var(--secondary)] transition-colors">{n.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{n.summary}</p>
                  <Link to="/noticias" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[var(--secondary)] hover:gap-2 transition-all">
                    Ler Mais <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </article>
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
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <div key={i} className="relative rounded-2xl bg-card border border-border p-8 shadow-card">
                <Quote className="absolute top-6 right-6 h-10 w-10 text-[var(--gold)]/30" />
                <p className="text-[0.98rem] leading-relaxed text-foreground/85 italic">"{t.text}"</p>
                <div className="mt-6 pt-5 border-t border-border">
                  <div className="font-semibold text-navy">{t.name}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mt-0.5">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section relative overflow-hidden">
        <div className="absolute inset-0 bg-navy-gradient" />
        <div className="absolute inset-0 opacity-20" style={{backgroundImage: `url(${heroImg})`, backgroundSize: 'cover', backgroundPosition: 'center', mixBlendMode: 'overlay'}} />
        <div className="container-x relative text-white text-center max-w-3xl">
          <h2 className="font-display text-4xl md:text-5xl font-black text-balance">
            Junta-te à voz que representa os profissionais da <span className="text-[var(--gold)]">PSP</span>.
          </h2>
          <p className="mt-5 text-lg text-white/80">
            Faz parte de um movimento independente, profissional e comprometido com o futuro da Polícia.
          </p>
          <Button asChild size="lg" className="mt-8 bg-gold-gradient text-[var(--navy)] font-semibold h-12 px-8 shadow-elegant hover:opacity-90">
            <Link to="/adesao">Quero Ser Associado <ArrowRight className="ml-1.5 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>
    </>
  );
}

