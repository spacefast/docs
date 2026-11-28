---
title: "purchase_pending"
description: "Another purchase that isn't paid yet already holds some of these."
---

Another purchase that isn't paid yet already holds some of these.

**How to resolve:** Give the user `details.confirmUrl` to confirm or cancel that purchase, or wait for it to expire, then buy again.

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
  "type": "https://spacefast.com/docs/errors/purchase_pending",
  "title": "Purchase pending",
  "status": 422,
  "detail": "Another purchase that isn't paid yet already holds some of these.",
  "code": "purchase_pending",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
