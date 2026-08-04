---
title: "download_required"
description: "This content is too large to return inline and must be downloaded."
---

This content is too large to return inline and must be downloaded.

**How to resolve:** Use the download endpoint referenced in the error details.

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
  "type": "https://docs.spacefast.com/docs/errors/download_required",
  "title": "Download required",
  "status": 400,
  "detail": "This content is too large to return inline and must be downloaded.",
  "code": "download_required",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
