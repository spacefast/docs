---
title: "duplicate_version_path"
description: "The version upload declares the same file path twice."
---

The version upload declares the same file path twice.

**How to resolve:** Deduplicate the file list so every path appears once.

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
  "type": "https://spacefast.com/docs/errors/duplicate_version_path",
  "title": "Duplicate version path",
  "status": 400,
  "detail": "The version upload declares the same file path twice.",
  "code": "duplicate_version_path",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
