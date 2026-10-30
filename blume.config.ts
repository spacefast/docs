import { readFileSync } from "node:fs";

import { defineConfig } from "blume";
import { posthog, script } from "blume/analytics";
import { openapi } from "blume/reference";
import { pagefind } from "blume/search";

import { redirects } from "./redirects.ts";

const deploymentBase = "/docs";
// Agent guidance for llms.txt, kept as Markdown so Vale lints it with the pages.
const llmsDetails = readFileSync(new URL("./content/_llms-preamble.md", import.meta.url), "utf8")
  .replace(/^---\n[\s\S]*?\n---\n/u, "")
  .trim();
// The brand's two faces, self-hosted from Fontsource like the Website and the
// dashboard: Strichpunkt Sans for every word, Intel One Mono for code.
const strichpunkt = {
  name: "Strichpunkt Sans",
  provider: "fontsource" as const,
  weights: ["400..900"],
  subsets: ["latin", "latin-ext"],
};
const intelOneMono = {
  name: "Intel One Mono",
  provider: "fontsource" as const,
  weights: [400, 500],
  subsets: ["latin", "latin-ext"],
};
// Phosphor (regular) glyphs, the brand's icon set. Blume renders an inline SVG
// icon as given, so the header and search use the same glyphs as the Website.
const phosphor = (path: string) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="${path}"/></svg>`;
const icons = {
  book: phosphor(
    "M232,48H160a40,40,0,0,0-32,16A40,40,0,0,0,96,48H24a8,8,0,0,0-8,8V200a8,8,0,0,0,8,8H96a24,24,0,0,1,24,24,8,8,0,0,0,16,0,24,24,0,0,1,24-24h72a8,8,0,0,0,8-8V56A8,8,0,0,0,232,48ZM96,192H32V64H96a24,24,0,0,1,24,24V200A39.81,39.81,0,0,0,96,192Zm128,0H160a39.81,39.81,0,0,0-24,8V88a24,24,0,0,1,24-24h64Z",
  ),
  terminal: phosphor(
    "M128,128a8,8,0,0,1-3,6.25l-40,32a8,8,0,1,1-10-12.5L107.19,128,75,102.25a8,8,0,1,1,10-12.5l40,32A8,8,0,0,1,128,128Zm48,24H136a8,8,0,0,0,0,16h40a8,8,0,0,0,0-16Zm56-96V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56ZM216,200V56H40V200H216Z",
  ),
  braces: phosphor(
    "M43.18,128a29.78,29.78,0,0,1,8,10.26c4.8,9.9,4.8,22,4.8,33.74,0,24.31,1,36,24,36a8,8,0,0,1,0,16c-17.48,0-29.32-6.14-35.2-18.26-4.8-9.9-4.8-22-4.8-33.74,0-24.31-1-36-24-36a8,8,0,0,1,0-16c23,0,24-11.69,24-36,0-11.72,0-23.84,4.8-33.74C50.68,38.14,62.52,32,80,32a8,8,0,0,1,0,16C57,48,56,59.69,56,84c0,11.72,0,23.84-4.8,33.74A29.78,29.78,0,0,1,43.18,128ZM240,120c-23,0-24-11.69-24-36,0-11.72,0-23.84-4.8-33.74C205.32,38.14,193.48,32,176,32a8,8,0,0,0,0,16c23,0,24,11.69,24,36,0,11.72,0,23.84,4.8,33.74a29.78,29.78,0,0,0,8,10.26,29.78,29.78,0,0,0-8,10.26c-4.8,9.9-4.8,22-4.8,33.74,0,24.31-1,36-24,36a8,8,0,0,0,0,16c17.48,0,29.32-6.14,35.2-18.26,4.8-9.9,4.8-22,4.8-33.74,0-24.31,1-36,24-36a8,8,0,0,0,0-16Z",
  ),
  robot: phosphor(
    "M200,48H136V16a8,8,0,0,0-16,0V48H56A32,32,0,0,0,24,80V192a32,32,0,0,0,32,32H200a32,32,0,0,0,32-32V80A32,32,0,0,0,200,48Zm16,144a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V80A16,16,0,0,1,56,64H200a16,16,0,0,1,16,16Zm-52-56H92a28,28,0,0,0,0,56h72a28,28,0,0,0,0-56Zm-24,16v24H116V152ZM80,164a12,12,0,0,1,12-12h8v24H92A12,12,0,0,1,80,164Zm84,12h-8V152h8a12,12,0,0,1,0,24ZM72,108a12,12,0,1,1,12,12A12,12,0,0,1,72,108Zm88,0a12,12,0,1,1,12,12A12,12,0,0,1,160,108Z",
  ),
  handshake: phosphor(
    "M254.3,107.91,228.78,56.85a16,16,0,0,0-21.47-7.15L182.44,62.13,130.05,48.27a8.14,8.14,0,0,0-4.1,0L73.56,62.13,48.69,49.7a16,16,0,0,0-21.47,7.15L1.7,107.9a16,16,0,0,0,7.15,21.47l27,13.51,55.49,39.63a8.06,8.06,0,0,0,2.71,1.25l64,16a8,8,0,0,0,7.6-2.1l55.07-55.08,26.42-13.21a16,16,0,0,0,7.15-21.46Zm-54.89,33.37L165,113.72a8,8,0,0,0-10.68.61C136.51,132.27,116.66,130,104,122L147.24,80h31.81l27.21,54.41ZM41.53,64,62,74.22,36.43,125.27,16,115.06Zm116,119.13L99.42,168.61l-49.2-35.14,28-56L128,64.28l9.8,2.59-45,43.68-.08.09a16,16,0,0,0,2.72,24.81c20.56,13.13,45.37,11,64.91-5L188,152.66Zm62-57.87-25.52-51L214.47,64,240,115.06Zm-87.75,92.67a8,8,0,0,1-7.75,6.06,8.13,8.13,0,0,1-1.95-.24L80.41,213.33a7.89,7.89,0,0,1-2.71-1.25L51.35,193.26a8,8,0,0,1,9.3-13l25.11,17.94L126,208.24A8,8,0,0,1,131.82,217.94Z",
  ),
  house: phosphor(
    "M219.31,108.68l-80-80a16,16,0,0,0-22.62,0l-80,80A15.87,15.87,0,0,0,32,120v96a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V160h32v56a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V120A15.87,15.87,0,0,0,219.31,108.68ZM208,208H160V152a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8v56H48V120l80-80,80,80Z",
  ),
  rocket: phosphor(
    "M223.85,47.12a16,16,0,0,0-15-15c-12.58-.75-44.73.4-71.41,27.07L132.69,64H74.36A15.91,15.91,0,0,0,63,68.68L28.7,103a16,16,0,0,0,9.07,27.16l38.47,5.37,44.21,44.21,5.37,38.49a15.94,15.94,0,0,0,10.78,12.92,16.11,16.11,0,0,0,5.1.83A15.91,15.91,0,0,0,153,227.3L187.32,193A15.91,15.91,0,0,0,192,181.64V123.31l4.77-4.77C223.45,91.86,224.6,59.71,223.85,47.12ZM74.36,80h42.33L77.16,119.52,40,114.34Zm74.41-9.45a76.65,76.65,0,0,1,59.11-22.47,76.46,76.46,0,0,1-22.42,59.16L128,164.68,91.32,128ZM176,181.64,141.67,216l-5.19-37.17L176,139.31Zm-74.16,9.5C97.34,201,82.29,224,40,224a8,8,0,0,1-8-8c0-42.29,23-57.34,32.86-61.85a8,8,0,0,1,6.64,14.56c-6.43,2.93-20.62,12.36-23.12,38.91,26.55-2.5,36-16.69,38.91-23.12a8,8,0,1,1,14.56,6.64Z",
  ),
  upload: phosphor(
    "M224,144v64a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V144a8,8,0,0,1,16,0v56H208V144a8,8,0,0,1,16,0ZM93.66,77.66,120,51.31V144a8,8,0,0,0,16,0V51.31l26.34,26.35a8,8,0,0,0,11.32-11.32l-40-40a8,8,0,0,0-11.32,0l-40,40A8,8,0,0,0,93.66,77.66Z",
  ),
};

export default defineConfig({
  title: "Spacefast Docs",
  description: "Publish and host the sites your agents build.",
  logo: { href: "/", image: { light: "/spacefast-wordmark.svg", alt: "Spacefast" }, text: "Docs" },
  // The 2026-10 brand: neutral greys, one green, dark first like the Website.
  // The green is a ground with ink on it, never type on white, so light mode
  // accents in ink; theme.css binds the rest of the palette.
  theme: {
    accent: { dark: "#1efe57", light: "#141414" },
    background: { dark: "#030303", light: "#ffffff" },
    fonts: { body: strichpunkt, display: strichpunkt, mono: intelOneMono },
    mode: "dark",
    radius: "md",
  },
  analytics: [
    posthog({ key: "phc_pnLfu3acyQJbpNz4YYdv4ULaXgafVtUrsZT8wHwijmQT" }),
    script({ src: "https://spacefast.com/cookie-banner.js", strategy: "defer" }),
    script({
      attributes: { type: "module" },
      // Blume's search dialog prefixes the deployment base onto root-relative
      // result URLs, but Pagefind defaults baseUrl to the directory it was
      // loaded from (/docs/), which doubled the prefix. Keep Docs results
      // base-less and make Website results absolute so Blume leaves them alone.
      content: `
        import("${deploymentBase}/pagefind/pagefind.js")
          .then(async (pagefind) => {
            await pagefind.options({
              baseUrl: "/",
              indexWeight: 1.15,
              mergeFilter: { source: "Docs" },
            });
            await pagefind.mergeIndex("/pagefind", {
              baseUrl: \`\${window.location.origin}/\`,
              indexWeight: 1,
              mergeFilter: { source: "Spacefast" },
            });
          })
          .catch(() => undefined);
      `,
    }),
  ],
  content: { root: "content" },
  export: true,
  github: {
    owner: "spacefast",
    repo: "docs",
    branch: "main",
  },
  lastModified: "git",
  markdown: { externalLinks: true, imageZoom: true, code: { icons: true, wrap: false } },
  navigation: {
    cta: { href: "https://my.spacefast.com", label: "Dashboard" },
    featured: [
      { label: "Spacefast", href: "https://spacefast.com", icon: icons.house },
      { label: "Agent setup", href: "/agents", icon: icons.robot },
    ],
    repo: true,
    sidebar: { display: "group" },
    tabs: [
      { label: "Docs", path: "/", icon: icons.book },
      { label: "CLI", path: "/cli", icon: icons.terminal },
      { label: "API", path: "/api", icon: icons.braces },
      { label: "Agents", path: "/agents", icon: icons.robot },
      { label: "Platforms", path: "/platforms", icon: icons.handshake },
    ],
  },
  reference: [
    openapi({
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
    }),
  ],
  search: {
    provider: pagefind(),
    popular: [
      { label: "Quickstart", href: "/quickstart", icon: icons.rocket },
      { label: "Publishing", href: "/publish", icon: icons.upload },
      { label: "MCP server", href: "/agents/mcp-server", icon: icons.robot },
      { label: "API reference", href: "/api/reference", icon: icons.braces },
    ],
  },
  ai: {
    assistant: {
      enabled: true,
      endpoint: "https://api.spacefast.com/v1/docs/ask",
      suggestions: [
        { label: "How do I publish a site?" },
        { label: "How should an agent use Spacefast?" },
        { label: "How do I roll back a version?" },
      ],
    },
  },
  agents: {
    llmsTxt: { details: llmsDetails },
  },
  redirects,
  deployment: {
    site: "https://spacefast.com",
    base: deploymentBase,
  },
});
