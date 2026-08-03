---
title: Zero
description: Full-stack TypeScript apps on Spacefast — a Preact client, typed server functions, a real database, and auth — scaffolded with sf create --runtime zero and deployed with sf publish.
---

Spacefast Zero is the full-stack way to build on Spacefast. One project holds your UI, your server logic, your database schema, and your auth — and one command deploys all of it as a running app:

- **Client** — Preact, with hooks that subscribe to server data and re-render live.
- **Server** — typed functions: queries, mutations, actions, and raw HTTP endpoints.
- **Database** — declared in code, migrated for you, one per app.
- **Auth** — every visitor gets a guest identity; WordPress.com sign-in when you want more.

No connection strings, no server sizing, no deploy pipeline to assemble.

:::note
Zero is rolling out gradually. If your account doesn't have it yet, `sf dev` or `sf publish` on a Zero project will tell you.
:::

## From zero to deployed

```bash
sf create my-app --runtime zero   # scaffold from the todo template
cd my-app
sf dev                            # http://localhost:4173, with live reload
```

Edit `client/index.tsx` and `server/index.ts`; the dev server reloads on save. Local state lives in memory by default — restart the server and the data is gone, or pass `--state-backend sqlite` to persist it between runs. When it's ready:

```bash
sf publish
```

Publish compiles the capsule, plans any database migration against the live schema, uploads the files, and brings the app up on its space URL. Every deploy is a normal space [version](/rollback) — `sf versions ls` lists them and `sf rollback` restores a previous one.

`sf create --runtime zero` accepts `--template todo` (the default) or `--template guestbook`, `--title` for the display name, and `--no-git` to skip the `git init`. Already have a directory? `sf init --runtime zero` scaffolds into it.

## Project layout

```text
my-app/
  client/index.tsx      # Preact UI — imports @spacefast/zero/client
  server/index.ts       # the capsule — imports @spacefast/zero/server
  shared/               # types and helpers both sides import
  .env.server           # server-only variables (gitignored)
  spacefast.jsonc       # declares the runtime
  package.json
```

The scaffold's `spacefast.jsonc` declares the runtime — and declaring is the only way to get one. Zero is never inferred from a directory shape:

```jsonc
{
  "name": "my-app",
  "runtime": {
    "kind": "zero",
    "server": "server/index.ts",
    "client": "client/index.tsx"
  }
}
```

Both entries are required, and a server or client that can't be resolved fails the publish rather than degrading to static files.

## The capsule

The server default-exports a `capsule`:

```ts
// server/index.ts
import { boolean, capsule, mutation, query, string, table } from "@spacefast/zero/server";

export default capsule({
  name: "Todo",
  schema: {
    todos: table({
      text: string(),
      done: boolean().default(false),
      ownerId: string(),
    }),
  },
  queries: {
    todos: query((ctx) =>
      ctx.db.todos
        .where("ownerId", ctx.auth.userId)
        .orderBy("createdAt", "desc")
        .all()
    ),
  },
  mutations: {
    addTodo: mutation((ctx, text: string) => {
      const clean = text.trim().slice(0, 160);
      if (!clean) return;
      ctx.db.todos.insert({ text: clean, done: false, ownerId: ctx.auth.userId });
    }),
  },
});
```

### Schema

`table()` declares a collection. Field types: `string()`, `number()`, `boolean()`, `json()`, and `id("otherTable")` for references; `.default(value)` and `.nullable()` modify any field. Every row also gets `id`, `createdAt`, and `updatedAt` automatically.

Add an index for lookups you query often:

```ts
todos: table({ /* fields */ }).index("byOwner", ["ownerId"]),
```

```ts
ctx.db.todos.withIndex("byOwner", (range) => range.eq("ownerId", ctx.auth.userId));
```

### Queries, mutations, actions, endpoints

- **`query(handler)`** — reads. The client subscribes to queries, so results push live whenever the underlying data changes.
- **`mutation(handler)`** — writes. Adds database inserts, updates, deletes, and `ctx.transaction(...)`.
- **`action(handler)`** — one-shot calls for reaching the outside world (outbound `fetch()` and friends). Same read context as a query, none of the live subscription.
- **`endpoint({ method, path }, handler)`** — a raw HTTP route, for webhooks and integrations. Reply with the `json()`, `text()`, `empty()`, or `redirect()` helpers. Paths must start with `/`; `/auth/*` and the platform's `__`-prefixed namespaces are reserved:

```ts
import { endpoint, json } from "@spacefast/zero/server";

endpoints: {
  count: endpoint({ method: "GET", path: "/api/todos/count" }, (ctx) =>
    json({ count: ctx.db.todos.count() })
  ),
},
```

Arguments after `ctx` come from the client call: `mutation((ctx, text: string) => ...)` is invoked as `await addTodo("buy milk")`.

### The handler context

Every handler receives `ctx`:

| Member     | What it is                                                                                                              |
| ---------- | ---------------------------------------------------------------------------------------------------------------------- |
| `ctx.auth` | Who's calling: `userId`, `displayName`, `provider`, `isGuest`, `isAuthenticated`, `email`.                              |
| `ctx.db`   | Your tables. Reads: `.where()`, `.orderBy()`, `.limit()`, `.all()`, `.count()`, `.first()`, `.get(id)`. Mutations also get `.insert()`, `.update(id, patch)`, `.delete(id)`. |
| `ctx.env`  | Server-only variables from `.env.server`.                                                                                 |
| `ctx.log`  | `debug` / `info` / `warn` / `error` — read them back with `sf logs runtime`.                                            |
| `ctx.ai`   | `complete()` and `stream()` for prompts (mutations and endpoints).                                                        |
| `ctx.blob` | `put()` / `get()` / `delete()` / `list()` object storage (mutations and endpoints).                                       |

