---
title: "invalid_user_code"
description: "The user code does not match a pending device login."
---

The user code does not match a pending device login.

**How to resolve:** Enter the code exactly as shown by your CLI. Codes expire after a few minutes.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "invalid_user_code",
    "message": "The user code does not match a pending device login.",
    "docsUrl": "https://docs.spacefast.com/errors/invalid_user_code",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
