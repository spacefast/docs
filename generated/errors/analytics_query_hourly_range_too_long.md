---
title: "analytics_query_hourly_range_too_long"
description: "Hourly buckets cover at most 7 days."
---

Hourly buckets cover at most 7 days.

**How to resolve:** Shorten the range to 7 days or less, or use day granularity.

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
  "type": "https://spacefast.com/docs/errors/analytics_query_hourly_range_too_long",
  "title": "Analytics query hourly range too long",
  "status": 400,
  "detail": "Hourly buckets cover at most 7 days.",
  "code": "analytics_query_hourly_range_too_long",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
