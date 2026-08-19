---
title: "internal_error"
description: "Something went wrong on our side."
---

Something went wrong on our side.

**How to resolve:** Retry the request. If the error persists, contact support with the requestId.

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
  "type": "https://spacefast.com/docs/errors/internal_error",
  "title": "Internal error",
  "status": 400,
  "detail": "Something went wrong on our side.",
  "code": "internal_error",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
