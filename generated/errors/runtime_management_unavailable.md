---
title: "runtime_management_unavailable"
description: "The Space's runtime did not answer the management call in time."
---

The Space's runtime did not answer the management call in time.

**How to resolve:** Retry the request.

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
  "type": "https://spacefast.com/docs/errors/runtime_management_unavailable",
  "title": "Runtime management unavailable",
  "status": 400,
  "detail": "The Space's runtime did not answer the management call in time.",
  "code": "runtime_management_unavailable",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
