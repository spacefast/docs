import { defineConfig } from "blume";

export default defineConfig({
  title: "Spacefast Docs",
  description: "Build and publish static sites with Spacefast.",
  content: {
    root: "content",
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
      openapi: false,
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
    rss: {
      enabled: true,
      types: ["changelog"],
    },
    sitemap: true,
    structuredData: true,
  },
  deployment: {
    base: "/docs",
    output: "static",
    site: "https://spacefast.com",
  },
});
