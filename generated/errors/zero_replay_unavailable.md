---
title: "zero_replay_unavailable"
description: "Realtime replay is not configured for this Zero version."
---

Realtime replay is not configured for this Zero version.

**How to resolve:** Finalize the version with a Zero realtime replay URL or disable replay catch-up.

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
  "type": "https://spacefast.com/docs/errors/zero_replay_unavailable",
  "title": "Zero replay unavailable",
  "status": 400,
  "detail": "Realtime replay is not configured for this Zero version.",
  "code": "zero_replay_unavailable",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
