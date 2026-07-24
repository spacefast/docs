---
title: "site_capacity_exceeded"
description: "The site has reached its capacity and cannot take more content."
---

The site has reached its capacity and cannot take more content.

**How to resolve:** Retry shortly; the platform rebalances spaces onto new sites automatically.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "site_capacity_exceeded",
    "message": "The site has reached its capacity and cannot take more content.",
    "docsUrl": "https://spacefast.com/docs/errors/site_capacity_exceeded",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
