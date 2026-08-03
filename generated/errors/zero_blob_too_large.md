---
title: "zero_blob_too_large"
description: "The local Zero blob value exceeds the maximum allowed size."
---

The local Zero blob value exceeds the maximum allowed size.

**How to resolve:** Store a smaller value or move the payload to external storage.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "zero_blob_too_large",
    "message": "The local Zero blob value exceeds the maximum allowed size.",
    "docsUrl": "https://docs.spacefast.com/errors/zero_blob_too_large",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
