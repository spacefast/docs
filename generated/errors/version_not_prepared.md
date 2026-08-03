---
title: "version_not_prepared"
description: "The version is not prepared for this operation."
---

The version is not prepared for this operation.

**How to resolve:** Complete the version's upload and finalize steps first.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "version_not_prepared",
    "message": "The version is not prepared for this operation.",
    "docsUrl": "https://docs.spacefast.com/errors/version_not_prepared",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
