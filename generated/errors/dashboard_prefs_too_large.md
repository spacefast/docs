---
title: "dashboard_prefs_too_large"
description: "The merged dashboard preferences would exceed the 16KB serialized size limit."
---

The merged dashboard preferences would exceed the 16KB serialized size limit.

**How to resolve:** Store smaller values, or delete preferences you no longer need by setting them to null.

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
  "type": "https://spacefast.com/docs/errors/dashboard_prefs_too_large",
  "title": "Dashboard prefs too large",
  "status": 400,
  "detail": "The merged dashboard preferences would exceed the 16KB serialized size limit.",
  "code": "dashboard_prefs_too_large",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
