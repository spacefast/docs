---
title: Agents
description: How AI agents can publish, update, and operate Spacefast spaces through the CLI and API.
---

Agents publish through the same REST API and CLI as humans: one curl call for a publish, the CLI for the full surface, machine-readable docs for discovery. The fastest handoff is a direct instruction:

```text
fetch https://spacefast.com/ai
and publish this space to Spacefast
```

## Publish with curl (no install, no account)

```bash
curl -F "files=@index.html" https://api.spacefast.com/v1/publish
```

To publish a folder, zip it first and send it as `-F archive=@site.zip`. The response is `{ "data": <receipt> }` — the receipt rides inside `data`, and it contains everything that matters:

- `data.space.liveUrl` — the live site.
- `data.version.immutableUrl` — the exact thing just published, frozen. It is reserved in the initial receipt; if the publish is still finalizing, poll `data.links.status` until the version status is `ready` before sharing it.
- `data.claim.url` and `data.claim.expiresAt` — anonymous spaces expire unless claimed within 6 hours; always show the user the claim link and the deadline.
- `data.shareBlurb` — a paste-ready one-liner with the URL and claim nudge; relay it verbatim.

For anonymous spaces, send the receipt's `data.claim.token` as `Authorization: Bearer <claim-token>` when polling `data.links.status`, reading `data.links.inspect` / `data.links.version`, finalizing uploads, or updating the same `spaceId`. Never print the token back to the user. Errors come back as JSON with stable `code` values and a `docsUrl` for recovery steps.

## After the user claims

Claiming ends the claim token's publish rights, but when the owner keeps agent continuation on (the default at claim time) the token becomes a one-time exchange voucher. The next publish with it fails with an error that points here: call `POST /v1/anonymous-claim/exchange` with the same bearer auth to trade the token once for a durable, publish-only API key scoped to that space, save the key to `.spacefast/state.json`, and retry the publish with the new key as the bearer credential. The owner can see and revoke the key under Account → Access tokens; if they turned continuation off, ask them to mint an access token in the dashboard instead.

## Install the Spacefast CLI

The CLI is the full surface: incremental publishes, version history, rollback, passwords, domains, logs, and diagnostics.

```bash
npm install -g spacefast@0.0.11
```

That command pins the package reviewed for this docs release. For a standalone
binary, choose a version from the
[public CLI releases](https://github.com/spacefast/cli/releases), download the
asset for your platform plus `checksums.txt`, and verify its SHA-256 before
installing it. The hosted `install.sh` and `install.ps1` commands track the
latest release; use them only when you intentionally trust that moving channel.

```bash
sf agents init
sf mcp install --mode local --transport stdio --write
```

Use hosted MCP for cloud/browser agents that cannot run local commands:

```text
https://mcp.spacefast.com
```

Hosted MCP can edit its durable virtual workspace and publish from it. On-Device MCP, installed through the CLI, can read and edit the bounded local checkout.

Use `--json` on any command when the output will be parsed. Publishing the same directory again updates the space saved in `.spacefast/state.json`. For agents that support skills, install the official skill:

```bash
npx -y skills add spacefast/plugins --skill spacefast -g -y
```

Raw skill markdown is still available at `https://api.spacefast.com/skill` for agents that only support fetch-and-import flows.

The skill gives agents the publish workflow, space-state rules, claim-link handling, and Spacefast file conventions without rediscovering them from docs. Anonymous publish needs no auth; claiming a space requires a WordPress.com login, and CI/API access uses API keys.

## Docs as Markdown

Every developer page is fetchable as plain Markdown. Append `.md` to any URL
(for example `https://developers.spacefast.com/cli.md` or
`https://developers.spacefast.com/errors/rate_limited.md`) to get the exact
Markdown source. Requests from known AI-agent user agents, and requests whose
`Accept` header prefers Markdown, receive that form at the HTML URL automatically.

Machine-readable docs discovery lives at
[`llms.txt`](https://developers.spacefast.com/llms.txt) and
[`llms-full.txt`](https://developers.spacefast.com/llms-full.txt), generated
from the same Blume sources as these pages. Product-level discovery remains on
the main site: the [agent card](https://spacefast.com/.well-known/agent-card.json),
[integrations.sh declaration](https://spacefast.com/.well-known/integrations.json),
[RFC 9727 API catalog](https://spacefast.com/.well-known/api-catalog),
[MCP server card](https://spacefast.com/.well-known/mcp/server-card.json), and
[agent-skills index](https://spacefast.com/.well-known/agent-skills/index.json).
The full API surface is the generated OpenAPI spec at
[`https://api.spacefast.com/openapi.json`](https://api.spacefast.com/openapi.json).

Client-specific plugins, skills, and setup steps live in the consumer
[agent setup directory](https://spacefast.com/setup).

Published spaces can do the same trick: an `Agent=true` condition in `_redirects` serves browsers the HTML page and agent fetches plain text at the same URL — it's how `https://spacefast.com/ai` works:

```text
/ai /ai.txt 200! Agent=true
```

## Agent-safe behavior

- Incremental uploads send only changed files after the first publish.
- Finalize is the completion boundary for live publishes; upload URLs can be refreshed without restarting a version.
- Space metadata, password protection, and SPA mode survive redeploys.
- Plan limits surface as diagnostics, not guesswork: publish the intended artifact, then read and report what the API or CLI says.
- Never print claim tokens, API keys, or `.spacefast/state.json` contents into transcripts.
