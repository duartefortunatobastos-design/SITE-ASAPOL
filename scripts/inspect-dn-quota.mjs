const html = await fetch("https://dn.asapol.org/").then((r) => r.text());
const jsMatch = html.match(/assets\/index-[^"]+\.js/);
const js = await fetch(`https://dn.asapol.org/${jsMatch[0]}`).then((r) => r.text());

for (const k of ["monthly", "quota_value", "quota_amount", "fee", "staff_title", "role_title", "board_role"]) {
  let idx = 0;
  let n = 0;
  while (n < 3) {
    const i = js.indexOf(k, idx);
    if (i < 0) break;
    console.log(`\n${k} @ ${i}:`, js.slice(i, i + 100));
    idx = i + k.length;
    n++;
  }
}
