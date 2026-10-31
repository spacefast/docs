---
title: "upload_consumer_missing"
description: "No active operation pins the completed upload."
---

No active operation pins the completed upload.

**How to resolve:** Accept a publication or source operation before reading its upload.

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
  "type": "https://spacefast.com/docs/errors/upload_consumer_missing",
  "title": "Upload consumer missing",
  "status": 400,
  "detail": "No active operation pins the completed upload.",
  "code": "upload_consumer_missing",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
