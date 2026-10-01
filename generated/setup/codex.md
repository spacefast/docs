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

**Configure `~/.codex/config.toml`.** Merge this server into your config. Run `codex mcp login spacefast` and approve OAuth. Restart the client or start a new CLI session. Use `/mcp` to check that Spacefast tools are available.

```toml
[mcp_servers.spacefast]
url = "https://mcp.spacefast.com"
```

**Set up with the Spacefast CLI.** Install the CLI once, then let it write MCP config, install the skill, and sign you in.

```bash
npm install -g spacefast && sf setup agent --agent codex
```

**Set up without installing.** Set up MCP, skills, and authentication without a global CLI install.

```bash
npx -y spacefast setup agent --agent codex -y
```

**Install with npx plugins.** Install the plugin with the universal installer — nothing to install first.

```bash
npx -y plugins add spacefast/plugins -t codex -y
```

**Install the Spacefast skill.** Install publish and hosting guidance using the Agent Skills standard.

```bash
npx -y skills add https://github.com/spacefast/plugins/tree/main/skills/spacefast -y
```

**Push to deploy.** Set SPACEFAST_GIT_REMOTE to the existing Space's returned git.remoteUrl. If it is null, use its configured source workflow. Store the key in a Git credential helper with username t. Keep credentials out of the remote URL. Check the deployment receipt before reporting success.

```bash
git remote add spacefast "$SPACEFAST_GIT_REMOTE" && git -c credential.username=t push spacefast HEAD:main
```

Prefer to hand this off? Copy setup prompt:

```text
Fetch https://spacefast.com/setup.md
```

Give the agent one prompt that lets it choose and complete the best setup lane.

[Agent documentation](/agents) · [Codex documentation](https://learn.chatgpt.com/docs/extend/mcp?surface=cli)
