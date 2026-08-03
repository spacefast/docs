---
title: "zero_endpoint_index_invalid"
description: "The Zero endpoint index does not contain valid endpoint mappings."
---

The Zero endpoint index does not contain valid endpoint mappings.

**How to resolve:** Rebuild and republish the Zero project.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "zero_endpoint_index_invalid",
    "message": "The Zero endpoint index does not contain valid endpoint mappings.",
    "docsUrl": "https://docs.spacefast.com/errors/zero_endpoint_index_invalid",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
