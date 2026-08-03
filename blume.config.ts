import { defineConfig } from "blume";

export default defineConfig({
  title: "Spacefast Docs",
  description:
    "Publish sites and build apps with Spacefast through the CLI, API, SDK, and MCP.",
  logo: { href: "/", text: "Spacefast Docs" },
  theme: {
    accent: { dark: "#ff7657", light: "#d93614" },
    background: { dark: "#111114", light: "#fbfaf7" },
    fonts: { body: "inter", display: "inter-tight", mono: "ibm-plex-mono" },
    mode: "system",
    radius: "sm",
  },
  analytics: {
    posthog: {
      key: "phc_pnLfu3acyQJbpNz4YYdv4ULaXgafVtUrsZT8wHwijmQT",
    },
    scripts: [
      {
        attributes: { type: "module" },
        content: `
          import("/pagefind/pagefind.js")
            .then(async (pagefind) => {
              await pagefind.options({
                indexWeight: 1.15,
                mergeFilter: { source: "Docs" },
              });
              await pagefind.mergeIndex("https://spacefast.com/pagefind", {
                indexWeight: 1,
                mergeFilter: { source: "Spacefast" },
              });
            })
            .catch(() => undefined);
        `,
      },
    ],
  },
  content: {
    root: "content",
  },
  export: true,
  github: {
    owner: "spacefast",
    repo: "docs",
    branch: "main",
  },
  lastModified: true,
  navigation: {
    featured: [
      { label: "Spacefast", href: "https://spacefast.com", icon: "house" },
      { label: "Agent setup", href: "https://spacefast.com/setup", icon: "bot" },
    ],
    repo: true,
    sidebar: {
      display: "group",
      items: [
        {
          label: "Start",
          collapsed: false,
          items: ["/", "/quickstart", "/agents", "/runtimes"],
        },
        {
          label: "Core",
          items: [
            "/spaces",
            "/spaces/rename",
            "/publishing",
            "/versions",
            "/builds",
            "/domains",
            "/access",
            "/collab",
          ],
        },
        {
          label: "Functions",
          items: ["/runtimes/functions"],
        },
        {
          label: "Zero",
          items: [
            "/runtimes/zero",
            "/runtimes/zero/capsule-api",
            "/runtimes/zero/authentication",
            "/runtimes/zero/database",
            "/runtimes/zero/storage",
          ],
        },
        {
          label: "Configure",
          items: [
            "/configuration",
            "/customization",
            "/pages",
            "/variables",
            "/traffic",
            "/mounts",
            "/redirects",
            "/headers",
            "/proxy-routes",
            "/webhooks",
          ],
        },
        {
          label: "Integrations",
          items: [
            "/integrations/tag-manager",
            "/integrations/wordpress",
            "/integrations/vite",
            "/integrations/nextjs",
            "/image-acceleration",
          ],
        },
        {
          label: "Interfaces",
          items: ["/api", "/api/reference", "/cli", "/sdk", "/mcp", "/errors"],
        },
        {
          label: "Migrate",
          items: [
            "/migrate-from",
            "/migrate-from/here-now",
            "/migrate-from/netlify",
            "/migrate-from/cloudflare-pages",
            "/migrate-from/github-pages",
            "/migrate-from/vercel",
          ],
        },
        {
          label: "Platforms",
          items: [
            "/platforms",
            "/platforms/authentication",
            "/platforms/customers",
            "/platforms/api/reference",
          ],
        },
        {
          label: "More",
          items: ["/anonymous-publish", "/rollback", "/limits", "/troubleshooting"],
        },
      ],
    },
    tabs: [],
  },
  openapi: {
    enabled: true,
    sources: [
      {
        label: "REST API",
        route: "/api/reference",
        spec: "./generated/openapi/api.json",
      },
      {
        label: "Platform API",
        route: "/platforms/api/reference",
        spec: "./generated/openapi/platform.json",
      },
    ],
  },
  search: {
    provider: "pagefind",
    popular: [
      { label: "Quickstart", href: "/quickstart", icon: "rocket" },
      { label: "Spaces", href: "/spaces", icon: "box" },
      { label: "MCP", href: "/mcp", icon: "bot" },
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
    llmsTxt: {
      enabled: true,
      openapi: true,
    },
    mcp: {
      enabled: false,
    },
  },
  seo: {
    agentReadability: true,
    og: {
      enabled: true,
    },
    robots: true,
    sitemap: true,
    structuredData: true,
  },
  deployment: { output: "static", site: "https://docs.spacefast.com" },
});
