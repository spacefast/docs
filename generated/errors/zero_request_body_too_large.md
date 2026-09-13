---
title: "zero_request_body_too_large"
description: "The Zero request body exceeds the runtime size limit."
---

The Zero request body exceeds the runtime size limit.

**How to resolve:** Send a smaller request body or move large payloads to blob or object storage.

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
  "type": "https://spacefast.com/docs/errors/zero_request_body_too_large",
  "title": "Zero request body too large",
  "status": 400,
  "detail": "The Zero request body exceeds the runtime size limit.",
  "code": "zero_request_body_too_large",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
