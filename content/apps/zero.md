---
title: Zero
description: Build apps with a database, storage, authentication, and typed server functions.
---

Zero is the full-stack Spacefast runtime. One project contains a Preact client,
a typed server capsule, a database schema, authentication, and storage. One
publish command makes the whole app live as a normal space version.

:::warning[Private beta]
Zero requires a team private-beta flag. Ask Spacefast to enable it before you
publish a Zero app.
:::

## Quick start

```bash
sf create my-app --runtime zero
```

```bash
cd my-app
```

```bash
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
import {
  boolean,
  capsule,
  endpoint,
  json,
  mutation,
  query,
  string,
  table,
} from "@spacefast/zero/server";

export default capsule({
  name: "Todos",
  schema: {
    todos: table({
      text: string(),
      done: boolean().default(false),
      ownerId: string(),
    }),
  },
  queries: {
    todos: query((ctx) => ctx.db.todos.where("ownerId", ctx.auth.userId).all()),
  },
  mutations: {
    addTodo: mutation((ctx, text: string) =>
      ctx.db.todos.insert({ text, done: false, ownerId: ctx.auth.userId }),
    ),
  },
  endpoints: {
    count: endpoint({ method: "GET", path: "/api/todos/count" }, (ctx) =>
      json({ count: ctx.db.todos.count() }),
    ),
  },
});
```

Handler types: `query()` reads data and supports live client subscriptions,
`mutation()` writes data and can open transactions, `action()` performs a
one-shot call including outbound work, `endpoint()` exposes a raw HTTP method
and path, and `socket()` exposes an application WebSocket handler. Endpoint
helpers include `json()`, `text()`, `empty()`, and `redirect()`. Paths begin
with `/`. Spacefast reserves the authentication and platform namespaces.

Every handler receives `ctx` with `ctx.auth` (identity), `ctx.db` (declared
tables), `ctx.env` (server-only variables), `ctx.log` (structured logging),
`ctx.ai` (completion and streaming helpers), and `ctx.blob` (server-side
object operations).

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

Every Zero visitor starts with a stable guest identity — enough to own rows,
return to them later, and keep anonymous users separate. Hosted sign-in
upgrades the same browser session to an authenticated WordPress.com identity.

```tsx
import { SignInWithWpcom, SignOut, useAuth } from "@spacefast/zero/client";
```

`useAuth()` returns `userId`, `displayName`, `provider`, `isGuest`,
`isAuthenticated`, `email`, and `isLoading`.

On the server, the same identity is `ctx.auth` in every handler. Use
`requireUser(ctx)` when a handler requires a signed-in caller — guests have a
`userId`, but `requireUser()` rejects them. For row ownership, filter reads by
`ctx.auth.userId` and use `requireOwner(ctx, table, id)` before an update or a
delete; it does not reveal whether another user's row exists. Do not accept an
owner id from client arguments.

`sf dev` supplies a local guest identity, so authorization logic works the same
locally and hosted.

## Database

Every Zero app has its own database. Declare the schema in the capsule; the
publish command compares the declaration with the live schema and applies the
migration. Fields support `string()`, `number()`, `boolean()`, `id(table)`,
and `jsonField()`, with `.default(value)` and `.nullable()`. Every row also
has `id`, `createdAt`, and `updatedAt`. Add `.index(name, fields)` for indexed
reads with `.withIndex()`.

Queries use `.where()`, `.orderBy()`, `.limit()`, `.all()`, `.count()`,
`.first()`, `.get(id)`, and `.paginate()`. Mutation contexts add `.insert()`,
`.update(id, patch)`, and `.delete(id)`. Group dependent writes with
`ctx.transaction()` — they commit together or not at all.

Normal additive changes apply during `sf publish`. Destructive changes require
an explicit migration command; a publish cannot silently drop data:

```bash
sf db migrate --rename old_name:new_name
```

```bash
sf db migrate --drop old_table
```

Inspect and back up:

```bash
sf db dump --table projects --limit 100
```

```bash
sf db console
```

```bash
sf db export --out ./backup.json
```

The export contains every declared table in a versioned JSON format and only
replaces the destination file after the complete export succeeds. A rollback
promotes older code — it does not rewind database rows. Check the current
schema before you roll back across a migration.

## Storage

Zero client storage handles browser uploads without a separate storage
credential. Objects are private by default; anyone with the URL can read a
public object.

```tsx
import { storage } from "@spacefast/zero/client";

const uploaded = await storage.upload(file);
const shared = await storage.upload(file, { public: true });
await storage.delete(uploaded.key);
```

Hosted uploads, private reads, and deletes require sign-in. Only the uploader
can delete an object. The space owner gets an inventory across uploaders with
`sf storage ls` and can force-delete with `sf storage rm <key> --yes` — that
delete is destructive and unrecoverable.

Safety and limits: 5 MiB per object, 100 MiB stored per space, no empty
uploads, and no executable or active web content (HTML, JavaScript, PHP,
binaries). Visibility is set at upload time and cannot change — upload a
replacement instead. The capsule's `ctx.blob` API is the server-side object
capability; keep server workflows there and do not relay browser tokens.

## Variables

Keep server-only values in `.env.server`:

```dotenv
RESEND_API_KEY=re_...
```

The publish command syncs the file as secret variables. Read values through
`ctx.env`. See [Variables](/spaces/variables) for shared and space-level
management.

## Operate a live app

```bash
sf runtime status
```

```bash
sf logs runtime --follow
```

The first Zero publish places the space on its own site and database. A publish
can report `zero_activating` while that move completes. Code belongs to the
version; database rows and stored objects belong to the space and do not roll
back with it.

The compiled server bundle has a maximum size of 768 KiB.
