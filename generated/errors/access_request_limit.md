---
title: "access_request_limit"
description: "This Space already has as many pending access requests as its plan allows."
---

This Space already has as many pending access requests as its plan allows.

**How to resolve:** Ask the Space owner to approve or deny a pending request, then request access again.

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
  "type": "https://spacefast.com/docs/errors/access_request_limit",
  "title": "Access request limit",
  "status": 422,
  "detail": "This Space already has as many pending access requests as its plan allows.",
  "code": "access_request_limit",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
