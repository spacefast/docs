---
title: "space_moving"
description: "The space is moving between sites, which blocks this operation."
---

The space is moving between sites, which blocks this operation.

**How to resolve:** Wait for the move to finish, then retry.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "space_moving",
    "message": "The space is moving between sites, which blocks this operation.",
    "docsUrl": "https://docs.spacefast.com/errors/space_moving",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
