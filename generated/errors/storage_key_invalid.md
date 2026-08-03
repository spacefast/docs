---
title: "storage_key_invalid"
description: "The Zero storage key is malformed."
---

The Zero storage key is malformed.

**How to resolve:** Use the public or private object key returned by storage.upload.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "storage_key_invalid",
    "message": "The Zero storage key is malformed.",
    "docsUrl": "https://docs.spacefast.com/errors/storage_key_invalid",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
