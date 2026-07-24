---
title: "access_denied"
description: "The authorization request was denied by the user."
---

The authorization request was denied by the user.

**How to resolve:** Restart the login flow and approve the request to continue.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "access_denied",
    "message": "The authorization request was denied by the user.",
    "docsUrl": "https://spacefast.com/docs/errors/access_denied",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
