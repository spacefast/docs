---
title: "anonymous_pool_unavailable"
description: "No pooled capacity is available for anonymous publishes right now."
---

No pooled capacity is available for anonymous publishes right now.

**How to resolve:** Retry shortly; capacity replenishes automatically.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "anonymous_pool_unavailable",
    "message": "No pooled capacity is available for anonymous publishes right now.",
    "docsUrl": "https://spacefast.com/docs/errors/anonymous_pool_unavailable",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
