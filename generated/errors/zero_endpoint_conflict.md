---
title: "zero_endpoint_conflict"
description: "Two Zero routes resolve to the same runtime path."
---

Two Zero routes resolve to the same runtime path.

**How to resolve:** Remove the duplicate generated or explicit lookup route and publish again.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "zero_endpoint_conflict",
    "message": "Two Zero routes resolve to the same runtime path.",
    "docsUrl": "https://docs.spacefast.com/errors/zero_endpoint_conflict",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
