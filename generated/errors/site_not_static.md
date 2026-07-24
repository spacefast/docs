---
title: "site_not_static"
description: "This operation only applies to static-runtime sites."
---

This operation only applies to static-runtime sites.

**How to resolve:** Target a static-runtime site.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "site_not_static",
    "message": "This operation only applies to static-runtime sites.",
    "docsUrl": "https://spacefast.com/docs/errors/site_not_static",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
