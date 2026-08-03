---
title: "zero_endpoint_index_malformed"
description: "The Zero endpoint index could not be parsed."
---

The Zero endpoint index could not be parsed.

**How to resolve:** Rebuild the generated endpoint index and redeploy.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "zero_endpoint_index_malformed",
    "message": "The Zero endpoint index could not be parsed.",
    "docsUrl": "https://docs.spacefast.com/errors/zero_endpoint_index_malformed",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
