---
title: "Connect Pi to Spacefast"
description: "Publish from Pi with the Spacefast skill and direct HTTP API."
seo:
  canonical: "https://spacefast.com/setup/pi/"
---

Publish from Pi with the Spacefast skill and direct HTTP API.

**Install the Spacefast skill.** Install publish and hosting guidance using the Agent Skills standard.

```bash
npx -y skills add https://github.com/spacefast/plugins/tree/main/skills/spacefast -y
```

## Other ways to connect

**Set up with the Spacefast CLI.** Install the CLI once, then let it install the Spacefast skill for this agent.

```bash
npm install -g spacefast && sf setup agent --agent pi
```

**Set up without installing.** Install the Spacefast skill without a global CLI install.

```bash
npx -y spacefast setup agent --agent pi -y
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

[Agent documentation](/agents) · [Pi documentation](https://github.com/earendil-works/pi/blob/main/packages/coding-agent/README.md#skills)
