---
title: "claimed_space_quota_exceeded"
description: "Claiming this space would exceed the target team's space quota."
---

Claiming this space would exceed the target team's space quota.

**How to resolve:** Delete unused spaces, then claim again. Still stuck? POST /v1/feedback with the error code and request id.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "claimed_space_quota_exceeded",
    "message": "Claiming this space would exceed the target team's space quota.",
    "docsUrl": "https://docs.spacefast.com/errors/claimed_space_quota_exceeded",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
