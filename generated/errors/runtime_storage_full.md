---
title: "runtime_storage_full"
description: "The Space's server ran out of disk space, so the runtime could not complete the request."
---

The Space's server ran out of disk space, so the runtime could not complete the request.

**How to resolve:** Contact support so the Space gets more disk. Requests work again once it has room.

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
  "type": "https://spacefast.com/docs/errors/runtime_storage_full",
  "title": "Runtime storage full",
  "status": 422,
  "detail": "The Space's server ran out of disk space, so the runtime could not complete the request.",
  "code": "runtime_storage_full",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
