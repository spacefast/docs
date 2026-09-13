---
title: "edge_logs_truncated"
description: "The edge log query reached the provider's result limit."
---

The edge log query reached the provider's result limit.

**How to resolve:** Use a smaller time window or more filters. Cursors only page the returned snapshot.

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
  "type": "https://spacefast.com/docs/errors/edge_logs_truncated",
  "title": "Edge logs truncated",
  "status": 400,
  "detail": "The edge log query reached the provider's result limit.",
  "code": "edge_logs_truncated",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
