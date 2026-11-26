---
title: "thumbnail_unavailable"
description: "The screenshot service did not return an image for this Space yet."
---

The screenshot service did not return an image for this Space yet.

**How to resolve:** Wait for the `Retry-After` interval and request the thumbnail again.

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
  "type": "https://spacefast.com/docs/errors/thumbnail_unavailable",
  "title": "Thumbnail unavailable",
  "status": 422,
  "detail": "The screenshot service did not return an image for this Space yet.",
  "code": "thumbnail_unavailable",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
