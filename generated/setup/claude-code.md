---
title: "Connect Claude Code to Spacefast"
description: "Add Spacefast to Claude Code so it can publish what you build."
seo:
  canonical: "https://spacefast.com/setup/claude-code/"
---

Add Spacefast to Claude Code so it can publish what you build.

**Install the Spacefast plugin.** Adds Spacefast to Claude Code with everything it needs to publish.

```bash
claude plugin marketplace add spacefast/plugins && claude plugin install spacefast@spacefast
```

## Other ways to connect

**Use the Spacefast CLI.** Sets up this agent and signs you in. You also get the `sf` command to publish from the terminal yourself.

```bash
npm install -g spacefast && sf setup agent --agent claude-code
```

**Set it up without installing the CLI.** The same setup as the CLI, without keeping the CLI installed afterwards.

```bash
npx -y spacefast setup agent --agent claude-code -y
```

**Install with npx plugins.** Install the plugin with the universal installer — nothing to install first.

```bash
npx -y plugins add spacefast/plugins -t claude-code -y
```

**Install just the skill.** Teaches your agent how to publish with Spacefast and adds nothing else. The lightest option.

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
