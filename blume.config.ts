import { readFileSync } from "node:fs";

import { defineConfig } from "blume";
import { componentSlug } from "blume/components/slug.ts";
import { extractOperations } from "blume/openapi/model.ts";

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

/**
 * Sidebar groups for one OpenAPI spec: a collapsible group per tag, holding
 * that tag's operation pages in spec order.
 *
 * Blume generates those pages and their routes from the spec, so the sidebar
 * reads the same spec through Blume's own extractor rather than a hand-kept
 * list that drifts every time an endpoint lands.
 */
const referenceGroups = (spec: string, route: string) => {
  const { operations, tags } = extractOperations(
    JSON.parse(readFileSync(spec, "utf8")),
    route
  );
  return tags.map((tag) => ({
    collapsed: true,
    display: "group" as const,
    items: operations
      .filter((operation) => operation.tagSlug === tag.slug)
      .map((operation) => operation.route),
    label: tag.name,
  }));
};

/**
 * Sidebar entries for the CLI: one group per top-level command, holding that
 * command's subcommands.
 *
 * The CLI reference is a single generated page with a heading per command, so
 * the entries link to heading anchors and are read back out of that page —
 * a command that ships is in the sidebar without anyone editing this file.
 * Anchors are slugged the way Blume slugs headings, so they always agree.
 */
const cliCommands = () => {
  let page: string;
  try {
    page = readFileSync("./content/cli/index.md", "utf8");
  } catch {
    // The page is an ignored build overlay, so a bare `blume` run without the
    // prepare step would otherwise fail here as a bare ENOENT.
    throw new Error(
      "content/cli/index.md is missing. Run scripts/prepare-generated.mjs before Blume; the CLI sidebar is built from that page."
    );
  }
  const commands = [...page.matchAll(/^## `sf ([^`]+)`$/gmu)].map((heading) => ({
    href: `/cli#${componentSlug(`sf ${heading[1]}`)}`,
    // Argument placeholders (`BUILD`, `[PATH]`) name the call, not the
    // command, so they are dropped from the label and the grouping.
    words: heading[1].split(/\s+/u).filter((word) => !/^[A-Z[]/u.test(word)),
  }));

  const groups = new Map<string, typeof commands>();
  for (const command of commands) {
    const name = command.words[0];
    groups.set(name, [...(groups.get(name) ?? []), command]);
  }

  return [...groups].map(([name, entries]) => {
    const [first] = entries;
    if (entries.length === 1) {
      return { href: first.href, label: `sf ${first.words.join(" ")}` };
    }
    return {
      collapsed: true,
      display: "group" as const,
      items: entries.map((entry) => ({
        href: entry.href,
        label:
          entry.words.length === 1 ? "Overview" : entry.words.slice(1).join(" "),
      })),
      label: `sf ${name}`,
    };
  });
};

const restReference = referenceGroups(
  "./generated/openapi/api.json",
  "/api/reference"
);
const platformReference = referenceGroups(
  "./generated/openapi/platform.json",
  "/platforms/api/reference"
);

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
    // Header sections. A tab's `path` is a URL prefix, and the sidebar group
    // rooted at that prefix is the section it scopes to — so reading the CLI
    // reference shows CLI navigation, not the whole site. The `/` tab spans
    // everything the others don't claim.
    tabs: [
      { label: "Platform", path: "/" },
      { label: "Zero", path: "/zero-runtime" },
      { label: "CLI", path: "/cli" },
      { label: "API", path: "/api" },
      { label: "Platform API", path: "/platforms" },
    ],
    sidebar: {
      display: "flat",
      items: [
        "/",
        {
          label: "Get started",
          root: "/start",
          items: ["/start", "/start/how-it-works", "/start/glossary"],
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
          root: "/functions",
          items: [
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
                "/guides/migrate/cloudflare-pages",
                "/guides/migrate/github-pages",
                "/guides/migrate/here-now",
              ],
            },
            {
              label: "Integrations",
              root: "/guides/wordpress",
              items: ["/guides/wordpress", "/guides/tag-manager"],
            },
            "/guides/local-development",
          ],
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
            "/reference/sdk",
            "/errors",
            { label: "Changelog", href: "/changelog" },
            "/changelog/packages",
          ],
        },
        // Header-tab sections. Each is rooted at the matching tab's path, which
        // is what scopes the sidebar to it.
        {
          label: "Zero",
          root: "/zero-runtime",
          items: [
            "/zero-runtime",
            "/zero-runtime/build",
            "/zero-runtime/client",
            "/zero-runtime/server",
            "/zero-runtime/endpoints",
            "/zero-runtime/authentication",
            "/zero-runtime/styling",
            "/zero-runtime/components",
            "/zero-runtime/commands",
            "/zero-runtime/managed-content",
            "/zero-runtime/move-from-lakebed",
          ],
        },
        {
          label: "CLI",
          root: "/cli",
          items: ["/cli", ...cliCommands()],
        },
        {
          label: "API",
          root: "/api",
          items: [
            "/api",
            "/api/versioning",
            { label: "All endpoints", href: "/api/reference" },
            ...restReference,
          ],
        },
        {
          label: "Platform API",
          root: "/platforms",
          items: [
            "/platforms",
            { label: "All endpoints", href: "/platforms/api/reference" },
            ...platformReference,
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
