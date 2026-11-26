---
title: "MCP on your computer (stdio): connect an agent to Spacefast"
description: "Run the Spacefast MCP server locally on your computer over stdio."
seo:
  canonical: "https://spacefast.com/docs/connect/stdio-mcp/"
---

Run the Spacefast MCP server locally on your computer over stdio.

## How it works

1. The agent starts `npx -y spacefast mcp` as a local process and talks to it over stdio.
2. The first tool call opens a Spacefast sign-in in your browser and saves the login for the CLI too.
3. Because it runs on your computer, it can publish folders straight from disk.

## What you need

- Node.js with npx on the computer the agent runs on.
- An agent that can start local MCP servers.

## Best for

Coding agents and anything with a shell. It's the default for terminal agents.

## Agents that support it

- [OpenClaw](/agents/openclaw/)
- [Claude Code](/agents/claude-code/)
- [Codex](/agents/codex/)
- [OpenCode](/agents/opencode/)
- [Zed](/agents/zed/)
- [Conductor](/agents/conductor/)
- [Orca](/agents/orca/)
- [Goose](/agents/goose/)
- [Kiro](/agents/kiro/)
- [Hermes](/agents/hermes/)
- [Pi](/agents/pi/)
- [LM Studio](/agents/lm-studio/)
- [Any MCP client](/agents/any-mcp/)

## Plan limits

### Codex

- **ChatGPT Free and Go:** Codex works in the desktop app only, with limited use. ([source](https://learn.chatgpt.com/docs/pricing), checked 2026-11-14)
- **ChatGPT Plus and above:** Codex works on the web, in the CLI, in the IDE extension and on iOS. ([source](https://learn.chatgpt.com/docs/pricing), checked 2026-11-14)

[Compare every way to connect](/connect/compare/) · [All agents](/agents/)
