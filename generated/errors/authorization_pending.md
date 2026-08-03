---
title: "authorization_pending"
description: "The device login has not been approved yet."
---

The device login has not been approved yet.

**How to resolve:** Keep polling at the advised interval until the user approves the request.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "authorization_pending",
    "message": "The device login has not been approved yet.",
    "docsUrl": "https://docs.spacefast.com/errors/authorization_pending",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
