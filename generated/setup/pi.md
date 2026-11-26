---
title: "Connect Pi to Spacefast"
description: "Add Spacefast to Pi as an MCP server, or add the Spacefast skill."
seo:
  canonical: "https://spacefast.com/docs/agents/pi/"
---

Add Spacefast to Pi as an MCP server, or add the Spacefast skill.

**Run Spacefast MCP on this computer** ([MCP on your computer (stdio)](/connect/stdio-mcp/)). Starts the Spacefast MCP server on your computer with npx. The first tool call signs you in.

```bash
pi mcp add spacefast -- npx -y spacefast mcp
```

1. Run `pi mcp list` to check the server. Adding it doesn't connect it yet.
2. Use any Spacefast tool. Sign in to Spacefast in the browser window that opens.

## Other ways to connect

**Install just the skill** ([Skill only](/connect/skill/)). Teaches your agent how to publish with Spacefast and adds nothing else. The lightest option.

```bash
npx -y skills add https://github.com/spacefast/plugins/tree/main/skills/spacefast -y
```

**Use the Spacefast CLI** ([Spacefast CLI](/connect/cli-setup/)). Adds the Spacefast skill for this agent. You also get the `sf` command to publish from the terminal yourself.

```bash
npm install -g spacefast && sf setup agent --agent pi
```

**Set it up without installing the CLI** ([Spacefast CLI](/connect/cli-setup/)). Adds the Spacefast skill without keeping the CLI installed afterwards.

```bash
npx -y spacefast setup agent --agent pi -y
```

**Push to deploy** ([Git push](/connect/git-push/)). Set SPACEFAST_GIT_REMOTE to the existing Space's returned git.remoteUrl. If it is null, use its configured source workflow. Store the key in a Git credential helper with username t. Keep credentials out of the remote URL. Check the deployment receipt before reporting success.

```bash
git remote add spacefast "$SPACEFAST_GIT_REMOTE" && git -c credential.username=t push spacefast HEAD:main
```

Prefer to hand this off? Copy setup prompt:

```text
Fetch https://spacefast.com/setup.md
```

Give the agent one prompt that lets it choose and complete the best setup lane.

[Compare every way to connect](/connect/compare/)

[Agent documentation](/agents/) · [Pi documentation](https://github.com/earendil-works/pi/blob/main/packages/coding-agent/docs/skills.md)
