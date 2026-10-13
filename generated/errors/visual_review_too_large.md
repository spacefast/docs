---
title: "visual_review_too_large"
description: "The feedback batch exceeds the screenshot delivery limit."
---

The feedback batch exceeds the screenshot delivery limit.

**How to resolve:** Remove a screenshot and submit the batch again.

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
  "type": "https://spacefast.com/docs/errors/visual_review_too_large",
  "title": "Visual review too large",
  "status": 400,
  "detail": "The feedback batch exceeds the screenshot delivery limit.",
  "code": "visual_review_too_large",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
