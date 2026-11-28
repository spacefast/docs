---
title: "Connect Claude Code to Spacefast"
description: "Add Spacefast to Claude Code so it can publish what you build."
seo:
  canonical: "https://spacefast.com/docs/setup/claude-code/"
---

Add Spacefast to Claude Code so it can publish what you build.

**Run Spacefast MCP on this computer** (MCP on your computer (stdio)). Starts the Spacefast MCP server on your computer with npx. The first tool call signs you in.

```bash
claude mcp add --scope user --transport stdio spacefast -- npx -y spacefast mcp
```

1. Start a new Claude Code session and run `/mcp` to check that Spacefast is connected.
2. Use any Spacefast tool. Sign in to Spacefast in the browser window that opens.

## Other ways to connect

**Install the Spacefast plugin** (Spacefast plugin). Adds Spacefast to Claude Code with everything it needs to publish.

```bash
claude plugin marketplace add spacefast/plugins && claude plugin install spacefast@spacefast
```

**Add to Claude** (Directory connector). Add Spacefast to your Claude account. Claude Code signed in with that account gets it too.

[Add to Claude](https://claude.ai/directory/b0989c59-00b4-40db-a6d1-1e591ce2516c)

1. If the link opens a custom connector form, add the connector first. Then choose Connect.
2. Sign in to Spacefast and approve access.
3. Turn Spacefast on for the conversation you want to use it in.

On a Team or Enterprise plan, an owner has to add the connector first.

**Install just the skill** (Skill only). Teaches your agent how to publish with Spacefast and adds nothing else. The lightest option.

```bash
npx -y skills add https://github.com/spacefast/plugins/tree/main/skills/spacefast -y
```

**Use the Spacefast CLI** (Spacefast CLI). Sets up this agent and signs you in. You also get the `sf` command to publish from the terminal yourself.

```bash
npm install -g spacefast && sf setup agent --agent claude-code
```

**Set it up without installing the CLI** (Spacefast CLI). The same setup as the CLI, without keeping the CLI installed afterwards.

```bash
npx -y spacefast setup agent --agent claude-code -y
```

**Install with npx plugins** (Spacefast plugin). Install the plugin with the universal installer — nothing to install first.

```bash
npx -y plugins add spacefast/plugins -t claude-code -y
```

**Run in your terminal** (Hosted MCP server). Run this command to add Spacefast.

```bash
claude mcp add --scope user --transport http spacefast 'https://mcp.spacefast.com'
```

1. Start a new Claude Code session and run `/mcp`.
2. Select Spacefast, then sign in and approve access.

**Push to deploy** (Git push). Set SPACEFAST_GIT_REMOTE to the existing Space's returned git.remoteUrl. If it is null, use its configured source workflow. Store the key in a Git credential helper with username t. Keep credentials out of the remote URL. Check the deployment receipt before reporting success.

```bash
git remote add spacefast "$SPACEFAST_GIT_REMOTE" && git -c credential.username=t push spacefast HEAD:main
```

Prefer to hand this off? Copy setup prompt:

```text
Fetch https://spacefast.com/setup.md
```

Give the agent one prompt that lets it choose and complete the best setup lane.

[Agent documentation](/agents/) · [Claude Code documentation](https://code.claude.com/docs/en/mcp)
