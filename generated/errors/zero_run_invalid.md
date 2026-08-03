---
title: "zero_run_invalid"
description: "A Zero run-handler definition is invalid."
---

A Zero run-handler definition is invalid.

**How to resolve:** Fix the run id, source, capabilities, or database metadata and publish again.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "zero_run_invalid",
    "message": "A Zero run-handler definition is invalid.",
    "docsUrl": "https://docs.spacefast.com/errors/zero_run_invalid",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
