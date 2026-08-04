---
title: "Connect OpenClaw to Spacefast"
description: "One command connects the hosted tools, one sign-in approves them — then publish from WhatsApp, Telegram, Discord, or a cron job."
---

One command connects the hosted tools, one sign-in approves them — then publish from WhatsApp, Telegram, Discord, or a cron job.

**Hosted MCP** — One command connects hosted MCP. Then openclaw mcp login spacefast prints an authorization URL — approve it and pass the code back with --code.

```bash
openclaw mcp add spacefast --url https://mcp.spacefast.com --transport streamable-http --auth oauth
```

[Agent documentation](/agents) · [OpenClaw's MCP docs](https://docs.openclaw.ai/cli/mcp)
