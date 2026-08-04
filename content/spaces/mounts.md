---
title: Mount another space
description: Serve a space's production content at another path prefix in the same space.
---

A static mount exposes a space's production channel at another path in that
same space, such as `/docs`. The mount strips the prefix before resolving the
request, so `/docs/guide.html` serves `/guide.html` from the mounted version.

Add a mount with the space's ID and a ready website version. The value passed to
`--target` must identify the same space selected by `--space`:

```bash
sf mounts add /docs --target spc_main --version ver_main --space spc_main
```

The version is an activation fence: the mount becomes eligible when that ready
version is promoted to the space's production channel. After that, the mount
follows the production channel rather than freezing one old release.

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
