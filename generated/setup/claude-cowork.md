---
title: "Connect Claude Cowork to Spacefast"
description: "Add Spacefast to your Claude account so Cowork tasks can publish what they make."
seo:
  canonical: "https://spacefast.com/docs/setup/claude-cowork/"
---

Add Spacefast to your Claude account so Cowork tasks can publish what they make.

**[Add to Claude](https://claude.ai/directory/b0989c59-00b4-40db-a6d1-1e591ce2516c)** (Directory connector)

1. If the link opens a custom connector form, add the connector first. Then choose Connect.
2. Sign in to Spacefast and approve access.
3. Turn Spacefast on for the conversation you want to use it in.

On a Team or Enterprise plan, an owner has to add the connector first.

If nothing happens, add the endpoint in Claude Cowork yourself:

```text
https://mcp.spacefast.com
```

## Other ways to connect

**Add the Spacefast plugin** (Spacefast plugin). Adds the Spacefast connector and its skills to your Claude account, so Cowork knows how to publish.

```text
spacefast/plugins
```

1. In Claude, click Plugins in the sidebar, then choose Add → Add marketplace → Add from a repository.
2. Paste spacefast/plugins and add the marketplace.
3. Select the Spacefast plugin, then choose Add.
4. Sign in to Spacefast and approve access when Claude asks. If Claude says the Spacefast connector isn't connected, add the connector as well.

The Plugins page is live on Free, Pro, Max, and Ultra plans. It reaches Team plans from November 30, 2026 and Enterprise plans in the following weeks; until then, look for Customize → Plugins. On a Team or Enterprise plan, an owner may limit which marketplaces you can add, and from November 30, plugins don't work in the Claude Desktop app if Skills are off for your organization. Removing the plugin doesn't disconnect the Spacefast connector, so disconnect it separately.

Prefer to hand this off? Copy setup prompt:

```text
Fetch https://spacefast.com/setup.md
```

Give the agent one prompt that lets it choose and complete the best setup lane.

## Plan limits

- **Free:** Cowork isn't available on the Free plan. ([source](https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork), checked 2026-11-14)
- **Pro, Max and Ultra:** New Cowork tasks run in the cloud, where a plugin's local MCP server doesn't run. The connector works there. ([source](https://support.claude.com/en/articles/15520349-use-claude-cowork-on-web-desktop-and-mobile), checked 2026-11-14)
- **Team and Enterprise:** An owner has to turn on connectors, and may limit which plugin marketplaces you can add. ([source](https://support.claude.com/en/articles/11176164-use-connectors-to-extend-claude-s-capabilities), checked 2026-11-14)

[Agent documentation](/agents/) · [Claude Cowork documentation](https://support.claude.com/en/articles/13345190-get-started-with-claude-cowork)
