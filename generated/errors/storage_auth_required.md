---
title: "storage_auth_required"
description: "This storage operation requires an authenticated Zero user."
---

This storage operation requires an authenticated Zero user.

**How to resolve:** Sign in to the hosted Zero app, then retry the storage operation.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "storage_auth_required",
    "message": "This storage operation requires an authenticated Zero user.",
    "docsUrl": "https://docs.spacefast.com/errors/storage_auth_required",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
