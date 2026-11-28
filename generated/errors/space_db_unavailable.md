---
title: "space_db_unavailable"
description: "The Space's database isn't reachable right now."
---

The Space's database isn't reachable right now.

**How to resolve:** Wait a moment and retry. If it keeps failing, check that the Space has finished provisioning.

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
  "type": "https://spacefast.com/docs/errors/space_db_unavailable",
  "title": "Space db unavailable",
  "status": 422,
  "detail": "The Space's database isn't reachable right now.",
  "code": "space_db_unavailable",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
