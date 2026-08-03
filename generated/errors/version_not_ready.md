---
title: "version_not_ready"
description: "The version is not ready yet."
---

The version is not ready yet.

**How to resolve:** Wait for finalize to complete. The operation receipt reports progress.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "version_not_ready",
    "message": "The version is not ready yet.",
    "docsUrl": "https://docs.spacefast.com/errors/version_not_ready",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
