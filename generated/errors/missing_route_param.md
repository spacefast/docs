---
title: "missing_route_param"
description: "A required route parameter is missing from the request path."
---

A required route parameter is missing from the request path.

**How to resolve:** Check the endpoint path in the API reference and include every parameter.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "missing_route_param",
    "message": "A required route parameter is missing from the request path.",
    "docsUrl": "https://spacefast.com/docs/errors/missing_route_param",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
