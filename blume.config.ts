import { readFileSync } from "node:fs";

import { defineConfig } from "blume";
import { posthog, script } from "blume/analytics";
import { openapi } from "blume/reference";
import { pagefind } from "blume/search";

import { redirects } from "./redirects.ts";

const deploymentBase = "/docs";
// Agent guidance for llms.txt, kept as Markdown so Vale lints it with the pages.
const llmsDetails = readFileSync(new URL("./content/_llms-preamble.md", import.meta.url), "utf8")
  .replace(/^---\n[\s\S]*?\n---\n/u, "")
  .trim();
const haskoy = {
  name: "Haskoy",
  fallback: "sans" as const,
  variants: [
    {
      src: "./public/fonts/haskoy-latin-variable.woff2",
      weight: "100..900",
    },
  ],
};

export default defineConfig({
  title: "Spacefast Docs",
  description: "Publish and host the sites your agents build.",
  logo: { href: "/", text: "Spacefast Docs" },
  theme: {
    accent: { dark: "#ff7657", light: "#d93614" },
    background: { dark: "#111114", light: "#fbfaf7" },
    fonts: { body: haskoy, display: haskoy, mono: haskoy },
    mode: "system",
    radius: "sm",
  },
  analytics: [
    posthog({ key: "phc_pnLfu3acyQJbpNz4YYdv4ULaXgafVtUrsZT8wHwijmQT" }),
    script({ src: "https://spacefast.com/cookie-banner.js", strategy: "defer" }),
    script({
      attributes: { type: "module" },
      // Blume's search dialog prefixes the deployment base onto root-relative
      // result URLs, but Pagefind defaults baseUrl to the directory it was
      // loaded from (/docs/), which doubled the prefix. Keep Docs results
      // base-less and make Website results absolute so Blume leaves them alone.
      content: `
        import("${deploymentBase}/pagefind/pagefind.js")
          .then(async (pagefind) => {
            await pagefind.options({
              baseUrl: "/",
              indexWeight: 1.15,
              mergeFilter: { source: "Docs" },
            });
            await pagefind.mergeIndex("/pagefind", {
              baseUrl: \`\${window.location.origin}/\`,
              indexWeight: 1,
              mergeFilter: { source: "Spacefast" },
            });
          })
          .catch(() => undefined);
      `,
    }),
  ],
  content: { root: "content" },
  export: true,
  github: {
    owner: "spacefast",
    repo: "docs",
    branch: "main",
  },
  lastModified: "git",
  markdown: { externalLinks: true, imageZoom: true, code: { icons: true, wrap: false } },
  navigation: {
    cta: { href: "https://my.spacefast.com", label: "Dashboard" },
    featured: [
      { label: "Spacefast", href: "https://spacefast.com", icon: "house" },
      { label: "Agent setup", href: "/agents", icon: "bot" },
    ],
    repo: true,
    sidebar: { display: "group" },
    tabs: [
      { label: "Docs", path: "/", icon: "book-open" },
      { label: "CLI", path: "/cli", icon: "terminal" },
      { label: "API", path: "/api", icon: "braces" },
      { label: "Agents", path: "/agents", icon: "bot" },
      { label: "Platforms", path: "/platforms", icon: "handshake" },
    ],
  },
  reference: [
    openapi({
      codeSamples: ["curl", "js", "python"],
      sources: [
        {
          label: "REST API",
          route: "/api/reference",
          spec: "./generated/openapi/api.json",
        },
        {
          label: "Partner API",
          route: "/platforms/api/reference",
          spec: "./generated/openapi/partner.json",
        },
      ],
    }),
  ],
  search: {
    provider: pagefind(),
    popular: [
      { label: "Quickstart", href: "/quickstart", icon: "rocket" },
      { label: "Publishing", href: "/publish", icon: "upload" },
      { label: "MCP server", href: "/agents/mcp-server", icon: "bot" },
      { label: "API reference", href: "/api/reference", icon: "braces" },
    ],
  },
  ai: {
    assistant: {
      enabled: true,
      endpoint: "https://api.spacefast.com/v1/docs/ask",
      suggestions: [
        { label: "How do I publish a site?", icon: "upload" },
        { label: "How should an agent use Spacefast?", icon: "bot" },
        { label: "How do I roll back a version?", icon: "undo-2" },
      ],
    },
  },
  agents: {
    llmsTxt: { details: llmsDetails },
  },
  redirects,
  deployment: {
    site: "https://spacefast.com",
    base: deploymentBase,
  },
});
