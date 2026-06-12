import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { PageHeader } from "@/components/site/PageHeader";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/adesao")({
  head: () => ({
    meta: [
      { title: "Adesão — Torne-se associado da ASAPOL" },
      { name: "description", content: "Adira à ASAPOL: preencha o formulário e junte-se à voz dos profissionais da PSP." },
      { property: "og:title", content: "Adesão — ASAPOL" },
      { property: "og:description", content: "Junte-se à voz dos profissionais da PSP." },
    ],
  }),
  component: JoinPage,
});

function JoinPage() {
  const [done, setDone] = useState(false);

  return (
    <>
      <PageHeader kicker="Associar-me" title="Torne-se Associado da ASAPOL" subtitle="O primeiro passo para se juntar à voz independente da PSP." />

      <section className="section">
        <div className="container-x grid lg:grid-cols-[1fr_1.4fr] gap-10 items-start">
          <aside className="rounded-2xl bg-navy-gradient text-white p-8 shadow-elegant">
            <ShieldCheck className="h-10 w-10 text-[var(--gold)]" />
            <h2 className="mt-4 font-display text-2xl font-bold">Porque aderir hoje?</h2>
            <ul className="mt-5 space-y-3 text-sm text-white/85">
              {[
                "Apoio jurídico permanente",
                "Representação sindical efetiva",
                "Formação certificada exclusiva",
                "Informação reservada aos associados",
                "Comunidade nacional ativa",
              ].map((p) => (
                <li key={p} className="flex gap-2">
                  <CheckCircle2 className="h-5 w-5 text-[var(--gold)] shrink-0" /> {p}
                </li>
              ))}
            </ul>
          </aside>

          <div className="rounded-2xl bg-card border border-border p-8 md:p-10 shadow-card">
            {done ? (
              <div className="text-center py-10">
                <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-gold-gradient text-[var(--navy)]">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="mt-5 font-display text-2xl font-bold text-navy">Pedido recebido!</h3>
                <p className="mt-2 text-muted-foreground max-w-md mx-auto">
                  Obrigado pela confiança. A direção da ASAPOL entrará em contacto consigo nas próximas 48 horas.
                </p>
                <Button onClick={() => setDone(false)} variant="outline" className="mt-6">Submeter outro pedido</Button>
              </div>
            ) : (
              <form
                className="grid gap-5 md:grid-cols-2"
                onSubmit={(e) => {
                  e.preventDefault();
                  setDone(true);
                }}
              >
                <h3 className="md:col-span-2 font-display text-xl font-bold text-navy">Pedido de Adesão</h3>
                <Field label="Nome Completo" required />
                <Field label="Número de Polícia" required />
                <Field label="Email" type="email" required />
                <Field label="Telefone" type="tel" />
                <Field label="Distrito" required />
                <Select label="Categoria Profissional" options={["Agente", "Agente Principal", "Chefe", "Subchefe", "Oficial", "Outra"]} required />

                <label className="md:col-span-2 flex items-start gap-3 text-sm text-muted-foreground">
                  <input type="checkbox" required className="mt-1" />
                  <span>
                    Autorizo o tratamento dos meus dados pessoais para efeitos de adesão à ASAPOL, nos termos da{" "}
                    <a href="#" className="text-[var(--secondary)] font-semibold underline">Política de Privacidade</a> (RGPD).
                  </span>
                </label>

                <Button type="submit" className="md:col-span-2 bg-gold-gradient text-[var(--navy)] h-12 font-semibold shadow-elegant">
                  Submeter Pedido de Adesão
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, type = "text", required }: { label: string; type?: string; required?: boolean }) {
  return (
    <label className="block">
      <span className="text-xs font-semibold uppercase tracking-wider text-foreground/70">
        {label} {required && <span className="text-destructive">*</span>}
      </span>
      <input
        type={type}
        required={required}
        className="mt-1.5 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--secondary)]"
      />
    </label>
  );
}

function Select({ label, options, required }: { label: string; options: string[]; required?: boolean }) {
  return (
    <label className="block">
      <span className="text-xs font-semibold uppercase tracking-wider text-foreground/70">
        {label} {required && <span className="text-destructive">*</span>}
      </span>
      <select
        required={required}
        className="mt-1.5 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--secondary)]"
        defaultValue=""
      >
        <option value="" disabled>Selecione…</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </label>
  );
}
