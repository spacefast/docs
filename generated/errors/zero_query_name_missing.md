---
title: "zero_query_name_missing"
description: "The Zero query call did not name a query."
---

The Zero query call did not name a query.

**How to resolve:** Pass the query name in the request body.

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
  "type": "https://spacefast.com/docs/errors/zero_query_name_missing",
  "title": "Zero query name missing",
  "status": 400,
  "detail": "The Zero query call did not name a query.",
  "code": "zero_query_name_missing",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
