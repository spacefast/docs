---
title: Rename a space
description: Change a space slug and managed view.fast address without breaking existing links.
---

Renaming a space changes its human-facing slug and managed `view.fast`
hostname. Its immutable space ID stays the same.

In the dashboard, open **Space Settings → General → Managed address**, enter
the new slug, and choose **Change managed address**.

From the CLI:

```bash
sf spaces update --space old-name --slug new-name --wait
```

Or send a slug-only API request:

```http
PATCH /v1/spaces/{spaceId}
Content-Type: application/json

{ "slug": "new-name" }
```

Use the immutable space ID in integrations that rename spaces. Slugs can
change.

## What changes

- The slug and current managed hostname change together.
- Every former managed hostname redirects directly to the current one with a
  path- and query-preserving `307 Temporary Redirect`.
- Former branch aliases redirect to their counterpart under the current
  managed hostname.

Former managed addresses remain attached for the life of the space unless
Spacefast explicitly releases one. Repeated renames never create a redirect
chain: every former address points directly to the current address.

## What stays the same

- The immutable space ID.
- Custom domains, including the primary custom domain.
- Immutable version URLs.
- Published versions, branch aliases, access settings, and content.

If the space has a live version, the rename returns an operation that updates
the runtime and provider hostnames. `--wait` waits for that operation. Repeating
the same rename safely resumes interrupted convergence.

Renames are refused while a space is moving, transferring, or deleting. The
caller needs `spaces:rename` permission.
