---
title: "functions_dispatch_busy"
description: "The Space already has as many Worker requests open as it allows at once, so this one was not started."
---

The Space already has as many Worker requests open as it allows at once, so this one was not started.

**How to resolve:** Retry after the Retry-After delay. Long or streaming Worker responses hold their slot until they finish, so keep them short.

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
  "type": "https://spacefast.com/docs/errors/functions_dispatch_busy",
  "title": "Functions dispatch busy",
  "status": 422,
  "detail": "The Space already has as many Worker requests open as it allows at once, so this one was not started.",
  "code": "functions_dispatch_busy",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
