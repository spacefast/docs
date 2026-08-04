---
title: "storage_quota_exceeded"
description: "The operation would exceed its storage allowance."
---

The operation would exceed its storage allowance.

**How to resolve:** Delete unused Zero objects or old versions, reduce the upload size, then retry.

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
  "type": "https://docs.spacefast.com/docs/errors/storage_quota_exceeded",
  "title": "Storage quota exceeded",
  "status": 400,
  "detail": "The operation would exceed its storage allowance.",
  "code": "storage_quota_exceeded",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
