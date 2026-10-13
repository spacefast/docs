---
title: "Connect Cline to Spacefast"
description: "Add Spacefast to Cline so it can publish what you build."
seo:
  canonical: "https://spacefast.com/setup/cline/"
---

Add Spacefast to Cline so it can publish what you build.

**Add Spacefast in the Cline panel.** Set it up from Cline's own panel, with no config file to edit.

```text
https://mcp.spacefast.com
```

1. Open the Cline panel, then MCP Servers → Remote Servers.
2. Enter Spacefast as the name and paste the address above.
3. Choose Streamable HTTP, then Add Server.
4. Sign in to Spacefast and approve access when asked.
5. Check that Spacefast's tools appear.

## Other ways to connect

**Configure `~/.cline/data/settings/cline_mcp_settings.json`.** Add Spacefast to Cline's shared settings file by hand.

```json
{
  "mcpServers": {
    "spacefast": {
      "type": "streamableHttp",
      "url": "https://mcp.spacefast.com",
      "disabled": false
    }
  }
}
```

1. Add the entry above to `~/.cline/data/settings/cline_mcp_settings.json`, keeping the servers already there.
2. Sign in to Spacefast and approve access when asked.

If your installation keeps the file somewhere else, open MCP Servers → Configure → Configure MCP Servers in Cline to find it.

**Install from the plugin marketplace — Soon.** The public marketplace listing is not live yet.

Use the working manual option below while the directory listing is in review.

**Use the Spacefast CLI.** Sets up this agent and signs you in. You also get the `sf` command to publish from the terminal yourself.

```bash
npm install -g spacefast && sf setup agent --agent cline
```

**Set it up without installing the CLI.** The same setup as the CLI, without keeping the CLI installed afterwards.

```bash
npx -y spacefast setup agent --agent cline -y
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

[Agent documentation](/agents) · [Cline documentation](https://docs.cline.bot/mcp/mcp-overview)
