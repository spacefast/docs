---
title: "job_not_removable"
description: "The job cannot be removed in its current state."
---

The job cannot be removed in its current state.

**How to resolve:** Wait for the job to settle before removing it.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "job_not_removable",
    "message": "The job cannot be removed in its current state.",
    "docsUrl": "https://spacefast.com/docs/errors/job_not_removable",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
