---
title: "Connect Claude to Spacefast"
description: "Add Spacefast to your Claude account once, and use it on the web, your phone, the desktop app, and Cowork."
seo:
  canonical: "https://spacefast.com/docs/setup/claude-app/"
---

Add Spacefast to your Claude account once, and use it on the web, your phone, the desktop app, and Cowork.

**[Add to Claude](https://claude.ai/customize/connectors?modal=add-custom-connector&connectorName=Spacefast&connectorUrl=https%3A%2F%2Fmcp.spacefast.com)**

1. Add the connector, then choose Connect.
2. Sign in to Spacefast and approve access.
3. Turn Spacefast on for the conversation you want to use it in.

On a Team or Enterprise plan, an owner has to add the connector first.

If nothing happens, add the endpoint in Claude yourself:

```text
https://mcp.spacefast.com
```

## Other ways to connect

**Add the Spacefast plugin.** Adds the Spacefast connector and its skills to your Claude account, for chat, Cowork, and Claude Code.

```text
spacefast/plugins
```

1. In Claude, open Customize → Plugins, then choose Add → Add marketplace → Add from a repository.
2. Paste spacefast/plugins and add the marketplace.
3. Select the Spacefast plugin, then choose Add.
4. Sign in to Spacefast and approve access when Claude asks. If Claude says the Spacefast connector isn't connected, add the connector as well.

Plugins need a paid Claude plan. On a Team or Enterprise plan, an owner may limit which marketplaces you can add.

Prefer to hand this off? Copy setup prompt:

```text
Fetch https://spacefast.com/setup.md
```

Give the agent one prompt that lets it choose and complete the best setup lane.

[Agent documentation](/agents/) · [Claude documentation](https://claude.com/docs/connectors/building/directory-vs-custom)
