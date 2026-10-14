---
title: "invalid_usage_correction"
description: "The correction does not match the original usage record."
---

The correction does not match the original usage record.

**How to resolve:** Use the same tenant, principal, space, mode, dimension, and bucket as the original.

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
  "type": "https://spacefast.com/docs/errors/invalid_usage_correction",
  "title": "Invalid usage correction",
  "status": 400,
  "detail": "The correction does not match the original usage record.",
  "code": "invalid_usage_correction",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
