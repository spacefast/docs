---
title: "zero_endpoint_not_found"
description: "No Zero endpoint artifact exists for this endpoint id."
---

No Zero endpoint artifact exists for this endpoint id.

**How to resolve:** Check the route path and rebuild the Zero endpoint index.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "zero_endpoint_not_found",
    "message": "No Zero endpoint artifact exists for this endpoint id.",
    "docsUrl": "https://docs.spacefast.com/errors/zero_endpoint_not_found",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
