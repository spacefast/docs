---
title: "Connect VS Code to Spacefast"
description: "Add Spacefast MCP to VS Code and Copilot agent mode."
seo:
  canonical: "https://spacefast.com/setup/vscode/"
---

Add Spacefast MCP to VS Code and Copilot agent mode.

**[Add to VS Code](https://vscode.dev/redirect/mcp/install?name=spacefast&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fmcp.spacefast.com%22%7D)**

If nothing happens, add the endpoint in VS Code yourself:

```text
https://mcp.spacefast.com
```

## Other ways to connect

**Install the Spacefast plugin.** Install the plugin and its MCP server into VS Code with nothing installed first.

```bash
npx -y plugins@1.3.4 add spacefast/plugins -t vscode -y
```

**Configure .vscode/mcp.json.** Merge the hosted Spacefast server into the client MCP configuration.

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

**Set up with the Spacefast CLI.** Install the CLI once, then let it write MCP config, install the skill, and sign you in.

```bash
npm install -g spacefast && sf setup agent --agent vscode
```

**Set up without installing.** One-shot setup with no global install — same work, nothing left behind.

```bash
npx -y spacefast@0.0.26 setup agent --agent vscode -y
```

**Install the Spacefast skill.** Install publish and hosting guidance using the Agent Skills standard.

```bash
npx -y skills@1.5.23 add https://spacefast.com/SKILL.md -y
```

**Push to deploy.** Push to deploy — output returns your live and claim links.

```bash
git remote add spacefast https://t:{{token}}@push.new/{{space}}.git && git push spacefast main
```

Prefer to hand this off? Copy setup prompt:

```text
Fetch https://spacefast.com/setup.md and set up Spacefast.
```

Give the agent one prompt that lets it choose and complete the best setup lane.

[Agent documentation](/agents) · [VS Code documentation](https://code.visualstudio.com/docs/copilot/chat/mcp-servers)
