---
title: "zero_response_too_large"
description: "The Zero endpoint response exceeds the runtime size limit."
---

The Zero endpoint response exceeds the runtime size limit.

**How to resolve:** Return a smaller response body or paginate the data.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "zero_response_too_large",
    "message": "The Zero endpoint response exceeds the runtime size limit.",
    "docsUrl": "https://docs.spacefast.com/errors/zero_response_too_large",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
