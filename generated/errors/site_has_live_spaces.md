---
title: "site_has_live_spaces"
description: "The site still has live spaces assigned to it, so it cannot be deleted."
---

The site still has live spaces assigned to it, so it cannot be deleted.

**How to resolve:** Delete the live spaces or move them to another site before deleting this site.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "site_has_live_spaces",
    "message": "The site still has live spaces assigned to it, so it cannot be deleted.",
    "docsUrl": "https://spacefast.com/docs/errors/site_has_live_spaces",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
