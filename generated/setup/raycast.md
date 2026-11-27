---
title: "Connect Raycast to Spacefast"
description: "Add Spacefast to Raycast AI and call it with @Spacefast."
seo:
  canonical: "https://spacefast.com/docs/setup/raycast/"
---

Add Spacefast to Raycast AI and call it with @Spacefast.

**Add Spacefast in Raycast** ([Hosted MCP server](/connect/hosted-mcp/)). Raycast's own Install MCP Server command connects Spacefast to Raycast AI.

```text
https://mcp.spacefast.com
```

1. Run Install MCP Server.
2. Name it Spacefast, choose HTTP, and paste the address above.
3. Choose Dynamic for OAuth Type, then install the server.
4. Choose Sign In and approve access.
5. Use @Spacefast in Raycast AI to select its tools.

You need Raycast Pro for this.

Prefer to hand this off? Copy setup prompt:

```text
Fetch https://spacefast.com/setup.md
```

Give the agent one prompt that lets it choose and complete the best setup lane.

## Plan limits

- **Free:** No AI and no MCP servers. Raycast AI and MCP need Pro, Teams Pro or Enterprise. ([source](https://www.raycast.com/pricing), checked 2026-11-14)

[Compare every way to connect](/connect/compare/)

[Agent documentation](/agents/) · [Raycast documentation](https://manual.raycast.com/ai/model-context-protocol)
