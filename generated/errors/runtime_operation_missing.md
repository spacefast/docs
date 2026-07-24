---
title: "runtime_operation_missing"
description: "The runtime operation referenced by this request was not found."
---

The runtime operation referenced by this request was not found.

**How to resolve:** Re-request instructions and retry with a current operation id.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "runtime_operation_missing",
    "message": "The runtime operation referenced by this request was not found.",
    "docsUrl": "https://spacefast.com/docs/errors/runtime_operation_missing",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
