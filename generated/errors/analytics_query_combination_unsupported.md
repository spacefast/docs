---
title: "analytics_query_combination_unsupported"
description: "The analytics query asks for a metric with a breakdown, filter or granularity it doesn't support."
---

The analytics query asks for a metric with a breakdown, filter or granularity it doesn't support.

**How to resolve:** Use a dimension and granularity the metric lists in the problem's supported values or the analytics catalog, or ask for that metric in its own query.

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
  "type": "https://spacefast.com/docs/errors/analytics_query_combination_unsupported",
  "title": "Analytics query combination unsupported",
  "status": 400,
  "detail": "The analytics query asks for a metric with a breakdown, filter or granularity it doesn't support.",
  "code": "analytics_query_combination_unsupported",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
