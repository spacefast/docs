---
title: "dns_provider_field_unsupported"
description: "The DNS provider does not support one of the requested record fields."
---

The DNS provider does not support one of the requested record fields.

**How to resolve:** Remove the unsupported field or switch to a provider and plan whose capabilities allow it.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "dns_provider_field_unsupported",
    "message": "The DNS provider does not support one of the requested record fields.",
    "docsUrl": "https://docs.spacefast.com/errors/dns_provider_field_unsupported",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
