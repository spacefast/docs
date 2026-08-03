---
title: "job_not_found"
description: "The background job was not found."
---

The background job was not found.

**How to resolve:** Verify the job id. Completed jobs are eventually pruned.

<div data-pagefind-ignore>

## Error envelope

Every Spacefast API error uses one envelope. `code` is stable and machine-readable,
`param` (when present) points at the offending request field, and `details` may carry
structured context. Match on `code`, never on `message`.

```json
{
  "error": {
    "code": "job_not_found",
    "message": "The background job was not found.",
    "docsUrl": "https://docs.spacefast.com/errors/job_not_found",
    "requestId": "req_4mz0v8qk"
  }
}
```

See the full list of error codes in the [error reference](/errors).

</div>
