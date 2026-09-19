---
title: "static_runtime_required"
description: "This operation only applies to static-runtime spaces."
---

This operation only applies to static-runtime spaces.

**How to resolve:** Target a static-runtime space.

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
  "type": "https://spacefast.com/docs/errors/static_runtime_required",
  "title": "Static runtime required",
  "status": 400,
  "detail": "This operation only applies to static-runtime spaces.",
  "code": "static_runtime_required",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
