---
title: Set up an agent
sidebar:
  label: Overview
description: Install the Spacefast CLI, skill, and MCP for any coding agent with one command.
---

Agents publish through the same REST API and CLI as humans. There is no
separate agent product to learn. The fastest handoff is a direct instruction:

```text
fetch https://spacefast.com/ai
and publish this space to Spacefast
```

For a durable setup, give the agent the CLI, the skill, and MCP.

## Install the CLI

The CLI is the full surface: incremental publishes, version history, rollback,
passwords, domains, logs, and diagnostics.

```bash
npm install -g spacefast@0.0.13
```

That command pins the package reviewed for this docs release. For a standalone
binary, choose a version from the
[public CLI releases](https://github.com/spacefast/cli/releases). Download the
asset for your platform plus `checksums.txt`. Verify its SHA-256 before you
install it. The hosted `install.sh` and `install.ps1` commands track the
latest release. Use them only when you intentionally trust that moving channel.

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

## Install only the skill

For agents that support skills, install the official skill without the rest of
the setup:

```bash
npx -y skills add spacefast/plugins --skill spacefast -g -y
```

Raw skill markdown is available at `https://api.spacefast.com/skill` for
agents that only support fetch-and-import flows.

The skill gives agents the publish workflow, space-state rules, claim-link
handling, and Spacefast file conventions. Agents do not need to rediscover them
from docs.

## Docs as Markdown

Every developer page is fetchable as plain Markdown. Append `.md` to any URL
(for example `https://spacefast.com/docs/cli.md` or
`https://spacefast.com/docs/errors/rate_limited.md`) to get the exact
Markdown source. Requests from known AI-agent user agents receive that form at
the HTML URL automatically. Requests whose `Accept` header prefers Markdown also
receive that form.

Machine-readable docs discovery lives at
[`llms.txt`](https://spacefast.com/docs/llms.txt) and
[`llms-full.txt`](https://spacefast.com/docs/llms-full.txt). They are generated
from the same Blume sources as these pages. Product-level discovery lives on
the product origin: the
[agent card](https://spacefast.com/.well-known/agent-card.json),
[integrations.sh declaration](https://spacefast.com/.well-known/integrations.json),
[RFC 9727 API catalog](https://spacefast.com/.well-known/api-catalog),
[MCP server card](https://spacefast.com/.well-known/mcp/server-card.json), and
[agent-skills index](https://spacefast.com/.well-known/agent-skills/index.json).
The full API surface is the generated OpenAPI spec at
[`https://api.spacefast.com/openapi.json`](https://api.spacefast.com/openapi.json).

## Serve agents from published spaces

Published spaces can serve agents the same way. An `Agent=true` condition in
`_redirects` serves browsers the HTML page and serves agent fetches plain text
at the same URL. That is how `https://spacefast.com/ai` works:

```text
/ai /ai.txt 200! Agent=true
```

## Next

- [Publish as an agent](/agents/publishing) — the curl flow, receipts, and
  claim handling.
- [MCP](/agents/mcp) — hosted and on-device MCP, tools, and resources.
- [Auth and accounts](/agents/accounts) — credentials, agent accounts, and
  secret handling.
