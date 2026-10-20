---
title: "cast_backend_error"
description: "The comments service turned this request down."
---

The comments service turned this request down.

**How to resolve:** Check the problem details for what it refused. If the request looks right, contact support with the requestId.

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
  "type": "https://spacefast.com/docs/errors/cast_backend_error",
  "title": "Cast backend error",
  "status": 400,
  "detail": "The comments service turned this request down.",
  "code": "cast_backend_error",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
