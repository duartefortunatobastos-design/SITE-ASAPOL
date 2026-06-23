import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { MemberDashboardView } from "@/components/site/MemberDashboardView";
import { PageHeader } from "@/components/site/PageHeader";
import { getMemberDashboard, logoutMember } from "@/lib/api/member.functions";
import type { MemberDashboard } from "@/lib/member";

export const Route = createFileRoute("/associados/painel")({
  head: () => ({
    meta: [
      { title: "Painel do Associado — ASAPOL" },
      { property: "og:title", content: "Painel do Associado — ASAPOL" },
    ],
  }),
  component: MemberPanelPage,
});

function MemberPanelPage() {
  const navigate = useNavigate();
  const [dashboard, setDashboard] = useState<MemberDashboard | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [loggingOut, setLoggingOut] = useState(false);

  useEffect(() => {
    let cancelled = false;

    getMemberDashboard()
      .then((data) => {
        if (!cancelled) setDashboard(data);
      })
      .catch((err) => {
        if (!cancelled) {
          setError(
            err instanceof Error ? err.message : "Não foi possível carregar o painel.",
          );
        }
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  async function handleLogout() {
    setLoggingOut(true);
    try {
      await logoutMember();
      navigate({ to: "/associados" });
    } finally {
      setLoggingOut(false);
    }
  }

  return (
    <>
      <PageHeader
        breadcrumbLabel="Painel"
        kicker="Área do Associado"
        title="Portal do Sócio"
        subtitle="Consulte os seus dados, comunicados e informações."
      />

      <section className="section">
        <div className="container-x max-w-4xl">
          {loading && (
            <div className="rounded-2xl border border-border bg-card px-6 py-10 text-center text-muted-foreground shadow-card">
              A carregar o seu painel…
            </div>
          )}

          {!loading && error && (
            <div className="rounded-2xl border border-destructive/30 bg-destructive/5 px-6 py-8 text-center shadow-card">
              <p className="font-semibold text-destructive">{error}</p>
              <Link
                to="/associados"
                className="mt-4 inline-block text-sm font-medium text-brand hover:underline"
              >
                Voltar ao início de sessão
              </Link>
            </div>
          )}

          {!loading && dashboard && (
            <MemberDashboardView
              dashboard={dashboard}
              onLogout={handleLogout}
              loggingOut={loggingOut}
            />
          )}
        </div>
      </section>
    </>
  );
}
