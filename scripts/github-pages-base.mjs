/** Base path for GitHub Pages (e.g. /SITE-ASAPOL/). */
export function getGitHubPagesBase({ trailingSlash = true } = {}) {
  const fromEnv = process.env.GITHUB_PAGES_BASE?.trim();
  if (fromEnv) {
    const base = fromEnv.startsWith("/") ? fromEnv : `/${fromEnv}`;
    if (trailingSlash) return base.endsWith("/") ? base : `${base}/`;
    return base.replace(/\/$/, "");
  }

  const repo = process.env.GITHUB_REPOSITORY?.split("/")[1];
  if (repo) {
    return trailingSlash ? `/${repo}/` : `/${repo}`;
  }

  return trailingSlash ? "/SITE-ASAPOL/" : "/SITE-ASAPOL";
}

export function isGitHubPagesBuild() {
  return process.env.GITHUB_PAGES === "true";
}
