---
title: "dashboard_prefs_key_invalid"
description: "A dashboard preference key is empty or longer than the allowed length."
---

A dashboard preference key is empty or longer than the allowed length.

**How to resolve:** Rename the key at `pointer` so it fits the length limit.

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
  "type": "https://spacefast.com/docs/errors/dashboard_prefs_key_invalid",
  "title": "Dashboard prefs key invalid",
  "status": 400,
  "detail": "A dashboard preference key is empty or longer than the allowed length.",
  "code": "dashboard_prefs_key_invalid",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
