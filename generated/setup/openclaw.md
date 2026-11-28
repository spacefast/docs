---
title: "Connect OpenClaw to Spacefast"
description: "Add Spacefast to OpenClaw as an MCP server, or give OpenClaw one prompt and it sets Spacefast up itself."
seo:
  canonical: "https://spacefast.com/docs/setup/openclaw/"
---

Add Spacefast to OpenClaw as an MCP server, or give OpenClaw one prompt and it sets Spacefast up itself.

**Run Spacefast MCP on this computer** (MCP on your computer (stdio)). Starts the Spacefast MCP server on your computer with npx. The first tool call signs you in.

```bash
openclaw gateway stop && openclaw mcp set spacefast '{"command":"npx","args":["-y","spacefast","mcp"]}'
```

1. Start the gateway again, then run `openclaw mcp doctor spacefast --probe` to check the server.
2. Use any Spacefast tool. Sign in to Spacefast in the browser window that opens.

OpenClaw only adds servers while its local gateway is stopped, so the command stops it first.

## Other ways to connect

**Copy setup prompt** (Setup prompt). Give the agent one prompt that lets it choose and complete the best setup lane.

```text
Fetch https://spacefast.com/setup.md
```

**Use the Spacefast CLI** (Spacefast CLI). Adds the Spacefast skill for this agent. You also get the `sf` command to publish from the terminal yourself.

```bash
npm install -g spacefast && sf setup agent --agent openclaw
```

**Set it up without installing the CLI** (Spacefast CLI). Adds the Spacefast skill without keeping the CLI installed afterwards.

```bash
npx -y spacefast setup agent --agent openclaw -y
```

**Push to deploy** (Git push). Set SPACEFAST_GIT_REMOTE to the existing Space's returned git.remoteUrl. If it is null, use its configured source workflow. Store the key in a Git credential helper with username t. Keep credentials out of the remote URL. Check the deployment receipt before reporting success.

```bash
git remote add spacefast "$SPACEFAST_GIT_REMOTE" && git -c credential.username=t push spacefast HEAD:main
```

[Agent documentation](/agents/) · [OpenClaw documentation](https://docs.openclaw.ai/tools/skills)
