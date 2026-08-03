---
title: "storage_delete_forbidden"
description: "The current Zero user did not upload this object."
---

The current Zero user did not upload this object.

**How to resolve:** Sign in as the original uploader before deleting the object.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "storage_delete_forbidden",
    "message": "The current Zero user did not upload this object.",
    "docsUrl": "https://docs.spacefast.com/errors/storage_delete_forbidden",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
