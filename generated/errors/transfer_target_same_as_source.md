---
title: "transfer_target_same_as_source"
description: "The transfer target is the same principal that already owns the space."
---

The transfer target is the same principal that already owns the space.

**How to resolve:** Pick a different target team or account.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "transfer_target_same_as_source",
    "message": "The transfer target is the same principal that already owns the space.",
    "docsUrl": "https://docs.spacefast.com/errors/transfer_target_same_as_source",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
