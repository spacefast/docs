---
title: "Desktop extension: connect an agent to Spacefast"
description: "Download a file that installs Spacefast into the Claude desktop app on this computer."
seo:
  canonical: "https://spacefast.com/docs/connect/desktop-extension/"
---

Download a file that installs Spacefast into the Claude desktop app on this computer.

## How it works

1. Download the .mcpb file and open it. The desktop app asks you to confirm.
2. Paste a Spacefast API key, or leave it blank to publish anonymously and claim the Space later.

## What you need

- The Claude desktop app, and Node.js with npx where the app can find it.

## Best for

One computer, with no account-level changes.

## Agents that support it

- [Claude Desktop](/setup/claude-desktop/)

## Plan limits

### Claude Desktop

- **All plans:** Directory connectors work on every plan. On Team and Enterprise, an owner has to turn them on first. ([source](https://support.claude.com/en/articles/11176164-use-connectors-to-extend-claude-s-capabilities), checked 2026-11-14)
- **Free:** One custom connector at most, and no plugins. ([source](https://support.claude.com/en/articles/11175166-get-started-with-custom-connectors-using-remote-mcp), checked 2026-11-14)
- **Pro, Max, Ultra, Team and Enterprise:** Plugins work. A plugin's local MCP server runs in Claude Code and in Cowork on your computer, not in chat. ([source](https://support.claude.com/en/articles/13837440-use-plugins-in-claude), checked 2026-11-14)

[Compare every way to connect](/connect/compare/) · [All agents](/setup/)
