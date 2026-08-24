---
title: "Connect GitHub Copilot to Spacefast"
description: "Publish from Copilot CLI and coding agent with native plugin and MCP support."
seo:
  noindex: true
---

Publish from Copilot CLI and coding agent with native plugin and MCP support.

**Install the Spacefast plugin.** Install the plugin's skills and MCP into Copilot with nothing installed first.

```bash
npx -y plugins@1.3.4 add spacefast/plugins -t github-copilot -y
```

## Other ways to connect

**Install from the plugin marketplace — Soon.** The public marketplace listing is not live yet.

Use the working manual option below while the directory listing is in review.

**Set up with the Spacefast CLI.** Install the CLI once, then let it write MCP config, install the skill, and sign you in.

```bash
npm install -g spacefast && sf setup agent --agent github-copilot
```

**Set up without installing.** One-shot setup with no global install — same work, nothing left behind.

```bash
npx -y spacefast@0.0.26 setup agent --agent github-copilot -y
```

**Connect hosted MCP.** Connect the hosted Spacefast MCP server and sign in in the browser.

```bash
copilot mcp add --transport http spacefast https://mcp.spacefast.com
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

[Agent documentation](/agents) · [GitHub Copilot documentation](https://docs.github.com/copilot/customizing-copilot/extending-copilot-chat-with-mcp)
