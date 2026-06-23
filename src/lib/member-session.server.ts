import { useSession } from "@tanstack/react-start/server";

const SESSION_PASSWORD =
  process.env.SESSION_SECRET ?? "asapol-dev-session-secret-32chars-min";

export type MemberSessionData = {
  dnCookie: string;
};

export function getMemberSession() {
  return useSession<MemberSessionData>({
    password: SESSION_PASSWORD,
    name: "asapol-member-session",
    cookie: {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
    },
  });
}

export async function readMemberCookie() {
  const session = await getMemberSession();
  return session.data.dnCookie ?? null;
}

export async function writeMemberCookie(dnCookie: string) {
  const session = await getMemberSession();
  await session.update({ dnCookie });
}

export async function clearMemberSession() {
  const session = await getMemberSession();
  await session.clear();
}
