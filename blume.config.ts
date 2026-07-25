import { defineConfig } from "blume";

export default defineConfig({
  title: "Spacefast Docs",
  description: "Build and publish static sites with Spacefast.",
  analytics: {
    posthog: {
      key: "phc_pnLfu3acyQJbpNz4YYdv4ULaXgafVtUrsZT8wHwijmQT",
    },
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
      {
        label: "Guides",
        href: "https://spacefast.com/guides",
        icon: "book-open",
      },
    ],
    repo: true,
    sidebar: {
      display: "group",
      items: [
        {
          label: "Start",
          collapsed: false,
          items: [
            "/",
            "/quickstart",
            "/agents",
            "/cli",
            "/api",
            "/api/reference",
            "/errors",
          ],
        },
        {
          label: "Spaces",
          items: [
            "/publishing",
            "/builds",
            "/anonymous-publish",
            "/configuration",
            "/pages",
            "/access",
            "/collab",
          ],
        },
        {
          label: "Integrations",
          items: [
            "/integrations/vite",
            "/integrations/nextjs",
            "/image-acceleration",
          ],
        },
        {
          label: "Routing",
          items: ["/redirects", "/headers", "/proxy-routes", "/domains"],
        },
        {
          label: "Operate",
          items: [
            "/rollback",
            "/webhooks",
            "/limits",
            "/troubleshooting",
          ],
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
          items: ["/platforms", "/platforms/api/reference"],
        },
      ],
    },
    tabs: [
      { label: "API reference", path: "/api/reference", icon: "braces" },
      {
        label: "Platform API",
        path: "/platforms/api/reference",
        icon: "building",
      },
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
        includeInLlms: false,
        includeInSearch: false,
        noindex: true,
      },
    ],
  },
  search: {
    provider: "pagefind",
    popular: [
      { label: "Quickstart", href: "/quickstart", icon: "rocket" },
      { label: "Agents", href: "/agents", icon: "bot" },
      { label: "Publishing", href: "/publishing", icon: "upload" },
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
  deployment: {
    base: "/docs",
    output: "static",
    site: "https://spacefast.com",
  },
});
