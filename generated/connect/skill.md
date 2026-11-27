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

- [Cursor](/setup/cursor/)
- [Antigravity](/setup/antigravity/)
- [Claude Code](/setup/claude-code/)
- [Codex](/setup/codex/)
- [VS Code](/setup/vscode/)
- [GitHub Copilot CLI](/setup/github-copilot/)
- [OpenCode](/setup/opencode/)
- [Zed](/setup/zed/)
- [Devin Desktop](/setup/devin-desktop/)
- [Devin Cloud](/setup/devin-cloud/)
- [Orca](/setup/orca/)
- [Goose](/setup/goose/)
- [Kiro](/setup/kiro/)
- [Pi](/setup/pi/)
- [Amp](/setup/amp/)
- [Warp](/setup/warp/)
- [Factory Droid](/setup/factory-droid/)
- [Cline](/setup/cline/)

## Plan limits

### Codex

- **ChatGPT Free and Go:** Codex works in the desktop app only, with limited use. ([source](https://learn.chatgpt.com/docs/pricing), checked 2026-11-14)
- **ChatGPT Plus and above:** Codex works on the web, in the CLI, in the IDE extension and on iOS. ([source](https://learn.chatgpt.com/docs/pricing), checked 2026-11-14)

[Compare every way to connect](/connect/compare/) · [All agents](/agents/)
