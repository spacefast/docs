---
title: "frame_link_inactive"
description: "The frame link is disabled, out of its active window, or out of uses."
---

The frame link is disabled, out of its active window, or out of uses.

**How to resolve:** Launch with an active frame link, or ask the Space owner to re-enable this one.

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
  "type": "https://spacefast.com/docs/errors/frame_link_inactive",
  "title": "Frame link inactive",
  "status": 400,
  "detail": "The frame link is disabled, out of its active window, or out of uses.",
  "code": "frame_link_inactive",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
