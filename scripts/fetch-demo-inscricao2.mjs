const html = await fetch("https://demo.asapol.org/").then((r) => r.text());
const jsMatch = html.match(/assets\/index-[^"]+\.js/);
const js = await fetch(`https://demo.asapol.org/${jsMatch[0]}`).then((r) => r.text());

const markers = [
  "path:\"/inscricao\"",
  "Inscrição",
  "inscricao",
  "Nome completo",
  "Número de polícia",
  "Número de Polícia",
  "Patente",
  "Distrito",
  "candidatura",
  "Pedido recebido",
  "btn-accent",
];

for (const m of markers) {
  let idx = 0;
  let count = 0;
  while ((idx = js.indexOf(m, idx)) >= 0 && count < 3) {
    console.log(`\n=== ${m} @ ${idx} ===`);
    console.log(js.slice(Math.max(0, idx - 100), idx + 600));
    idx += m.length;
    count++;
  }
  if (count === 0) console.log(`NOT FOUND: ${m}`);
}
