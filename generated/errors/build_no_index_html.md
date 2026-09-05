---
title: "build_no_index_html"
description: "The build output has no `index.html` at its root."
---

The build output has no `index.html` at its root.

**How to resolve:** Point the output directory at the folder that holds `index.html`, then publish again.

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
  "type": "https://spacefast.com/docs/errors/build_no_index_html",
  "title": "Build no index html",
  "status": 400,
  "detail": "The build output has no `index.html` at its root.",
  "code": "build_no_index_html",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
