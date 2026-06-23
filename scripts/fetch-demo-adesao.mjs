const html = await fetch("https://demo.asapol.org/").then((r) => r.text());
const jsMatch = html.match(/assets\/index-[^"]+\.js/);
if (!jsMatch) {
  console.log("No JS bundle found");
  process.exit(1);
}
const js = await fetch(`https://demo.asapol.org/${jsMatch[0]}`).then((r) => r.text());
const terms = [
  "Pedido",
  "Porque aderir",
  "Proposta de Incri",
  "Instru",
  "Torne-se",
  "Tornar-me",
  "ficha",
  "adesao",
  "quotiza",
  "Envio dos documentos",
  "Declaração de desistência",
];
for (const t of terms) {
  const i = js.indexOf(t);
  if (i >= 0) {
    console.log(`\n=== ${t} ===\n${js.slice(Math.max(0, i - 120), i + 350)}`);
  } else {
    console.log(`NOT FOUND: ${t}`);
  }
}
