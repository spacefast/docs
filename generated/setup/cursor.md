---
title: "Connect Cursor to Spacefast"
description: "Publish and host from Cursor with its plugin, skills, and hosted MCP."
seo:
  canonical: "https://spacefast.com/setup/cursor/"
---

Publish and host from Cursor with its plugin, skills, and hosted MCP.

**[Add to Cursor](https://cursor.com/install-mcp?name=spacefast&config=eyJ1cmwiOiJodHRwczovL21jcC5zcGFjZWZhc3QuY29tIn0%3D)**

If nothing happens, add the endpoint in Cursor yourself:

```text
https://mcp.spacefast.com
```

## Other ways to connect

**Install the Spacefast plugin.** Install the plugin, its rules, and MCP into Cursor with nothing installed first.

```bash
npx -y plugins add spacefast/plugins -t cursor -y
```

**Configure ~/.cursor/mcp.json.** Merge the Spacefast server into this file. Preserve other settings and servers. Open Customize in Cursor, enable Spacefast, and complete OAuth when prompted.

```json
{
  "mcpServers": {
    "spacefast": {
      "url": "https://mcp.spacefast.com"
    }
  }
}
```

**Install from the plugin marketplace — Soon.** The public marketplace listing is not live yet.

Use the working manual option below while the directory listing is in review.

**Set up with the Spacefast CLI.** Install the CLI once, then let it write MCP config, install the skill, and sign you in.

```bash
npm install -g spacefast && sf setup agent --agent cursor
```

**Set up without installing.** Set up MCP, skills, and authentication without a global CLI install.

```bash
npx -y spacefast setup agent --agent cursor -y
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

[Agent documentation](/agents) · [Cursor documentation](https://cursor.com/docs/mcp)
