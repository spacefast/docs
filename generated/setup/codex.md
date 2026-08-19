---
title: "Connect Codex to Spacefast"
description: "One paste installs the plugin — the publish skill plus MCP tools in one go."
---

One paste installs the plugin — the publish skill plus MCP tools in one go.

**Plugin** — The $spacefast skill plus MCP in one install — or type /plugins inside Codex and pick Spacefast.

```bash
codex plugin marketplace add spacefast/plugins && codex plugin add spacefast@spacefast
```

## Other ways to connect

**Hosted MCP only** — One command plus a browser sign-in — tools without the $spacefast skill.

```bash
codex mcp add spacefast --url https://mcp.spacefast.com && codex mcp login spacefast
```

[Agent documentation](/agents) · [Codex's plugin docs](https://learn.chatgpt.com/docs/plugins)
