---
title: "config_name_too_long"
description: "The name in the space configuration exceeds its maximum length."
---

The name in the space configuration exceeds its maximum length.

**How to resolve:** Shorten the name in sf.jsonc to 255 characters or fewer.

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
  "type": "https://docs.spacefast.com/docs/errors/config_name_too_long",
  "title": "Config name too long",
  "status": 400,
  "detail": "The name in the space configuration exceeds its maximum length.",
  "code": "config_name_too_long",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
