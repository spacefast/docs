---
title: "version_closed"
description: "The version's upload session is closed. No more files can be added."
---

The version's upload session is closed. No more files can be added.

**How to resolve:** Start a new version for additional changes.

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
  "type": "https://spacefast.com/docs/errors/version_closed",
  "title": "Version closed",
  "status": 400,
  "detail": "The version's upload session is closed. No more files can be added.",
  "code": "version_closed",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
