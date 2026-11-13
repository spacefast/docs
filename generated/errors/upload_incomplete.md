---
title: "upload_incomplete"
description: "The upload is not complete."
---

The upload is not complete.

**How to resolve:** Finish all file chunks, then call completeUpload.

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
  "type": "https://spacefast.com/docs/errors/upload_incomplete",
  "title": "Upload incomplete",
  "status": 400,
  "detail": "The upload is not complete.",
  "code": "upload_incomplete",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
