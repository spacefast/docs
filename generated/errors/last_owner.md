---
title: "last_owner"
description: "The last owner of a team cannot be removed or downgraded."
---

The last owner of a team cannot be removed or downgraded.

**How to resolve:** Promote another member to owner first.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "last_owner",
    "message": "The last owner of a team cannot be removed or downgraded.",
    "docsUrl": "https://docs.spacefast.com/errors/last_owner",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
