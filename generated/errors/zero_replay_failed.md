---
title: "zero_replay_failed"
description: "The hosted Zero runtime could not fetch realtime replay events."
---

The hosted Zero runtime could not fetch realtime replay events.

**How to resolve:** Retry shortly. Check the central realtime and control-plane logs if it persists.

<div data-pagefind-ignore>

## Error shape

Every Spacefast API error is an RFC 9457 problem document, served as
`application/problem+json`. `code` is stable and machine-readable, `type` links to
this page, `title` is a short label, `status` repeats the HTTP status, and `detail`
explains this occurrence. `pointer` (when present) is an RFC 6901 JSON Pointer at the
offending field in the request body, and `details` may carry structured context. Match on
`code`, never on `detail`.

```json
{
  "type": "https://docs.spacefast.com/docs/errors/zero_replay_failed",
  "title": "Zero replay failed",
  "status": 400,
  "detail": "The hosted Zero runtime could not fetch realtime replay events.",
  "code": "zero_replay_failed",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
