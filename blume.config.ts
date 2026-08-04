import { defineConfig } from "blume";

export default defineConfig({
  title: "Spacefast Developers",
  description: "Build with Spacefast through the API, CLI, SDK, MCP, and Platform API.",
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
                mergeFilter: { source: "Developers" },
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
      { label: "Help", href: "https://spacefast.com/help", icon: "book-open" },
      { label: "Recipes", href: "https://spacefast.com/recipes", icon: "sparkles" },
      { label: "Agent setup", href: "https://spacefast.com/setup", icon: "bot" },
    ],
    repo: true,
    sidebar: {
      display: "group",
      items: [
        {
          label: "Overview",
          collapsed: false,
          items: ["/", "/quickstart"],
        },
        {
          label: "Features",
          items: [
            "/spaces",
            "/publishing",
            "/versions",
            "/builds",
            "/domains",
            "/access",
            "/collab",
          ],
        },
        {
          label: "Interfaces",
          items: ["/api", "/api/reference", "/cli", "/sdk", "/mcp", "/errors"],
        },
        {
          label: "Configure",
          items: [
            "/configuration",
            "/pages",
            "/redirects",
            "/headers",
            "/proxy-routes",
            "/webhooks",
          ],
        },
        {
          label: "Integrations",
          items: ["/integrations/vite", "/integrations/nextjs", "/image-acceleration"],
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
    tabs: [
      { label: "API reference", path: "/api/reference", icon: "braces" },
      { label: "Platforms", path: "/platforms", icon: "building" },
    ],
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
  deployment: { output: "static", site: "https://developers.spacefast.com" },
});
