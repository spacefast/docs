---
title: "zero_dump_query_invalid"
description: "The Zero database dump query parameters are invalid."
---

The Zero database dump query parameters are invalid.

**How to resolve:** Use valid `table`, `limit`, and `cursor` parameters.

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
  "type": "https://spacefast.com/docs/errors/zero_dump_query_invalid",
  "title": "Zero dump query invalid",
  "status": 400,
  "detail": "The Zero database dump query parameters are invalid.",
  "code": "zero_dump_query_invalid",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
