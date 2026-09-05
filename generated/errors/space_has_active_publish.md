---
title: "space_has_active_publish"
description: "A publish is already running on this Space."
---

A publish is already running on this Space.

**How to resolve:** Wait for the running publish to settle, then retry.

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
  "type": "https://spacefast.com/docs/errors/space_has_active_publish",
  "title": "Space has active publish",
  "status": 400,
  "detail": "A publish is already running on this Space.",
  "code": "space_has_active_publish",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
