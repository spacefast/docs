---
title: "invalid_webhook_signature"
description: "The webhook signature did not verify."
---

The webhook signature did not verify.

**How to resolve:** Verify with the current webhook secret over `{t}.{rawBody}` and reject stale timestamps.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "invalid_webhook_signature",
    "message": "The webhook signature did not verify.",
    "docsUrl": "https://spacefast.com/docs/errors/invalid_webhook_signature",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
