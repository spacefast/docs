---
title: "zero_run_duplicate"
description: "Two Zero run handlers declare the same run id."
---

Two Zero run handlers declare the same run id.

**How to resolve:** Give every run handler a unique run id before publishing again.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "zero_run_duplicate",
    "message": "Two Zero run handlers declare the same run id.",
    "docsUrl": "https://docs.spacefast.com/errors/zero_run_duplicate",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
