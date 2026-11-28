---
title: "Connect Windsurf to Spacefast"
description: "Windsurf is now Devin Desktop, the same app after an update. Add Spacefast to it so its agent can publish what you build."
seo:
  canonical: "https://spacefast.com/docs/setup/windsurf/"
---

Windsurf is now Devin Desktop, the same app after an update. Add Spacefast to it so its agent can publish what you build.

**Install the Spacefast plugin** (Spacefast plugin). Adds Spacefast to Devin Desktop, formerly Windsurf, with its skills and the hosted connection.

```bash
devin plugins install spacefast/plugins
```

1. Run `devin mcp login spacefast`, then sign in to Spacefast and approve access.
2. Start a new session so the Spacefast tools load.

Devin installs plugins for signed-in accounts (`devin auth login`).

## Other ways to connect

**Configure `~/.config/devin/mcp_config.json`** (Hosted MCP server). One entry in Devin Desktop's MCP config connects Spacefast.

```json
{
  "mcpServers": {
    "spacefast": {
      "transport": "http",
      "url": "https://mcp.spacefast.com",
      "oauthResource": "https://mcp.spacefast.com"
    }
  }
}
```

1. Add the entry above to `~/.config/devin/mcp_config.json`, keeping what's already in the file.
2. Choose Authenticate in Devin Desktop, or run `devin mcp login spacefast`.
3. Sign in to Spacefast and approve access.

Prefer to hand this off? Copy setup prompt:

```text
Fetch https://spacefast.com/setup.md
```

Give the agent one prompt that lets it choose and complete the best setup lane.

[Agent documentation](/agents/) · [Windsurf documentation](https://devin.ai/blog/windsurf-is-now-devin-desktop/)
