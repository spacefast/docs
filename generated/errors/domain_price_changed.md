---
title: "domain_price_changed"
description: "The registrar price changed after you paid, so the payment for this domain was refunded."
---

The registrar price changed after you paid, so the payment for this domain was refunded.

**How to resolve:** Get a fresh quote and buy the domain again at the new price.

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
  "type": "https://spacefast.com/docs/errors/domain_price_changed",
  "title": "Domain price changed",
  "status": 400,
  "detail": "The registrar price changed after you paid, so the payment for this domain was refunded.",
  "code": "domain_price_changed",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
