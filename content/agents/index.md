---
title: Set up an agent
sidebar:
  label: Agent setup
description: One prompt sets up any agent that can fetch a URL; plugins and one-click installs cover the rest.
---

Agents publish through the same REST API and CLI as humans. For any agent
that can fetch a URL and act on it, setup is one prompt:

```text
Fetch https://spacefast.com/setup.md
```

That page teaches the agent to publish with a single HTTP request, no Model
Context Protocol (MCP) server or CLI required. An agent with no tools at all
learns to tell the user what unlocks publishing instead of improvising.

Some agents have a better path than the prompt: a plugin with in-agent
commands (Claude Code, Codex, ChatGPT Work) or a one-click install (Claude,
Cursor, VS Code, Poke). Each agent's ranked best path lives on its own page
under [spacefast.com/setup](https://spacefast.com/setup).

The sections below are the durable, advanced lanes: the CLI, the setup
command, skills, and MCP.

## Install the CLI

The CLI is the full surface: incremental publishes, version history, rollback,
passwords, domains, logs, and diagnostics.

```bash
npm install -g spacefast
```

For a standalone binary, download the asset for your platform plus
`checksums.txt` from the
[public CLI releases](https://github.com/spacefast/cli/releases). Verify its
SHA-256 before you install it.

## Run the setup command

Run it from the project the agent should work in:

```bash
sf setup agent
```

It detects supported agents, installs the Spacefast skill, and configures MCP.
Use `sf setup agent -y` for a non-interactive setup. To choose one client and
use hosted MCP explicitly:

```bash
sf setup agent -y --agent cursor --remote --oauth
```

The [CLI reference](/cli#sf-setup-agent) lists every supported client and
option. Cloud and browser agents that cannot run local commands should use
[hosted MCP](/agents/mcp) at `https://mcp.spacefast.com` instead.

## Supported agents

Every agent connects through one of three mechanisms:

- **Plugin or skill**: the `spacefast/plugins` marketplace package, the
  `spacefast` skill, or an agent's own plugin directory. Includes the publish
  workflow, not only the tools.
- **MCP**: local stdio through the CLI, or [hosted MCP](/agents/mcp) at
  `https://mcp.spacefast.com` with browser OAuth.
- **Deeplink**: a one-click install link that prefills the hosted endpoint.

Each agent has a setup page with the exact paste, click, or command:

| Agent | Fastest connection |
| --- | --- |
| [Claude Code](/setup/claude-code) | Plugin from the marketplace |
| [Claude](/setup/claude) | [Add to Claude](https://claude.ai/customize/connectors?modal=add-custom-connector&connectorName=Spacefast&connectorUrl=https%3A%2F%2Fmcp.spacefast.com) connector deeplink |
| [Claude Cowork](/setup/claude-cowork) | [Add to your Claude org](https://claude.ai/admin-settings/connectors?modal=add-custom-connector&connectorName=Spacefast&connectorUrl=https%3A%2F%2Fmcp.spacefast.com) admin deeplink |
| [Cursor](/setup/cursor) | [Add to Cursor](https://cursor.com/install-mcp?name=spacefast&config=eyJ1cmwiOiJodHRwczovL21jcC5zcGFjZWZhc3QuY29tIn0%3D) MCP deeplink |
| [Codex](/setup/codex) | Plugin from the marketplace |
| [ChatGPT](/setup/chatgpt) | Paste `Fetch https://spacefast.com/setup.md` |
| [ChatGPT Work](/setup/chatgpt-work) | Plugin Directory install |
| [VS Code](/setup/vscode) | [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=spacefast&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fmcp.spacefast.com%22%7D) MCP deeplink |
| [OpenClaw](/setup/openclaw) | Hosted MCP command with OAuth |
| [OpenCode](/setup/opencode) | Config block plus `opencode mcp auth` |
| [Hermes](/setup/hermes) | Hosted MCP command |
| [Raycast](/setup/raycast) | Install MCP Server, paste the endpoint |
| [Pi](/setup/pi) | Skill install into `~/.agents/skills` |
| [Cognition Devin](/setup/devin) | Endpoint in Devin's MCP settings |
| [Poke](/setup/poke) | [Add to Poke](https://poke.com/integrations/new?name=Spacefast&url=https%3A%2F%2Fmcp.spacefast.com) integration deeplink |
| [Indent](/setup/indent) | Endpoint under Settings → Integrations |

The [setup index](/setup) lists them all. Claude Desktop installs as a
one-click extension from the
[`spacefast/plugins` releases](https://github.com/spacefast/plugins/releases).

`sf setup agent --agent` also configures editor and terminal clients without a
setup page: `github-copilot` and `factory-droid` get skills plus MCP, while
`gemini-cli`, `windsurf`, `cline`, and `continue` are skills-only and need
`--skip-mcp`. Use `generic` for anything that reads `AGENTS.md`. In that
command, `--agent claude` means Claude Code; the Claude app connects with the
connector deeplink above. Any other agent that can fetch a URL can use
[hosted MCP](/agents/mcp) or the [HTTP publish flow](/agents/publishing).

## Install only the skill

For agents that support skills, install the official skill without the rest of
the setup:

```bash
npx -y skills add spacefast/plugins --skill spacefast -g -y
```

Confirm the install with `sf skills status`. Raw skill markdown is available
at `https://api.spacefast.com/skill` for agents that only support
fetch-and-import flows.

The skill gives agents the publish workflow, space-state rules, claim-link
handling, and Spacefast file conventions.

## Docs as Markdown

Every developer page is fetchable as plain Markdown. Append `.md` to any URL
(for example `https://spacefast.com/docs/cli.md` or
`https://spacefast.com/docs/errors/rate_limited.md`) to get the exact
Markdown source. Requests from known AI-agent user agents and requests whose
`Accept` header prefers Markdown receive that form at the HTML URL
automatically.

Machine-readable docs discovery lives at
[`llms.txt`](https://spacefast.com/docs/llms.txt) and
[`llms-full.txt`](https://spacefast.com/docs/llms-full.txt). Product-level
discovery lives on the product origin:

- [agent card](https://spacefast.com/.well-known/agent-card.json)
- [integrations.sh declaration](https://spacefast.com/.well-known/integrations.json)
- [RFC 9727 API catalog](https://spacefast.com/.well-known/api-catalog)
- [MCP server card](https://spacefast.com/.well-known/mcp/server-card.json)
- [agent-skills index](https://spacefast.com/.well-known/agent-skills/index.json)

The full API surface is the generated OpenAPI spec at
[`https://api.spacefast.com/openapi.json`](https://api.spacefast.com/openapi.json).

Your own published spaces can serve agents the same way with an `Agent=true`
[redirect condition](/spaces/redirects#conditions).

## Auth and accounts

Interactive humans use [`sf login`](/cli#sf-login). CI uses a masked
[`ci_deploy` API key](/account/api-keys) stored as a token:

```bash
sf login --token sfa_123
```

Hosted agents should prefer [MCP](/agents/mcp) OAuth or a dashboard handoff
link redeemed with `sf login --handoff`. Never paste secrets into prompts.

### Handoff links

The dashboard can mint a one-use handoff link for an agent or machine. Redeem
it through stdin. Never paste the link into argv:

```bash
printf '%s\n' "$HANDOFF_LINK" | sf login --handoff
```

### Agent accounts

For durable automation, create an agent account instead of sharing a broad
personal API key, and scope it to the teams and capabilities it needs. Create
one in the dashboard under **Settings → Developer → Agents**. Agent
accounts authenticate with OAuth `private_key_jwt`, and the CLI or on-device
MCP loads them through `SPACEFAST_AGENT_CONFIG`; see
[API keys](/account/api-keys) for presets and rotation. For a one-off CI
deploy, a masked `ci_deploy` API key is the smaller option.

### Secret handling

Treat claim tokens, upload tokens, device codes, API keys,
[share-Link URLs](/spaces/access),
and `.spacefast` state as credentials. Do not print, commit, archive, or
include them in logs and chat. Avoid shell tracing when secrets are present.
Pass credentials through the environment or the target platform's secret
store. Clear temporary copies after use.

## Next

- **[Publish as an agent](/agents/publishing)**: the curl flow, receipts, and
  claim handling.
- **[MCP](/agents/mcp)**: hosted and on-device MCP, tools, and resources.
