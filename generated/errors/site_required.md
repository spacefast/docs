---
title: "site_required"
description: "A site reference is required for this operation."
---

A site reference is required for this operation.

**How to resolve:** Pass the site id.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "site_required",
    "message": "A site reference is required for this operation.",
    "docsUrl": "https://docs.spacefast.com/errors/site_required",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
