---
title: "variable_cascade_failed"
description: "Republishing spaces after a variable change failed."
---

Republishing spaces after a variable change failed.

**How to resolve:** Check the operation's diagnostics; live content keeps serving the previous values.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "variable_cascade_failed",
    "message": "Republishing spaces after a variable change failed.",
    "docsUrl": "https://spacefast.com/docs/errors/variable_cascade_failed",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
