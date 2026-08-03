---
title: "wp_cloud_anonymous_pool_required"
description: "This operation requires an anonymous pool site."
---

This operation requires an anonymous pool site.

**How to resolve:** Target a pool-class site.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "wp_cloud_anonymous_pool_required",
    "message": "This operation requires an anonymous pool site.",
    "docsUrl": "https://docs.spacefast.com/errors/wp_cloud_anonymous_pool_required",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
