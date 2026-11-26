---
title: "Connect Conductor to Spacefast"
description: "Conductor runs Claude Code and Codex side by side on your Mac. Add Spacefast to Claude Code once and every Conductor workspace has it."
seo:
  canonical: "https://spacefast.com/docs/agents/conductor/"
---

Conductor runs Claude Code and Codex side by side on your Mac. Add Spacefast to Claude Code once and every Conductor workspace has it.

**Run Spacefast MCP on this computer** ([MCP on your computer (stdio)](/connect/stdio-mcp/)). Adds Spacefast to Claude Code, which Conductor runs in every workspace. Starts the server on your computer with npx.

```bash
claude mcp add --scope user --transport stdio spacefast -- npx -y spacefast mcp
```

1. Open a new Conductor workspace, then run `/mcp-status` in the composer to check that Spacefast is listed.
2. Use any Spacefast tool. Sign in to Spacefast in the browser window that opens.

Prefer to hand this off? Copy setup prompt:

```text
Fetch https://spacefast.com/setup.md
```

Give the agent one prompt that lets it choose and complete the best setup lane.

[Compare every way to connect](/connect/compare/)

[Agent documentation](/agents/) · [Conductor documentation](https://www.conductor.build/docs/guides/configure-mcp-servers)
