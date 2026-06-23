import type { DnMemberProfile, DnNewsItem } from "./dn-api.server";

export type MemberDashboard = {
  welcomeName: string;
  profile: DnMemberProfile;
  roleLabel?: string | null;
  monthlyQuota?: number | null;
  emailActive: boolean;
  comunicados: DnNewsItem[];
  informacoes: DnNewsItem[];
};

export function formatDatePt(value?: string | null) {
  if (!value) return "—";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString("pt-PT");
}

export function formatPostalLine(profile: DnMemberProfile) {
  const parts = [profile.postal_code?.trim(), profile.locality?.trim()].filter(Boolean);
  return parts.length > 0 ? parts.join(" ") : "—";
}

export function formatCurrency(value?: number | null) {
  if (value == null || Number.isNaN(value)) return "—";
  return value.toLocaleString("pt-PT", { style: "currency", currency: "EUR" });
}

export const PERSONAL_DATA_ROWS: Array<{
  label: string;
  value: (profile: DnMemberProfile) => string;
}> = [
  { label: "Morada", value: (p) => p.address?.trim() || "—" },
  { label: "Código Postal", value: (p) => formatPostalLine(p) },
  { label: "Telefone", value: (p) => p.phone?.trim() || "—" },
  { label: "Matrícula", value: (p) => p.service_number?.trim() || "—" },
  { label: "Nº Ident. Fiscal", value: (p) => p.nif?.trim() || "—" },
  { label: "Data de Nascimento", value: (p) => formatDatePt(p.birth_date) },
  { label: "Data de Alistamento", value: (p) => formatDatePt(p.enlistment_date) },
  { label: "Comando", value: (p) => p.organ?.trim() || "—" },
  { label: "Unidade de Colocação", value: (p) => p.unit?.trim() || "—" },
  { label: "Posto", value: (p) => p.rank?.trim() || "—" },
  { label: "Email", value: (p) => p.email?.trim() || "—" },
];

export function formatNewsLabel(item: DnNewsItem, categoryLabel: string) {
  const date = formatDatePt(item.published_at ?? item.created_at);
  return `[${categoryLabel}:${item.id}] [Data: ${date}] Assunto: ${item.title}`;
}
