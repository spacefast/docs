---
title: Database
description: Declare, query, migrate, and inspect the database attached to a Zero app.
---

Every Zero app has its own database. Declare its schema in the capsule; publish
compares that declaration with the live schema and applies the migration.

## Schema

```ts
import { boolean, id, jsonField, number, string, table } from "@spacefast/zero/server";

const schema = {
  projects: table({
    name: string(),
    archived: boolean().default(false),
    budget: number().nullable(),
    ownerId: id("users"),
    settings: jsonField(),
  }).index("byOwner", ["ownerId"]),
};
```

Fields support `string()`, `number()`, `boolean()`, `id(table)`, and
`jsonField()`. Use `.default(value)` and `.nullable()` where needed. Every row
also has `id`, `createdAt`, and `updatedAt`.

## Read and write

```ts
const projects = await ctx.db.projects
  .withIndex("byOwner", (range) => range.eq("ownerId", ctx.auth.userId))
  .order("desc")
  .collect();
```

Queries can also use `.where()`, `.orderBy()`, `.limit()`, `.all()`,
`.count()`, `.first()`, and `.get(id)`. Paginated queries use `.paginate()`.

Mutation contexts add `.insert()`, `.update(id, patch)`, and `.delete(id)`.
Group dependent writes with `ctx.transaction()` so they commit together or
not at all.

## Migrations

Normal additive changes apply during `sf publish`. Destructive changes require
an explicit migration command so a deploy cannot silently drop data.

```bash
sf db
```

```bash
sf db migrate --rename old_name:new_name
```

```bash
sf db migrate --drop old_table
```

```bash
sf publish
```

Review the migration plan before approving a rename or drop.

## Inspect data

```bash
sf db
```

```bash
sf db dump --table projects --limit 100
```

```bash
sf db console
```

Use `sf db --port 4173` to inspect a running local Zero server. The browser
console is a short-lived, full SQL session; treat its URL as a credential.

Rolling back promotes older code but does not rewind database rows. Check the
current schema before rolling back across a migration.
