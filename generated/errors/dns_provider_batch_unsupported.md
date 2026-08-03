---
title: "dns_provider_batch_unsupported"
description: "The connected DNS provider cannot apply this batch with the required semantics."
---

The connected DNS provider cannot apply this batch with the required semantics.

**How to resolve:** Split the change or use a provider/zone that supports atomic batch writes.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "dns_provider_batch_unsupported",
    "message": "The connected DNS provider cannot apply this batch with the required semantics.",
    "docsUrl": "https://docs.spacefast.com/errors/dns_provider_batch_unsupported",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
