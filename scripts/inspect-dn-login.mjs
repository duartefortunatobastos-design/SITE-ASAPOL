const html = await fetch("https://dn.asapol.org/").then((r) => r.text());
const jsMatch = html.match(/assets\/index-[^"]+\.js/);
const js = await fetch(`https://dn.asapol.org/${jsMatch[0]}`).then((r) => r.text());

for (const k of [
  "/api/",
  "login",
  "password",
  "member",
  "socio",
  "session",
  "Comunicados",
  "Bem-vindo",
  "Dados Pessoais",
  "matricula",
  "quota",
  "auth",
  "token",
  "credentials",
]) {
  let idx = 0;
  let count = 0;
  while (count < 2) {
    const i = js.indexOf(k, idx);
    if (i < 0) break;
    console.log(`\n=== ${k} @ ${i} ===`);
    console.log(js.slice(Math.max(0, i - 80), i + 400));
    idx = i + k.length;
    count++;
  }
}
