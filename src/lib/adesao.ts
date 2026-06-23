export const ADESAO_EMAIL_RECIPIENTS = [
  "secretario@asapol.org",
  "geral@asapol.org",
] as const;

export type AdesaoFormData = {
  full_name: string;
  nif?: string;
  service_number: string;
  rank?: string;
  unit?: string;
  email: string;
  phone?: string;
  address?: string;
  postal_code?: string;
  locality?: string;
  proof?: {
    name: string;
    type: string;
    data: string;
  };
};

export const ADESAO_FIELD_LABELS: Record<keyof Omit<AdesaoFormData, "proof">, string> = {
  full_name: "Nome completo",
  nif: "NIF",
  service_number: "Matrícula PSP",
  rank: "Posto",
  unit: "Unidade / Esquadra",
  email: "Email",
  phone: "Telefone",
  address: "Morada",
  postal_code: "Código postal",
  locality: "Localidade",
};

export const MAX_PROOF_SIZE_BYTES = 5 * 1024 * 1024;

export async function fileToProofAttachment(
  file: File,
): Promise<NonNullable<AdesaoFormData["proof"]>> {
  if (file.size > MAX_PROOF_SIZE_BYTES) {
    throw new Error("O comprovativo não pode exceder 5 MB.");
  }

  const buffer = await file.arrayBuffer();
  const bytes = new Uint8Array(buffer);
  let binary = "";
  for (let i = 0; i < bytes.length; i++) {
    binary += String.fromCharCode(bytes[i]!);
  }

  return {
    name: file.name,
    type: file.type || "application/octet-stream",
    data: btoa(binary),
  };
}
