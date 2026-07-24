---
title: "storage_quota_exceeded"
description: "The publish would exceed the plan's storage allowance."
---

The publish would exceed the plan's storage allowance.

**How to resolve:** Delete old versions. Still stuck? POST /v1/feedback with the error code and request id.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "storage_quota_exceeded",
    "message": "The publish would exceed the plan's storage allowance.",
    "docsUrl": "https://spacefast.com/docs/errors/storage_quota_exceeded",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
