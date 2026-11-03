---
title: "upload_import_url_invalid"
description: "The download reference is not an allowed HTTPS target."
---

The download reference is not an allowed HTTPS target.

**How to resolve:** Use a public HTTPS file URL without URL credentials on port 443.

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
  "type": "https://spacefast.com/docs/errors/upload_import_url_invalid",
  "title": "Upload import url invalid",
  "status": 400,
  "detail": "The download reference is not an allowed HTTPS target.",
  "code": "upload_import_url_invalid",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
