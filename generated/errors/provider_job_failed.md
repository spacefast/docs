---
title: "provider_job_failed"
description: "A hosting-provider job failed while processing this operation."
---

A hosting-provider job failed while processing this operation.

**How to resolve:** Retry the operation. If it keeps failing, contact support with the operation id.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "provider_job_failed",
    "message": "A hosting-provider job failed while processing this operation.",
    "docsUrl": "https://docs.spacefast.com/errors/provider_job_failed",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
