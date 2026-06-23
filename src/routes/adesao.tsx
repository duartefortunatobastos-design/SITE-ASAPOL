import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, Paperclip, Shield, User, UserPlus } from "lucide-react";
import { useState, type ReactNode } from "react";
import { PageHeader } from "@/components/site/PageHeader";
import { Button } from "@/components/ui/button";
import { submitAdesao } from "@/lib/api/adesao.functions";
import { fileToProofAttachment } from "@/lib/adesao";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/adesao")({
  head: () => ({
    meta: [
      { title: "Adesão — Torne-se associado da ASAPOL" },
      {
        name: "description",
        content: "Adira à ASAPOL: preencha o formulário e junte-se à voz dos profissionais da PSP.",
      },
      { property: "og:title", content: "Adesão — ASAPOL" },
      {
        property: "og:description",
        content: "Junte-se à voz dos profissionais da PSP.",
      },
    ],
  }),
  component: JoinPage,
});

type FieldDef = {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  fullWidth?: boolean;
};

const personalFields: FieldDef[] = [
  { name: "full_name", label: "Nome completo *", required: true, fullWidth: true },
  { name: "nif", label: "NIF" },
];

const pspFields: FieldDef[] = [
  { name: "service_number", label: "Matrícula PSP *", required: true },
  { name: "rank", label: "Posto" },
  { name: "unit", label: "Unidade / Esquadra", fullWidth: true },
];

const contactFields: FieldDef[] = [
  { name: "email", label: "Email *", type: "email", required: true },
  { name: "phone", label: "Telefone" },
  { name: "address", label: "Morada", fullWidth: true },
  { name: "postal_code", label: "Código postal" },
  { name: "locality", label: "Localidade" },
];

const benefits = [
  "Defesa jurídica especializada",
  "Apoio em processos disciplinares",
  "Protocolos exclusivos (telecomunicações, saúde, formação, lazer)",
  "Voz ativa na defesa da carreira policial",
  "Acesso à plataforma digital com cartão de sócio",
];

function JoinPage() {
  const [values, setValues] = useState<Record<string, string>>({});
  const [proof, setProof] = useState<File | null>(null);
  const [done, setDone] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function updateField(name: string, value: string) {
    setValues((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      const proofAttachment = proof ? await fileToProofAttachment(proof) : undefined;

      await submitAdesao({
        data: {
          full_name: values.full_name ?? "",
          nif: values.nif,
          service_number: values.service_number ?? "",
          rank: values.rank,
          unit: values.unit,
          email: values.email ?? "",
          phone: values.phone,
          address: values.address,
          postal_code: values.postal_code,
          locality: values.locality,
          proof: proofAttachment,
        },
      });

      setDone(true);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Não foi possível enviar o pedido. Tente novamente ou contacte-nos.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  if (done) {
    return (
      <>
        <PageHeader
          breadcrumbLabel="Adesão"
          kicker="Associar-me"
          title="Torne-se Associado da ASAPOL"
          subtitle="O primeiro passo para se juntar à voz independente da PSP."
        />
        <section className="section">
          <div className="container-x">
            <div className="mx-auto max-w-2xl rounded-2xl border border-border bg-card p-10 text-center shadow-card">
              <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-emerald-100 text-emerald-600">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h2 className="mt-4 font-display text-2xl font-bold text-navy">Pedido recebido</h2>
              <p className="mt-2 text-muted-foreground">
                Obrigado pela sua candidatura. A Direção Nacional vai analisar o pedido e
                contactá-lo brevemente.
              </p>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHeader
        breadcrumbLabel="Adesão"
        kicker="Associar-me"
        title="Torne-se Associado da ASAPOL"
        subtitle="O primeiro passo para se juntar à voz independente da PSP."
      />

      <section className="section">
        <div className="container-x">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
            <aside className="lg:col-span-1">
              <div className="rounded-2xl border border-border bg-card p-8 shadow-card">
                <Shield className="h-8 w-8 text-brand" aria-hidden />
                <h3 className="mt-4 font-display text-xl font-bold text-navy">Porque vale a pena</h3>
                <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                  {benefits.map((item) => (
                    <li key={item} className="flex gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            <form onSubmit={handleSubmit} className="space-y-8 lg:col-span-2">
              <FormSection legend="Dados pessoais" icon={User}>
                <FieldGrid
                  fields={personalFields}
                  values={values}
                  onChange={updateField}
                />
              </FormSection>

              <FormSection legend="Dados PSP" icon={Shield}>
                <FieldGrid fields={pspFields} values={values} onChange={updateField} />
              </FormSection>

              <FormSection legend="Contactos">
                <FieldGrid fields={contactFields} values={values} onChange={updateField} />
              </FormSection>

              <FormSection legend="Comprovativo (opcional)" icon={Paperclip}>
                <p className="text-sm text-muted-foreground">
                  Anexe PDF ou foto do cartão profissional para acelerar a validação.
                </p>
                <input
                  type="file"
                  accept="application/pdf,image/*"
                  onChange={(e) => setProof(e.target.files?.[0] ?? null)}
                  className="mt-3 block w-full rounded-lg border border-dashed border-border bg-muted/40 px-3 py-3 text-sm file:mr-3 file:rounded-md file:border-0 file:bg-brand file:px-3 file:py-1.5 file:text-sm file:font-medium file:text-white hover:bg-muted/60"
                />
                {proof && (
                  <p className="mt-2 text-xs text-muted-foreground">
                    ✓ {proof.name} · {(proof.size / 1024).toFixed(0)} KB
                  </p>
                )}
              </FormSection>

              <Button
                type="submit"
                disabled={submitting}
                className="h-12 w-full bg-cta text-base font-semibold shadow-elegant hover:bg-[var(--pt-red)]/90"
              >
                {submitting ? (
                  "A submeter…"
                ) : (
                  <>
                    Submeter pedido de inscrição <UserPlus className="h-4 w-4" />
                  </>
                )}
              </Button>

              {error && (
                <p className="rounded-lg border border-destructive/30 bg-destructive/5 px-4 py-3 text-center text-sm text-destructive">
                  {error}
                </p>
              )}

              <p className="text-center text-xs text-muted-foreground">
                Ao submeter, autoriza o tratamento dos dados pela ASAPOL nos termos da política de
                privacidade.
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

function FormSection({
  legend,
  icon: Icon,
  children,
}: {
  legend: string;
  icon?: typeof User;
  children: ReactNode;
}) {
  return (
    <fieldset className="rounded-2xl border border-border bg-card p-8 pt-10 shadow-card">
      <legend className="-mt-[2.75rem] mb-2 inline-flex items-center gap-2 rounded-lg bg-card px-3 text-sm font-semibold text-brand">
        {Icon && <Icon className="h-4 w-4" aria-hidden />}
        {legend}
      </legend>
      {children}
    </fieldset>
  );
}

function FieldGrid({
  fields,
  values,
  onChange,
}: {
  fields: FieldDef[];
  values: Record<string, string>;
  onChange: (name: string, value: string) => void;
}) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {fields.map((field) => (
        <label
          key={field.name}
          className={cn("block", field.fullWidth && "sm:col-span-2")}
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-foreground/70">
            {field.label}
          </span>
          <input
            type={field.type ?? "text"}
            required={field.required}
            value={values[field.name] ?? ""}
            onChange={(e) => onChange(field.name, e.target.value)}
            className="mt-1.5 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand/30"
            spellCheck={false}
            autoCorrect="off"
            autoCapitalize="off"
          />
        </label>
      ))}
    </div>
  );
}
