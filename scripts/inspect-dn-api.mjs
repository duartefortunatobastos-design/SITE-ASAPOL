const html = await fetch("https://dn.asapol.org/").then((r) => r.text());
const jsMatch = html.match(/assets\/index-[^"]+\.js/);
const js = await fetch(`https://dn.asapol.org/${jsMatch[0]}`).then((r) => r.text());

const markers = ["function $1", "function J1", "function wx", "Bem-vindo", "Os Seus Dados", "Quota Mensal", "/cartao", "/news", "ae.get(", "ae.post("];
for (const k of markers) {
  const i = js.indexOf(k);
  if (i >= 0) {
    console.log(`\n=== ${k} @ ${i} ===`);
    console.log(js.slice(i, i + 1200));
  }
}

// find all ae.get/post paths
const paths = new Set();
for (const m of js.matchAll(/ae\.(get|post)\("([^"]+)"/g)) paths.add(m[2]);
console.log("\n=== API paths ===");
[...paths].sort().forEach((p) => console.log(p));
