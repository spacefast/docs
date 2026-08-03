---
title: "storage_quota_already_unlimited"
description: "The team already has unlimited storage."
---

The team already has unlimited storage.

**How to resolve:** No quota override is needed.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "storage_quota_already_unlimited",
    "message": "The team already has unlimited storage.",
    "docsUrl": "https://docs.spacefast.com/errors/storage_quota_already_unlimited",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
