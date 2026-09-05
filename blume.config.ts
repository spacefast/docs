import { defineConfig } from "blume";

import { redirects } from "./redirects.ts";

const deploymentBase = "/docs";
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
  analytics: {
    posthog: {
      key: "phc_pnLfu3acyQJbpNz4YYdv4ULaXgafVtUrsZT8wHwijmQT",
    },
    scripts: [
      {
        src: "https://spacefast.com/cookie-banner.js",
        strategy: "defer",
      },
      {
        attributes: { type: "module" },
        content: `
          import("${deploymentBase}/pagefind/pagefind.js")
            .then(async (pagefind) => {
              await pagefind.options({
                indexWeight: 1.15,
                mergeFilter: { source: "Docs" },
              });
              await pagefind.mergeIndex("/pagefind", {
                indexWeight: 1,
                mergeFilter: { source: "Spacefast" },
              });
            })
            .catch(() => undefined);
        `,
      },
    ],
  },
  content: { root: "content" },
  export: true,
  github: {
    owner: "spacefast",
    repo: "docs",
    branch: "main",
  },
  lastModified: true,
  markdown: { imageZoom: true, code: { icons: true, wrap: false } },
  navigation: {
    featured: [
      { label: "Spacefast", href: "https://spacefast.com", icon: "house" },
      { label: "Agent setup", href: "/agents", icon: "bot" },
    ],
    repo: true,
    sidebar: { display: "flat" },
    tabs: [
      { label: "Docs", path: "/", icon: "book-open" },
      { label: "CLI", path: "/cli", icon: "terminal" },
      { label: "API", path: "/api", icon: "braces" },
      { label: "Agents", path: "/agents", icon: "bot" },
    ],
  },
  openapi: {
    enabled: true,
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
  },
  search: {
    provider: "pagefind",
    popular: [
      { label: "Quickstart", href: "/quickstart", icon: "rocket" },
      { label: "Publishing", href: "/publish", icon: "upload" },
      { label: "MCP server", href: "/agents/mcp-server", icon: "bot" },
      { label: "API reference", href: "/api/reference", icon: "braces" },
    ],
  },
  ai: {
    ask: {
      enabled: true,
      endpoint: "https://api.spacefast.com/v1/docs/ask",
      suggestions: [
        { label: "How do I publish a site?", icon: "upload" },
        { label: "How should an agent use Spacefast?", icon: "bot" },
        { label: "How do I roll back a version?", icon: "undo-2" },
      ],
    },
    llmsTxt: { enabled: true, openapi: true },
    mcp: { enabled: false },
  },
  seo: {
    agentReadability: true,
    og: { enabled: true },
    robots: true,
    sitemap: true,
    structuredData: true,
  },
  redirects,
  deployment: {
    output: "static",
    site: "https://spacefast.com",
    base: deploymentBase,
  },
});
