---
title: "Connect Hermes to Spacefast"
description: "Give Hermes the Spacefast setup guide, or install its skill with the CLI."
seo:
  canonical: "https://spacefast.com/setup/hermes/"
---

Give Hermes the Spacefast setup guide, or install its skill with the CLI.

**Copy setup prompt.** Give the agent one prompt that lets it choose and complete the best setup lane.

```text
Fetch https://spacefast.com/setup.md
```

## Other ways to connect

**Set up with the Spacefast CLI.** Install the CLI once, then let it install the Spacefast skill for this agent.

```bash
npm install -g spacefast && sf setup agent --agent hermes
```

**Set up without installing.** Install the same Spacefast skill in one shot, with nothing left behind.

```bash
npx -y spacefast setup agent --agent hermes -y
```

**Push to deploy.** Push to deploy — output returns your live and claim links.

```bash
git remote add spacefast https://t:{{token}}@git.spacefast.com/{{space}}.git && git push spacefast main
```

[Agent documentation](/agents) · [Hermes documentation](https://github.com/NousResearch/hermes-agent/blob/main/website/docs/guides/work-with-skills.md)
