---
title: "site_suspended"
description: "The site is suspended, so its spaces cannot be served or modified."
---

The site is suspended, so its spaces cannot be served or modified.

**How to resolve:** Resolve the suspension reason with support or the owning tenant.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "site_suspended",
    "message": "The site is suspended, so its spaces cannot be served or modified.",
    "docsUrl": "https://docs.spacefast.com/errors/site_suspended",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
