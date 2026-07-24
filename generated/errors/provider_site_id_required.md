---
title: "provider_site_id_required"
description: "A provider site id is required for this internal operation."
---

A provider site id is required for this internal operation.

**How to resolve:** Pass the provider site reference.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "provider_site_id_required",
    "message": "A provider site id is required for this internal operation.",
    "docsUrl": "https://spacefast.com/docs/errors/provider_site_id_required",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
