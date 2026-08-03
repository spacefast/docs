---
title: "dns_provider_validation_failed"
description: "The DNS provider rejected the submitted record data."
---

The DNS provider rejected the submitted record data.

**How to resolve:** Use the field details and provider message to correct the record.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "dns_provider_validation_failed",
    "message": "The DNS provider rejected the submitted record data.",
    "docsUrl": "https://docs.spacefast.com/errors/dns_provider_validation_failed",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
