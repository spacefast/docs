---
title: "path_too_long"
description: "A file path exceeds the maximum length."
---

A file path exceeds the maximum length.

**How to resolve:** Keep each file path at or under 1024 bytes.

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
  "type": "https://docs.spacefast.com/docs/errors/path_too_long",
  "title": "Path too long",
  "status": 400,
  "detail": "A file path exceeds the maximum length.",
  "code": "path_too_long",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
