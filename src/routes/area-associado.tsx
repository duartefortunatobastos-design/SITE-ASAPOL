import { createFileRoute } from "@tanstack/react-router";
import { Lock, Download, MessageSquare, GraduationCap, User, Mail } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/area-associado")({
  head: () => ({
    meta: [
      { title: "Área do Associado — ASAPOL" },
      { name: "description", content: "Aceda ao portal exclusivo de associados da ASAPOL: documentos, comunicações internas e formação." },
      { property: "og:title", content: "Área do Associado — ASAPOL" },
      { property: "og:description", content: "Portal exclusivo para os associados da ASAPOL." },
    ],
  }),
  component: MembersPage,
});

const features = [
  { icon: Download, t: "Download de Documentos", d: "Aceda a circulares, pareceres e formulários." },
  { icon: MessageSquare, t: "Comunicações Internas", d: "Receba comunicados oficiais em primeira mão." },
  { icon: GraduationCap, t: "Materiais de Formação", d: "Biblioteca de conteúdos e cursos online." },
  { icon: User, t: "Gestão de Perfil", d: "Atualize os seus dados a qualquer momento." },
  { icon: Mail, t: "Contacto Direto", d: "Linha aberta com a direção da ASAPOL." },
];

function MembersPage() {
  return (
    <>
      <PageHeader kicker="Portal Seguro" title="Área do Associado" subtitle="O seu espaço privado, com tudo o que precisa, sempre disponível." />

      <section className="section">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-start">
          <div className="rounded-2xl bg-card border border-border p-8 md:p-10 shadow-elegant">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-navy-gradient text-[var(--gold)] mb-5">
              <Lock className="h-6 w-6" />
            </div>
            <h2 className="font-display text-2xl font-bold text-navy">Iniciar Sessão</h2>
            <p className="mt-2 text-sm text-muted-foreground">Aceda com as suas credenciais de associado.</p>

            <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
              <Field label="Número de Associado" type="text" placeholder="ASA-000000" />
              <Field label="Palavra-passe" type="password" placeholder="••••••••" />
              <div className="flex items-center justify-between text-xs">
                <label className="flex items-center gap-2 text-muted-foreground">
                  <input type="checkbox" className="rounded" /> Manter sessão iniciada
                </label>
                <a href="#" className="font-semibold text-[var(--secondary)] hover:underline">Esqueci-me</a>
              </div>
              <Button className="w-full bg-navy-gradient text-white h-11 font-semibold">Entrar</Button>
            </form>
          </div>

          <div>
            <h3 className="font-display text-2xl font-bold text-navy">O que pode fazer aqui</h3>
            <p className="mt-2 text-muted-foreground">Ferramentas e recursos exclusivos para associados ASAPOL.</p>
            <div className="mt-6 space-y-3">
              {features.map((f, i) => (
                <div key={i} className="flex gap-4 rounded-xl border border-border bg-card p-5 hover:shadow-card transition-shadow">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-gold-gradient text-[var(--navy)]">
                    <f.icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-semibold text-navy">{f.t}</div>
                    <div className="text-sm text-muted-foreground">{f.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, type, placeholder }: { label: string; type: string; placeholder?: string }) {
  return (
    <label className="block">
      <span className="text-xs font-semibold uppercase tracking-wider text-foreground/70">{label}</span>
      <input
        type={type}
        placeholder={placeholder}
        className="mt-1.5 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--secondary)]"
      />
    </label>
  );
}
