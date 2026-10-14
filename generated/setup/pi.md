---
title: "Connect Pi to Spacefast"
description: "Add the Spacefast skill to Pi so it can publish through the Spacefast API."
seo:
  canonical: "https://spacefast.com/setup/pi/"
---

Add the Spacefast skill to Pi so it can publish through the Spacefast API.

**Install just the skill.** Teaches your agent how to publish with Spacefast and adds nothing else. The lightest option.

```bash
npx -y skills add https://github.com/spacefast/plugins/tree/main/skills/spacefast -y
```

## Other ways to connect

**Use the Spacefast CLI.** Adds the Spacefast skill for this agent. You also get the `sf` command to publish from the terminal yourself.

```bash
npm install -g spacefast && sf setup agent --agent pi
```

**Set it up without installing the CLI.** Adds the Spacefast skill without keeping the CLI installed afterwards.

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
