---
title: "zero_db_row_invalid"
description: "A database row could not be converted into a Zero response value."
---

A database row could not be converted into a Zero response value.

**How to resolve:** Check the table schema and stored values for unsupported data.

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
  "type": "https://spacefast.com/docs/errors/zero_db_row_invalid",
  "title": "Zero db row invalid",
  "status": 400,
  "detail": "A database row could not be converted into a Zero response value.",
  "code": "zero_db_row_invalid",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
