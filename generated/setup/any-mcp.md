---
title: "Connect Any MCP client to Spacefast"
description: "Connect any app that speaks MCP: run Spacefast on your computer, or point the app at the hosted server."
seo:
  canonical: "https://spacefast.com/docs/agents/any-mcp/"
---

Connect any app that speaks MCP: run Spacefast on your computer, or point the app at the hosted server.

**Add the hosted server** ([Hosted MCP server](/connect/hosted-mcp/)). Point the app at the hosted Spacefast server. It signs you in with OAuth.

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

1. Add the server to your app's MCP settings. Apps that take a URL and nothing else need only the address in it.
2. Sign in to Spacefast and approve access when the app asks.

## Other ways to connect

**Run Spacefast MCP on this computer** ([MCP on your computer (stdio)](/connect/stdio-mcp/)). Starts the Spacefast MCP server on your computer with npx. The first tool call signs you in.

```json
{
  "mcpServers": {
    "spacefast": {
      "command": "npx",
      "args": [
        "-y",
        "spacefast",
        "mcp"
      ]
    }
  }
}
```

1. Add the entry above to your app's MCP settings. It needs Node.js on this computer.
2. Restart the app so it starts the server.
3. Use any Spacefast tool. Sign in to Spacefast in the browser window that opens.

Prefer to hand this off? Copy setup prompt:

```text
Fetch https://spacefast.com/setup.md
```

Give the agent one prompt that lets it choose and complete the best setup lane.

[Compare every way to connect](/connect/compare/)

[Agent documentation](/agents/) · [Any MCP client documentation](https://modelcontextprotocol.io/specification/latest/basic/transports)
