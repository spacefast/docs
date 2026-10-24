---
title: "repository_upload_source_ineligible"
description: "This version cannot automatically initialize original uploaded source."
---

This version cannot automatically initialize original uploaded source.

**How to resolve:** Use a current ready direct static upload, or commit the original source files to Git.

<div data-pagefind-ignore>

## Error shape

Every Spacefast API error is an RFC 9457 problem document, served as
`application/problem+json`.

- `code` is stable and machine-readable.
- `type` links to this page.
- `title` is a short label.
- `status` repeats the HTTP status.
- `detail` explains this occurrence.
- `pointer`, when present, is an RFC 6901 JSON Pointer at the offending field in the request body.
- `details`, when present, carries structured context.

Match on `code`, never on `detail`.

```json
{
  "type": "https://spacefast.com/docs/errors/repository_upload_source_ineligible",
  "title": "Repository upload source ineligible",
  "status": 400,
  "detail": "This version cannot automatically initialize original uploaded source.",
  "code": "repository_upload_source_ineligible",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
