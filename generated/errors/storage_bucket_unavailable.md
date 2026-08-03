---
title: "storage_bucket_unavailable"
description: "No usable internal storage bucket is configured for this operation."
---

No usable internal storage bucket is configured for this operation.

**How to resolve:** Check the storage bucket registry and credential environment references, then retry.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "storage_bucket_unavailable",
    "message": "No usable internal storage bucket is configured for this operation.",
    "docsUrl": "https://docs.spacefast.com/errors/storage_bucket_unavailable",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
