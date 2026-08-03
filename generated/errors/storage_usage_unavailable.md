---
title: "storage_usage_unavailable"
description: "Storage usage could not be computed right now."
---

Storage usage could not be computed right now.

**How to resolve:** Retry shortly.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "storage_usage_unavailable",
    "message": "Storage usage could not be computed right now.",
    "docsUrl": "https://docs.spacefast.com/errors/storage_usage_unavailable",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
