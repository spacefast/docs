---
title: REST API
sidebar:
  label: REST API guide
description: "How the Spacefast REST API works: auth, success responses, problem documents, publishing, versions, idempotency, and the full reference."
---

Everything Spacefast does is one REST API at `https://api.spacefast.com`. The
dashboard, the CLI, and agents all speak it. There is no private surface behind
it. The [full endpoint reference](/api/reference) lists every operation,
parameter, and schema.

## Successes and errors

JSON successes carry `{ "data": ... }`; list responses add pagination fields,
and asynchronous mutations can also include an operation. A `4xx` or `5xx`
response is a raw [RFC 9457](https://www.rfc-editor.org/rfc/rfc9457.html)
problem document with the media type `application/problem+json`. It is not
wrapped in `{ "error": ... }`.

Match on the stable `code`, not the human-readable `detail`. The `type` URL
points at that code's reference page, and `requestId` identifies the request
for support. The [error reference](/errors) lists every current code.

```json
{
  "type": "https://spacefast.com/docs/errors/access_denied",
  "title": "Access denied",
  "status": 403,
  "detail": "This token cannot access that space.",
  "code": "access_denied",
  "requestId": "req_4mz0v8qk"
}
```

## Authentication

Send an API key as a bearer token:

```http
Authorization: Bearer $SPACEFAST_TOKEN
```

Create keys in the dashboard or with `sf api-keys create`. The
`--preset ci_deploy` flag mints a least-privilege key for pipelines. Spacefast
shows the key only once. Presets, rotation, and CI vs agent guidance live on
[API keys](/account/api-keys).

One call works without any token: an anonymous `POST /v1/publish` creates a
brand-new space. The receipt's `claim` object carries a **space key** (`sfc_…`),
returned once. The key is a bearer token scoped to that one space, and it
authorizes everything you can do to the space — publish, status, sharing,
rotation, delete and restore — until you claim it with `POST /v1/claim`.

## Publish

`POST /v1/publish` takes a single file, a multipart form of files, or a zip
archive, and returns the whole receipt in one request. The receipt carries the
live URL and the immutable version URL. For an anonymous publish, it also
carries the claim link.

```bash
curl -F archive=@site.zip https://api.spacefast.com/v1/publish
```

For large uploads and incremental publishes, create a version explicitly:

1. `POST /v1/spaces`
2. `POST /v1/spaces/{spaceId}/versions` returns signed upload targets
3. Upload the bytes
4. Finalize the version

The CLI uses this flow. It never re-uploads an unchanged file, and it matches
files by `sha256` and size. Both flows produce the same versions and the same
receipt shape.

## Everything is a version

Every publish freezes an immutable version, and the live URL is a pointer that
moves atomically. See [Versions and channels](/publishing/channels). To roll
back, send a `POST` that promotes an earlier version: a pointer flip, not a
re-upload. Version lists, diffs, and logs are all plain GET requests.

## Idempotency and retries

Every `POST` accepts an optional `Idempotency-Key` header. Repeating the same
route and identical request with the same key replays its stored response for
24 hours instead of repeating the side effect. Reusing a key with different
request content returns `409 idempotency_key_reused`; a duplicate that is still
running returns `409 idempotency_conflict_in_progress`.

A credential-free `POST /v1/publish` that uses idempotency must also send a
stable, secret, 64-character hexadecimal value in
`X-Spacefast-Idempotency-Principal`. Reuse both values for retries and never log
them. Retry only when the transport failed before a response or the problem
document says the operation is safe to retry. Publishing content identical to
the current version is a recognized no-op success (`noop_publish`).

## Long-running operations

Some mutations outlive the request. Renames, settings applies, transfers, and
domain changes return an operation that you poll until it finishes.

The CLI covers this with `sf operations`: list recent async operations, or
read one by ID. Pass `--space` to scope the list to a space.

```bash
sf operations --space spc_123
```

## Limits

Spacefast enforces rate limits and plan quotas per account. Rate-limited
responses return the
problem document with a `Retry-After` header.

## For agents

The API has a machine-discovery surface. It includes
[`llms.txt`](https://spacefast.com/docs/llms.txt), an
[agent card](https://spacefast.com/.well-known/agent-card.json), a publish
skill, and a hosted MCP server with typed tools. If an agent makes the calls,
start with [MCP](/agents/mcp) and [set up the agent](/agents) with one
command.

## Hosting sites for your customers

You may host sites for **your own customers**, with your platform as a tenant
acting on behalf of end users. That is a separate, larger surface with its own
guide and reference. See [Platforms](/platforms).
