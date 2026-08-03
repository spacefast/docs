---
title: "zero_endpoint_mismatch"
description: "The requested Zero endpoint does not match the endpoint artifact."
---

The requested Zero endpoint does not match the endpoint artifact.

**How to resolve:** Rebuild routes and artifacts together and redeploy the version.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "zero_endpoint_mismatch",
    "message": "The requested Zero endpoint does not match the endpoint artifact.",
    "docsUrl": "https://docs.spacefast.com/errors/zero_endpoint_mismatch",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
