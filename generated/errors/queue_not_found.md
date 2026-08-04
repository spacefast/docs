---
title: "queue_not_found"
description: "The named job queue does not exist."
---

The named job queue does not exist.

**How to resolve:** Check the queue name against the operator queue list.

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
  "type": "https://spacefast.com/docs/errors/queue_not_found",
  "title": "Queue not found",
  "status": 400,
  "detail": "The named job queue does not exist.",
  "code": "queue_not_found",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
