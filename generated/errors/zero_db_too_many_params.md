---
title: "zero_db_too_many_params"
description: "The statement carries more parameters than the broker allows."
---

The statement carries more parameters than the broker allows.

**How to resolve:** Split the statement so each one stays within the parameter limit.

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
  "type": "https://spacefast.com/docs/errors/zero_db_too_many_params",
  "title": "Zero db too many params",
  "status": 400,
  "detail": "The statement carries more parameters than the broker allows.",
  "code": "zero_db_too_many_params",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
