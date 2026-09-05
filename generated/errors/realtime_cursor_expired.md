---
title: "realtime_cursor_expired"
description: "The realtime event cursor is no longer in the retained event history."
---

The realtime event cursor is no longer in the retained event history.

**How to resolve:** Discard the expired cursor and refresh active query snapshots. Resume realtime updates from the next received event instead of retrying the expired cursor.

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
  "type": "https://spacefast.com/docs/errors/realtime_cursor_expired",
  "title": "Realtime cursor expired",
  "status": 400,
  "detail": "The realtime event cursor is no longer in the retained event history.",
  "code": "realtime_cursor_expired",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
