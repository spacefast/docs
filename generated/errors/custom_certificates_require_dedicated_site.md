---
title: "custom_certificates_require_dedicated_site"
description: "Custom certificates are unavailable while this space uses shared placement."
---

Custom certificates are unavailable while this space uses shared placement.

**How to resolve:** Move the space to dedicated placement before managing custom certificates.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "custom_certificates_require_dedicated_site",
    "message": "Custom certificates are unavailable while this space uses shared placement.",
    "docsUrl": "https://docs.spacefast.com/errors/custom_certificates_require_dedicated_site",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
