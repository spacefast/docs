---
title: "Connect Devin Cloud to Spacefast"
description: "Connect Spacefast in Devin's cloud-only integrations plane."
seo:
  noindex: true
---

Connect Spacefast in Devin's cloud-only integrations plane.

**Add the hosted MCP server.** Paste the Spacefast endpoint into Settings → Connections → MCP servers → Add custom MCP and approve OAuth in the browser.

```text
https://mcp.spacefast.com
```

## Other ways to connect

**Install the Spacefast skill.** Install publish and hosting guidance using the Agent Skills standard.

```bash
npx -y skills@1.5.23 add https://spacefast.com/SKILL.md -y
```

Prefer to hand this off? Copy setup prompt:

```text
Fetch https://spacefast.com/setup.md and set up Spacefast.
```

Give the agent one prompt that lets it choose and complete the best setup lane.

[Agent documentation](/agents) · [Devin Cloud documentation](https://docs.devin.ai/integrations/mcp)
