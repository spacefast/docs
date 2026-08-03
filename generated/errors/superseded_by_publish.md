---
title: "superseded_by_publish"
description: "A newer publish superseded this operation, so it was skipped."
---

A newer publish superseded this operation, so it was skipped.

**How to resolve:** No action needed. The newer publish already carries the change.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "superseded_by_publish",
    "message": "A newer publish superseded this operation, so it was skipped.",
    "docsUrl": "https://docs.spacefast.com/errors/superseded_by_publish",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
