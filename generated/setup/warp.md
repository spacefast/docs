---
title: "Connect Warp to Spacefast"
description: "Add Spacefast to Warp so its agents can publish what you build."
seo:
  canonical: "https://spacefast.com/docs/setup/warp/"
---

Add Spacefast to Warp so its agents can publish what you build.

**Add Spacefast in Warp's settings** (Hosted MCP server). Set it up in Warp's own settings, with no config file to edit.

```text
https://mcp.spacefast.com
```

1. Open Settings → Agents → MCP servers and choose + Add.
2. Add a Streamable HTTP server with the address above.
3. Start the server, then sign in to Spacefast and approve access.
4. Check that Spacefast's tools appear.

## Other ways to connect

**Configure `~/.warp/.mcp.json`** (Hosted MCP server). Add Spacefast to Warp's config file by hand.

```json
{
  "mcpServers": {
    "spacefast": {
      "url": "https://mcp.spacefast.com"
    }
  }
}
```

1. Add the entry above to `~/.warp/.mcp.json`, keeping what's already in the file.
2. Sign in to Spacefast and approve access when asked.

**Install just the skill** (Skill only). Teaches your agent how to publish with Spacefast and adds nothing else. The lightest option.

```bash
npx -y skills add https://github.com/spacefast/plugins/tree/main/skills/spacefast -y
```

**Use the Spacefast CLI** (Spacefast CLI). Sets up this agent and signs you in. You also get the `sf` command to publish from the terminal yourself.

```bash
npm install -g spacefast && sf setup agent --agent warp
```

**Set it up without installing the CLI** (Spacefast CLI). The same setup as the CLI, without keeping the CLI installed afterwards.

```bash
npx -y spacefast setup agent --agent warp -y
```

**Push to deploy** (Git push). Set SPACEFAST_GIT_REMOTE to the existing Space's returned git.remoteUrl. If it is null, use its configured source workflow. Store the key in a Git credential helper with username t. Keep credentials out of the remote URL. Check the deployment receipt before reporting success.

```bash
git remote add spacefast "$SPACEFAST_GIT_REMOTE" && git -c credential.username=t push spacefast HEAD:main
```

Prefer to hand this off? Copy setup prompt:

```text
Fetch https://spacefast.com/setup.md
```

Give the agent one prompt that lets it choose and complete the best setup lane.

[Agent documentation](/agents/) · [Warp documentation](https://docs.warp.dev/agents/capabilities/mcp/)
