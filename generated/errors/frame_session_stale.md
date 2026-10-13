---
title: "frame_session_stale"
description: "The Frame Link changed after this session was launched."
---

The Frame Link changed after this session was launched.

**How to resolve:** Launch the current Frame Link again.

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
  "type": "https://spacefast.com/docs/errors/frame_session_stale",
  "title": "Frame session stale",
  "status": 400,
  "detail": "The Frame Link changed after this session was launched.",
  "code": "frame_session_stale",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
