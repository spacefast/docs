---
title: "transfer_source_changed"
description: "The space changed since the transfer was created, so it must be re-confirmed."
---

The space changed since the transfer was created, so it must be re-confirmed.

**How to resolve:** Review the space's current state and confirm the transfer again.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "transfer_source_changed",
    "message": "The space changed since the transfer was created, so it must be re-confirmed.",
    "docsUrl": "https://spacefast.com/docs/errors/transfer_source_changed",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
