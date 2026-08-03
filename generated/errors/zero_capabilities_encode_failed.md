---
title: "zero_capabilities_encode_failed"
description: "The runtime could not encode the Zero endpoint capabilities."
---

The runtime could not encode the Zero endpoint capabilities.

**How to resolve:** Rebuild with valid capability metadata. Report the failure if it persists.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "zero_capabilities_encode_failed",
    "message": "The runtime could not encode the Zero endpoint capabilities.",
    "docsUrl": "https://docs.spacefast.com/errors/zero_capabilities_encode_failed",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
