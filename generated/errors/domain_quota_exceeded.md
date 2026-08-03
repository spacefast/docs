---
title: "domain_quota_exceeded"
description: "Adding this domain would exceed the plan's external domain allowance."
---

Adding this domain would exceed the plan's external domain allowance.

**How to resolve:** Remove unused domains. Still stuck? POST /v1/feedback with the error code and request id.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "domain_quota_exceeded",
    "message": "Adding this domain would exceed the plan's external domain allowance.",
    "docsUrl": "https://docs.spacefast.com/errors/domain_quota_exceeded",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
