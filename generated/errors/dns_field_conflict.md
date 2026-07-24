---
title: "dns_field_conflict"
description: "Two DNS fields cannot be used together for this provider or record type."
---

Two DNS fields cannot be used together for this provider or record type.

**How to resolve:** Follow the capability rule in the error details and submit only the compatible fields.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "dns_field_conflict",
    "message": "Two DNS fields cannot be used together for this provider or record type.",
    "docsUrl": "https://spacefast.com/docs/errors/dns_field_conflict",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
