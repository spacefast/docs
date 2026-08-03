---
title: "slug_unavailable"
description: "The slug is already in use within the relevant ownership scope."
---

The slug is already in use within the relevant ownership scope.

**How to resolve:** Choose another slug or use the available suggestion returned by the API.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "slug_unavailable",
    "message": "The slug is already in use within the relevant ownership scope.",
    "docsUrl": "https://docs.spacefast.com/errors/slug_unavailable",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
