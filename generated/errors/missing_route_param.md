---
title: "missing_route_param"
description: "A path segment in the request URL is empty."
---

A path segment in the request URL is empty.

**How to resolve:** Fill in the named route parameter and call the URL again.

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
  "type": "https://spacefast.com/docs/errors/missing_route_param",
  "title": "Missing route param",
  "status": 400,
  "detail": "A path segment in the request URL is empty.",
  "code": "missing_route_param",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
