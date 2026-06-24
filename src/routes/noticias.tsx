import { createFileRoute } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { useState } from "react";
import { NewsCover } from "@/components/site/NewsCover";
import { PageHeader } from "@/components/site/PageHeader";
import { RevealItem, RevealOnScroll } from "@/components/site/RevealOnScroll";
import { newsArticles, newsCategories } from "@/lib/noticias-data";

export const Route = createFileRoute("/noticias")({
  head: () => ({
    meta: [
      { title: "Notícias — ASAPOL" },
      {
        name: "description",
        content: "Atualidade, comunicados e novidades da ASAPOL e da Polícia de Segurança Pública.",
      },
      { property: "og:title", content: "Notícias — ASAPOL" },
      { property: "og:description", content: "Comunicados, atualidade e novidades sindicais." },
    ],
  }),
  component: NewsPage,
});

function NewsPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("Todas");
  const filtered = newsArticles.filter(
    (n) =>
      (cat === "Todas" || n.cat === cat) &&
      (q === "" || n.title.toLowerCase().includes(q.toLowerCase())),
  );
  const featured = newsArticles.find((n) => "featured" in n && n.featured) ?? newsArticles[0];
  const gridNews = filtered.filter((n) => !("featured" in n && n.featured));

  return (
    <>
      <PageHeader
        breadcrumbLabel="Notícias"
        kicker="Atualidade"
        title="Notícias e Comunicados"
        subtitle="Tudo o que está a acontecer na ASAPOL e na PSP."
      />

      <section className="section">
        <div className="container-x">
          {featured && (
            <RevealOnScroll>
              <article className="grid md:grid-cols-2 rounded-2xl overflow-hidden border border-border bg-card shadow-elegant mb-12">
                <NewsCover
                  src={featured.image}
                  alt={featured.title}
                  className="aspect-video md:aspect-auto md:min-h-[280px]"
                  priority
                >
                  <div className="absolute top-4 left-4 rounded-full bg-[var(--gold)] text-white px-3 py-1 text-xs font-semibold uppercase tracking-wider">
                    Destaque · {featured.cat}
                  </div>
                </NewsCover>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">
                    {featured.date}
                  </div>
                  <h2 className="mt-3 font-display text-2xl md:text-3xl font-black text-navy">
                    {featured.title}
                  </h2>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{featured.summary}</p>
                </div>
              </article>
            </RevealOnScroll>
          )}

          <div className="flex flex-wrap items-center gap-4 mb-10">
            <div className="relative flex-1 min-w-[240px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Pesquisar notícias..."
                className="w-full rounded-lg border border-border bg-background pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--secondary)]"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {newsCategories.map((c) => (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  className={`rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors ${
                    cat === c ? "bg-primary text-white" : "bg-muted text-foreground/70 hover:bg-border"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {gridNews.map((n, i) => (
              <RevealItem
                key={n.title}
                index={i}
                as="article"
                className="rounded-2xl bg-card border border-border overflow-hidden shadow-card hover:shadow-elegant transition-shadow duration-300 group"
              >
                <NewsCover src={n.image} alt={n.title} className="aspect-[16/10]">
                  <div className="absolute top-4 left-4 rounded-full bg-[var(--gold)] text-white px-3 py-1 text-xs font-semibold uppercase tracking-wider">
                    {n.cat}
                  </div>
                </NewsCover>
                <div className="p-6">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">
                    {n.date}
                  </div>
                  <h3 className="mt-2 font-display text-lg font-bold text-navy">{n.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{n.summary}</p>
                </div>
              </RevealItem>
            ))}
          </div>

          <div className="mt-12 flex justify-center gap-2">
            {[1, 2, 3].map((p) => (
              <button
                key={p}
                className={`h-9 w-9 rounded-md text-sm font-semibold ${p === 1 ? "bg-primary text-white" : "bg-muted hover:bg-border"}`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
