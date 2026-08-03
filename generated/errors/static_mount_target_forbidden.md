---
title: "static_mount_target_forbidden"
description: "The target space is not an authorized space in the same team."
---

The target space is not an authorized space in the same team.

**How to resolve:** Choose another space in the source space's team and authenticate with read access to its versions.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "static_mount_target_forbidden",
    "message": "The target space is not an authorized space in the same team.",
    "docsUrl": "https://docs.spacefast.com/errors/static_mount_target_forbidden",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
