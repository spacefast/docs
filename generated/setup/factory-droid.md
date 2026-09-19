---
title: "Connect Factory Droid to Spacefast"
description: "Install Spacefast as a Droid plugin or native OAuth MCP server."
seo:
  canonical: "https://spacefast.com/setup/factory-droid/"
---

Install Spacefast as a Droid plugin or native OAuth MCP server.

**Install the Spacefast plugin.** Add the Spacefast marketplace to Droid and install the plugin. Run /mcp inside Droid to finish OAuth, then droid mcp list to check the connection.

```bash
droid plugin marketplace add spacefast/plugins && droid plugin install spacefast@spacefast
```

## Other ways to connect

**Set up with the Spacefast CLI.** Install the CLI once, then let it write MCP config, install the skill, and sign you in.

```bash
npm install -g spacefast && sf setup agent --agent factory-droid
```

**Set up without installing.** Set up MCP, skills, and authentication without a global CLI install.

```bash
npx -y spacefast setup agent --agent factory-droid -y
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

[Agent documentation](/agents) · [Factory Droid documentation](https://docs.factory.ai/harness/mcp)
