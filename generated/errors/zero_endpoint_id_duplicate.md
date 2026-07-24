---
title: "zero_endpoint_id_duplicate"
description: "Two Zero endpoints declare the same endpoint id."
---

Two Zero endpoints declare the same endpoint id.

**How to resolve:** Give every endpoint a unique endpoint id before publishing again.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "zero_endpoint_id_duplicate",
    "message": "Two Zero endpoints declare the same endpoint id.",
    "docsUrl": "https://spacefast.com/docs/errors/zero_endpoint_id_duplicate",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
