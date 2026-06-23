const html = await fetch("https://demo.asapol.org/").then((r) => r.text());
const jsMatch = html.match(/assets\/index-[^"]+\.js/);
const js = await fetch(`https://demo.asapol.org/${jsMatch[0]}`).then((r) => r.text());

const start = js.indexOf('const Ax="/api",zx=');
console.log(js.slice(start, start + 5500));
