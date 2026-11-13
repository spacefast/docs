---
title: "comment_page_path_invalid"
description: "The comment's page path isn't a plain absolute URL path."
---

The comment's page path isn't a plain absolute URL path.

**How to resolve:** Send a path that starts with / and has no scheme, host, query, or fragment, like /about.

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
  "type": "https://spacefast.com/docs/errors/comment_page_path_invalid",
  "title": "Comment page path invalid",
  "status": 400,
  "detail": "The comment's page path isn't a plain absolute URL path.",
  "code": "comment_page_path_invalid",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
