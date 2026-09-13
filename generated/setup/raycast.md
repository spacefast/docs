---
title: "Connect Raycast to Spacefast"
description: "Connect Spacefast to Raycast AI using its native OAuth MCP form."
seo:
  canonical: "https://spacefast.com/setup/raycast/"
---

Connect Spacefast to Raycast AI using its native OAuth MCP form.

**Add the hosted MCP server.** Run Install MCP Server in Raycast. Select HTTP and enter the Spacefast endpoint. Select Dynamic for OAuth Type, install the server, then select Sign In and approve OAuth. Use @Spacefast in Raycast AI to select its tools. Raycast Pro is required.

```text
https://mcp.spacefast.com
```

Prefer to hand this off? Copy setup prompt:

```text
Fetch https://spacefast.com/setup.md
```

Give the agent one prompt that lets it choose and complete the best setup lane.

[Agent documentation](/agents) · [Raycast documentation](https://manual.raycast.com/ai/model-context-protocol)
