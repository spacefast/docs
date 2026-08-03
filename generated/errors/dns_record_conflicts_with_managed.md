---
title: "dns_record_conflicts_with_managed"
description: "The DNS change conflicts with a record Spacefast manages for this domain."
---

The DNS change conflicts with a record Spacefast manages for this domain.

**How to resolve:** Remove or adjust the conflicting record. Managed records cannot be overridden.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "dns_record_conflicts_with_managed",
    "message": "The DNS change conflicts with a record Spacefast manages for this domain.",
    "docsUrl": "https://docs.spacefast.com/errors/dns_record_conflicts_with_managed",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
