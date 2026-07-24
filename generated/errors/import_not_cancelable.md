---
title: "import_not_cancelable"
description: "The import has progressed past the point where it can be canceled."
---

The import has progressed past the point where it can be canceled.

**How to resolve:** Wait for the import to finish; completed imports can be deleted as versions.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "import_not_cancelable",
    "message": "The import has progressed past the point where it can be canceled.",
    "docsUrl": "https://spacefast.com/docs/errors/import_not_cancelable",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
