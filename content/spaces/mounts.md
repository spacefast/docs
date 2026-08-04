---
title: Mount another space
description: Serve a space's production content at another path prefix in the same space.
---

A static mount exposes a space's production channel at another path in that
same space, such as `/docs`. The mount strips the prefix before it resolves the
request. So `/docs/guide.html` serves `/guide.html` from the mounted version.

Add a mount with the space's ID and a ready website version. The value of
`--target` must identify the same space that `--space` selects:

```bash
sf mounts add /docs --target spc_main --version ver_main --space spc_main
```

The version is an activation fence. The mount becomes eligible when you promote
that ready version to the space's production channel. After that, the mount
follows the production channel. It does not freeze one old release.

Static mounts cannot target another space, including another space on the same
team.

List active mounts and their immutable versions:

```bash
sf mounts ls --space spc_main
```

Remove a mount:

```bash
sf mounts rm mnt_123 --space spc_main
```

## Resolution

The space keeps ownership of its files and routing. A request that matches the
configured prefix resolves against the active immutable version for that same
space. Requests outside the prefix continue through the space's normal routing.

Use [redirects or rewrites](/spaces/redirects) when the content lives in the same
publish. Use a [proxy route](/spaces/proxy-routes) for an external dynamic origin.
