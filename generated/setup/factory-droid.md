---
title: "Connect Factory Droid to Spacefast"
description: "Install Spacefast as a Droid plugin or native OAuth MCP server."
seo:
  canonical: "https://spacefast.com/setup/factory-droid/"
---

Install Spacefast as a Droid plugin or native OAuth MCP server.

**Install the Spacefast plugin.** Add the Spacefast marketplace to Droid and install the plugin.

```bash
droid plugin marketplace add spacefast/plugins && droid plugin install spacefast@spacefast
```

## Other ways to connect

**Set up with the Spacefast CLI.** Install the CLI once, then let it write MCP config, install the skill, and sign you in.

```bash
npm install -g spacefast && sf setup agent --agent factory-droid
```

**Set up without installing.** One-shot setup with no global install — same work, nothing left behind.

```bash
npx -y spacefast@0.0.26 setup agent --agent factory-droid -y
```

**Connect hosted MCP.** Connect the hosted Spacefast MCP server and sign in through the browser.

```bash
droid mcp add spacefast https://mcp.spacefast.com --type http
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

[Agent documentation](/agents) · [Factory Droid documentation](https://docs.factory.ai/cli/configuration/mcp)
