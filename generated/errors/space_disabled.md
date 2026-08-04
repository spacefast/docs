---
title: "space_disabled"
description: "The space is disabled and cannot be served or modified."
---

The space is disabled and cannot be served or modified.

**How to resolve:** Check the disabled reason on the space. It explains the path to restore it.

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
  "type": "https://docs.spacefast.com/docs/errors/space_disabled",
  "title": "Space disabled",
  "status": 400,
  "detail": "The space is disabled and cannot be served or modified.",
  "code": "space_disabled",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
