---
title: "cast_backend_unavailable"
description: "The comments service didn't answer."
---

The comments service didn't answer.

**How to resolve:** Retry in a moment. Nothing changed on your side.

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
  "type": "https://spacefast.com/docs/errors/cast_backend_unavailable",
  "title": "Cast backend unavailable",
  "status": 400,
  "detail": "The comments service didn't answer.",
  "code": "cast_backend_unavailable",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
