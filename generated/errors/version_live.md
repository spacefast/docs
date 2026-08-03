---
title: "version_live"
description: "The version is live and cannot be deleted."
---

The version is live and cannot be deleted.

**How to resolve:** Promote another version to live first.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "version_live",
    "message": "The version is live and cannot be deleted.",
    "docsUrl": "https://docs.spacefast.com/errors/version_live",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
