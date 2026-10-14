---
title: "sell_seller_conflict"
description: "The requested seller conflicts with an existing team or Stripe account binding."
---

The requested seller conflicts with an existing team or Stripe account binding.

**How to resolve:** Use the team's existing seller for this payment mode. Demo sellers require test mode; existing purchase bindings cannot be replaced.

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
  "type": "https://spacefast.com/docs/errors/sell_seller_conflict",
  "title": "Sell seller conflict",
  "status": 400,
  "detail": "The requested seller conflicts with an existing team or Stripe account binding.",
  "code": "sell_seller_conflict",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
