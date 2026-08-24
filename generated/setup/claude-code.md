---
title: "Connect Claude Code to Spacefast"
description: "Publish, host, and operate Spacefast artifacts from Claude Code."
seo:
  canonical: "https://spacefast.com/setup/claude-code/"
---

Publish, host, and operate Spacefast artifacts from Claude Code.

**Install the Spacefast plugin.** Add the Spacefast marketplace and install the plugin with Claude Code itself.

```bash
claude plugin marketplace add spacefast/plugins && claude plugin install spacefast@spacefast
```

## Other ways to connect

**Set up with the Spacefast CLI.** Install the CLI once, then let it write MCP config, install the skill, and sign you in.

```bash
npm install -g spacefast && sf setup agent --agent claude-code
```

**Set up without installing.** One-shot setup with no global install — same work, nothing left behind.

```bash
npx -y spacefast@0.0.26 setup agent --agent claude-code -y
```

**Install with npx plugins.** Install the plugin with the universal installer — nothing to install first.

```bash
npx -y plugins@1.3.4 add spacefast/plugins -t claude-code -y
```

**Connect hosted MCP.** Connect the hosted Spacefast MCP server and sign in through the browser.

```bash
claude mcp add --transport http spacefast https://mcp.spacefast.com
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

[Agent documentation](/agents) · [Claude Code documentation](https://docs.anthropic.com/en/docs/claude-code/mcp)
