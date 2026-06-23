import { createFileRoute } from "@tanstack/react-router";
import { Calendar, Scale, Star } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { RevealItem } from "@/components/site/RevealOnScroll";

export const Route = createFileRoute("/vitorias-judiciais")({
  head: () => ({
    meta: [
      { title: "Vitórias Judiciais — ASAPOL" },
      {
        name: "description",
        content:
          "Vitórias judiciais da ASAPOL: casos em que conquistámos direitos para os associados em tribunal.",
      },
      { property: "og:title", content: "Vitórias Judiciais — ASAPOL" },
      {
        property: "og:description",
        content: "Casos em que a ASAPOL conquistou direitos para os seus associados em tribunal.",
      },
    ],
  }),
  component: VictoriesPage,
});

const victories = [
  {
    id: "transferencia-2024",
    title: "Tribunal anula transferência ilegal",
    excerpt:
      "Vitória da ASAPOL: tribunal anulou despacho que transferia agente sem justificação válida.",
    body: "Em decisão histórica, o Tribunal Administrativo deu razão à ASAPOL na defesa de um associado cuja transferência havia sido determinada sem fundamento legal.",
    court: "Tribunal Administrativo de Lisboa",
    caseDate: "2024-10-15",
    featured: true,
  },
  {
    id: "amnistia-2023",
    title: "Sentença de amnistia favorável",
    excerpt: "Aplicação da lei de amnistia a processos disciplinares reconhecida em tribunal.",
    body: "O tribunal confirmou a aplicação da lei de amnistia a vários processos disciplinares pendentes, conforme defendido pela ASAPOL.",
    court: "Tribunal Central Administrativo Sul",
    caseDate: "2023-06-20",
  },
];

function formatCaseDate(date: string) {
  return new Date(date).toLocaleDateString("pt-PT", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

function VictoriesPage() {
  return (
    <>
      <PageHeader
        breadcrumbLabel="Vitórias"
        title="Vitórias Judiciais"
        subtitle="Casos em que a ASAPOL conquistou direitos para os seus associados em tribunal."
      />

      <section className="section">
        <div className="container-x">
          {victories.length === 0 ? (
            <p className="text-muted-foreground">Sem vitórias registadas.</p>
          ) : (
            <ol className="space-y-6">
              {victories.map((victory, i) => (
                <RevealItem
                  key={victory.id}
                  index={i}
                  as="li"
                  className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-elegant"
                >
                  {victory.featured && (
                    <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-semibold text-[var(--pt-red)]">
                      <Star size={12} aria-hidden />
                      Destaque
                    </span>
                  )}

                  <div className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-[auto_1fr] md:p-8">
                    <div className="flex items-start gap-3 sm:flex-col sm:items-center sm:border-r sm:border-border sm:pr-6">
                      <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-[var(--pt-red)]/10 text-[var(--pt-red)]">
                        <Scale size={24} aria-hidden />
                      </div>
                      <div className="sm:mt-3 sm:text-center">
                        <p className="flex items-center gap-1.5 text-sm font-semibold text-navy">
                          <Calendar size={14} className="text-muted-foreground" aria-hidden />
                          {formatCaseDate(victory.caseDate)}
                        </p>
                        <p className="mt-1 text-xs text-muted-foreground">{victory.court}</p>
                      </div>
                    </div>

                    <div>
                      <h2 className="font-display text-xl font-bold leading-snug text-navy">
                        {victory.title}
                      </h2>
                      <p className="mt-3 leading-relaxed text-muted-foreground">{victory.body}</p>
                    </div>
                  </div>
                </RevealItem>
              ))}
            </ol>
          )}
        </div>
      </section>
    </>
  );
}
