---
title: "missing_route_param"
description: "A required route parameter is missing from the request path."
---

A required route parameter is missing from the request path.

**How to resolve:** Check the endpoint path in the API reference and include every parameter.

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
  "detail": "A required route parameter is missing from the request path.",
  "code": "missing_route_param",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
