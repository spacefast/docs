---
title: "version_quota_exceeded"
description: "The space has reached its version quota."
---

The space has reached its version quota.

**How to resolve:** Delete old versions. Still stuck? POST /v1/feedback with the error code and request id.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "version_quota_exceeded",
    "message": "The space has reached its version quota.",
    "docsUrl": "https://docs.spacefast.com/errors/version_quota_exceeded",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
