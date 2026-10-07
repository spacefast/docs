---
title: "visual_review_invalid_note"
description: "A note has a duplicate ID or an inconsistent capture status."
---

A note has a duplicate ID or an inconsistent capture status.

**How to resolve:** Use unique note IDs and set captureStatus to ready only when an image is attached.

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
  "type": "https://spacefast.com/docs/errors/visual_review_invalid_note",
  "title": "Visual review invalid note",
  "status": 400,
  "detail": "A note has a duplicate ID or an inconsistent capture status.",
  "code": "visual_review_invalid_note",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
