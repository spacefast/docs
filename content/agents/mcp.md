---
title: MCP
description: Connect hosted or on-device MCP so agents use the same Spacefast API with OAuth or local credentials.
---

The Model Context Protocol (MCP) gives agents typed Spacefast tools over
the same public API that the CLI and dashboard use.

## Hosted or on-device

|          | Hosted MCP                  | On-device MCP                         |
| -------- | --------------------------- | ------------------------------------- |
| Endpoint | `https://mcp.spacefast.com` | Local process run by the CLI          |
| Auth     | OAuth to the signed-in user | Local Spacefast login or agent config |
| Files    | Inline files in the call    | Bounded local root                    |
| Best for | Cloud and browser agents    | Agents that read and publish disk     |

Machine-readable discovery:

```text
https://spacefast.com/.well-known/mcp/server-card.json
```

The server uses streamable HTTP. Clients discover auth from
`https://mcp.spacefast.com/.well-known/oauth-protected-resource`, which
points at the authorization server at
`https://api.spacefast.com/v1/auth`.

## Hosted MCP

Point your client at:

```text
https://mcp.spacefast.com
```

## On-device MCP

On-device MCP runs a local server for agents that read and publish files
on disk. Install and configure it with the CLI:

```bash
sf mcp install --agent claude-code
```

To point a client at hosted MCP with OAuth:

```bash
sf mcp install --agent cursor --remote --oauth
```

Run the server manually with [`sf mcp`](/cli#sf-mcp), which serves MCP over
stdio for the connected client. Credentials stay in supported Spacefast
state files, and the secret-handling rules live in
[Auth and accounts](/agents#auth-and-accounts).

For the complete skill and MCP setup in one command, use
[`sf setup agent`](/agents).

## Publish files

Hosted MCP publishes the files supplied inline in the tool call. On-device
MCP collects the publish upload from a bounded local root
(`SPACEFAST_MCP_WORKSPACE_ROOT`, default: the working directory) and
refuses paths outside it. Keep the publish root narrow, and never add
`.spacefast/`, credential files, or unrelated repository content to it.

## Tools and scopes

The server registers six tools:

- **`execute`**: run any API operation from the OpenAPI catalog.
- **`skills`**: workflow recipes for common flows.
- **`resume`**: continue an approval-gated call.
- **`publish`**: publish files as a new version.
- **`search_docs`**: search these docs and get ranked pages with excerpts.
  An exact slug or path returns that one page, and an empty query lists
  the available pages.
- **`get_page`**: read one docs page as full Markdown, by path or slug.

Tools manage the same spaces, versions, access, and domains as the
[REST API](/api). Treat receipts from tool calls as the authority for
mutations. Spacefast redacts tool results and persisted session
transcripts before the model sees them.

The docs tools read the published documentation corpus, so a connected
agent can answer product questions without leaving the session. The same lookups
work over plain HTTP without a token: `GET /v1/docs/search` and
`GET /v1/docs/page` on the [REST API](/api).

For durable automation outside MCP, use an agent account or a `ci_deploy`
API key. See [Auth and accounts](/agents#auth-and-accounts).

## Related

- **[Publish as an agent](/agents/publishing)**: receipts, claim
  continuation, secret rules.
- **[Auth and accounts](/agents#auth-and-accounts)**: credentials and
  handoff links.
- **[SDK](/reference/sdk)**: typed non-MCP clients.
