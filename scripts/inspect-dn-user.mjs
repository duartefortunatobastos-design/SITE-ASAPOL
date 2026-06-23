const html = await fetch("https://dn.asapol.org/").then((r) => r.text());
const jsMatch = html.match(/assets\/index-[^"]+\.js/);
const js = await fetch(`https://dn.asapol.org/${jsMatch[0]}`).then((r) => r.text());

const i = js.indexOf("/auth/me");
console.log(js.slice(i - 200, i + 800));

// user object usage after login
const j = js.indexOf("o(d),d)},v=async");
console.log(js.slice(j - 500, j + 300));
