---
title: "analytics_query_two_breakdowns"
description: "An analytics query takes one breakdown dimension besides time."
---

An analytics query takes one breakdown dimension besides time.

**How to resolve:** Send one dimension per query, and ask for each breakdown in its own query of the same batch.

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
  "type": "https://spacefast.com/docs/errors/analytics_query_two_breakdowns",
  "title": "Analytics query two breakdowns",
  "status": 400,
  "detail": "An analytics query takes one breakdown dimension besides time.",
  "code": "analytics_query_two_breakdowns",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
