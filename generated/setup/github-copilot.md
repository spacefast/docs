---
title: "Connect GitHub Copilot CLI to Spacefast"
description: "Add Spacefast to GitHub Copilot CLI so it can publish from your terminal."
seo:
  canonical: "https://spacefast.com/setup/github-copilot/"
---

Add Spacefast to GitHub Copilot CLI so it can publish from your terminal.

**Install the Spacefast plugin.** Adds Spacefast to Copilot CLI with everything it needs to publish.

```bash
npx -y plugins add spacefast/plugins -t github-copilot -y
```

1. Sign in to Spacefast and approve access when asked.
2. To reconnect later, run `/mcp auth spacefast`.

This doesn't cover Copilot cloud agent, which uses its own repository configuration and doesn't support signing in to remote MCP servers.

## Other ways to connect

**Install from the plugin marketplace — Soon.** The public marketplace listing is not live yet.

Use the working manual option below while the directory listing is in review.

**Use the Spacefast CLI.** Sets up this agent and signs you in. You also get the `sf` command to publish from the terminal yourself.

```bash
npm install -g spacefast && sf setup agent --agent github-copilot
```

**Set it up without installing the CLI.** The same setup as the CLI, without keeping the CLI installed afterwards.

```bash
npx -y spacefast setup agent --agent github-copilot -y
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

[Agent documentation](/agents) · [GitHub Copilot CLI documentation](https://docs.github.com/en/copilot/how-tos/copilot-cli/customize-copilot/add-mcp-servers)
