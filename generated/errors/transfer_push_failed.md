---
title: "transfer_push_failed"
description: "The source runtime could not push the space blobs into the transfer bucket."
---

The source runtime could not push the space blobs into the transfer bucket.

**How to resolve:** Retry the move; if it persists, check the source runtime and bucket configuration.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "transfer_push_failed",
    "message": "The source runtime could not push the space blobs into the transfer bucket.",
    "docsUrl": "https://spacefast.com/docs/errors/transfer_push_failed",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
