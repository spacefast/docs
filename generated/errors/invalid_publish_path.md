---
title: "invalid_publish_path"
description: "A file path in the publish payload is not allowed."
---

A file path in the publish payload is not allowed.

**How to resolve:** Use forward-slash relative paths without traversal or control characters.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "invalid_publish_path",
    "message": "A file path in the publish payload is not allowed.",
    "docsUrl": "https://docs.spacefast.com/errors/invalid_publish_path",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
