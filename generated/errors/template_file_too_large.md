---
title: "template_file_too_large"
description: "A template file exceeds the maximum size for substitution."
---

A template file exceeds the maximum size for substitution.

**How to resolve:** Keep template files under the documented size limit (16 KB).

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
  "type": "https://spacefast.com/docs/errors/template_file_too_large",
  "title": "Template file too large",
  "status": 400,
  "detail": "A template file exceeds the maximum size for substitution.",
  "code": "template_file_too_large",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
