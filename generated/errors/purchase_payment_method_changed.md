---
title: "purchase_payment_method_changed"
description: "The team's saved card changed after this purchase was approved, so nothing was charged."
---

The team's saved card changed after this purchase was approved, so nothing was charged.

**How to resolve:** Read the purchase, show the user the team's current card, and confirm again with its `paymentMethod.id` as `expectedPaymentMethodId`.

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
  "type": "https://spacefast.com/docs/errors/purchase_payment_method_changed",
  "title": "Purchase payment method changed",
  "status": 422,
  "detail": "The team's saved card changed after this purchase was approved, so nothing was charged.",
  "code": "purchase_payment_method_changed",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
