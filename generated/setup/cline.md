---
title: "Connect Cline to Spacefast"
description: "Install Spacefast from the Cline marketplace or connect OAuth MCP."
seo:
  canonical: "https://spacefast.com/setup/cline/"
---

Install Spacefast from the Cline marketplace or connect OAuth MCP.

**Configure ~/.cline/data/settings/cline_mcp_settings.json.** Merge the hosted Spacefast server into the client MCP configuration.

```json
{
  "mcpServers": {
    "spacefast": {
      "type": "http",
      "url": "https://mcp.spacefast.com"
    }
  }
}
```

## Other ways to connect

**Install from the plugin marketplace — Soon.** The public marketplace listing is not live yet.

Use the working manual option below while the directory listing is in review.

**Set up with the Spacefast CLI.** Install the CLI once, then let it write MCP config, install the skill, and sign you in.

```bash
npm install -g spacefast && sf setup agent --agent cline
```

**Set up without installing.** One-shot setup with no global install — same work, nothing left behind.

```bash
npx -y spacefast@0.0.26 setup agent --agent cline -y
```

**Install the Spacefast skill.** Install publish and hosting guidance using the Agent Skills standard.

```bash
npx -y skills@1.5.23 add https://spacefast.com/SKILL.md -y
```

**Push to deploy.** Push to deploy — output returns your live and claim links.

```bash
git remote add spacefast https://t:{{token}}@push.new/{{space}}.git && git push spacefast main
```

Prefer to hand this off? Copy setup prompt:

```text
Fetch https://spacefast.com/setup.md and set up Spacefast.
```

Give the agent one prompt that lets it choose and complete the best setup lane.

[Agent documentation](/agents) · [Cline documentation](https://docs.cline.bot/mcp)
