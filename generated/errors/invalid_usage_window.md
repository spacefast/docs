---
title: "invalid_usage_window"
description: "The usage window is empty, inverted, or longer than 92 days."
---

The usage window is empty, inverted, or longer than 92 days.

**How to resolve:** Send `from` before `to` and keep the window at 92 days or less.

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
  "type": "https://spacefast.com/docs/errors/invalid_usage_window",
  "title": "Invalid usage window",
  "status": 400,
  "detail": "The usage window is empty, inverted, or longer than 92 days.",
  "code": "invalid_usage_window",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
