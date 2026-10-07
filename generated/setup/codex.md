---
title: "Connect Codex to Spacefast"
description: "Add Spacefast to Codex so it can publish what you build, on your computer or in the cloud."
seo:
  canonical: "https://spacefast.com/setup/codex/"
---

Add Spacefast to Codex so it can publish what you build, on your computer or in the cloud.

**Install from the plugin marketplace.** Install Spacefast from the plugin directory, then connect your account.

[Install from the plugin marketplace](https://chatgpt.com/plugins/plugin_asdk_app_6aa80fbfddb0819188f1304e303c856d)

## Other ways to connect

**Install the Spacefast plugin.** Adds Spacefast to Codex with everything it needs to publish.

```bash
codex plugin marketplace add spacefast/plugins && codex plugin add spacefast@spacefast
```

**Configure `~/.codex/config.toml`.** Add Spacefast to your Codex config file by hand.

```toml
[mcp_servers.spacefast]
url = "https://mcp.spacefast.com"
```

1. Add the entry above to `~/.codex/config.toml`, keeping what's already in the file.
2. Run `codex mcp login spacefast`, then sign in to Spacefast and approve access.
3. Restart Codex, or start a new CLI session.
4. Use `/mcp` to check that Spacefast's tools are available.

**Use the Spacefast CLI.** Sets up this agent and signs you in. You also get the `sf` command to publish from the terminal yourself.

```bash
npm install -g spacefast && sf setup agent --agent codex
```

**Set it up without installing the CLI.** The same setup as the CLI, without keeping the CLI installed afterwards.

```bash
npx -y spacefast setup agent --agent codex -y
```

**Install with npx plugins.** Install the plugin with the universal installer — nothing to install first.

```bash
npx -y plugins add spacefast/plugins -t codex -y
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

[Agent documentation](/agents) · [Codex documentation](https://learn.chatgpt.com/docs/extend/mcp?surface=cli)
