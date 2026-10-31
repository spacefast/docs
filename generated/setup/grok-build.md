---
title: "Connect Grok Build to Spacefast"
description: "Add Spacefast's remote MCP server to Grok Build."
seo:
  canonical: "https://spacefast.com/docs/setup/grok-build/"
---

Add Spacefast's remote MCP server to Grok Build.

**Configure `~/.grok/config.toml`.** Add Spacefast to Grok Build's MCP configuration.

```toml
[mcp_servers.spacefast]
url = "https://mcp.spacefast.com"
```

1. Add the entry above to `~/.grok/config.toml`, keeping your other settings.
2. Open `/mcps` in Grok Build and refresh with `r` after editing the file.
3. Use the server or press `i` to start OAuth. Sign in to Spacefast and approve access.
4. Run `grok mcp doctor spacefast` if the connection needs troubleshooting.

## Other ways to connect

**Run in your terminal.** Run this command to add Spacefast.

```bash
grok mcp add --transport http spacefast 'https://mcp.spacefast.com'
```

1. Open Grok Build and use Spacefast, or open `/mcps` and press `i` to authenticate.
2. Sign in to Spacefast and approve access. Run `grok mcp doctor spacefast` to check the connection.

[Agent documentation](/agents) · [Grok Build documentation](https://docs.x.ai/build/features/mcp-servers)
