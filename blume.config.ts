import { defineConfig } from "blume";

const deploymentBase = "/docs";

export default defineConfig({
  title: "Spacefast Docs",
  description: "Publish sites and build apps with Spacefast through the CLI, API, SDK, and MCP.",
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
      { label: "Agent setup", href: "/agents", icon: "bot" },
    ],
    repo: true,
    tabs: [
      { label: "Docs", path: "/", href: "/", icon: "book-open" },
      { label: "Reference", path: "/reference", icon: "braces" },
    ],
    sidebar: {
      display: "flat",
      items: [
        "/",
        "/getting-started/quickstart",
        {
          label: "Publishing",
          root: "/publishing",
          items: [
            "/publishing",
            "/publishing/anonymous",
            "/publishing/git",
            "/publishing/channels",
            "/publishing/rollback",
            {
              label: "Frameworks",
              root: "/publishing/frameworks/jekyll",
              items: [
                "/publishing/frameworks/jekyll",
                "/publishing/frameworks/astro",
                "/publishing/frameworks/vite",
                "/publishing/frameworks/nextjs",
              ],
            },
            {
              label: "Move from another host",
              root: "/publishing/migrate",
              items: [
                "/publishing/migrate",
                "/publishing/migrate/here-now",
                "/publishing/migrate/netlify",
                "/publishing/migrate/cloudflare-pages",
                "/publishing/migrate/github-pages",
                "/publishing/migrate/vercel",
              ],
            },
          ],
        },
        {
          label: "Agents",
          root: "/agents",
          items: ["/agents", "/agents/publishing", "/agents/mcp", "/agents/accounts"],
        },
        {
          label: "Spaces",
          root: "/spaces",
          items: [
            "/spaces",
            "/spaces/files",
            "/spaces/domains",
            "/spaces/access",
            "/spaces/comments",
            "/spaces/manage",
            {
              label: "Configure",
              root: "/spaces/settings",
              items: [
                "/spaces/settings",
                "/spaces/variables",
                "/spaces/customization",
                "/spaces/visitor-pages",
              ],
            },
            {
              label: "Monitor",
              root: "/spaces/traffic",
              items: ["/spaces/traffic", "/spaces/activity"],
            },
            {
              label: "Routing",
              root: "/spaces/redirects",
              items: ["/spaces/redirects", "/spaces/headers", "/spaces/proxy-routes"],
            },
            {
              label: "Connect and automate",
              root: "/spaces/webhooks",
              items: [
                "/spaces/webhooks",
                "/spaces/wordpress",
                "/spaces/tag-manager",
                "/spaces/image-acceleration",
              ],
            },
          ],
        },
        {
          label: "Apps",
          root: "/apps",
          items: ["/apps", "/apps/functions", "/apps/zero"],
        },
        {
          label: "Platforms",
          root: "/platforms",
          items: ["/platforms"],
        },
        {
          label: "Account & teams",
          root: "/account",
          items: [
            "/account",
            "/account/sign-in",
            "/account/security",
            "/account/teams",
            "/account/api-keys",
            "/account/billing",
          ],
        },
        {
          label: "Reference",
          root: "/reference",
          items: [
            "/reference",
            "/api",
            { label: "REST API reference", href: "/api/reference" },
            { label: "Platform API reference", href: "/platforms/api/reference" },
            "/cli",
            "/reference/sdk",
            "/reference/troubleshooting",
            "/errors",
            { label: "Changelog", href: "/changelog" },
            "/changelog/packages",
          ],
        },
      ],
    },
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
      { label: "Quickstart", href: "/getting-started/quickstart", icon: "rocket" },
      { label: "Spaces", href: "/spaces", icon: "box" },
      { label: "MCP", href: "/agents/mcp", icon: "bot" },
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
    output: "static",
    site: "https://spacefast.com",
    base: deploymentBase,
  },
});
