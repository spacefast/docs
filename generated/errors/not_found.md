---
title: "not_found"
description: "The requested resource was not found."
---

The requested resource was not found.

**How to resolve:** Verify the id and that your credential can access the resource.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "not_found",
    "message": "The requested resource was not found.",
    "docsUrl": "https://spacefast.com/docs/errors/not_found",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
