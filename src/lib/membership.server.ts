import type { AdesaoFormData } from "./adesao";

const DEFAULT_MEMBERSHIP_API_URL =
  "https://demo.asapol.org/api/membership-applications";

function getMembershipApiUrl() {
  return process.env.MEMBERSHIP_API_URL ?? DEFAULT_MEMBERSHIP_API_URL;
}

function proofToFile(proof: NonNullable<AdesaoFormData["proof"]>) {
  const binary = atob(proof.data);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return new File([bytes], proof.name, { type: proof.type });
}

function buildMembershipFormData(data: AdesaoFormData) {
  const formData = new FormData();

  const fields: Array<[keyof AdesaoFormData, string | undefined]> = [
    ["full_name", data.full_name],
    ["nif", data.nif],
    ["service_number", data.service_number],
    ["rank", data.rank],
    ["unit", data.unit],
    ["email", data.email],
    ["phone", data.phone],
    ["address", data.address],
    ["postal_code", data.postal_code],
    ["locality", data.locality],
  ];

  for (const [name, value] of fields) {
    if (value?.trim()) {
      formData.append(name, value.trim());
    }
  }

  if (data.proof) {
    formData.append("proof", proofToFile(data.proof));
  }

  return formData;
}

export async function submitMembershipApplication(data: AdesaoFormData) {
  const apiUrl = getMembershipApiUrl();
  const response = await fetch(apiUrl, {
    method: "POST",
    body: buildMembershipFormData(data),
  });

  if (!response.ok) {
    let detail = "Erro ao submeter o pedido.";
    try {
      const payload = (await response.json()) as { detail?: string };
      if (payload.detail) detail = payload.detail;
    } catch {
      // ignore parse errors
    }
    console.error("Membership API error:", response.status, detail);
    throw new Error(detail);
  }
}
