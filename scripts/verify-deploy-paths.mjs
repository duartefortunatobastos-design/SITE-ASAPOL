/**
 * Verifica referências em HTML/CSS/JS do build e ficheiros estáticos.
 * Reporta 404 potenciais e referências a ficheiros inexistentes.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

function resolveClientDir() {
  const candidates = [
    path.join(root, "dist", "client"),
    path.join(root, "dist"),
    path.join(root, ".vercel", "output", "static"),
  ];
  for (const dir of candidates) {
    if (fs.existsSync(path.join(dir, "index.html"))) return dir;
  }
  return path.join(root, "dist", "client");
}

const clientDir = resolveClientDir();
const publicDir = path.join(root, "public");

const REF_PATTERN =
  /(?:href|src)=["'](\/(?!\/)(?:css|js|imagens|documentos|assets)[^"']+)["']/gi;

function walk(dir, files = []) {
  if (!fs.existsSync(dir)) return files;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, files);
    else files.push(full);
  }
  return files;
}

function resolvePublicPath(urlPath) {
  const decoded = decodeURIComponent(urlPath.split("?")[0].split("#")[0]);
  return path.join(publicDir, decoded.replace(/^\//, ""));
}

function resolveClientPath(urlPath) {
  const decoded = decodeURIComponent(urlPath.split("?")[0].split("#")[0]);
  return path.join(clientDir, decoded.replace(/^\//, ""));
}

function checkStaticSourcePaths() {
  const issues = [];
  const staticPaths = new Set();

  for (const file of walk(publicDir)) {
    const rel = "/" + path.relative(publicDir, file).replace(/\\/g, "/");
    staticPaths.add(rel);
  }

  const codeFiles = walk(path.join(root, "src")).filter((f) =>
    /\.(tsx?|json|css)$/.test(f),
  );

  const pathPattern = /["'](\/(?:imagens|documentos)[^"']+)["']/g;

  for (const file of codeFiles) {
    const content = fs.readFileSync(file, "utf8");
    let match;
    while ((match = pathPattern.exec(content)) !== null) {
      const url = match[1].split("?")[0];
      if (!staticPaths.has(url) && !staticPaths.has(decodeURIComponent(url))) {
        issues.push({ type: "missing-source", file: path.relative(root, file), url });
      }
    }
  }

  return issues;
}

function checkBuildOutput() {
  const issues = [];

  if (!fs.existsSync(clientDir)) {
    return [{ type: "no-build", message: "Output estático não existe — execute npm run build" }];
  }

  const htmlFiles = walk(clientDir).filter((f) => f.endsWith(".html"));

  for (const htmlFile of htmlFiles) {
    const content = fs.readFileSync(htmlFile, "utf8");
    let match;
    REF_PATTERN.lastIndex = 0;
    while ((match = REF_PATTERN.exec(content)) !== null) {
      const url = match[1];
      if (url.startsWith("/assets/")) {
        issues.push({
          type: "legacy-assets-path",
          file: path.relative(root, htmlFile),
          url,
        });
        continue;
      }

      const onDisk = resolveClientPath(url);
      const inPublic = resolvePublicPath(url);

      if (!fs.existsSync(onDisk) && !fs.existsSync(inPublic)) {
        issues.push({
          type: "404",
          file: path.relative(root, htmlFile),
          url,
        });
      }
    }
  }

  return issues;
}

function main() {
  const sourceIssues = checkStaticSourcePaths();
  const buildIssues = checkBuildOutput();
  const all = [...sourceIssues, ...buildIssues];

  if (all.length === 0) {
    console.log("[verify] OK — nenhum caminho quebrado encontrado.");
    return;
  }

  console.log(`[verify] ${all.length} problema(s) encontrado(s):\n`);
  for (const issue of all) {
    console.log(JSON.stringify(issue));
  }
  process.exit(1);
}

main();
