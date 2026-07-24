---
title: "version_total_bytes_exceeded"
description: "The version exceeds the maximum total size."
---

The version exceeds the maximum total size.

**How to resolve:** Reduce the content size.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "version_total_bytes_exceeded",
    "message": "The version exceeds the maximum total size.",
    "docsUrl": "https://spacefast.com/docs/errors/version_total_bytes_exceeded",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
