---
title: "Connect VS Code to Spacefast"
description: "Add Spacefast to VS Code so Copilot can publish from agent mode."
seo:
  canonical: "https://spacefast.com/setup/vscode/"
---

Add Spacefast to VS Code so Copilot can publish from agent mode.

**[Add to VS Code](https://vscode.dev/redirect/mcp/install?name=spacefast&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fmcp.spacefast.com%22%7D)**

If nothing happens, add the endpoint in VS Code yourself:

```text
https://mcp.spacefast.com
```

## Other ways to connect

**Install the Spacefast plugin.** Adds Spacefast to VS Code with nothing to install first.

```bash
npx -y plugins add spacefast/plugins -t vscode -y
```

**Configure .vscode`/mcp`.json.** Add Spacefast to VS Code's config file by hand.

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

**Use the Spacefast CLI.** Sets up this agent and signs you in. You also get the `sf` command to publish from the terminal yourself.

```bash
npm install -g spacefast && sf setup agent --agent vscode
```

**Set it up without installing the CLI.** The same setup as the CLI, without keeping the CLI installed afterwards.

```bash
npx -y spacefast setup agent --agent vscode -y
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

[Agent documentation](/agents) · [VS Code documentation](https://code.visualstudio.com/docs/agent-customization/mcp-servers)
