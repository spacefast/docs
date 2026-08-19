---
title: "Connect Pi to Spacefast"
description: "One skill install and Pi publishes from any session."
---

Install the skill once, and Pi publishes from any session.

**Skill.** The command installs the skill into `~/.agents/skills`, which Pi reads natively. Every later session knows the flow.

```bash
npx -y skills add spacefast/plugins --skill spacefast -g -y
```

[Agent documentation](/agents) · [Pi's skills docs](https://pi.dev/docs/latest/skills)
