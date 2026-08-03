---
title: "static_mount_source_not_ready"
description: "The website version that owns this mount is not ready."
---

The website version that owns this mount is not ready.

**How to resolve:** Wait for the website version to finish finalizing, then retry.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "static_mount_source_not_ready",
    "message": "The website version that owns this mount is not ready.",
    "docsUrl": "https://docs.spacefast.com/errors/static_mount_source_not_ready",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
