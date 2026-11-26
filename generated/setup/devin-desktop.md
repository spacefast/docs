---
title: "Connect Devin Desktop to Spacefast"
description: "Add Spacefast to Devin Desktop, formerly Windsurf, for its Devin Local agent and Devin CLI."
seo:
  canonical: "https://spacefast.com/docs/agents/devin-desktop/"
---

Add Spacefast to Devin Desktop, formerly Windsurf, for its Devin Local agent and Devin CLI.

**Install the Spacefast plugin** ([Spacefast plugin](/connect/plugin/)). Adds Spacefast to Devin Desktop and Devin CLI with its skills and the hosted connection.

```bash
devin plugins install spacefast/plugins
```

1. Run `devin mcp login spacefast`, then sign in to Spacefast and approve access.
2. Start a new session so the Spacefast tools load.

Devin installs plugins for signed-in accounts (`devin auth login`).

## Other ways to connect

**Configure `~/.config/devin/mcp_config.json`** ([Hosted MCP server](/connect/hosted-mcp/)). Works with Devin Local, Devin Desktop's default agent, and with Devin CLI.

```json
{
  "mcpServers": {
    "spacefast": {
      "transport": "http",
      "url": "https://mcp.spacefast.com",
      "oauthResource": "https://mcp.spacefast.com"
    }
  }
}
```

1. Add the entry above to `~/.config/devin/mcp_config.json`, keeping what's already in the file.
2. Choose Authenticate in Devin Desktop, or run `devin mcp login spacefast`.
3. Sign in to Spacefast and approve access.

Legacy Cascade reads the same file.

**Install just the skill** ([Skill only](/connect/skill/)). Teaches your agent how to publish with Spacefast and adds nothing else. The lightest option.

```bash
npx -y skills add https://github.com/spacefast/plugins/tree/main/skills/spacefast -y
```

**Use the Spacefast CLI** ([Spacefast CLI](/connect/cli-setup/)). Sets up this agent and signs you in. You also get the `sf` command to publish from the terminal yourself.

```bash
npm install -g spacefast && sf setup agent --agent devin-desktop
```

**Set it up without installing the CLI** ([Spacefast CLI](/connect/cli-setup/)). The same setup as the CLI, without keeping the CLI installed afterwards.

```bash
npx -y spacefast setup agent --agent devin-desktop -y
```

**Run in your terminal** ([Hosted MCP server](/connect/hosted-mcp/)). Run this command to add Spacefast.

```bash
devin mcp add --scope user spacefast 'https://mcp.spacefast.com' --oauth-resource 'https://mcp.spacefast.com'
```

1. Run `devin mcp login spacefast`, then sign in to Spacefast and approve access.
2. Use `devin mcp list` to check the connection in Devin CLI or Devin Local.

**Push to deploy** ([Git push](/connect/git-push/)). Set SPACEFAST_GIT_REMOTE to the existing Space's returned git.remoteUrl. If it is null, use its configured source workflow. Store the key in a Git credential helper with username t. Keep credentials out of the remote URL. Check the deployment receipt before reporting success.

```bash
git remote add spacefast "$SPACEFAST_GIT_REMOTE" && git -c credential.username=t push spacefast HEAD:main
```

Prefer to hand this off? Copy setup prompt:

```text
Fetch https://spacefast.com/setup.md
```

Give the agent one prompt that lets it choose and complete the best setup lane.

[Compare every way to connect](/connect/compare/)

[Agent documentation](/agents/) · [Devin Desktop documentation](https://docs.devin.ai/desktop/devin-local)