Two helpers cover the common guards: `requireUser(ctx)` returns the caller's `userId` or throws `unauthorized`, and `requireOwner(ctx, "todos", id)` returns the row or throws `not found` when it isn't theirs.

## The client

The client package gives you hooks for data and a tiny router:

```tsx
// client/index.tsx
import { Link, Route, Router, Routes, useMutation, useQuery } from "@spacefast/zero/client";

import type { Todo } from "../shared/todo";

function Todos() {
  const todos = useQuery<Todo[]>("todos");
  const addTodo = useMutation<[text: string], void>("addTodo");

  async function onSubmit(event: SubmitEvent) {
    event.preventDefault();
    const form = event.currentTarget as HTMLFormElement;
    const text = String(new FormData(form).get("text") ?? "");
    if (!text.trim()) return;
    await addTodo(text);
    form.reset();
  }

  return (
    <section>
      <form onSubmit={(event) => void onSubmit(event)}>
        <input name="text" placeholder="Add a todo" />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </section>
  );
}
```

- **`useQuery(name, ...args)`** — subscribes to a query and re-renders when its result changes. No refetch plumbing; the subscription *is* the cache.
- **`useMutation(name)`** / **`useAction(name)`** — return an async function that calls the server.
- **`Router` / `Routes` / `Route` / `Link`** — client-side routing, with `useNavigate()`, `useParams()`, and `useLocation()` for the programmatic cases.

Put shared types in `shared/` and import them from both sides — the Todo above is the same shape the server inserted.

## Auth

Every visitor starts as a guest with a stable identity — enough to own rows and come back to them. When you need real accounts, drop in the components:

```tsx
import { SignInWithGoogle, SignOut, useAuth } from "@spacefast/zero/client";

function Header() {
  const auth = useAuth();
  if (auth.isLoading) return <span>checking session</span>;
  return (
    <header>
      <span>{auth.displayName}</span>
      {auth.isGuest ? <SignInWithGoogle /> : <SignOut />}
    </header>
  );
}
```

`SignInWithGoogle` starts the hosted sign-in flow — WordPress.com, as the button's default label says — and `SignOut` ends the session. `useAuth()` returns `userId`, `displayName`, `provider` (`guest`, `wpcom`, or `google`), `isGuest`, `isAuthenticated`, and `email`.

While developing locally you're a default guest named `Local`; the hosted app uses the WordPress.com flow above.

## Server variables

Secrets and config the client must never see live in `.env.server`:

```bash
RESEND_API_KEY=re_...
```

Handlers read them through `ctx.env`. The file is gitignored by the starter; publish syncs it into the space's variables as secrets (or sync by hand with `sf env import .env.server`). Anonymous spaces have no account to hold secrets — [claim](/anonymous-publish) the space first. Up to 64 variables, names matching `[A-Za-z_][A-Za-z0-9_]*`, values up to 16 KiB; the `SPACEFAST_` and `ZERO_` prefixes are reserved.

## The database

Inspect any capsule database — the linked space's, another space's, or your local dev server's — with `sf db`:

```bash
sf db                    # tables, columns, and the pending migration plan
sf db my-app             # another space's database
sf db --port 4173        # the database of a running sf dev server
sf db dump my-app        # the rows, too
```

`sf db console` opens a browser console against the database.

Schema changes are migrations planned from your source, and `sf publish` applies the plan on deploy. Destructive changes are refused there — apply drops explicitly with `sf db migrate --drop`, renames with `sf db migrate --rename`, then publish again.

## Deploying from CI

Create an API key with the CI deploy preset and hand it to your runner as `SPACEFAST_TOKEN`:

```bash
sf api-keys create --name ci --preset ci_deploy
```

`sf api-keys list` shows your keys, `sf api-keys revoke` retires one. With `SPACEFAST_TOKEN` set, `sf publish` runs non-interactively from any pipeline.

## Watching what runs

```bash
sf logs my-app runtime      # what your handlers logged
sf logs my-app runtime -f   # follow live
```

Runtime entries carry the request id and the handler that produced them — `--request-id <id>` or `--handler <name>` narrows down, `--json` pipes into `jq`. Plain `sf logs my-app` shows the requests the edge served.

## Limits

A capsule's compiled server bundle is capped at **768 KiB**.

## Command reference

| Command                              | What it does                                                       |
| ------------------------------------ | ------------------------------------------------------------------ |
| `sf create <name> --runtime zero`    | Scaffold a capsule (`--template todo\|guestbook`, `--title`).      |
| `sf init --runtime zero`             | Scaffold a capsule into the current directory.                     |
| `sf dev`                             | Local capsule dev server (`--port 4173`, `--state-backend sqlite`). |
| `sf publish`                         | Compile, migrate, upload, and go live (`--dry-run`, `--wait`).     |
| `sf build`                           | Compile the capsule and its app shell without deploying.           |
| `sf db` / `sf db dump`               | Inspect the local or deployed database.                            |
| `sf db migrate`                      | Apply the live schema's migrations (`--drop`, `--rename`).         |
| `sf db console`                      | Open a browser console against the database.                       |
| `sf logs runtime`                    | What your handlers logged (`-f` to follow).                        |
| `sf api-keys create --preset ci_deploy` | Mint a CI deploy token.                                         |
