import { defineConfig } from "blume";

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
  description: "Publish sites and build apps with Spacefast through the CLI, API, SDK, and MCP.",
  logo: { href: "/", text: "Spacefast Docs" },
  // Site-wide announcement bar; enable with launch copy when there is news:
  // banner: "Spacefast is in early access.",
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
    sidebar: {
      display: "flat",
      items: [
        "/",
        {
          label: "Get started",
          root: "/start",
          items: ["/start", "/start/how-it-works"],
        },
        {
          label: "Publish",
          root: "/publish",
          items: [
            "/publish",
            "/publish/versions",
            "/publish/git",
            "/publish/remote",
            "/publish/anonymous",
            "/publish/variables",
          ],
        },
        {
          label: "Serve",
          root: "/serve/settings",
          items: [
            "/serve/settings",
            "/serve/redirects",
            "/serve/headers",
            "/serve/crons",
            "/serve/pages",
            "/serve/images",
          ],
        },
        {
          label: "Domains",
          root: "/domains",
          items: ["/domains", "/domains/dns", "/domains/registration"],
        },
        {
          label: "Share",
          root: "/share",
          items: ["/share", "/share/comments", "/share/verify"],
        },
        {
          label: "Primitives",
          root: "/zero-runtime",
          items: [
            "/zero-runtime",
            "/functions",
            "/functions/php",
            "/database",
            "/storage",
            "/services",
          ],
        },
        {
          label: "Agents",
          root: "/agents",
          items: ["/agents", "/agents/publishing", "/agents/mcp"],
        },
        {
          label: "Operate",
          root: "/operate/spaces",
          items: [
            "/operate/spaces",
            "/operate/monitoring",
            "/operate/webhooks",
          ],
        },
        {
          label: "Guides",
          root: "/guides/frameworks/nextjs",
          items: [
            {
              label: "Frameworks",
              root: "/guides/frameworks/nextjs",
              items: [
                "/guides/frameworks/nextjs",
                "/guides/frameworks/astro",
                "/guides/frameworks/vite",
                "/guides/frameworks/jekyll",
              ],
            },
            {
              label: "Move from another host",
              root: "/guides/migrate",
              items: [
                "/guides/migrate",
                "/guides/migrate/vercel",
                "/guides/migrate/netlify",
                "/guides/migrate/github-pages",
                "/guides/migrate/here-now",
              ],
            },
            {
              label: "Integrations",
              root: "/guides/wordpress",
              items: ["/guides/wordpress", "/guides/tag-manager"],
            },
          ],
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
            "/account/teams",
            "/account/api-keys",
            "/account/plans",
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
      { label: "Quickstart", href: "/start", icon: "rocket" },
      { label: "How publishing works", href: "/publish", icon: "upload" },
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
