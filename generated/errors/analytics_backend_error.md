---
title: "analytics_backend_error"
description: "The analytics service answered this query with something the analytics query contract doesn't allow."
---

The analytics service answered this query with something the analytics query contract doesn't allow.

**How to resolve:** Contact support with the requestId. Retrying gets the same answer until the service is fixed. The batch's other queries still answer.

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
  "type": "https://spacefast.com/docs/errors/analytics_backend_error",
  "title": "Analytics backend error",
  "status": 400,
  "detail": "The analytics service answered this query with something the analytics query contract doesn't allow.",
  "code": "analytics_backend_error",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
