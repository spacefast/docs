---
title: "runtime_upload_operation_not_supported"
description: "The runtime upload lane does not serve this operation or method."
---

The runtime upload lane does not serve this operation or method.

**How to resolve:** Use the publish-session blob, file, or URL-fetch operation with the method in the `Allow` header.

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
  "type": "https://spacefast.com/docs/errors/runtime_upload_operation_not_supported",
  "title": "Runtime upload operation not supported",
  "status": 400,
  "detail": "The runtime upload lane does not serve this operation or method.",
  "code": "runtime_upload_operation_not_supported",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
