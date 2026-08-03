---
title: "invalid_file_path"
description: "A file path in the request is not a valid space path."
---

A file path in the request is not a valid space path.

**How to resolve:** Use forward-slash relative paths without traversal segments.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "invalid_file_path",
    "message": "A file path in the request is not a valid space path.",
    "docsUrl": "https://docs.spacefast.com/errors/invalid_file_path",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
