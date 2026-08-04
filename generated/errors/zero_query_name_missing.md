---
title: "zero_query_name_missing"
description: "A Zero realtime query subscription did not include a query name."
---

A Zero realtime query subscription did not include a query name.

**How to resolve:** Send a query.subscribe frame with a valid query name.

<div data-pagefind-ignore>

## Error shape

Every Spacefast API error is an RFC 9457 problem document, served as
`application/problem+json`. `code` is stable and machine-readable, `type` links to
this page, `title` is a short label, `status` repeats the HTTP status, and `detail`
explains this occurrence. `pointer` (when present) is an RFC 6901 JSON Pointer at the
offending field in the request body, and `details` may carry structured context. Match on
`code`, never on `detail`.

```json
{
  "type": "https://docs.spacefast.com/docs/errors/zero_query_name_missing",
  "title": "Zero query name missing",
  "status": 400,
  "detail": "A Zero realtime query subscription did not include a query name.",
  "code": "zero_query_name_missing",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
