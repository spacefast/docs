---
title: "dns_provider_feature_unavailable"
description: "The requested DNS provider field or feature is not available for this zone."
---

The requested DNS provider field or feature is not available for this zone.

**How to resolve:** Check the DNS capabilities response and remove unsupported fields.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "dns_provider_feature_unavailable",
    "message": "The requested DNS provider field or feature is not available for this zone.",
    "docsUrl": "https://spacefast.com/docs/errors/dns_provider_feature_unavailable",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
