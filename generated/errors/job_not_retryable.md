---
title: "job_not_retryable"
description: "The job cannot be retried in its current state."
---

The job cannot be retried in its current state.

**How to resolve:** Only failed jobs can be retried.

<div data-pagefind-ignore>

## Error shape

Every Spacefast API error is an RFC 9457 problem document, served as
`application/problem+json`.

- `code` is stable and machine-readable.
- `type` links to this page.
- `title` is a short label.
- `status` repeats the HTTP status.
- `detail` explains this occurrence.
- `pointer`, when present, is an RFC 6901 JSON Pointer at the offending field in the request body.
- `details`, when present, carries structured context.

Match on `code`, never on `detail`.

```json
{
  "type": "https://spacefast.com/docs/errors/job_not_retryable",
  "title": "Job not retryable",
  "status": 400,
  "detail": "The job cannot be retried in its current state.",
  "code": "job_not_retryable",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
