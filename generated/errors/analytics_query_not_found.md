---
title: "analytics_query_not_found"
description: "No analytics query by that name."
---

No analytics query by that name.

**How to resolve:** Check the query name in the path against the queries analytics offers.

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
  "type": "https://spacefast.com/docs/errors/analytics_query_not_found",
  "title": "Analytics query not found",
  "status": 422,
  "detail": "No analytics query by that name.",
  "code": "analytics_query_not_found",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
