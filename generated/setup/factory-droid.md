---
title: "Connect Factory Droid to Spacefast"
description: "Add Spacefast to Factory Droid so it can publish what you build."
seo:
  canonical: "https://spacefast.com/setup/factory-droid/"
---

Add Spacefast to Factory Droid so it can publish what you build.

**Install the Spacefast plugin.** Adds Spacefast to Droid with everything it needs to publish.

```bash
droid plugin marketplace add spacefast/plugins && droid plugin install spacefast@spacefast
```

1. Run `/mcp` inside Droid.
2. Sign in to Spacefast and approve access.
3. Run `droid mcp list` to check the connection.

## Other ways to connect

**Use the Spacefast CLI.** Sets up this agent and signs you in. You also get the `sf` command to publish from the terminal yourself.

```bash
npm install -g spacefast && sf setup agent --agent factory-droid
```

**Set it up without installing the CLI.** The same setup as the CLI, without keeping the CLI installed afterwards.

```bash
npx -y spacefast setup agent --agent factory-droid -y
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

[Agent documentation](/agents) · [Factory Droid documentation](https://docs.factory.ai/harness/mcp)
