---
title: "frame_link_inactive"
description: "The Frame Link is revoked, expired, not yet active, or out of uses."
---

The Frame Link is revoked, expired, not yet active, or out of uses.

**How to resolve:** Create or select an active Frame Link, then launch it again.

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
  "detail": "The Frame Link is revoked, expired, not yet active, or out of uses.",
  "code": "frame_link_inactive",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
