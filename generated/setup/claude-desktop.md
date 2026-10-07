---
title: "Connect Claude Desktop to Spacefast"
description: "Add Spacefast to the Claude desktop app on this computer."
seo:
  canonical: "https://spacefast.com/setup/claude-desktop/"
---

Add Spacefast to the Claude desktop app on this computer.

**Download desktop extension.** A signed extension for the desktop app. Download it, then double-click the file.

[Download desktop extension](https://github.com/spacefast/plugins/releases/latest/download/claude-desktop.mcpb)

1. Confirm the install.
2. Sign in to Spacefast and approve access when asked.

## Other ways to connect

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

Prefer to hand this off? Copy setup prompt:

```text
Fetch https://spacefast.com/setup.md
```

Give the agent one prompt that lets it choose and complete the best setup lane.

[Agent documentation](/agents) · [Claude Desktop documentation](https://github.com/modelcontextprotocol/mcpb)
