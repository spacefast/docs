---
title: "billing_receipt_invalid"
description: "The store receipt or notification could not be verified with the payment provider."
---

The store receipt or notification could not be verified with the payment provider.

**How to resolve:** Re-check the transaction id or purchase token and retry. Contact support if it persists.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "billing_receipt_invalid",
    "message": "The store receipt or notification could not be verified with the payment provider.",
    "docsUrl": "https://docs.spacefast.com/errors/billing_receipt_invalid",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
