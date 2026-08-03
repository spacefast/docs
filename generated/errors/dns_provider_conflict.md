---
title: "dns_provider_conflict"
description: "The DNS provider rejected the change because it conflicts with existing provider state."
---

The DNS provider rejected the change because it conflicts with existing provider state.

**How to resolve:** Refresh the provider snapshot, resolve the conflicting record or setting, and retry.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "dns_provider_conflict",
    "message": "The DNS provider rejected the change because it conflicts with existing provider state.",
    "docsUrl": "https://docs.spacefast.com/errors/dns_provider_conflict",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
