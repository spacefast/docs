---
title: "zero_client_bundle_not_loaded"
description: "The local Zero dev client bundle has not been generated or loaded."
---

The local Zero dev client bundle has not been generated or loaded.

**How to resolve:** Restart `sf dev` or run a fresh local build before loading the client route.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "zero_client_bundle_not_loaded",
    "message": "The local Zero dev client bundle has not been generated or loaded.",
    "docsUrl": "https://docs.spacefast.com/errors/zero_client_bundle_not_loaded",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
