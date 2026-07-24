---
title: "not_enrolled"
description: "This account is not enrolled in the private beta, so the API cannot be used yet."
---

This account is not enrolled in the private beta, so the API cannot be used yet.

**How to resolve:** Join the waitlist or open your beta invite link, then sign in again.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "not_enrolled",
    "message": "This account is not enrolled in the private beta, so the API cannot be used yet.",
    "docsUrl": "https://spacefast.com/docs/errors/not_enrolled",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
