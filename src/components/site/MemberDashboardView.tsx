import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  formatCurrency,
  formatNewsLabel,
  PERSONAL_DATA_ROWS,
  type MemberDashboard,
} from "@/lib/member";

export function MemberDashboardView({
  dashboard,
  onLogout,
  loggingOut,
}: {
  dashboard: MemberDashboard;
  onLogout?: () => void;
  loggingOut?: boolean;
}) {
  const { profile } = dashboard;
  const roleSuffix = dashboard.roleLabel ? ` - ${dashboard.roleLabel}` : "";

  return (
    <div className="space-y-6">
      <div className="rounded-2xl bg-navy-gradient px-6 py-5 text-white shadow-elegant">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-sm text-white/80">Bem-vindo!</p>
            <h1 className="font-display text-2xl font-bold">{dashboard.welcomeName}</h1>
          </div>
          {onLogout && (
            <Button
              type="button"
              variant="outline"
              onClick={onLogout}
              disabled={loggingOut}
              className="border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white"
            >
              <LogOut className="h-4 w-4" />
              {loggingOut ? "A sair…" : "Sair"}
            </Button>
          )}
        </div>
      </div>

      <section className="overflow-hidden rounded-2xl border border-border bg-card shadow-card">
        <div className="bg-navy px-6 py-3">
          <h2 className="font-display text-lg font-bold text-white">Os Seus Dados Pessoais</h2>
        </div>
        <div className="divide-y divide-border">
          {PERSONAL_DATA_ROWS.map((row) => (
            <div
              key={row.label}
              className="grid grid-cols-1 gap-1 px-6 py-3 sm:grid-cols-[220px_1fr] sm:gap-4"
            >
              <div className="text-sm font-semibold text-navy">{row.label}</div>
              <div className="text-sm text-foreground/85">{row.value(profile)}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="space-y-2 rounded-2xl border border-border bg-card px-6 py-5 text-center shadow-card">
        <p className="font-semibold text-navy">
          Associado nº. {profile.member_number}
          {roleSuffix}
        </p>
        <p className="text-sm text-muted-foreground">
          Valor da Quota Mensal: {formatCurrency(dashboard.monthlyQuota)}
        </p>
        <p
          className={`text-sm font-semibold ${dashboard.emailActive ? "text-emerald-600" : "text-muted-foreground"}`}
        >
          Envio de e-mail {dashboard.emailActive ? "Ativo" : "Inativo"}
        </p>
      </div>

      <NewsSection
        title="Comunicados"
        items={dashboard.comunicados}
        categoryLabel="COMUNICADO"
        emptyText="Sem comunicados de momento."
      />

      <NewsSection
        title="Informações"
        items={dashboard.informacoes}
        categoryLabel="Informação ID"
        emptyText="Sem informações de momento."
      />
    </div>
  );
}

function NewsSection({
  title,
  items,
  categoryLabel,
  emptyText,
}: {
  title: string;
  items: MemberDashboard["comunicados"];
  categoryLabel: string;
  emptyText: string;
}) {
  return (
    <section className="overflow-hidden rounded-2xl border border-border bg-card shadow-card">
      <div className="bg-navy px-6 py-3">
        <h2 className="font-display text-lg font-bold text-white">{title}</h2>
      </div>
      <div className="divide-y divide-border">
        {items.length === 0 ? (
          <p className="px-6 py-4 text-sm text-muted-foreground">{emptyText}</p>
        ) : (
          items.map((item) => (
            <article key={item.id} className="px-6 py-4">
              <p className="text-sm font-medium text-brand">
                {formatNewsLabel(item, categoryLabel)}
              </p>
              {item.body && (
                <p className="mt-2 whitespace-pre-wrap text-sm text-muted-foreground">{item.body}</p>
              )}
            </article>
          ))
        )}
      </div>
    </section>
  );
}
