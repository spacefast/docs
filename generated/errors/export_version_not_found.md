---
title: "export_version_not_found"
description: "The version requested for export was not found."
---

The version requested for export was not found.

**How to resolve:** List the space's versions and export an existing version id.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "export_version_not_found",
    "message": "The version requested for export was not found.",
    "docsUrl": "https://spacefast.com/docs/errors/export_version_not_found",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
