---
title: "storage_auth_required"
description: "This storage operation requires an authenticated Zero user."
---

This storage operation requires an authenticated Zero user.

**How to resolve:** Sign in to the hosted Zero app, then retry the storage operation.

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
  "type": "https://spacefast.com/docs/errors/storage_auth_required",
  "title": "Storage auth required",
  "status": 400,
  "detail": "This storage operation requires an authenticated Zero user.",
  "code": "storage_auth_required",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
