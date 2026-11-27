---
title: "Connect Kiro to Spacefast"
description: "Add Spacefast to Kiro via one-click MCP install or workspace MCP config."
seo:
  canonical: "https://spacefast.com/docs/setup/kiro/"
---

Add Spacefast to Kiro via one-click MCP install or workspace MCP config.

**Run Spacefast MCP on this computer** ([MCP on your computer (stdio)](/connect/stdio-mcp/)). Runs Spacefast On-Device MCP locally in Kiro.

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

**Add to Kiro** ([Hosted MCP server](/connect/hosted-mcp/)). Opens Kiro to add the hosted Spacefast MCP server.

[Add to Kiro](https://kiro.dev/launch/mcp/add?name=spacefast&config=%7B%22url%22%3A%22https%3A%2F%2Fmcp.spacefast.com%22%7D)

1. Approve adding the Spacefast server in Kiro.
2. Complete browser OAuth sign-in when prompted.

**Configure `~/.kiro/settings/mcp.json`** ([Hosted MCP server](/connect/hosted-mcp/)). Add the hosted Spacefast server to your Kiro MCP config.

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

1. Merge the entry above into `~/.kiro/settings/mcp.json` (or `.kiro/settings/mcp.json` for one project).
2. Reload MCP servers in Kiro and sign in to Spacefast.

**Install just the skill** ([Skill only](/connect/skill/)). Teaches your agent how to publish with Spacefast and adds nothing else. The lightest option.

```bash
npx -y skills add https://github.com/spacefast/plugins/tree/main/skills/spacefast -y
```

Prefer to hand this off? Copy setup prompt:

```text
Fetch https://spacefast.com/setup.md
```

Give the agent one prompt that lets it choose and complete the best setup lane.

[Compare every way to connect](/connect/compare/)

[Agent documentation](/agents/) · [Kiro documentation](https://kiro.dev/docs/mcp/configuration/)
