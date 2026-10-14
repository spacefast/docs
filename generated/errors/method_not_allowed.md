---
title: "method_not_allowed"
description: "The requested HTTP method is not supported for this endpoint."
---

The requested HTTP method is not supported for this endpoint.

**How to resolve:** Use one of the methods listed in the Allow response header.

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
  "type": "https://spacefast.com/docs/errors/method_not_allowed",
  "title": "Method not allowed",
  "status": 400,
  "detail": "The requested HTTP method is not supported for this endpoint.",
  "code": "method_not_allowed",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
