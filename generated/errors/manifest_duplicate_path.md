---
title: "manifest_duplicate_path"
description: "The upload manifest declares the same path more than once."
---

The upload manifest declares the same path more than once.

**How to resolve:** Deduplicate paths. Comparisons use the canonical (decoded, NFC) form.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "manifest_duplicate_path",
    "message": "The upload manifest declares the same path more than once.",
    "docsUrl": "https://docs.spacefast.com/errors/manifest_duplicate_path",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
