---
title: "service_booting"
description: "The process that received this request is still starting and cannot serve it yet."
---

The process that received this request is still starting and cannot serve it yet.

**How to resolve:** Wait for the `Retry-After` window, then send the same request again.

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
  "type": "https://spacefast.com/docs/errors/service_booting",
  "title": "Service booting",
  "status": 400,
  "detail": "The process that received this request is still starting and cannot serve it yet.",
  "code": "service_booting",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
