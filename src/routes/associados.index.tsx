import { createFileRoute, useNavigate } from "@tanstack/react-router";

import { Download, MessageSquare, GraduationCap, User, Mail } from "lucide-react";

import { useState } from "react";

import { PageHeader } from "@/components/site/PageHeader";

import { AsapolLogo } from "@/components/site/AsapolLogo";

import { RevealButton } from "@/components/site/RevealButton";

import { RevealItem, RevealOnScroll } from "@/components/site/RevealOnScroll";

import { loginMember } from "@/lib/api/member.functions";



export const Route = createFileRoute("/associados/")({

  head: () => ({

    meta: [

      { title: "Área do Associado — ASAPOL" },

      {

        name: "description",

        content:

          "Aceda ao portal exclusivo de associados da ASAPOL: documentos, comunicações internas e formação.",

      },

      { property: "og:title", content: "Área do Associado — ASAPOL" },

      { property: "og:description", content: "Portal exclusivo para os associados da ASAPOL." },

    ],

  }),

  component: AssociadosPage,

});



const features = [

  {

    icon: Download,

    t: "Download de Documentos",

    d: "Aceda a circulares, pareceres e formulários.",

  },

  {

    icon: MessageSquare,

    t: "Comunicações Internas",

    d: "Receba comunicados oficiais em primeira mão.",

  },

  {

    icon: GraduationCap,

    t: "Materiais de Formação",

    d: "Biblioteca de conteúdos e cursos online.",

  },

  { icon: User, t: "Gestão de Perfil", d: "Atualize os seus dados a qualquer momento." },

  { icon: Mail, t: "Contacto Direto", d: "Linha aberta com a direção da ASAPOL." },

];



function AssociadosPage() {

  const navigate = useNavigate();

  const [identifier, setIdentifier] = useState("");

  const [password, setPassword] = useState("");

  const [remember, setRemember] = useState(false);

  const [submitting, setSubmitting] = useState(false);

  const [error, setError] = useState<string | null>(null);



  async function handleSubmit(e: React.FormEvent) {

    e.preventDefault();

    setSubmitting(true);

    setError(null);



    try {

      await loginMember({ data: { identifier, password } });

      navigate({ to: "/associados/painel" });

    } catch (err) {

      setError(err instanceof Error ? err.message : "Não foi possível entrar.");

    } finally {

      setSubmitting(false);

    }

  }



  return (

    <>

      <PageHeader

        breadcrumbLabel="Associados"

        kicker="Portal Seguro"

        title="Área do Associado"

        subtitle="O seu espaço privado, com tudo o que precisa, sempre disponível."

      />



      <section className="section">

        <div className="container-x grid lg:grid-cols-2 gap-12 items-start">

          <RevealOnScroll>

            <div className="rounded-2xl bg-card border border-border p-8 md:p-10 shadow-elegant">

              <div className="flex items-center gap-4 border-b border-border pb-6">

                <AsapolLogo className="h-16 w-16 rounded-full shadow-card" />

                <div className="leading-tight">

                  <div className="font-display text-xl font-extrabold tracking-tight text-navy">ASAPOL</div>

                  <div className="mt-1 text-[0.65rem] uppercase tracking-[0.14em] text-muted-foreground">

                    Associação Sindical Autónoma de Polícia

                  </div>

                </div>

              </div>



              <h2 className="mt-6 font-display text-2xl font-bold text-navy">Iniciar Sessão</h2>

              <p className="mt-2 text-sm text-muted-foreground">
                Aceda com o seu número de sócio ou email e password.
              </p>

              <form className="mt-6 space-y-4" autoComplete="off" onSubmit={handleSubmit}>
                <Field
                  label="Número de Sócio ou Email"
                  name="asapol-identificador"
                  type="text"
                  placeholder="ex. 131 ou nome@gmail.com"
                  autoComplete="username"
                  value={identifier}
                  onChange={setIdentifier}
                  required
                />

                <Field

                  label="Password"

                  name="asapol-password"

                  type="password"

                  placeholder="••••••••"

                  autoComplete="current-password"

                  value={password}

                  onChange={setPassword}

                  required

                />

                <label className="flex items-center gap-2 text-xs text-muted-foreground">

                  <input

                    type="checkbox"

                    className="rounded"

                    checked={remember}

                    onChange={(e) => setRemember(e.target.checked)}

                  />

                  Manter sessão iniciada

                </label>



                {error && (

                  <p className="rounded-lg border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-destructive">

                    {error}

                  </p>

                )}



                <div className="space-y-3 pt-1">

                  <RevealButton

                    type="submit"

                    delay={240}

                    wrapperClassName="w-full"

                    className="w-full bg-navy-gradient text-white h-11 font-semibold"

                    disabled={submitting}

                  >

                    {submitting ? "A entrar…" : "Entrar"}

                  </RevealButton>

                  <RevealButton

                    type="button"

                    delay={320}

                    wrapperClassName="w-full"

                    variant="outline"

                    className="w-full h-11 font-semibold"

                    onClick={() => window.open("https://dn.asapol.org/recuperar", "_blank")}

                  >

                    Recuperar Password

                  </RevealButton>

                </div>

              </form>

            </div>

          </RevealOnScroll>



          <div>

            <RevealOnScroll delay={80}>

              <h3 className="font-display text-2xl font-bold text-navy">O que pode fazer aqui</h3>

              <p className="mt-2 text-muted-foreground">

                Ferramentas e recursos exclusivos para associados ASAPOL.

              </p>

            </RevealOnScroll>

            <div className="mt-6 space-y-3">

              {features.map((f, i) => (

                <RevealItem

                  key={i}

                  index={i}

                  baseDelay={160}

                  className="flex gap-4 rounded-xl border border-border bg-card p-5 hover:shadow-card hover:-translate-y-0.5 transition-all duration-300"

                >

                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-gold-gradient text-white">

                    <f.icon className="h-5 w-5" />

                  </div>

                  <div className="min-w-0">

                    <div className="font-semibold text-navy">{f.t}</div>

                    <div className="text-sm text-muted-foreground">{f.d}</div>

                  </div>

                </RevealItem>

              ))}

            </div>

          </div>

        </div>

      </section>

    </>

  );

}



function Field({
  label,
  name,
  type,
  placeholder,
  autoComplete,
  value,
  onChange,
  required,
}: {

  label: string;

  name: string;

  type: string;

  placeholder?: string;
  autoComplete?: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-xs font-semibold uppercase tracking-wider text-foreground/70">
        {label}
      </span>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1.5 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--secondary)]"
        spellCheck={false}
        autoCorrect="off"
        autoCapitalize="off"
      />
    </label>
  );
}

