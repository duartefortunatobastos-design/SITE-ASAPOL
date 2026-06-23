import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

import { MAX_PROOF_SIZE_BYTES } from "../adesao";
import { sendAdesaoEmail } from "../email.server";
import { submitMembershipApplication } from "../membership.server";

const proofSchema = z.object({
  name: z.string().min(1).max(255),
  type: z.string().min(1).max(127),
  data: z.string().min(1),
});

const adesaoSchema = z.object({
  full_name: z.string().trim().min(1, "Nome completo é obrigatório."),
  nif: z.string().trim().optional(),
  service_number: z.string().trim().min(1, "Matrícula PSP é obrigatória."),
  rank: z.string().trim().optional(),
  unit: z.string().trim().optional(),
  email: z.string().trim().email("Email inválido."),
  phone: z.string().trim().optional(),
  address: z.string().trim().optional(),
  postal_code: z.string().trim().optional(),
  locality: z.string().trim().optional(),
  proof: proofSchema.optional(),
});

function validateProofSize(proof: z.infer<typeof proofSchema> | undefined) {
  if (!proof) return;

  const binaryLength = atob(proof.data).length;
  if (binaryLength > MAX_PROOF_SIZE_BYTES) {
    throw new Error("O comprovativo não pode exceder 5 MB.");
  }
}

export const submitAdesao = createServerFn({ method: "POST" })
  .validator(adesaoSchema)
  .handler(async ({ data }) => {
    validateProofSize(data.proof);

    const errors: string[] = [];

    try {
      await submitMembershipApplication(data);
    } catch (error) {
      errors.push(
        error instanceof Error ? error.message : "Erro ao registar o pedido de inscrição.",
      );
    }

    try {
      await sendAdesaoEmail(data);
    } catch (error) {
      errors.push(
        error instanceof Error ? error.message : "Erro ao enviar a notificação por email.",
      );
    }

    if (errors.length === 2) {
      throw new Error(errors.join(" "));
    }

    return { ok: true as const };
  });
