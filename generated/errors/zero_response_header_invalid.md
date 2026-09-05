---
title: "zero_response_header_invalid"
description: "A response header the handler set is not a valid header."
---

A response header the handler set is not a valid header.

**How to resolve:** Correct the header name or value in the handler, then publish again.

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
  "type": "https://spacefast.com/docs/errors/zero_response_header_invalid",
  "title": "Zero response header invalid",
  "status": 400,
  "detail": "A response header the handler set is not a valid header.",
  "code": "zero_response_header_invalid",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
