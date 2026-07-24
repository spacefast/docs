---
title: "zero_method_not_allowed"
description: "The request method is not allowed for this Zero endpoint."
---

The request method is not allowed for this Zero endpoint.

**How to resolve:** Call the endpoint with one of the methods declared by the Zero route.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "zero_method_not_allowed",
    "message": "The request method is not allowed for this Zero endpoint.",
    "docsUrl": "https://spacefast.com/docs/errors/zero_method_not_allowed",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
