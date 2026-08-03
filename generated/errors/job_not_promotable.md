---
title: "job_not_promotable"
description: "The job cannot be promoted in its current state."
---

The job cannot be promoted in its current state.

**How to resolve:** Only delayed jobs can be promoted to run immediately.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "job_not_promotable",
    "message": "The job cannot be promoted in its current state.",
    "docsUrl": "https://docs.spacefast.com/errors/job_not_promotable",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
