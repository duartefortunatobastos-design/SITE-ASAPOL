import { createFileRoute, Link } from "@tanstack/react-router";
import { Scale, Users, FileCheck, BookOpen, GraduationCap, LifeBuoy, ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/beneficios")({
  head: () => ({
    meta: [
      { title: "Benefícios — ASAPOL" },
      { name: "description", content: "Conheça as vantagens exclusivas para associados da ASAPOL: apoio jurídico, formação, representação e muito mais." },
      { property: "og:title", content: "Benefícios — ASAPOL" },
      { property: "og:description", content: "Vantagens exclusivas para os profissionais da PSP associados." },
    ],
  }),
  component: BenefitsPage,
});

const benefits = [
  { icon: Scale, title: "Apoio Jurídico", text: "Equipa jurídica disponível para questões disciplinares, criminais e laborais." },
  { icon: Users, title: "Representação Sindical", text: "Defesa firme dos seus interesses junto da tutela e em todas as instâncias." },
  { icon: FileCheck, title: "Acompanhamento de Processos", text: "Apoio personalizado em todas as fases dos seus processos profissionais." },
  { icon: BookOpen, title: "Informação Exclusiva", text: "Circulares, legislação e pareceres reservados aos associados." },
  { icon: GraduationCap, title: "Formação", text: "Ações de formação certificadas e desenvolvimento de carreira." },
  { icon: LifeBuoy, title: "Apoio Profissional", text: "Aconselhamento e apoio psicossocial em momentos críticos do serviço." },
];

function BenefitsPage() {
  return (
    <>
      <PageHeader
        kicker="Benefícios"
        title="Tudo o que ganha ao ser associado."
        subtitle="Vantagens reais, pensadas para os profissionais que servem o país todos os dias."
      />

      <section className="section">
        <div className="container-x grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => (
            <div key={i} className="group rounded-2xl border border-border bg-card p-8 shadow-card hover:shadow-elegant hover:-translate-y-1 transition-all">
              <div className="grid h-14 w-14 place-items-center rounded-xl bg-gold-gradient text-[var(--navy)] mb-5 group-hover:rotate-6 transition-transform">
                <b.icon className="h-7 w-7" />
              </div>
              <h3 className="font-display text-xl font-bold text-navy">{b.title}</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">{b.text}</p>
            </div>
          ))}
        </div>

        <div className="container-x mt-16 text-center">
          <Button asChild size="lg" className="bg-gold-gradient text-[var(--navy)] font-semibold h-12 px-8 shadow-elegant">
            <Link to="/adesao">Tornar-me Associado <ArrowRight className="ml-1.5 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>
    </>
  );
}
