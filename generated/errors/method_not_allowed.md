---
title: "method_not_allowed"
description: "The requested HTTP method is not supported for this endpoint."
---

The requested HTTP method is not supported for this endpoint.

**How to resolve:** Use one of the methods listed in the Allow response header.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "method_not_allowed",
    "message": "The requested HTTP method is not supported for this endpoint.",
    "docsUrl": "https://docs.spacefast.com/errors/method_not_allowed",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
