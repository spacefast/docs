---
title: SDK
description: Install @spacefast/sdk and make typed calls against the Spacefast REST API.
---

The Spacefast SDK is a typed TypeScript client. Spacefast generates it from the
same OpenAPI document as the [REST API reference](/api/reference). Use it when
you want request and response types, and you do not want to write HTTP by hand.

The API remains the contract. Authentication, envelopes, idempotency, and error
codes behave exactly as in the [REST API guide](/api).

## Install

```bash
npm install @spacefast/sdk
```

These examples were checked against `@spacefast/sdk` `0.0.13`. Pin the version
you install. The SDK requires Node.js 20 or newer.

## Create a client

```ts
import { createSpacefastClient } from "@spacefast/sdk";

const token = process.env.SPACEFAST_TOKEN;
if (!token) throw new Error("Set SPACEFAST_TOKEN");

const client = createSpacefastClient({
  baseUrl: "https://api.spacefast.com",
  apiKey: token,
});
```

The client sends `apiKey` as `Authorization: Bearer …`. For browser sessions
that rely on cookies, pass `credentials: "include"` instead of an API key. Mint
keys with [`sf api-keys`](/account/api-keys) or the dashboard.

## One typed call

```ts
const me = await client.get("/v1/me");
console.log(me);

const spaces = await client.get("/v1/spaces", {
  query: { limit: 20 },
});
```

Mutations take a JSON `body` and an optional `idempotencyKey`:

```ts
const space = await client.post("/v1/spaces", {
  body: { name: "docs" },
  idempotencyKey: "01J-create-docs",
});
```

Path parameters use a `path` object:

```ts
const detail = await client.get("/v1/spaces/{spaceId}", {
  path: { spaceId: "spc_123" },
});
```

The client unwraps successful JSON envelopes to the `data` payload. Failures
throw `SpacefastApiError` with `code`, `docsUrl`, `requestId`, and retry hints.

## Exports

| Import                     | Purpose                                      |
| -------------------------- | -------------------------------------------- |
| `@spacefast/sdk`           | `createSpacefastClient`, `SpacefastApiError` |
| `@spacefast/sdk/schema`    | Generated OpenAPI path types                 |
| `@spacefast/sdk/transport` | Envelope helpers and transport types         |

If a capability is missing from the generated release that you installed, call
the documented REST endpoint with `sf api` or `fetch`. Do not guess a method
name.

## Related

- [REST API](/api): auth, envelopes, publish flows.
- [API keys](/account/api-keys): presets for automation.
- [CLI](/cli): `sf api` for ad-hoc signed requests.
