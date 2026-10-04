---
title: "Connect OpenClaw to Spacefast"
description: "Give OpenClaw the Spacefast setup guide, or install its skill with the CLI."
seo:
  canonical: "https://spacefast.com/setup/openclaw/"
---

Give OpenClaw the Spacefast setup guide, or install its skill with the CLI.

**Copy setup prompt.** Give the agent one prompt that lets it choose and complete the best setup lane.

```text
Fetch https://spacefast.com/setup.md
```

## Other ways to connect

**Set up with the Spacefast CLI.** Install the CLI once, then let it install the Spacefast skill for this agent.

```bash
npm install -g spacefast && sf setup agent --agent openclaw
```

**Set up without installing.** Install the Spacefast skill without a global CLI install.

```bash
npx -y spacefast setup agent --agent openclaw -y
```

**Push to deploy.** Set SPACEFAST_GIT_REMOTE to the existing Space's returned git.remoteUrl. If it is null, use its configured source workflow. Store the key in a Git credential helper with username t. Keep credentials out of the remote URL. Check the deployment receipt before reporting success.

```bash
git remote add spacefast "$SPACEFAST_GIT_REMOTE" && git -c credential.username=t push spacefast HEAD:main
```

[Agent documentation](/agents) · [OpenClaw documentation](https://docs.openclaw.ai/tools/skills)
