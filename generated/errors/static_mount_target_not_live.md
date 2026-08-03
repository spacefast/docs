---
title: "static_mount_target_not_live"
description: "The target space does not have a production version to mount."
---

The target space does not have a production version to mount.

**How to resolve:** Publish or promote a ready version on the target space, then retry.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "static_mount_target_not_live",
    "message": "The target space does not have a production version to mount.",
    "docsUrl": "https://docs.spacefast.com/errors/static_mount_target_not_live",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
