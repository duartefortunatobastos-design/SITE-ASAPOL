// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { getGitHubPagesBase, isGitHubPagesBuild } from "./scripts/github-pages-base.mjs";

const isGitHubPages = isGitHubPagesBuild();
const GITHUB_PAGES_BASE = getGitHubPagesBase();

export default defineConfig({
  vite: {
    base: isGitHubPages ? GITHUB_PAGES_BASE : "/",
    define: {
      "import.meta.env.VITE_USE_HASH_ROUTER": JSON.stringify(isGitHubPages),
    },
    server: {
      open: true,
    },
  },
  nitro:
    process.env.VERCEL === "1"
      ? { preset: "vercel" }
      : false,
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    prerender: {
      enabled: true,
      crawlLinks: !isGitHubPages,
      autoSubfolderIndex: !isGitHubPages,
    },
  },
});
