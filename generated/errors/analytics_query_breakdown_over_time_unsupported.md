---
title: "analytics_query_breakdown_over_time_unsupported"
description: "The analytics query asks for a breakdown and time buckets together, which isn't answered yet."
---

The analytics query asks for a breakdown and time buckets together, which isn't answered yet.

**How to resolve:** Ask for the breakdown with granularity none, or for one series per value with an eq filter on the dimension and no breakdown.

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
  "type": "https://spacefast.com/docs/errors/analytics_query_breakdown_over_time_unsupported",
  "title": "Analytics query breakdown over time unsupported",
  "status": 400,
  "detail": "The analytics query asks for a breakdown and time buckets together, which isn't answered yet.",
  "code": "analytics_query_breakdown_over_time_unsupported",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
