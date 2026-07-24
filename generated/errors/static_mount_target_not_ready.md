---
title: "static_mount_target_not_ready"
description: "The target production version is not ready for static delivery."
---

The target production version is not ready for static delivery.

**How to resolve:** Wait for the target version to finish finalizing, then retry.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "static_mount_target_not_ready",
    "message": "The target production version is not ready for static delivery.",
    "docsUrl": "https://spacefast.com/docs/errors/static_mount_target_not_ready",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
