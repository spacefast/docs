---
title: "dns_record_not_found"
description: "The DNS record was not found in this zone."
---

The DNS record was not found in this zone.

**How to resolve:** List the zone's records to confirm the record id.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "dns_record_not_found",
    "message": "The DNS record was not found in this zone.",
    "docsUrl": "https://spacefast.com/docs/errors/dns_record_not_found",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
