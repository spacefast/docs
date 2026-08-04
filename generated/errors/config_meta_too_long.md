---
title: "config_meta_too_long"
description: "A meta field in the space configuration exceeds its maximum length."
---

A meta field in the space configuration exceeds its maximum length.

**How to resolve:** Shorten the meta title, description, or other reported field.

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
  "type": "https://spacefast.com/docs/errors/config_meta_too_long",
  "title": "Config meta too long",
  "status": 400,
  "detail": "A meta field in the space configuration exceeds its maximum length.",
  "code": "config_meta_too_long",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
