---
title: "Connect Raycast to Spacefast"
description: "Connect Spacefast to Raycast AI using its native OAuth MCP form."
seo:
  noindex: true
---

Connect Spacefast to Raycast AI using its native OAuth MCP form.

**Add the hosted MCP server.** Paste the Spacefast endpoint into Raycast Settings → AI → MCP Servers → Install MCP Server and approve OAuth in the browser.

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

[Agent documentation](/agents) · [Raycast documentation](https://manual.raycast.com/model-context-protocol)
