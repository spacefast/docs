---
title: "slug_unavailable"
description: "The slug is already in use within the relevant ownership scope."
---

The slug is already in use within the relevant ownership scope.

**How to resolve:** Choose another slug or use the available suggestion returned by the API.

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
  "type": "https://spacefast.com/docs/errors/slug_unavailable",
  "title": "Slug unavailable",
  "status": 400,
  "detail": "The slug is already in use within the relevant ownership scope.",
  "code": "slug_unavailable",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
