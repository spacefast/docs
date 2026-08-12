---
title: Zero
description: Build apps with a database, storage, authentication, and typed server functions.
---

Zero is the full-stack Spacefast runtime. One project contains a Preact client,
a typed server capsule, a database schema, authentication, and storage. One
publish command makes the whole app live as a normal space version.
Zero is generally available.

## Quick start

```bash
sf init my-app --runtime zero
cd my-app
sf dev
```

Open `http://localhost:4173`. Edit `client/index.tsx` and `server/index.ts`.
The local server reloads when you save a file. State is in memory unless you
pass `--state-backend sqlite`.

```bash
sf publish
```

The publish command compiles the capsule, plans and applies the database
migration, uploads the client, and activates the version.

## Project layout

```text
my-app/
  client/index.tsx
  server/index.ts
  shared/
  .env.server
  sf.jsonc
  package.json
```

The runtime is explicit:

```jsonc
{
  "$schema": "https://spacefast.com/schemas/sf.json",
  "name": "My app",
  "runtime": {
    "kind": "zero",
    "server": "server/index.ts",
    "client": "client/index.tsx",
  },
}
```

Both entries are required. The publish fails when Spacefast cannot resolve an
entry. Spacefast does not expose the source as static files.

## The capsule

A capsule is the default export of the Zero server entry. It declares the
database schema and every callable server handler.

```ts
// server/index.ts
import { boolean, capsule, mutation, query, string, table }
  from "@spacefast/zero/server";

export default capsule({
  name: "Todos",
  schema: {
    todos: table({
      text: string(),
      done: boolean().default(false),
      ownerId: string(),
    }).index("by_owner", ["ownerId"]),
  },
  queries: {
    todos: query(async (ctx) =>
      ctx.db.todos
        .withIndex("by_owner", (range) => range.eq("ownerId", ctx.auth.userId))
        .order("desc")
        .collect()
    ),
  },
  mutations: {
    addTodo: mutation(async (ctx, text: string) => {
      await ctx.db.todos.insert({ text, done: false, ownerId: ctx.auth.userId });
    }),
  },
});
```

Handler types:

- **`query()`**: reads data and supports live client subscriptions.
- **`mutation()`**: writes data.
- **`action()`**: performs a one-shot server call.
- **`endpoint()`**: exposes a raw HTTP method and path.

Endpoint helpers include `json()`, `text()`, `empty()`, and `redirect()`.
Paths begin with `/`. Spacefast reserves the authentication and platform
namespaces.

Every handler receives `ctx` with:

- **`ctx.auth`**: identity.
- **`ctx.db`**: the declared tables.
- **`ctx.env`**: server-only variables.
- **`ctx.log`**: structured logging.

Call named handlers from the client with hooks:

```tsx
import { useAction, useMutation, useQuery } from "@spacefast/zero/client";

const todos = useQuery<Todo[]>("todos");
const addTodo = useMutation<[text: string], void>("addTodo");
```

`useQuery()` subscribes and re-renders when the result changes. For long
lists, use `usePaginatedQuery()` and its `loadMore()` method. The client also
exports `Router`, `Routes`, `Route`, `Link`, `useNavigate()`, `useParams()`,
and `useLocation()` for client-side routes.

## Authentication

Every Zero visitor starts with a stable guest identity: enough to own rows,
return to them later, and keep anonymous users separate. Hosted sign-in
upgrades the same browser session to an authenticated identity.

```tsx
import { SignInWithGoogle, signOut, useAuth } from "@spacefast/zero/client";
```

Hosted sign-in uses Gravatar; `SignInWithGoogle` is a compatibility alias that
renders the "Sign in with Gravatar" button. `useAuth()` returns `userId`,
`displayName`, `provider` (`"guest"` or `"gravatar"`), `isGuest`,
`isAuthenticated`, `email`, and `isLoading`.

On the server, the same identity is `ctx.auth` in every handler. Check
`ctx.auth.isGuest` when a handler requires sign-in. For row ownership, store
`ctx.auth.userId` with the row, filter reads through an owner index, and verify
that value before an update or delete. Do not accept an owner id from client
arguments.

`sf dev` supplies a local guest identity, so authorization logic works the same
locally and hosted.

## Database

Every Zero app has its own database. Declare the schema in the capsule; the
publish command compares the declaration with the live schema and applies the
migration. Fields support `string()`, `boolean()`, and `id(table)`, with
`.default(value)`. Every row also has `id`, `createdAt`, and `updatedAt`. Add
`.index(name, fields)` for indexed reads with `.withIndex()`.

Read a row with `.get(id)`, or start an indexed query with `.withIndex()` and
finish it with `.collect()`, `.take(count)`, `.first()`, or `.paginate()`.
Indexed queries support `.order("asc")` and `.order("desc")`. Mutation
contexts add `.insert()`, `.update(id, patch)`, and `.delete(id)`.

Normal additive changes apply during `sf publish`. Destructive changes require
an explicit migration command; a publish cannot silently drop data. Express
the rename or drop in the capsule schema first, then allow the planned
migration to include it with the matching boolean flag:

```bash
sf db migrate --rename
sf db migrate --drop
```

Inspect and back up:

```bash
sf db dump --table projects --limit 100
sf db console
sf db export --out ./backup.json
```

The export contains every declared table in a versioned JSON format and only
replaces the destination file after the complete export succeeds. A rollback
promotes older code; it does not rewind database rows. Check the current
schema before you roll back across a migration.

## Storage

Zero client storage handles browser uploads without a separate storage
credential. Objects are addressed by a random 128-bit id. Read URLs carry a
runtime read key that Spacefast can rotate; rotation immediately invalidates
every URL minted under the old key.

```tsx
import { storage } from "@spacefast/zero/client";

const uploaded = await storage.upload(file);
await storage.delete(uploaded.id);
```

Uploads and deletes require an identified visitor; anonymous commenters are
admitted where Comments admits them, against the daily anonymous budget. Only
the uploader can delete an object. The space owner gets an inventory across
uploaders with `sf storage ls` and can force-delete with
`sf storage rm 0123456789abcdef0123456789abcdef --yes`; that delete is
destructive and unrecoverable.

Safety and limits: 5 MiB per object, a 200 MiB rolling daily budget for
anonymous uploads per space, no empty uploads, and no executable or active web
content (HTML, JavaScript, PHP, binaries). Total storage counts against the
plan's storage limit.

## Variables

Keep server-only values in `.env.server`:

```dotenv
RESEND_API_KEY=re_1234567890
```

The publish command syncs the file as secret variables. Read values through
`ctx.env`. See [Variables](/spaces/variables) for shared and space-level
management.

## Operate a live app

```bash
sf runtime status
sf logs runtime --follow
```

Every space already has its own site, so a capsule publish onto an existing
space is an ordinary publish; nothing migrates. Code belongs to the version;
database rows and stored objects belong to the space and do not roll back with
it.

The compiled server bundle is capped at 768 KiB and the client bundle at
8 MiB.
