---
title: "runtime_management_unavailable"
description: "The runtime management surface is unavailable for this site."
---

The runtime management surface is unavailable for this site.

**How to resolve:** Retry shortly; if the site stays unreachable, contact support.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "runtime_management_unavailable",
    "message": "The runtime management surface is unavailable for this site.",
    "docsUrl": "https://spacefast.com/docs/errors/runtime_management_unavailable",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
