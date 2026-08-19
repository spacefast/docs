---
title: "version_quota_exceeded"
description: "The space is at its version quota."
---

The space is at its version quota.

**How to resolve:** Delete old versions. If the quota error persists, `POST /v1/feedback` with the error code and request id.

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
  "type": "https://spacefast.com/docs/errors/version_quota_exceeded",
  "title": "Version quota exceeded",
  "status": 400,
  "detail": "The space is at its version quota.",
  "code": "version_quota_exceeded",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
