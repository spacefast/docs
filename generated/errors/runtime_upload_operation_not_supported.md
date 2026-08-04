---
title: "runtime_upload_operation_not_supported"
description: "The runtime upload session does not support this operation."
---

The runtime upload session does not support this operation.

**How to resolve:** Follow the upload instructions returned when the session was created.

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
  "type": "https://docs.spacefast.com/docs/errors/runtime_upload_operation_not_supported",
  "title": "Runtime upload operation not supported",
  "status": 400,
  "detail": "The runtime upload session does not support this operation.",
  "code": "runtime_upload_operation_not_supported",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
