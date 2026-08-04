export const websiteOrigin = "https://spacefast.com";

// Docs are published inside the Website artifact. These root URLs deliberately
// live outside /docs and are supplied by the Website build at composition time.
export const websiteDependencies = [
  "/.well-known/agent-card.json",
  "/.well-known/agent-skills/index.json",
  "/.well-known/integrations.json",
  "/.well-known/mcp/server-card.json",
  "/cookie-banner.js",
  "/help",
  "/recipes",
  "/setup",
];

export const websiteDependencyManifest = ".spacefast-website-dependencies.json";
