---
title: "stripe_error"
description: "The billing provider reported an error."
---

The billing provider reported an error.

**How to resolve:** Retry; if it persists, check the team's billing settings.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "stripe_error",
    "message": "The billing provider reported an error.",
    "docsUrl": "https://spacefast.com/docs/errors/stripe_error",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
