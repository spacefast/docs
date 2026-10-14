---
title: "invalid_publish_archive"
description: "The uploaded archive cannot be read as a valid zip."
---

The uploaded archive cannot be read as a valid zip.

**How to resolve:** Re-create the archive as a standard zip and upload again.

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
  "type": "https://spacefast.com/docs/errors/invalid_publish_archive",
  "title": "Invalid publish archive",
  "status": 400,
  "detail": "The uploaded archive cannot be read as a valid zip.",
  "code": "invalid_publish_archive",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
