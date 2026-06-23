const html = await fetch("https://demo.asapol.org/").then((r) => r.text());
const jsMatch = html.match(/assets\/index-[^"]+\.js/);
const js = await fetch(`https://demo.asapol.org/${jsMatch[0]}`).then((r) => r.text());

for (const k of [
  "login",
  "password",
  "socio",
  "associados",
  "session",
  "/api/",
  "portal",
  "area",
  "Comunicados",
  "Bem-vindo",
  "wo=",
  "const wo",
  "Número de Sócio",
  "Iniciar Sess",
  "area-associado",
  "/api/auth",
  "member",
]) {
  let idx = 0;
  let count = 0;
  while (count < 3) {
    const i = js.indexOf(k, idx);
    if (i < 0) break;
    console.log(`\n=== ${k} @ ${i} ===`);
    console.log(js.slice(Math.max(0, i - 100), i + 300));
    idx = i + k.length;
    count++;
  }
}
