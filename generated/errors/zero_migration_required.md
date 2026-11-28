---
title: "zero_migration_required"
description: "This Space runs a Zero 0.8 app, so it can't take a zero.config.ts app."
---

This Space runs a Zero 0.8 app, so it can't take a zero.config.ts app.

**How to resolve:** Keep publishing the Space's Zero 0.8 app, or publish the zero.config.ts app to another Space.

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
  "type": "https://spacefast.com/docs/errors/zero_migration_required",
  "title": "Zero migration required",
  "status": 422,
  "detail": "This Space runs a Zero 0.8 app, so it can't take a zero.config.ts app.",
  "code": "zero_migration_required",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
