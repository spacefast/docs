---
title: "storage_empty_file"
description: "The Zero storage upload is empty."
---

The Zero storage upload is empty.

**How to resolve:** Upload a file containing at least 1 byte.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "storage_empty_file",
    "message": "The Zero storage upload is empty.",
    "docsUrl": "https://docs.spacefast.com/errors/storage_empty_file",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
