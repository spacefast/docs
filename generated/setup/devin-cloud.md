---
title: "Connect Devin Cloud to Spacefast"
description: "Add Spacefast to Devin Cloud so your sessions can publish what you build."
seo:
  canonical: "https://spacefast.com/setup/devin-cloud/"
---

Add Spacefast to Devin Cloud so your sessions can publish what you build.

**Add Spacefast as a custom MCP.** Set it up from Devin's Customize page, for just you or your whole organization.

```text
https://mcp.spacefast.com
```

1. Open Customize → MCPs, then choose Add MCP → Add custom MCP.
2. Name it Spacefast and paste the address above.
3. Choose HTTP transport and OAuth authentication.
4. Choose Personal access for your own account, or Organization only if you want to share it.
5. Save, then choose Connect.
6. Sign in to Spacefast and approve access.
7. Use Test listing tools before you start a session.

You need the Manage MCP Servers permission to add a custom MCP.

## Other ways to connect

**Install just the skill.** Teaches your agent how to publish with Spacefast and adds nothing else. The lightest option.

```bash
npx -y skills add https://github.com/spacefast/plugins/tree/main/skills/spacefast -y
```

Prefer to hand this off? Copy setup prompt:

```text
Fetch https://spacefast.com/setup.md
```

Give the agent one prompt that lets it choose and complete the best setup lane.

[Agent documentation](/agents) · [Devin Cloud documentation](https://docs.devin.ai/work-with-devin/mcp)
