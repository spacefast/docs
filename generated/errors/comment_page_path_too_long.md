---
title: "comment_page_path_too_long"
description: "The comment's page path is longer than Comments allow."
---

The comment's page path is longer than Comments allow.

**How to resolve:** Point the comment at a shorter page path.

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
  "type": "https://spacefast.com/docs/errors/comment_page_path_too_long",
  "title": "Comment page path too long",
  "status": 400,
  "detail": "The comment's page path is longer than Comments allow.",
  "code": "comment_page_path_too_long",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
