---
title: "Connect Claude Code to Spacefast"
description: "Add Spacefast to Claude Code so it can publish what you build."
seo:
  canonical: "https://spacefast.com/docs/agents/claude-code/"
---

Add Spacefast to Claude Code so it can publish what you build.

**[Add to Claude](https://claude.ai/directory/b0989c59-00b4-40db-a6d1-1e591ce2516c)** ([Official listing](/connect/marketplace/))

1. If the link opens a custom connector form, add the connector first. Then choose Connect.
2. Sign in to Spacefast and approve access.
3. Turn Spacefast on for the conversation you want to use it in.

On a Team or Enterprise plan, an owner has to add the connector first.

If nothing happens, add the endpoint in Claude Code yourself:

```text
https://mcp.spacefast.com
```

## Other ways to connect

**Install the Spacefast plugin** ([Spacefast plugin](/connect/plugin/)). Adds the Spacefast Claude Code plugin (local stdio MCP via npx -y spacefast mcp, skills, and project hook) in one install.

```bash
claude plugin marketplace add spacefast/plugins && claude plugin install spacefast-code@spacefast
```

1. Start a new Claude Code session so the plugin loads.
2. Ask Claude Code to publish a folder — sign in to Spacefast in the browser window that opens.

**Run Spacefast MCP on this computer** ([MCP on your computer (stdio)](/connect/stdio-mcp/)). Starts the Spacefast MCP server on your computer with npx. The first tool call signs you in.

```bash
claude mcp add --scope user --transport stdio spacefast -- npx -y spacefast mcp
```

1. Start a new Claude Code session and run `/mcp` to check that Spacefast is connected.
2. Use any Spacefast tool. Sign in to Spacefast in the browser window that opens.

**Install just the skill** ([Skill only](/connect/skill/)). Teaches your agent how to publish with Spacefast and adds nothing else. The lightest option.

```bash
npx -y skills add https://github.com/spacefast/plugins/tree/main/skills/spacefast -y
```

**Use the Spacefast CLI** ([Spacefast CLI](/connect/cli-setup/)). Sets up this agent and signs you in. You also get the `sf` command to publish from the terminal yourself.

```bash
npm install -g spacefast && sf setup agent --agent claude-code
```

**Set it up without installing the CLI** ([Spacefast CLI](/connect/cli-setup/)). The same setup as the CLI, without keeping the CLI installed afterwards.

```bash
npx -y spacefast setup agent --agent claude-code -y
```

**Install with npx plugins** ([Spacefast plugin](/connect/plugin/)). Install the plugin with the universal installer — nothing to install first.

```bash
npx -y plugins add spacefast/plugins -t claude-code -y
```

**Run in your terminal** ([Hosted MCP server](/connect/hosted-mcp/)). Run this command to add Spacefast.

```bash
claude mcp add --scope user --transport http spacefast 'https://mcp.spacefast.com'
```

1. Start a new Claude Code session and run `/mcp`.
2. Select Spacefast, then sign in and approve access.

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

[Agent documentation](/agents/) · [Claude Code documentation](https://code.claude.com/docs/en/mcp)
