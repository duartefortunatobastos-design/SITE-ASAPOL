import http from "node:http";
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));

const html = await new Promise((resolve, reject) => {
  http.get("http://www.asapol.net/pt/testes", (res) => {
    let data = "";
    res.on("data", (c) => (data += c));
    res.on("end", () => resolve(data));
    res.on("error", reject);
  });
});

const regionNames = {
  NACIONAIS: "Nacionais",
  LISBOA: "Lisboa",
  "SETÚBAL": "Setúbal",
  SETUBAL: "Setúbal",
  ILHAS: "Ilhas",
  COIMBRA: "Coimbra",
  ALGARVE: "Algarve",
  PORTO: "Porto",
  OUTROS: "Outros",
};

const REGION_KEYS = new Set([
  "NACIONAIS",
  "LISBOA",
  "SETUBAL",
  "SETÚBAL",
  "ILHAS",
  "COIMBRA",
  "ALGARVE",
  "PORTO",
  "OUTROS",
]);

function encodeAsapolUrl(path) {
  if (!path.startsWith("/")) return path;
  return `https://www.asapol.net${path.split("/").map((part, i) => (i === 0 ? part : encodeURIComponent(part))).join("/")}`;
}

function formatName(raw) {
  return raw
    .replace(/\.pdf$/i, "")
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .split(" ")
    .map((word) => (/^[a-z]+$/.test(word) ? word.charAt(0).toUpperCase() + word.slice(1) : word))
    .join(" ");
}

const regions = [];
const parts = html.split(/<!--\s*([A-ZÁÉÍÓÚÃÊÇ\s]+)\s*-->/i);

for (let i = 1; i < parts.length; i += 2) {
  const key = parts[i].trim().toUpperCase().normalize("NFD").replace(/\p{M}/gu, "");
  if (!REGION_KEYS.has(key) && !REGION_KEYS.has(parts[i].trim().toUpperCase())) continue;

  const name = regionNames[key] ?? regionNames[parts[i].trim().toUpperCase()] ?? parts[i].trim();
  const section = parts[i + 1] ?? "";
  const protocols = [];
  const re = /<a href="([^"]+)"[^>]*><img src="([^"]+)"/g;
  let match;

  while ((match = re.exec(section)) !== null) {
    const pdfPath = match[1];
    if (!pdfPath.includes("/asapol/protocolos/pdf/")) continue;
    const logoPath = match[2];
    const file = decodeURIComponent(pdfPath.split("/").pop() ?? "Parceiro");
    protocols.push({
      name: formatName(file),
      pdf: encodeAsapolUrl(pdfPath),
      logo: encodeAsapolUrl(logoPath),
    });
  }

  if (protocols.length) regions.push({ id: key.toLowerCase().replace("ú", "u"), name, protocols });
}

writeFileSync(
  join(__dirname, "../src/lib/protocolos-data.json"),
  JSON.stringify(regions, null, 2),
  "utf8",
);
console.log(regions.map((r) => `${r.name}: ${r.protocols.length}`).join("\n"));
