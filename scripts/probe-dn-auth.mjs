// Probe dn.asapol.org auth response shape (no real credentials)
const r = await fetch("https://dn.asapol.org/api/v1/auth/login", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ identifier: "invalid", password: "invalid" }),
});
console.log("status", r.status);
console.log("headers", [...r.headers.entries()].filter(([k]) => k.includes("cookie") || k.includes("set")));
console.log("body", await r.text());

const me = await fetch("https://dn.asapol.org/api/v1/auth/me");
console.log("\n/me without auth:", me.status, await me.text());
