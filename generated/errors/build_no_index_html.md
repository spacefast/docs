---
title: "build_no_index_html"
description: "The build produced output but no index.html at the site root."
---

The build produced output but no index.html at the site root.

**How to resolve:** Make sure your build writes an index.html to the output directory, or point the output directory at the folder that contains it.

<div data-pagefind-ignore>

## Error shape

Every Spacefast API error is an RFC 9457 problem document, served as
`application/problem+json`. `code` is stable and machine-readable, `type` links to
this page, `title` is a short label, `status` repeats the HTTP status, and `detail`
explains this occurrence. `pointer` (when present) is an RFC 6901 JSON Pointer at the
offending field in the request body, and `details` may carry structured context. Match on
`code`, never on `detail`.

```json
{
  "type": "https://docs.spacefast.com/docs/errors/build_no_index_html",
  "title": "Build no index html",
  "status": 400,
  "detail": "The build produced output but no index.html at the site root.",
  "code": "build_no_index_html",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
