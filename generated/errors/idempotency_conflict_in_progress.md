---
title: "idempotency_conflict_in_progress"
description: "Another request with the same Idempotency-Key is still in flight."
---

Another request with the same Idempotency-Key is still in flight.

**How to resolve:** Wait for the original request to finish; its response will be replayed.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "idempotency_conflict_in_progress",
    "message": "Another request with the same Idempotency-Key is still in flight.",
    "docsUrl": "https://spacefast.com/docs/errors/idempotency_conflict_in_progress",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
