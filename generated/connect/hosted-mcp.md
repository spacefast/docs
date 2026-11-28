---
title: "Hosted MCP server: connect an agent to Spacefast"
description: "Point the agent at https://mcp.spacefast.com and sign in with OAuth."
seo:
  canonical: "https://spacefast.com/docs/connect/hosted-mcp/"
---

Point the agent at https://mcp.spacefast.com and sign in with OAuth.

## How it works

1. Add a remote MCP server with the URL https://mcp.spacefast.com, by command, config file, or the agent's settings form.
2. The agent opens a Spacefast sign-in. Approve access.
3. Nothing runs on your computer. Publishing sends files through the agent.

## What you need

- An agent that supports remote MCP servers with OAuth.

## Best for

Agents without a shell, and anyone who can't run Node.js locally.

## Agents that support it

- [Claude Code](/setup/claude-code/)
- [ChatGPT](/setup/chatgpt/)
- [Antigravity](/setup/antigravity/)
- [Cursor](/setup/cursor/)
- [Raycast](/setup/raycast/)
- [Any MCP client](/setup/any-mcp/)
- [Codex](/setup/codex/)
- [Windsurf](/setup/windsurf/)
- [VS Code](/setup/vscode/)
- [GitHub Copilot CLI](/setup/github-copilot/)
- [GitHub Copilot app](/setup/github-copilot-app/)
- [OpenCode](/setup/opencode/)
- [Zed](/setup/zed/)
- [Devin Desktop](/setup/devin-desktop/)
- [Devin Cloud](/setup/devin-cloud/)
- [Grok Build](/setup/grok-build/)
- [Perplexity](/setup/perplexity/)
- [Amp](/setup/amp/)
- [Warp](/setup/warp/)
- [Factory Droid](/setup/factory-droid/)
- [Cline](/setup/cline/)
- [Indent](/setup/indent/)
- [Poke](/setup/poke/)
- [Grok](/setup/grok/)

## Plan limits

### ChatGPT

- **Free, Go, Plus and Pro:** The Spacefast plugin installs on every personal plan. ([source](https://chatgpt.com/pricing), checked 2026-11-14)
- **Business and Enterprise:** Plugins are on by default on Business. On Enterprise an admin turns them on first. ([source](https://chatgpt.com/features/plugins/), checked 2026-11-14)
- **Free and Go:** No developer mode, so you can't add Spacefast as a custom MCP server. Use the plugin. ([source](https://chatgpt.com/pricing), checked 2026-11-14)

### Raycast

- **Free:** No AI and no MCP servers. Raycast AI and MCP need Pro, Teams Pro or Enterprise. ([source](https://www.raycast.com/pricing), checked 2026-11-14)

### Codex

- **ChatGPT Free and Go:** Codex works in the desktop app only, with limited use. ([source](https://learn.chatgpt.com/docs/pricing), checked 2026-11-14)
- **ChatGPT Plus and above:** Codex works on the web, in the CLI, in the IDE extension and on iOS. ([source](https://learn.chatgpt.com/docs/pricing), checked 2026-11-14)

### Perplexity

- **Free:** Custom connectors aren't included. ([source](https://www.perplexity.ai/changelog/what-we-shipped---march-13-2026), checked 2026-11-14)
- **Pro, Max and Enterprise:** Custom connectors work. On Enterprise, an admin has to allow members to add them. ([source](https://www.perplexity.ai/help-center/en/articles/13915507-adding-custom-remote-connectors), checked 2026-11-14)

[Compare every way to connect](/connect/compare/) · [All agents](/setup/)
