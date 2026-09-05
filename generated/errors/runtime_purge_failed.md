---
title: "runtime_purge_failed"
description: "The version published, but the runtime's edge purge failed and is queued for retry."
---

The version published, but the runtime's edge purge failed and is queued for retry.

**How to resolve:** Wait for the retry to land, or publish again if stale content keeps serving.

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
  "type": "https://spacefast.com/docs/errors/runtime_purge_failed",
  "title": "Runtime purge failed",
  "status": 400,
  "detail": "The version published, but the runtime's edge purge failed and is queued for retry.",
  "code": "runtime_purge_failed",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
