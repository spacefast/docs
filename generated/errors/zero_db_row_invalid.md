---
title: "zero_db_row_invalid"
description: "A database row could not be converted into a Zero response value."
---

A database row could not be converted into a Zero response value.

**How to resolve:** Check the table schema and stored values for unsupported data.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "zero_db_row_invalid",
    "message": "A database row could not be converted into a Zero response value.",
    "docsUrl": "https://spacefast.com/docs/errors/zero_db_row_invalid",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
