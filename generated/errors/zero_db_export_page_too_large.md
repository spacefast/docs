---
title: "zero_db_export_page_too_large"
description: "One database export page exceeded the 16 MiB response limit."
---

One database export page exceeded the 16 MiB response limit.

**How to resolve:** Retry with a smaller export page size.

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
  "type": "https://spacefast.com/docs/errors/zero_db_export_page_too_large",
  "title": "Zero db export page too large",
  "status": 400,
  "detail": "One database export page exceeded the 16 MiB response limit.",
  "code": "zero_db_export_page_too_large",
  "requestId": "req_4mz0v8qk"
}
```

See the full list of error codes in the [error reference](/errors).

</div>
