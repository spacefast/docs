---
title: "job_not_found"
description: "The background job was not found."
---

The background job was not found.

**How to resolve:** Verify the job id. Completed jobs are eventually pruned.

<div data-pagefind-ignore>

## Error shape

Every Spacefast API error is an RFC 9457 problem document, served as
`application/problem+json`. `code` is stable and machine-readable, `type` links to
this page, `title` is a short label, `status` repeats the HTTP status, and `detail`
explains this occurrence. `pointer` (when present) is an RFC 6901 JSON Pointer at the
offending field in the request body, and `details` may carry structured context. Match on
`code`, never on `detail`.

```json
{
  "type": "https://spacefast.com/docs/errors/job_not_found",
  "title": "Job not found",
  "status": 400,
  "detail": "The background job was not found.",
  "code": "job_not_found",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
