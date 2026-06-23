const html = await fetch("https://dn.asapol.org/").then((r) => r.text());
const jsMatch = html.match(/assets\/index-[^"]+\.js/);
const js = await fetch(`https://dn.asapol.org/${jsMatch[0]}`).then((r) => r.text());

for (const k of [
  "birth_date",
  "nif",
  "tax_id",
  "enlist",
  "command",
  "unit_name",
  "service_number",
  "email_opt",
  "monthly_fee",
  "quota_amount",
  "i.address",
  "i.nif",
  "i.birth",
  "i.command",
  "i.unit",
  "i.rank",
  "i.service",
  "full_name",
  "member_number",
]) {
  let count = 0;
  let idx = 0;
  while (count < 1) {
    const i = js.indexOf(k, idx);
    if (i < 0) break;
    if (k.startsWith("i.")) {
      console.log(`\n=== ${k} @ ${i} ===`);
      console.log(js.slice(Math.max(0, i - 120), i + 200));
    }
    idx = i + k.length;
    count++;
  }
}

// search legacy-like dashboard strings
for (const k of ["Os Seus", "Dados Pessoais", "Valor da Quota", "Envio de e-mail", "Associado n"]) {
  const i = js.indexOf(k);
  console.log(k, i >= 0 ? "FOUND" : "not found");
}
