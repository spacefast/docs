---
title: "dns_provider_operation_failed"
description: "The DNS provider operation failed before the requested change was accepted."
---

The DNS provider operation failed before the requested change was accepted.

**How to resolve:** Open the DNS operation details, follow its diagnostics, and retry only after the failing cause is resolved.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "dns_provider_operation_failed",
    "message": "The DNS provider operation failed before the requested change was accepted.",
    "docsUrl": "https://docs.spacefast.com/errors/dns_provider_operation_failed",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
