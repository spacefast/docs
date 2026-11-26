---
title: "purchase_total_changed"
description: "The price changed since you looked, so nothing was charged."
---

The price changed since you looked, so nothing was charged.

**How to resolve:** Show the user the new total in `details.totalCents`. If they still want it, send that as `expectedTotalCents`.

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
  "type": "https://spacefast.com/docs/errors/purchase_total_changed",
  "title": "Purchase total changed",
  "status": 422,
  "detail": "The price changed since you looked, so nothing was charged.",
  "code": "purchase_total_changed",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
