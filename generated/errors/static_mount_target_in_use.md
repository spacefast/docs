---
title: "static_mount_target_in_use"
description: "A static mount dependency blocks changing or deleting this space."
---

A static mount dependency blocks changing or deleting this space.

**How to resolve:** Remove the reported static mount before retrying the operation.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "static_mount_target_in_use",
    "message": "A static mount dependency blocks changing or deleting this space.",
    "docsUrl": "https://docs.spacefast.com/errors/static_mount_target_in_use",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
