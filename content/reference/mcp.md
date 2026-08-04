---
title: MCP
description: Connect hosted or on-device MCP so agents use the same Spacefast API with OAuth or local credentials.
---

MCP gives agents typed Spacefast tools over the same public API the CLI and
dashboard use. There is no second data model — tools create spaces, publish
versions, manage access, domains, and collaboration through the ordinary
product contract.

## Hosted vs on-device

|          | Hosted MCP                  | On-device MCP                        |
| -------- | --------------------------- | ------------------------------------ |
| Endpoint | `https://mcp.spacefast.com` | Local process via CLI                |
| Auth     | OAuth to the signed-in user | Local Spacefast login / agent config |
| Files    | Durable virtual workspace   | Bounded local checkout               |
| Best for | Cloud and browser agents    | Agents that must read/publish disk   |

Machine-readable discovery:

```text
https://spacefast.com/.well-known/mcp/server-card.json
```

Transport is streamable HTTP. Authorization server:
`https://api.spacefast.com/v1/auth`.

## Hosted MCP

Point the client at:

```text
https://mcp.spacefast.com
```

The client completes OAuth; the server scopes tools to that user. Hosted MCP
can list, read, patch, import, export, and publish from its durable virtual
workspace. Keep the publish root narrow — never include credential files.

## On-device MCP

Install and wire the local server with the CLI:

```bash
sf mcp install --agent claude-code
```

For a client that should use hosted MCP with OAuth:

```bash
sf mcp install --agent cursor --remote --oauth
```

Useful companions:

```bash
sf mcp status
```

```bash
sf mcp daemon
```

```bash
sf mcp http
```

On-device MCP applies the same file tools inside its configured local root.
Use it when the agent must see the real checkout. Credentials stay in supported
Spacefast state files — never paste API keys or claim tokens into prompts.

For the complete skill and MCP setup in one command:

```bash
sf setup agent
```

## Tools, resources, and scopes

Tools operate the same spaces, versions, builds, access, domains, and collab
capabilities as the [REST API](/api). Prefer receipts from tool calls as the
authority for mutations.

Read resources before calling tools when the agent needs bounded context:

- `spacefast://account/current` — authenticated subject.
- `spacefast://account/teams/current` and `spacefast://spaces/recent` — scope.
- Space detail and recent-version resources for a selected space.
- `spacefast://policy/current` — write and approval posture.
- `spacefast://workspace/manifest` — hosted workspace files and hashes.

Resources are read-only and redact credentials.

For durable automation outside MCP, use an agent account
(`SPACEFAST_AGENT_CONFIG`) or a least-privilege [API key](/account/api-keys). For
CI-only deploys, `ci_deploy` is usually enough.

## Set up a specific agent

Client-specific plugins, skills, and click-path setup live on the consumer
site: [choose your agent](https://spacefast.com/setup). This page owns the
technical MCP contract; [Agents](/getting-started/agents) owns publish receipts, claim
continuation, and secret handling.

## Related

- [Agents](/getting-started/agents) — publish with curl/CLI, skills, secret rules.
- [Auth](/account/sign-in) — device login and handoff links.
- [SDK](/reference/sdk) — typed non-MCP clients.
