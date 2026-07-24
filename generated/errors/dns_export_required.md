---
title: "dns_export_required"
description: "This operation requires exporting the current DNS records first."
---

This operation requires exporting the current DNS records first.

**How to resolve:** Export the zone, confirm the snapshot, and retry the operation.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "dns_export_required",
    "message": "This operation requires exporting the current DNS records first.",
    "docsUrl": "https://spacefast.com/docs/errors/dns_export_required",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
