---
title: "Connect Pi to Spacefast"
description: "Pi reads the shared skills folder — one install and every session can publish from the terminal."
---

Pi reads the shared skills folder — one install and every session can publish from the terminal.

**Skill** — Installs into ~/.agents/skills, which Pi reads natively — every later session knows the flow.

```bash
npx -y skills add spacefast/plugins --skill spacefast -g -y
```

[Agent documentation](/agents) · [Pi's skills docs](https://pi.dev/docs/latest/skills)
