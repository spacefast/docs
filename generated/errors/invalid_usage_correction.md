---
title: "invalid_usage_correction"
description: "The correction does not line up with the usage record it corrects."
---

The correction does not line up with the usage record it corrects.

**How to resolve:** Match the original tenant, principal, Space, mode, dimension, and bucket exactly in the correction.

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
  "detail": "The correction does not line up with the usage record it corrects.",
  "code": "invalid_usage_correction",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
