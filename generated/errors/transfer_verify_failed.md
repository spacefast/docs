---
title: "transfer_verify_failed"
description: "The target runtime could not verify transferred blob content."
---

The target runtime could not verify transferred blob content.

**How to resolve:** Retry the move; if it persists, check the target runtime and bucket integrity.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "transfer_verify_failed",
    "message": "The target runtime could not verify transferred blob content.",
    "docsUrl": "https://spacefast.com/docs/errors/transfer_verify_failed",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
