---
title: "Connect Gemini CLI to Spacefast"
description: "Use the Spacefast extension, skills, and OAuth MCP from Gemini CLI."
seo:
  canonical: "https://spacefast.com/setup/gemini-cli/"
---

Use the Spacefast extension, skills, and OAuth MCP from Gemini CLI.

**Configure ~/.gemini/settings.json.** Merge this entry into your Gemini CLI settings. Start Gemini CLI and run `/mcp auth spacefast` to finish OAuth. Use /mcp to check that Spacefast is connected.

```json
{
  "mcpServers": {
    "spacefast": {
      "httpUrl": "https://mcp.spacefast.com",
      "oauth": {
        "enabled": true
      }
    }
  }
}
```

## Other ways to connect

**Install from the plugin marketplace — Soon.** The public marketplace listing is not live yet.

Use the working manual option below while the directory listing is in review.

**Set up with the Spacefast CLI.** Install the CLI once, then let it write MCP config, install the skill, and sign you in.

```bash
npm install -g spacefast && sf setup agent --agent gemini-cli
```

**Set up without installing.** Set up MCP, skills, and authentication without a global CLI install.

```bash
npx -y spacefast setup agent --agent gemini-cli -y
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

[Agent documentation](/agents) · [Gemini CLI documentation](https://geminicli.com/docs/tools/mcp-server)
