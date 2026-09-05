---
title: "dashboard_prefs_too_many_keys"
description: "The dashboard preferences hold more keys than the limit allows."
---

The dashboard preferences hold more keys than the limit allows.

**How to resolve:** Delete unused preference keys before storing more.

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
  "type": "https://spacefast.com/docs/errors/dashboard_prefs_too_many_keys",
  "title": "Dashboard prefs too many keys",
  "status": 400,
  "detail": "The dashboard preferences hold more keys than the limit allows.",
  "code": "dashboard_prefs_too_many_keys",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
