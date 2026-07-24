---
title: "runtime_not_provisioned"
description: "The space has no provisioned runtime yet."
---

The space has no provisioned runtime yet.

**How to resolve:** Wait for provisioning to finish; the operation receipt reports progress.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "runtime_not_provisioned",
    "message": "The space has no provisioned runtime yet.",
    "docsUrl": "https://spacefast.com/docs/errors/runtime_not_provisioned",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
