---
title: "run_replay_diverged"
description: "Replaying the paused program took a different path than the first time, so it was stopped."
---

Replaying the paused program took a different path than the first time, so it was stopped.

**How to resolve:** Run it again. A program that depends on the clock, randomness, or changing data cannot be resumed safely.

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
  "type": "https://spacefast.com/docs/errors/run_replay_diverged",
  "title": "Run replay diverged",
  "status": 400,
  "detail": "Replaying the paused program took a different path than the first time, so it was stopped.",
  "code": "run_replay_diverged",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
