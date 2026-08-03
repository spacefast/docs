---
title: Runtimes
description: Add application code to a space with Zero or Functions.
---

A space serves static files by default. Add a `runtime` block to `sf.jsonc`
when the version needs code as well.

:::warning[Private beta]
Zero and Functions require a team private-beta flag. Ask Spacefast to enable
the runtime you want to use.
:::

| | [Zero](/runtimes/zero) | [Functions](/runtimes/functions) |
| --- | --- | --- |
| You write | Capsule: schema and named handlers | Worker: one `fetch` handler |
| Database | Built in | Optional `env.DB` binding |
| Authentication | Built in | Bring your own flow |
| Storage | Built in | Use an external service |
| Framework | Zero client and server APIs | Web APIs and npm packages |
| Local development | `sf dev` | Your framework's dev server |

Pick Zero when the database, authentication, and storage are the app. Pick
Functions when you already have a worker or SSR build, or want direct control
over request handling.

The runtime block belongs to the version. Publishing compiles it with the
files; promoting an older version restores its code and runtime settings.

```bash
sf create my-app --runtime zero
```

```bash
sf create my-api --runtime functions
```

Both use the normal publish and inspection commands:

```bash
sf publish
```

```bash
sf runtime status
```

```bash
sf logs runtime --follow
```
