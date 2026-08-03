---
title: "storage_quota_decrease_not_supported"
description: "This control cannot reduce a team's storage quota."
---

This control cannot reduce a team's storage quota.

**How to resolve:** Use a billing or plan change to reduce the quota.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "storage_quota_decrease_not_supported",
    "message": "This control cannot reduce a team's storage quota.",
    "docsUrl": "https://docs.spacefast.com/errors/storage_quota_decrease_not_supported",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
