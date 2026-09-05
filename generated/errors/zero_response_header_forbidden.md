---
title: "zero_response_header_forbidden"
description: "The handler set a response header the runtime will not serve."
---

The handler set a response header the runtime will not serve.

**How to resolve:** Remove the forbidden header from the handler's response, then publish again.

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
  "type": "https://spacefast.com/docs/errors/zero_response_header_forbidden",
  "title": "Zero response header forbidden",
  "status": 400,
  "detail": "The handler set a response header the runtime will not serve.",
  "code": "zero_response_header_forbidden",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
