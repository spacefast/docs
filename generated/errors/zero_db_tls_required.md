---
title: "zero_db_tls_required"
description: "The application Zero database cannot be connected with verified pinned TLS."
---

The application Zero database cannot be connected with verified pinned TLS.

**How to resolve:** Use the provider-managed database until verified external database TLS is supported.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "zero_db_tls_required",
    "message": "The application Zero database cannot be connected with verified pinned TLS.",
    "docsUrl": "https://docs.spacefast.com/errors/zero_db_tls_required",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
