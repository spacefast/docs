---
title: "site_already_deleted"
description: "The site was already deleted."
---

The site was already deleted.

**How to resolve:** No action needed; the site is gone.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "site_already_deleted",
    "message": "The site was already deleted.",
    "docsUrl": "https://spacefast.com/docs/errors/site_already_deleted",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
