---
title: REST API
description: How the Spacefast REST API works — auth, the response envelope, publishing, versions, idempotency, and errors — with a link to the full reference.
---

Everything Spacefast does is one REST API at `https://api.spacefast.com`. The dashboard, the CLI, and agents all speak it; there is no private surface behind it. This page is the guide — the [full endpoint reference](/api/reference) lists every operation, parameter, and schema.

## The shape of every response

Every response uses one envelope: successes carry `{ "data": ... }`, failures carry `{ "error": ... }`. An error always has a stable machine-readable `code`, a human `message`, a `docsUrl` pointing at that code's reference page, and a `requestId` for support. Match on `code`, never on `message` — messages may improve over time, codes are never renamed or removed. The [error reference](/errors) lists all of them.

```json
{
  "error": {
    "code": "space_not_found",
    "message": "No space with that id is visible to this token.",
    "docsUrl": "https://spacefast.com/docs/errors/space_not_found",
    "requestId": "req_4mz0v8qk"
  }
}
```

## Authentication

Send an API key as a bearer token:

```
Authorization: Bearer <SPACEFAST_TOKEN>
```

Create keys in the dashboard or with `sf api-keys create` — the `--preset ci_deploy` flag mints a least-privilege key for pipelines, shown once. One call works without any token: an anonymous `POST /v1/publish` creates a brand-new space and returns a one-time claim token alongside the receipt. That claim token acts as a bearer token scoped to that single space until it is claimed.

## Publishing: two front doors

**One POST.** `POST /v1/publish` takes a single file, a multipart form of files, or a zip archive, and returns the whole receipt in one request — the live URL, the permanent version URL, and (for anonymous publishes) the claim link.

```bash
curl -F archive=@site.zip https://api.spacefast.com/v1/publish
```

**The granular flow.** For large uploads and incremental publishes, create a version explicitly: `POST /v1/spaces` → `POST /v1/spaces/{spaceId}/versions` returns signed upload targets → upload the bytes → finalize. The CLI uses this flow; unchanged files (matched by `sha256` and size) are never re-uploaded. Both doors converge on the same versions and the same receipt shape.

## Everything is a version

Every publish freezes an immutable version with its own permanent URL. The live URL is a pointer that moves atomically, so a request never sees a half-published site. Rollback is `POST`ing a promote of an earlier version — a pointer flip, not a re-upload. Version lists, diffs, and logs are all plain GETs.

## Idempotency and retries

Mutating requests honor an `Idempotency-Key` header: retrying a request with the same key returns the original result instead of repeating the side effect. Publishing identical content is itself a recognized no-op success (`noop_publish`), not a wasted version — safe to retry blindly.

## Limits

Rate limits and plan quotas are enforced per account and documented in [Limits](/limits). Rate-limited responses return the standard error envelope with a `Retry-After` header.

## For agents

The API ships a machine-discovery surface —
[`llms.txt`](https://spacefast.com/docs/llms.txt), an
[agent card](https://spacefast.com/.well-known/agent-card.json), a publish
skill, and a hosted MCP server with typed tools. If an agent is doing the
calling, start at [Agents](/agents).

## Building a platform on Spacefast?

Hosting sites for **your own customers** — tenants, acting on behalf of end users — is a separate, larger surface with its own guide and reference: see [Platforms](/platforms).
