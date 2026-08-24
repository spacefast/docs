---
title: "Connect Poke to Spacefast"
description: "Prefill a Spacefast integration in Poke and authorize with OAuth."
seo:
  canonical: "https://spacefast.com/setup/poke/"
---

Prefill a Spacefast integration in Poke and authorize with OAuth.

**[Add to Poke](https://poke.com/integrations/new?name=Spacefast&url=https%3A%2F%2Fmcp.spacefast.com)**

If nothing happens, add the endpoint in Poke yourself:

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

[Agent documentation](/agents) · [Poke documentation](https://poke.com/docs/mcp-servers)
