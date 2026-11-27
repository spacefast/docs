---
title: "Connect Claude to Spacefast"
description: "Add Spacefast to your Claude account once, and use it on the web, your phone, the desktop app, and Cowork."
seo:
  canonical: "https://spacefast.com/docs/setup/claude-app/"
---

Add Spacefast to your Claude account once, and use it on the web, your phone, the desktop app, and Cowork.

**[Add to Claude](https://claude.ai/directory/b0989c59-00b4-40db-a6d1-1e591ce2516c)** ([Official listing](/connect/marketplace/))

1. If the link opens a custom connector form, add the connector first. Then choose Connect.
2. Sign in to Spacefast and approve access.
3. Turn Spacefast on for the conversation you want to use it in.

On a Team or Enterprise plan, an owner has to add the connector first.

If nothing happens, add the endpoint in Claude yourself:

```text
https://mcp.spacefast.com
```

## Other ways to connect

**Add the Spacefast plugin** ([Spacefast plugin](/connect/plugin/)). Adds the Spacefast connector and its skills to your Claude account, for chat, Cowork, and Claude Code.

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

- **All plans:** Official connectors work on every plan. On Team and Enterprise, an owner has to turn them on first. ([source](https://support.claude.com/en/articles/11176164-use-connectors-to-extend-claude-s-capabilities), checked 2026-11-14)
- **Free:** One custom connector at most, and no plugins. ([source](https://support.claude.com/en/articles/11175166-get-started-with-custom-connectors-using-remote-mcp), checked 2026-11-14)
- **Pro, Max, Ultra, Team and Enterprise:** Plugins work. A plugin's local MCP server runs in Claude Code and in Cowork on your computer, not in chat. ([source](https://support.claude.com/en/articles/13837440-use-plugins-in-claude), checked 2026-11-14)

[Compare every way to connect](/connect/compare/)

[Agent documentation](/agents/) · [Claude documentation](https://claude.com/docs/connectors/building/directory-vs-custom)
