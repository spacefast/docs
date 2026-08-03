---
title: Functions
description: Add server-side code to a space — sf publish detects a handler module or an OpenNext build, compiles it into a worker, and runs it for the requests your files can't answer.
---

Most of a site is files. For the part that isn't — an API route, a form handler, a webhook receiver, a whole Next.js app — Spacefast Functions run your code on the edge, inside the same space and on the same hostname.

There's no separate deploy story: `sf publish` detects executable code in your publish directory, compiles it into a worker, and ships it as part of the version. Versions, previews, and [rollback](/rollback) all work the way they already do — the worker goes along for the ride.

:::note
Functions is rolling out gradually. On accounts without it, a detected handler still publishes but never executes — the version serves as static content. [`sf runtime status`](#inspect) shows whether your worker is live.
:::

## Your first function

Scaffold a worker project and publish it:

```bash
sf create my-api --runtime functions
cd my-api
sf publish
```

The scaffold writes two files that matter. A `handler.ts` — a module that default-exports a plain handler object, the same shape as a Cloudflare Worker:

```ts
// handler.ts
export default {
  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url);
    if (url.pathname === "/api/hello") {
      return Response.json({ hello: "my-api" });
    }
    return new Response("Not found", { status: 404 });
  },
};
```

And a `spacefast.jsonc` that declares the runtime:

```jsonc
{
  "name": "my-api",
  "runtime": {
    "kind": "functions",
    "entry": "handler.ts"
  }
}
```

Or drop a `handler.ts` into a directory you already publish — detection finds it with no config at all. Either way, requests that no file on disk can answer run your handler; everything else is served from disk as usual.

## What gets detected

Detection runs on every directory publish. The first match wins:

| File                               | Kind                            |
| ---------------------------------- | ------------------------------- |
| `.open-next/worker.js`             | Next.js app built with OpenNext |
| `handler.ts` / `handler.js` / `handler.mjs` | Standalone handler      |
| `functions/index.ts` / `functions/index.js` | Standalone handler      |

A project with none of these publishes as a plain static site, exactly as before — unless `spacefast.jsonc` declares `runtime.kind: "functions"`. A declared runtime that resolves to no worker fails the publish instead of silently going static.

Pin an entry yourself when your layout doesn't match the conventions:

```jsonc
{
  "runtime": {
    "kind": "functions",
    "entry": "src/worker.ts"
  }
}
```

Naming an entry that doesn't exist is an error, not a silent static publish.

## The handler contract

The entry module must **default-export a plain object** with a `fetch` method — `export const fetch = ...` or a class export won't run. `fetch` receives a standard `Request` and returns a `Response` (or a promise of one):

```ts
export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);
    if (url.pathname === "/api/time") {
      return Response.json({ now: new Date().toISOString() });
    }
    return new Response("not found", { status: 404 });
  },
};
```

You write against the web-standard runtime: `Request` / `Response`, `crypto`, streams, and `ctx.waitUntil()` for work that should outlive the response. Node built-ins are not available — Next.js deploys are the exception, compiled with `nodejs_compat` (see below). Outbound network calls are refused: `fetch()` from a handler gets a 403, so a function's world is its request, its response, and `env.DB`.

## Static first, worker second

The worker is the last resort, not the first. A request any file can answer is served from disk; your `fetch` runs only for the paths nothing else claims — ahead of the SPA fallback, if you've configured one. Assets — including `/_next/static/*` — never leave the origin.

That's the pattern to lean on: ship the app shell and assets as files, and let the handler cover the dynamic surface.

## Local development

`sf dev` doesn't run workers locally — on a functions project it refuses and points you here. Use your framework's own dev server (`next dev`, `vite`, and so on), then `sf publish` when you're ready.

## The `env` argument

The second handler argument carries the version's bindings — currently one: `env.DB`, the opt-in database binding below. Space variables set with `sf env set` don't reach the worker, and database connection strings (`DATABASE_URL`, `POSTGRES_URL`, and friends) are withheld on purpose. A function reaches data through `env.DB`, full stop.

## The database binding

Opt in and your handler gets `env.DB` — a binding to your space's database, shaped after Cloudflare D1:

```jsonc
{
  "runtime": {
    "kind": "functions",
    "database": true
  }
}
```

```ts
export default {
  async fetch(request, env) {
    const { results } = await env.DB
      .prepare("SELECT id, email FROM signups ORDER BY created_at DESC LIMIT ?")
      .bind(10)
      .all();
    return Response.json(results);
  },
};
```

The full D1 surface works: `prepare(sql).bind(...)` then `.all()`, `.first(column?)`, `.run()`, or `.raw()`, plus `db.exec(sql)` for DDL and `db.batch([...])` to group statements into one round trip. The schema is yours to manage — run `CREATE TABLE IF NOT EXISTS` through `db.exec()` lazily on first use, or from your deploy pipeline.

## Next.js

Point `sf publish` at a directory containing `.open-next/worker.js` — the output of an [OpenNext](https://opennext.js.org) build — and the whole app deploys: static assets served from disk, SSR and route handlers in the worker. Spacefast compiles the bundle with the `nodejs_compat` flag, so Node-style dependencies work.

See [Next.js on Spacefast](/integrations/nextjs) for the full recipe.

## Logs

One command, two kinds of logs:

```bash
sf logs              # requests the edge served
sf logs runtime      # what your handler logged
sf logs runtime -f   # follow live
```

Runtime entries carry the request id and, for Functions, a handler label of `METHOD /path` — narrow down with `--request-id <id>` or `--handler "GET /api/time"`, and add `--json` for one object per line when piping into `jq`.

## Inspect

`sf runtime status` shows the Functions section for a space: dispatch state (`serving`, `ready`, or `absent`), the detected entry, bundle size, granted capabilities, and compatibility date. It's the fastest way to confirm a publish actually wired the worker.

## Limits

- Worker bundles are capped at **8 MiB**.
- A request the worker can't answer within **30 seconds** is cut off.

## Compatibility dates

The runtime evolves; your published versions shouldn't have to. `functions.compatibilityDate` pins the semantics a version was written against (default `2026-07-01`):

```jsonc
{
  "runtime": {
    "kind": "functions",
    "compatibilityDate": "2026-07-01"
  }
}
```

Rolling back to an old version restores the runtime behavior it was built with, not whatever is current today.
