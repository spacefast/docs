---
title: "Connect Claude Desktop to Spacefast"
description: "Install Spacefast in Claude Desktop as a signed local extension."
seo:
  canonical: "https://spacefast.com/setup/claude-desktop/"
---

Install Spacefast in Claude Desktop as a signed local extension.

**Download desktop extension.** Install the signed Spacefast MCP bundle — double-click, nothing to configure.

[Download desktop extension](https://github.com/spacefast/plugins/releases/latest/download/claude-desktop.mcpb)

## Other ways to connect

**Configure claude_desktop_config.json.** Merge the hosted Spacefast server into the client MCP configuration.

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

[Agent documentation](/agents) · [Claude Desktop documentation](https://github.com/modelcontextprotocol/mcpb)
