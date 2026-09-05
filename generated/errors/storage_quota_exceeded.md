---
title: "storage_quota_exceeded"
description: "The Space or principal is at its storage quota."
---

The Space or principal is at its storage quota.

**How to resolve:** Delete stored objects or published files, or move the team to a plan with more storage.

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
  "type": "https://spacefast.com/docs/errors/storage_quota_exceeded",
  "title": "Storage quota exceeded",
  "status": 400,
  "detail": "The Space or principal is at its storage quota.",
  "code": "storage_quota_exceeded",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
