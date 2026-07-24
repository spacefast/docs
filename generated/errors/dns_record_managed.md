---
title: "dns_record_managed"
description: "This DNS record is managed by Spacefast and cannot be edited directly."
---

This DNS record is managed by Spacefast and cannot be edited directly.

**How to resolve:** Change the binding or feature that owns the record instead of editing it.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "dns_record_managed",
    "message": "This DNS record is managed by Spacefast and cannot be edited directly.",
    "docsUrl": "https://spacefast.com/docs/errors/dns_record_managed",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
