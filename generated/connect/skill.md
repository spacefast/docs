---
title: "Skill only: connect an agent to Spacefast"
description: "Install just the Spacefast skill, which teaches an agent to publish through the API."
seo:
  canonical: "https://spacefast.com/docs/connect/skill/"
---

Install just the Spacefast skill, which teaches an agent to publish through the API.

## How it works

1. Run `npx -y skills add` with the Spacefast skill.
2. The agent loads the skill when you ask it to publish.
3. No MCP server is added. The agent calls the Spacefast API directly.

## What you need

- An agent that loads skills and can make HTTP requests.

## Best for

The lightest setup, for agents that read skills natively.

## Agents that support it

- [Cursor](/agents/cursor/)
- [Antigravity](/agents/antigravity/)
- [Claude Code](/agents/claude-code/)
- [Codex](/agents/codex/)
- [VS Code](/agents/vscode/)
- [GitHub Copilot CLI](/agents/github-copilot/)
- [OpenCode](/agents/opencode/)
- [Zed](/agents/zed/)
- [Devin Desktop](/agents/devin-desktop/)
- [Devin Cloud](/agents/devin-cloud/)
- [Orca](/agents/orca/)
- [Goose](/agents/goose/)
- [Kiro](/agents/kiro/)
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
