---
title: "zero_routes_invalid"
description: "The Zero routes artifact is invalid."
---

The Zero routes artifact is invalid.

**How to resolve:** Rebuild the generated routes and publish the version again.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "zero_routes_invalid",
    "message": "The Zero routes artifact is invalid.",
    "docsUrl": "https://spacefast.com/docs/errors/zero_routes_invalid",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
