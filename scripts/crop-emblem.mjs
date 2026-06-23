import sharp from "sharp";

const src = "public/imagens/site/asapol-logo.png";
const meta = await sharp(src).metadata();
const size = Math.min(meta.width, meta.height);
const inner = Math.round(size * 0.58);
const left = Math.round((meta.width - inner) / 2);
const top = Math.round((meta.height - inner) / 2);
const radius = inner / 2;
const circle = Buffer.from(
  `<svg width="${inner}" height="${inner}"><circle cx="${radius}" cy="${radius}" r="${radius}" fill="white"/></svg>`,
);

await sharp(src)
  .extract({ left, top, width: inner, height: inner })
  .composite([{ input: circle, blend: "dest-in" }])
  .png()
  .toFile("public/imagens/site/asapol-emblem.png");

console.log("Created asapol-emblem.png", { inner, left, top });
