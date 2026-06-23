const html = await fetch("https://dn.asapol.org/").then((r) => r.text());
const jsMatch = html.match(/assets\/index-[^"]+\.js/);
const js = await fetch(`https://dn.asapol.org/${jsMatch[0]}`).then((r) => r.text());

const i = js.indexOf("function J1");
console.log(js.slice(i, i + 5500));
