---
title: "space_expired"
description: "The space expired and is no longer served."
---

The space expired and is no longer served.

**How to resolve:** If it is within the recovery window, claim or restore it. Otherwise publish again.

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
  "type": "https://spacefast.com/docs/errors/space_expired",
  "title": "Space expired",
  "status": 400,
  "detail": "The space expired and is no longer served.",
  "code": "space_expired",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
