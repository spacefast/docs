---
title: "purchase_not_confirmable"
description: "This purchase is past confirming: it was already charged, canceled, or expired."
---

This purchase is past confirming: it was already charged, canceled, or expired.

**How to resolve:** Read the purchase to see where it stands. If it was canceled or expired, buy again.

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
  "type": "https://spacefast.com/docs/errors/purchase_not_confirmable",
  "title": "Purchase not confirmable",
  "status": 422,
  "detail": "This purchase is past confirming: it was already charged, canceled, or expired.",
  "code": "purchase_not_confirmable",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
