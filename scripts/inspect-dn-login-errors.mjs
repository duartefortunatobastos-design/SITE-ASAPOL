const html = await fetch("https://dn.asapol.org/").then((r) => r.text());
const jsMatch = html.match(/assets\/index-[^"]+\.js/);
const js = await fetch(`https://dn.asapol.org/${jsMatch[0]}`).then((r) => r.text());

for (const k of [
  "incorret",
  "password",
  "identifier",
  "sócio",
  "socio",
  "auth/login",
  "first_access",
]) {
  let idx = 0;
  let n = 0;
  while (n < 5) {
    const i = js.indexOf(k, idx);
    if (i < 0) break;
    const slice = js.slice(Math.max(0, i - 30), i + 120);
    if (/incorret|password|identifier|login/i.test(slice)) {
      console.log(slice.replace(/\n/g, " "));
    }
    idx = i + k.length;
    n++;
  }
}
