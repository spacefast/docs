---
title: "path_too_long"
description: "A file path exceeds the maximum length."
---

A file path exceeds the maximum length.

**How to resolve:** Keep each file path at or under 1024 bytes.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "path_too_long",
    "message": "A file path exceeds the maximum length.",
    "docsUrl": "https://docs.spacefast.com/errors/path_too_long",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
