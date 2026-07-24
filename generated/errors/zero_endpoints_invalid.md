---
title: "zero_endpoints_invalid"
description: "The Zero endpoints payload is invalid."
---

The Zero endpoints payload is invalid.

**How to resolve:** Send an endpoint array within the supported count and size limits.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "zero_endpoints_invalid",
    "message": "The Zero endpoints payload is invalid.",
    "docsUrl": "https://spacefast.com/docs/errors/zero_endpoints_invalid",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
