---
title: "datacenters_unavailable"
description: "Placement regions are temporarily unavailable."
---

Placement regions are temporarily unavailable.

**How to resolve:** Retry after the datacenter list has synced.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "datacenters_unavailable",
    "message": "Placement regions are temporarily unavailable.",
    "docsUrl": "https://spacefast.com/docs/errors/datacenters_unavailable",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
