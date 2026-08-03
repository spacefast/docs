---
title: "zero_endpoint_index_unreadable"
description: "The Zero endpoint index could not be read."
---

The Zero endpoint index could not be read.

**How to resolve:** Verify the version finalized with zero/endpoints-index.json present.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "zero_endpoint_index_unreadable",
    "message": "The Zero endpoint index could not be read.",
    "docsUrl": "https://docs.spacefast.com/errors/zero_endpoint_index_unreadable",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
