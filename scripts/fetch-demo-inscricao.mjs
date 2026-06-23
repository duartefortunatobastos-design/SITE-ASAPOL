const html = await fetch("https://demo.asapol.org/").then((r) => r.text());
const jsMatch = html.match(/assets\/index-[^"]+\.js/);
const js = await fetch(`https://demo.asapol.org/${jsMatch[0]}`).then((r) => r.text());

const i = js.indexOf("/inscricao");
console.log("First /inscricao at", i);
console.log(js.slice(Math.max(0, i - 500), i + 8000));
