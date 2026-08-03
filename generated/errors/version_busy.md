---
title: "version_busy"
description: "The version is busy with another operation."
---

The version is busy with another operation.

**How to resolve:** Wait for the in-flight operation to finish, then retry.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "version_busy",
    "message": "The version is busy with another operation.",
    "docsUrl": "https://docs.spacefast.com/errors/version_busy",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
