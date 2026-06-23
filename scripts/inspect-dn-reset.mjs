const html = await fetch("https://dn.asapol.org/").then((r) => r.text());
const jsMatch = html.match(/assets\/index-[^"]+\.js/);
const js = await fetch(`https://dn.asapol.org/${jsMatch[0]}`).then((r) => r.text());

const i = js.indexOf("password-reset/request");
console.log(js.slice(i - 100, i + 600));

const j = js.indexOf("Nº de sócio");
console.log("\n--- n socio ---\n", js.includes("Nº de sócio") ? "found" : "not");
for (const needle of ["incorret", "incorrect", "password incorret", "sócio/email"]) {
  let idx = 0;
  while (true) {
    const pos = js.indexOf(needle, idx);
    if (pos < 0) break;
    console.log(needle, ":", js.slice(Math.max(0, pos - 40), pos + needle.length + 100));
    idx = pos + needle.length;
  }
}
