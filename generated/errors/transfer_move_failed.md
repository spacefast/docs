---
title: "transfer_move_failed"
description: "The space move backing this transfer failed."
---

The space move backing this transfer failed.

**How to resolve:** Retry the transfer. If it persists, contact support with the transfer id.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "transfer_move_failed",
    "message": "The space move backing this transfer failed.",
    "docsUrl": "https://docs.spacefast.com/errors/transfer_move_failed",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
