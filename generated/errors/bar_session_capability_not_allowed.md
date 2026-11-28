---
title: "bar_session_capability_not_allowed"
description: "The Space bar can give view or comment access only."
---

The Space bar can give view or comment access only.

**How to resolve:** Make someone an editor or manager in the dashboard.

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
  "type": "https://spacefast.com/docs/errors/bar_session_capability_not_allowed",
  "title": "Bar session capability not allowed",
  "status": 422,
  "detail": "The Space bar can give view or comment access only.",
  "code": "bar_session_capability_not_allowed",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
