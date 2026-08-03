---
title: "zero_request_body_too_large"
description: "The Zero request body exceeds the runtime size limit."
---

The Zero request body exceeds the runtime size limit.

**How to resolve:** Send a smaller request body or move large payloads to blob/object storage.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "zero_request_body_too_large",
    "message": "The Zero request body exceeds the runtime size limit.",
    "docsUrl": "https://docs.spacefast.com/errors/zero_request_body_too_large",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
