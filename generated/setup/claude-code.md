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

**Set up without installing.** Set up MCP, skills, and authentication without a global CLI install.

```bash
npx -y spacefast setup agent --agent claude-code -y
```

**Install with npx plugins.** Install the plugin with the universal installer — nothing to install first.

```bash
npx -y plugins add spacefast/plugins -t claude-code -y
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

[Agent documentation](/agents) · [Claude Code documentation](https://code.claude.com/docs/en/mcp)
