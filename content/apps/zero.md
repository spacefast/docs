---
title: Zero
description: Build apps with a database, storage, authentication, and typed server functions.
---

Zero is the full-stack Spacefast runtime. One project contains a Preact client,
a typed server capsule, a database schema, authentication, and storage. One
publish command makes the whole app live as a normal space version.
Zero is generally available.

Spacefast Zero is based on the capsule apps concept created by the
[Lakebed](https://docs.lakebed.dev/) project — close enough that a Lakebed
capsule compiles unchanged. See [Compare to Lakebed](#compare-to-lakebed).

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

`useMutation()` and `useAction()` take the handler's argument tuple and its
result type, so `addTodo("Buy milk")` is typed end to end and
`addTodo(42)` fails to compile. `useQuery()` subscribes and
re-renders when the result changes. For long lists, use `usePaginatedQuery()`
and its `loadMore()` method. The client also exports `Router`, `Routes`,
`Route`, `Link`, `useNavigate()`, `useParams()`, and `useLocation()` for
client-side routes.

## A complete app

A guestbook shows the pieces working together: a schema, a live query, a
validated mutation, a raw HTTP webhook, and a Preact client with hosted
sign-in — plus the Spacefast extras: the platform kit, utility styling, and
scoped live-query refreshes. Two files are the whole app.

The server declares the data and every way to change it:

```ts
// server/index.ts
import { capsule, endpoint, json, mutation, query, string, table, text }
  from "@spacefast/zero/server";

export default capsule({
  name: "Guestbook",
  schema: {
    entries: table({
      body: string(),
      authorId: string(),
      authorName: string(),
    }),
  },
  queries: {
    entries: query(async (ctx) =>
      ctx.db.entries.withIndex("by_creation").order("desc").take(50)
    ),
  },
  mutations: {
    sign: mutation(async (ctx, body: string) => {
      const trimmed = body.trim().slice(0, 500);
      if (!trimmed) return;
      await ctx.db.entries.insert({
        body: trimmed,
        authorId: ctx.auth.userId,
        authorName: ctx.auth.displayName,
      });
      ctx.invalidate("entries");
    }),
  },
  endpoints: {
    incoming: endpoint({ method: "POST", path: "/webhooks/entries" },
      async (ctx, req) => {
        if (req.headers.get("x-webhook-secret") !== ctx.env.WEBHOOK_SECRET) {
          return text("unauthorized", { status: 401 });
        }
        const payload = await req.json<{ body: string }>();
        await ctx.db.entries.insert({
          body: payload.body,
          authorId: "webhook",
          authorName: "Webhook",
        });
        ctx.log.info("entry accepted", { source: "webhook" });
        return json({ ok: true });
      }),
  },
});
```

The `sign` mutation validates on the server; the client never writes rows
directly. `ctx.invalidate("entries")` narrows the refresh this mutation
triggers to `entries` subscriptions — declaring nothing is also safe and
refreshes every live query on the page. The webhook checks a shared secret
from `.env.server` before it writes, and answers with the endpoint helpers.

The client calls the same handlers by name. Styling is Tailwind classes on
the `class` attribute, and the interface pieces come from the platform kit:

```tsx
// client/index.tsx
import { SignInWithGoogle, signOut, useAuth, useMutation, useQuery }
  from "@spacefast/zero/client";
import { Button, Card, EmptyState, Input, Spinner } from "@spacefast/zero/kit";
import { useState } from "preact/hooks";

type Entry = {
  id: string;
  body: string;
  authorId: string;
  authorName: string;
  createdAt: string;
  updatedAt: string;
};

export function App() {
  const auth = useAuth();
  const entries = useQuery<Entry[]>("entries");
  const sign = useMutation<[body: string], void>("sign");
  const [draft, setDraft] = useState("");

  return (
    <main class="mx-auto max-w-lg space-y-4 p-6">
      <header class="flex items-center justify-between">
        <h1 class="text-lg font-semibold">Guestbook</h1>
        {auth.isLoading ? (
          <Spinner size="sm" />
        ) : auth.isGuest ? (
          <SignInWithGoogle />
        ) : (
          <Button variant="ghost" size="sm" onClick={() => signOut()}>
            Sign out {auth.displayName}
          </Button>
        )}
      </header>

      <form
        class="flex gap-2"
        onSubmit={(event) => {
          event.preventDefault();
          void sign(draft);
          setDraft("");
        }}
      >
        <Input
          value={draft}
          onInput={(event) => setDraft(event.currentTarget.value)}
          placeholder="Leave a note"
        />
        <Button type="submit">Sign</Button>
      </form>

      {entries.length === 0 ? (
        <EmptyState title="No entries yet" description="Be the first to sign." />
      ) : (
        <ul class="space-y-2">
          {entries.map((entry) => (
            <li key={entry.id}>
              <Card>
                <p class="text-sm">
                  <strong>{entry.authorName}</strong> {entry.body}
                </p>
              </Card>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
```

A `useQuery()` list starts as an empty array, so the first render needs no
loading branch. It re-renders whenever a mutation changes the rows — including
rows the webhook writes — and every open tab updates live.

Run it:

```bash
sf init guestbook --runtime zero
cd guestbook
echo 'WEBHOOK_SECRET=pick-a-long-random-value' > .env.server
sf dev
```

Open `http://localhost:4173` and leave an entry, then post one from outside:

```bash
curl -X POST http://localhost:4173/webhooks/entries \
  -H "content-type: application/json" \
  -H "x-webhook-secret: pick-a-long-random-value" \
  -d '{"body":"hello from a webhook"}'
```

`sf publish` makes it live: the capsule compiles, the migration applies,
`.env.server` syncs as secret variables, and the version activates.

## Styling

Write Tailwind utility classes directly in JSX on the `class` attribute —
there is nothing to install or configure. Zero compiles every class used
anywhere in `client/`, `server/`, and `shared/` into the app's stylesheet,
light and dark variants included; classes nobody uses produce nothing. A
`theme.json` at the project root adjusts the palette and typography the
utilities compile against.

The client also ships batteries:

- **`@spacefast/zero/kit`**: the platform interface kit — `Button`, `Card`,
  `Input`, `Badge`, `Tabs`, `Table`, `CodeBlock`, and more, plus `Icon` with
  the Lucide icon set.
- **`@spacefast/zero/charts`**: `LineChart`, `BarChart`, and `Sparkline`,
  drawn as plain SVG with no charting library.

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
`isAuthenticated`, `email`, `picture`, and `isLoading`.

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
`.default(value)`. Every row also has `id`, `createdAt`, and `updatedAt`.

Every table has a built-in `by_creation` index that reads rows in insertion
order. Add `.index(name, fields)` for your own indexed reads with
`.withIndex()`.

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
`ctx.env`. See [Variables](/publish/variables) for shared and space-level
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

## Compare to Lakebed

A Zero project is a [Lakebed](https://docs.lakebed.dev/) capsule: the same
layout (`server/index.ts` default-exporting `capsule()`, `client/index.tsx`
exporting `App`, `shared/` for both sides), the same schema and handler API
(`table()`, `string()`, `boolean()`, `id(table)`, queries, mutations,
`endpoint()` with `json()` and `text()`), and the same client hooks
(`useQuery`, `useMutation`, `useAuth`, the router, `SignInWithGoogle`,
`signOut`). Tailwind classes in JSX work the same way.

Compatibility is built into the compiler, not left to convention:

- Imports from `lakebed/server` and `lakebed/client` resolve to the Zero
  runtime. `@spacefast/zero/server` and `@spacefast/zero/client` are the
  canonical names; both work.
- `.env.lakebed.server` is read wherever `.env.server` is.

To port a capsule, copy the project and swap the CLI: `sf dev` to run it
locally and `sf publish` instead of a deploy.

What changes on Spacefast:

- Hosted sign-in is Gravatar; `SignInWithGoogle` renders the "Sign in with
  Gravatar" button.
- The project is a space: `sf.jsonc` config, versions, rollback, custom
  domains, and the rest of the platform.

What Zero adds beyond Lakebed:

- The platform kit and charts — see [Styling](#styling).
- `empty()`, `redirect()`, and `ImageResponse` endpoint helpers.
- `ctx.log` structured logging and `ctx.invalidate()` for scoped live-query
  refreshes.
