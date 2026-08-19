---
title: "provider_job_timeout"
description: "A hosting-provider job timed out while processing this operation."
---

A hosting-provider job timed out while processing this operation.

**How to resolve:** Retry the operation. If the provider is slow, wait and retry again.

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
  "type": "https://spacefast.com/docs/errors/provider_job_timeout",
  "title": "Provider job timeout",
  "status": 400,
  "detail": "A hosting-provider job timed out while processing this operation.",
  "code": "provider_job_timeout",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
