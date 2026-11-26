---
title: "Connect Antigravity to Spacefast"
description: "Add Spacefast to Antigravity so its agent can publish what you build."
seo:
  canonical: "https://spacefast.com/docs/agents/antigravity/"
---

Add Spacefast to Antigravity so its agent can publish what you build.

**Install from the Antigravity Marketplace** ([Official listing](/connect/marketplace/)). Installs Spacefast from Antigravity's Marketplace, with its skills and the hosted connection. In the app, it's under Customizations → Marketplace.

```bash
agy plugin install spacefast@antigravity-plugins-partners
```

1. Open Customizations → Installed and choose Authenticate next to Spacefast.
2. Sign in to Spacefast and approve access.

Marketplace installs need you signed in to Antigravity.

## Other ways to connect

**Install the Spacefast plugin** ([Spacefast plugin](/connect/plugin/)). Installs the same plugin straight from the Spacefast GitHub repo, for an Antigravity that isn't signed in.

```bash
agy plugin install https://github.com/spacefast/plugins
```

1. Open Customizations → Installed and choose Authenticate next to Spacefast.
2. Sign in to Spacefast and approve access.

**Configure `~/.gemini/config/mcp_config.json`** ([Hosted MCP server](/connect/hosted-mcp/)). One entry in Antigravity's MCP config connects Spacefast.

```json
{
  "mcpServers": {
    "spacefast": {
      "serverUrl": "https://mcp.spacefast.com"
    }
  }
}
```

1. Add the entry above to `~/.gemini/config/mcp_config.json`, keeping what's already in the file.
2. Open Customizations → Installed and choose Authenticate next to Spacefast.
3. Sign in to Spacefast and approve access.

**Install just the skill** ([Skill only](/connect/skill/)). Teaches your agent how to publish with Spacefast and adds nothing else. The lightest option.

```bash
npx -y skills add https://github.com/spacefast/plugins/tree/main/skills/spacefast -y
```

Prefer to hand this off? Copy setup prompt:

```text
Fetch https://spacefast.com/setup.md
```

Give the agent one prompt that lets it choose and complete the best setup lane.

[Compare every way to connect](/connect/compare/)

[Agent documentation](/agents/) · [Antigravity documentation](https://antigravity.google/docs/mcp)
