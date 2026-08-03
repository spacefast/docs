---
title: "storage_file_too_large"
description: "The Zero storage object exceeds the 5 MiB file limit."
---

The Zero storage object exceeds the 5 MiB file limit.

**How to resolve:** Upload a smaller object.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "storage_file_too_large",
    "message": "The Zero storage object exceeds the 5 MiB file limit.",
    "docsUrl": "https://docs.spacefast.com/errors/storage_file_too_large",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
