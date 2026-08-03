---
title: "dns_provider_feature_descriptors"
description: "This provider exposes domain features through capability descriptors."
---

This provider exposes domain features through capability descriptors.

**How to resolve:** Render and run the advertised feature action instead of assuming a raw DNS record change.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "dns_provider_feature_descriptors",
    "message": "This provider exposes domain features through capability descriptors.",
    "docsUrl": "https://docs.spacefast.com/errors/dns_provider_feature_descriptors",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
