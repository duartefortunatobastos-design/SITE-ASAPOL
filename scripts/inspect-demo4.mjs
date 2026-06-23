const css = await (await fetch("https://demo.asapol.org/assets/index-D327rwSs.css")).text();

for (const cls of [".btn-accent{", ".btn-on-dark{", ".ring-asapol{", ".from-brand{", ".to-brand-dark{"]) {
  const i = css.indexOf(cls);
  if (i >= 0) console.log(css.slice(i, i + 500), "\n---\n");
}
