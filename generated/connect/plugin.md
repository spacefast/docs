---
title: "Spacefast plugin: connect an agent to Spacefast"
description: "Add the plugin from spacefast/plugins with the agent's own plugin command."
seo:
  canonical: "https://spacefast.com/docs/connect/plugin/"
---

Add the plugin from spacefast/plugins with the agent's own plugin command.

## How it works

1. Add the spacefast/plugins marketplace to the agent, then install the Spacefast plugin.
2. The plugin brings the Spacefast skills and the MCP connection in one install.
3. Sign in to Spacefast and approve access when the agent asks.

## What you need

- An agent that installs plugins from a Git repository.

## Best for

Coding agents that support plugins without an official listing.

## Agents that support it

- [Claude](/agents/claude-app/)
- [Cursor](/agents/cursor/)
- [Antigravity](/agents/antigravity/)
- [Claude Code](/agents/claude-code/)
- [Claude Desktop](/agents/claude-desktop/)
- [Claude Cowork](/agents/claude-cowork/)
- [Codex](/agents/codex/)
- [VS Code](/agents/vscode/)
- [GitHub Copilot CLI](/agents/github-copilot/)
- [GitHub Copilot app](/agents/github-copilot-app/)
- [Devin Desktop](/agents/devin-desktop/)
- [Factory Droid](/agents/factory-droid/)

## Plan limits

### Claude

- **All plans:** Official connectors work on every plan. On Team and Enterprise, an owner has to turn them on first. ([source](https://support.claude.com/en/articles/11176164-use-connectors-to-extend-claude-s-capabilities), checked 2026-11-14)
- **Free:** One custom connector at most, and no plugins. ([source](https://support.claude.com/en/articles/11175166-get-started-with-custom-connectors-using-remote-mcp), checked 2026-11-14)
- **Pro, Max, Ultra, Team and Enterprise:** Plugins work. A plugin's local MCP server runs in Claude Code and in Cowork on your computer, not in chat. ([source](https://support.claude.com/en/articles/13837440-use-plugins-in-claude), checked 2026-11-14)

### Claude Desktop

- **All plans:** Official connectors work on every plan. On Team and Enterprise, an owner has to turn them on first. ([source](https://support.claude.com/en/articles/11176164-use-connectors-to-extend-claude-s-capabilities), checked 2026-11-14)
- **Free:** One custom connector at most, and no plugins. ([source](https://support.claude.com/en/articles/11175166-get-started-with-custom-connectors-using-remote-mcp), checked 2026-11-14)
- **Pro, Max, Ultra, Team and Enterprise:** Plugins work. A plugin's local MCP server runs in Claude Code and in Cowork on your computer, not in chat. ([source](https://support.claude.com/en/articles/13837440-use-plugins-in-claude), checked 2026-11-14)

### Claude Cowork

- **Free:** Cowork isn't available on the Free plan. ([source](https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork), checked 2026-11-14)
- **Pro, Max and Ultra:** New Cowork tasks run in the cloud, where a plugin's local MCP server doesn't run. The connector works there. ([source](https://support.claude.com/en/articles/15520349-use-claude-cowork-on-web-desktop-and-mobile), checked 2026-11-14)
- **Team and Enterprise:** An owner has to turn on connectors, and may limit which plugin marketplaces you can add. ([source](https://support.claude.com/en/articles/11176164-use-connectors-to-extend-claude-s-capabilities), checked 2026-11-14)

### Codex

- **ChatGPT Free and Go:** Codex works in the desktop app only, with limited use. ([source](https://learn.chatgpt.com/docs/pricing), checked 2026-11-14)
- **ChatGPT Plus and above:** Codex works on the web, in the CLI, in the IDE extension and on iOS. ([source](https://learn.chatgpt.com/docs/pricing), checked 2026-11-14)

[Compare every way to connect](/connect/compare/) · [All agents](/agents/)
