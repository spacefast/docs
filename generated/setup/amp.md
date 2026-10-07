---
title: "Connect Amp to Spacefast"
description: "Add Spacefast to Amp so it can publish what you build."
seo:
  canonical: "https://spacefast.com/setup/amp/"
---

Add Spacefast to Amp so it can publish what you build.

**Use the Spacefast CLI.** Sets up this agent and signs you in. You also get the `sf` command to publish from the terminal yourself.

```bash
npm install -g spacefast && sf setup agent --agent amp
```

## Other ways to connect

**Configure `~/.config/amp/settings.json`.** Add Spacefast to your Amp user settings by hand.

```json
{
  "amp.mcpServers": {
    "spacefast": {
      "url": "https://mcp.spacefast.com"
    }
  }
}
```

1. Add the entry above to `~/.config/amp/settings.json`, keeping what's already in the file.
2. Start Amp in your terminal.
3. Sign in to Spacefast in the browser and approve access.
4. Run `amp mcp doctor` to check the connection.

These settings only cover this computer, so use Amp's remote MCP settings for orbs.

**Set it up without installing the CLI.** The same setup as the CLI, without keeping the CLI installed afterwards.

```bash
npx -y spacefast setup agent --agent amp -y
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

[Agent documentation](/agents) · [Amp documentation](https://ampcode.com/docs/customize/mcp)
