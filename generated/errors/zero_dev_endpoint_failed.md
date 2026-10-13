---
title: "zero_dev_endpoint_failed"
description: "A local Zero dev endpoint failed while handling the request."
---

A local Zero dev endpoint failed while handling the request.

**How to resolve:** Check the local dev console output and fix the endpoint implementation.

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
  "type": "https://spacefast.com/docs/errors/zero_dev_endpoint_failed",
  "title": "Zero dev endpoint failed",
  "status": 400,
  "detail": "A local Zero dev endpoint failed while handling the request.",
  "code": "zero_dev_endpoint_failed",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
