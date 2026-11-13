---
title: "Connect Claude Desktop to Spacefast"
description: "Add Spacefast to the Claude desktop app on this computer."
seo:
  canonical: "https://spacefast.com/docs/setup/claude-desktop/"
---

Add Spacefast to the Claude desktop app on this computer.

**Add a connector on claude.ai.** Set it up once in your Claude account, and it works in the desktop app, on the web, and on your phone.

```text
https://mcp.spacefast.com
```

1. On claude.ai, open Customize → Connectors, then choose + → Add custom connector.
2. Name it Spacefast and paste the address above as its URL.
3. Add the connector, then choose Connect.
4. Sign in to Spacefast and approve access.
5. Turn Spacefast on for the conversation you want to use it in.

On a Team or Enterprise plan, an owner has to add the connector first.

## Other ways to connect

**Add the Spacefast plugin.** Add it once to your Claude account. It works in the Chat and Cowork tabs and in Claude Code, with nothing to install on this computer.

```text
spacefast/plugins
```

1. In Claude, open Customize → Plugins, then choose Add → Add marketplace → Add from a repository.
2. Paste spacefast/plugins and add the marketplace.
3. Select the Spacefast plugin, then choose Add.
4. Sign in to Spacefast and approve access when Claude asks. If Claude says the Spacefast connector isn't connected, add the connector as well.

Plugins need a paid Claude plan. On a Team or Enterprise plan, an owner may limit which marketplaces you can add.

**Download desktop extension.** An extension that runs Spacefast on this computer. It needs Node.js with npx installed where the desktop app can find it.

[Download desktop extension](https://github.com/spacefast/plugins/releases/latest/download/claude-desktop.mcpb)

1. Download the file, then double-click it and confirm the install.
2. Paste a Spacefast API key, or leave it blank to publish anonymously and claim the Space later.

Prefer to hand this off? Copy setup prompt:

```text
Fetch https://spacefast.com/setup.md
```

Give the agent one prompt that lets it choose and complete the best setup lane.

[Agent documentation](/agents/) · [Claude Desktop documentation](https://github.com/modelcontextprotocol/mcpb)
