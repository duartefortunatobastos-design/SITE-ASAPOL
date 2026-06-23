const html = await fetch("https://dn.asapol.org/").then((r) => r.text());
const jsMatch = html.match(/assets\/index-[^"]+\.js/);
const js = await fetch(`https://dn.asapol.org/${jsMatch[0]}`).then((r) => r.text());

for (const k of [
  "Dados Pessoais",
  "Bem-vindo",
  "aS",
  "function aS",
  "/members/me",
  "/member",
  "member_id",
  "Morada",
  "Matrícula",
  "Quota Mensal",
  "Envio de e-mail",
  "Os Seus",
  "personal",
  "profile",
]) {
  let idx = 0;
  let count = 0;
  while (count < 2) {
    const i = js.indexOf(k, idx);
    if (i < 0) break;
    console.log(`\n=== ${k} @ ${i} ===`);
    console.log(js.slice(Math.max(0, i - 60), i + 500));
    idx = i + k.length;
    count++;
  }
}
