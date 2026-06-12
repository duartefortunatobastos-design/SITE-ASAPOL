import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { PageHeader } from "@/components/site/PageHeader";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/contactos")({
  head: () => ({
    meta: [
      { title: "Contactos — ASAPOL" },
      { name: "description", content: "Entre em contacto com a ASAPOL. Morada, telefone, email e formulário direto." },
      { property: "og:title", content: "Contactos — ASAPOL" },
      { property: "og:description", content: "Fale com a ASAPOL." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHeader kicker="Fale Connosco" title="Estamos à sua disposição." subtitle="A direção da ASAPOL responde a cada associado com a atenção que merece." />

      <section className="section">
        <div className="container-x grid lg:grid-cols-[1fr_1.3fr] gap-10 items-start">
          <div className="space-y-5">
            {[
              { icon: MapPin, t: "Morada", v: "Av. da Liberdade, 110\n1250-096 Lisboa, Portugal" },
              { icon: Phone, t: "Telefone", v: "+351 210 000 000" },
              { icon: Mail, t: "Email", v: "geral@asapol.pt" },
            ].map((c, i) => (
              <div key={i} className="flex gap-4 rounded-2xl bg-card border border-border p-6 shadow-card">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-navy-gradient text-[var(--gold)]">
                  <c.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-display font-bold text-navy">{c.t}</div>
                  <div className="text-sm text-muted-foreground whitespace-pre-line">{c.v}</div>
                </div>
              </div>
            ))}

            <div className="rounded-2xl overflow-hidden border border-border aspect-[4/3] shadow-card">
              <iframe
                title="Localização ASAPOL"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-9.15%2C38.715%2C-9.135%2C38.728&layer=mapnik&marker=38.72,-9.1425"
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>
          </div>

          <div className="rounded-2xl bg-card border border-border p-8 md:p-10 shadow-elegant">
            <h3 className="font-display text-2xl font-bold text-navy">Envie-nos uma mensagem</h3>
            <p className="mt-2 text-sm text-muted-foreground">Responderemos no mais curto espaço de tempo.</p>

            {sent ? (
              <div className="mt-8 rounded-xl bg-muted p-6 text-center">
                <p className="font-semibold text-navy">Mensagem enviada com sucesso!</p>
                <p className="text-sm text-muted-foreground mt-1">Obrigado pelo seu contacto.</p>
              </div>
            ) : (
              <form className="mt-6 space-y-4" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
                <Field label="Nome" required />
                <Field label="Email" type="email" required />
                <Field label="Telefone" type="tel" />
                <label className="block">
                  <span className="text-xs font-semibold uppercase tracking-wider text-foreground/70">Mensagem *</span>
                  <textarea
                    required
                    rows={5}
                    className="mt-1.5 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--secondary)] resize-none"
                  />
                </label>
                <Button type="submit" className="w-full bg-gold-gradient text-[var(--navy)] h-11 font-semibold shadow-elegant">
                  Enviar Mensagem <Send className="ml-2 h-4 w-4" />
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
