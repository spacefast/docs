---
title: "zero_realtime_operation_unsupported"
description: "The realtime operation is not one this runtime serves."
---

The realtime operation is not one this runtime serves.

**How to resolve:** Use a realtime operation the Zero runtime supports.

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
  "type": "https://spacefast.com/docs/errors/zero_realtime_operation_unsupported",
  "title": "Zero realtime operation unsupported",
  "status": 400,
  "detail": "The realtime operation is not one this runtime serves.",
  "code": "zero_realtime_operation_unsupported",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
