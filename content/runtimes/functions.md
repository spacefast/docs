---
title: Functions
description: Run a worker on a Spacefast space, beside its static files and on the same hostname.
---

:::warning[Private beta]
Functions is available to teams with the private-beta flag. Ask Spacefast to
enable it for your team before publishing a worker.
:::

Functions adds one Web-standard `fetch` handler to a space. Static files are
served first; requests no file answers reach the worker. The worker and files
ship as one version, use one hostname, and roll back together.

## Quick start

```bash
sf create my-api --runtime functions
```

```bash
cd my-api
```

```bash
sf publish
```

The worker default-exports an object with a `fetch` method:

```ts
// handler.ts
export default {
  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url);
    if (url.pathname === "/api/hello") {
      return Response.json({ hello: "world" });
    }
    return new Response("Not found", { status: 404 });
  },
};
```

## Detection and configuration

Spacefast detects the first matching worker entry:

| Path | Typical source |
| --- | --- |
| `.open-next/worker.js` | Next.js built with OpenNext |
| `handler.ts`, `handler.js`, or `handler.mjs` | Standalone worker |
| `functions/index.ts` or `functions/index.js` | Worker in a functions folder |

Declare an entry when the file lives elsewhere, or when you want to pin the
runtime settings:

```jsonc
{
  "$schema": "https://spacefast.com/schemas/sf.json",
  "runtime": {
    "kind": "functions",
    "entry": "build/worker.js",
    "database": true,
    "compatibilityDate": "2026-07-01"
  }
}
```

A declared entry that cannot be resolved fails the publish. A directory with
no declaration and no detected entry remains a static space.

## Runtime contract

Handlers use `Request`, `Response`, streams, `crypto`, and `ctx.waitUntil()`.
Node built-ins are not generally available. OpenNext builds are compiled with
the compatibility support they need.

Outbound access is denied unless the published version has the `fetch`
capability. This is fail-closed: adding `fetch()` to code does not silently add
network authority.

## Variables

Put server-only values in `.env.server` or manage them with [`sf env`](/variables).
The publish command syncs `.env.server` as secret space variables and never
uploads the file. The worker reads those values from `env`.

```dotenv
STRIPE_SECRET_KEY=sk_live_...
```

Database connection strings are withheld. Use the database binding instead.

## Database

Opt in to database access in `sf.jsonc`:

```jsonc
{ "runtime": { "kind": "functions", "database": true } }
```

The worker then receives `env.DB`, a D1-shaped binding:

```ts
export default {
  async fetch(_request: Request, env: Env): Promise<Response> {
    const { results } = await env.DB
      .prepare("SELECT id, email FROM signups ORDER BY created_at DESC LIMIT ?")
      .bind(10)
      .all();
    return Response.json(results);
  },
};
```

Use `prepare().bind()` with `.all()`, `.first()`, `.run()`, or `.raw()`.
`db.exec()` runs DDL and `db.batch()` groups statements. Use `sf db console`
when you need a full SQL session.

## Next.js

Build Next.js with OpenNext's Cloudflare adapter, then publish the directory
containing `.open-next/worker.js`. Spacefast serves static assets from disk and
routes SSR and route handlers to the worker. See [Next.js](/integrations/nextjs)
for the build recipe.

## Develop and inspect

Functions do not run inside `sf dev` yet. Use the framework's dev server, then
publish a version to test the Spacefast runtime.

```bash
sf runtime status
```

```bash
sf logs runtime --follow
```

```bash
sf logs runtime --request-id req_9f21
```

Runtime status reports the deployed entry, bundle digest and size,
compatibility date, capabilities, and dispatch state.

## Limits

- Worker bundle: 8 MiB maximum.
- Request execution: 30 seconds maximum.
- Compatibility date default: `2026-07-01`.
