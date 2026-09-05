---
title: "superseded_by_publish"
description: "A newer publish replaced the version this request targets."
---

A newer publish replaced the version this request targets.

**How to resolve:** Act on the current live version instead.

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
  "type": "https://spacefast.com/docs/errors/superseded_by_publish",
  "title": "Superseded by publish",
  "status": 400,
  "detail": "A newer publish replaced the version this request targets.",
  "code": "superseded_by_publish",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
