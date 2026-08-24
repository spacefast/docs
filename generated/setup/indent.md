---
title: "Connect Indent to Spacefast"
description: "Connect Spacefast through Indent's native OAuth MCP integration."
seo:
  noindex: true
---

Connect Spacefast through Indent's native OAuth MCP integration.

**Add the hosted MCP server.** Paste the Spacefast endpoint into Indent Settings → Integrations → Add custom MCP and approve OAuth in the browser.

```text
https://mcp.spacefast.com
```

## Other ways to connect

**Configure an MCP client configuration.** Merge the hosted Spacefast server into the client MCP configuration.

```json
{
  "mcpServers": {
    "spacefast": {
      "type": "http",
      "url": "https://mcp.spacefast.com"
    }
  }
}
```

Prefer to hand this off? Copy setup prompt:

```text
Fetch https://spacefast.com/setup.md and set up Spacefast.
```

Give the agent one prompt that lets it choose and complete the best setup lane.

[Agent documentation](/agents) · [Indent documentation](https://indent.com/docs/integrations/mcp)
