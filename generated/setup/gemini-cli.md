---
title: "Connect Gemini CLI to Spacefast"
description: "Use the Spacefast extension, skills, and OAuth MCP from Gemini CLI."
seo:
  canonical: "https://spacefast.com/setup/gemini-cli/"
---

Use the Spacefast extension, skills, and OAuth MCP from Gemini CLI.

**Configure ~/.gemini/settings.json.** Merge the hosted Spacefast server into the client MCP configuration.

```json
{
  "mcpServers": {
    "spacefast": {
      "httpUrl": "https://mcp.spacefast.com",
      "oauth": {
        "enabled": true
      }
    }
  }
}
```

## Other ways to connect

**Install from the plugin marketplace — Soon.** The public marketplace listing is not live yet.

Use the working manual option below while the directory listing is in review.

**Set up with the Spacefast CLI.** Install the CLI once, then let it write MCP config, install the skill, and sign you in.

```bash
npm install -g spacefast && sf setup agent --agent gemini-cli
```

**Set up without installing.** One-shot setup with no global install — same work, nothing left behind.

```bash
npx -y spacefast setup agent --agent gemini-cli -y
```

**Install the Spacefast skill.** Install publish and hosting guidance using the Agent Skills standard.

```bash
npx -y skills add https://spacefast.com/SKILL.md -y
```

**Push to deploy.** Push to deploy — output returns your live and claim links.

```bash
git remote add spacefast https://t:{{token}}@git.spacefast.com/{{space}}.git && git push spacefast main
```

Prefer to hand this off? Copy setup prompt:

```text
Fetch https://spacefast.com/setup.md
```

Give the agent one prompt that lets it choose and complete the best setup lane.

[Agent documentation](/agents) · [Gemini CLI documentation](https://geminicli.com/docs/tools/mcp-server)
