/**
 * Pós-build: reorganiza dist/client para deploy (GitHub Pages / Vercel estático)
 * e copia index.html + pastas css/, js/, imagens/ para a raiz do projeto.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { getGitHubPagesBase, isGitHubPagesBuild } from "./github-pages-base.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const BASE = isGitHubPagesBuild() ? getGitHubPagesBase() : "/";

function resolveClientDir() {
  const distClient = path.join(root, "dist", "client");
  if (fs.existsSync(path.join(distClient, "index.html"))) {
    return distClient;
  }

  if (process.env.GITHUB_PAGES === "true") {
    return distClient;
  }

  const candidates = [
    path.join(root, "dist"),
    path.join(root, ".vercel", "output", "static"),
  ];
  for (const dir of candidates) {
    if (fs.existsSync(path.join(dir, "index.html"))) return dir;
  }
  return distClient;
}

const clientDir = resolveClientDir();

function withBase(urlPath) {
  if (!urlPath.startsWith("/")) return urlPath;
  if (BASE === "/") return urlPath;
  return `${BASE.replace(/\/$/, "")}${urlPath}`;
}

function walk(dir, files = []) {
  if (!fs.existsSync(dir)) return files;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, files);
    else files.push(full);
  }
  return files;
}

function classifyAsset(filename) {
  if (/\.css$/i.test(filename)) return "css";
  if (/\.(png|jpe?g|gif|svg|webp|ico|avif)$/i.test(filename)) return "imagens";
  if (/\.js$/i.test(filename)) return "js";
  return null;
}

function moveAssetsFolder() {
  const assetsDir = path.join(clientDir, "assets");
  if (!fs.existsSync(assetsDir)) return;

  for (const file of fs.readdirSync(assetsDir)) {
    const kind = classifyAsset(file);
    if (!kind) continue;

    const targetDir = path.join(clientDir, kind);
    fs.mkdirSync(targetDir, { recursive: true });
    fs.renameSync(path.join(assetsDir, file), path.join(targetDir, file));
  }

  if (fs.readdirSync(assetsDir).length === 0) {
    fs.rmdirSync(assetsDir);
  }
}

function rewriteAssetPath(pathWithAssetsPrefix, targetFolder) {
  const file = pathWithAssetsPrefix.replace(/^.*\/assets\//, "");
  return withBase(`/${targetFolder}/${file}`);
}

function rewriteHashLinks(html) {
  if (BASE === "/") return html;

  const baseNoSlash = BASE.replace(/\/$/, "");
  const esc = baseNoSlash.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const assetPrefixes = new Set(["css", "js", "imagens", "documentos"]);

  const toHashHref = (pathPart) => {
    const normalized = pathPart.startsWith("/") ? pathPart : `/${pathPart}`;
    if (normalized === "/" || normalized === "") return "#/";
    const firstSeg = normalized.replace(/^\//, "").split("/")[0];
    if (assetPrefixes.has(firstSeg)) return null;
    return `#${normalized}`;
  };

  return html.replace(
    new RegExp(`href=(["'])${esc}([^"']*)\\1`, "g"),
    (match, quote, rest) => {
      const hashHref = toHashHref(rest === "" ? "/" : `/${rest.replace(/^\//, "")}`);
      return hashHref ? `href=${quote}${hashHref}${quote}` : match;
    },
  );
}

function rewriteHtmlPaths(htmlPath) {
  let html = fs.readFileSync(htmlPath, "utf8");
  const before = html;

  const basePattern =
    BASE === "/"
      ? ""
      : BASE.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/\/$/, "");

  const assetPrefix = basePattern ? `${basePattern}/assets/` : "/assets/";

  html = html.replace(new RegExp(`${assetPrefix}([^"'\\s>]+\\.css)`, "g"), (_, file) =>
    rewriteAssetPath(`/assets/${file}`, "css"),
  );
  html = html.replace(new RegExp(`${assetPrefix}([^"'\\s>]+\\.js)`, "g"), (_, file) =>
    rewriteAssetPath(`/assets/${file}`, "js"),
  );
  html = html.replace(
    new RegExp(`${assetPrefix}([^"'\\s>]+\\.(?:png|jpe?g|gif|svg|webp|ico|avif))`, "gi"),
    (_, file) => rewriteAssetPath(`/assets/${file}`, "imagens"),
  );

  // Corrigir caminhos absolutos sem base (builds antigos)
  if (BASE !== "/") {
    html = html.replace(/(href|src)=["']\/(css|js|imagens)\//g, `$1="${BASE}$2/`);
    html = rewriteHashLinks(html);
  }

  if (html !== before) {
    fs.writeFileSync(htmlPath, html, "utf8");
  }
}

function rewriteAllHtml() {
  for (const file of walk(clientDir)) {
    if (file.endsWith(".html")) rewriteHtmlPaths(file);
  }
}

function copyToRoot() {
  const deployDirs = ["css", "js", "imagens", "documentos"];
  const deployFiles = ["index.html"];

  for (const dir of deployDirs) {
    const src = path.join(clientDir, dir);
    const dest = path.join(root, dir);
    if (!fs.existsSync(src)) continue;
    fs.rmSync(dest, { recursive: true, force: true });
    fs.cpSync(src, dest, { recursive: true });
  }

  for (const file of deployFiles) {
    const src = path.join(clientDir, file);
    const dest = path.join(root, file);
    if (fs.existsSync(src)) {
      fs.copyFileSync(src, dest);
    }
  }

  for (const entry of fs.readdirSync(clientDir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    if (["css", "js", "imagens", "documentos", "assets"].includes(entry.name)) continue;

    const src = path.join(clientDir, entry.name);
    const dest = path.join(root, entry.name);
    fs.rmSync(dest, { recursive: true, force: true });
    fs.cpSync(src, dest, { recursive: true });
  }
}

function main() {
  if (!fs.existsSync(clientDir)) {
    console.error(
      "[deploy] Output estático não encontrado (.vercel/output/static ou dist/client). Execute npm run build primeiro.",
    );
    process.exit(1);
  }

  moveAssetsFolder();
  rewriteAllHtml();
  copyToRoot();

  const distClient = path.join(root, "dist", "client");
  if (clientDir !== distClient && fs.existsSync(clientDir)) {
    fs.mkdirSync(path.dirname(distClient), { recursive: true });
    fs.rmSync(distClient, { recursive: true, force: true });
    fs.cpSync(clientDir, distClient, { recursive: true });
  }

  console.log(
    `[deploy] Estrutura pronta em ${path.relative(root, clientDir)} (base: ${BASE}).`,
  );
}

main();
