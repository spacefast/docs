---
title: "billing_receipt_invalid"
description: "The store receipt or notification cannot be verified with the payment provider."
---

The store receipt or notification cannot be verified with the payment provider.

**How to resolve:** Re-check the transaction id or purchase token and retry. Contact support if it persists.

<div data-pagefind-ignore>

## Error shape

Every Spacefast API error is an RFC 9457 problem document, served as
`application/problem+json`.

- `code` is stable and machine-readable.
- `type` links to this page.
- `title` is a short label.
- `status` repeats the HTTP status.
- `detail` explains this occurrence.
- `pointer`, when present, is an RFC 6901 JSON Pointer at the offending field in the request body.
- `details`, when present, carries structured context.

Match on `code`, never on `detail`.

```json
{
  "type": "https://spacefast.com/docs/errors/billing_receipt_invalid",
  "title": "Billing receipt invalid",
  "status": 400,
  "detail": "The store receipt or notification cannot be verified with the payment provider.",
  "code": "billing_receipt_invalid",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
