---
title: "principal_space_mismatch"
description: "The space does not belong to the principal in the request."
---

The space does not belong to the principal in the request.

**How to resolve:** Use the space's owning team or account in the request path.

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
  "type": "https://docs.spacefast.com/docs/errors/principal_space_mismatch",
  "title": "Principal space mismatch",
  "status": 400,
  "detail": "The space does not belong to the principal in the request.",
  "code": "principal_space_mismatch",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
