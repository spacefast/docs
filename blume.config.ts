import { defineConfig } from "blume";

export default defineConfig({
  title: "Spacefast Docs",
  description: "Build and publish static sites with Spacefast.",
  content: {
    root: "content",
  },
  navigation: {
    featured: [
      { label: "Spacefast", href: "https://spacefast.com", icon: "house" },
      {
        label: "Guides",
        href: "https://spacefast.com/guides",
        icon: "book-open",
      },
    ],
    repo: false,
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
      },
    ],
  },
  search: {
    provider: "pagefind",
  },
  ai: {
    ask: {
      enabled: false,
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
      enabled: false,
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
