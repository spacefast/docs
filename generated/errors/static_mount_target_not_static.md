---
title: "static_mount_target_not_static"
description: "The target production version contains runtime functions."
---

The target production version contains runtime functions.

**How to resolve:** Promote a fully static target version or serve the dynamic application without a static mount.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "static_mount_target_not_static",
    "message": "The target production version contains runtime functions.",
    "docsUrl": "https://docs.spacefast.com/errors/static_mount_target_not_static",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
