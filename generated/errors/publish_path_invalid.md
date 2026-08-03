---
title: "publish_path_invalid"
description: "A publish path is not a relative, normalized POSIX path."
---

A publish path is not a relative, normalized POSIX path.

**How to resolve:** Use forward-slash relative paths without traversal segments or control characters.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "publish_path_invalid",
    "message": "A publish path is not a relative, normalized POSIX path.",
    "docsUrl": "https://docs.spacefast.com/errors/publish_path_invalid",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
