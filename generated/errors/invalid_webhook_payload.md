---
title: "invalid_webhook_payload"
description: "The webhook configuration payload is malformed."
---

The webhook configuration payload is malformed.

**How to resolve:** Fix the field referenced by param and retry.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "invalid_webhook_payload",
    "message": "The webhook configuration payload is malformed.",
    "docsUrl": "https://docs.spacefast.com/errors/invalid_webhook_payload",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
