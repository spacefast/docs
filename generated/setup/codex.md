---
title: "Connect Codex to Spacefast"
description: "Publish and host from Codex locally or in the cloud."
seo:
  canonical: "https://spacefast.com/setup/codex/"
---

Publish and host from Codex locally or in the cloud.

**Install the Spacefast plugin.** Add the Spacefast marketplace and install the plugin with Codex itself.

```bash
codex plugin marketplace add spacefast/plugins && codex plugin add spacefast@spacefast
```

## Other ways to connect

**Configure ~/.codex/config.toml.** Merge the hosted Spacefast server into the client MCP configuration.

```toml
[mcp_servers.spacefast]
url = "https://mcp.spacefast.com"
```

**Set up with the Spacefast CLI.** Install the CLI once, then let it write MCP config, install the skill, and sign you in.

```bash
npm install -g spacefast && sf setup agent --agent codex
```

**Set up without installing.** One-shot setup with no global install — same work, nothing left behind.

```bash
npx -y spacefast@0.0.26 setup agent --agent codex -y
```

**Install with npx plugins.** Install the plugin with the universal installer — nothing to install first.

```bash
npx -y plugins@1.3.4 add spacefast/plugins -t codex -y
```

**Connect hosted MCP.** Connect the hosted Spacefast MCP server and sign in through the browser.

```bash
codex mcp add spacefast --url https://mcp.spacefast.com && codex mcp login spacefast
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

[Agent documentation](/agents) · [Codex documentation](https://developers.openai.com/codex/mcp)
