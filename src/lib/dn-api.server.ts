const DEFAULT_DN_API_BASE = "https://dn.asapol.org/api/v1";

export function getDnApiBase() {
  return process.env.DN_API_BASE_URL ?? DEFAULT_DN_API_BASE;
}

export class DnApiError extends Error {
  status: number;

  constructor(status: number, message: string) {
    super(message);
    this.status = status;
  }
}

function extractCookieHeader(response: Response) {
  const setCookies =
    typeof response.headers.getSetCookie === "function"
      ? response.headers.getSetCookie()
      : [];

  if (setCookies.length > 0) {
    return setCookies.map((entry) => entry.split(";")[0] ?? entry).join("; ");
  }

  const single = response.headers.get("set-cookie");
  if (!single) return "";
  return single.split(",").map((entry) => entry.split(";")[0]?.trim() ?? entry).join("; ");
}

export async function dnFetch<T>(
  path: string,
  options: RequestInit & { cookie?: string } = {},
): Promise<{ data: T; cookie?: string }> {
  const { cookie, ...init } = options;
  const headers = new Headers(init.headers);

  if (cookie) headers.set("Cookie", cookie);
  if (init.body && !headers.has("Content-Type") && !(init.body instanceof FormData)) {
    headers.set("Content-Type", "application/json");
  }

  const response = await fetch(`${getDnApiBase()}${path}`, {
    ...init,
    headers,
  });

  const nextCookie = extractCookieHeader(response) || cookie;

  if (!response.ok) {
    let detail = response.statusText;
    try {
      const payload = (await response.json()) as { detail?: string };
      if (payload.detail) detail = payload.detail;
    } catch {
      // ignore
    }
    throw new DnApiError(response.status, detail);
  }

  if (response.status === 204) {
    return { data: undefined as T, cookie: nextCookie };
  }

  const data = (await response.json()) as T;
  return { data, cookie: nextCookie };
}

export async function dnLogin(identifier: string, password: string) {
  return dnFetch<DnAuthUser | { first_access: true }>("/auth/login", {
    method: "POST",
    body: JSON.stringify({ identifier, password }),
  });
}

export async function dnLogout(cookie: string) {
  return dnFetch<void>("/auth/logout", { method: "POST", cookie });
}

export type DnAuthUser = {
  id: number;
  email?: string | null;
  role?: string | null;
  full_name?: string | null;
  member_id?: number | null;
  staff_title?: string | null;
  first_access?: boolean;
};

export type DnMemberProfile = {
  full_name: string;
  member_number: number | string;
  service_number?: string | null;
  rank?: string | null;
  unit?: string | null;
  organ?: string | null;
  nif?: string | null;
  birth_date?: string | null;
  enlistment_date?: string | null;
  email?: string | null;
  phone?: string | null;
  address?: string | null;
  postal_code?: string | null;
  locality?: string | null;
  receive_emails?: boolean;
  monthly_quota_eur?: number | null;
  quota_eur?: number | null;
  board_role?: string | null;
};

export type DnNewsItem = {
  id: number;
  title: string;
  body: string;
  category: "comunicado" | "informacao";
  published_at?: string | null;
  created_at?: string | null;
};

export async function dnGetMemberProfile(cookie: string) {
  return dnFetch<DnMemberProfile>("/me", { cookie });
}

export async function dnGetAuthUser(cookie: string) {
  return dnFetch<DnAuthUser>("/auth/me", { cookie });
}

export async function dnGetNews(cookie: string, category: "comunicado" | "informacao") {
  return dnFetch<DnNewsItem[]>(`/news?category=${category}`, { cookie });
}
