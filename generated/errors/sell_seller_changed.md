---
title: "sell_seller_changed"
description: "The seller binding changed while its Stripe readiness was being refreshed."
---

The seller binding changed while its Stripe readiness was being refreshed.

**How to resolve:** Read the current seller binding and retry the readiness refresh.

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
  "type": "https://spacefast.com/docs/errors/sell_seller_changed",
  "title": "Sell seller changed",
  "status": 400,
  "detail": "The seller binding changed while its Stripe readiness was being refreshed.",
  "code": "sell_seller_changed",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
