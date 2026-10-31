---
title: "upload_sealed"
description: "The upload no longer accepts new content."
---

The upload no longer accepts new content.

**How to resolve:** Create a new upload to change its files.

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
  "type": "https://spacefast.com/docs/errors/upload_sealed",
  "title": "Upload sealed",
  "status": 400,
  "detail": "The upload no longer accepts new content.",
  "code": "upload_sealed",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
