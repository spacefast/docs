---
title: "Connect Codex to Spacefast"
description: "Add Spacefast to Codex so it can publish what you build, on your computer or in the cloud."
seo:
  canonical: "https://spacefast.com/docs/agents/codex/"
---

Add Spacefast to Codex so it can publish what you build, on your computer or in the cloud.

**Install the Spacefast plugin** ([Spacefast plugin](/connect/plugin/)). Adds the Spacefast plugin (local stdio MCP, hosted MCP, and skills) to Codex CLI so it can publish folders straight from your computer.

```bash
codex plugin marketplace add spacefast/plugins && codex plugin add spacefast@spacefast
```

## Other ways to connect

**Configure `~/.codex/config.toml`** ([Hosted MCP server](/connect/hosted-mcp/)). Add Spacefast to your Codex config file by hand.

```toml
[mcp_servers.spacefast]
url = "https://mcp.spacefast.com"
```

1. Add the entry above to `~/.codex/config.toml`, keeping what's already in the file.
2. Run `codex mcp login spacefast`, then sign in to Spacefast and approve access.
3. Restart Codex, or start a new CLI session.
4. Use `/mcp` to check that Spacefast's tools are available.

**Run Spacefast MCP on this computer** ([MCP on your computer (stdio)](/connect/stdio-mcp/)). Starts the Spacefast MCP server on your computer with npx. The first tool call signs you in.

```bash
codex mcp add spacefast -- npx -y spacefast mcp
```

1. Restart Codex, or start a new CLI session. Use `/mcp` to check the connection.
2. Use any Spacefast tool. Sign in to Spacefast in the browser window that opens.

**Install from the plugin marketplace** ([Official listing](/connect/marketplace/)). Install Spacefast from the plugin directory, then connect your account.

[Install from the plugin marketplace](https://chatgpt.com/plugins/plugin_asdk_app_6aa80fbfddb0819188f1304e303c856d)

1. Install the Spacefast plugin on your ChatGPT account to connect Codex on the web and in the app.
2. For local folder publishing in Codex CLI, install the Spacefast plugin below — it includes local stdio MCP and Spacefast skills.

**Install just the skill** ([Skill only](/connect/skill/)). Teaches your agent how to publish with Spacefast and adds nothing else. The lightest option.

```bash
npx -y skills add https://github.com/spacefast/plugins/tree/main/skills/spacefast -y
```

**Use the Spacefast CLI** ([Spacefast CLI](/connect/cli-setup/)). Sets up this agent and signs you in. You also get the `sf` command to publish from the terminal yourself.

```bash
npm install -g spacefast && sf setup agent --agent codex
```

**Set it up without installing the CLI** ([Spacefast CLI](/connect/cli-setup/)). The same setup as the CLI, without keeping the CLI installed afterwards.

```bash
npx -y spacefast setup agent --agent codex -y
```

**Install with npx plugins** ([Spacefast plugin](/connect/plugin/)). Install the plugin with the universal installer — nothing to install first.

```bash
npx -y plugins add spacefast/plugins -t codex -y
```

**Run in your terminal** ([Hosted MCP server](/connect/hosted-mcp/)). Run this command to add Spacefast.

```bash
codex mcp add spacefast --url 'https://mcp.spacefast.com'
```

1. Sign in to Spacefast and approve access. If sign-in did not start, run `codex mcp login spacefast`.
2. Restart Codex, or start a new CLI session. Use `/mcp` to check the connection.

**Push to deploy** ([Git push](/connect/git-push/)). Set SPACEFAST_GIT_REMOTE to the existing Space's returned git.remoteUrl. If it is null, use its configured source workflow. Store the key in a Git credential helper with username t. Keep credentials out of the remote URL. Check the deployment receipt before reporting success.

```bash
git remote add spacefast "$SPACEFAST_GIT_REMOTE" && git -c credential.username=t push spacefast HEAD:main
```

Prefer to hand this off? Copy setup prompt:

```text
Fetch https://spacefast.com/setup.md
```

Give the agent one prompt that lets it choose and complete the best setup lane.

## Plan limits

- **ChatGPT Free and Go:** Codex works in the desktop app only, with limited use. ([source](https://learn.chatgpt.com/docs/pricing), checked 2026-11-14)
- **ChatGPT Plus and above:** Codex works on the web, in the CLI, in the IDE extension and on iOS. ([source](https://learn.chatgpt.com/docs/pricing), checked 2026-11-14)

[Compare every way to connect](/connect/compare/)

[Agent documentation](/agents/) · [Codex documentation](https://learn.chatgpt.com/docs/extend/mcp?surface=cli)
