import { DnApiError, dnFetch } from "./dn-api.server";

export const LOGIN_ERROR_IDENTIFIER = "Número de sócio ou email incorreto.";
export const LOGIN_ERROR_PASSWORD = "Password incorreta.";

const PROBE_PASSWORD = "__asapol_login_probe__";

function normalizeErrorText(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .trim();
}

function isIdentifierOnlyError(detail: string) {
  const normalized = normalizeErrorText(detail);
  return (
    normalized.includes("nao encontrado") ||
    normalized.includes("nao existe") ||
    normalized.includes("inexistente") ||
    normalized.includes("identificador invalido") ||
    (normalized.includes("socio") &&
      normalized.includes("incorret") &&
      !normalized.includes("password") &&
      !normalized.includes("palavra-passe")) ||
    (normalized.includes("email") &&
      normalized.includes("incorret") &&
      !normalized.includes("password") &&
      !normalized.includes("palavra-passe"))
  );
}

function isPasswordOnlyError(detail: string) {
  const normalized = normalizeErrorText(detail);
  return (
    normalized.includes("password incorret") ||
    normalized.includes("palavra-passe incorret") ||
    normalized.includes("palavra passe incorret") ||
    (normalized.includes("password") &&
      normalized.includes("incorret") &&
      !normalized.includes("socio/email") &&
      !normalized.includes("socio ou email"))
  );
}

function isCombinedLoginError(detail: string) {
  const normalized = normalizeErrorText(detail);
  return (
    normalized.includes("socio/email ou password") ||
    normalized.includes("socio ou email ou password") ||
    normalized.includes("email ou password incorret")
  );
}

export function looksLikeValidIdentifier(identifier: string) {
  const value = identifier.trim();
  if (!value) return false;

  if (value.includes("@")) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  return /^[a-zA-Z0-9]+$/.test(value);
}

async function probeIdentifierExists(identifier: string) {
  try {
    await dnFetch("/auth/login", {
      method: "POST",
      body: JSON.stringify({ identifier, password: PROBE_PASSWORD }),
    });
    return true;
  } catch (error) {
    if (!(error instanceof DnApiError)) return null;
    if (isIdentifierOnlyError(error.message)) return false;
    if (isPasswordOnlyError(error.message) || isCombinedLoginError(error.message)) {
      return true;
    }
    return null;
  }
}

export async function resolveLoginError(identifier: string, originalDetail: string) {
  if (isIdentifierOnlyError(originalDetail)) {
    return LOGIN_ERROR_IDENTIFIER;
  }

  if (isPasswordOnlyError(originalDetail)) {
    return LOGIN_ERROR_PASSWORD;
  }

  if (isCombinedLoginError(originalDetail)) {
    const exists = await probeIdentifierExists(identifier);
    if (exists === false || !looksLikeValidIdentifier(identifier)) {
      return LOGIN_ERROR_IDENTIFIER;
    }
    if (exists === true) {
      return LOGIN_ERROR_PASSWORD;
    }

    return looksLikeValidIdentifier(identifier)
      ? LOGIN_ERROR_PASSWORD
      : LOGIN_ERROR_IDENTIFIER;
  }

  if (!looksLikeValidIdentifier(identifier)) {
    return LOGIN_ERROR_IDENTIFIER;
  }

  return originalDetail || "Não foi possível entrar.";
}
