---
title: "job_not_retryable"
description: "The job cannot be retried in its current state."
---

The job cannot be retried in its current state.

**How to resolve:** Only failed jobs can be retried.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "job_not_retryable",
    "message": "The job cannot be retried in its current state.",
    "docsUrl": "https://spacefast.com/docs/errors/job_not_retryable",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
