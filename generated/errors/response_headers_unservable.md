---
title: "response_headers_unservable"
description: "A file needs a response header that the platform cannot deliver for large files."
---

A file needs a response header that the platform cannot deliver for large files.

**How to resolve:** Reduce the file below 100 MiB or drop the custom header.

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
  "type": "https://spacefast.com/docs/errors/response_headers_unservable",
  "title": "Response headers unservable",
  "status": 400,
  "detail": "A file needs a response header that the platform cannot deliver for large files.",
  "code": "response_headers_unservable",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
