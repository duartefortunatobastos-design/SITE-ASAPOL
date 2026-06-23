const js = await (await fetch("https://demo.asapol.org/assets/index-BHNzmULL.js")).text();
const css = await (await fetch("https://demo.asapol.org/assets/index-D327rwSs.css")).text();

for (const pat of [
  "0b3d91",
  "082c69",
  "c8102e",
  "emblem",
  "symbol",
  "Hero",
  "hero",
  "dot",
  "radial",
  "AsapolLogo",
  "logo",
  "min-h-",
]) {
  const inJs = js.includes(pat);
  const inCss = css.includes(pat);
  if (inJs || inCss) console.log(pat, "js:", inJs, "css:", inCss);
}

const bgClasses = [...css.matchAll(/bg-\[[^\]]+\]/g)].map((m) => m[0]);
console.log("bg classes", [...new Set(bgClasses)]);

const minH = [...css.matchAll(/min-h-\[[^\]]+\]/g)].map((m) => m[0]);
console.log("min-h", [...new Set(minH)]);

const dataUrls = [...js.matchAll(/data:image[^"'`\s]+/g)].map((m) => m[0].slice(0, 100));
console.log("data urls count", dataUrls.length);
for (const u of dataUrls.slice(0, 3)) console.log("data", u);

const pngIdx = js.indexOf("iVBOR");
console.log("png b64 at", pngIdx);

// extract snippet around emblem/logo references
for (const term of ["emblem", "AsapolLogo", "asapol-logo", "asapol-emblem"]) {
  const idx = js.indexOf(term);
  if (idx >= 0) console.log("\n---", term, "---\n", js.slice(Math.max(0, idx - 120), idx + 200));
}
