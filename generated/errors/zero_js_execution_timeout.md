---
title: "zero_js_execution_timeout"
description: "A Zero query, mutation, or endpoint used more than 500 ms of CPU time on one request."
---

A Zero query, mutation, or endpoint used more than 500 ms of CPU time on one request.

**How to resolve:** Do less work per request: write fewer rows, page through large reads, or split the work across requests. Time spent waiting on the database or `fetch()` does not count toward the 500 ms. Actions have a separate 5-second limit.

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
  "type": "https://spacefast.com/docs/errors/zero_js_execution_timeout",
  "title": "Zero js execution timeout",
  "status": 400,
  "detail": "A Zero query, mutation, or endpoint used more than 500 ms of CPU time on one request.",
  "code": "zero_js_execution_timeout",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
