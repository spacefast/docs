---
title: "Connect Devin Desktop to Spacefast"
description: "Add Spacefast to Devin Desktop, formerly Windsurf, for its Devin Local agent and Devin CLI."
seo:
  canonical: "https://spacefast.com/setup/devin-desktop/"
---

Add Spacefast to Devin Desktop, formerly Windsurf, for its Devin Local agent and Devin CLI.

**Configure `~/.config/devin/mcp_config.json`.** Works with Devin Local, Devin Desktop's default agent, and with Devin CLI.

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

1. Add the entry above to `~/.config/devin/mcp_config.json`, keeping what's already in the file.
2. Choose Authenticate in Devin Desktop, or run `devin mcp login spacefast`.
3. Sign in to Spacefast and approve access.

On legacy Cascade, use Devin Settings → Cascade → MCP Servers and its `~/.codeium/windsurf/mcp_config.json` instead, with a `serverUrl` field.

## Other ways to connect

**Use the Spacefast CLI.** Sets up this agent and signs you in. You also get the `sf` command to publish from the terminal yourself.

```bash
npm install -g spacefast && sf setup agent --agent devin-desktop
```

**Set it up without installing the CLI.** The same setup as the CLI, without keeping the CLI installed afterwards.

```bash
npx -y spacefast setup agent --agent devin-desktop -y
```

**Install just the skill.** Teaches your agent how to publish with Spacefast and adds nothing else. The lightest option.

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
