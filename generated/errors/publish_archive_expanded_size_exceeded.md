---
title: "publish_archive_expanded_size_exceeded"
description: "The archive expands beyond the maximum allowed total size."
---

The archive expands beyond the maximum allowed total size.

**How to resolve:** Reduce the content size.

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
  "type": "https://spacefast.com/docs/errors/publish_archive_expanded_size_exceeded",
  "title": "Publish archive expanded size exceeded",
  "status": 400,
  "detail": "The archive expands beyond the maximum allowed total size.",
  "code": "publish_archive_expanded_size_exceeded",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
