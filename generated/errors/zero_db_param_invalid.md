---
title: "zero_db_param_invalid"
description: "A Zero database query parameter has an unsupported value."
---

A Zero database query parameter has an unsupported value.

**How to resolve:** Pass JSON-serializable scalar values or nulls to generated database helpers.

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
  "type": "https://docs.spacefast.com/docs/errors/zero_db_param_invalid",
  "title": "Zero db param invalid",
  "status": 400,
  "detail": "A Zero database query parameter has an unsupported value.",
  "code": "zero_db_param_invalid",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
