---
title: "upload_size_mismatch"
description: "An uploaded file's size does not match the declared size."
---

An uploaded file's size does not match the declared size.

**How to resolve:** Re-check the local file and upload it again.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "upload_size_mismatch",
    "message": "An uploaded file's size does not match the declared size.",
    "docsUrl": "https://spacefast.com/docs/errors/upload_size_mismatch",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
