---
title: Capsule
description: Define a Zero app's server functions and call them from its client.
---

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

## Handler types

- `query()` reads data and supports live client subscriptions.
- `mutation()` writes data and can open transactions.
- `action()` performs a one-shot call, including outbound work.
- `endpoint()` exposes a raw HTTP method and path.
- `socket()` exposes an application WebSocket handler.

Endpoint helpers include `json()`, `text()`, `empty()`, and `redirect()`.
Paths begin with `/`; authentication and platform namespaces are reserved.

## Context

Every handler receives `ctx`:

| Member     | Purpose                                   |
| ---------- | ----------------------------------------- |
| `ctx.auth` | Current identity and authentication state |
| `ctx.db`   | Declared tables and query/write methods   |
| `ctx.env`  | Server-only variables                     |
| `ctx.log`  | Structured runtime logging                |
| `ctx.ai`   | Completion and streaming helpers          |
| `ctx.blob` | Server-side object operations             |

Use `requireUser(ctx)` when a handler requires a signed-in identity. Use
`requireOwner(ctx, table, id)` to load an owned row without revealing whether
another user's row exists.

## Client hooks

Call named handlers from `@spacefast/zero/client`:

```tsx
import { useAction, useMutation, useQuery } from "@spacefast/zero/client";

const todos = useQuery<Todo[]>("todos");
const addTodo = useMutation<[text: string], void>("addTodo");
const sendDigest = useAction<[userId: string], void>("sendDigest");
```

`useQuery()` subscribes and re-renders when its result changes.
`useMutation()` and `useAction()` return async call functions. For long lists,
use `usePaginatedQuery()` and its `loadMore()` method.

## Routing

The client also exports `Router`, `Routes`, `Route`, `Link`, `useNavigate()`,
`useParams()`, and `useLocation()` for client-side routes.

## Variables and logs

Keep server-only values in `.env.server`:

```dotenv
RESEND_API_KEY=re_...
```

Publish syncs the file as secret variables and never uploads it. Read values
through `ctx.env`. Inspect `ctx.log` output with:

```bash
sf logs runtime --follow
```

See [Variables](/spaces/variables) for shared and space-level management.
