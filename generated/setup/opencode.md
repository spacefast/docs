---
title: "Connect OpenCode to Spacefast"
description: "Add Spacefast to OpenCode so it can publish what you build."
seo:
  canonical: "https://spacefast.com/setup/opencode/"
---

Add Spacefast to OpenCode so it can publish what you build.

**Configure `~/.config/opencode/opencode.json`.** One entry in your OpenCode config connects Spacefast.

```json
{
  "mcp": {
    "spacefast": {
      "enabled": true,
      "type": "remote",
      "url": "https://mcp.spacefast.com"
    }
  }
}
```

1. Add the entry above to `~/.config/opencode/opencode.json`, keeping what's already in the file.
2. Run `opencode mcp auth spacefast`, then sign in to Spacefast and approve access.
3. Run `opencode mcp list` to check the connection.

## Other ways to connect

**Use the Spacefast CLI.** Sets up this agent and signs you in. You also get the `sf` command to publish from the terminal yourself.

```bash
npm install -g spacefast && sf setup agent --agent opencode
```

**Set it up without installing the CLI.** The same setup as the CLI, without keeping the CLI installed afterwards.

```bash
npx -y spacefast setup agent --agent opencode -y
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

[Agent documentation](/agents) · [OpenCode documentation](https://opencode.ai/docs/mcp-servers)
