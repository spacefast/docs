---
title: "browser_error_report_too_large"
description: "The dashboard error report is larger than the 64 KiB limit."
---

The dashboard error report is larger than the 64 KiB limit.

**How to resolve:** Send a smaller report: fewer breadcrumbs, frames, or shorter messages.

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
  "type": "https://spacefast.com/docs/errors/browser_error_report_too_large",
  "title": "Browser error report too large",
  "status": 422,
  "detail": "The dashboard error report is larger than the 64 KiB limit.",
  "code": "browser_error_report_too_large",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
