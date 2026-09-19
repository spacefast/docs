---
title: "Connect OpenCode to Spacefast"
description: "Connect Spacefast to OpenCode with native OAuth MCP and skills."
seo:
  canonical: "https://spacefast.com/setup/opencode/"
---

Connect Spacefast to OpenCode with native OAuth MCP and skills.

**Configure ~/.config/opencode/opencode.json.** Merge this entry into your OpenCode configuration. Run `opencode mcp auth spacefast` to finish OAuth, then `opencode mcp list` to check the connection.

```json
{
  "mcp": {
    "spacefast": {
      "enabled": true,
      "type": "remote",
      "url": "https://mcp.spacefast.com"
    }
  }
}
```

## Other ways to connect

**Set up with the Spacefast CLI.** Install the CLI once, then let it write MCP config, install the skill, and sign you in.

```bash
npm install -g spacefast && sf setup agent --agent opencode
```

**Set up without installing.** Set up MCP, skills, and authentication without a global CLI install.

```bash
npx -y spacefast setup agent --agent opencode -y
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

[Agent documentation](/agents) · [OpenCode documentation](https://opencode.ai/docs/mcp-servers)
