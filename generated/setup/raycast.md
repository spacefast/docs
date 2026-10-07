---
title: "Connect Raycast to Spacefast"
description: "Add Spacefast to Raycast AI and call it with @Spacefast."
seo:
  canonical: "https://spacefast.com/setup/raycast/"
---

Add Spacefast to Raycast AI and call it with @Spacefast.

**Add Spacefast in Raycast.** Raycast's own Install MCP Server command connects Spacefast to Raycast AI.

```text
https://mcp.spacefast.com
```

1. Run Install MCP Server.
2. Choose HTTP and paste the address above.
3. Choose Dynamic for OAuth Type, then install the server.
4. Choose Sign In and approve access.
5. Use @Spacefast in Raycast AI to select its tools.

You need Raycast Pro for this.

Prefer to hand this off? Copy setup prompt:

```text
Fetch https://spacefast.com/setup.md
```

Give the agent one prompt that lets it choose and complete the best setup lane.

[Agent documentation](/agents) · [Raycast documentation](https://manual.raycast.com/ai/model-context-protocol)
