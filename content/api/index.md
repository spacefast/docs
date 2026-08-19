---
title: REST API
sidebar:
  label: REST API guide
description: "How the Spacefast REST API works: auth, the response envelope, publishing, versions, idempotency, errors, and a link to the full reference."
---

Everything Spacefast does is one REST API at `https://api.spacefast.com` —
the dashboard, the CLI, and agents all speak it. This page explains how the
API behaves; the [full endpoint reference](/api/reference) lists every
operation, parameter, and schema.

## The shape of every response

Successes carry `{ "data": ... }`. Failures are RFC 9457 problem documents
served as `application/problem+json`, where the body is the problem
document itself: a stable machine-readable `code`, a `type` URL that points
at that code's reference page, and a `requestId` for support. Validation
failures add `pointer`, an RFC 6901 JSON Pointer to the failing field.

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

Match on `code`, never on `detail`: messages may improve over time, but
Spacefast never renames or removes a code. The [error reference](/errors)
lists every code.

## Authentication

Send an API key as a bearer token:

```http
Authorization: Bearer $SPACEFAST_TOKEN
```

Create keys in the dashboard or with `sf api-keys create`; the
`--preset ci_deploy` flag mints a least-privilege key for pipelines, and
Spacefast shows the key only once. Presets, rotation, and CI-vs-agent
guidance live on [API keys](/account/api-keys).

One call works without any token: an anonymous `POST /v1/publish` creates a
brand-new space, and the receipt carries a **space key** (`sfc_...`) in
`data.claim.key`. That key is the bearer credential for that single space
until you claim it.

## Publish

`POST /v1/publish` takes a single file, a multipart form of files, or a
zip archive, and returns the whole receipt in one request: the live URL,
the permanent version URL, and — for an anonymous publish — the claim
link.

```bash
curl -F archive=@site.zip https://api.spacefast.com/v1/publish
```

For large uploads and incremental publishes, create a version explicitly:

1. `POST /v1/spaces`
2. `POST /v1/spaces/{spaceId}/versions` returns signed upload targets
3. Upload the bytes
4. Finalize the version

The CLI uses this flow, matching files by `sha256` and size so an unchanged
file is never re-uploaded. Both flows produce the same versions and the
same receipt shape.

## Everything is a version

Every publish freezes an immutable version, and the live URL is a pointer
that moves atomically — see [Versions and channels](/publish/versions). To
roll back, send a `POST` that promotes an earlier version: a pointer flip,
not a re-upload. Version lists, diffs, and logs are all plain GET requests.

## Idempotency and retries

Mutating requests honor an `Idempotency-Key` header: retrying a request
with the same key returns the original result without repeating the side
effect. Publishing identical content is a recognized no-op success
(`noop_publish`) rather than a wasted version.

## Long-running operations

Some mutations outlive the request. Renames, settings applies, transfers,
and domain changes return an operation that you poll until it finishes. The
CLI covers this with `sf operations` — list recent async operations, or
read one by ID, with `--space` to scope the list:

```bash
sf operations --space spc_123
```

## Limits

Spacefast enforces rate limits and plan quotas per account, and
rate-limited responses return a problem document with a `Retry-After`
header. During maintenance windows, mutating requests return `503` with
code `maintenance_in_progress` and a `Retry-After` header; reads keep
working, so retry the mutation after the header's delay.

## For agents

The API has a machine-discovery surface:
[`llms.txt`](https://spacefast.com/docs/llms.txt), an
[agent card](https://spacefast.com/.well-known/agent-card.json), a publish
skill, and a hosted MCP server with typed tools. If an agent makes the
calls, start with [MCP](/agents/mcp) and
[set up the agent](/agents) with one command.

## Hosting sites for your customers

You may host sites for **your own customers**, with your platform as a
tenant acting on behalf of end users. That is a separate, larger surface
with its own guide and reference — see [Platforms](/platforms).
