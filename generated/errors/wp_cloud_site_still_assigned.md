---
title: "wp_cloud_site_still_assigned"
description: "The provider site still has assignments and cannot be released."
---

The provider site still has assignments and cannot be released.

**How to resolve:** Remove the site's assignments first.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "wp_cloud_site_still_assigned",
    "message": "The provider site still has assignments and cannot be released.",
    "docsUrl": "https://spacefast.com/docs/errors/wp_cloud_site_still_assigned",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
