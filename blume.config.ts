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
      { label: "Agent setup", href: "https://spacefast.com/setup", icon: "bot" },
    ],
    repo: true,
    sidebar: {
      display: "page",
      items: [
        "/",
        {
          label: "Get started",
          root: "/getting-started/quickstart",
          items: [
            "/getting-started/quickstart",
            "/getting-started/agents",
            "/getting-started/browser-terminal",
          ],
        },
        {
          label: "Publishing",
          root: "/publishing",
          items: [
            "/publishing",
            "/publishing/anonymous",
            "/publishing/push-new",
            "/publishing/git",
            "/publishing/versions",
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
          label: "Spaces",
          root: "/spaces",
          items: [
            "/spaces",
            "/spaces/files",
            "/spaces/access",
            "/spaces/comments",
            "/spaces/domains",
            "/spaces/settings",
            "/spaces/apply",
            "/spaces/variables",
            "/spaces/customization",
            "/spaces/visitor-pages",
            "/spaces/traffic",
            "/spaces/progress",
            "/spaces/activity",
            "/spaces/rename",
            "/spaces/move-copy",
            {
              label: "Routing",
              root: "/spaces/redirects",
              items: [
                "/spaces/redirects",
                "/spaces/headers",
                "/spaces/proxy-routes",
                "/spaces/mounts",
              ],
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
          items: [
            "/apps",
            "/apps/functions",
            "/apps/zero",
            "/apps/zero/capsule",
            "/apps/zero/authentication",
            "/apps/zero/database",
            "/apps/zero/storage",
          ],
        },
        {
          label: "Account & teams",
          root: "/account",
          items: [
            "/account",
            "/account/sign-in",
            "/account/security",
            "/account/notifications",
            "/account/connections",
            "/account/teams",
            "/account/api-keys",
            "/account/billing",
            "/account/limits",
          ],
        },
        {
          label: "Platforms",
          root: "/platforms",
          items: [
            "/platforms",
            "/platforms/authentication",
            "/platforms/customers",
            "/platforms/api/reference",
          ],
        },
        {
          label: "Reference",
          root: "/reference",
          items: [
            "/reference",
            "/api",
            "/api/reference",
            "/cli",
            "/reference/sdk",
            "/reference/mcp",
            "/reference/profiles",
            "/reference/troubleshooting",
            "/errors",
            "/changelog",
            "/changelog/packages",
          ],
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
      { label: "Quickstart", href: "/getting-started/quickstart", icon: "rocket" },
      { label: "Spaces", href: "/spaces", icon: "box" },
      { label: "MCP", href: "/reference/mcp", icon: "bot" },
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
    site: "https://docs.spacefast.com",
    base: deploymentBase,
  },
});
