---
title: "Connect Warp to Spacefast"
description: "Use Spacefast skills and MCP in Warp agents."
seo:
  canonical: "https://spacefast.com/setup/warp/"
---

Use Spacefast skills and MCP in Warp agents.

**Add the hosted MCP server.** Open Warp's MCP settings and add a Streamable HTTP server with this URL. Start the server, complete OAuth, and confirm its tools appear.

```text
https://mcp.spacefast.com
```

## Other ways to connect

**Configure ~/.warp/.mcp.json.** Merge the hosted Spacefast server into the client MCP configuration. Preserve other settings and servers.

```json
{
  "mcpServers": {
    "spacefast": {
      "url": "https://mcp.spacefast.com"
    }
  }
}
```

**Set up with the Spacefast CLI.** Install the CLI once, then let it write MCP config, install the skill, and sign you in.

```bash
npm install -g spacefast && sf setup agent --agent warp
```

**Set up without installing.** Set up MCP, skills, and authentication without a global CLI install.

```bash
npx -y spacefast setup agent --agent warp -y
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

[Agent documentation](/agents) · [Warp documentation](https://docs.warp.dev/agents/capabilities/mcp/)
