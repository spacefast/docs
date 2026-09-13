---
title: "Connect Devin Desktop to Spacefast"
description: "Connect Spacefast to Devin Desktop, formerly Windsurf, and its Devin Local agent."
seo:
  canonical: "https://spacefast.com/setup/devin-desktop/"
---

Connect Spacefast to Devin Desktop, formerly Windsurf, and its Devin Local agent.

**Configure `~/.config/devin/mcp_config.json`.** This config is for Devin Local, the default agent in current Devin Desktop, and Devin CLI. Merge the server without replacing other settings. Use Authenticate in Desktop or run `devin mcp login spacefast` to complete OAuth. Current versions migrate MCP entries from the older `~/.config/devin/config.json`. For legacy Cascade, use Devin Settings → Cascade → MCP Servers and its `~/.codeium/windsurf/mcp_config.json` with a serverUrl field instead. Choose the setup for the agent you use.

```json
{
  "mcpServers": {
    "spacefast": {
      "transport": "http",
      "url": "https://mcp.spacefast.com"
    }
  }
}
```

## Other ways to connect

**Set up with the Spacefast CLI.** Install the CLI once, then let it write MCP config, install the skill, and sign you in.

```bash
npm install -g spacefast && sf setup agent --agent devin-desktop
```

**Set up without installing.** Set up MCP, skills, and authentication without a global CLI install.

```bash
npx -y spacefast setup agent --agent devin-desktop -y
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

[Agent documentation](/agents) · [Devin Desktop documentation](https://docs.devin.ai/desktop/devin-local)
