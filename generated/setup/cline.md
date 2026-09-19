---
title: "Connect Cline to Spacefast"
description: "Connect Spacefast through Cline's MCP server settings."
seo:
  canonical: "https://spacefast.com/setup/cline/"
---

Connect Spacefast through Cline's MCP server settings.

**Add the hosted MCP server.** Enter Spacefast as the name and paste the Spacefast endpoint. Choose Streamable HTTP, then Add Server. Complete OAuth when prompted and check that the tools appear. The Configure tab can open the MCP JSON file used by your installation.

```text
https://mcp.spacefast.com
```

## Other ways to connect

**Configure ~/.cline/data/settings/cline_mcp_settings.json.** Merge this server into Cline's shared MCP settings. Preserve other servers. If your installation uses a different location, open MCP Servers → Configure → Configure MCP Servers to find its file. Complete OAuth when prompted.

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

**Install from the plugin marketplace — Soon.** The public marketplace listing is not live yet.

Use the working manual option below while the directory listing is in review.

**Set up with the Spacefast CLI.** Install the CLI once, then let it write MCP config, install the skill, and sign you in.

```bash
npm install -g spacefast && sf setup agent --agent cline
```

**Set up without installing.** Set up MCP, skills, and authentication without a global CLI install.

```bash
npx -y spacefast setup agent --agent cline -y
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

[Agent documentation](/agents) · [Cline documentation](https://docs.cline.bot/mcp/mcp-overview)
