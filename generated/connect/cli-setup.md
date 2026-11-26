---
title: "Spacefast CLI: connect an agent to Spacefast"
description: "Run the Spacefast CLI setup command, which detects your agents and configures each one."
seo:
  canonical: "https://spacefast.com/docs/connect/cli-setup/"
---

Run the Spacefast CLI setup command, which detects your agents and configures each one.

## How it works

1. The CLI finds the agents installed on this computer.
2. For each one it writes the MCP config and installs the Spacefast skill.
3. It signs you in once and every agent shares that login.

## What you need

- Node.js with npx, and a terminal.

## Best for

Setting up several agents on one computer in one step.

## Agents that support it

- [Cursor](/agents/cursor/)
- [OpenClaw](/agents/openclaw/)
- [Claude Code](/agents/claude-code/)
- [Codex](/agents/codex/)
- [VS Code](/agents/vscode/)
- [GitHub Copilot CLI](/agents/github-copilot/)
- [OpenCode](/agents/opencode/)
- [Zed](/agents/zed/)
- [Devin Desktop](/agents/devin-desktop/)
- [Hermes](/agents/hermes/)
- [Pi](/agents/pi/)
- [Amp](/agents/amp/)
- [Warp](/agents/warp/)
- [Factory Droid](/agents/factory-droid/)
- [Cline](/agents/cline/)

## Plan limits

### Codex

- **ChatGPT Free and Go:** Codex works in the desktop app only, with limited use. ([source](https://learn.chatgpt.com/docs/pricing), checked 2026-11-14)
- **ChatGPT Plus and above:** Codex works on the web, in the CLI, in the IDE extension and on iOS. ([source](https://learn.chatgpt.com/docs/pricing), checked 2026-11-14)

[Compare every way to connect](/connect/compare/) · [All agents](/agents/)
