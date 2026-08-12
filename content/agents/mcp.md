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
| Files    | Inline files in the call    | Bounded local root                   |
| Best for | Cloud and browser agents    | Agents that must read/publish disk   |

Machine-readable discovery:

```text
https://spacefast.com/.well-known/mcp/server-card.json
```

The server speaks streamable HTTP. Clients discover auth from
`https://mcp.spacefast.com/.well-known/oauth-protected-resource`, which points
at the authorization server at `https://api.spacefast.com/v1/auth`.

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

## Publish files

Hosted MCP publishes the files supplied inline in the tool call. On-device MCP
reads a bounded local root (`SPACEFAST_MCP_WORKSPACE_ROOT`, default: the
working directory) to collect the publish upload and refuses paths outside it.
Keep the publish root narrow. Never add `.spacefast/`, credential files, or
unrelated repository content to it.

## Tools and scopes

The server registers four tools:

- **`execute`**: run any API operation from the OpenAPI catalog.
- **`skills`**: workflow recipes for common flows.
- **`resume`**: continue an approval-gated call.
- **`publish`**: publish files as a new version.

Tools manage the same spaces, versions, access, and domains as the
[REST API](/api). Prefer receipts from tool calls as the authority for
mutations. Tool results and persisted session transcripts are redacted before
the model sees them.

For durable automation outside MCP, use an agent account or a `ci_deploy` API
key; see [Auth and accounts](/agents#auth-and-accounts).

## Related

- **[Publish as an agent](/agents/publishing)**: receipts, claim continuation,
  secret rules.
- **[Auth and accounts](/agents#auth-and-accounts)**: credentials and handoff
  links.
- **[SDK](/reference/sdk)**: typed non-MCP clients.
