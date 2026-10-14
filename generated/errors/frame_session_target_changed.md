---
title: "frame_session_target_changed"
description: "The server-owned Frame serving target changed after launch."
---

The server-owned Frame serving target changed after launch.

**How to resolve:** Launch the Frame Link again to resolve its current target.

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
  "type": "https://spacefast.com/docs/errors/frame_session_target_changed",
  "title": "Frame session target changed",
  "status": 400,
  "detail": "The server-owned Frame serving target changed after launch.",
  "code": "frame_session_target_changed",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
