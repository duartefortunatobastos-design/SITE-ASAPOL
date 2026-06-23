import {
  ADESAO_EMAIL_RECIPIENTS,
  ADESAO_FIELD_LABELS,
  type AdesaoFormData,
} from "./adesao";

function proofToFile(proof: NonNullable<AdesaoFormData["proof"]>) {
  const binary = atob(proof.data);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return new File([bytes], proof.name, { type: proof.type });
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function buildAdesaoEmailHtml(data: AdesaoFormData) {
  const sections = [
    { title: "Dados pessoais", fields: ["full_name", "nif"] as const },
    { title: "Dados PSP", fields: ["service_number", "rank", "unit"] as const },
    {
      title: "Contactos",
      fields: ["email", "phone", "address", "postal_code", "locality"] as const,
    },
  ];

  const rows = sections
    .map(
      (section) => `
        <h2 style="margin:24px 0 8px;font-size:16px;color:#1e3a5f">${escapeHtml(section.title)}</h2>
        <table style="border-collapse:collapse;width:100%;font-size:14px">
          ${section.fields
            .map((field) => {
              const label = ADESAO_FIELD_LABELS[field];
              const value = data[field]?.trim() || "—";
              return `<tr><td style="padding:8px 12px;border:1px solid #e5e7eb;font-weight:600;width:180px;background:#f9fafb">${escapeHtml(label)}</td><td style="padding:8px 12px;border:1px solid #e5e7eb">${escapeHtml(value)}</td></tr>`;
            })
            .join("")}
        </table>
      `,
    )
    .join("");

  const proofHtml = data.proof
    ? `<p style="margin-top:24px;font-size:14px"><strong>Comprovativo:</strong> ${escapeHtml(data.proof.name)} (anexo)</p>`
    : `<p style="margin-top:24px;font-size:14px"><strong>Comprovativo:</strong> não enviado</p>`;

  return `
    <div style="font-family:Inter,Arial,sans-serif;color:#111827;line-height:1.5">
      <p style="font-size:15px">Novo pedido de inscrição recebido através do formulário <strong>Tornar-me sócio</strong> do site ASAPOL.</p>
      ${rows}
      ${proofHtml}
      <p style="margin-top:24px;font-size:12px;color:#6b7280">Enviado automaticamente em ${new Date().toLocaleString("pt-PT", { timeZone: "Europe/Lisbon" })}.</p>
    </div>
  `;
}

function buildAdesaoEmailText(data: AdesaoFormData) {
  return [
    "Novo pedido de inscrição — ASAPOL",
    "",
    ...Object.entries(ADESAO_FIELD_LABELS).map(
      ([key, label]) => `${label}: ${data[key as keyof typeof ADESAO_FIELD_LABELS]?.trim() || "—"}`,
    ),
    "",
    `Comprovativo: ${data.proof ? `${data.proof.name} (anexo)` : "não enviado"}`,
  ].join("\n");
}

async function sendViaResend(data: AdesaoFormData) {
  const resendApiKey = process.env.RESEND_API_KEY;
  if (!resendApiKey) return false;

  const payload: Record<string, unknown> = {
    from: process.env.EMAIL_FROM ?? "ASAPOL Website <noreply@asapol.org>",
    to: [...ADESAO_EMAIL_RECIPIENTS],
    reply_to: data.email,
    subject: `Novo pedido de inscrição — ${data.full_name}`,
    html: buildAdesaoEmailHtml(data),
    text: buildAdesaoEmailText(data),
  };

  if (data.proof) {
    payload.attachments = [{ filename: data.proof.name, content: data.proof.data }];
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    console.error("Resend API error:", response.status, await response.text());
    return false;
  }

  return true;
}

async function sendViaFormSubmit(data: AdesaoFormData) {
  const [primaryRecipient, ...ccRecipients] = ADESAO_EMAIL_RECIPIENTS;
  const formData = new FormData();

  formData.append("_subject", `Novo pedido de inscrição — ${data.full_name}`);
  formData.append("_template", "table");
  formData.append("_captcha", "false");
  formData.append("_replyto", data.email);

  if (ccRecipients.length > 0) {
    formData.append("_cc", ccRecipients.join(", "));
  }

  for (const [key, label] of Object.entries(ADESAO_FIELD_LABELS)) {
    const value = data[key as keyof typeof ADESAO_FIELD_LABELS]?.trim();
    if (value) formData.append(label, value);
  }

  if (data.proof) {
    formData.append("attachment", proofToFile(data.proof));
  }

  const response = await fetch(`https://formsubmit.co/ajax/${primaryRecipient}`, {
    method: "POST",
    headers: { Accept: "application/json" },
    body: formData,
  });

  if (!response.ok) {
    console.error("FormSubmit error:", response.status, await response.text());
    return false;
  }

  const result = (await response.json()) as { success?: string };
  return Boolean(result.success);
}

export async function sendAdesaoEmail(data: AdesaoFormData) {
  if (await sendViaResend(data)) return;

  const sent = await sendViaFormSubmit(data);
  if (sent) return;

  throw new Error("Não foi possível enviar a notificação por email.");
}
