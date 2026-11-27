---
title: "Connect LM Studio to Spacefast"
description: "Add Spacefast to LM Studio with one-click MCP install or ~/.lmstudio/mcp.json."
seo:
  canonical: "https://spacefast.com/docs/setup/lm-studio/"
---

Add Spacefast to LM Studio with one-click MCP install or ~/.lmstudio/mcp.json.

**Run Spacefast MCP on this computer** ([MCP on your computer (stdio)](/connect/stdio-mcp/)). Runs Spacefast On-Device MCP locally in LM Studio.

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

1. Restart the agent or start a new session so it loads the server.
2. Use any Spacefast tool. Sign in to Spacefast in the browser window that opens.

## Other ways to connect

**Add to LM Studio** ([Hosted MCP server](/connect/hosted-mcp/)). Opens LM Studio with the Spacefast MCP server ready to add.

[Add to LM Studio](lmstudio://add_mcp?name=spacefast&config=eyJ1cmwiOiJodHRwczovL21jcC5zcGFjZWZhc3QuY29tIn0%3D)

1. Confirm adding Spacefast in LM Studio.
2. Enable Spacefast in your chat integrations and sign in when asked.

**Configure `~/.lmstudio/mcp.json`** ([Hosted MCP server](/connect/hosted-mcp/)). Add the hosted Spacefast MCP server to `~/.lmstudio/mcp.json`.

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
Fetch https://spacefast.com/setup.md
```

Give the agent one prompt that lets it choose and complete the best setup lane.

[Compare every way to connect](/connect/compare/)

[Agent documentation](/agents/) · [LM Studio documentation](https://lmstudio.ai/docs/app/plugins/mcp)
