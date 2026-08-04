---
title: "invalid_publish_path"
description: "A file path in the publish payload is not allowed."
---

A file path in the publish payload is not allowed.

**How to resolve:** Use forward-slash relative paths without traversal or control characters.

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
  "type": "https://docs.spacefast.com/docs/errors/invalid_publish_path",
  "title": "Invalid publish path",
  "status": 400,
  "detail": "A file path in the publish payload is not allowed.",
  "code": "invalid_publish_path",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
