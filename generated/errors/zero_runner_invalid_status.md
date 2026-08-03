---
title: "zero_runner_invalid_status"
description: "The Zero runner returned an invalid HTTP status."
---

The Zero runner returned an invalid HTTP status.

**How to resolve:** Ensure endpoint handlers return a status between 100 and 599.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "zero_runner_invalid_status",
    "message": "The Zero runner returned an invalid HTTP status.",
    "docsUrl": "https://docs.spacefast.com/errors/zero_runner_invalid_status",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
