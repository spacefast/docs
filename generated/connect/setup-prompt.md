---
title: "Setup prompt: connect an agent to Spacefast"
description: "Paste one prompt into any agent. It reads spacefast.com/setup.md and sets itself up."
seo:
  canonical: "https://spacefast.com/docs/connect/setup-prompt/"
---

Paste one prompt into any agent. It reads spacefast.com/setup.md and sets itself up.

## How it works

1. Copy the setup prompt and paste it into the agent.
2. The agent reads https://spacefast.com/setup.md and picks the best setup it can do.
3. It asks before running anything that changes your computer.

## What you need

- An agent that can fetch a URL.

## Best for

Any agent, including ones with no MCP support. It's the fallback that works almost everywhere.

## Agents that support it

- [Claude](/agents/claude-app/)
- [ChatGPT](/agents/chatgpt/)
- [Cursor](/agents/cursor/)
- [Antigravity](/agents/antigravity/)
- [Grok Bot](/agents/grok-bot/)
- [OpenClaw](/agents/openclaw/)
- [Raycast](/agents/raycast/)
- [Muse](/agents/muse/)
- [Claude Code](/agents/claude-code/)
- [Claude Desktop](/agents/claude-desktop/)
- [Claude Cowork](/agents/claude-cowork/)
- [Codex](/agents/codex/)
- [ChatGPT Work](/agents/chatgpt-work/)
- [dots and ChatGPT Space](/agents/chatgpt-space/)
- [VS Code](/agents/vscode/)
- [GitHub Copilot CLI](/agents/github-copilot/)
- [GitHub Copilot app](/agents/github-copilot-app/)
- [OpenCode](/agents/opencode/)
- [Zed](/agents/zed/)
- [Devin Desktop](/agents/devin-desktop/)
- [Devin Cloud](/agents/devin-cloud/)
- [Conductor](/agents/conductor/)
- [Orca](/agents/orca/)
- [Goose](/agents/goose/)
- [Kiro](/agents/kiro/)
- [Hermes](/agents/hermes/)
- [Pi](/agents/pi/)
- [LM Studio](/agents/lm-studio/)
- [Mistral Le Chat](/agents/mistral/)
- [Perplexity](/agents/perplexity/)
- [Any MCP client](/agents/any-mcp/)
- [Instinct](/agents/instinct/)
- [Microsoft Copilot](/agents/microsoft-copilot/)
- [T3 Chat](/agents/t3-chat/)
- [Amp](/agents/amp/)
- [Warp](/agents/warp/)
- [Factory Droid](/agents/factory-droid/)
- [Cline](/agents/cline/)
- [Indent](/agents/indent/)
- [Poke](/agents/poke/)

## Plan limits

### Claude

- **All plans:** Official connectors work on every plan. On Team and Enterprise, an owner has to turn them on first. ([source](https://support.claude.com/en/articles/11176164-use-connectors-to-extend-claude-s-capabilities), checked 2026-11-14)
- **Free:** One custom connector at most, and no plugins. ([source](https://support.claude.com/en/articles/11175166-get-started-with-custom-connectors-using-remote-mcp), checked 2026-11-14)
- **Pro, Max, Ultra, Team and Enterprise:** Plugins work. A plugin's local MCP server runs in Claude Code and in Cowork on your computer, not in chat. ([source](https://support.claude.com/en/articles/13837440-use-plugins-in-claude), checked 2026-11-14)

### ChatGPT

- **Free, Go, Plus and Pro:** The Spacefast plugin installs on every personal plan. ([source](https://chatgpt.com/pricing), checked 2026-11-14)
- **Business and Enterprise:** Plugins are on by default on Business. On Enterprise an admin turns them on first. ([source](https://chatgpt.com/features/plugins/), checked 2026-11-14)
- **Free and Go:** No developer mode, so you can't add Spacefast as a custom MCP server. Use the plugin. ([source](https://chatgpt.com/pricing), checked 2026-11-14)

### Grok Bot

- **Premium, Super and Ultra:** Grok Bot comes with these plans. Plus and Free don't include it. ([source](https://docs.x.ai/x-subscription/grok-bot), checked 2026-11-14)
- **Team bots:** An admin's MCP policy can block the server, and then it can't be saved. ([source](https://docs.x.ai/grok-bot/computer-and-apps), checked 2026-11-14)

### Raycast

- **Free:** No AI and no MCP servers. Raycast AI and MCP need Pro, Teams Pro or Enterprise. ([source](https://www.raycast.com/pricing), checked 2026-11-14)

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

### ChatGPT Work

- **Free and Go:** ChatGPT Work is limited and runs in the desktop app only. ([source](https://chatgpt.com/pricing), checked 2026-11-14)
- **Plus and Pro:** ChatGPT Work runs on the desktop, the web and mobile. ([source](https://chatgpt.com/pricing), checked 2026-11-14)
- **Free, Go, Plus and Pro:** The Spacefast plugin installs on every personal plan. ([source](https://chatgpt.com/pricing), checked 2026-11-14)
- **Business and Enterprise:** Plugins are on by default on Business. On Enterprise an admin turns them on first. ([source](https://chatgpt.com/features/plugins/), checked 2026-11-14)

### dots and ChatGPT Space

- **Free, Go and Plus:** dots and ChatGPT Space aren't included. ([source](https://chatgpt.com/pricing), checked 2026-11-14)
- **Pro, Business Premium and Enterprise:** dots are included. On Pro they need you to be 18 or older and outside the EEA, the UK and Switzerland. ([source](https://learn.chatgpt.com/docs/dots.md), checked 2026-11-14)

### Perplexity

- **Free:** Custom connectors aren't included. ([source](https://www.perplexity.ai/changelog/what-we-shipped---march-13-2026), checked 2026-11-14)
- **Pro, Max and Enterprise:** Custom connectors work. On Enterprise, an admin has to allow members to add them. ([source](https://www.perplexity.ai/help-center/en/articles/13915507-adding-custom-remote-connectors), checked 2026-11-14)

### Microsoft Copilot

- **Personal accounts:** Copilot connects only to OneDrive, Outlook.com, Google Drive and Gmail. It has no custom connectors or MCP. ([source](https://support.microsoft.com/en-us/microsoft-copilot/connecting-microsoft-copilot-to-other-services), checked 2026-11-14)

### T3 Chat

- **All plans:** T3 Chat has no MCP, connectors, plugins or skills. ([source](https://t3.chat/faq), checked 2026-11-14)

[Compare every way to connect](/connect/compare/) · [All agents](/agents/)
