---
title: "forbidden"
description: "The credential is valid but does not allow this action."
---

The credential is valid but does not allow this action.

**How to resolve:** Use a credential whose policy grants this action on this resource.

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
  "type": "https://spacefast.com/docs/errors/forbidden",
  "title": "Forbidden",
  "status": 400,
  "detail": "The credential is valid but does not allow this action.",
  "code": "forbidden",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
