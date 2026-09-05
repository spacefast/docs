---
title: "internal_error"
description: "The request failed inside the API before it reached a result."
---

The request failed inside the API before it reached a result.

**How to resolve:** Retry the request. If it keeps failing, contact Spacefast support with the `requestId`.

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
  "detail": "The request failed inside the API before it reached a result.",
  "code": "internal_error",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
