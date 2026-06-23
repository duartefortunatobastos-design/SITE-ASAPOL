const js = await (await fetch("https://demo.asapol.org/assets/index-BHNzmULL.js")).text();
const css = await (await fetch("https://demo.asapol.org/assets/index-D327rwSs.css")).text();

const terms = ["asapol-logo", "Tornar-me", "sócios ativos", "anos de luta", "autonomia", "dot-grid", "hero-section", "HeroSection"];
for (const term of terms) {
  let idx = 0;
  while ((idx = js.indexOf(term, idx)) >= 0) {
    console.log("\n===", term, "at", idx, "===\n", js.slice(Math.max(0, idx - 200), idx + 400));
    idx += term.length;
    break;
  }
}

// CSS snippets with 0b3d91
let cidx = 0;
let count = 0;
while ((cidx = css.indexOf("0b3d91", cidx)) >= 0 && count < 8) {
  console.log("\n=== css 0b3d91 ===\n", css.slice(Math.max(0, cidx - 80), cidx + 120));
  cidx += 6;
  count++;
}
