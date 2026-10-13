---
title: "Connect OpenClaw to Spacefast"
description: "Give OpenClaw one prompt and it sets up Spacefast itself, or add the skill from your terminal."
seo:
  canonical: "https://spacefast.com/setup/openclaw/"
---

Give OpenClaw one prompt and it sets up Spacefast itself, or add the skill from your terminal.

**Copy setup prompt.** Give the agent one prompt that lets it choose and complete the best setup lane.

```text
Fetch https://spacefast.com/setup.md
```

## Other ways to connect

**Use the Spacefast CLI.** Adds the Spacefast skill for this agent. You also get the `sf` command to publish from the terminal yourself.

```bash
npm install -g spacefast && sf setup agent --agent openclaw
```

**Set it up without installing the CLI.** Adds the Spacefast skill without keeping the CLI installed afterwards.

```bash
npx -y spacefast setup agent --agent openclaw -y
```

**Push to deploy.** Set SPACEFAST_GIT_REMOTE to the existing Space's returned git.remoteUrl. If it is null, use its configured source workflow. Store the key in a Git credential helper with username t. Keep credentials out of the remote URL. Check the deployment receipt before reporting success.

```bash
git remote add spacefast "$SPACEFAST_GIT_REMOTE" && git -c credential.username=t push spacefast HEAD:main
```

[Agent documentation](/agents) · [OpenClaw documentation](https://docs.openclaw.ai/tools/skills)
