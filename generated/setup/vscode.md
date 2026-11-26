---
title: "Connect VS Code to Spacefast"
description: "Add Spacefast to VS Code so Copilot can publish from agent mode."
seo:
  canonical: "https://spacefast.com/docs/agents/vscode/"
---

Add Spacefast to VS Code so Copilot can publish from agent mode.

**[Add to VS Code](https://vscode.dev/redirect/mcp/install?name=spacefast&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fmcp.spacefast.com%22%7D)** ([Hosted MCP server](/connect/hosted-mcp/))

If nothing happens, add the endpoint in VS Code yourself:

```text
https://mcp.spacefast.com
```

## Other ways to connect

**Install the Spacefast plugin** ([Spacefast plugin](/connect/plugin/)). Adds Spacefast to VS Code with nothing to install first.

```bash
npx -y plugins add spacefast/plugins -t vscode -y
```

**Install from GitHub's MCP Registry** ([GitHub MCP Registry](/connect/github-mcp-registry/)). Install Spacefast from its page on github.com`/mcp`.

[Install from GitHub's MCP Registry](https://github.com/mcp/spacefast/mcp)

1. Choose Install MCP server, then Install in VS Code or VS Code Insiders.
2. Start Spacefast, then sign in to Spacefast and approve access.

**Configure .vscode`/mcp`.json** ([Hosted MCP server](/connect/hosted-mcp/)). Add Spacefast to VS Code's config file by hand.

```json
{
  "servers": {
    "spacefast": {
      "type": "http",
      "url": "https://mcp.spacefast.com"
    }
  }
}
```

1. Add the entry above to .vscode`/mcp`.json, keeping what's already in the file.

**Install just the skill** ([Skill only](/connect/skill/)). Teaches your agent how to publish with Spacefast and adds nothing else. The lightest option.

```bash
npx -y skills add https://github.com/spacefast/plugins/tree/main/skills/spacefast -y
```

**Use the Spacefast CLI** ([Spacefast CLI](/connect/cli-setup/)). Sets up this agent and signs you in. You also get the `sf` command to publish from the terminal yourself.

```bash
npm install -g spacefast && sf setup agent --agent vscode
```

**Set it up without installing the CLI** ([Spacefast CLI](/connect/cli-setup/)). The same setup as the CLI, without keeping the CLI installed afterwards.

```bash
npx -y spacefast setup agent --agent vscode -y
```

**Run in your terminal** ([Hosted MCP server](/connect/hosted-mcp/)). Run this command to add Spacefast.

```bash
code --add-mcp '{"name":"spacefast","type":"http","url":"https://mcp.spacefast.com"}'
```

1. In VS Code, run MCP: List Servers from the Command Palette and start Spacefast.
2. Confirm server trust, then sign in to Spacefast and approve access.

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

[Agent documentation](/agents/) · [VS Code documentation](https://code.visualstudio.com/docs/agent-customization/mcp-servers)
