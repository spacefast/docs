---
title: "Connect Devin Cloud to Spacefast"
description: "Connect Spacefast to Devin Cloud through Customize → MCPs."
seo:
  canonical: "https://spacefast.com/setup/devin-cloud/"
---

Connect Spacefast to Devin Cloud through Customize → MCPs.

**Add the hosted MCP server.** Add Spacefast with HTTP transport and OAuth authentication. Choose Personal access for your own account, or Organization only when shared access is intended. Save, choose Connect, complete OAuth, and use Test listing tools before starting a session. Adding a custom server requires Manage MCP Servers permission.

```text
https://mcp.spacefast.com
```

## Other ways to connect

**Install the Spacefast skill.** Install publish and hosting guidance using the Agent Skills standard.

```bash
npx -y skills add https://github.com/spacefast/plugins/tree/main/skills/spacefast -y
```

Prefer to hand this off? Copy setup prompt:

```text
Fetch https://spacefast.com/setup.md
```

Give the agent one prompt that lets it choose and complete the best setup lane.

[Agent documentation](/agents) · [Devin Cloud documentation](https://docs.devin.ai/work-with-devin/mcp)
