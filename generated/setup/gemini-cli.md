---
title: "Connect Gemini CLI to Spacefast"
description: "Add Spacefast to Gemini CLI so it can publish from your terminal."
seo:
  canonical: "https://spacefast.com/setup/gemini-cli/"
---

Add Spacefast to Gemini CLI so it can publish from your terminal.

**Configure `~/.gemini/settings.json`.** One entry in your Gemini CLI settings connects Spacefast.

```json
{
  "mcpServers": {
    "spacefast": {
      "httpUrl": "https://mcp.spacefast.com",
      "oauth": {
        "enabled": true
      }
    }
  }
}
```

1. Add the entry above to `~/.gemini/settings.json`, keeping what's already in the file.
2. Start Gemini CLI and run `/mcp auth spacefast`.
3. Sign in to Spacefast and approve access.
4. Use `/mcp` to check that Spacefast is connected.

## Other ways to connect

**Install from the plugin marketplace — Soon.** The public marketplace listing is not live yet.

Use the working manual option below while the directory listing is in review.

**Use the Spacefast CLI.** Sets up this agent and signs you in. You also get the `sf` command to publish from the terminal yourself.

```bash
npm install -g spacefast && sf setup agent --agent gemini-cli
```

**Set it up without installing the CLI.** The same setup as the CLI, without keeping the CLI installed afterwards.

```bash
npx -y spacefast setup agent --agent gemini-cli -y
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

[Agent documentation](/agents) · [Gemini CLI documentation](https://geminicli.com/docs/tools/mcp-server)
