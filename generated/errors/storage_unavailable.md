---
title: "storage_unavailable"
description: "The Zero runtime could not read or persist object storage."
---

The Zero runtime could not read or persist object storage.

**How to resolve:** Retry on a healthy runtime. Contact support if the failure persists.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "storage_unavailable",
    "message": "The Zero runtime could not read or persist object storage.",
    "docsUrl": "https://docs.spacefast.com/errors/storage_unavailable",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
