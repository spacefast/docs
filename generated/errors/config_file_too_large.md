---
title: "config_file_too_large"
description: "The sf.jsonc configuration file exceeds the maximum size."
---

The sf.jsonc configuration file exceeds the maximum size.

**How to resolve:** Keep the configuration file under the documented size limit (256 KB).

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
  "type": "https://spacefast.com/docs/errors/config_file_too_large",
  "title": "Config file too large",
  "status": 400,
  "detail": "The sf.jsonc configuration file exceeds the maximum size.",
  "code": "config_file_too_large",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
