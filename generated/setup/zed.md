---
title: "Connect Zed to Spacefast"
description: "Connect Spacefast as a custom context server in Zed."
seo:
  canonical: "https://spacefast.com/setup/zed/"
---

Connect Spacefast as a custom context server in Zed.

**Configure ~/.config/zed/settings.json.** Merge this entry into Zed's settings. Open Settings → AI → MCP Servers and complete OAuth. Confirm Spacefast shows Server is active before using its tools.

```json
{
  "context_servers": {
    "spacefast": {
      "url": "https://mcp.spacefast.com"
    }
  }
}
```

## Other ways to connect

**Set up with the Spacefast CLI.** Install the CLI once, then let it write MCP config, install the skill, and sign you in.

```bash
npm install -g spacefast && sf setup agent --agent zed
```

**Set up without installing.** Set up MCP, skills, and authentication without a global CLI install.

```bash
npx -y spacefast setup agent --agent zed -y
```

**Install the Spacefast skill.** Install publish and hosting guidance using the Agent Skills standard.

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

[Agent documentation](/agents) · [Zed documentation](https://zed.dev/docs/ai/mcp)
