---
title: "provider_runtime_feature_unsupported"
description: "The hosting provider does not support this runtime feature."
---

The hosting provider does not support this runtime feature.

**How to resolve:** Check the feature's availability for this site's runtime.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "provider_runtime_feature_unsupported",
    "message": "The hosting provider does not support this runtime feature.",
    "docsUrl": "https://docs.spacefast.com/errors/provider_runtime_feature_unsupported",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
