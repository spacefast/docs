---
title: Static mounts
description: Serve one same-team space inside another space at a path prefix.
---

A static mount attaches another same-team space's production channel at a path
such as `/docs`. It is useful when separately published sites need one public
origin.

Add a mount by target space ID and a ready website version:

```bash
sf mounts add /docs --target spc_docs --version ver_docs --space main-site
```

The version is an activation fence: the mount becomes eligible when that ready
version is promoted on the target's production channel. After that, the mount
follows the target's production channel rather than freezing one old release.

List active mounts and their immutable versions:

```bash
sf mounts ls --space main-site
```

Remove a mount:

```bash
sf mounts rm mnt_123 --space main-site
```

## Resolution

The host space keeps ownership of its own files and routing. A request that
matches the configured mount prefix resolves against the target space. The
target must belong to the same team; mounts are not a cross-team sharing
mechanism.

Use [redirects or rewrites](/redirects) when the content lives in the same
publish. Use a [proxy route](/proxy-routes) for an external dynamic origin.
