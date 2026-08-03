---
title: "zero_response_header_forbidden"
description: "A Zero endpoint attempted to set a platform-managed response header."
---

A Zero endpoint attempted to set a platform-managed response header.

**How to resolve:** Remove the reserved response header from the endpoint response.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "zero_response_header_forbidden",
    "message": "A Zero endpoint attempted to set a platform-managed response header.",
    "docsUrl": "https://docs.spacefast.com/errors/zero_response_header_forbidden",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
