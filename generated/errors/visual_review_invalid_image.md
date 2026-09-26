---
title: "visual_review_invalid_image"
description: "The screenshot is not a valid PNG payload."
---

The screenshot is not a valid PNG payload.

**How to resolve:** Remove the screenshot and send the note without it.

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
  "type": "https://spacefast.com/docs/errors/visual_review_invalid_image",
  "title": "Visual review invalid image",
  "status": 400,
  "detail": "The screenshot is not a valid PNG payload.",
  "code": "visual_review_invalid_image",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
