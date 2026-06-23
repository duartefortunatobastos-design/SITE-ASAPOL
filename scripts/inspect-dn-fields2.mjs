const html = await fetch("https://dn.asapol.org/").then((r) => r.text());
const jsMatch = html.match(/assets\/index-[^"]+\.js/);
const js = await fetch(`https://dn.asapol.org/${jsMatch[0]}`).then((r) => r.text());

for (const k of [
  "nif",
  "birth_date",
  "enlistment",
  "command",
  "unit",
  "placement",
  "receive_emails",
  "monthly_quota",
  "quota_eur",
  "valor_quota",
  "role_label",
  "staff_role",
]) {
  const i = js.indexOf(k);
  if (i >= 0) {
    console.log(`\n${k}:`);
    console.log(js.slice(Math.max(0, i - 40), i + 120));
  }
}
