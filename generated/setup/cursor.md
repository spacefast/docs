---
title: "Connect Cursor to Spacefast"
description: "Add Spacefast to Cursor so its agent can publish what you build."
seo:
  canonical: "https://spacefast.com/setup/cursor/"
---

Add Spacefast to Cursor so its agent can publish what you build.

**[Add to Cursor](https://cursor.com/install-mcp?name=spacefast&config=eyJ1cmwiOiJodHRwczovL21jcC5zcGFjZWZhc3QuY29tIn0%3D)**

1. Sign in to Spacefast and approve access when asked.

If nothing happens, add the endpoint in Cursor yourself:

```text
https://mcp.spacefast.com
```

## Other ways to connect

**Install the Spacefast plugin.** Adds Spacefast to Cursor, rules included, with nothing to install first.

```bash
npx -y plugins add spacefast/plugins -t cursor -y
```

**Configure `~/.cursor/mcp.json`.** Add Spacefast to Cursor's config file by hand.

```json
{
  "mcpServers": {
    "spacefast": {
      "url": "https://mcp.spacefast.com"
    }
  }
}
```

1. Add the entry above to `~/.cursor/mcp.json`, keeping what's already in the file.
2. Open Customize in Cursor and turn Spacefast on.
3. Sign in to Spacefast and approve access when asked.

**Install from the plugin marketplace — Soon.** The public marketplace listing is not live yet.

Use the working manual option below while the directory listing is in review.

**Use the Spacefast CLI.** Sets up this agent and signs you in. You also get the `sf` command to publish from the terminal yourself.

```bash
npm install -g spacefast && sf setup agent --agent cursor
```

**Set it up without installing the CLI.** The same setup as the CLI, without keeping the CLI installed afterwards.

```bash
npx -y spacefast setup agent --agent cursor -y
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

[Agent documentation](/agents) · [Cursor documentation](https://cursor.com/docs/mcp)
