---
title: "Connect OpenCode to Spacefast"
description: "Connect Spacefast to OpenCode with native OAuth MCP and skills."
seo:
  canonical: "https://spacefast.com/setup/opencode/"
---

Connect Spacefast to OpenCode with native OAuth MCP and skills.

**Configure ~/.config/opencode/opencode.json.** Merge the hosted Spacefast server into the client MCP configuration.

```json
{
  "mcp": {
    "spacefast": {
      "enabled": true,
      "type": "remote",
      "url": "https://mcp.spacefast.com"
    }
  }
}
```

## Other ways to connect

**Set up with the Spacefast CLI.** Install the CLI once, then let it write MCP config, install the skill, and sign you in.

```bash
npm install -g spacefast && sf setup agent --agent opencode
```

**Set up without installing.** One-shot setup with no global install — same work, nothing left behind.

```bash
npx -y spacefast@0.0.26 setup agent --agent opencode -y
```

**Connect hosted MCP.** Connect the hosted Spacefast MCP server and sign in through the browser.

```bash
opencode mcp add spacefast --url https://mcp.spacefast.com
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

[Agent documentation](/agents) · [OpenCode documentation](https://opencode.ai/docs/mcp-servers)
