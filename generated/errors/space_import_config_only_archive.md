---
title: "space_import_config_only_archive"
description: "The archive contains only configuration and cannot be imported as content."
---

The archive contains only configuration and cannot be imported as content.

**How to resolve:** Include files in the export, or apply the configuration directly.

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
  "type": "https://docs.spacefast.com/docs/errors/space_import_config_only_archive",
  "title": "Space import config only archive",
  "status": 400,
  "detail": "The archive contains only configuration and cannot be imported as content.",
  "code": "space_import_config_only_archive",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
