---
title: "runtime_edge_refused"
description: "WP Cloud's edge refused the request before it reached this Space's runtime."
---

WP Cloud's edge refused the request before it reached this Space's runtime.

**How to resolve:** Nothing in your request needs to change. Wait a few minutes and retry. If it keeps failing, contact support with the `requestId`.

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
  "type": "https://spacefast.com/docs/errors/runtime_edge_refused",
  "title": "Runtime edge refused",
  "status": 400,
  "detail": "WP Cloud's edge refused the request before it reached this Space's runtime.",
  "code": "runtime_edge_refused",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
