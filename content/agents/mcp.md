---
title: MCP
description: Connect hosted or on-device MCP so agents use the same Spacefast API with OAuth or local credentials.
---

The Model Context Protocol (MCP) gives agents typed Spacefast tools over the
same public API that the CLI and dashboard use. There is no second data model.

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

The server speaks streamable HTTP and authorizes against
`https://api.spacefast.com/v1/auth`.

## Hosted MCP

Point your client at:

```text
https://mcp.spacefast.com
```

Your client completes OAuth, and the server scopes tools to the signed-in
user.

## On-device MCP

On-device MCP runs a local server for agents that must see the real checkout.
Use the CLI to install and configure it:

```bash
sf mcp install --agent claude-code
```

For a client that should use hosted MCP with OAuth:

```bash
sf mcp install --agent cursor --remote --oauth
```

Confirm the daemon with `sf mcp status`; add `--repair` to clear a stale
daemon manifest. `sf mcp daemon` and `sf mcp http` run the server by hand; the
[CLI reference](/cli#sf-mcp-daemon) covers both. Credentials stay in supported
Spacefast state files; the secret-handling rules live in
[Auth and accounts](/agents#auth-and-accounts).

For the complete skill and MCP setup in one command, use
[`sf setup agent`](/agents).

## Workspace files

Hosted MCP provides a durable virtual workspace. Agents can list, read, patch,
import, export, and publish from it. On-device MCP applies the same file tools
inside its configured local root. Keep the publish root narrow. Never add
`.spacefast/`, credential files, or unrelated repository content to it.

## Tools, resources, and scopes

Tools manage the same spaces, versions, access, and domains as the
[REST API](/api). Prefer receipts from tool calls as the authority for
mutations.

Read resources before calling tools when the agent needs bounded context:

- **`spacefast://account/current`**: authenticated subject.
- **`spacefast://account/teams/current`** and **`spacefast://spaces/recent`**:
  scope.
- **`spacefast://policy/current`**: write and approval posture.
- **`spacefast://workspace/manifest`**: hosted workspace files and hashes.

Resources are read-only and redact credentials.

For durable automation outside MCP, use an agent account or a `ci_deploy` API
key; see [Auth and accounts](/agents#auth-and-accounts).

## Related

- **[Publish as an agent](/agents/publishing)**: receipts, claim continuation,
  secret rules.
- **[Auth and accounts](/agents#auth-and-accounts)**: credentials and handoff
  links.
- **[SDK](/reference/sdk)**: typed non-MCP clients.
