---
title: "deploy_quota_exceeded"
description: "The owner has used its daily publish allowance."
---

The owner has used its daily publish allowance.

**How to resolve:** Wait for the meter to reset at 00:00 UTC. Batch changes into fewer publishes if a CI loop is republishing on every commit.

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
  "type": "https://spacefast.com/docs/errors/deploy_quota_exceeded",
  "title": "Deploy quota exceeded",
  "status": 400,
  "detail": "The owner has used its daily publish allowance.",
  "code": "deploy_quota_exceeded",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
