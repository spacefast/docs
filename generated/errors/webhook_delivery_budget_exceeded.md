---
title: "webhook_delivery_budget_exceeded"
description: "The webhook exhausted its delivery budget and was paused."
---

The webhook exhausted its delivery budget and was paused.

**How to resolve:** Fix the receiving endpoint, then redeliver or re-enable the webhook.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "webhook_delivery_budget_exceeded",
    "message": "The webhook exhausted its delivery budget and was paused.",
    "docsUrl": "https://spacefast.com/docs/errors/webhook_delivery_budget_exceeded",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
