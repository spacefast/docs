---
title: "dns_field_not_applicable"
description: "The DNS field is not writable for this provider, record type, or management mode."
---

The DNS field is not writable for this provider, record type, or management mode.

**How to resolve:** Check the DNS capabilities response and remove fields that are not creatable or patchable.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "dns_field_not_applicable",
    "message": "The DNS field is not writable for this provider, record type, or management mode.",
    "docsUrl": "https://spacefast.com/docs/errors/dns_field_not_applicable",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
