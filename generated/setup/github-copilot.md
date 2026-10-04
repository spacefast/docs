---
title: "Connect GitHub Copilot CLI to Spacefast"
description: "Publish from GitHub Copilot CLI with its plugin and MCP support."
seo:
  canonical: "https://spacefast.com/setup/github-copilot/"
---

Publish from GitHub Copilot CLI with its plugin and MCP support.

**Install the Spacefast plugin.** Install the plugin's skills and MCP into Copilot CLI. Complete MCP OAuth when prompted; use `/mcp auth spacefast` to reconnect. Copilot cloud agent uses separate repository configuration and does not support remote MCP OAuth.

```bash
npx -y plugins add spacefast/plugins -t github-copilot -y
```

## Other ways to connect

**Install from the plugin marketplace — Soon.** The public marketplace listing is not live yet.

Use the working manual option below while the directory listing is in review.

**Set up with the Spacefast CLI.** Install the CLI once, then let it write MCP config, install the skill, and sign you in.

```bash
npm install -g spacefast && sf setup agent --agent github-copilot
```

**Set up without installing.** Set up MCP, skills, and authentication without a global CLI install.

```bash
npx -y spacefast setup agent --agent github-copilot -y
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

[Agent documentation](/agents) · [GitHub Copilot CLI documentation](https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/add-mcp-servers)
