---
title: "billing_subscription_conflict"
description: "The team already has an active subscription with another payment provider."
---

The team already has an active subscription with another payment provider.

**How to resolve:** Cancel the existing subscription before subscribing through a different provider.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "billing_subscription_conflict",
    "message": "The team already has an active subscription with another payment provider.",
    "docsUrl": "https://docs.spacefast.com/errors/billing_subscription_conflict",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
