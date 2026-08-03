---
title: "zero_run_operation_unsupported"
description: "The hosted Zero runtime does not support this run operation yet."
---

The hosted Zero runtime does not support this run operation yet.

**How to resolve:** Use a generated endpoint or deploy a generated run handler for this operation.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "zero_run_operation_unsupported",
    "message": "The hosted Zero runtime does not support this run operation yet.",
    "docsUrl": "https://docs.spacefast.com/errors/zero_run_operation_unsupported",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
