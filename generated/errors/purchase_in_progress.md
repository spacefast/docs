---
title: "purchase_in_progress"
description: "This domain is paid for and its registration, renewal or refund is still going through."
---

This domain is paid for and its registration, renewal or refund is still going through.

**How to resolve:** Wait a minute and try again. There is nothing to confirm or cancel.

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
  "type": "https://spacefast.com/docs/errors/purchase_in_progress",
  "title": "Purchase in progress",
  "status": 422,
  "detail": "This domain is paid for and its registration, renewal or refund is still going through.",
  "code": "purchase_in_progress",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
