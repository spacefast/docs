---
title: "zero_endpoint_duplicate"
description: "Two Zero endpoints declare the same method and route."
---

Two Zero endpoints declare the same method and route.

**How to resolve:** Give each endpoint a unique method and route before publishing again.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "zero_endpoint_duplicate",
    "message": "Two Zero endpoints declare the same method and route.",
    "docsUrl": "https://spacefast.com/docs/errors/zero_endpoint_duplicate",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
