---
title: "files_mode_does_not_support_spa"
description: "SPA fallback cannot be combined with files-listing mode."
---

SPA fallback cannot be combined with files-listing mode.

**How to resolve:** Remove the SPA fallback or serve the space as a site instead of a file listing.

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
  "type": "https://spacefast.com/docs/errors/files_mode_does_not_support_spa",
  "title": "Files mode does not support spa",
  "status": 400,
  "detail": "SPA fallback cannot be combined with files-listing mode.",
  "code": "files_mode_does_not_support_spa",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
