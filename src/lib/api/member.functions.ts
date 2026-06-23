import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

import {
  DnApiError,
  dnGetAuthUser,
  dnGetMemberProfile,
  dnGetNews,
  dnLogin,
  dnLogout,
} from "../dn-api.server";
import type { MemberDashboard } from "../member";
import {
  clearMemberSession,
  readMemberCookie,
  writeMemberCookie,
} from "../member-session.server";
import { resolveLoginError } from "../member-login.server";

const loginSchema = z.object({
  identifier: z.string().trim().min(1, "Indique o número de sócio ou email."),
  password: z.string().min(1, "Indique a password."),
});

async function loadDashboard(cookie: string): Promise<MemberDashboard> {
  const [{ data: profile, cookie: cookieAfterProfile }, { data: authUser }] = await Promise.all([
    dnGetMemberProfile(cookie),
    dnGetAuthUser(cookie),
  ]);

  const activeCookie = cookieAfterProfile ?? cookie;

  const [{ data: comunicados }, { data: informacoes }] = await Promise.all([
    dnGetNews(activeCookie, "comunicado"),
    dnGetNews(activeCookie, "informacao"),
  ]);

  const monthlyQuota =
    profile.monthly_quota_eur ?? profile.quota_eur ?? null;

  return {
    welcomeName: profile.full_name || authUser.full_name || "Associado",
    profile,
    roleLabel: profile.board_role ?? authUser.staff_title ?? null,
    monthlyQuota,
    emailActive: profile.receive_emails !== false,
    comunicados: comunicados ?? [],
    informacoes: informacoes ?? [],
  };
}

export const loginMember = createServerFn({ method: "POST" })
  .validator(loginSchema)
  .handler(async ({ data }) => {
    try {
      const { data: loginResult, cookie } = await dnLogin(data.identifier, data.password);

      if (!cookie) {
        throw new Error("Não foi possível iniciar sessão. Tente novamente.");
      }

      if (loginResult && "first_access" in loginResult && loginResult.first_access) {
        throw new Error(
          "Primeiro acesso detetado. Defina a password em dn.asapol.org/recuperar antes de entrar aqui.",
        );
      }

      await writeMemberCookie(cookie);
      const dashboard = await loadDashboard(cookie);
      return { ok: true as const, dashboard };
    } catch (error) {
      if (error instanceof DnApiError) {
        throw new Error(await resolveLoginError(data.identifier, error.message));
      }
      throw error;
    }
  });

export const getMemberDashboard = createServerFn({ method: "GET" }).handler(async () => {
  const cookie = await readMemberCookie();
  if (!cookie) {
    throw new Error("Sessão expirada. Inicie sessão novamente.");
  }

  try {
    return await loadDashboard(cookie);
  } catch (error) {
    if (error instanceof DnApiError && error.status === 401) {
      await clearMemberSession();
      throw new Error("Sessão expirada. Inicie sessão novamente.");
    }
    if (error instanceof DnApiError) {
      throw new Error(error.message);
    }
    throw error;
  }
});

export const logoutMember = createServerFn({ method: "POST" }).handler(async () => {
  const cookie = await readMemberCookie();
  if (cookie) {
    try {
      await dnLogout(cookie);
    } catch {
      // ignore upstream logout errors
    }
  }
  await clearMemberSession();
  return { ok: true as const };
});
