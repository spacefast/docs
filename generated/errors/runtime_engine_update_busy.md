---
title: "runtime_engine_update_busy"
description: "The serving runtime is applying an engine update and cannot take this request yet."
---

The serving runtime is applying an engine update and cannot take this request yet.

**How to resolve:** Nothing in your request needs to change. Wait a moment and retry.

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
  "type": "https://spacefast.com/docs/errors/runtime_engine_update_busy",
  "title": "Runtime engine update busy",
  "status": 400,
  "detail": "The serving runtime is applying an engine update and cannot take this request yet.",
  "code": "runtime_engine_update_busy",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
